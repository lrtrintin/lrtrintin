interface VairuLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function VairuLogo({ className = "h-10 w-auto", iconOnly = false }: VairuLogoProps) {
  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Vairu Consulting"
        role="img"
      >
        <path d="M4 6 L4 22 L22 14 Z" fill="#8A9B7A" />
        <path d="M4 46 L4 30 L22 38 Z" fill="#6B7B5A" />
        <path
          d="M4 22 L4 30 L22 38 L22 14 Z"
          fill="#5A6A4A"
        />
        <path d="M20 8 L20 44 L50 26 Z" fill="#0D1B2A" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 220 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vairu Consulting"
      role="img"
    >
      {/* Icon mark */}
      <path d="M2 5 L2 20 L18 12.5 Z" fill="#8A9B7A" />
      <path d="M2 47 L2 32 L18 39.5 Z" fill="#6B7B5A" />
      <path d="M2 20 L2 32 L18 39.5 L18 12.5 Z" fill="#5A6A4A" />
      <path d="M16 6 L16 46 L46 26 Z" fill="#0D1B2A" />

      {/* "vairu" text */}
      {/* v */}
      <path
        d="M60 17 L68 37 L76 17"
        stroke="#1A2744"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* a */}
      <path
        d="M84 37 C84 37 84 22 93 22 C102 22 102 37 102 37 M84 30 L102 30"
        stroke="#1A2744"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* i */}
      <circle cx="112" cy="17" r="2" fill="#E8941A" />
      <line
        x1="112"
        y1="22"
        x2="112"
        y2="37"
        stroke="#1A2744"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* r */}
      <path
        d="M122 37 L122 22 C122 22 130 20 136 27"
        stroke="#1A2744"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* u */}
      <path
        d="M144 22 L144 32 C144 36 148 37 152 37 C156 37 160 36 160 32 L160 22"
        stroke="#1A2744"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* CONSULTING text */}
      <text
        x="60"
        y="49"
        fontFamily="system-ui, sans-serif"
        fontSize="7"
        fontWeight="500"
        letterSpacing="3"
        fill="#6B7B8A"
        textAnchor="start"
      >
        CONSULTING
      </text>
    </svg>
  );
}
