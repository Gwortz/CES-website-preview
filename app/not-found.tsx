import { CTALink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-brand-50 to-cream px-4">
      <div className="max-w-xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-700">
          Page not found
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-950">
          Well, that page is blurry.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/75">
          The page you are looking for does not exist in this demo. Let us
          point you somewhere clearer.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTALink href="/" variant="primary">
            Back to home
          </CTALink>
          <CTALink href="/start-here" variant="secondary">
            Find your path
          </CTALink>
        </div>
      </div>
    </div>
  );
}
