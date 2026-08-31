/**
 * Real photography used across the site, all of it the practice's own
 * licensed imagery pulled from commonwealtheyes.com.
 *
 * Keyed so pages never hardcode paths. A key set to `undefined` falls back to
 * the labeled placeholder rather than rendering a broken image.
 */
export const imagery = {
  /** Side-by-side simulation of vision with cataracts and after surgery. */
  cataractVisionSimulation: "/images/site/cataract-vision-simulation.jpg",
  /** The surgical team in the Lexington operating suite. */
  surgicalTeam: "/images/site/surgical-team.jpg",
  /** Pre-operative diagnostic testing. */
  diagnosticTesting: "/images/site/diagnostic-testing.jpg",
  /** Lifestyle imagery, one per vision-correction procedure. */
  lifestyle: {
    lasik: "/images/site/lasik-lifestyle.jpg",
    prk: "/images/site/prk-lifestyle.jpg",
    "evo-icl": "/images/site/evo-icl-lifestyle.jpg",
  } as Record<string, string | undefined>,
  /** Refractive lens exchange — life without readers. */
  rleLifestyle: "/images/site/rle-lifestyle.jpg",
  /** Patient-stories feature image. */
  reviewsFeature: "/images/site/reviews-feature.jpg",
  /** Award artwork: U.S. News Best Ambulatory Surgery Centers, Ophthalmology. */
  awardUsNewsOphthalmology: "/images/site/award-us-news-ophthalmology.jpg",
} as const;
