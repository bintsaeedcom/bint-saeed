#!/usr/bin/env python3
"""Add `id:` to multi-line Loc blocks (en/pt on separate lines) in routePageMetaDescriptions."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "lib/seo/routePageMetaDescriptions.ts"

REPL = [
    ("United Arab Emirates", "Uni Emirat Arab"),
    ("luxury abaya", "abaya mewah"),
    ("Luxury abaya", "Abaya mewah"),
    ("luxury abayas", "abaya mewah"),
    ("luxury", "mewah"),
    ("Luxury", "Mewah"),
    ("Abu Dhabi", "Abu Dhabi"),
    ("heritage-led", "berbasis warisan"),
    ("Heritage-led", "Berbasis warisan"),
    ("Shop", "Belanja"),
    ("shop", "belanja"),
    ("About", "Tentang"),
    ("Contact", "Kontak"),
    ("FAQ", "FAQ"),
    ("delivery", "pengiriman"),
    ("Delivery", "Pengiriman"),
    ("shipping", "pengiriman"),
    ("Shipping", "Pengiriman"),
    ("jewellery", "perhiasan"),
    ("lifestyle", "lifestyle"),
    ("kaftans", "kaftan"),
    ("dresses", "gaun"),
    ("made to order", "dibuat sesuai pesanan"),
    ("GCC", "GCC"),
    ("UAE", "UEA"),
]


def id_from_en(en: str) -> str:
    s = en.strip()
    for a, b in REPL:
        s = s.replace(a, b)
    return s


def main() -> None:
    text = TARGET.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    changed = 0
    while i < len(lines):
        line = lines[i]
        m_en = re.match(r"\s+en:\s*$", line)
        if m_en:
            indent = re.match(r"(\s+)", line).group(1)
            j = i + 1
            en_lines: list[str] = []
            while j < len(lines) and not re.match(r"\s+(ar|fr|it|es|ru|zh|de|nl|pt|id):\s*$", lines[j]):
                en_lines.append(lines[j])
                j += 1
            en_text = "".join(en_lines).strip().strip("'").strip('"')
            out.append(line)
            out.extend(en_lines)
            i = j
            # skip until pt block ends
            while i < len(lines):
                out.append(lines[i])
                if re.match(r"\s+pt:\s*$", lines[i]):
                    i += 1
                    pt_lines: list[str] = []
                    while i < len(lines) and not re.match(r"\s+\w+:\s*$", lines[i]) and not re.match(r"\s+\},?\s*$", lines[i]):
                        pt_lines.append(lines[i])
                        i += 1
                    out.extend(pt_lines)
                    # peek if id already next
                    if i < len(lines) and re.match(r"\s+id:\s*$", lines[i]):
                        continue
                    id_text = id_from_en(en_text)
                    out.append(f"{indent}id:\n")
                    out.append(f"{indent}  '{id_text.replace(chr(39), chr(92)+chr(39))}',\n")
                    changed += 1
                    break
                if re.match(r"\s+\},?\s*$", lines[i]) or (re.match(r"\s+\w+:\s*$", lines[i]) and "pt:" not in lines[i]):
                    i += 1
                    break
                i += 1
            continue
        out.append(line)
        i += 1
    if changed:
        TARGET.write_text("".join(out), encoding="utf-8")
        print(f"patched {changed} Loc blocks in {TARGET.name}")


if __name__ == "__main__":
    main()
