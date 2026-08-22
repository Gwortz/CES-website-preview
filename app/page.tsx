import Link from "next/link";
import type { Metadata } from "next";
import { site, stats, locations } from "@/content/site";
import { surgeons } from "@/content/doctors";
import { reviews } from "@/content/reviews";
import { CTALink, Section, SectionHeading, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Ph from "@/components/Ph";
import ImagePh from "@/components/ImagePh";
import DoctorPhoto from "@/components/DoctorPhoto";
import Stars from "@/components/Stars";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import HeroVideo from "@/components/HeroVideo";
import { getVideo } from "@/content/videos";
import { differentiators } from "@/content/differentiators";
import { awards } from "@/content/awards";

export const metadata: Metadata = {
  title: `${site.name} — Choose the Doctors the Doctors Choose`,
  description: site.description,
};

const agePaths = [
  {
    href: "/start-here/18-45",
    age: "Ages 18–45",
    title: "Ditch the daily routine",
    body: "Contacts before the gym. Foggy glasses on cold mornings. If your eyes are healthy and your prescription is stable, LASIK, PRK, or the EVO ICL can make sharp vision the thing you stop thinking about.",
    procedures: ["LASIK", "PRK", "EVO ICL"],
    cta: "Explore your options",
  },
  {
    href: "/start-here/45-60",
    age: "Ages 45–60",
    title: "Done with the reader shuffle",
    body: "One pair for the menu, one for the dashboard, one lost in the car. Refractive Lens Exchange replaces the aging lens behind it all, and you will never develop a cataract.",
    procedures: ["Refractive Lens Exchange", "Advanced lens implants"],
    cta: "See how RLE works",
  },
  {
    href: "/start-here/60-plus",
    age: "Ages 60+",
    title: "Bring the brightness back",
    body: "Glare at night. Colors gone dull. Cataract surgery today is a brief, comfortable procedure, and premium lenses can leave many patients seeing better than they have in decades.",
    procedures: ["Laser cataract surgery", "Premium lens options"],
    cta: "Learn about cataract care",
  },
];

const videoTestimonialIds = [
  "PsS0ow9UYUY", // Kevin Skidmore, OD — a doctor choosing us for his own LASIK
  "EchitPzl2Kg", // Andrew — LASIK
  "a6cO0qZ6KjE", // Richard — cataract
  "x1v2fKMm3Rw", // Bruce — laser cataract
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="on-dark relative flex min-h-[70vh] items-center overflow-hidden bg-brand-950 lg:min-h-[80vh]">
        <HeroVideo videoId="qzJ0T2KOEIY" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <a
            href="#meet-the-surgeons"
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream/85 transition-colors hover:bg-cream/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
              <path d="M9 6.5v11l9-5.5-9-5.5z" />
            </svg>
            Watch our story with sound
          </a>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Choose the Doctors
            <br />
            the Doctors Choose.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/85 sm:text-xl">
            {site.secondaryTagline} Premier surgical eye care in the Bluegrass,
            from Kentucky&rsquo;s first optometric co-management surgical
            center. Now in Lexington and Louisville.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTALink href="/book" variant="accent" size="lg">
              Book a Consultation
            </CTALink>
            <CTALink href="/start-here" variant="onDark" size="lg">
              Find Your Path
            </CTALink>
          </div>
        </div>
      </section>

      {/* ---------------- Authority stat bar ---------------- */}
      <section
        aria-label="Practice milestones"
        className="border-b border-brand-900/10 bg-sand"
      >
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex max-w-[16rem] flex-col">
                <dt className="order-2 mt-2 text-sm leading-snug text-ink/70">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-lg font-semibold leading-tight text-brand-950 sm:text-xl">
                  {stat.placeholder ? <Ph>{stat.value}</Ph> : stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Why Commonwealth ---------------- */}
      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Why Commonwealth"
            title="Four things you cannot buy."
            lede="Plenty of practices have the same equipment. What separates a surgical outcome is who owns the practice, how long they have been doing this, how close they are to you, and whether they know when the newest tool is the right one."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.slug} delay={i * 90}>
              <Link
                href={`/why-commonwealth#${d.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-brand-900/10 bg-cream p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-semibold text-brand-900/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">
                    {d.label}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-balance text-brand-950">
                  {d.headline}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                  {d.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-700 group-hover:text-accent-800">
                  Read more
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

      {/* ---------------- Start Here — By Age ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Start Here"
            title="Your eyes change with every decade. Your options should too."
            lede="The right procedure depends less on your prescription and more on your age and how you live. Start with the path built for where you are."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {agePaths.map((path, i) => (
            <Reveal key={path.href} delay={i * 90}>
              <Link
                href={path.href}
                className="group flex h-full flex-col rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">
                  {path.age}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-brand-950">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/75">
                  {path.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {path.procedures.map((proc) => (
                    <li
                      key={proc}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800"
                    >
                      {proc}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-700 group-hover:text-accent-800">
                  {path.cta}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-brand-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-brand-950">
                Not sure where you fit?
              </h3>
              <p className="mt-1 text-ink/70">
                Answer four questions and we will point you to the right path.
              </p>
            </div>
            <CTALink href="/vision-quiz" variant="primary">
              Take the 60-second quiz
            </CTALink>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Social proof ---------------- */}
      <Section tone="white">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Patient stories"
              title="Word travels fast in the Bluegrass."
              lede="Our best marketing has always been the person across the dinner table who can suddenly read the menu."
            />
            <div className="flex items-center gap-3 rounded-2xl border border-brand-900/10 bg-cream px-5 py-4">
              <Stars label="4.8 out of 5 stars" />
              <div className="text-sm leading-snug">
                <p className="font-bold text-brand-950">
                  4.8 stars · 865+ Google reviews
                </p>
                <p className="text-ink/65">
                  6,155+ verified patient reviews on rater8
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <Reveal key={review.id} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-brand-900/10 bg-cream p-7">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink/85">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-semibold text-brand-950">
                    {review.name}{" "}
                    <span className="font-normal text-ink/60">
                      · {review.location}
                    </span>
                  </p>
                  <p className="text-sm text-ink/60">{review.procedure}</p>
                  {review.source && review.source !== "sample" ? (
                    <p className="mt-3 text-xs font-semibold text-ink/55">
                      Source: {review.source} reviews
                    </p>
                  ) : (
                    <p className="mt-3 text-xs">
                      <Ph>Sample review — replace with live Google reviews</Ph>
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold text-brand-950">
              Hear it in their own words
            </h3>
            <CTALink href="/reviews" variant="link">
              All reviews and stories
            </CTALink>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {videoTestimonialIds.map((id) => {
              const video = getVideo(id);
              if (!video) return null;
              return (
                <li key={id}>
                  <YouTubeEmbed videoId={video.id} title={video.title} />
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Awards band */}
        <Reveal className="mt-14">
          <div className="rounded-3xl bg-sand p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-display text-2xl font-semibold text-brand-950">
                Recognized across Kentucky
              </h3>
              <CTALink href="/about" variant="link">
                More about the practice
              </CTALink>
            </div>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {awards.map((award) => (
                <li key={award.name} className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-6 w-6 shrink-0 text-accent-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="9" r="5.5" />
                    <path
                      d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-bold leading-snug text-brand-950">
                      {award.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-ink/65">
                      {award.detail}
                    </p>
                    <p className="mt-1 text-xs">
                      {award.year ?? <Ph>Year</Ph>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Meet the surgeons ---------------- */}
      <Section id="meet-the-surgeons">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Meet the surgeons"
              title="The doctors the doctors choose."
              lede="When Kentucky physicians and optometrists need eye surgery for themselves or their families, these are the surgeons they call. Press play for a quick introduction to the practice."
            />
          </Reveal>
          <Reveal delay={120}>
            <YouTubeEmbed
              videoId="qzJ0T2KOEIY"
              title="Welcome to Commonwealth Eye Surgery"
            />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {surgeons.map((doc, i) => (
            <Reveal key={doc.slug} delay={i * 90}>
              <Link
                href={`/doctors/${doc.slug}`}
                className="group block rounded-3xl border border-brand-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
              >
                <DoctorPhoto
                  photo={doc.photo}
                  name={doc.displayName}
                  className="aspect-[4/4.5]"
                />
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-950">
                  {doc.name}
                </h3>
                <p className="mt-1 text-sm leading-snug text-ink/70">
                  {doc.focus}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-700 group-hover:text-accent-800">
                  Read bio
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <CTALink href="/doctors" variant="link">
            Meet the full team, including our optometrists
          </CTALink>
        </Reveal>
      </Section>

      {/* ---------------- Locations ---------------- */}
      <Section tone="sand" id="locations">
        <Reveal>
          <SectionHeading
            eyebrow="Two locations"
            title="Lexington, and now Louisville."
            lede="Same surgeons, same standard of care, closer to home."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 90}>
              <div className="overflow-hidden rounded-3xl border border-brand-900/10 bg-white shadow-sm">
                <div className="relative">
                  <ImagePh
                    variant="map"
                    label={`Map — ${loc.name} office`}
                    className="aspect-[21/9]"
                    rounded="rounded-none"
                  />
                  {loc.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-accent-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow">
                      {loc.badge}
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold text-brand-950">
                    {loc.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/75">
                    {loc.address1}
                    <br />
                    {loc.cityStateZip}
                  </p>
                  <p className="mt-2 text-ink/75">
                    <a
                      href={loc.phoneHref}
                      className="font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2 hover:text-brand-950"
                    >
                      {loc.phone}
                    </a>
                    {loc.hours[0] && (
                      <span className="text-ink/60">
                        {" "}
                        · {loc.hours[0].days}{" "}
                        {loc.hours[0].hours.startsWith("[") ? (
                          <Ph>{loc.hours[0].hours.slice(1, -1)}</Ph>
                        ) : (
                          loc.hours[0].hours
                        )}
                      </span>
                    )}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <CTALink href={`/book?location=${loc.slug}`} variant="primary" size="sm">
                      Book at {loc.name}
                    </CTALink>
                    <CTALink href={`/locations/${loc.slug}`} variant="secondary" size="sm">
                      Location details
                    </CTALink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Eye Surgery Today promo ---------------- */}
      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow dark>Patient education</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              We co-founded Eye Surgery Today so patients could get straight
              answers.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100/85">
              Modern eye surgery moves fast, and most of what patients find
              online is either marketing or jargon. Eye Surgery Today is the
              education platform our surgeons helped build to fix that: plain
              language, honest tradeoffs, national reach.
            </p>
            <div className="mt-8">
              <a
                href={site.eyeSurgeryTodayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream/40 px-6 py-3 font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                Visit EyeSurgeryToday.com
                <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePh
              variant="video"
              label="Eye Surgery Today — featured episode placeholder"
              className="aspect-video"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Final CTA ---------------- */}
      <Section tone="cream">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-950 p-8 sm:p-14">
            <div className="on-dark max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
                Better living through better vision.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100/85">
                It starts with one honest conversation about your eyes. LASIK
                consultations are free, and no one here works on commission.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTALink href="/book" variant="accent" size="lg">
                  Book a Consultation
                </CTALink>
                <CTALink href="/cataract-self-test" variant="onDark" size="lg">
                  Take the Cataract Self-Test
                </CTALink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
