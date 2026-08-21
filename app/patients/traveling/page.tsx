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
import Ph from "@/components/Ph";

export const metadata: Metadata = {
  title: "Traveling Patients — Worth the Trip, Easy to Make",
  description:
    "Coming to Commonwealth Eye Surgery from out of town? Hotel partnerships, compressed visit schedules, and co-management with your hometown eye doctor.",
};

export default function TravelingPage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Patients drive past a lot of eye clinics to get here."
        lede="From across Kentucky and neighboring states, patients travel to us for surgical care. We have made the logistics simple: partner hotels near the office, visit schedules built around your trip, and follow-up care coordinated with your hometown eye doctor."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Plan My Visit
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-pine-950">
                Partner hotels
              </h2>
              <p className="mt-3 leading-relaxed text-ink/75">
                We partner with hotels near our offices so surgical patients
                and their drivers have a comfortable, convenient stay.{" "}
                <Ph>Hotel partner names and rates</Ph>
              </p>
            </Card>
          </Reveal>
          <Reveal delay={70}>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-pine-950">
                Compressed schedules
              </h2>
              <p className="mt-3 leading-relaxed text-ink/75">
                We stack your consultation, measurements, and pre-operative
                visit to minimize trips. Many patients need just two visits to
                town: one to plan, one for surgery.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={140}>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-pine-950">
                Follow-up near home
              </h2>
              <p className="mt-3 leading-relaxed text-ink/75">
                Through co-management, your hometown optometrist can handle
                much of your after-care, with our team a phone call away.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="What to plan for."
          />
          <div className="mt-6 max-w-2xl">
            <CheckList
              items={[
                "You will need a driver on surgery day",
                "Plan to stay in town the first night after surgery for your next-morning check",
                "Bring sunglasses; your eyes will thank you on the drive home",
                "Our team helps arrange hotel bookings when you schedule",
              ]}
            />
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Tell us where you're coming from."
        lede="Call either office and we will build a visit plan around your drive, not the other way around."
      />
    </>
  );
}
