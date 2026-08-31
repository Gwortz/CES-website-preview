export type ReviewProcedure =
  | "LASIK"
  | "PRK"
  | "Cataract"
  | "RLE"
  | "LAL"
  | "Trifocal"
  | "EVO ICL"
  | "Care team";

export type Review = {
  id: string;
  procedure: ReviewProcedure;
  name: string;
  location: string;
  text: string;
  /** Where the review was published. Every review here is a real, published review. */
  source?: "Google" | "rater8" | "Facebook";
  /** Which doctor the review concerns, when named. */
  doctor?: string;
};

/**
 * Real reviews below were gathered from public review platforms (rater8,
 * Google, Facebook) and from the quotes the practice already publishes on
 * commonwealtheyes.com. Spot-check wording against the live listings before
 * production launch.
 *
 * NOTE: illustrative "sample" reviews were removed before launch. Never add
 * invented testimonials here — published reviews must be real, attributable,
 * and traceable to a public listing.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    procedure: "LASIK",
    name: "Michael",
    location: "Google review",
    source: "Google",
    text: "Commonwealth did an amazing job with my eyes. The staff is friendly, the surgery swift and efficient, and the investment worth it.",
  },
  {
    id: "r2",
    procedure: "Care team",
    name: "Verified patient",
    location: "rater8 review",
    source: "rater8",
    doctor: "R. Marty Smith, OD",
    text: "Excellent communication and explanations. Very good bedside manner.",
  },
  {
    id: "r3",
    procedure: "Care team",
    name: "Verified patient",
    location: "rater8 review",
    source: "rater8",
    doctor: "Christopher J. Kuc, OD",
    text: "Dr. Kuc was very informative, a good listener with an excellent bedside manner!",
  },
  {
    id: "r4",
    procedure: "Cataract",
    name: "Verified patient",
    location: "rater8 review",
    source: "rater8",
    doctor: "Lance S. Ferguson, MD",
    text: "Dr. Ferguson was great! Very pleased with my outcome!",
  },
  {
    id: "r5",
    procedure: "LASIK",
    name: "MmmCH2",
    location: "Google review",
    source: "Google",
    text: "Could not have asked for a better experience. Seeing 20/15 the next day.",
  },
  {
    id: "r6",
    procedure: "LASIK",
    name: "Caitlin",
    location: "Facebook review",
    source: "Facebook",
    text: "Surgery was quick and painless and the results were almost instant! They have a great staff and I would recommend it to anyone considering LASIK.",
  },
  {
    id: "r7",
    procedure: "PRK",
    name: "Haylee",
    location: "Facebook review",
    source: "Facebook",
    text: "I would definitely recommend Commonwealth Eye Surgery to anyone considering PRK, LASIK or any other refractive operation. Dr. Ferguson did an excellent job in making me feel comfortable and taken care of.",
  },
  {
    id: "r8",
    procedure: "LASIK",
    name: "Jodi",
    location: "Facebook review",
    source: "Facebook",
    text: "If you're considering LASIK, this is the place to go!",
  },
  {
    id: "r9",
    procedure: "Cataract",
    name: "Verified patient",
    location: "Google review",
    source: "Google",
    text: "I would recommend Commonwealth Eye Surgery to anyone. I have never been able to see so well!",
  },
];

export const reviewFilters: ("All" | ReviewProcedure)[] = [
  "All",
  "LASIK",
  "PRK",
  "Cataract",
  "RLE",
  "LAL",
  "Trifocal",
  "EVO ICL",
  "Care team",
];

/** Publicly listed ratings, gathered Aug 2026. Verify live before production. */
export const ratings = {
  rater8: { count: "6,155+", label: "verified patient reviews on rater8" },
  google: { stars: "4.8", count: "865+", label: "Google reviews" },
  facebook: { percent: "96%", count: "580", label: "recommend on Facebook" },
};
