# ヒーロー画像 public/hero-brand.jpg の生成スクリプト
# 使い方: python3 scripts/generate-hero.py  (要 Pillow: pip3 install pillow)
# 構成: 深緑グラデーション + 「お皿」の同心円リング + 実店舗写真3枚を円形配置。
# 文字は焼き込まない(コピーはHTML側でオーバーレイする)。
import os

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
S = 2  # supersample factor
W, H = 2400 * S, 1350 * S

TOP = (47, 98, 87)      # #2f6257
BOTTOM = (27, 41, 37)   # #1b2925

img = Image.new("RGB", (W, H), TOP)
draw = ImageDraw.Draw(img)
for y in range(H):
    t = y / (H - 1)
    r = round(TOP[0] + (BOTTOM[0] - TOP[0]) * t)
    g = round(TOP[1] + (BOTTOM[1] - TOP[1]) * t)
    b = round(TOP[2] + (BOTTOM[2] - TOP[2]) * t)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
odraw = ImageDraw.Draw(overlay)

CX, CY = int(W * 0.66), int(H * 0.44)

for i, radius in enumerate(range(190 * S, 1080 * S, 127 * S)):
    alpha = max(9, 34 - i * 4)
    odraw.ellipse(
        [CX - radius, CY - radius, CX + radius, CY + radius],
        outline=(236, 244, 241, alpha),
        width=3 * S,
    )

img = Image.alpha_composite(img.convert("RGBA"), overlay)


def cover_square(path, size):
    im = Image.open(path).convert("RGB")
    sw, sh = im.size
    scale = max(size / sw, size / sh)
    im = im.resize((round(sw * scale), round(sh * scale)), Image.LANCZOS)
    left = (im.width - size) // 2
    top = (im.height - size) // 2
    return im.crop((left, top, left + size, top + size))


def paste_plate(base, path, cx, cy, radius, rim=8):
    d = radius * 2
    photo = cover_square(path, d)
    mask = Image.new("L", (d, d), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, d, d], fill=255)
    ring = Image.new("RGBA", base.size, (0, 0, 0, 0))
    rdraw = ImageDraw.Draw(ring)
    rdraw.ellipse(
        [cx - radius - 14 * S, cy - radius - 6 * S, cx + radius + 14 * S, cy + radius + 22 * S],
        fill=(10, 18, 16, 60),
    )
    base.alpha_composite(ring)
    base.paste(photo, (cx - radius, cy - radius), mask)
    rimlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(rimlay).ellipse(
        [cx - radius, cy - radius, cx + radius, cy + radius],
        outline=(245, 247, 246, 235),
        width=rim * S,
    )
    base.alpha_composite(rimlay)


paste_plate(img, os.path.join(ROOT, "DAYS.jpeg"), CX, CY, 392 * S, rim=7)
paste_plate(img, os.path.join(ROOT, "fluffy.jpeg"), int(W * 0.868), int(H * 0.76), 176 * S, rim=5)
paste_plate(img, os.path.join(ROOT, "tiarina.jpg"), int(W * 0.475), int(H * 0.135), 118 * S, rim=4)

img = img.convert("RGB").resize((2400, 1350), Image.LANCZOS)
out = os.path.join(ROOT, "hero-brand.jpg")
img.save(out, "JPEG", quality=84, optimize=True, progressive=True)
print("saved", out)
