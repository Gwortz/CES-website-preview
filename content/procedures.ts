export type ProcedureStep = { title: string; body: string };

export type Procedure = {
  slug: string;
  name: string;
  fullName: string;
  tag: string;
  heroLede: string;
  atAGlance: { label: string; value: string }[];
  benefits: string[];
  steps: ProcedureStep[];
  expectations: string[];
  goodFit: string[];
  caution: string[];
  crossLinks: { label: string; href: string; note: string }[];
};

export const procedures: Procedure[] = [
  {
    slug: "lasik",
    name: "LASIK",
    fullName: "All-Laser LASIK with Contoura Wavefront-Guided Mapping",
    tag: "The gold standard for laser vision correction",
    heroLede:
      "LASIK reshapes the clear front window of your eye so light focuses where it should. Our approach is all-laser, guided by a wavefront map of your eye that is as individual as a fingerprint. The procedure takes minutes. Most people see well the next morning.",
    atAGlance: [
      { label: "Procedure time", value: "About 10 minutes for both eyes" },
      { label: "Back to work", value: "Usually 1 to 2 days" },
      { label: "Discomfort", value: "Numbing drops; pressure, not pain" },
      { label: "Consultation", value: "Free, with full candidacy testing" },
    ],
    benefits: [
      "Wake up and see the alarm clock, not a blur",
      "Workouts, rain, and travel without contacts or fog",
      "Contoura wavefront-guided treatment maps thousands of points on your cornea, so the correction is built for your eye, not an average eye",
      "All-laser approach: no blades at any step",
    ],
    steps: [
      {
        title: "Mapping",
        body: "We measure your cornea in extraordinary detail. The Contoura topography system charts its exact shape, and those maps guide your treatment.",
      },
      {
        title: "The flap",
        body: "A femtosecond laser creates a thin protective flap on the surface of the cornea. You feel pressure for a few seconds. No blades are used.",
      },
      {
        title: "The correction",
        body: "An excimer laser gently reshapes the cornea underneath, following your personal map. This takes seconds per eye.",
      },
      {
        title: "Healing",
        body: "The flap settles back into place and begins sealing on its own. You rest at home for the afternoon. Most patients see clearly by the next morning.",
      },
    ],
    expectations: [
      "Most LASIK patients reach legal-driving vision or better, and many read the lower lines on the chart. But no honest surgeon guarantees 20/20, and we will not either. Your outcome depends on your starting prescription, your healing, and the health of your eye.",
      "Wavefront-guided treatment exists precisely to close the gap between the average result and your result. We also track our outcomes over time and review them with you at your consultation, so the numbers you hear describe this practice, not an industry brochure. [Outcomes summary data placeholder]",
      "Dry eye and glare around lights at night are common in the first weeks and usually fade. A small number of patients need an enhancement procedure later; we will tell you your likelihood based on your prescription.",
      "Reading glasses are a separate story. LASIK corrects distance vision; it does not stop the age-related lens stiffening that arrives in your mid-40s.",
    ],
    goodFit: [
      "Age 18 or older with about a year of stable prescription",
      "Nearsightedness, farsightedness, or astigmatism within treatable range",
      "Healthy corneas with adequate thickness, confirmed by imaging",
    ],
    caution: [
      "Significant dry eye should be treated first",
      "Thin or irregular corneas usually point to PRK or EVO ICL instead",
      "Very strong prescriptions may be better served by the EVO ICL",
    ],
    crossLinks: [
      {
        label: "PRK",
        href: "/vision-correction/prk",
        note: "Same laser, no flap. Often the safer route for thin corneas.",
      },
      {
        label: "EVO ICL",
        href: "/vision-correction/evo-icl",
        note: "For prescriptions beyond the comfortable range of LASIK.",
      },
      {
        label: "LASIK Alternatives",
        href: "/vision-correction/lasik-alternatives",
        note: "Not a candidate? Here is exactly what we do next.",
      },
    ],
  },
  {
    slug: "prk",
    name: "PRK",
    fullName: "Photorefractive Keratectomy",
    tag: "The original laser correction, still the right call for many eyes",
    heroLede:
      "PRK delivers the same laser correction as LASIK without creating a corneal flap. The trade is a slower, scratchier first week in exchange for keeping the cornea's full structural strength. For some eyes, and some lives, that trade is exactly right.",
    atAGlance: [
      { label: "Procedure time", value: "About 10 minutes for both eyes" },
      { label: "Back to work", value: "Usually 3 to 5 days" },
      { label: "Full clarity", value: "Sharpens over several weeks" },
      { label: "Consultation", value: "Free, with full candidacy testing" },
    ],
    benefits: [
      "Identical laser reshaping to LASIK, including wavefront-guided treatment",
      "No flap, which preserves corneal strength",
      "Preferred for thinner corneas and some dry-eye-prone eyes",
      "A long track record measured in decades",
    ],
    steps: [
      {
        title: "Surface preparation",
        body: "Instead of making a flap, we gently remove the cornea's thin outer skin layer. It grows back on its own within days.",
      },
      {
        title: "The correction",
        body: "The same excimer laser used in LASIK reshapes the cornea to your prescription.",
      },
      {
        title: "The bandage lens",
        body: "A soft contact lens protects the surface while the outer layer regrows, usually over four to five days.",
      },
      {
        title: "Healing",
        body: "Expect grittiness and light sensitivity for the first few days. Vision is functional early and keeps sharpening for several weeks.",
      },
    ],
    expectations: [
      "PRK ends in the same place as LASIK. It just takes the scenic route. Final vision quality is equivalent; the first week asks more patience of you.",
      "Plan for a few days away from work and screens. Some patients describe the third day as the least comfortable, then it turns quickly.",
      "As with any laser correction, we do not promise 20/20. We measure, we show you our tracked outcomes for eyes like yours, and we let you decide. [Outcomes summary data placeholder]",
    ],
    goodFit: [
      "Corneas too thin for a comfortable LASIK plan",
      "Careers and sports with head-contact risk, where a flap is a liability",
      "Patients who simply prefer a no-flap approach",
    ],
    caution: [
      "The first week is genuinely uncomfortable for some patients",
      "Vision sharpens gradually; night drivers should plan around that",
      "The same age caveat applies: PRK does not prevent reading glasses in your 40s",
    ],
    crossLinks: [
      {
        label: "LASIK",
        href: "/vision-correction/lasik",
        note: "Faster recovery when your corneas support a flap.",
      },
      {
        label: "EVO ICL",
        href: "/vision-correction/evo-icl",
        note: "When laser reshaping is not the right tool at all.",
      },
    ],
  },
  {
    slug: "evo-icl",
    name: "EVO ICL",
    fullName: "EVO Implantable Collamer Lens",
    tag: "Vision correction that adds a lens instead of reshaping the eye",
    heroLede:
      "The EVO ICL is a soft, flexible lens placed inside the eye, just behind the iris, where it works together with your natural lens. Nothing about your cornea is reshaped, and the lens can be removed if your needs ever change.",
    atAGlance: [
      { label: "Procedure time", value: "About 20 to 30 minutes" },
      { label: "Back to work", value: "Usually 1 to 2 days" },
      { label: "Reversible", value: "The lens is removable" },
      { label: "Consultation", value: "Free, with full candidacy testing" },
    ],
    benefits: [
      "Treats strong prescriptions beyond the comfortable range of LASIK",
      "No corneal tissue is removed, so corneal strength is untouched",
      "Excellent night-vision quality for many patients",
      "Built-in UV protection, and invisible from the outside",
    ],
    steps: [
      {
        title: "Sizing",
        body: "We measure the inside of your eye precisely so your lens fits your anatomy.",
      },
      {
        title: "Placement",
        body: "Through a tiny opening, the folded lens is placed behind the iris, where it unfolds into position. Numbing drops keep you comfortable.",
      },
      {
        title: "Confirmation",
        body: "We check the lens position and pressure the same day and again shortly after.",
      },
      {
        title: "Living with EVO",
        body: "There is nothing to clean or maintain. The lens simply works, invisibly, for years.",
      },
    ],
    expectations: [
      "Many EVO ICL patients with strong prescriptions describe vision sharper than their best contacts. Still, we do not guarantee a specific line on the chart, and we will show you our tracked outcomes rather than industry averages. [Outcomes summary data placeholder]",
      "Halos around lights can appear early, and most patients find they fade from notice.",
      "This is an intraocular procedure, so we monitor eye pressure and lens fit at follow-up visits. Serious complications are uncommon, and we will discuss them plainly, not in fine print.",
    ],
    goodFit: [
      "Moderate to strong nearsightedness, with or without astigmatism",
      "Thin or irregular corneas that rule out laser reshaping",
      "Chronic dry eye that laser surgery could aggravate",
    ],
    caution: [
      "Anatomy must have room for the lens; measurements decide",
      "Not the usual answer for farsightedness at this time",
      "As with all vision correction at this age range, reading glasses still arrive in the mid-40s",
    ],
    crossLinks: [
      {
        label: "LASIK",
        href: "/vision-correction/lasik",
        note: "The simpler path when your prescription is in range.",
      },
      {
        label: "Refractive Lens Exchange",
        href: "/cataracts/refractive-lens-exchange",
        note: "The lens-based option for the 45-plus chapter of life.",
      },
    ],
  },
];

export function getProcedure(slug: string) {
  return procedures.find((p) => p.slug === slug);
}
