"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Featured hero player: the video autoplays immediately (muted, the only
 * autoplay browsers permit) with a prominent one-tap sound button that
 * unmutes without restarting. YouTube's native controls stay available as
 * a fallback volume path. Reduced-motion visitors get a poster with a play
 * button instead of autoplay; their click starts playback with sound.
 */
export default function HeroPlayer({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [mode, setMode] = useState<"idle" | "muted" | "sound">("idle");
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reducedMotion) setMode("muted");
  }, []);

  function command(func: string, args: unknown[] = []) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    );
  }

  function unmute() {
    command("unMute");
    command("setVolume", [100]);
    setMode("sound");
  }

  if (mode === "idle") {
    return (
      <button
        type="button"
        onClick={() => setMode("sound")}
        aria-label={`Play video with sound: ${title}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-brand-900 text-left"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt=""
          onError={() =>
            setPoster(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
          }
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-600 shadow-xl transition-transform group-hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="currentColor">
            <path d="M9 6.5v11l9-5.5-9-5.5z" />
          </svg>
        </span>
      </button>
    );
  }

  const withSound = mode === "sound";

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-900">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${
          withSound ? 0 : 1
        }&controls=1&rel=0&playsinline=1&modestbranding=1&enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
      {mode === "muted" && (
        <button
          type="button"
          onClick={unmute}
          className="absolute bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-accent-600 px-6 py-3 font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-accent-700 sm:bottom-16"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            <path
              d="M16.5 8.5a5 5 0 0 1 0 7M18.8 6a8.5 8.5 0 0 1 0 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Tap for sound
        </button>
      )}
    </div>
  );
}
