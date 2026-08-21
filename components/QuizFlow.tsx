"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cataractSelfTest, visionQuiz } from "@/content/quizzes";
import { CTALink } from "@/components/ui";

const quizzes = {
  "cataract-self-test": cataractSelfTest,
  "vision-quiz": visionQuiz,
} as const;

export type QuizSlug = keyof typeof quizzes;

function DemoContactForm({ quizTitle }: { quizTitle: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Demo only: no backend. Real build wires this to the practice CRM.
    console.log(`[demo] ${quizTitle} contact form submission`, data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center"
      >
        <p className="font-display text-xl font-semibold text-brand-950">
          Thank you. We got it.
        </p>
        <p className="mt-2 text-ink/75">
          In the live site, our team would follow up within one business day.
        </p>
        <p className="mt-3 text-xs">
          <span className="ph">[Demo form — nothing was actually sent]</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="quiz-name"
            className="block text-sm font-semibold text-brand-950"
          >
            Name
          </label>
          <input
            id="quiz-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-brand-900/20 bg-white px-4 py-2.5 text-ink placeholder:text-ink/40"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="quiz-phone"
            className="block text-sm font-semibold text-brand-950"
          >
            Phone
          </label>
          <input
            id="quiz-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-brand-900/20 bg-white px-4 py-2.5 text-ink placeholder:text-ink/40"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="quiz-email"
          className="block text-sm font-semibold text-brand-950"
        >
          Email
        </label>
        <input
          id="quiz-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-brand-900/20 bg-white px-4 py-2.5 text-ink placeholder:text-ink/40"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="quiz-location"
          className="block text-sm font-semibold text-brand-950"
        >
          Preferred location
        </label>
        <select
          id="quiz-location"
          name="location"
          className="mt-1.5 w-full rounded-xl border border-brand-900/20 bg-white px-4 py-2.5 text-ink"
        >
          <option value="lexington">Lexington</option>
          <option value="louisville">Louisville</option>
          <option value="either">Either works</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-950 px-6 py-3 font-semibold text-cream transition-colors hover:bg-brand-800"
      >
        Request a call back
      </button>
      <p className="text-center text-xs text-ink/50">
        Demo form: submissions are logged to the console, not sent.
      </p>
    </form>
  );
}

export default function QuizFlow({ slug }: { slug: QuizSlug }) {
  const quiz = quizzes[slug];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const total = quiz.questions.length;
  const question = quiz.questions[Math.min(step, total - 1)];

  // Move focus to the question/result heading as the flow advances
  useEffect(() => {
    if (step > 0 || done) headingRef.current?.focus();
  }, [step, done]);

  function choose(value: string) {
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);
    if (step + 1 >= total) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  }

  function back() {
    if (done) {
      setDone(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  if (done) {
    const resultId = quiz.compute(answers);
    const result = quiz.results[resultId];
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-700">
            {result.badge}
          </p>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mt-3 font-display text-2xl font-semibold text-brand-950 outline-none sm:text-3xl"
          >
            {result.title}
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-ink/80">
            {result.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {result.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-brand-900/25 px-5 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:border-brand-900 hover:bg-brand-50"
                >
                  {link.label}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-brand-950 p-6 sm:p-8">
            <div className="on-dark">
              <h3 className="font-display text-xl font-semibold text-cream">
                The next step is a conversation.
              </h3>
              <p className="mt-2 text-brand-100/85">
                Book online, or leave your details and we will call you.
              </p>
              <div className="mt-5">
                <CTALink href="/book" variant="accent">
                  Book a Consultation
                </CTALink>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-900/10 pt-8">
            <h3 className="font-display text-xl font-semibold text-brand-950">
              Or have us reach out
            </h3>
            <div className="mt-4">
              <DemoContactForm quizTitle={quiz.title} />
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/60">
            {quiz.disclaimer}
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={back}
            className="text-sm font-semibold text-ink/60 hover:text-brand-950"
          >
            &larr; Change my last answer
          </button>
          <button
            type="button"
            onClick={restart}
            className="text-sm font-semibold text-ink/60 hover:text-brand-950"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div aria-hidden="true" className="mb-3 h-1.5 overflow-hidden rounded-full bg-brand-100">
        <div
          className="h-full rounded-full bg-accent-500 transition-all duration-300"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
      <p className="text-sm font-semibold text-ink/60" aria-live="polite">
        Question {step + 1} of {total}
      </p>
      <div className="mt-4 rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm sm:p-10">
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-2xl font-semibold text-brand-950 outline-none sm:text-3xl"
        >
          {question.prompt}
        </h2>
        {question.help && (
          <p className="mt-2 text-ink/65">{question.help}</p>
        )}
        <div className="mt-6 space-y-3">
          {question.options.map((opt) => {
            const selected = answers[question.id] === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => choose(opt.value)}
                aria-pressed={selected}
                className={`block w-full rounded-2xl border-[1.5px] px-5 py-4 text-left transition-colors ${
                  selected
                    ? "border-brand-800 bg-brand-50"
                    : "border-brand-900/15 bg-cream hover:border-brand-800 hover:bg-brand-50"
                }`}
              >
                <span className="block font-semibold text-brand-950">
                  {opt.label}
                </span>
                {opt.sub && (
                  <span className="mt-0.5 block text-sm text-ink/65">
                    {opt.sub}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="text-sm font-semibold text-ink/60 hover:text-brand-950"
          >
            &larr; Back
          </button>
        ) : (
          <span />
        )}
        <p className="text-sm text-ink/50">{quiz.minutes}, no email required</p>
      </div>
    </div>
  );
}
