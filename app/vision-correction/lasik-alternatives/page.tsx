import Link from "next/link";
import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  CheckList,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "LASIK Alternatives — What We Do When LASIK Isn't Your Fit",
  description:
    "Told you're not a LASIK candidate? PRK, EVO ICL, and Refractive Lens Exchange each rescue a different kind of no. Here is how we route you to a real answer.",
};

const routes = [
  {
    reason: "Your corneas are too thin, or their surface is irregular",
    answer: "PRK",
    href: "/vision-correction/prk",
    body: "PRK applies the identical laser correction without creating a flap, so it needs less corneal thickness. The first week asks more patience. The end result matches LASIK.",
  },
  {
    reason: "Your prescription is too strong for laser reshaping",
    answer: "EVO ICL",
    href: "/vision-correction/evo-icl",
    body: "Instead of removing tissue, the EVO ICL adds a lens inside the eye. It treats strong nearsightedness beyond LASIK's comfortable range, and it is removable.",
  },
  {
    reason: "You are past your mid-40s and reading glasses have joined the picture",
    answer: "Refractive Lens Exchange",
    href: "/cataracts/refractive-lens-exchange",
    body: "At this stage the natural lens is the real problem. Replacing it can restore distance and reading range at once, and takes future cataracts off the table entirely.",
  },
  {
    reason: "Your eyes run dry",
    answer: "Treat first, then reassess",
    href: "/book",
    body: "Dry eye is often treatable. We treat the surface first, then remeasure. Sometimes that reopens LASIK. When it does not, PRK or EVO ICL usually will.",
  },
];

export default function LasikAlternativesPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision Correction"
        title="Not a LASIK candidate? Good. Now we can find what is."
        lede="Being told no to LASIK usually just means LASIK was the wrong question. Every reason for a no has its own better answer, and routing you to it is the part of this job we take most seriously."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Get a Real Answer
        </CTALink>
        <CTALink href="/vision-quiz" variant="secondary" size="lg">
          Take the 60-second quiz
        </CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The no-to-yes map"
            title="Why you heard no, and where that points instead."
          />
        </Reveal>
        <div className="mt-10 space-y-5">
          {routes.map((route, i) => (
            <Reveal key={route.answer + i} delay={i * 60}>
              <Link
                href={route.href}
                className="group grid gap-4 rounded-3xl border border-brand-900/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink/50">
                    If the reason was
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-brand-950 sm:text-2xl">
                    {route.reason}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink/75">
                    {route.body}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 justify-self-start rounded-full bg-brand-950 px-5 py-2.5 font-semibold text-cream transition-colors group-hover:bg-brand-800 sm:justify-self-end">
                  {route.answer}
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
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Why we work this way"
              title="A candidacy exam should never be a sales funnel."
              lede="Some practices treat every walk-in as a LASIK sale. We treat every walk-in as a set of measurements with one right answer. Sometimes that answer is a different procedure. Sometimes it is wait. Our surgeons put their names on outcomes, not volume."
            />
            <div className="rounded-3xl bg-brand-50 p-8">
              <h3 className="font-display text-xl font-semibold text-brand-950">
                What your consultation covers
              </h3>
              <div className="mt-4">
                <CheckList
                  items={[
                    "Corneal thickness and topography mapping",
                    "Dry eye and ocular surface assessment",
                    "Pupil size and night-vision risk factors",
                    "Prescription stability review",
                    "A plain-language recommendation with alternatives explained",
                  ]}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Bring us your no."
        lede="If you were turned away from LASIK elsewhere, bring your questions. You will leave with a real path, even if the honest answer is not surgery."
      />
    </>
  );
}
