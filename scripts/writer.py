import pathlib, sys, base64
fn = sys.argv[1]
b64 = sys.argv[2]
n = pathlib.Path(fn)
n.parent.mkdir(parents=True, exist_ok=True)
n.write_bytes(base64.b64decode(b64))
print('Wrote: ' + fn)
