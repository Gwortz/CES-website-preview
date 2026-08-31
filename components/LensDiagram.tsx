/**
 * Schematic optical diagrams for each lens class.
 *
 * These are explanatory illustrations, not clinical images or simulated
 * patient views: a simplified eye in cross-section with light rays showing
 * where each lens type brings light to focus. Drawn inline as SVG so they
 * stay crisp at any size, inherit the brand palette, and cost no requests.
 */

type Slug =
  | "monofocal"
  | "toric"
  | "light-adjustable-lens"
  | "edof"
  | "trifocal";

const RETINA = 268;

function EyeBase({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-3xl border border-brand-900/10 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-4">
        <svg
          viewBox="0 0 320 200"
          className="h-auto w-full"
          role="img"
          aria-label={caption}
        >
          {/* incoming light rays */}
          <g stroke="currentColor" className="text-accent-400" strokeWidth="2" fill="none" opacity="0.85">
            <path d="M8 68h56" />
            <path d="M8 100h56" />
            <path d="M8 132h56" />
          </g>

          {/* globe */}
          <ellipse cx="176" cy="100" rx="112" ry="86" className="fill-white stroke-brand-900/25" strokeWidth="2.5" />
          {/* cornea */}
          <path d="M64 100a34 46 0 0 1 34-46v92a34 46 0 0 1-34-46z" className="fill-accent-100/70 stroke-brand-700/40" strokeWidth="2" />
          {/* iris */}
          <path d="M98 54v18M98 128v18" className="stroke-brand-800" strokeWidth="7" strokeLinecap="round" />
          {/* retina */}
          <path d={`M${RETINA} 62a52 44 0 0 1 0 76`} className="stroke-brand-800" strokeWidth="4" fill="none" strokeLinecap="round" />
          {children}
        </svg>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink/70">{caption}</figcaption>
    </figure>
  );
}

/** A converging ray bundle from the lens to a focal point. */
function Focus({ x, label, tone = "accent", dashed = false }: { x: number; label?: string; tone?: "accent" | "brand"; dashed?: boolean }) {
  const cls = tone === "accent" ? "text-accent-500" : "text-brand-600";
  return (
    <g className={cls}>
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray={dashed ? "5 4" : undefined}>
        <path d={`M128 66L${x} 100`} />
        <path d={`M128 100L${x} 100`} />
        <path d={`M128 134L${x} 100`} />
      </g>
      <circle cx={x} cy="100" r="4.5" fill="currentColor" />
      {label && (
        <text x={x} y="86" textAnchor="middle" className="fill-current" fontSize="11" fontWeight="700">
          {label}
        </text>
      )}
    </g>
  );
}

function IOL({ toric = false }: { toric?: boolean }) {
  return (
    <g>
      <ellipse cx="128" cy="100" rx="13" ry="40" className="fill-accent-200/60 stroke-brand-700" strokeWidth="2.5" />
      {toric && (
        <path d="M117 72L139 128" className="stroke-brand-800" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
      )}
    </g>
  );
}

export default function LensDiagram({ slug, className = "" }: { slug: string; className?: string }) {
  const s = slug as Slug;

  if (s === "toric") {
    return (
      <div className={className}>
        <EyeBase caption="A toric lens carries the astigmatism correction on its own surface and is rotated to a set axis (dashed line), so the football-shaped cornea focuses to a single sharp point instead of a smear.">
          <IOL toric />
          <Focus x={RETINA} label="Sharp" />
        </EyeBase>
      </div>
    );
  }

  if (s === "edof") {
    return (
      <div className={className}>
        <EyeBase caption="An extended depth of focus lens stretches one focal point into a continuous range, so distance runs smoothly into arm's length. Small print usually still wants readers.">
          <IOL />
          <g className="text-accent-500">
            <g stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M128 66L246 100" />
              <path d="M128 100L246 100" />
              <path d="M128 134L246 100" />
            </g>
            <path d={`M246 100H${RETINA}`} stroke="currentColor" strokeWidth="9" strokeLinecap="round" opacity="0.35" />
            <circle cx="246" cy="100" r="4" fill="currentColor" />
            <circle cx={RETINA} cy="100" r="4" fill="currentColor" />
            <text x="256" y="84" textAnchor="middle" className="fill-current" fontSize="11" fontWeight="700">
              Range
            </text>
          </g>
        </EyeBase>
      </div>
    );
  }

  if (s === "trifocal") {
    return (
      <div className={className}>
        <EyeBase caption="A trifocal splits incoming light into three focal points at once — reading, arm's length and distance. The brain learns to favour whichever is in use.">
          <IOL />
          <Focus x={218} tone="brand" dashed label="Near" />
          <Focus x={244} tone="brand" dashed label="Mid" />
          <Focus x={RETINA} label="Far" />
        </EyeBase>
      </div>
    );
  }

  if (s === "light-adjustable-lens") {
    return (
      <div className={className}>
        <EyeBase caption="The light adjustable lens is implanted, then fine-tuned after the eye has healed: UV light treatments reshape the lens in place until the focus matches what you actually want.">
          <IOL />
          <Focus x={252} tone="brand" dashed />
          <Focus x={RETINA} label="Tuned" />
          {/* UV treatment arrow */}
          <g className="text-brand-700">
            <path d="M128 32v22" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#uvArrow)" fill="none" />
            <text x="128" y="26" textAnchor="middle" className="fill-current" fontSize="10.5" fontWeight="700">
              UV adjustment
            </text>
          </g>
          <defs>
            <marker id="uvArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0L10 5L0 10z" fill="currentColor" />
            </marker>
          </defs>
        </EyeBase>
      </div>
    );
  }

  // monofocal (default)
  return (
    <div className={className}>
      <EyeBase caption="A monofocal lens brings light to one focal point, set for the distance you choose. It is the sharpest single-distance option; glasses cover the rest.">
        <IOL />
        <Focus x={RETINA} label="One focus" />
      </EyeBase>
    </div>
  );
}
