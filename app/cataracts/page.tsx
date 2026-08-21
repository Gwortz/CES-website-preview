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
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";

export const metadata: Metadata = {
  title: "Cataract Surgery, Explained Like You're Family",
  description:
    "What a cataract is, how modern surgery works, and how laser-assisted surgery with LensAR differs. Plain language from Kentucky's laser cataract surgery pioneers.",
};

const steps = [
  {
    title: "The measurements",
    body: "Before surgery we map your eye in detail. These measurements choose the power of your new lens, which is why precision here matters as much as precision in the operating room.",
  },
  {
    title: "The day itself",
    body: "You are awake but relaxed, with numbing drops so you feel pressure at most. The surgery usually takes about 15 minutes. Most people are home for lunch.",
  },
  {
    title: "Removing the cloudy lens",
    body: "Through an opening smaller than a grain of rice, an ultrasound instrument gently breaks up the cloudy lens and washes it away. Doctors call this phacoemulsification. You can just call it the vacuum part.",
  },
  {
    title: "Placing the new lens",
    body: "A folded artificial lens goes in through the same tiny opening and unfolds into place. No stitches are usually needed. The opening seals itself.",
  },
  {
    title: "The recovery",
    body: "Most patients notice clearer, brighter vision within a day or two. Drops protect the eye while it heals. Each eye is usually done separately, a week or two apart.",
  },
];

export default function CataractsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cataracts & Lenses"
        title="Cataract surgery, explained the way we'd explain it to your daughter."
        lede="A cataract is not a film growing over your eye. It is the eye's own lens slowly turning cloudy, like a clear egg white turning opaque in the pan. Surgery replaces that cloudy lens with a clear one, and it is one of the safest, most practiced procedures in all of medicine."
      >
        <CTALink href="/cataract-self-test" variant="accent" size="lg">
          Take the Cataract Self-Test
        </CTALink>
        <CTALink href="/book" variant="secondary" size="lg">
          Book an Evaluation
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="What you might be noticing"
              title="Cataracts sneak up. Here is what they feel like."
            />
            <div className="mt-6">
              <CheckList
                items={[
                  "Headlights at night flare into glare and starbursts",
                  "Reading takes brighter light than it used to",
                  "Colors look duller, browner, or washed out",
                  "New glasses never quite deliver the sharpness you paid for",
                  "You find yourself avoiding driving after dark",
                ]}
              />
            </div>
            <p className="mt-6 leading-relaxed text-ink/75">
              None of these prove you have a cataract. All of them are worth an
              exam. The self-test takes two minutes and gives you an honest
              read.
            </p>
            <div className="mt-4">
              <CTALink href="/cataract-self-test" variant="link">
                Start the self-test
              </CTALink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePh
              variant="photo"
              label="Vision with and without cataract — comparison imagery placeholder"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Step by step"
            title="What actually happens during surgery."
            lede="No jargon walls. Five steps, in plain language."
          />
        </Reveal>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} as="li">
              <div className="h-full rounded-3xl border border-pine-900/10 bg-cream p-6">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-950 font-display text-lg font-semibold text-cream"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-pine-950">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/75">{step.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={steps.length * 60} as="li">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-pine-950 p-6">
              <div className="on-dark">
                <h3 className="font-display text-xl font-semibold text-cream">
                  The one-time choice
                </h3>
                <p className="mt-2 leading-relaxed text-pine-100/85">
                  Since your lens is being replaced anyway, you choose what
                  replaces it. That choice shapes how you see for the rest of
                  your life.
                </p>
              </div>
              <div className="mt-4">
                <CTALink href="/cataracts/lens-options" variant="accent" size="sm">
                  Explore lens options
                </CTALink>
              </div>
            </div>
          </Reveal>
        </ol>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Standard vs. laser-assisted"
              title="Two good ways to do the same surgery."
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Standard cataract surgery uses handheld precision. In skilled
                hands, results are excellent, and it has restored vision for
                millions of people.
              </p>
              <p>
                Laser-assisted surgery adds the LensAR femtosecond laser, which
                makes several of the most delicate steps with computer-guided
                precision, and can soften the cataract before removal. It also
                helps treat astigmatism during the same procedure.
              </p>
              <p>
                We know both approaches well. Dr. Ferguson was the first
                ophthalmologist in Kentucky to perform femtosecond laser
                cataract surgery, and with Dr. Wörtz he brought the LensAR
                laser to the region. We will recommend the approach that fits
                your eye, and tell you plainly when the laser is worth it and
                when it is not.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              <ImagePh
                variant="photo"
                label="LensAR femtosecond laser suite — imagery placeholder"
                className="aspect-[4/3]"
              />
              <Card>
                <h3 className="font-display text-xl font-semibold text-pine-950">
                  Also part of cataract care here
                </h3>
                <div className="mt-4">
                  <CheckList
                    items={[
                      "Advanced diagnostics for accurate lens power selection",
                      "Astigmatism management with toric lenses",
                      "Glaucoma care alongside your cataract plan",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand" id="yag">
        <Reveal>
          <div className="rounded-3xl border border-pine-900/10 bg-white p-8 sm:p-10">
            <SectionHeading
              eyebrow="Years later"
              title="If vision clouds again: the YAG laser."
              lede="A cataract cannot come back. But in some patients, the natural capsule that holds the new lens develops haze months or years later. A painless laser treatment called YAG capsulotomy clears it in minutes, right in the office, and it does not come back after that."
            />
            <div className="mt-6">
              <CTALink href="/book" variant="primary">
                Ask about YAG treatment
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Under 60 and reading this?"
            title="You may not need to wait for a cataract."
            lede="Refractive Lens Exchange is the same surgery, done before a cataract forms, chosen for its vision benefits. If you are in your 40s or 50s and tired of the reader shuffle, that page was written for you."
          />
          <div className="mt-6">
            <Link
              href="/cataracts/refractive-lens-exchange"
              className="inline-flex items-center gap-2 font-semibold text-copper-700 hover:text-copper-800"
            >
              Read about Refractive Lens Exchange
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Wondering if it's time?"
        lede="Early cataracts can be watched honestly for years. Advanced ones steal more life than people realize. An exam tells you exactly where you are."
        secondaryLabel="Take the self-test"
        secondaryHref="/cataract-self-test"
      />
    </>
  );
}
