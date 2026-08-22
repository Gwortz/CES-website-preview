import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  CheckList,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import DoctorPhoto from "@/components/DoctorPhoto";
import { differentiators } from "@/content/differentiators";
import { doctors } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Why Commonwealth — Physician-Owned Eye Surgery in Kentucky",
  description:
    "Kentucky's largest privately owned cataract and refractive surgery practice. Forty-one years of ophthalmology–optometry collaboration, 150,000+ cataract surgeries, and centers in Lexington and Louisville.",
};

const surgeons = doctors.filter((d) => d.isSurgeon);

export default function WhyCommonwealthPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Commonwealth"
        title="Four things you cannot buy."
        lede="Plenty of practices have the same equipment. What separates a surgical outcome is who owns the practice, how long they have been doing this, how close they are to you, and whether they know when the newest tool is the right one."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book a Consultation
        </CTALink>
        <CTALink href="/doctors" variant="secondary" size="lg">
          Meet the Surgeons
        </CTALink>
      </PageHero>

      {/* ---------------- Jump links ---------------- */}
      <div className="border-b border-brand-900/10 bg-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
          {differentiators.map((d, i) => (
            <a
              key={d.slug}
              href={`#${d.slug}`}
              className="rounded-full border border-brand-900/15 bg-white px-4 py-1.5 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-900/40 hover:bg-brand-50"
            >
              <span className="text-accent-700">{i + 1}.</span> {d.label}
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- The four pillars ---------------- */}
      {differentiators.map((d, i) => {
        const tone = i % 2 === 0 ? "cream" : "white";
        return (
          <Section key={d.slug} id={d.slug} tone={tone}>
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <p className="font-display text-6xl font-semibold leading-none text-brand-900/15">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-4">
                  <SectionHeading eyebrow={d.label} title={d.title} />
                </div>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={90}>
                <div className="space-y-4 text-lg leading-relaxed text-ink/80">
                  {d.body.map((p, n) => (
                    <p key={n}>{p}</p>
                  ))}
                </div>

                {d.points && (
                  <div className="mt-8 rounded-3xl border border-brand-900/10 bg-white/70 p-6 sm:p-7">
                    <CheckList items={d.points} />
                  </div>
                )}

                {d.figures && (
                  <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                    {d.figures.map((f) => (
                      <div
                        key={f.label}
                        className="rounded-3xl border border-brand-900/10 bg-white p-5 shadow-sm"
                      >
                        <dt className="font-display text-2xl font-semibold text-brand-950">
                          {f.value}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink/70">
                          {f.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </Reveal>
            </div>
          </Section>
        );
      })}

      {/* ---------------- The surgeons behind the numbers ---------------- */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading
            eyebrow="The three surgeons"
            title="The 150,000 belongs to these three."
            lede="Every figure on this page traces back to the same small group of surgeons who own the practice and perform the operations."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {surgeons.map((doc, i) => (
            <Reveal key={doc.slug} delay={i * 90}>
              <Link
                href={`/doctors/${doc.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-900/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <DoctorPhoto
                  photo={doc.photo}
                  name={doc.name}
                  className="aspect-[4/3]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-brand-950">
                    {doc.displayName}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-700">
                    {doc.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {doc.focus}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 group-hover:text-accent-800">
                    Read the full bio
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="See for yourself"
        title="Talk to the surgeon who would do your surgery."
        lede="Not a coordinator, not a sales consultant. You will meet the doctor, get an honest read on whether a procedure makes sense for you, and hear it plainly if it does not."
        primaryLabel="Book a Consultation"
        primaryHref="/book"
        secondaryLabel="Meet the Doctors"
        secondaryHref="/doctors"
      />
    </>
  );
}
