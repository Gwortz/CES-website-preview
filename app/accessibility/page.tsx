import type { Metadata } from "next";
import { PageHero, Section, CheckList, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { locations } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Commonwealth Eye Surgery's commitment to an accessible website for all visitors, including patients with low vision.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="This site is built for eyes that don't see well yet."
        lede="Many of our visitors are here precisely because their vision is struggling. Accessibility is not a compliance checkbox for an eye surgery practice. It is the front door."
      />
      <Section>
        <Reveal>
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-pine-950">
                Our commitment
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">
                We aim to meet or exceed the Web Content Accessibility
                Guidelines (WCAG) 2.1 Level AA across this site. That work is
                ongoing, and we treat it as part of patient care.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-pine-950">
                What we've built in
              </h2>
              <div className="mt-4">
                <CheckList
                  items={[
                    "Semantic HTML structure with proper headings and landmarks",
                    "A skip-to-content link on every page",
                    "Visible focus indicators on every interactive element",
                    "Color contrast meeting WCAG AA throughout",
                    "Text alternatives for images and image placeholders",
                    "Full keyboard operability, including menus, quizzes, and forms",
                    "Motion that respects your reduced-motion system setting",
                    "Large, readable type and generous spacing",
                  ]}
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-pine-950">
                Found a barrier?
              </h2>
              <p className="mt-3 leading-relaxed text-ink/80">
                If any part of this site is hard for you to use, please tell
                us. We will fix it, and we will help you get whatever
                information you were looking for by phone in the meantime.
              </p>
              <ul className="mt-4 space-y-1 text-ink/80">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    {loc.name}:{" "}
                    <a
                      href={loc.phoneHref}
                      className="font-semibold text-pine-800 underline decoration-pine-300 underline-offset-2 hover:text-pine-950"
                    >
                      {loc.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <CTALink href="/" variant="secondary">
                Back to home
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
