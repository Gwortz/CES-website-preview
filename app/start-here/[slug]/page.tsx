import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { agePaths, getAgePath } from "@/content/age-paths";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  CheckList,
  Card,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return agePaths.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = getAgePath(slug);
  if (!path) return {};
  return {
    title: `${path.ageLabel} — ${path.cardTitle}`,
    description: path.lede,
  };
}

export default async function AgePathPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = getAgePath(slug);
  if (!path) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Start Here · ${path.ageLabel}`}
        title={path.headline}
        lede={path.lede}
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book a Consultation
        </CTALink>
        <CTALink href="/vision-quiz" variant="secondary" size="lg">
          Take the 60-second quiz
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Life at this stage"
              title="Sound familiar?"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              {path.lifeCopy.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-accent-700">
              Matched procedures
            </h3>
            <ul className="mt-4 space-y-4">
              {path.procedures.map((proc) => (
                <li key={proc.name}>
                  <Link
                    href={proc.href}
                    className="group block rounded-3xl border border-brand-900/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-display text-xl font-semibold text-brand-950">
                        {proc.name}
                      </h4>
                      {proc.tag && (
                        <span className="rounded-full bg-accent-100 px-3 py-0.5 text-xs font-bold text-accent-800">
                          {proc.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 leading-relaxed text-ink/75">
                      {proc.blurb}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 group-hover:text-accent-800">
                      Learn more
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Honest candidacy"
            title="Who this path usually fits, and who it might not."
            lede="No procedure fits everyone, and pretending otherwise is how patients end up disappointed. Here is the straight version."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h3 className="font-display text-xl font-semibold text-brand-950">
                Usually a good fit
              </h3>
              <div className="mt-4">
                <CheckList items={path.candidacyGood} />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <h3 className="font-display text-xl font-semibold text-brand-950">
                Worth a careful conversation
              </h3>
              <div className="mt-4">
                <CheckList items={path.candidacyCaution} tone="caution" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal>
          <div className="rounded-3xl border border-brand-900/10 bg-white p-8 sm:p-10">
            <SectionHeading
              eyebrow="If you're not a candidate"
              title={path.notCandidate.title}
              lede={path.notCandidate.body}
            />
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {path.notCandidate.alternatives.map((alt) => (
                <li key={alt.label}>
                  <Link
                    href={alt.href}
                    className="group block h-full rounded-2xl border border-brand-900/10 bg-cream p-5 transition-colors hover:bg-brand-50"
                  >
                    <p className="font-semibold text-brand-950">
                      {alt.label}{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">
                      {alt.note}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Find out where you actually stand."
        lede="One visit, careful measurements, and an honest recommendation, even when that recommendation is to wait."
        secondaryLabel="Take the quiz first"
        secondaryHref="/vision-quiz"
      />
    </>
  );
}
