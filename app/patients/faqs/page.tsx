import type { Metadata } from "next";
import { PageHero, Section, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQList from "@/components/FAQList";
import { generalFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs — Answered Like We Answer Them in the Exam Room",
  description:
    "Honest answers to the questions patients ask most about LASIK, cataract surgery, lens options, insurance, and recovery.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Ask us anything. Here's a head start."
        lede="These are the questions we hear most, answered the same way we answer them face to face: plainly, and without spin."
      />
      <Section>
        <Reveal>
          <FAQList faqs={generalFaqs} />
        </Reveal>
        <Reveal className="mt-8">
          <p className="text-ink/70">
            Have a question that is not here?{" "}
            <CTALink href="/book" variant="link">
              Ask us directly
            </CTALink>
          </p>
        </Reveal>
      </Section>
      <CTASection />
    </>
  );
}
