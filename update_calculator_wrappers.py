import pathlib
import re

root = pathlib.Path("src/components/calculator/renderers")
files = sorted(root.glob("*.tsx"))
print("files", len(files))
updated = 0
for p in files:
    text = p.read_text(encoding="utf-8")
    orig = text
    text = text.replace(
        'className="mt-8 rounded-3xl border bg-white p-6 shadow-sm"',
        'className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm"',
    )
    text = text.replace(
        'className="mt-8 rounded-2xl border bg-white p-6 shadow-sm"',
        'className="calculator-panel mt-8 rounded-2xl border bg-white p-6 shadow-sm"',
    )
    text = text.replace(
        'className="mt-8 rounded-2xl border bg-white p-4 shadow-sm sm:p-6"',
        'className="calculator-panel mt-8 rounded-2xl border bg-white p-4 shadow-sm sm:p-6"',
    )
    text = text.replace(
        'className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-6 shadow-sm"',
        'className="calculator-panel mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-6 shadow-sm"',
    )
    text = re.sub(r"overflow-x-autoauto+", "overflow-x-auto", text)
    if text != orig:
        p.write_text(text, encoding="utf-8")
        updated += 1
        print("updated", p.name)
print("updated_count", updated)
