"""Build this site's Pretendard subset.

Run from the repository root, with fonttools and brotli installed:

    PRETENDARD_SRC=/path/to/PretendardVariable.woff2 python tools/build-fonts.py

It reads every character that can appear on the page out of src/**/*.{ts,tsx}
and cuts Pretendard down to exactly that set, as a variable WOFF2 — the same
approach SOOM uses (see soom/tools/build-fonts.py), applied to this site's own
content. SOOM's subset only covers SOOM's copy, not this one, so the two are
never interchangeable.

If a copy edit introduces a character that is not in the subset, it falls
through to 'Pretendard Fallback' — the system stack next/font/local generates
— so nothing breaks; it just renders in the OS Korean face until this script
is run again.
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.environ.get("PRETENDARD_SRC", "")
OUT = os.path.join(ROOT, "src", "app", "fonts", "pretendard", "PretendardVariable.portfolio.woff2")
SCAN_DIR = os.path.join(ROOT, "src")

EXTRA = (
    "0123456789"
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    "abcdefghijklmnopqrstuvwxyz"
    " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    " ·×–—‘’“”…•"
    "°®™₩→←±"
    "가힣"
)


def collect():
    chars = set(EXTRA)
    for dirpath, _dirnames, filenames in os.walk(SCAN_DIR):
        if "fonts" in dirpath.split(os.sep):
            continue
        for name in filenames:
            if not (name.endswith(".ts") or name.endswith(".tsx")):
                continue
            path = os.path.join(dirpath, name)
            with open(path, encoding="utf-8") as f:
                chars |= set(f.read())
    return {c for c in chars if ord(c) >= 0x20 or c in "\n"} - set("\n\r\t")


def main():
    try:
        from fontTools import subset
    except ImportError:
        sys.exit("fonttools is required: pip install fonttools brotli")

    if not SRC or not os.path.exists(SRC):
        sys.exit("source font not found. Set PRETENDARD_SRC to PretendardVariable.woff2 (full, unsubset).")

    chars = collect()
    text = "".join(sorted(chars))
    print("glyphs requested: %d" % len(chars))

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    args = [
        SRC,
        "--output-file=" + OUT,
        "--flavor=woff2",
        "--text=" + text,
        "--layout-features=kern,liga,calt,ccmp,locl",
        "--no-hinting",
        "--desubroutinize",
        "--drop-tables+=DSIG",
        "--name-IDs=*",
        "--notdef-outline",
    ]
    subset.main(args)
    print("wrote %s (%.1f KB)" % (OUT, os.path.getsize(OUT) / 1024))


if __name__ == "__main__":
    main()
