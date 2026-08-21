import type { Metadata } from "next";
import { locations } from "@/content/site";
import { PageHero, Section, CTALink } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";
import Ph from "@/components/Ph";

export const metadata: Metadata = {
  title: "Locations — Lexington & Louisville",
  description:
    "Commonwealth Eye Surgery serves Kentucky from two locations: our Lexington surgical center and our new Louisville office.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Two doors. One standard of care."
        lede="Our Lexington surgical center has anchored eye care in the Bluegrass for decades. Now our Louisville office brings the same surgeons within easy reach of the whole metro."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 90}>
              <div className="overflow-hidden rounded-3xl border border-brand-900/10 bg-white shadow-sm">
                <div className="relative">
                  <ImagePh
                    variant="map"
                    label={`Embedded map — ${loc.name} office`}
                    className="aspect-[21/10]"
                    rounded="rounded-none"
                  />
                  {loc.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-accent-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow">
                      {loc.badge}
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h2 className="font-display text-3xl font-semibold text-brand-950">
                    {loc.name}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink/75">{loc.blurb}</p>
                  <dl className="mt-6 space-y-3 text-ink/80">
                    <div className="flex gap-3">
                      <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-accent-700">
                        Address
                      </dt>
                      <dd>
                        {loc.address1}, {loc.cityStateZip}
                      </dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-accent-700">
                        Phone
                      </dt>
                      <dd>
                        <a
                          href={loc.phoneHref}
                          className="font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2 hover:text-brand-950"
                        >
                          {loc.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-accent-700">
                        Hours
                      </dt>
                      <dd>
                        {loc.hours[0].days}{" "}
                        {loc.hours[0].hours.startsWith("[") ? (
                          <Ph>{loc.hours[0].hours.slice(1, -1)}</Ph>
                        ) : (
                          loc.hours[0].hours
                        )}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <CTALink href={`/book?location=${loc.slug}`} variant="accent">
                      Book at {loc.name}
                    </CTALink>
                    <CTALink href={`/locations/${loc.slug}`} variant="secondary">
                      Full details
                    </CTALink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection
        title="Traveling from further out?"
        lede="Patients come to us from across Kentucky and beyond. We partner with nearby hotels to make surgical trips simple."
        secondaryLabel="Traveling patient info"
        secondaryHref="/patients/traveling"
      />
    </>
  );
}
