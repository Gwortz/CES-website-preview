import ImagePh from "@/components/ImagePh";

/**
 * Real photography with an automatic, clearly-labeled fallback.
 *
 * Mirrors DoctorPhoto: pass a path under /public and the real image renders;
 * omit it and the labeled placeholder shows instead, so the page never breaks
 * and it stays obvious where a photo is still missing.
 */
export default function SiteImage({
  src,
  alt,
  label,
  variant = "photo",
  className = "aspect-[4/3]",
  rounded = "rounded-3xl",
  objectPosition,
}: {
  src?: string;
  alt: string;
  /** Shown in the placeholder when `src` is absent. Defaults to `alt`. */
  label?: string;
  variant?: "photo" | "badge" | "portrait" | "video" | "map";
  className?: string;
  rounded?: string;
  objectPosition?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={objectPosition ? { objectPosition } : undefined}
        className={`w-full border border-brand-900/10 object-cover ${rounded} ${className}`}
      />
    );
  }
  return (
    <ImagePh
      variant={variant}
      label={label ?? alt}
      className={className}
      rounded={rounded}
    />
  );
}
