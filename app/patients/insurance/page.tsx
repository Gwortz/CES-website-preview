import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  Card,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Ph from "@/components/Ph";

export const metadata: Metadata = {
  title: "Insurance — What's Covered, What's Not, Said Plainly",
  description:
    "How insurance and Medicare typically apply to cataract surgery, premium lenses, LASIK, and RLE at Commonwealth Eye Surgery.",
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Insurance, translated."
        lede="Coverage rules are genuinely confusing, so here is the plain-language version of how they usually work for eye surgery. Our team verifies your specific plan before anything is scheduled."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Typically covered
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-950">
                Medically necessary care
              </h2>
              <ul className="mt-4 space-y-3 leading-relaxed text-ink/80">
                <li>
                  Cataract surgery with a standard monofocal lens, once the
                  cataract meaningfully affects daily life
                </li>
                <li>YAG capsulotomy when haze develops after surgery</li>
                <li>Glaucoma care and medically necessary exams</li>
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">
                Typically out of pocket
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-950">
                Lifestyle upgrades
              </h2>
              <ul className="mt-4 space-y-3 leading-relaxed text-ink/80">
                <li>
                  Premium lenses: toric, EDOF, trifocal, and the Light
                  Adjustable Lens
                </li>
                <li>Laser-assisted cataract surgery upgrades</li>
                <li>LASIK, PRK, EVO ICL, and Refractive Lens Exchange</li>
              </ul>
              <p className="mt-4 text-sm text-ink/60">
                Financing and HSA/FSA funds usually apply to these.
              </p>
            </Card>
          </Reveal>
        </div>
        <Reveal className="mt-8">
          <div className="rounded-3xl bg-brand-50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-brand-950">
              Plans we accept
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink/75">
              <Ph>Accepted insurance plans and networks list</Ph> Our front
              office verifies your benefits before your visit, so there are no
              billing surprises.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="One honest tip"
            title="Do not let coverage choose your lens for you."
            lede="Insurance answers one question: is this medically necessary? It says nothing about which lens fits your life. You will have your lens conversation with a doctor, not a billing code. Then you decide."
          />
          <div className="mt-6">
            <CTALink href="/cataracts/lens-options" variant="link">
              Compare lens options honestly
            </CTALink>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Bring us your insurance card. We do the homework."
        lede="Call either office and our team will verify your benefits before you visit."
      />
    </>
  );
}
