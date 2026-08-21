export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="14" className="fill-pine-950" />
      <path
        d="M8 32c7-11 15.5-16.5 24-16.5S49 21 56 32c-7 11-15.5 16.5-24 16.5S15 43 8 32Z"
        fill="none"
        className="stroke-cream"
        strokeWidth="3.5"
      />
      <circle cx="32" cy="32" r="8.5" className="fill-copper-500" />
      <circle cx="35" cy="29" r="2.6" className="fill-cream" />
    </svg>
  );
}

export function LogoType({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          dark ? "text-cream" : "text-pine-950"
        }`}
      >
        Commonwealth
      </span>
      <span
        className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${
          dark ? "text-copper-300" : "text-copper-700"
        }`}
      >
        Eye Surgery
      </span>
    </span>
  );
}
