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
  title: "Financing — Make Great Vision a Monthly Number",
  description:
    "Financing options for LASIK, RLE, and premium lens surgery at Commonwealth Eye Surgery. Free LASIK consultations, clear quotes, no surprises.",
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Think monthly, not lump sum."
        lede="Most of our vision correction patients finance their procedure, often for less per month than they were spending on contacts and glasses. We will give you one clear quote, in writing, before you decide anything."
      >
        <CTALink href="/book" variant="accent" size="lg">
          Get My Quote at a Free Consult
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Financing partners",
              body: (
                <>
                  We offer 24-month no-interest financing for qualified
                  applicants, alongside monthly payment plans through
                  healthcare financing providers.{" "}
                  <Ph>Financing partner names and full terms</Ph>
                </>
              ),
            },
            {
              title: "Pre-tax dollars",
              body: (
                <>
                  HSA and FSA funds can typically be applied to LASIK and other
                  vision correction procedures, stretching pre-tax dollars
                  further.
                </>
              ),
            },
            {
              title: "One transparent quote",
              body: (
                <>
                  Your quote covers the procedure, follow-up visits, and any
                  enhancement policy in plain terms. <Ph>Enhancement policy details</Ph>
                </>
              ),
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Card className="h-full">
                <h2 className="font-display text-xl font-semibold text-brand-950">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/75">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="The honest math"
            title="Compare it to the cost of doing nothing."
            lede="Contacts, solutions, glasses, sunglasses with prescription, repeat for decades. Many patients find surgery is the cheaper path over ten years, before counting the parts of life it gives back."
          />
          <div className="mt-8 max-w-2xl">
            <CheckList
              items={[
                "Free LASIK consultations, so finding out costs nothing",
                "Clear pricing at your visit, never a phone-quote guessing game",
                "No commission structure: the person quoting you is not paid to upsell you",
              ]}
            />
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Numbers first, decisions second."
        lede="Come in, get measured, and leave with a real quote you can think over at home. That is the whole ask."
      />
    </>
  );
}
