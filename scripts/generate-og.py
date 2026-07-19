# OGP画像 public/og.jpg の生成スクリプト
# 使い方: python3 scripts/generate-og.py  (要 Pillow、macOSのヒラギノフォントを使用)
# 構成: 左=白パネル(ロゴ+社名+タグライン)、右=実店舗写真の2x2グリッド。
import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
W, H = 1200, 630
BG = (245, 247, 246)        # --background #f5f7f6
INK = (25, 33, 31)          # --primary #19211f
SUB = (70, 83, 79)          # --neutral-700 #46534f
MUTE = (98, 112, 107)       # --neutral-600 #62706b
GREEN = (47, 98, 87)        # --primary-blue #2f6257

FONT_DIR = "/System/Library/Fonts"
f_title = ImageFont.truetype(f"{FONT_DIR}/ヒラギノ角ゴシック W7.ttc", 54)
f_sub = ImageFont.truetype(f"{FONT_DIR}/ヒラギノ角ゴシック W4.ttc", 29)
f_small = ImageFont.truetype(f"{FONT_DIR}/ヒラギノ角ゴシック W4.ttc", 22)
f_en = ImageFont.truetype(f"{FONT_DIR}/ヒラギノ角ゴシック W5.ttc", 20)

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

GRID_W = 520
GAP = 3
cell_w = (GRID_W - GAP) // 2
cell_h = (H - GAP) // 2
photos = ["DAYS.jpeg", "tiarina.jpg", "fluffy.jpeg", "torano.jpeg"]


def cover(src, w, h):
    im = Image.open(src).convert("RGB")
    sw, sh = im.size
    scale = max(w / sw, h / sh)
    im = im.resize((round(sw * scale), round(sh * scale)), Image.LANCZOS)
    left = (im.width - w) // 2
    top = (im.height - h) // 2
    return im.crop((left, top, left + w, top + h))


x0 = W - GRID_W
for i, name in enumerate(photos):
    cx = x0 + (i % 2) * (cell_w + GAP)
    cy = (i // 2) * (cell_h + GAP)
    img.paste(cover(os.path.join(ROOT, name), cell_w, cell_h), (cx, cy))

LX = 66
logo = Image.open(os.path.join(ROOT, "logo1.png")).convert("RGBA")
lh = 92
lw = round(logo.width * lh / logo.height)
logo = logo.resize((lw, lh), Image.LANCZOS)
img.paste(logo, (LX - 6, 58), logo)

draw.rectangle([LX, 268, LX + 64, 268 + 6], fill=GREEN)

draw.text((LX, 312), "株式会社オサラロック", font=f_title, fill=INK)
draw.text((LX, 396), "レンタルスペース・スタジオ運営", font=f_sub, fill=SUB)

draw.text((LX, 458), "ダンス・撮影・パーティ・仕事。", font=f_small, fill=MUTE)
draw.text((LX, 492), "大切な時間に、心地よい場所を。", font=f_small, fill=MUTE)

draw.text((LX, H - 80), "osara-rock.com", font=f_en, fill=GREEN)

out = os.path.join(ROOT, "og.jpg")
img.save(out, "JPEG", quality=88, optimize=True, progressive=True)
print("saved", out)
