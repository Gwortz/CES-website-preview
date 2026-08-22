/**
 * Real recognitions from public sources. A missing year renders as an amber
 * placeholder until the practice confirms it. Best of Lexington 2022 is
 * evidenced by the award badge attached to the practice's own logo file.
 */

export type Award = {
  name: string;
  detail: string;
  year?: string;
};

export const awards: Award[] = [
  {
    name: "Best Cataract Surgeons in America",
    detail: "Drs. Ferguson and Wörtz",
  },
  {
    name: "ABC 36 Viewers' Choice Awards",
    detail: "Best LASIK and Best Eye Care Practice",
  },
  {
    name: "Best of Lexington",
    detail: "Best LASIK and Best Eye Care Practice",
    year: "2022",
  },
  {
    name: "U.S. News High Performing",
    detail: "Ambulatory surgery center, ophthalmology",
  },
];
