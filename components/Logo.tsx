/* eslint-disable @next/next/no-img-element */

/** The practice's real logo lockup, for light backgrounds. */
export function LogoFull({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt=""
      width={1236}
      height={264}
      className={className}
    />
  );
}

/** The square eye mark from the logo; works on dark and light backgrounds. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt=""
      width={256}
      height={256}
      className={className}
    />
  );
}

/** Text lockup used beside the mark on dark backgrounds. */
export function LogoType({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`text-lg font-bold tracking-wide ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        COMMONWEALTH
      </span>
      <span
        className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${
          dark ? "text-accent-300" : "text-accent-700"
        }`}
      >
        Eye Surgery
      </span>
    </span>
  );
}
