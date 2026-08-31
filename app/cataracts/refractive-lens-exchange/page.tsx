import Link from "next/link";
import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  CheckList,
  Card,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import { imagery } from "@/content/imagery";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";
import VideoSection from "@/components/VideoSection";
import { videosFor } from "@/content/videos";

export const metadata: Metadata = {
  title: "Refractive Lens Exchange — End the Reader Shuffle",
  description:
    "RLE replaces the stiffening natural lens with an advanced implant, restoring range and preventing cataracts entirely. The honest option for ages 45 to 60.",
};

const steps = [
  {
    title: "The evaluation",
    body: "We measure your eyes thoroughly and, just as carefully, listen to how you live: night driving, screens, hobbies, work. The lens choice grows out of that conversation.",
  },
  {
    title: "The procedure",
    body: "RLE is the same trusted procedure as modern cataract surgery, done before a cataract forms. About 15 minutes per eye, numbing drops, home the same morning.",
  },
  {
    title: "The lens",
    body: "Your natural lens is replaced with the advanced lens you chose: trifocal, extended depth of focus, toric, or the Light Adjustable Lens.",
  },
  {
    title: "The rest of your life",
    body: "The new lens never stiffens and never clouds. Whatever range it gives you, it keeps giving you. You will never need cataract surgery.",
  },
];

export default function RLEPage() {
  return (
    <>
      <PageHero
        eyebrow="Cataracts & Lenses · Ages 45–60"
        title="Refractive Lens Exchange: fix the lens, not just the symptoms."
        lede="In your 40s and 50s, the natural lens inside your eye stiffens and starts its slow slide toward cataract. Reading glasses are the first toll. RLE replaces that aging lens with an advanced one, restoring range now and taking cataracts off the table forever."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book an RLE Consultation
        </CTALink>
        <CTALink href="/start-here/45-60" variant="secondary" size="lg">
          The 45–60 path
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Why not just LASIK?"
              title="Because at this age, the lens is the problem."
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                LASIK reshapes the front surface of the eye. That works
                beautifully when the lens behind it is young and flexible.
              </p>
              <p>
                After 45, that lens stiffens a little more every year. LASIK
                cannot stop it. You can laser the surface perfectly and still
                need readers next year, and still develop a cataract next
                decade.
              </p>
              <p>
                RLE goes to the source. One procedure, and the aging part of
                the system is replaced with a lens that will not change again.
                That is why, for many patients in this window, it is the honest
                recommendation even though LASIK is the more famous word.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SiteImage
              src={imagery.rleLifestyle}
              alt="An active couple cycling outdoors without reading glasses"
              label="Life without the reader shuffle"
              className="aspect-[4/3]"
            />
            <Card className="mt-6">
              <h3 className="font-display text-xl font-semibold text-brand-950">
                RLE in one sentence
              </h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                It is cataract surgery&rsquo;s technology, applied a decade
                early, on your terms, with the lens of your choice.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Step by step"
            title="How RLE works."
          />
        </Reveal>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70} as="li">
              <div className="h-full rounded-3xl border border-brand-900/10 bg-cream p-6">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-950 font-display text-lg font-semibold text-cream"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-brand-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-brand-950">
                The lens is the decision that matters.
              </h3>
              <p className="mt-1 text-ink/70">
                Every lens class we offer for cataract surgery is available for
                RLE, tradeoffs and all.
              </p>
            </div>
            <CTALink href="/cataracts/lens-options" variant="primary">
              Explore lens options
            </CTALink>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-brand-950">
                RLE tends to fit
              </h2>
              <div className="mt-4">
                <CheckList
                  items={[
                    "Ages roughly 45 to 60, dependent on readers, progressives, or bifocals",
                    "People who want one procedure with a permanent answer",
                    "Strong prescriptions that laser surgery cannot fully treat",
                    "Anyone told they have early lens changes but not yet a cataract",
                  ]}
                />
              </div>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full border-accent-200 bg-accent-50/50">
              <h2 className="font-display text-xl font-semibold text-brand-950">
                Honest cautions
              </h2>
              <div className="mt-4">
                <CheckList
                  tone="caution"
                  items={[
                    "It is intraocular surgery, with the same rare risks as cataract surgery, discussed plainly at your visit",
                    "Diffractive lenses can bring halos at night; lens choice manages this tradeoff",
                    "It is typically not covered by insurance, since no cataract is present. Financing is available",
                    "Under 45 with distance-only needs? LASIK or the EVO ICL is usually the better tool",
                  ]}
                />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <VideoSection
        title="What is RLE? Hear it from our team."
        videos={videosFor("RLE")}
        tone="white"
      />

      <Section tone="sand">
        <Reveal>
          <div className="rounded-3xl border border-brand-900/10 bg-white p-8 sm:p-10">
            <SectionHeading
              eyebrow="One more honest note"
              title="RLE and cataract surgery are the same operation."
              lede="If you wait until a cataract forms, insurance typically helps pay for the surgery itself, and you fund only the lens upgrade. If you go now, you pay for the procedure but stop renting your vision to reading glasses years earlier. Neither answer is wrong. We will lay out both timelines for your eyes and let you choose."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <CTALink href="/patients/financing" variant="primary">
                See financing options
              </CTALink>
              <CTALink href="/vision-quiz" variant="secondary">
                Check my likely path
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Ready to retire the readers?"
        lede="Come in for measurements and a straight conversation about whether RLE, LASIK, or waiting is your best move."
      />
    </>
  );
}
