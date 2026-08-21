import Link from "next/link";
import type { Metadata } from "next";
import { agePaths } from "@/content/age-paths";
import { PageHero, Section, SectionHeading, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Start Here — Find Your Path by Age",
  description:
    "The right vision procedure depends on your age and how you live. Find the path built for you: 18–45, 45–60, or 60+.",
};

export default function StartHerePage() {
  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title="Find your path in two minutes."
        lede="Vision surgery is not one product. It is a set of tools, and the right one depends mostly on your age, because your eyes change in predictable ways across the decades. Start with your age band, or let the quiz route you."
      >
        <CTALink href="/vision-quiz" variant="accent" size="lg">
          Take the 60-second quiz
        </CTALink>
        <CTALink href="/cataract-self-test" variant="secondary" size="lg">
          Cataract Self-Test
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {agePaths.map((path, i) => (
            <Reveal key={path.slug} delay={i * 90}>
              <Link
                href={`/start-here/${path.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-pine-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pine-900/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper-700">
                  {path.ageLabel}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-pine-950">
                  {path.cardTitle}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                  {path.lede}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {path.procedures.slice(0, 3).map((proc) => (
                    <li
                      key={proc.name}
                      className="rounded-full bg-pine-50 px-3 py-1 text-xs font-semibold text-pine-800"
                    >
                      {proc.name}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-copper-700 group-hover:text-copper-800">
                  Explore this path
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
          <SectionHeading
            eyebrow="Why age first?"
            title="Because the lens inside your eye has a life story."
            lede="In your 20s and 30s it flexes instantly between far and near, so fixing the surface of the eye is enough. In your 40s and 50s it stiffens, and reading glasses creep in. After 60 it clouds into a cataract. Match the procedure to the chapter, and the results last."
          />
        </Reveal>
      </Section>

      <CTASection
        title="Prefer to just talk to a person?"
        lede="Skip the reading. Book a consultation and we will map your options to your eyes, honestly, in one visit."
      />
    </>
  );
}
