import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locations } from "@/content/site";
import {
  PageHero,
  Section,
  SectionHeading,
  CTALink,
  CheckList,
  Card,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";
import Ph from "@/components/Ph";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.name} Office — ${loc.address1}`,
    description: `Commonwealth Eye Surgery in ${loc.cityStateZip}. ${loc.blurb}`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const isLouisville = loc.slug === "louisville";

  return (
    <>
      <PageHero
        eyebrow={`Locations · ${loc.name}${loc.badge ? ` · ${loc.badge}` : ""}`}
        title={
          isLouisville
            ? "Louisville, the wait is over."
            : "Lexington: where it all started."
        }
        lede={
          isLouisville
            ? "The surgeons Kentucky doctors have quietly recommended for years are now on Ormsby Station Road. Same team, same technology, same old-fashioned warmth, without the drive to Lexington."
            : "Our Alexandria Drive surgical center is the home of Kentucky's first optometric co-management practice, and the place where laser cataract surgery in Kentucky began."
        }
      >
        <CTALink href={`/book?location=${loc.slug}`} variant="accent" size="lg">
          Book at {loc.name}
        </CTALink>
        <a
          href={loc.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-brand-900/30 px-7 py-3.5 text-base font-semibold text-brand-950 transition-colors hover:border-brand-900 hover:bg-brand-50"
        >
          Call {loc.phone}
        </a>
      </PageHero>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <MapEmbed
              name={`${loc.name} office`}
              address={`${loc.address1}, ${loc.cityStateZip}`}
              className="aspect-[16/10]"
            />
          </Reveal>
          <Reveal delay={100}>
            <Card>
              <h2 className="font-display text-2xl font-semibold text-brand-950">
                Visit us
              </h2>
              <dl className="mt-5 space-y-4 text-ink/80">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                    Address
                  </dt>
                  <dd className="mt-1">
                    {loc.address1}
                    <br />
                    {loc.cityStateZip}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={loc.phoneHref}
                      className="font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2 hover:text-brand-950"
                    >
                      {loc.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                    Hours
                  </dt>
                  <dd className="mt-1">
                    {loc.hours[0].days}{" "}
                    {loc.hours[0].hours.startsWith("[") ? (
                      <Ph>{loc.hours[0].hours.slice(1, -1)}</Ph>
                    ) : (
                      loc.hours[0].hours
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                    Parking & arrival
                  </dt>
                  <dd className="mt-1">
                    <Ph>
                      Parking, entrance, and check-in guidance for the{" "}
                      {loc.name} office
                    </Ph>
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <CTALink href={`/book?location=${loc.slug}`} variant="primary">
                  Book at {loc.name}
                </CTALink>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {isLouisville ? (
        <Section tone="white">
          <Reveal>
            <SectionHeading
              eyebrow="Why we came to Louisville"
              title="Louisville patients were already coming to us."
              lede="For years, Louisville families made the drive down I-64 for cataract and refractive surgery. Opening on Ormsby Station Road was the obvious next step: bring the consultation and follow-up care to you, with surgery coordinated seamlessly with our Lexington surgical center."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The same surgeons",
                body: "Drs. Ferguson, Wörtz, and Piracha see Louisville patients directly. No junior bench, no rotating strangers.",
              },
              {
                title: "Everything starts here",
                body: "Consultations, measurements, and post-operative visits happen in Louisville. Your time on the road is reserved for surgery day itself.",
              },
              {
                title: "Now scheduling",
                body: "Appointments are open. Call (502) 306-9551 or book online and choose Louisville.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card className="h-full">
                  <h3 className="font-display text-xl font-semibold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/75">{item.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : (
        <Section tone="white">
          <Reveal>
            <SectionHeading
              eyebrow="The surgical center"
              title="Surgery happens here."
              lede="Our Lexington location houses the practice's surgical suites, including the LensAR femtosecond laser our surgeons introduced to the region. Patients from both offices have surgery here, supported by a team that does this all day, every day."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Central Kentucky's first ophthalmic surgical facility dedicated solely to the surgical care of the eye",
                  "Accredited by the AAAHC",
                  "LensAR femtosecond laser for laser-assisted cataract surgery",
                  "Advanced diagnostics for lens power selection and wavefront-guided LASIK",
                  "Co-management coordination with referring optometrists statewide",
                ]}
              />
            </div>
          </Reveal>
        </Section>
      )}

      <CTASection
        title={`Ready when you are, ${loc.name}.`}
        lede="Book online in two minutes, or call and talk to a person. Either way, you will get straight answers."
        primaryHref={`/book?location=${loc.slug}`}
      />
    </>
  );
}
