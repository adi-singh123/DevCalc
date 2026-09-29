type Props = { symbol: string; name: string; westernName: string; className?: string };

export default function RashiIllustration({ symbol, name, westernName, className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label={`${name} (${westernName}) Rashi illustration`} className={className}>
      <defs>
        <radialGradient id={`rashi-${name}`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fffdf6" />
          <stop offset="100%" stopColor="#e9dfc8" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="145" fill={`url(#rashi-${name})`} stroke="#1f3a5c" strokeWidth="5" />
      <circle cx="160" cy="160" r="119" fill="none" stroke="#b58a3b" strokeWidth="2" strokeDasharray="3 8" />
      {[35, 78, 112, 205, 242, 278].map((x, index) => (
        <circle key={x} cx={x} cy={[142, 68, 249, 55, 230, 133][index]} r={index % 2 ? 3 : 2} fill="#b58a3b" />
      ))}
      <text x="160" y="178" textAnchor="middle" fontSize="108" fill="#1f3a5c" fontFamily="Georgia, serif">{symbol}</text>
      <text x="160" y="244" textAnchor="middle" fontSize="23" fontWeight="700" fill="#1f3a5c">{name}</text>
      <text x="160" y="270" textAnchor="middle" fontSize="15" fill="#596579">{westernName}</text>
    </svg>
  );
}
