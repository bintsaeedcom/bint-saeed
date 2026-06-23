#!/usr/bin/env python3
"""Patch locale i18n files to add Indonesian (id) as 11th kw/altLoc column."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Indonesian translations for curated image alts (en source → id)
ALT_ID_BY_EN_SNIPPET: list[tuple[str, str]] = [
    (
        "Mayfair Kaftan in Deep Maroon crepe chiffon, front view",
        "Kaftan Mayfair dalam Deep Maroon crepe chiffon, tampak depan",
    ),
    (
        "Mayfair Kaftan in Deep Maroon crepe chiffon, side view",
        "Kaftan Mayfair dalam Deep Maroon crepe chiffon, tampak samping",
    ),
    (
        "Mayfair Kaftan in Deep Maroon crepe chiffon, back view",
        "Kaftan Mayfair dalam Deep Maroon crepe chiffon, tampak belakang",
    ),
    (
        "Nothing Hill Kaftan in Peach Pink chiffon, front view",
        "Kaftan Nothing Hill dalam Peach Pink chiffon, tampak depan",
    ),
    (
        "Nothing Hill Kaftan in Peach Pink chiffon, side view",
        "Kaftan Nothing Hill dalam Peach Pink chiffon, tampak samping",
    ),
    (
        "Nothing Hill Kaftan in Peach Pink chiffon, back view",
        "Kaftan Nothing Hill dalam Peach Pink chiffon, tampak belakang",
    ),
    (
        "Nothing Hill Kaftan in Peach Pink chiffon, close-up view",
        "Kaftan Nothing Hill dalam Peach Pink chiffon, tampak close-up",
    ),
    (
        "Belgravia Abaya in Deep Black, front view",
        "Abaya Belgravia dalam Deep Black, tampak depan",
    ),
    (
        "Belgravia Abaya in Deep Black, side view",
        "Abaya Belgravia dalam Deep Black, tampak samping",
    ),
    (
        "Belgravia Abaya in Deep Black, back view",
        "Abaya Belgravia dalam Deep Black, tampak belakang",
    ),
    (
        "Belgravia Abaya in Deep Black, lifestyle view. Luxury handcrafted",
        "Abaya Belgravia dalam Deep Black, tampak lifestyle. Abaya buatan tangan mewah",
    ),
    (
        "Belgravia Abaya in Deep Black, lifestyle view. Contemporary luxury outerwear",
        "Abaya Belgravia dalam Deep Black, tampak lifestyle. Outerwear mewah kontemporer",
    ),
    (
        "Belgravia Abaya in Navy Blue, front view",
        "Abaya Belgravia dalam Navy Blue, tampak depan",
    ),
    (
        "Belgravia Abaya in Navy Blue, side view",
        "Abaya Belgravia dalam Navy Blue, tampak samping",
    ),
    (
        "Belgravia Abaya in Navy Blue, back view",
        "Abaya Belgravia dalam Navy Blue, tampak belakang",
    ),
]

ID_SUFFIX_REPLACEMENTS = [
    (
        "Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a V-neckline, flowing silhouette, attached scarf detail and signature gold-tone emblem.",
        "Kaftan acara wanita mewah oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan garis leher V, siluet mengalir, detail scarf terpasang, dan emblem emas khas.",
    ),
    (
        "Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and elegant occasionwear styling.",
        "Kaftan chiffon desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan draperi fluida, konstruksi berlapis, dan gaya busana acara yang elegan.",
    ),
    (
        "Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting graceful movement, lightweight layered chiffon and refined eveningwear design.",
        "Kaftan mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan gerakan anggun, chiffon berlapis ringan, dan desain busana malam yang halus.",
    ),
    (
        "Luxury women's occasion kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a bateau neckline, flowing silhouette and signature gold-tone emblem.",
        "Kaftan acara wanita mewah oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan garis leher bateau, siluet mengalir, dan emblem emas khas.",
    ),
    (
        "Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing fluid draping, layered construction and graceful movement.",
        "Kaftan chiffon desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan draperi fluida, konstruksi berlapis, dan gerakan anggun.",
    ),
    (
        "Contemporary luxury kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting its flowing silhouette, lightweight layered chiffon and refined occasionwear design.",
        "Kaftan mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan siluet mengalir, chiffon berlapis ringan, dan desain busana acara yang halus.",
    ),
    (
        "Designer chiffon kaftan by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing soft peach pink chiffon fabric, delicate layered texture and the signature gold-tone Bint Saeed emblem pin.",
        "Kaftan chiffon desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan kain chiffon peach pink lembut, tekstur berlapis halus, dan pin emblem emas khas Bint Saeed.",
    ),
    (
        "Luxury Bisht-inspired abaya by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and an elegant open-front silhouette.",
        "Abaya mewah terinspirasi Bisht oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan trim tenun tangan yang terinspirasi tradisi tenun Khous Emirati dan siluet depan terbuka yang elegan.",
    ),
    (
        "Contemporary luxury abaya by Bint Saeed Abu Dhabi, United Arab Emirates, showcasing graceful movement, a handwoven trim inspired by the Emirati tradition of Khous weaving, and a flowing Bisht-inspired silhouette.",
        "Abaya mewah kontemporer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menampilkan gerakan anggun, trim tenun tangan terinspirasi tradisi tenun Khous Emirati, dan siluet mengalir terinspirasi Bisht.",
    ),
    (
        "Designer abaya by Bint Saeed Abu Dhabi, United Arab Emirates, highlighting clean lines, full-length drape, and a handwoven trim inspired by the Emirati tradition of Khous weaving.",
        "Abaya desainer oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menonjolkan garis bersih, drape penuh, dan trim tenun tangan terinspirasi tradisi tenun Khous Emirati.",
    ),
    (
        "by Bint Saeed Abu Dhabi, United Arab Emirates, combining a contemporary Bisht-inspired silhouette with a handwoven trim inspired by the Emirati tradition of Khous weaving.",
        "oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, menggabungkan siluet terinspirasi Bisht kontemporer dengan trim tenun tangan terinspirasi tradisi tenun Khous Emirati.",
    ),
    (
        "by Bint Saeed Abu Dhabi, United Arab Emirates, featuring a handwoven trim inspired by the Emirati tradition of Khous weaving and designed for elegant dressing across the Gulf, Europe, and beyond.",
        "oleh Bint Saeed Abu Dhabi, Uni Emirat Arab, dengan trim tenun tangan terinspirasi tradisi tenun Khous Emirati dan dirancang untuk berpakaian elegan di Teluk, Eropa, dan seterusnya.",
    ),
]


def id_keyword_from_en(en: str) -> str:
    en = en.strip()
    exact = {
        "abaya": "abaya",
        "luxury": "mewah",
        "Bisht Abaya": "Abaya Bisht",
        "Al Khous": "Al Khous",
        "BS-AB-005": "BS-AB-005",
    }
    if en in exact:
        return exact[en]

    rules = [
        (r"^Luxury (.+)$", r"Mewah \1"),
        (r"^Designer (.+)$", r"\1 desainer"),
        (r"^Handmade (.+)$", r"\1 buatan tangan"),
        (r"^Handcrafted (.+)$", r"\1 buatan tangan"),
        (r"^Premium (.+)$", r"\1 premium"),
        (r"^Contemporary (.+)$", r"\1 kontemporer"),
        (r"^Modern (.+)$", r"\1 modern"),
        (r"^Elegant (.+)$", r"\1 elegan"),
        (r"^Wedding (.+)$", r"\1 pernikahan"),
        (r"^Occasion (.+)$", r"\1 acara"),
        (r"^Travel (.+)$", r"\1 perjalanan"),
        (r"^Personalised (.+)$", r"\1 personal"),
        (r"^Custom (.+)$", r"\1 pesanan"),
        (r"^Timeless (.+)$", r"\1 abadi"),
        (r"^Open Front (.+)$", r"\1 depan terbuka"),
        (r"^International (.+)$", r"\1 internasional"),
        (r"^Unique (.+)$", r"\1 unik"),
        (r"^Special (.+)$", r"\1 spesial"),
        (r"^Beautiful (.+)$", r"\1 indah"),
        (r"^Classy (.+)$", r"\1 berkelas"),
        (r"^Nice (.+)$", r"\1 cantik"),
        (r"^Daily (.+)$", r"\1 harian"),
        (r"^Oversized (.+)$", r"\1 oversize"),
        (r"^Heritage (.+)$", r"\1 warisan"),
        (r"^Cultural (.+)$", r"\1 budaya"),
        (r"^United Arab Emirates (.+)$", r"\1 Uni Emirat Arab"),
        (r"^UAE (.+)$", r"\1 UEA"),
        (r"^Abu Dhabi (.+)$", r"\1 Abu Dhabi"),
        (r"^Dubai (.+)$", r"\1 Dubai"),
        (r"^Emirati (.+)$", r"\1 Emirati"),
        (r"^abaya in (.+)$", r"abaya di \1"),
        (r"^abaya from (.+)$", r"abaya dari \1"),
        (r"^(.+) abaya$", r"abaya \1"),
        (r"^(.+) Abaya$", r"Abaya \1"),
        (r"^modest fashion$", r"fashion modest"),
        (r"^trendy abayas$", r"abaya trendi"),
        (r"^handwoven trim abaya$", r"abaya trim tenun tangan"),
        (r"^black abaya$", r"abaya hitam"),
        (r"^luxury cape$", r"cape mewah"),
        (r"^heritage cape$", r"cape warisan"),
        (r"^cultural heritage$", r"warisan budaya"),
        (r"^abaya awards$", r"penghargaan abaya"),
        (r"^heritage design$", r"desain warisan"),
        (r"^niche abaya brand$", r"merek abaya niche"),
        (r"^new abaya brand$", r"merek abaya baru"),
        (r"^Luxury Gulf fashion$", r"fashion Teluk mewah"),
        (r"^luxury Gulf fashion$", r"fashion Teluk mewah"),
        (r"^Bisht Inspired Abaya$", r"Abaya terinspirasi Bisht"),
        (r"^Bisht-inspired Abaya$", r"Abaya terinspirasi Bisht"),
        (r"^Luxury Bisht Abaya$", r"Abaya Bisht mewah"),
        (r"^Khous Weaving$", r"Tenun Khous"),
        (r"^Al Khous weaving$", r"Tenun Al Khous"),
        (r"^Khous abaya$", r"Abaya Khous"),
        (r"^Palm Frond Weaving$", r"Tenun pelepah palem"),
        (r"^Handwoven Trim$", r"Trim tenun tangan"),
        (r"^Made in Abu Dhabi$", r"Dibuat di Abu Dhabi"),
        (r"^Belgravia Abaya$", r"Abaya Belgravia"),
        (r"^Bint Saeed Belgravia Abaya$", r"Abaya Belgravia Bint Saeed"),
        (r"^Deep Black abaya$", r"Abaya hitam pekat"),
        (r"^navy blue abaya$", r"Abaya biru navy"),
    ]
    for pattern, repl in rules:
        m = re.match(pattern, en, re.I)
        if m:
            return re.sub(pattern, repl, en, flags=re.I)
    return en


def patch_kw_helpers(content: str) -> str:
    content = content.replace(
        "  pt: string,\n): Record<AppLocale, string> {\n  return { en, ar, fr, it, es, ru, zh, de, nl, pt }",
        "  pt: string,\n  id: string,\n): Record<AppLocale, string> {\n  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id }",
    )
    content = content.replace(
        "type KwRow = [string, string, string, string, string, string, string, string, string, string]",
        "type KwRow = [string, string, string, string, string, string, string, string, string, string, string]",
    )
    content = content.replace(
        "  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt]) =>\n    kw(en, ar, fr, it, es, ru, zh, de, nl, pt),",
        "  return rows.map(([en, ar, fr, it, es, ru, zh, de, nl, pt, id]) =>\n    kw(en, ar, fr, it, es, ru, zh, de, nl, pt, id),",
    )
    return content


def patch_alt_helpers(content: str) -> str:
    content = content.replace(
        "/** Build a full locale map for one catalogue image alt (en + 9 prefix locales). */",
        "/** Build a full locale map for one catalogue image alt (en + 10 prefix locales). */",
    )
    content = content.replace(
        "  pt: string,\n): Record<AppLocale, string> {\n  return { en, ar, fr, it, es, ru, zh, de, nl, pt }",
        "  pt: string,\n  id: string,\n): Record<AppLocale, string> {\n  return { en, ar, fr, it, es, ru, zh, de, nl, pt, id }",
    )
    content = content.replace(
        " * English is the editorial source; other locales follow the same structure and tone.\n */\nconst ALT_ENTRIES",
        " * English is the editorial source; other locales follow the same structure and tone.\n * Indonesian (`id`) is required for every entry.\n */\nconst ALT_ENTRIES",
    )
    return content


def patch_kw_row_line(line: str) -> str:
    if "KwRow" in line or "rowsToKw" in line or "function kw" in line:
        return line
    m = re.match(r"^(\s*)(kw\(|const \w+ = kw\()", line)
    if m:
        if line.rstrip().endswith(", id)"):
            return line
        if line.rstrip().endswith(")"):
            inner = line.strip()
            if inner.startswith("kw("):
                args = inner[3:-1]
                parts = [p.strip().strip("'\"") for p in re.findall(r"'(?:\\.|[^'\\])*'|\"(?:\\.|[^\"\\])*\"", args)]
                if len(parts) == 10:
                    id_val = id_keyword_from_en(parts[0])
                    return f"{m.group(1)}kw({args}, '{id_val}'),"
        return line

    m = re.match(r"^(\s*)\[", line)
    if not m or line.count("'") < 20:
        return line
    if line.rstrip().endswith("],") or line.rstrip().endswith("]"):
        try:
            import ast

            row = ast.literal_eval(line.strip().rstrip(","))
            if isinstance(row, list) and len(row) == 10:
                id_val = id_keyword_from_en(row[0])
                row.append(id_val)
                indent = m.group(1)
                escaped = ", ".join(repr(x) for x in row)
                suffix = "," if line.rstrip().endswith(",") else ""
                return f"{indent}{escaped}{suffix}\n"
        except Exception:
            pass
    return line


def build_id_alt(en: str) -> str:
    for snippet, prefix in ALT_ID_BY_EN_SNIPPET:
        if en.startswith(snippet):
            rest = en[len(snippet) :].lstrip(". ")
            out = prefix
            for eng_suffix, id_suffix in ID_SUFFIX_REPLACEMENTS:
                if rest.startswith(eng_suffix) or eng_suffix in rest:
                    if rest.startswith("."):
                        out += ". " + id_suffix
                    else:
                        out += ". " + id_suffix
                    return out
            if rest:
                out += ". " + rest
            return out
    return en


def patch_altloc_call(content: str) -> str:
    def repl(match: re.Match[str]) -> str:
        block = match.group(0)
        if ",\n      '" in block and block.count("',") >= 10:
            strings = re.findall(r"'(?:\\.|[^'\\])*'", block)
            if len(strings) == 10:
                en = strings[0][1:-1].encode().decode("unicode_escape")
                id_alt = build_id_alt(en)
                id_escaped = id_alt.replace("\\", "\\\\").replace("'", "\\'")
                return block.rstrip(")") + f",\n      '{id_escaped}',\n    )"
        return block

    return re.sub(r"altLoc\(\n(?:\s+'(?:\\.|[^'\\])*',?\n){10}\s*\)", repl, content, flags=re.M)


def patch_file(path: Path, mode: str) -> None:
    text = path.read_text(encoding="utf-8")
    original = text
    if mode == "kw":
        text = patch_kw_helpers(text)
        lines = [patch_kw_row_line(l) for l in text.splitlines(keepends=True)]
        text = "".join(lines)
    elif mode == "alt":
        text = patch_alt_helpers(text)
        text = patch_altloc_call(text)
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"patched {path.relative_to(ROOT)}")


def add_id_to_record_maps(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    if "id:" in text and "Record<AppLocale" in text:
        return

    # Append `id` key after `pt:` lines inside Record<AppLocale, string> blocks using English mirror
    def repl_pt_line(m: re.Match[str]) -> str:
        indent = m.group(1)
        en_line = None
        # find en: in same block - simplistic: use pt value as base for id when no better
        val = m.group(2)
        # For Indonesian schema strings, mirror English from same Record - look back for en:
        return f"{m.group(0)}\n{indent}id: {val},"

    # Only patch simple single-line Record entries: `pt: '...',` without existing id
    if "pt:" in text and "\n  id:" not in text:
        pass  # handled manually for complex files


def main() -> int:
    kw_files = [
        ROOT / "lib/products/abayaSchemaKeywordsI18n.ts",
        ROOT / "lib/products/belgraviaSchemaKeywordsI18n.ts",
        ROOT / "lib/products/optimisedKeywordsI18n.ts",
        ROOT / "lib/products/schemaAugmentKeywordsI18n.ts",
    ]
    for f in kw_files:
        if f.exists():
            patch_file(f, "kw")

    patch_file(ROOT / "lib/products/imageAltOverridesI18n.ts", "alt")

  # imageAltI18n uses altLoc from overrides - patch separately
    alt_i18n = ROOT / "lib/products/imageAltI18n.ts"
    if alt_i18n.exists():
        text = alt_i18n.read_text(encoding="utf-8")
        if "id: string," not in text:
            text = text.replace(
                "import { altLoc } from '@/lib/products/imageAltOverridesI18n'",
                "import { altLoc } from '@/lib/products/imageAltOverridesI18n'",
            )
            text = patch_alt_helpers(text)
            # patch inline altLoc calls - add id as copy of en with Indonesian for brand geo
            text = re.sub(
                r"(altLoc\(\n(?:\s+'(?:\\.|[^'\\])*',?\n){9}\s*'(?:\\.|[^'\\])*',\n\s*\))",
                lambda m: m.group(1).replace(
                    ")",
                    ",\n  'PLACEHOLDER_ID',\n)",
                ),
                text,
                flags=re.M,
            )
        alt_i18n.write_text(text, encoding="utf-8")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
