export type AgePathProcedure = {
  name: string;
  href: string;
  blurb: string;
  tag?: string;
};

export type AgePath = {
  slug: string;
  ageLabel: string;
  cardTitle: string;
  headline: string;
  lede: string;
  lifeCopy: string[];
  procedures: AgePathProcedure[];
  candidacyGood: string[];
  candidacyCaution: string[];
  notCandidate: {
    title: string;
    body: string;
    alternatives: { label: string; href: string; note: string }[];
  };
};

export const agePaths: AgePath[] = [
  {
    slug: "18-45",
    ageLabel: "Ages 18–45",
    cardTitle: "Ditch the daily routine",
    headline: "Your eyes are ready. The technology finally caught up.",
    lede: "Between 18 and 45, your natural lens still focuses beautifully on its own. The problem is usually the shape of your eye, and that is exactly what modern laser vision correction fixes.",
    lifeCopy: [
      "Think about how much of your day your vision routine steals. Rinsing contacts before bed. Hunting for glasses at 6 AM. Sitting out of the pool, squinting at the trail, packing solution for every trip.",
      "At this stage of life, the goal is simple: correct the eye once, well, and get on with living. Three proven procedures do that, and the right one depends on your measurements, not on marketing.",
    ],
    procedures: [
      {
        name: "LASIK",
        href: "/vision-correction/lasik",
        tag: "Most popular",
        blurb:
          "All-laser LASIK with Contoura wavefront-guided mapping. Minutes per eye, most people back to work in a day or two.",
      },
      {
        name: "PRK",
        href: "/vision-correction/prk",
        blurb:
          "Same laser correction, no corneal flap. The steady choice for thinner corneas, dry-eye-prone eyes, and contact-sport lifestyles. Slower recovery, same destination.",
      },
      {
        name: "EVO ICL",
        href: "/vision-correction/evo-icl",
        tag: "For strong prescriptions",
        blurb:
          "A soft lens placed inside the eye that works with your natural lens. Nothing about the cornea is reshaped, and it is removable.",
      },
    ],
    candidacyGood: [
      "You are 18 or older with a prescription that has been stable for about a year",
      "Your eyes are healthy, with no significant dry eye or corneal conditions",
      "You are nearsighted, farsighted, or have astigmatism and want less dependence on correction",
    ],
    candidacyCaution: [
      "Pregnancy and certain medications can shift your prescription temporarily, so timing matters",
      "Very strong prescriptions or thin corneas may point to EVO ICL or PRK instead of LASIK",
      "Uncontrolled dry eye should be treated before any laser procedure",
    ],
    notCandidate: {
      title: "Not a LASIK candidate? That is not the end of the road.",
      body: "Roughly one in five people who come in for LASIK are better served by something else. That is a candidacy decision, not a rejection. Your measurements point to the procedure that will actually serve you for decades.",
      alternatives: [
        {
          label: "PRK",
          href: "/vision-correction/prk",
          note: "When corneal thickness or surface health rules out a flap",
        },
        {
          label: "EVO ICL",
          href: "/vision-correction/evo-icl",
          note: "When your prescription is too strong for laser reshaping",
        },
        {
          label: "See all alternatives",
          href: "/vision-correction/lasik-alternatives",
          note: "How we route every non-candidate to a real answer",
        },
      ],
    },
  },
  {
    slug: "45-60",
    ageLabel: "Ages 45–60",
    cardTitle: "Done with the reader shuffle",
    headline: "Reading glasses are not the price of being 50.",
    lede: "Somewhere in your 40s, the natural lens inside your eye began to stiffen. That is why your arms got too short for the menu. Fixing the lens itself, not just the surface of the eye, is often the honest answer at this age.",
    lifeCopy: [
      "This is the decade of the reader shuffle: a pair by the bed, a pair in the car, a pair on your head while you look for the pair on your head. Progressive lenses help, but they shrink your world into zones.",
      "LASIK can still be a fit here, especially if you mainly need distance. But LASIK cannot stop the lens from stiffening further, and it cannot prevent the cataract that lens will eventually become. Refractive Lens Exchange addresses the actual cause.",
    ],
    procedures: [
      {
        name: "Refractive Lens Exchange",
        href: "/cataracts/refractive-lens-exchange",
        tag: "The age-fit option",
        blurb:
          "Replaces the stiffening natural lens with an advanced implant that can restore distance and reading range. You will never develop a cataract.",
      },
      {
        name: "LASIK",
        href: "/vision-correction/lasik",
        blurb:
          "Still excellent for sharpening distance vision when your natural lens is clear and reading range matters less to you.",
      },
      {
        name: "Advanced lens options",
        href: "/cataracts/lens-options",
        blurb:
          "Trifocal, extended depth of focus, toric, and the Light Adjustable Lens. The lens choice is where your lifestyle enters the plan.",
      },
    ],
    candidacyGood: [
      "You depend on readers, progressives, or bifocals and want your range back",
      "Your prescription keeps creeping and new glasses never feel quite right",
      "You want one procedure that also takes future cataracts off the table",
    ],
    candidacyCaution: [
      "Healthy retinas matter for premium lenses, so a full dilated exam comes first",
      "Diffractive lenses trade some night crispness for range; we will be straight about it",
      "If your natural lens is still clear and flexible, LASIK may honestly serve you better",
    ],
    notCandidate: {
      title: "If RLE is not your fit, here is your path.",
      body: "Some eyes, and some visual jobs, are better served another way. Night-shift drivers, for instance, may prefer a plan that prioritizes crisp darkness over reading freedom. We will tell you which one you are.",
      alternatives: [
        {
          label: "LASIK",
          href: "/vision-correction/lasik",
          note: "Distance-first correction while your lens is still clear",
        },
        {
          label: "Monofocal or EDOF lens plans",
          href: "/cataracts/lens-options",
          note: "Lens-based plans tuned for night-vision quality",
        },
        {
          label: "Talk it through",
          href: "/book",
          note: "A consultation compares your real options side by side",
        },
      ],
    },
  },
  {
    slug: "60-plus",
    ageLabel: "Ages 60+",
    cardTitle: "Bring the brightness back",
    headline: "If night driving has you gripping the wheel, let us look.",
    lede: "Cataracts arrive so gradually that most people blame the headlights, the light bulbs, or the dirty windshield first. Surgery today is brief, comfortable, and the lens you choose can give you vision you have not had in decades.",
    lifeCopy: [
      "A cataract is not a film over the eye. It is the natural lens itself turning cloudy, the way a clear egg white turns opaque in the pan. No drop or diet reverses it, but replacing the lens resolves it, usually in about 15 minutes per eye.",
      "Here is the part too few patients hear: cataract surgery is also an opportunity. Since the lens is being replaced anyway, choosing an advanced lens can correct astigmatism and restore reading range in the same procedure. You have this choice exactly once. We make sure you get to make it with full information.",
    ],
    procedures: [
      {
        name: "Cataract surgery",
        href: "/cataracts",
        tag: "Covered by insurance",
        blurb:
          "Modern phaco surgery, explained in plain language. Standard and laser-assisted with the LensAR femtosecond laser our surgeons brought to the region.",
      },
      {
        name: "Premium lens options",
        href: "/cataracts/lens-options",
        tag: "Your one-time choice",
        blurb:
          "Monofocal, toric, extended depth of focus, trifocal, and the Light Adjustable Lens. Honest tradeoffs for each, compared side by side.",
      },
      {
        name: "YAG capsulotomy",
        href: "/cataracts#yag",
        blurb:
          "If vision clouds again months or years after surgery, a painless in-office laser clears it in minutes.",
      },
    ],
    candidacyGood: [
      "Glare and halos at night, especially while driving",
      "Cloudy, dim, or yellowed vision that new glasses cannot fix",
      "Trouble reading in normal light, or colors that look washed out",
    ],
    candidacyCaution: [
      "Not every cataract needs surgery today; early ones can be watched honestly",
      "Other conditions like macular degeneration or glaucoma can share symptoms, which is why the exam matters",
      "Premium lenses need reasonably healthy eyes; we will tell you plainly what your eyes support",
    ],
    notCandidate: {
      title: "Symptoms but no cataract? We will find the real cause.",
      body: "If your exam shows something other than a cataract, you leave with an actual diagnosis and a plan, whether that is dry eye treatment, glaucoma care, or a referral to the right specialist.",
      alternatives: [
        {
          label: "Glaucoma care",
          href: "/about",
          note: "Monitoring and treatment within the practice",
        },
        {
          label: "Cataract Self-Test",
          href: "/cataract-self-test",
          note: "Two minutes to gauge whether your symptoms fit",
        },
        {
          label: "Book an exam",
          href: "/book",
          note: "The only way to know for sure",
        },
      ],
    },
  },
];

export function getAgePath(slug: string) {
  return agePaths.find((p) => p.slug === slug);
}
