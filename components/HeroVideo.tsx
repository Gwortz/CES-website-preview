"use client";

import { useEffect, useState } from "react";

/**
 * Ambient, muted, looping video backdrop for the hero.
 * - Poster image paints immediately; the iframe mounts after first paint so
 *   it never blocks page load.
 * - Respects prefers-reduced-motion and skips autoplay on small screens,
 *   where the poster alone carries the look.
 * - Purely decorative: hidden from assistive tech and non-interactive.
 */
export default function HeroVideo({ videoId }: { videoId: string }) {
  const [showVideo, setShowVideo] = useState(false);
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );
  const [posterFailed, setPosterFailed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    if (reducedMotion || !wideEnough) return;
    const t = setTimeout(() => setShowVideo(true), 700);
    return () => clearTimeout(t);
  }, []);

  const coverBox =
    "absolute left-1/2 top-1/2 aspect-video min-h-full min-w-full -translate-x-1/2 -translate-y-1/2";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {!posterFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          onError={() => {
            if (poster.includes("maxresdefault")) {
              setPoster(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
            } else {
              setPosterFailed(true);
            }
          }}
          className={`${coverBox} object-cover opacity-70`}
        />
      )}
      {showVideo && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1`}
          title=""
          tabIndex={-1}
          className={coverBox}
        />
      )}
      {/* Scrim keeps the cream headline at AA contrast over any frame */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/40" />
    </div>
  );
}
