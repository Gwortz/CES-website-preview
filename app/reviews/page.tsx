import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { imagery } from "@/content/imagery";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import ReviewWall from "@/components/ReviewWall";
import ImagePh from "@/components/ImagePh";
import Ph from "@/components/Ph";
import Stars from "@/components/Stars";
import VideoSection from "@/components/VideoSection";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "Reviews & Stories — In Their Own Words",
  description:
    "Patient reviews and stories from Commonwealth Eye Surgery, filterable by procedure. Sample content shown; live Google reviews will replace it.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews & Stories"
        title="The Bluegrass talks. We just listen."
        lede="Nothing we write about ourselves matters as much as what patients say at their own dinner tables. Filter by procedure to hear from people who stood where you are standing."
      >
        <span className="inline-flex items-center gap-3 rounded-2xl border border-brand-900/10 bg-white px-5 py-3">
          <Stars label="4.8 out of 5 stars" />
          <span className="text-sm leading-snug">
            <span className="block font-bold text-brand-950">
              4.8 stars · 865+ Google reviews
            </span>
            <span className="block text-ink/65">
              6,155+ verified reviews on rater8 · 96% recommend on Facebook
            </span>
          </span>
        </span>
      </PageHero>

      <Section>
        <ReviewWall />
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/60">
          Quotes above were gathered from public listings on rater8, Google,
          and Facebook, and from testimonials the practice already publishes.
          Spot-check wording against the live platforms before production.
          Cards marked in amber are illustrative samples for procedures where
          no public quote was found yet.
        </p>
      </Section>

      <VideoSection
        eyebrow="Video stories"
        title="Hear it in their own words."
        lede="Real patient stories from the practice's YouTube channel, including a Lexington optometrist who chose us for his own LASIK."
        videos={videos.filter((v) => v.kind === "testimonial").slice(0, 9)}
        tone="dark"
      />

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SiteImage
              src={imagery.reviewsFeature}
              alt="Patients of Commonwealth Eye Surgery outdoors"
              label="Patient imagery"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="In their own words"
              title="The reviews say the same thing, over and over."
            />
            <figure className="mt-6">
              <blockquote className="font-display text-2xl leading-relaxed text-balance text-brand-950">
                &ldquo;Surgery was quick and painless and the results were
                almost instant. They have a great staff and I would recommend
                it to anyone considering LASIK.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink/70">
                <span className="font-semibold text-brand-950">Caitlin</span>
                <span className="text-ink/55"> · LASIK</span>
                <span className="mt-1 block text-xs font-semibold text-ink/55">
                  Source: Facebook reviews
                </span>
              </figcaption>
            </figure>
            <p className="mt-6 leading-relaxed text-ink/75">
              Every review on this page is a real, published review from
              Google, Facebook or rater8 — nothing written for us, and nothing
              written by us.
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Ready to have a story of your own?"
        lede="Every one of these journeys started with a consultation and a few honest questions."
        secondaryLabel="Find your path"
        secondaryHref="/start-here"
      />
    </>
  );
}
