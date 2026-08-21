export type FAQ = { q: string; a: React.ReactNode };

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="divide-y divide-brand-900/10 rounded-3xl border border-brand-900/10 bg-white px-6 sm:px-8">
      {faqs.map((faq, i) => (
        <details key={i} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-brand-950 [&::-webkit-details-marker]:hidden">
            <span className="text-[1.05rem]">{faq.q}</span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-900/15 text-brand-800 transition-transform group-open:rotate-45"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
          </summary>
          <div className="mt-3 max-w-3xl leading-relaxed text-ink/75">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
}
