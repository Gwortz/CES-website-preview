import type { Metadata } from "next";
import { visionQuiz } from "@/content/quizzes";
import QuizFlow from "@/components/QuizFlow";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vision Correction Quiz — Find Your Path in 60 Seconds",
  description:
    "Four quick questions about your vision, age, and goals. We point you to the procedure path that usually fits people like you.",
};

export default function VisionQuizPage() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Free 60-second quiz</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
            {visionQuiz.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            {visionQuiz.intro}
          </p>
        </div>
        <div className="mt-10">
          <QuizFlow slug="vision-quiz" />
        </div>
      </div>
    </div>
  );
}
