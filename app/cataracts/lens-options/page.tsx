import Link from "next/link";
import type { Metadata } from "next";
import { lenses } from "@/content/lenses";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Lens Options — Your One-Time Choice, Compared Honestly",
  description:
    "Monofocal, toric, Light Adjustable Lens, extended depth of focus, and trifocal lenses compared side by side, with the tradeoffs stated plainly.",
};

const tableRows = [
  { key: "distance", label: "Distance vision" },
  { key: "intermediate", label: "Arm's length (screens, dashboard)" },
  { key: "near", label: "Reading vision" },
  { key: "astigmatism", label: "Astigmatism correction" },
  { key: "nightDriving", label: "Night driving notes" },
  { key: "glassesAfter", label: "Glasses after surgery?" },
] as const;

export default function LensOptionsHub() {
  return (
    <>
      <PageHero
        eyebrow="Cataracts & Lenses"
        title="You choose this lens once. Choose it with full information."
        lede="Every cataract surgery ends with a new lens inside your eye. Which lens is the most personal decision in the process, because each one trades something for something else. Here is every class we offer, with the tradeoffs in plain sight."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Talk Through My Options
        </CTALink>
        <CTALink href="#compare" variant="secondary" size="lg">
          Jump to the comparison table
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lenses.map((lens, i) => (
            <Reveal key={lens.slug} delay={i * 70}>
              <Link
                href={`/cataracts/lens-options/${lens.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-xl font-semibold text-brand-950">
                    {lens.shortName}
                  </h2>
                  {lens.brand && (
                    <span className="rounded-full bg-brand-50 px-3 py-0.5 text-xs font-semibold text-brand-800">
                      {lens.brand}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-semibold text-accent-700">
                  {lens.tag}
                </p>
                <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                  {lens.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 group-hover:text-accent-800">
                  Full details and tradeoffs
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={lenses.length * 70}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-950 p-7">
              <div className="on-dark">
                <h2 className="font-display text-xl font-semibold text-cream">
                  Under 60, no cataract yet?
                </h2>
                <p className="mt-3 leading-relaxed text-brand-100/85">
                  These same lenses power Refractive Lens Exchange, the
                  procedure that ends the reader shuffle before a cataract ever
                  forms.
                </p>
              </div>
              <div className="mt-5">
                <CTALink
                  href="/cataracts/refractive-lens-exchange"
                  variant="accent"
                  size="sm"
                >
                  About Refractive Lens Exchange
                </CTALink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Preview My Vision — simulator placeholder module */}
      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Decision support"
              title="Preview My Vision"
              lede="Words can only describe halos and reading range so well. This is where our interactive lens simulator will live, letting you preview night driving, menus, and screens through each lens class before you choose."
            />
            <p className="mt-6 inline-flex rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
              Interactive lens simulator — coming soon
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              role="img"
              aria-label="Placeholder frame for the Preview My Vision interactive lens simulator"
              className="overflow-hidden rounded-3xl border border-cream/15 bg-brand-900 shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-cream/10 bg-brand-950/80 px-4 py-3">
                <span aria-hidden="true" className="h-3 w-3 rounded-full bg-accent-500/70" />
                <span aria-hidden="true" className="h-3 w-3 rounded-full bg-cream/30" />
                <span aria-hidden="true" className="h-3 w-3 rounded-full bg-cream/30" />
                <p className="ml-3 text-xs font-semibold uppercase tracking-wider text-cream/60">
                  preview-my-vision.app — embedded module
                </p>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="flex aspect-[16/8] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950">
                  <div className="text-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="mx-auto h-12 w-12 text-cream/50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-cream/60">
                      Night-drive simulation viewport
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:flex-col">
                  {["Monofocal", "EDOF", "Trifocal", "LAL"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-cream/20 px-4 py-1.5 text-center text-xs font-semibold text-cream/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Comparison table */}
      <Section id="compare">
        <Reveal>
          <SectionHeading
            eyebrow="Side by side"
            title="The honest comparison table."
            lede="Every lens gives something up. The right choice depends on which tradeoff you can live with happily."
          />
        </Reveal>
        <Reveal className="mt-10">
          <div className="overflow-x-auto rounded-3xl border border-brand-900/10 bg-white shadow-sm">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of intraocular lens options across vision range,
                astigmatism correction, night driving, and glasses independence
              </caption>
              <thead>
                <tr className="border-b border-brand-900/10 bg-brand-50">
                  <th scope="col" className="px-5 py-4 font-semibold text-brand-950">
                    &nbsp;
                  </th>
                  {lenses.map((lens) => (
                    <th
                      key={lens.slug}
                      scope="col"
                      className="px-5 py-4 align-bottom"
                    >
                      <Link
                        href={`/cataracts/lens-options/${lens.slug}`}
                        className="font-display text-base font-semibold text-brand-950 hover:text-accent-700"
                      >
                        {lens.shortName}
                      </Link>
                      {lens.brand && (
                        <span className="block text-xs font-normal text-ink/60">
                          {lens.brand}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.key}
                    className={
                      i % 2 ? "bg-cream/60" : "bg-white"
                    }
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-5 py-4 align-top font-semibold text-brand-950"
                    >
                      {row.label}
                    </th>
                    {lenses.map((lens) => (
                      <td
                        key={lens.slug}
                        className="px-5 py-4 align-top leading-snug text-ink/80"
                      >
                        {lens.table[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-brand-900/10 bg-brand-50/60">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-5 py-4 align-top font-semibold text-brand-950"
                  >
                    Cost note
                  </th>
                  {lenses.map((lens) => (
                    <td
                      key={lens.slug}
                      className="px-5 py-4 align-top leading-snug text-ink/70"
                    >
                      {lens.costNote}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Scroll sideways on smaller screens. Exact recommendations depend on
            your measurements and eye health; this table is a starting point
            for the conversation, not a substitute for it.
          </p>
        </Reveal>
      </Section>

      <CTASection
        title="Bring your questions. We love this conversation."
        lede="Lens selection is where surgery becomes personal. We will walk through your life, your measurements, and this table until the choice feels obvious."
        secondaryLabel="Financing options"
        secondaryHref="/patients/financing"
      />
    </>
  );
}
