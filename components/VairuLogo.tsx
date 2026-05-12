interface VairuLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function VairuLogo({ className = "h-10 w-auto", iconOnly = false }: VairuLogoProps) {
  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 100 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Vairu Consulting"
        role="img"
      >
        {/* Dark olive — upper-left shape */}
        <path d="M2 2 L2 38 L48 20 Z" fill="#6B7B50" />
        {/* Medium olive — lower-left shape */}
        <path d="M2 50 L2 86 L48 68 Z" fill="#7A8B60" />
        {/* Dark olive fill between the two left shapes */}
        <path d="M2 38 L2 50 L48 44 L48 20 Z" fill="#5A6A42" opacity="0.6" />
        {/* Main olive arrow — large right-pointing triangle */}
        <path d="M28 6 L28 82 L92 44 Z" fill="#7A8B60" />
        {/* Orange / gold accent — bottom-left triangle */}
        <path d="M2 50 L2 86 L30 68 Z" fill="#F0A030" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 300 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vairu Consulting"
      role="img"
    >
      {/* ── Icon mark ── */}
      {/* Dark olive — upper-left shape */}
      <path d="M2 2 L2 38 L48 20 Z" fill="#6B7B50" />
      {/* Medium olive — lower-left shape */}
      <path d="M2 50 L2 86 L48 68 Z" fill="#7A8B60" />
      {/* Connecting fill between upper and lower left shapes */}
      <path d="M2 38 L2 50 L48 44 L48 20 Z" fill="#5A6A42" opacity="0.55" />
      {/* Main olive right-pointing arrow */}
      <path d="M28 6 L28 82 L92 44 Z" fill="#7A8B60" />
      {/* Orange accent — bottom-left triangle */}
      <path d="M2 50 L2 86 L30 68 Z" fill="#F0A030" />

      {/* ── "vairu" text ── */}
      {/* v */}
      <path
        d="M112 26 L121 58 L130 26"
        stroke="#1A2744"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* a */}
      <path
        d="M142 58 C142 58 140 40 150 38 C160 36 162 58 162 58"
        stroke="#1A2744"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="141" y1="49" x2="162" y2="46" stroke="#1A2744" strokeWidth="4.5" strokeLinecap="round" />
      {/* i — dot orange */}
      <circle cx="176" cy="28" r="3.5" fill="#F0A030" />
      <line x1="176" y1="37" x2="176" y2="58" stroke="#1A2744" strokeWidth="4.5" strokeLinecap="round" />
      {/* r */}
      <line x1="190" y1="58" x2="190" y2="37" stroke="#1A2744" strokeWidth="4.5" strokeLinecap="round" />
      <path
        d="M190 42 C190 42 196 36 206 40"
        stroke="#1A2744"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* u */}
      <path
        d="M218 37 L218 50 C218 57 224 60 230 60 C236 60 242 57 242 50 L242 37"
        stroke="#1A2744"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── "CONSULTING" ── */}
      <text
        x="112"
        y="80"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="4.5"
        fill="#8A9A7A"
      >
        CONSULTING
      </text>
    </svg>
  );
}
