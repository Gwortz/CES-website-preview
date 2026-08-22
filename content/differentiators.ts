/**
 * The four things that actually separate Commonwealth Eye Surgery from the
 * alternatives, as stated by the practice's owner-surgeons (Aug 2026).
 *
 * Source: direct from practice ownership, not scraped. All figures here are
 * first-party and verified — none are placeholders.
 */

export type Differentiator = {
  slug: string;
  /** Short label for cards and nav. */
  label: string;
  /** Card headline on the homepage. */
  headline: string;
  /** One or two sentences for the homepage card. */
  summary: string;
  /** Section title on the full page. */
  title: string;
  /** Full treatment, one paragraph per entry. */
  body: string[];
  /** Optional supporting figures rendered as a small stat row. */
  figures?: { value: string; label: string }[];
  /** Optional bullet list rendered under the body. */
  points?: string[];
};

export const differentiators: Differentiator[] = [
  {
    slug: "physician-owned",
    label: "Physician-owned",
    headline: "The owners are the ones doing the surgery.",
    summary:
      "Kentucky's largest privately owned cataract and refractive surgery practice. No investor group, no outside board — just surgeons accountable for their own results.",
    title: "Owned by the people who do the work.",
    body: [
      "Commonwealth Eye Surgery is the largest privately owned cataract and refractive surgery practice in Kentucky. The doctors who own this practice are the same ones in the operating room, in the exam lanes, and on the phone with your optometrist. Nobody here is insulated from the day-to-day.",
      "That matters more than it used to. Private equity now owns most of the large ophthalmology groups in this country, and a practice owned by investors carries an investor's mandate: maximize returns. Ours is simpler, and it has not changed in forty-one years. Take care of the patient in front of you.",
      "When the owner is the surgeon, the incentives line up on their own. There is no quota handed down from a group that has never met you, and no pressure to route you toward whatever is most profitable this quarter. The recommendation you get is the one your surgeon would want for their own family.",
    ],
    points: [
      "Largest privately owned cataract and refractive practice in Kentucky",
      "Owner-surgeons operate, examine, and manage the practice themselves",
      "No private equity ownership and no outside investor board",
    ],
  },
  {
    slug: "depth-of-experience",
    label: "Depth of experience",
    headline: "Forty-one years, and more than 150,000 cataract surgeries.",
    summary:
      "Kentucky's first collaborative ophthalmology–optometry practice. Our three surgeons have performed over 150,000 cataract surgeries and 50,000 refractive laser procedures in this state.",
    title: "Experience measured in decades, not marketing.",
    body: [
      "Commonwealth Eye Surgery was the first collaborative ophthalmology–optometry practice in Kentucky. For more than forty-one years we have worked alongside optometrists across the state to care for their patients — a model we did not adopt, but built.",
      "Between them, our three surgeons have performed more than 150,000 cataract surgeries and more than 50,000 refractive laser procedures, nearly all of it here in Kentucky. That volume is not a vanity number. Surgical judgment comes from having seen the uncommon case before, and from knowing what to do when an eye does not behave the way the textbook says it should.",
      "It also means your referring optometrist has watched our outcomes accumulate for four decades. They keep sending patients. Many of them became patients themselves.",
    ],
    figures: [
      { value: "41+ years", label: "of ophthalmology–optometry collaboration" },
      { value: "150,000+", label: "cataract surgeries by our three surgeons" },
      { value: "50,000+", label: "refractive laser procedures performed" },
      { value: "First in Kentucky", label: "collaborative ophthalmology–optometry practice" },
    ],
  },
  {
    slug: "across-the-bluegrass",
    label: "Across the Bluegrass",
    headline: "Two centers, one standard of care.",
    summary:
      "Lexington and Louisville, so the same surgeons and the same standard are within reach whether you are near or far.",
    title: "We span the Bluegrass.",
    body: [
      "Our Lexington center has anchored the practice for four decades and houses our surgical suites. Our Louisville center brings the same surgeons and the same standard of care closer to home for families on the western side of the state.",
      "Patients travel to us from across Kentucky and beyond, and we have built around that: consultations and follow-up close to home wherever possible, with your own optometrist kept in the loop from first visit through recovery.",
    ],
    points: [
      "Lexington — the practice's home base and surgical center",
      "Louisville — the same surgeons, closer to home",
      "Co-management with your own optometrist, wherever you live",
    ],
  },
  {
    slug: "technology",
    label: "Technology",
    headline: "Best-in-class technology in best-in-class hands.",
    summary:
      "WaveLight custom LASIK and LensAR Ally laser-assisted cataract surgery — and, almost without exception, first access in Kentucky to each new lens platform as it arrives.",
    title: "The newest technology, in hands that have used everything before it.",
    body: [
      "We run WaveLight custom LASIK for laser vision correction and the LensAR Ally femtosecond laser for laser-assisted cataract surgery. Dr. Ferguson was the first ophthalmologist in Kentucky to perform femtosecond laser cataract surgery, and with Dr. Wörtz he brought the LensAR platform to the region.",
      "That pattern has held for decades. When a new intraocular lens platform reaches the United States, our surgeons are almost always the first in the state with access to it — often because the manufacturers come to us to introduce it here.",
      "Technology on its own does not make a good outcome. New equipment in inexperienced hands is just new equipment. What makes the difference is a surgeon who has used every generation of a technology and knows precisely when the newest option is the right one for your eye, and when it is not.",
    ],
    points: [
      "WaveLight custom LASIK for laser vision correction",
      "LensAR Ally femtosecond laser for laser-assisted cataract surgery",
      "Typically the first in Kentucky with each new lens platform as it is approved",
    ],
  },
];
