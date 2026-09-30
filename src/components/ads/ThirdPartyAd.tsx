"use client";

type ThirdPartyAdProps = {
  adKey: string;
  width: number;
  height: number;
  className?: string;
};

function createAdDocument(adKey: string, width: number, height: number) {
  const options = JSON.stringify({
    key: adKey,
    format: "iframe",
    height,
    width,
    params: {},
  }).replaceAll("<", "\\u003c");
  const scriptUrl = JSON.stringify(
    `https://www.highrevenueformat.com/${adKey}/invoke.js`,
  );

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=${width}, initial-scale=1">
    <style>html,body{width:${width}px;height:${height}px;margin:0;overflow:hidden;background:transparent}</style>
  </head>
  <body>
    <script>window.atOptions=${options};<\/script>
    <script src=${scriptUrl} async><\/script>
  </body>
</html>`;
}

export default function ThirdPartyAd({
  adKey,
  width,
  height,
  className = "",
}: ThirdPartyAdProps) {
  return (
    <iframe
      className={`block overflow-hidden border-0 ${className}`.trim()}
      style={{ width, height }}
      width={width}
      height={height}
      srcDoc={createAdDocument(adKey, width, height)}
      title={`Advertisement ${width} by ${height}`}
      aria-label="Advertisement"
      loading="lazy"
      scrolling="no"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
