#!/usr/bin/env python3
"""Insert `id:` entries into Record<AppLocale, …> maps (after `pt:`) using English source."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

ID_STRING_MAP = {
    "A contemporary fashion house from Abu Dhabi devoted to evolving lifestyles.": "Rumah mode kontemporer dari Abu Dhabi yang berdedikasi pada gaya hidup yang terus berkembang.",
    "Weddings, Eid, celebrations, dinners, travel, gatherings and everyday elegance": "Pernikahan, Id, perayaan, makan malam, perjalanan, pertemuan, dan keanggunan sehari-hari",
    "Contemporary women seeking luxury fashion, refined dressing and evolving lifestyles from Abu Dhabi, UAE": "Wanita kontemporer yang mencari fashion mewah, berpakaian halus, dan gaya hidup berkembang dari Abu Dhabi, UEA",
    "Frequently Asked Questions": "Pertanyaan yang Sering Diajukan",
    "Find answers to common questions": "Temukan jawaban untuk pertanyaan umum",
    "Questions? Email us at": "Ada pertanyaan? Email kami di",
}


def id_from_en(en: str) -> str:
    en = en.strip()
    if en in ID_STRING_MAP:
        return ID_STRING_MAP[en]
  # light-touch replacements for schema/meta lines
    s = en
    s = s.replace("United Arab Emirates", "Uni Emirat Arab")
    s = s.replace("Abu Dhabi", "Abu Dhabi")
    s = s.replace("luxury", "mewah")
    s = s.replace("Luxury", "Mewah")
    s = s.replace("Designer", "Desainer")
    s = s.replace("Contemporary", "Kontemporer")
    s = s.replace("Heritage", "Warisan")
    s = s.replace("Made in", "Dibuat di")
    s = s.replace("Shop", "Belanja")
    s = s.replace("Collection", "Koleksi")
    s = s.replace("About", "Tentang")
    s = s.replace("Contact", "Kontak")
    return s


def patch_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if "\n  id:" in text and "Record<AppLocale" in text:
        # still patch lines missing id in multi-record files
        pass
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    changed = False
    i = 0
    en_in_block: str | None = None
    depth = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if "{" in line:
            depth += line.count("{") - line.count("}")
        if "}" in line:
            depth -= line.count("}") - line.count("{")
        m_en = re.match(r"\s+en:\s+'((?:\\'|[^'])*)'", line) or re.match(r'\s+en:\s+"((?:\\"|[^"])*)"', line)
        if m_en:
            en_in_block = m_en.group(1).encode().decode("unicode_escape")
        m_pt = re.match(r"(\s+)pt:\s+'((?:\\'|[^'])*)',?\s*$", line) or re.match(
            r'(\s+)pt:\s+"((?:\\"|[^"])*)",?\s*$', line
        )
        if m_pt:
            out.append(line)
            indent = m_pt.group(1)
            j = i + 1
            while j < len(lines) and lines[j].strip() == "":
                out.append(lines[j])
                j += 1
            if j < len(lines) and lines[j].lstrip().startswith("id:"):
                i += 1
                continue
            source = en_in_block or m_pt.group(2)
            id_val = id_from_en(source)
            id_esc = id_val.replace("\\", "\\\\").replace("'", "\\'")
            out.append(f"{indent}id: '{id_esc}',\n")
            changed = True
            i += 1
            continue
        out.append(line)
        i += 1
    if changed:
        path.write_text("".join(out), encoding="utf-8")
        print(f"patched {path.relative_to(ROOT)}")
    return changed


def main() -> None:
    targets = list((ROOT / "lib").rglob("*.ts"))
    targets += list((ROOT / "app").rglob("*.ts"))
    targets += list((ROOT / "app").rglob("*.tsx"))
    for p in sorted(set(targets)):
        if "node_modules" in str(p):
            continue
        try:
            patch_file(p)
        except Exception as e:
            print(f"skip {p}: {e}")


if __name__ == "__main__":
    main()
