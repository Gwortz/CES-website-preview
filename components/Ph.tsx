import { Fragment } from "react";

/**
 * Bracketed placeholder for figures we have not verified.
 * Renders in an unmistakable amber treatment so nothing fabricated looks real.
 */
export default function Ph({ children }: { children: React.ReactNode }) {
  return (
    <span className="ph" title="Placeholder — replace with a verified figure">
      [{children}]
    </span>
  );
}

/** Renders a content string, styling any [bracketed segment] as a placeholder. */
export function PhText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span
            key={i}
            className="ph"
            title="Placeholder — replace with a verified figure"
          >
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
