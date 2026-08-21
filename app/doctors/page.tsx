import Link from "next/link";
import type { Metadata } from "next";
import { surgeons, optometrists } from "@/content/doctors";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";
import Ph from "@/components/Ph";

export const metadata: Metadata = {
  title: "Our Doctors — The Doctors the Doctors Choose",
  description:
    "Meet the surgeons and optometrists of Commonwealth Eye Surgery: the team Kentucky physicians trust with their own families' eyes.",
};

function DoctorCard({
  slug,
  name,
  focus,
  role,
  delay,
}: {
  slug: string;
  name: string;
  focus: string;
  role: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/doctors/${slug}`}
        className="group block h-full rounded-3xl border border-pine-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pine-900/10"
      >
        <ImagePh
          variant="portrait"
          label={`${name} — portrait`}
          className="aspect-[4/4.5]"
        />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-copper-700">
          {role}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-pine-950">
          {name}
        </h3>
        <p className="mt-1 text-sm leading-snug text-ink/70">{focus}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-copper-700 group-hover:text-copper-800">
          Read bio
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Doctors"
        title="The doctors the doctors choose."
        lede="When Kentucky physicians, surgeons, and optometrists need eye surgery for themselves or the people they love, they do what everyone does: they ask around. Then they come here."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book a Consultation
        </CTALink>
      </PageHero>

      <section className="border-b border-pine-900/10 bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-lg leading-relaxed text-ink/80">
            <Ph>XXX doctors and their families</Ph> have trusted Commonwealth
            Eye Surgery with their own vision. That referral pattern is the
            credential we are proudest of.
          </p>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="The surgeons"
            title="Three surgeons. One standard."
            lede="Every surgical plan here is built and performed by a fellowship-caliber cataract and refractive surgeon who will know your name and your eyes."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {surgeons.map((doc, i) => (
            <DoctorCard
              key={doc.slug}
              slug={doc.slug}
              name={doc.name}
              focus={doc.focus}
              role={doc.role}
              delay={i * 90}
            />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="The optometric physicians"
            title="The co-management team."
            lede="Commonwealth Eye Surgery was Kentucky's first optometric co-management surgical center. Our optometrists work hand in hand with your hometown eye doctor, so your care before and after surgery stays close to home."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {optometrists.map((doc, i) => (
            <DoctorCard
              key={doc.slug}
              slug={doc.slug}
              name={doc.name}
              focus={doc.focus}
              role={doc.role}
              delay={i * 90}
            />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <Reveal>
          <div className="rounded-3xl border border-pine-900/10 bg-white p-8 sm:p-10">
            <SectionHeading
              eyebrow="For referring doctors"
              title="Your patients come back to you."
              lede="Co-management means exactly that. We operate, you continue the care, and the communication between us is complete and prompt. It is how we have worked since the beginning, and why so many referring doctors are also patients."
            />
            <div className="mt-6">
              <CTALink href="/about" variant="primary">
                Our co-management story
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Meet the team in person."
        lede="Bring your questions. You will leave with straight answers, whichever doctor you see."
      />
    </>
  );
}
