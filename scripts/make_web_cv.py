#!/usr/bin/env python3
"""Make the website CV PDFs: the locked 2-page CVs, stripped for public use.

  python3 scripts/make_web_cv.py [CV_DIR]

Reads  <CV_DIR>/MustafaFurkanOzates_CV_{Eng,TR}_2p_final.docx   (default: ../cv/locked-2026-11-10; never modified)
Writes src/assets/cv/MustafaFurkanOzates_CV_{EN,TR}.pdf  (a temporary .docx lives in a temp dir, deleted).

Removed from the public copy (found by structure, not by private strings):
  - the phone number run in the header
  - every unreleased project entry (header line + bullet), found by its header link: the link
    patterns are private and live in content/private/webcv-unreleased.txt (git-ignored)
  - every mailto link that is not one of Furkan's own two addresses (professors), with the surrounding " (...)"
  - the References / Referanslar block (heading to the end, plus the spacer before it)
  - every hyperlink relationship that is no longer used

Then checks, mechanically, that nothing private is left (text, PDF strings, metadata, link annotations, docx XML and rels).
Output is written only if every check passes. Requires python-docx, pypdf, LibreOffice (soffice) and pdftotext/pdfinfo.
"""
import os
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile
from urllib.parse import urlparse

import docx
import pypdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CV_DIR = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(ROOT), "cv", "locked-2026-11-10")
OUT = os.path.join(ROOT, "src", "assets", "cv")
GUARD_FILE = os.path.join(ROOT, "content", "private", "guard-words.txt")  # git-ignored on purpose; read at runtime only
UNRELEASED_FILE = os.path.join(ROOT, "content", "private", "webcv-unreleased.txt")  # same: one link pattern per line
JOBS = [("Eng", "EN"), ("TR", "TR")]
OWN_EMAILS = {"furkan.ozates@gmail.com", "furkan.ozates@metu.edu.tr"}
PHONE_RUN = re.compile(r"^• \+90[\d ]+ • $")  # the header run that holds the phone number
REFERENCES_HEADINGS = {"References", "Referanslar"}
ALLOWED_HOSTS = ("github.com", "www.linkedin.com", "furkanzt.github.io")  # plus *.kutie.workers.dev
ALLOWED_WORDS = {"impass"}  # guard words that may appear in the PDFs
EMAIL = re.compile(r"[\w.+-]+@[\w-]+(?:\.[\w-]+)+")
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
R_ID = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"


def read_lines(path):
    """Non-empty lines of a private list ("#" starts a comment). Missing file = stop."""
    if not os.path.exists(path):
        sys.exit(f"missing {path} (private, git-ignored): see the docstring")
    out = []
    for line in open(path, encoding="utf-8"):
        line = line.split("#", 1)[0].strip()
        if line:
            out.append(line)
    return out


def para_links(p):
    """The hyperlink elements of a paragraph with their target URLs."""
    return [(h, p.part.rels[h.get(R_ID)].target_ref) for h in p._p.findall(W + "hyperlink") if h.get(R_ID)]


def is_foreign_mailto(url: str) -> bool:
    return url.lower().startswith("mailto:") and url[7:].lower() not in OWN_EMAILS


def run_text(r):
    return "".join(t.text or "" for t in r.findall(W + "t"))


def set_run_text(r, text):
    ts = r.findall(W + "t")
    ts[0].text = text
    ts[0].set("{http://www.w3.org/XML/1998/namespace}space", "preserve")
    for t in ts[1:]:
        r.remove(t)


def strip_foreign_mailtos(p) -> int:
    """Drop every non-own mailto link in a paragraph and fix the punctuation around it.

    "Name (link)"  ->  "Name"       (the " (" before and the ")" after go)
    "..., link)."  ->  "...)."      (the ", " before goes, the ")" stays)
    """
    n = 0
    for h, url in para_links(p):
        if not is_foreign_mailto(url):
            continue
        prev, nxt = h.getprevious(), h.getnext()
        prev_t = run_text(prev) if prev is not None and prev.tag == W + "r" else None
        nxt_t = run_text(nxt) if nxt is not None and nxt.tag == W + "r" else None
        assert prev_t is not None and nxt_t is not None, "unexpected link neighbours"
        if prev_t.endswith(" ("):
            assert nxt_t.startswith(")"), "unexpected text after link"
            set_run_text(prev, prev_t[:-2])
            set_run_text(nxt, nxt_t[1:])
        elif prev_t.endswith(", "):
            set_run_text(prev, prev_t[:-2])
        else:
            raise AssertionError("unexpected text before link")
        h.getparent().remove(h)
        n += 1
    return n


def phone_digits_of(d) -> str:
    """The phone digits, read from the source header run; kept in memory only."""
    hit = [r for r in d.paragraphs[2].runs if PHONE_RUN.match(r.text)]
    assert len(hit) == 1, "phone run not found"
    return re.sub(r"\D", "", hit[0].text)


def strip_doc(d):
    # 1. phone run in the header
    hit = [r for r in d.paragraphs[2].runs if PHONE_RUN.match(r.text)]
    assert len(hit) == 1, "phone run not found"
    hit[0].text = "• "
    # 2. Unreleased project entries: each project header whose link matches a private pattern,
    #    and the bullet after it
    for pattern in read_lines(UNRELEASED_FILE):
        heads = [p for p in d.paragraphs if any(pattern in u for _, u in para_links(p))]
        assert len(heads) == 1, "an unreleased project header was not found exactly once"
        bullet = heads[0]._p.getnext()
        assert bullet.tag == W + "p" and not bullet.findall(W + "hyperlink"), "unexpected entry layout"
        heads[0]._p.getparent().remove(bullet)
        heads[0]._p.getparent().remove(heads[0]._p)
    # 3. References block: heading to the end of the body, plus the spacer paragraph before it
    head = [p for p in d.paragraphs if p.text.strip() in REFERENCES_HEADINGS]
    assert len(head) == 1, "references heading not found"
    h = head[0]._p
    spacer = h.getprevious()
    assert spacer.tag == W + "p" and not "".join(spacer.itertext()).strip(), "no spacer before references"
    body = h.getparent()
    drop = [h]
    nxt = h.getnext()
    while nxt is not None and nxt.tag != W + "sectPr":
        drop.append(nxt)
        nxt = nxt.getnext()
    for el in [spacer] + drop:
        body.remove(el)
    # 4. professors' emails
    n = sum(strip_foreign_mailtos(p) for p in d.paragraphs)
    assert n >= 5, f"expected professor links, removed {n}"
    # 5. hyperlink relationships no longer used
    xml = d.element.xml
    for rid, rel in list(d.part.rels.items()):
        if rel.reltype.endswith("/hyperlink") and f'"{rid}"' not in xml:
            del d.part.rels[rid]


def build(src_tag: str, out_tag: str, workdir: str):
    src = os.path.join(CV_DIR, f"MustafaFurkanOzates_CV_{src_tag}_2p_final.docx")
    d = docx.Document(src)
    phone = phone_digits_of(d)
    strip_doc(d)
    tmp_docx = os.path.join(workdir, f"MustafaFurkanOzates_CV_{out_tag}.docx")
    d.save(tmp_docx)
    prof = tempfile.mkdtemp(prefix="lo_webcv_")
    subprocess.run(["soffice", f"-env:UserInstallation=file://{prof}", "--headless", "--convert-to", "pdf", "--outdir", workdir, tmp_docx],
                   check=True, timeout=240, capture_output=True)
    shutil.rmtree(prof, ignore_errors=True)
    return os.path.join(workdir, f"MustafaFurkanOzates_CV_{out_tag}.pdf"), tmp_docx, phone


def guard_words():
    # The private word list is required: without it the check would pass by checking nothing.
    return [w.lower() for w in read_lines(GUARD_FILE) if w.lower() not in ALLOWED_WORDS]


def check(pdf: str, docx_path: str, phone: str) -> list:
    problems = []
    info = subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout
    pages = int(re.search(r"Pages:\s+(\d+)", info).group(1))
    if pages != 2:
        problems.append(f"{pages} pages (expected 2)")
    text = subprocess.run(["pdftotext", "-layout", pdf, "-"], capture_output=True, text=True).stdout
    raw = open(pdf, "rb").read().decode("latin1")
    z = zipfile.ZipFile(docx_path)
    xml = z.read("word/document.xml").decode("utf8")
    rels = z.read("word/_rels/document.xml.rels").decode("utf8")
    # link annotations
    uris = []
    for page in pypdf.PdfReader(pdf).pages:
        for a in page.get("/Annots") or []:
            uri = (a.get_object().get("/A") or {}).get("/URI")
            if uri:
                uris.append(str(uri))
    annots = "\n".join(uris)
    blobs = (("text", text), ("pdfinfo", info), ("raw pdf bytes", raw), ("link annotations", annots), ("docx xml", xml), ("docx rels", rels))
    digits = phone[-10:]
    for label, blob in blobs:
        if re.search(r"\+ ?90|tel:", blob, re.I):
            problems.append(f"{label} contains a phone marker (+90 / tel:)")
        if len(digits) >= 10 and digits in re.sub(r"\D", "", blob):
            problems.append(f"{label} contains the phone digits")
        for m in EMAIL.findall(blob):
            if m.lower() not in OWN_EMAILS:
                problems.append(f"{label} contains a foreign email address")
        low = blob.lower()
        for w in guard_words():
            if w in low:
                problems.append(f"{label} contains a guard word (see guard-words.txt, line {guard_words().index(w) + 1})")
        # in the docx XML only visible text counts: sectPr legitimately has <w:footerReference>
        visible = " ".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", blob)).lower() if label == "docx xml" else low
        if re.search(r"referans|reference", visible):
            problems.append(f"{label} contains 'reference'")
    for u in uris:
        parsed = urlparse(u)
        if parsed.scheme == "mailto":
            if parsed.path.lower() not in OWN_EMAILS:
                problems.append("a mailto annotation is not one of the two own addresses")
        elif parsed.hostname not in ALLOWED_HOSTS and not (parsed.hostname or "").endswith(".kutie.workers.dev"):
            problems.append(f"link annotation host not allowed: {parsed.hostname}")
    return problems


def page_one_end(pdf: str) -> str:
    def lines(n):
        t = subprocess.run(["pdftotext", "-layout", "-f", str(n), "-l", str(n), pdf, "-"], capture_output=True, text=True).stdout
        return [ln.strip() for ln in t.splitlines() if ln.strip()]
    p1, p2 = lines(1), lines(2)
    return f"page 1 ends: {p1[-2][:70]!r} | page 2 starts: {p2[0][:70]!r}"


def main():
    os.makedirs(OUT, exist_ok=True)
    work = tempfile.mkdtemp(prefix="webcv_")
    failed = False
    for src_tag, out_tag in JOBS:
        pdf, tmp_docx, phone = build(src_tag, out_tag, work)
        problems = check(pdf, tmp_docx, phone)
        print(f"{out_tag}: {'OK' if not problems else 'PROBLEMS'}")
        for pr in sorted(set(problems)):
            print("   -", pr)
            failed = True
        if not problems:
            print("  ", page_one_end(pdf))
            shutil.copy2(pdf, os.path.join(OUT, os.path.basename(pdf)))
            print("   wrote", os.path.join(OUT, os.path.basename(pdf)))
    shutil.rmtree(work, ignore_errors=True)
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
