import { CTALink, SectionHeading } from "@/components/ui";
import { locations } from "@/content/site";

export default function CTASection({
  eyebrow = "Take the next step",
  title = "Ready to see what better vision feels like?",
  lede = "Start with a conversation. We will look at your eyes, listen to how you live, and give you an honest recommendation. No pressure, ever.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/book",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="on-dark bg-pine-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <SectionHeading dark eyebrow={eyebrow} title={title} lede={lede} />
          <div className="flex shrink-0 flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <CTALink href={primaryHref} variant="accent" size="lg">
                {primaryLabel}
              </CTALink>
              {secondaryLabel && secondaryHref && (
                <CTALink href={secondaryHref} variant="onDark" size="lg">
                  {secondaryLabel}
                </CTALink>
              )}
            </div>
            <div className="text-sm text-pine-200/80">
              {locations.map((loc) => (
                <p key={loc.slug}>
                  {loc.name}:{" "}
                  <a
                    href={loc.phoneHref}
                    className="font-semibold text-cream hover:underline"
                  >
                    {loc.phone}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
