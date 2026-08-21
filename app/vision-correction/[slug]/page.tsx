import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { procedures, getProcedure } from "@/content/procedures";
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
import ImagePh from "@/components/ImagePh";
import { PhText } from "@/components/Ph";
import VideoSection from "@/components/VideoSection";
import { videosFor, type PracticeVideo } from "@/content/videos";

const procedureVideoKey: Record<string, PracticeVideo["procedure"]> = {
  lasik: "LASIK",
  prk: "PRK",
  "evo-icl": "EVO ICL",
};

const kindOrder: Record<PracticeVideo["kind"], number> = {
  explainer: 0,
  doctor: 1,
  welcome: 2,
  testimonial: 3,
};

export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proc = getProcedure(slug);
  if (!proc) return {};
  return {
    title: `${proc.name} — ${proc.tag}`,
    description: proc.heroLede,
  };
}

export default async function ProcedurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proc = getProcedure(slug);
  if (!proc) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Vision Correction · ${proc.fullName}`}
        title={proc.name}
        lede={proc.heroLede}
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book a Free Consultation
        </CTALink>
        <CTALink href="/vision-quiz" variant="secondary" size="lg">
          Is this my best fit?
        </CTALink>
      </PageHero>

      {/* At a glance */}
      <section
        aria-label={`${proc.name} at a glance`}
        className="border-b border-brand-900/10 bg-sand"
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
            {proc.atAGlance.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                  {item.label}
                </dt>
                <dd className="mt-1.5 font-semibold leading-snug text-brand-950">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why patients choose it"
              title={`What ${proc.name} gives you back`}
            />
            <div className="mt-6">
              <CheckList items={proc.benefits} />
            </div>
            <div className="mt-8">
              <ImagePh
                variant="photo"
                label={`${proc.name} lifestyle imagery placeholder`}
                className="aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Step by step" title="How it works" />
            <ol className="mt-6 space-y-6">
              {proc.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-950 font-display text-lg font-semibold text-cream"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-950">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-ink/75">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* Realistic expectations */}
      <Section tone="white" id="expectations">
        <Reveal>
          <SectionHeading
            eyebrow="Realistic expectations"
            title="What we promise, and what we refuse to."
            lede="Great outcomes come from honest selection, careful measurement, and technology matched to your eye. Here is the straight version, the same one we give our own families."
          />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
            {proc.expectations.map((p, i) => (
              <p key={i}>
                <PhText text={p} />
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-brand-950">
                Usually a good fit
              </h2>
              <div className="mt-4">
                <CheckList items={proc.goodFit} />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-brand-950">
                Worth a careful conversation
              </h2>
              <div className="mt-4">
                <CheckList items={proc.caution} tone="caution" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <VideoSection
        title="See it for yourself."
        lede={`Real ${proc.name} videos from our team and our patients, straight from the practice's YouTube channel.`}
        videos={[...videosFor(procedureVideoKey[proc.slug])]
          .sort((a, b) => kindOrder[a.kind] - kindOrder[b.kind])
          .slice(0, 6)}
        tone="white"
      />

      <Section tone="sand">
        <Reveal>
          <SectionHeading
            eyebrow="Related options"
            title="If this is not your fit, one of these likely is."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {proc.crossLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group block h-full rounded-2xl border border-brand-900/10 bg-white p-5 transition-colors hover:bg-brand-50"
                >
                  <p className="font-semibold text-brand-950">
                    {link.label}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {link.note}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CTASection
        title={`Find out if ${proc.name} fits your eyes.`}
        lede="Free consultation, complete measurements, and an honest recommendation. No commission, no pressure."
      />
    </>
  );
}
