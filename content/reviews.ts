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
  /** Where the review was published. "sample" reviews are illustrative and clearly labeled in the UI. */
  source?: "Google" | "rater8" | "Facebook" | "sample";
  /** Which doctor the review concerns, when named. */
  doctor?: string;
};

export const sampleReviewNotice =
  "Sample review — replace with live Google reviews";

/**
 * Real reviews below were gathered from public review platforms (rater8,
 * Google, Facebook) and from the quotes the practice already publishes on
 * commonwealtheyes.com. Spot-check wording against the live listings before
 * production launch. Reviews marked source: "sample" are illustrative
 * placeholders for procedures where no public quote was found yet.
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
  // Procedures with no public quote found yet — clearly labeled samples
  {
    id: "s1",
    procedure: "RLE",
    name: "S. B.",
    location: "Louisville, KY",
    source: "sample",
    text: "At 52 I was juggling three pairs of glasses. After lens exchange I keep one pair of cheap readers in a drawer and have not touched them in months.",
  },
  {
    id: "s2",
    procedure: "LAL",
    name: "D. H.",
    location: "Richmond, KY",
    source: "sample",
    text: "I had LASIK years ago, so my measurements were tricky. The Light Adjustable Lens let us fine-tune my vision after surgery until it was exactly right.",
  },
  {
    id: "s3",
    procedure: "Trifocal",
    name: "K. W.",
    location: "Frankfort, KY",
    source: "sample",
    text: "Menus, dashboard, golf ball. All clear, no glasses. There are faint rings around headlights at night but they faded from my attention within weeks.",
  },
  {
    id: "s4",
    procedure: "EVO ICL",
    name: "A. P.",
    location: "Nicholasville, KY",
    source: "sample",
    text: "My prescription was too strong for LASIK. The EVO ICL gave me sharper vision than my contacts ever did, and nothing about my eye was reshaped.",
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
