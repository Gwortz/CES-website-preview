import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";
import { generalFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "For Patients — Financing, Insurance, Forms & FAQs",
  description:
    "Everything you need before your visit: financing options, insurance guidance, patient forms, traveling patient help, and honest answers to common questions.",
};

const cards = [
  {
    href: "/patients/financing",
    title: "Financing",
    body: "Monthly payment plans that make premium vision a budget line, not a windfall decision. Free LASIK consultations, always.",
  },
  {
    href: "/patients/insurance",
    title: "Insurance",
    body: "What insurance and Medicare typically cover, what they do not, and how our team helps you sort your specific plan.",
  },
  {
    href: "/patients/forms",
    title: "Patient forms",
    body: "Complete your paperwork at home so your visit starts on time and stays about your eyes.",
  },
  {
    href: "/patients/traveling",
    title: "Traveling patients",
    body: "Coming from out of town? We partner with nearby hotels and build your visit schedule around your trip.",
  },
  {
    href: "/patients/faqs",
    title: "FAQs",
    body: "The questions every patient asks, answered the way we answer them in the exam room.",
  },
];

export default function PatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="The practical stuff, made painless."
        lede="Good surgical care includes the parts that happen outside the operating room: clear costs, honest insurance guidance, and paperwork that respects your time."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Book a Consultation
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.href} delay={i * 60}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <h2 className="font-display text-2xl font-semibold text-brand-950">
                  {card.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                  {card.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent-700 group-hover:text-accent-800">
                  Learn more
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
        <Reveal>
          <SectionHeading
            eyebrow="Quick answers"
            title="The questions everyone asks first."
          />
        </Reveal>
        <Reveal className="mt-8">
          <FAQList faqs={generalFaqs.slice(0, 4)} />
        </Reveal>
        <Reveal className="mt-6">
          <CTALink href="/patients/faqs" variant="link">
            See all FAQs
          </CTALink>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
