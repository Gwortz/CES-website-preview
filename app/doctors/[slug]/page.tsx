import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { doctors, getDoctor } from "@/content/doctors";
import {
  Section,
  SectionHeading,
  CTALink,
  Eyebrow,
  Card,
} from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ImagePh from "@/components/ImagePh";
import DoctorPhoto from "@/components/DoctorPhoto";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import Ph, { PhText } from "@/components/Ph";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoctor(slug);
  if (!doc) return {};
  return {
    title: `${doc.name} — ${doc.role}`,
    description: doc.focus,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoctor(slug);
  if (!doc) notFound();

  return (
    <>
      {/* Bio hero */}
      <div className="border-b border-pine-900/10 bg-gradient-to-b from-pine-50 to-cream">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <Eyebrow>{doc.role}</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-pine-950 sm:text-5xl">
                {doc.name}
              </h1>
              <p className="mt-3 text-xl text-ink/75">{doc.focus}</p>
              {doc.quote && (
                <blockquote className="mt-8 border-l-4 border-copper-500 pl-5">
                  <p className="font-display text-2xl leading-snug text-pine-900">
                    &ldquo;{doc.quote}&rdquo;
                  </p>
                </blockquote>
              )}
              <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">
                {doc.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTALink href="/book" variant="accent" size="lg">
                  Book with our team
                </CTALink>
                <CTALink href="/doctors" variant="secondary" size="lg">
                  All doctors
                </CTALink>
              </div>
            </div>
            <div className="space-y-5 lg:sticky lg:top-24">
              <DoctorPhoto
                photo={doc.photo}
                name={doc.displayName}
                className="aspect-[4/5]"
              />
              {doc.video ? (
                <YouTubeEmbed videoId={doc.video.id} title={doc.video.title} />
              ) : (
                <ImagePh
                  variant="video"
                  label={`Video introduction from ${doc.displayName} — placeholder player`}
                  className="aspect-video"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Training and background."
            lede={
              doc.credentials.some((c) => c.placeholder)
                ? "Amber entries below are placeholders awaiting verified details."
                : undefined
            }
          />
        </Reveal>
        <Reveal className="mt-8">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doc.credentials.map((cred) => (
              <div
                key={cred.label}
                className="rounded-2xl border border-pine-900/10 bg-white p-5"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-copper-700">
                  {cred.label}
                </dt>
                <dd className="mt-2 font-medium leading-snug text-pine-950">
                  {cred.placeholder ? <Ph>{cred.value}</Ph> : cred.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* Research & innovation (MDs) */}
      {doc.innovation && doc.innovation.length > 0 && (
        <Section tone="white">
          <Reveal>
            <SectionHeading
              eyebrow="Research & innovation"
              title="Advancing the field, not just practicing it."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {doc.innovation.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card className="h-full">
                  <h3 className="font-display text-xl font-semibold text-pine-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/75">
                    <PhText text={item.body} />
                  </p>
                  {item.placeholderNote && (
                    <p className="mt-4 text-sm">
                      <Ph>{item.placeholderNote}</Ph>
                    </p>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Other doctors */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading eyebrow="The team" title="Also part of your care." />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {doctors
              .filter((d) => d.slug !== doc.slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/doctors/${other.slug}`}
                    className="group block h-full rounded-2xl border border-pine-900/10 bg-white p-4 transition-colors hover:bg-pine-50"
                  >
                    <p className="text-sm font-semibold leading-snug text-pine-950">
                      {other.name}
                    </p>
                    <p className="mt-1 text-xs text-ink/60">{other.role}</p>
                  </Link>
                </li>
              ))}
          </ul>
        </Reveal>
      </Section>

      <CTASection
        title={`Put your eyes in practiced hands.`}
        lede="Book a consultation and meet the team that Kentucky doctors trust with their own families."
      />
    </>
  );
}
