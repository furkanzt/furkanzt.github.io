#!/usr/bin/env python3
"""Render furkanzt.github.io into docs/ from content/site.json.

Run from the repo root:  python3 build.py
Writes docs/index.html, docs/en/index.html, docs/tr/index.html, docs/assets/*, docs/.nojekyll.
Standard library only. The Turkish and English text is real HTML in each page (not injected
by JavaScript), so link previews and no-JS visitors get the right language.
"""
import html
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "docs"

PAGES = [
    # (relative output path, lang rendered into the raw HTML, forced lang, path prefix back to the root)
    ("index.html", "en", "", ""),
    ("en/index.html", "en", "en", "../"),
    ("tr/index.html", "tr", "tr", "../"),
]
OG_LOCALE = {"en": "en_US", "tr": "tr_TR"}


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def contacts_html(site: dict, strings: dict) -> str:
    rows = []
    for mail in site["contacts"]["emails"]:
        label = strings[mail["label_key"]]
        spelled = f'{mail["user"]} [at] {mail["domain"]}'
        rows.append(
            f'        <li><span class="label" data-k="{mail["label_key"]}">{esc(label)}</span>'
            f'<a href="#" data-mail-user="{esc(mail["user"])}" data-mail-domain="{esc(mail["domain"])}">{esc(spelled)}</a></li>'
        )
    for key, url_key, shown in (
        ("label_linkedin", "linkedin", "linkedin.com/in/furkanzt"),
        ("label_github", "github", "github.com/furkanzt"),
    ):
        rows.append(
            f'        <li><span class="label" data-k="{key}">{esc(strings[key])}</span>'
            f'<a href="{esc(site["contacts"][url_key])}" rel="noopener">{esc(shown)}</a></li>'
        )
    return "\n".join(rows)


def render(template: str, site: dict, rel_path: str, lang: str, force: str, back: str) -> str:
    strings = site["strings"][lang]
    other = "tr" if lang == "en" else "en"
    canonical = site["origin"] + "/" + rel_path.removesuffix("index.html")
    # JSON for the in-page toggle; "</" is escaped so it cannot close the script tag.
    i18n = json.dumps(site["strings"], ensure_ascii=False).replace("</", "<\\/")
    values = {
        "lang": lang,
        "force": force,
        "title": esc(strings["title"]),
        "description": esc(strings["description"]),
        "canonical": esc(canonical),
        "origin": esc(site["origin"]),
        "og_locale": OG_LOCALE[lang],
        "og_locale_alt": OG_LOCALE[other],
        "assets": back + "assets/",
        "rel": back,
        "toggle_label": esc(strings["toggle_label"]),
        "en_pressed": "true" if lang == "en" else "false",
        "tr_pressed": "true" if lang == "tr" else "false",
        "name": esc(site["name"]),
        "headline": esc(strings["headline"]),
        "availability": esc(strings["availability"]),
        "status_title": esc(strings["status_title"]),
        "status_body": esc(strings["status_body"]),
        "location": esc(strings["location"]),
        "contacts": contacts_html(site, strings),
        "i18n_json": i18n,
    }
    page = template
    for key, value in values.items():
        page = page.replace("{{" + key + "}}", value)
    leftover = [part for part in page.split("{{")[1:]]
    if leftover:
        raise SystemExit(f"unreplaced placeholder in {rel_path}: {{{{{leftover[0][:30]}")
    return page


def main() -> None:
    site = json.loads((ROOT / "content" / "site.json").read_text(encoding="utf-8"))
    template = (ROOT / "src" / "page.html").read_text(encoding="utf-8")

    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "assets").mkdir(parents=True)
    for asset in (ROOT / "src" / "assets").iterdir():
        shutil.copy2(asset, OUT / "assets" / asset.name)
    (OUT / ".nojekyll").write_text("", encoding="utf-8")

    for rel_path, lang, force, back in PAGES:
        target = OUT / rel_path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(render(template, site, rel_path, lang, force, back), encoding="utf-8")
        print(f"wrote docs/{rel_path}  (raw language: {lang}, forced: {force or 'no'})")


if __name__ == "__main__":
    main()
