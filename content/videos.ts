/**
 * Verified videos from the practice's YouTube channel
 * (youtube.com/@lasiklexington). Every ID below was confirmed against a real
 * YouTube URL. Videos embed client-side via the click-to-load player, so
 * they cost nothing on page load.
 */

export type PracticeVideo = {
  id: string;
  title: string;
  kind: "testimonial" | "doctor" | "explainer" | "welcome";
  procedure?: "LASIK" | "PRK" | "Cataract" | "EVO ICL" | "RLE" | "LAL";
  note?: string;
};

export const videos: PracticeVideo[] = [
  // Welcome / practice
  {
    id: "qzJ0T2KOEIY",
    title: "Welcome to Commonwealth Eye Surgery",
    kind: "welcome",
  },

  // Patient testimonials
  {
    id: "PsS0ow9UYUY",
    title: "Kevin Skidmore, OD has LASIK at Commonwealth Eye Surgery",
    kind: "testimonial",
    procedure: "LASIK",
    note: "A Lexington optometrist chooses the practice for his own eyes",
  },
  {
    id: "YsuxKEK4BM8",
    title: "See what actual patients think about Commonwealth Eye Surgery",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "EchitPzl2Kg",
    title: "Andrew | LASIK Patient",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "Bf_8n-NMFdk",
    title: "Why Jeremy recommends Commonwealth Eye Surgery for LASIK",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "hU1PUOh-eto",
    title: "Matthew | LASIK Testimonial",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "9Wve7GpztkE",
    title: "Kelsey | LASIK Testimonial",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "_es_hMBmpz4",
    title: "Abby | LASIK Patient Testimonial",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "X9uKZTd_bTA",
    title: "Hayley Describes Vision Before & After LASIK",
    kind: "testimonial",
    procedure: "LASIK",
  },
  {
    id: "NxfdBGAOObo",
    title: "Theresa | PRK Testimonial",
    kind: "testimonial",
    procedure: "PRK",
  },
  {
    id: "a6cO0qZ6KjE",
    title: "Richard | Cataract Testimonial",
    kind: "testimonial",
    procedure: "Cataract",
  },
  {
    id: "x1v2fKMm3Rw",
    title: "Bruce | Laser Cataract Surgery Testimonial",
    kind: "testimonial",
    procedure: "Cataract",
  },

  // Doctor Q&A
  {
    id: "SV72po8OO1A",
    title: "Is LASIK painful? | Gary Wörtz, MD",
    kind: "doctor",
    procedure: "LASIK",
  },
  {
    id: "tkoVQhaGcmo",
    title: 'Gary Wörtz, MD — What is "bladeless" LASIK?',
    kind: "doctor",
    procedure: "LASIK",
  },
  {
    id: "_3gZ0pRK3eM",
    title: "Dr. Wörtz | LASIK After 40",
    kind: "doctor",
    procedure: "LASIK",
  },

  // Explainers
  {
    id: "gzvOmEJNg0U",
    title: "Laser Vision Correction | Commonwealth Eye Surgery",
    kind: "explainer",
    procedure: "LASIK",
  },
  {
    id: "8gvjURUVpX0",
    title: "LASIK Surgery Walk-Through",
    kind: "explainer",
    procedure: "LASIK",
  },
  {
    id: "oo3deULUAjI",
    title: "Live PRK Procedure, narrated by Dr. Ferguson",
    kind: "explainer",
    procedure: "PRK",
  },
  {
    id: "jjpp0qaxXIA",
    title: "What is ICL? | Commonwealth Eye Surgery",
    kind: "explainer",
    procedure: "EVO ICL",
  },
  {
    id: "ENkv_NL1MyY",
    title: "What is RLE? | Commonwealth Eye Surgery",
    kind: "explainer",
    procedure: "RLE",
  },
  {
    id: "FSdFNxVSwlk",
    title: "Cataract Surgery Options",
    kind: "explainer",
    procedure: "Cataract",
  },
  {
    id: "xvYrb4qXRww",
    title: "Laser Cataract Surgery",
    kind: "explainer",
    procedure: "Cataract",
  },
  {
    id: "cdPA4sMHr24",
    title: "Understanding Your Options for Cataract Surgery",
    kind: "explainer",
    procedure: "Cataract",
  },
  {
    id: "Px8EvoA4PFE",
    title: "Advanced Cataract Surgery",
    kind: "explainer",
    procedure: "Cataract",
  },
  {
    id: "b11d1f6L5_I",
    title: "Light Adjustable Lens",
    kind: "explainer",
    procedure: "LAL",
  },
];

/**
 * Found in search but with unresolved attribution — confirm channel
 * ownership before adding to `videos`:
 * - qCXfo6EZsV4 "Chief Meteorologist TG Shuck ..." (title truncated in index)
 * - P37mD__ycQk "Patient Testimonial | EVO ICL" (attribution indirect)
 */

export function getVideo(id: string) {
  return videos.find((v) => v.id === id);
}

export function videosFor(
  procedure: PracticeVideo["procedure"],
  kind?: PracticeVideo["kind"]
) {
  return videos.filter(
    (v) => v.procedure === procedure && (!kind || v.kind === kind)
  );
}
