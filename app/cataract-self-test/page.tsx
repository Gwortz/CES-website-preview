import type { Metadata } from "next";
import { cataractSelfTest } from "@/content/quizzes";
import QuizFlow from "@/components/QuizFlow";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cataract Self-Test — 2 Minutes, Honest Answer",
  description:
    "Seven quick questions about glare, night driving, and cloudy vision. Get an honest read on whether your symptoms sound like cataracts.",
};

export default function CataractSelfTestPage() {
  return (
    <div className="bg-gradient-to-b from-pine-50 to-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Free self-test</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
            {cataractSelfTest.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            {cataractSelfTest.intro}
          </p>
        </div>
        <div className="mt-10">
          <QuizFlow slug="cataract-self-test" />
        </div>
      </div>
    </div>
  );
}
