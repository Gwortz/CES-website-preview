import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { lenses, getLens } from "@/content/lenses";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  CheckList,
  Card,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import LensDiagram from "@/components/LensDiagram";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export function generateStaticParams() {
  return lenses.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lens = getLens(slug);
  if (!lens) return {};
  return {
    title: `${lens.name} — ${lens.tag}`,
    description: lens.summary,
  };
}

export default async function LensPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lens = getLens(slug);
  if (!lens) notFound();

  const others = lenses.filter((l) => l.slug !== lens.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Lens Options${lens.brand ? ` · ${lens.brand}` : ""}`}
        title={lens.name}
        lede={lens.summary}
      >
        <CTALink href="/book" variant="accent" size="lg">
          Discuss This Lens
        </CTALink>
        <CTALink href="/cataracts/lens-options#compare" variant="secondary" size="lg">
          Compare all lenses
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="How it works" title={lens.tag} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              {lens.howItWorks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            {lens.video ? (
              <YouTubeEmbed videoId={lens.video.id} title={lens.video.title} />
            ) : (
              <LensDiagram slug={lens.slug} />
            )}
            <Card className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">
                Cost note
              </h3>
              <p className="mt-2 leading-relaxed text-ink/80">{lens.costNote}</p>
              <div className="mt-4">
                <CTALink href="/patients/financing" variant="link">
                  How financing works here
                </CTALink>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-brand-950">
                Who it tends to fit
              </h2>
              <div className="mt-4">
                <CheckList items={lens.bestFor} />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full border-accent-200 bg-accent-50/50">
              <h2 className="font-display text-xl font-semibold text-brand-950">
                The honest tradeoffs
              </h2>
              <div className="mt-4">
                <CheckList items={lens.tradeoffs} tone="caution" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal>
          <SectionHeading
            eyebrow="Keep comparing"
            title="Other lens classes worth knowing."
          />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/cataracts/lens-options/${other.slug}`}
                  className="group block h-full rounded-2xl border border-brand-900/10 bg-white p-5 transition-colors hover:bg-brand-50"
                >
                  <p className="font-semibold text-brand-950">
                    {other.shortName}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {other.tag}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <CTALink href="/cataracts/lens-options#compare" variant="link">
              See the full comparison table
            </CTALink>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title={`Is the ${lens.shortName} lens your fit?`}
        lede="Your measurements and your life answer that better than any web page. Come talk it through with people who do this every day."
      />
    </>
  );
}
