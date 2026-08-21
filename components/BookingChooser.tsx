"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { locations } from "@/content/site";

export default function BookingChooser() {
  const params = useSearchParams();
  const initial = params.get("location");
  const [selected, setSelected] = useState<string>(
    initial === "louisville" ? "louisville" : initial === "lexington" ? "lexington" : ""
  );

  const active = locations.find((l) => l.slug === selected);

  return (
    <div>
      <fieldset>
        <legend className="font-display text-2xl font-semibold text-pine-950">
          1. Choose your location
        </legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {locations.map((loc) => {
            const isSelected = selected === loc.slug;
            return (
              <label
                key={loc.slug}
                className={`relative flex cursor-pointer flex-col rounded-3xl border-2 p-6 transition-colors ${
                  isSelected
                    ? "border-pine-800 bg-pine-50"
                    : "border-pine-900/15 bg-white hover:border-pine-800/50"
                }`}
              >
                <input
                  type="radio"
                  name="location"
                  value={loc.slug}
                  checked={isSelected}
                  onChange={() => setSelected(loc.slug)}
                  className="sr-only"
                />
                <span className="flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-pine-950">
                    {loc.name}
                  </span>
                  <span className="flex items-center gap-2">
                    {loc.badge && (
                      <span className="rounded-full bg-copper-600 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                        {loc.badge}
                      </span>
                    )}
                    <span
                      aria-hidden="true"
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-pine-800 bg-pine-800"
                          : "border-pine-900/30 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <svg
                          viewBox="0 0 12 12"
                          className="h-3 w-3 text-cream"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.5 6.5l2.5 2.5 4.5-5" />
                        </svg>
                      )}
                    </span>
                  </span>
                </span>
                <span className="mt-2 text-sm leading-relaxed text-ink/70">
                  {loc.address1}, {loc.cityStateZip}
                </span>
                <span className="mt-1 text-sm font-semibold text-pine-800">
                  {loc.phone}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-pine-950">
          2. Pick a time
        </h2>
        <div
          role="img"
          aria-label="Placeholder frame where the Klara online scheduling widget embeds"
          className="mt-5 overflow-hidden rounded-3xl border border-pine-900/10 bg-white shadow-sm"
        >
          <div className="flex items-center gap-2 border-b border-pine-900/10 bg-pine-50 px-4 py-3">
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-copper-400" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-pine-200" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-pine-200" />
            <p className="ml-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
              Online scheduling module
            </p>
          </div>
          <div className="flex min-h-64 flex-col items-center justify-center gap-4 p-10 text-center">
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 text-pine-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
              <path d="M3.5 9.5h17M8 2.75V6.5M16 2.75V6.5" strokeLinecap="round" />
              <path d="M8 13.5h2.5M13.5 13.5H16M8 17h2.5" strokeLinecap="round" />
            </svg>
            <p className="max-w-md text-ink/70">
              {active
                ? `Scheduling for the ${active.name} office.`
                : "Choose a location above to load available times."}
            </p>
            <p className="text-sm">
              <span
                className="ph"
                title="Placeholder — replace with the live scheduling embed"
              >
                [Klara online scheduling embeds here]
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-pine-950 p-7 sm:p-8">
        <div className="on-dark flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-xl font-semibold text-cream">
              Rather talk to a person?
            </h2>
            <p className="mt-1 text-pine-100/85">
              A real human answers during office hours.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {locations.map((loc) => (
              <a
                key={loc.slug}
                href={loc.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream/40 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                {loc.name}: {loc.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
