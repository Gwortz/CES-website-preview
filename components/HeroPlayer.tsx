"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The hero film, designed as part of the site rather than a raw embed:
 * YouTube chrome is hidden (controls=0) and replaced with brand-styled
 * pause and sound controls driven over the iframe API. Concentric offset
 * frames echo the rings of the practice's eye mark, and a cyan glow seats
 * the film in the brand palette.
 *
 * Autoplay starts muted (a browser rule); the centered pill unmutes in one
 * tap without restarting. Reduced-motion visitors get a poster whose play
 * button starts the film with sound.
 */
export default function HeroPlayer({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [mode, setMode] = useState<"idle" | "muted" | "sound">("idle");
  const [paused, setPaused] = useState(false);
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

  function toggleSound() {
    if (mode === "sound") {
      command("mute");
      setMode("muted");
    } else {
      unmute();
    }
  }

  function togglePause() {
    command(paused ? "playVideo" : "pauseVideo");
    setPaused(!paused);
  }

  const controlButton =
    "flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-brand-950/70 text-cream backdrop-blur-sm transition-colors hover:bg-brand-950/90 hover:border-cream/50";

  return (
    <div className="relative">
      {/* Concentric offset frames, echoing the rings of the eye mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2.5 rounded-[1.75rem] border border-accent-400/25 sm:-inset-4 sm:rounded-[2.25rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-5 hidden rounded-[2.5rem] border border-cream/10 sm:block sm:-inset-8 sm:rounded-[3rem]"
      />

      <div className="relative aspect-video overflow-hidden rounded-2xl bg-brand-900 ring-1 ring-cream/20 shadow-[0_30px_90px_-15px_rgba(0,168,208,0.45)] sm:rounded-3xl">
        {mode === "idle" ? (
          <button
            type="button"
            onClick={() => setMode("sound")}
            aria-label={`Play video with sound: ${title}`}
            className="group absolute inset-0 block h-full w-full text-left"
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
        ) : (
          <>
            <iframe
              ref={iframeRef}
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${
                mode === "sound" ? 0 : 1
              }&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />

            {/* Soft edge vignette so the film sits into its frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(6,42,60,0.45)] sm:rounded-3xl"
            />

            {/* One-tap sound pill while muted */}
            {mode === "muted" && (
              <button
                type="button"
                onClick={unmute}
                className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-accent-600 px-6 py-3 font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-accent-700 sm:bottom-8"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
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

            {/* Brand-styled controls */}
            <div className="absolute bottom-4 right-4 flex gap-2.5 sm:bottom-6 sm:right-6">
              <button
                type="button"
                onClick={togglePause}
                aria-label={paused ? "Play video" : "Pause video"}
                className={controlButton}
              >
                {paused ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M9 6.5v11l9-5.5-9-5.5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.5h3v13H8zM13 5.5h3v13h-3z" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={toggleSound}
                aria-label={mode === "sound" ? "Mute video" : "Unmute video"}
                className={controlButton}
              >
                {mode === "sound" ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M4 9v6h4l5 4V5L8 9H4z" />
                    <path
                      d="M16.5 8.5a5 5 0 0 1 0 7M18.8 6a8.5 8.5 0 0 1 0 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M4 9v6h4l5 4V5L8 9H4z" />
                    <path
                      d="M16.5 9.5l5 5M21.5 9.5l-5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
