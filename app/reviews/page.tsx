import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
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
        <span className="inline-flex items-center gap-3 rounded-2xl border border-pine-900/10 bg-white px-5 py-3">
          <Stars label="4.8 out of 5 stars" />
          <span className="text-sm leading-snug">
            <span className="block font-bold text-pine-950">
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
        <Reveal>
          <SectionHeading
            eyebrow="Patient stories"
            title="Longer stories, told properly."
            lede="Some outcomes deserve more than a star rating: the night-shift nurse who got her confidence back, the pilot, the grandmother who saw a first birthday clearly. Written patient stories will live here."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["A LASIK story", "A cataract story", "An RLE story"].map(
            (label, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="rounded-3xl border border-pine-900/10 bg-cream p-5">
                  <ImagePh
                    variant="photo"
                    label={`${label} — feature imagery placeholder`}
                    className="aspect-[16/10]"
                  />
                  <h3 className="mt-4 font-display text-xl font-semibold text-pine-950">
                    <Ph>{label} headline</Ph>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    Written patient story placeholder. Real stories, gathered
                    with patient permission, replace these cards.
                  </p>
                </div>
              </Reveal>
            )
          )}
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
