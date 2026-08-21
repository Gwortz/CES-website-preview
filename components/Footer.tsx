import Link from "next/link";
import { site, locations, footerLinks } from "@/content/site";
import { LogoMark, LogoType } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="on-dark bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
              <LogoMark className="h-9 w-9" />
              <LogoType dark />
            </Link>
            <p className="mt-4 font-display text-lg text-cream">
              {site.tagline}
            </p>
            <p className="mt-1 text-sm text-brand-300">{site.secondaryTagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
              Kentucky&rsquo;s first optometric co-management surgical center.
              State-of-the-art surgery with old-fashioned warmth.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-100/90 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              For Patients
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.patients.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-100/90 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Locations
            </h2>
            <ul className="mt-4 space-y-5">
              {locations.map((loc) => (
                <li key={loc.slug} className="text-sm leading-relaxed">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="font-semibold text-cream hover:underline"
                  >
                    {loc.name}
                    {loc.badge && (
                      <span className="ml-2 rounded-full bg-accent-600 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                        {loc.badge}
                      </span>
                    )}
                  </Link>
                  <p className="mt-1 text-brand-200/80">
                    {loc.address1}
                    <br />
                    {loc.cityStateZip}
                  </p>
                  <a
                    href={loc.phoneHref}
                    className="mt-1 inline-block text-brand-100/90 hover:text-cream"
                  >
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-200/80">
              Patient education from our team at{" "}
              <a
                href={site.eyeSurgeryTodayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cream underline decoration-accent-400 underline-offset-2 hover:text-accent-200"
              >
                Eye Surgery Today
              </a>
              , the platform we co-founded.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-100/15 pt-8">
          <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
            <strong>Demo preview.</strong> {site.demoNote}
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-brand-200/70 sm:flex-row sm:items-center">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights
              reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/accessibility" className="hover:text-cream">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link href="/patients/forms" className="hover:text-cream">
                  Patient Forms
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
