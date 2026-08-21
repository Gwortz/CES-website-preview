export type ReviewProcedure =
  | "LASIK"
  | "Cataract"
  | "RLE"
  | "LAL"
  | "Trifocal"
  | "EVO ICL";

export type Review = {
  id: string;
  procedure: ReviewProcedure;
  name: string;
  location: string;
  text: string;
  /** Where the review was published. "sample" reviews are illustrative and clearly labeled in the UI. */
  source?: "Google" | "rater8" | "sample";
  /** Star rating as shown on the source platform. */
  rating?: number;
};

export const sampleReviewNotice =
  "Sample review — replace with live Google reviews";

/**
 * Every review below is illustrative sample copy, clearly labeled in the UI.
 * None of these are real patient quotes.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    procedure: "LASIK",
    name: "J. T.",
    location: "Lexington, KY",
    text: "I woke up the morning after LASIK and read the alarm clock across the room. Twenty years of contacts, done. The whole team walked me through every step.",
  },
  {
    id: "r2",
    procedure: "Cataract",
    name: "M. R.",
    location: "Georgetown, KY",
    text: "My daughter drove me home after cataract surgery and I could read the road signs before we left the parking lot. Colors I forgot existed came back.",
  },
  {
    id: "r3",
    procedure: "RLE",
    name: "S. B.",
    location: "Louisville, KY",
    text: "At 52 I was juggling three pairs of glasses. After lens exchange I keep one pair of cheap readers in a drawer and have not touched them in months.",
  },
  {
    id: "r4",
    procedure: "LAL",
    name: "D. H.",
    location: "Richmond, KY",
    text: "I had LASIK years ago, so my measurements were tricky. The Light Adjustable Lens let us fine-tune my vision after surgery until it was exactly right.",
  },
  {
    id: "r5",
    procedure: "Trifocal",
    name: "K. W.",
    location: "Frankfort, KY",
    text: "Menus, dashboard, golf ball. All clear, no glasses. There are faint rings around headlights at night but they faded from my attention within weeks.",
  },
  {
    id: "r6",
    procedure: "EVO ICL",
    name: "A. P.",
    location: "Nicholasville, KY",
    text: "My prescription was too strong for LASIK. The EVO ICL gave me sharper vision than my contacts ever did, and nothing about my eye was reshaped.",
  },
  {
    id: "r7",
    procedure: "LASIK",
    name: "C. M.",
    location: "Versailles, KY",
    text: "As a nurse I asked around before choosing. Every OR colleague said the same name. Now I understand why the doctors go here themselves.",
  },
  {
    id: "r8",
    procedure: "Cataract",
    name: "E. S.",
    location: "Winchester, KY",
    text: "I put surgery off for two years out of fear. The procedure took minutes, I felt nothing, and night driving does not scare me anymore.",
  },
  {
    id: "r9",
    procedure: "RLE",
    name: "T. L.",
    location: "Louisville, KY",
    text: "They never pushed. They explained the lens options, told me the tradeoffs straight, and let me decide. That honesty is why I recommend them.",
  },
];

export const reviewFilters: ("All" | ReviewProcedure)[] = [
  "All",
  "LASIK",
  "Cataract",
  "RLE",
  "LAL",
  "Trifocal",
  "EVO ICL",
];
