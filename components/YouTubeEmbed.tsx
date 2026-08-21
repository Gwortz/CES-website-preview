"use client";

import { useState } from "react";

/**
 * Lightweight click-to-load YouTube embed. Shows the video thumbnail with a
 * play button; the iframe (and all YouTube JS) loads only after the visitor
 * clicks, which keeps Lighthouse scores intact. Uses youtube-nocookie.com.
 */
export default function YouTubeEmbed({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div
        className={`relative aspect-video overflow-hidden rounded-2xl border border-pine-900/10 bg-pine-950 ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block aspect-video w-full overflow-hidden rounded-2xl border border-pine-900/10 bg-pine-950 text-left ${className}`}
    >
      {/* YouTube's own thumbnail; loads from the visitor's browser */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-copper-600 shadow-lg transition-transform group-hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M9 6.5v11l9-5.5-9-5.5z" />
        </svg>
      </span>
      <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-cream">
        {title}
      </span>
    </button>
  );
}
