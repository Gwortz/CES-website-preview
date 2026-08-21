import { Suspense } from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import BookingChooser from "@/components/BookingChooser";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a consultation at Commonwealth Eye Surgery in Lexington or Louisville. LASIK consultations are free.",
};

export default function BookPage() {
  return (
    <div className="bg-gradient-to-b from-pine-50 to-cream">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <Eyebrow>Book a consultation</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
            Two minutes now. Clearer decades later.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink/75">
            Choose your location and pick a time. LASIK consultations are
            free, and every consultation ends with straight answers.
          </p>
        </div>
        <div className="mt-12">
          <Suspense fallback={null}>
            <BookingChooser />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
