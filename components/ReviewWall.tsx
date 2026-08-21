"use client";

import { useState } from "react";
import { reviews, reviewFilters } from "@/content/reviews";
import Stars from "@/components/Stars";

export default function ReviewWall() {
  const [filter, setFilter] = useState<(typeof reviewFilters)[number]>("All");

  const visible =
    filter === "All" ? reviews : reviews.filter((r) => r.procedure === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter reviews by procedure"
        className="flex flex-wrap gap-2"
      >
        {reviewFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border-[1.5px] px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f
                ? "border-pine-950 bg-pine-950 text-cream"
                : "border-pine-900/20 bg-white text-pine-950 hover:border-pine-900/60"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink/60" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "review" : "reviews"}
        {filter !== "All" ? ` for ${filter}` : ""}
      </p>
      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((review) => (
          <li key={review.id}>
            <figure className="flex h-full flex-col rounded-3xl border border-pine-900/10 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <Stars className="h-4 w-4" />
                <span className="rounded-full bg-pine-50 px-3 py-1 text-xs font-semibold text-pine-800">
                  {review.procedure}
                </span>
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink/85">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-pine-950">
                  {review.name}{" "}
                  <span className="font-normal text-ink/60">
                    · {review.location}
                  </span>
                </p>
                {review.source && review.source !== "sample" ? (
                  <p className="mt-3 text-xs font-semibold text-ink/55">
                    Source: {review.source} reviews
                  </p>
                ) : (
                  <p className="mt-3 text-xs">
                    <span
                      className="ph"
                      title="Placeholder — replace with a verified figure"
                    >
                      [Sample review — replace with live Google reviews]
                    </span>
                  </p>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
