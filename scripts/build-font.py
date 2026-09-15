"""Generate a Noto Sans JP subset; run after changing site copy.
Requirements: pip install fonttools brotli
Run from repository root: python3 scripts/build-font.py
Missing glyphs still render with the system Japanese sans-serif fallback.
"""
from pathlib import Path
from urllib.request import urlopen
from tempfile import TemporaryDirectory
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
chars = set(range(0x20, 0x7f)) | set(range(0x3000, 0x3100)) | set(range(0xff00, 0xfff0))
for path in (root / 'src').rglob('*'):
    if path.suffix in ('.ts', '.tsx'):
        chars.update(ord(c) for c in path.read_text() if ord(c) >= 0x80)
base = 'https://raw.githubusercontent.com/google/fonts/main/ofl/notosansjp/'
with TemporaryDirectory() as temporary:
    source = Path(temporary) / 'NotoSansJP.ttf'
    source.write_bytes(urlopen(base + 'NotoSansJP%5Bwght%5D.ttf').read())
    font = TTFont(source)
    available = set(font.getBestCmap())
    options = subset.Options()
    options.flavor = 'woff2'
    tool = subset.Subsetter(options=options)
    tool.populate(unicodes=chars & available)
    tool.subset(font)
    font.flavor = 'woff2'
    out = root / 'src/app/fonts'
    out.mkdir(exist_ok=True)
    font.save(out / 'noto-sans-jp-site.woff2')
    (out / 'OFL.txt').write_bytes(urlopen(base + 'OFL.txt').read())
    print('Noto Sans JP subset:', len(chars & available), 'characters;', (out / 'noto-sans-jp-site.woff2').stat().st_size, 'bytes')
