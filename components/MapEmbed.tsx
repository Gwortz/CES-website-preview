"use client";

import { useState } from "react";

/**
 * Real, interactive Google Maps embed for a practice location.
 *
 * Click-to-load: the iframe is only mounted after the user asks for it, so the
 * page costs nothing on load and no third-party frame is created for visitors
 * who never interact with the map. Until then we show a styled, accessible
 * card with the address and a direct "Get directions" link, which is what most
 * visitors actually want.
 */
export default function MapEmbed({
  name,
  address,
  className = "aspect-[16/10]",
  rounded = "rounded-3xl",
}: {
  name: string;
  address: string;
  className?: string;
  rounded?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const query = encodeURIComponent(`Commonwealth Eye Surgery, ${address}`);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  if (loaded) {
    return (
      <iframe
        title={`Map of the ${name} office`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`w-full border border-brand-900/10 ${rounded} ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden border border-brand-900/10 bg-gradient-to-br from-brand-50 via-sand to-brand-100 p-6 text-center ${rounded} ${className}`}
    >
      {/* Decorative street-grid motif */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-brand-700/10"
        preserveAspectRatio="none"
        viewBox="0 0 400 250"
      >
        <path
          d="M0 60h400M0 140h400M0 200h400M70 0v250M180 0v250M300 0v250"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M0 100C90 100 110 175 200 175S320 95 400 95"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
        />
      </svg>

      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto h-9 w-9 text-brand-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path
            d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 1 1 13 0c0 5-6.5 11-6.5 11z"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        <p className="mt-3 font-display text-lg font-semibold text-brand-950">
          {name}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink/70">{address}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="rounded-full bg-brand-950 px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-brand-800"
          >
            Show map
          </button>
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[1.5px] border-brand-900/30 px-5 py-2 text-sm font-semibold text-brand-950 transition-colors hover:border-brand-900 hover:bg-white/50"
          >
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}
