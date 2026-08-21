import Link from "next/link";

type CTAVariant = "primary" | "accent" | "secondary" | "onDark" | "link";

const ctaStyles: Record<CTAVariant, string> = {
  primary:
    "bg-pine-950 text-cream hover:bg-pine-800 shadow-sm rounded-full font-semibold",
  accent:
    "bg-copper-600 text-white hover:bg-copper-700 shadow-sm rounded-full font-semibold",
  secondary:
    "border-[1.5px] border-pine-900/30 text-pine-950 hover:border-pine-900 hover:bg-pine-50 rounded-full font-semibold",
  onDark:
    "border-[1.5px] border-cream/40 text-cream hover:bg-cream/10 hover:border-cream rounded-full font-semibold",
  link: "text-copper-700 font-semibold hover:text-copper-800 underline-offset-4 hover:underline",
};

export function CTALink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: CTAVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes =
    variant === "link"
      ? ""
      : size === "lg"
        ? "px-7 py-3.5 text-base"
        : size === "sm"
          ? "px-4 py-2 text-sm"
          : "px-6 py-3 text-[0.95rem]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 transition-colors ${ctaStyles[variant]} ${sizes} ${className}`}
    >
      {children}
      {variant === "link" && (
        <span aria-hidden="true" className="translate-y-px">
          &rarr;
        </span>
      )}
    </Link>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.22em] ${
        dark ? "text-copper-300" : "text-copper-700"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <Tag
        className={`mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${
          dark ? "text-cream" : "text-pine-950"
        }`}
      >
        {title}
      </Tag>
      {lede && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-pine-100/85" : "text-ink/75"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tone = "cream",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "sand" | "white" | "dark";
  id?: string;
}) {
  const tones = {
    cream: "bg-cream",
    sand: "bg-sand",
    white: "bg-white",
    dark: "on-dark bg-pine-950 text-pine-100",
  };
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-pine-900/10 bg-gradient-to-b from-pine-50 to-cream">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} as="h1" />
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}

export function CheckList({
  items,
  tone = "check",
}: {
  items: React.ReactNode[];
  tone?: "check" | "caution" | "arrow";
}) {
  const icon =
    tone === "check" ? (
      <svg
        viewBox="0 0 20 20"
        className="mt-1 h-4 w-4 shrink-0 text-pine-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 10.5l4 4 9-9" />
      </svg>
    ) : tone === "caution" ? (
      <svg
        viewBox="0 0 20 20"
        className="mt-1 h-4 w-4 shrink-0 text-copper-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M10 3.5l7.5 13h-15L10 3.5z" strokeLinejoin="round" />
        <path d="M10 8.5v3.2M10 14.3v.2" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 20 20"
        className="mt-1 h-4 w-4 shrink-0 text-copper-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 10h12M11 5l5 5-5 5" />
      </svg>
    );
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-ink/85">
          {icon}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-pine-900/10 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
