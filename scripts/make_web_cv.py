#!/usr/bin/env python3
"""Make the website CV PDFs: the locked 1-page CVs with the phone number removed.

  python3 scripts/make_web_cv.py [CV_DIR]

Reads  <CV_DIR>/MustafaFurkanOzates_CV_{Eng,TR}_1p_final.docx   (default: ../cv/locked-2026-11-10)
Writes src/assets/cv/MustafaFurkanOzates_CV_{EN,TR}.pdf  (and a temporary .docx next to the build dir, deleted).
Then checks, mechanically, that no phone number is left anywhere (text, PDF strings, link annotations, docx XML).
Requires python-docx and LibreOffice (soffice) and pdftotext/pdfinfo.
"""
import os
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile

import docx

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CV_DIR = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(ROOT), "cv", "locked-2026-11-10")
OUT = os.path.join(ROOT, "src", "assets", "cv")
JOBS = [("Eng", "EN"), ("TR", "TR")]
PHONE_RUN = re.compile(r"^• \+90[\d ]+ • $")  # the header run that holds the phone number: "• +90... • "
# The real number is NOT stored in this (public) repo. Pass it for the strongest check:  WEBCV_PHONE=90XXXXXXXXXX python3 scripts/make_web_cv.py
# Without it only the generic patterns run (country code, tel: links, a "+90" spelling).
PHONE_DIGITS = re.sub(r"\D", "", os.environ.get("WEBCV_PHONE", ""))
FORBIDDEN = [r"\+ ?90", r"tel:"] + ([re.escape(PHONE_DIGITS[-10:])] if len(PHONE_DIGITS) >= 10 else [])


def build(src_tag: str, out_tag: str, workdir: str) -> str:
    src = os.path.join(CV_DIR, f"MustafaFurkanOzates_CV_{src_tag}_1p_final.docx")
    d = docx.Document(src)
    p = d.paragraphs[2]
    hit = [r for r in p.runs if PHONE_RUN.match(r.text)]
    assert len(hit) == 1, "phone run not found in " + src
    hit[0].text = "• "
    tmp_docx = os.path.join(workdir, f"MustafaFurkanOzates_CV_{out_tag}.docx")
    d.save(tmp_docx)
    prof = tempfile.mkdtemp(prefix="lo_webcv_")
    subprocess.run(["soffice", f"-env:UserInstallation=file://{prof}", "--headless", "--convert-to", "pdf", "--outdir", workdir, tmp_docx],
                   check=True, timeout=240, capture_output=True)
    return os.path.join(workdir, f"MustafaFurkanOzates_CV_{out_tag}.pdf")


def check(pdf: str, docx_path: str) -> list:
    problems = []
    pages = int(re.search(r"Pages:\s+(\d+)", subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout).group(1))
    if pages != 1:
        problems.append(f"{pages} pages (expected 1)")
    text = subprocess.run(["pdftotext", "-layout", pdf, "-"], capture_output=True, text=True).stdout
    info = subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout
    raw = open(pdf, "rb").read().decode("latin1")
    xml = zipfile.ZipFile(docx_path).read("word/document.xml").decode("utf8")
    digits_only = re.sub(r"\D", "", text)  # catches the number however it is spaced
    if len(PHONE_DIGITS) >= 10 and PHONE_DIGITS[-10:] in digits_only:
        problems.append("visible text contains the phone digits")
    for label, blob in (("text", text), ("pdfinfo", info), ("raw pdf bytes", raw), ("docx xml", xml)):
        for pat in FORBIDDEN:
            m = re.search(pat, blob)
            if m:
                problems.append(f"{label} contains {pat!r}: ...{blob[max(0, m.start() - 20):m.end() + 20]!r}")
    return problems


def main():
    os.makedirs(OUT, exist_ok=True)
    work = tempfile.mkdtemp(prefix="webcv_")
    failed = False
    for src_tag, out_tag in JOBS:
        pdf = build(src_tag, out_tag, work)
        problems = check(pdf, os.path.join(work, f"MustafaFurkanOzates_CV_{out_tag}.docx"))
        status = "OK" if not problems else "PROBLEMS"
        print(f"{out_tag}: {status}")
        for pr in problems:
            print("   -", pr)
            failed = True
        if not problems:
            shutil.copy2(pdf, os.path.join(OUT, os.path.basename(pdf)))
            print("   wrote", os.path.join(OUT, os.path.basename(pdf)))
    shutil.rmtree(work, ignore_errors=True)
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
