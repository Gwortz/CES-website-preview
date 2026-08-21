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
import Ph from "@/components/Ph";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us — Why Choose Commonwealth Eye Surgery",
  description:
    "Kentucky's first optometric co-management surgical center. State-of-the-art surgery with old-fashioned warmth, in Lexington and Louisville.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="State-of-the-art surgery. Old-fashioned warmth."
        lede="Commonwealth Eye Surgery was built on an idea that was radical at the time: that your hometown eye doctor and your surgeon should work as one team, with you at the center."
      >
        <CTALink href="/doctors" variant="accent" size="lg">
          Meet the Doctors
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="The co-management story"
              title="Kentucky's first optometric co-management surgical center."
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Most surgical practices ask patients to leave the eye doctor
                who knows them best at the door. We built the opposite: a
                center where optometrists across Kentucky refer their patients
                for surgery, stay involved through recovery, and take their
                patients back with complete records and open phone lines.
              </p>
              <p>
                That structure keeps everyone honest. Referring doctors see our
                outcomes up close, year after year. They keep referring, and
                many became patients themselves. It is the quiet engine behind
                our tagline: {site.tagline.toLowerCase().replace(/\.$/, "")}.
              </p>
              <p>
                The same spirit shaped everything since, from bringing the
                LensAR femtosecond laser to the region to co-founding Eye
                Surgery Today, a national patient education platform.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5">
              <ImagePh
                variant="photo"
                label="The team and surgery center — imagery placeholder"
                className="aspect-[4/3]"
              />
              <Card>
                <h3 className="font-display text-xl font-semibold text-pine-950">
                  The surgery center
                </h3>
                <div className="mt-4">
                  <CheckList
                    items={[
                      "Dedicated ophthalmic surgical suites in Lexington",
                      "LensAR femtosecond laser, introduced to the region by our surgeons",
                      "First femtosecond laser cataract surgery in Kentucky, performed by Dr. Ferguson",
                      "Advanced diagnostics guiding every lens selection",
                    ]}
                  />
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            title="Awards and honors."
            lede="Placeholder badges below mark where verified awards, years, and honors will be displayed."
          />
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <Reveal key={n} delay={n * 60} as="li">
              <div className="flex flex-col items-center rounded-3xl border border-pine-900/10 bg-cream p-6 text-center">
                <ImagePh
                  variant="badge"
                  label="Award badge placeholder"
                  className="aspect-square w-24"
                  rounded="rounded-full"
                />
                <p className="mt-4 text-sm font-semibold text-pine-950">
                  <Ph>Award name</Ph>
                </p>
                <p className="mt-1 text-xs text-ink/60">
                  <Ph>Year</Ph>
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sand">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <SectionHeading
                eyebrow="Giving back"
                title="Philanthropy"
                lede="Care for the community extends beyond the clinic. Details of the practice's philanthropic work, sponsorships, and charitable surgical care belong here."
              />
              <p className="mt-4 text-sm">
                <Ph>Philanthropy programs and partners</Ph>
              </p>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <SectionHeading
                eyebrow="Education"
                title="Eye Surgery Today"
                lede="Our surgeons co-founded Eye Surgery Today to give patients everywhere plain-language answers about modern eye surgery."
              />
              <div className="mt-5">
                <a
                  href={site.eyeSurgeryTodayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-copper-700 hover:text-copper-800"
                >
                  Visit EyeSurgeryToday.com
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Come see how it feels to be treated like family."
        lede="Warmth is not a slogan here. It is a scheduling philosophy, an exam-room habit, and a follow-up phone call."
      />
    </>
  );
}
