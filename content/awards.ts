/**
 * Real recognitions from public sources. A missing year renders as an amber
 * placeholder until the practice confirms it. Best of Lexington 2022 is
 * evidenced by the award badge attached to the practice's own logo file.
 */

export type Award = {
  name: string;
  detail: string;
  year?: string;
  /** Official badge artwork under /public, from the practice's own media. */
  badge?: string;
};

export const awards: Award[] = [
  {
    name: "Best Cataract Surgeons in America",
    detail: "Drs. Ferguson and Wörtz",
    badge: "/images/site/award-best-cataract-surgeons.png",
  },
  {
    name: "ABC 36 Viewers' Choice Awards",
    detail: "Best LASIK and Best Eye Care Practice",
    year: "2024",
    badge: "/images/site/award-viewers-choice.jpg",
  },
  {
    name: "Best of Lexington",
    detail: "Best LASIK and Best Eye Care Practice",
    year: "2024",
    badge: "/images/site/award-best-of-lexington.png",
  },
  {
    name: "U.S. News High Performing",
    detail: "Ambulatory surgery center, ophthalmology",
    badge: "/images/site/award-us-news-ophthalmology.jpg",
  },
];
