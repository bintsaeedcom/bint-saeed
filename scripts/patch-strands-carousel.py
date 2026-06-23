#!/usr/bin/env python3
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "app/strands/page.tsx"
text = path.read_text()

open_lines = [
    '        <motionHeroMarquee />',
]
