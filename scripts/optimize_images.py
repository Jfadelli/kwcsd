"""Resize and convert source photos to web-sized WebP files.

Usage:
    python3 scripts/optimize_images.py <source-dir> [output-dir]

Put original, full-size photos in <source-dir> (keep them out of the repo),
list them in SIZES below with the widest size they are ever shown at, and run
this script. The WebP files land in src/assets/images by default.
Requires Pillow: pip install pillow
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

# source file name -> (output name, max width in px). Max width is about 2x the
# largest size the image is displayed at, so it stays sharp on retina screens.
SIZES = {
    "logo.png": ("logo.webp", 300),
    "sdskyline.png": ("hero-skyline.webp", 2048),
    "teamwork.jfif": ("teamwork.webp", 900),
    "hi-rise-bldg.jpg": ("high-rise.webp", 900),
    "mark-headshot.png": ("mark-hughes.webp", 600),
    "libby-headshot.jpg": ("libby-brignon.webp", 600),
    "sue-na-headshot.png": ("sue-na.webp", 600),
    "will-schneider-headshot.png": ("will-schneider.webp", 600),
    "peter-kim-headshot-cropped.jpg": ("peter-kim.webp", 600),
    "ncv-ariel.jpg": ("listing-mark-hughes.webp", 1200),
    "libby-loopnet-listing-photo.jpg": ("listing-libby-brignon.webp", 1200),
    "sue-na-loopnet-listing-photo.jpg": ("listing-sue-na.webp", 1200),
    "will-schneider-loopnet-listing-photo.jpg": ("listing-will-schneider.webp", 1200),
}


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1])
    out = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("src/assets/images")
    out.mkdir(parents=True, exist_ok=True)

    for name, (out_name, max_w) in SIZES.items():
        path = src / name
        if not path.exists():
            print(f"skip  {name} (not found)")
            continue
        img = ImageOps.exif_transpose(Image.open(path))
        img = img.convert("RGBA" if img.mode in ("RGBA", "LA", "P") else "RGB")
        if img.width > max_w:
            img = img.resize((max_w, round(img.height * max_w / img.width)), Image.LANCZOS)
        dest = out / out_name
        img.save(dest, "WEBP", quality=80, method=6)
        print(f"{path.stat().st_size / 1e6:6.2f} MB -> {dest.stat().st_size / 1e3:7.1f} KB  {out_name}")


if __name__ == "__main__":
    main()
