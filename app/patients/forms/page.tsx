import type { Metadata } from "next";
import { PageHero, Section, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Ph from "@/components/Ph";

export const metadata: Metadata = {
  title: "Patient Forms — Finish the Paperwork at Home",
  description:
    "Download and complete Commonwealth Eye Surgery patient forms before your visit.",
};

const forms = [
  {
    name: "New patient registration",
    note: "Demographics, insurance, and contact details",
  },
  {
    name: "Medical history",
    note: "Medications, allergies, and eye history",
  },
  {
    name: "Privacy practices acknowledgment",
    note: "HIPAA notice and consent",
  },
  {
    name: "Records release",
    note: "Lets us request records from your current eye doctor",
  },
];

export default function FormsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Ten minutes at your kitchen table."
        lede="Complete your forms before you arrive and your appointment starts on time, with all of our attention on your eyes instead of a clipboard."
      />
      <Section>
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {forms.map((form) => (
              <li
                key={form.name}
                className="flex items-start justify-between gap-4 rounded-2xl border border-pine-900/10 bg-white p-6"
              >
                <div>
                  <h2 className="font-semibold text-pine-950">{form.name}</h2>
                  <p className="mt-1 text-sm text-ink/65">{form.note}</p>
                </div>
                <span className="shrink-0 text-sm">
                  <Ph>PDF link</Ph>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/60">
            In the live site, each form links to a downloadable PDF or an
            online intake flow. Placeholder links are shown in amber.
          </p>
          <div className="mt-8">
            <CTALink href="/book" variant="primary">
              Book first, forms after
            </CTALink>
          </div>
        </Reveal>
      </Section>
      <CTASection />
    </>
  );
}
