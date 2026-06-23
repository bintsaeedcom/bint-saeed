#!/usr/bin/env python3
"""Insert id: lines into Loc objects missing id in routePageMetaDescriptions.ts."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "lib/seo/routePageMetaDescriptions.ts"

REPL = [
    ("United Arab Emirates", "Uni Emirat Arab"),
    ("luxury abayas", "abaya mewah"),
    ("luxury abaya", "abaya mewah"),
    ("Luxury abayas", "Abaya mewah"),
    ("Luxury abaya", "Abaya mewah"),
    ("heritage-led", "berbasis warisan"),
    ("Heritage-led", "Berbasis warisan"),
    ("jewellery", "perhiasan"),
    ("lifestyle", "lifestyle"),
    ("made to order", "dibuat sesuai pesanan"),
    ("Shop ", "Belanja "),
    ("shop ", "belanja "),
    ("About ", "Tentang "),
    ("Contact ", "Kontak "),
    ("shipping", "pengiriman"),
    ("Shipping", "Pengiriman"),
    ("delivery", "pengiriman"),
    ("Delivery", "Pengiriman"),
    ("UAE", "UEA"),
]


def id_from_en(en: str) -> str:
    s = en.strip()
    for a, b in REPL:
        s = s.replace(a, b)
    return s


def main() -> None:
    text = TARGET.read_text(encoding="utf-8")
    # Split into Loc object chunks: `{ en: ... pt: '...', }` or `pt:\n  '...',`
    pattern = re.compile(
        r"(?P<indent>\n    )(?P<key>\w+): \{\n"
        r"(?P<body>(?:(?!^\n    \w+: \{).)*?)"
        r"(?P<indent2>    pt:\n(?:      '[^']*'|      \"[^\"]*\"),\n)"
        r"(?!\n      id:)",
        re.MULTILINE | re.DOTALL,
    )

    def repl(m: re.Match[str]) -> str:
        body = m.group("body")
        en_m = re.search(
            r"en:\n      '((?:\\'|[^'])*)'",
            body,
        ) or re.search(r'en:\n      "((?:\\"|[^"])*)"', body)
        if not en_m:
            en_m = re.search(r"en:\n      '((?:\\'|[^'])*)'", m.group(0))
        en = en_m.group(1) if en_m else ""
        id_val = id_from_en(en).replace("'", "\\'")
        return (
            f"{m.group('indent')}{m.group('key')}: {{\n"
            f"{body}"
            f"{m.group('indent2')}"
            f"    id:\n      '{id_val}',\n"
        )

    new_text, n = pattern.subn(repl, text)
    if n:
        TARGET.write_text(new_text, encoding="utf-8")
        print(f"patched {n} blocks")
    else:
        print("no blocks patched")


if __name__ == "__main__":
    main()
