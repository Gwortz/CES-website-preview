import Link from "next/link";
import type { Metadata } from "next";
import { procedures } from "@/content/procedures";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import { imagery } from "@/content/imagery";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";

export const metadata: Metadata = {
  title: "LASIK & Vision Correction",
  description:
    "All-laser LASIK with Contoura wavefront-guided mapping, PRK, and the EVO ICL in Lexington and Louisville. Free consultations, honest candidacy answers.",
};

export default function VisionCorrectionHub() {
  return (
    <>
      <PageHero
        eyebrow="LASIK & Vision Correction"
        title="See the world without the middleman."
        lede="Glasses and contacts are a workaround. Vision correction is a fix. Three proven procedures cover nearly every healthy adult under 50, and your measurements decide which one fits. Consultations are free, and the answer you get is honest, even when it is not the one you came in for."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book a Free Consultation
        </CTALink>
        <CTALink href="/vision-quiz" variant="secondary" size="lg">
          Which one fits me?
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {procedures.map((proc, i) => (
            <Reveal key={proc.slug} delay={i * 90}>
              <Link
                href={`/vision-correction/${proc.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <h2 className="font-display text-2xl font-semibold text-brand-950">
                  {proc.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-accent-700">
                  {proc.tag}
                </p>
                <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                  {proc.heroLede.split(". ").slice(0, 2).join(". ")}.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-700 group-hover:text-accent-800">
                  How {proc.name} works
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
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our difference"
              title="Wavefront-guided treatment, and outcomes we actually track."
              lede="Contoura topography maps thousands of points on your cornea, so your laser treatment is built from your eye's real shape rather than an average. Just as important: we track our outcomes over time and show them to you at your consultation. You deserve to make this decision with data from this practice, not a brochure."
            />
            <div className="mt-6">
              <CTALink href="/vision-correction/lasik" variant="link">
                Read the honest LASIK expectations section
              </CTALink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SiteImage
              src={imagery.diagnosticTesting}
              alt="Corneal measurement and diagnostic testing before vision correction"
              label="Diagnostic imaging"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal>
          <div className="rounded-3xl border border-brand-900/10 bg-white p-8 sm:p-10">
            <SectionHeading
              eyebrow="Told no before?"
              title="Not a LASIK candidate is not the end of the sentence."
              lede="About one in five people who ask about LASIK are better served by another procedure. We built a whole page for exactly that moment, so a no to LASIK becomes a yes to something better suited to your eyes."
            />
            <div className="mt-6">
              <CTALink
                href="/vision-correction/lasik-alternatives"
                variant="primary"
              >
                Explore LASIK alternatives
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Find out what your eyes qualify for."
        lede="Free consultation, complete measurements, and a recommendation you can trust. If waiting is the right answer, we will say that too."
      />
    </>
  );
}
