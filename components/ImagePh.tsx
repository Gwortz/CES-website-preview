/**
 * Local gradient/SVG image placeholder — no external images anywhere in the demo.
 * Clearly labeled so partners can see exactly where real photography goes.
 */

type Variant = "photo" | "portrait" | "video" | "map" | "badge";

const variantStyles: Record<Variant, string> = {
  photo: "bg-gradient-to-br from-pine-200 via-pine-100 to-copper-100",
  portrait: "bg-gradient-to-b from-pine-100 via-sand to-copper-100",
  video: "bg-gradient-to-br from-pine-900 via-pine-800 to-pine-950",
  map: "bg-gradient-to-br from-pine-50 via-sand to-pine-100",
  badge: "bg-gradient-to-br from-copper-100 via-sand to-copper-200",
};

function VariantIcon({ variant }: { variant: Variant }) {
  const cls =
    variant === "video"
      ? "h-12 w-12 text-cream/90"
      : "h-10 w-10 text-pine-700/50";
  switch (variant) {
    case "video":
      return (
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/15 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true">
            <path d="M9 6.5v11l9-5.5-9-5.5z" />
          </svg>
        </span>
      );
    case "portrait":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="8.5" r="3.5" />
          <path d="M4.5 20c1.5-3.5 4.2-5.5 7.5-5.5s6 2 7.5 5.5" strokeLinecap="round" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 1 1 13 0c0 5-6.5 11-6.5 11z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.8" />
          <path d="M3.5 16.5l4.5-4 4 3.5 3.5-3 5 3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function ImagePh({
  label,
  variant = "photo",
  className = "aspect-[4/3]",
  rounded = "rounded-2xl",
}: {
  label: string;
  variant?: Variant;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={`relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden border border-pine-900/10 ${rounded} ${variantStyles[variant]} ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cream/30 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-copper-300/25 blur-3xl"
      />
      <VariantIcon variant={variant} />
      <p
        className={`relative z-10 max-w-[85%] text-center text-xs font-semibold uppercase tracking-wider ${
          variant === "video" ? "text-cream/80" : "text-pine-800/60"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
