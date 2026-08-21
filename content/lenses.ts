export type Lens = {
  slug: string;
  name: string;
  shortName: string;
  brand?: string;
  tag: string;
  summary: string;
  howItWorks: string[];
  bestFor: string[];
  tradeoffs: string[];
  /** Comparison table row values */
  table: {
    distance: string;
    intermediate: string;
    near: string;
    astigmatism: string;
    nightDriving: string;
    glassesAfter: string;
  };
  costNote: string;
  /** Real explainer video from the practice's YouTube channel, when one exists. */
  video?: { id: string; title: string };
};

export const lenses: Lens[] = [
  {
    slug: "monofocal",
    name: "Monofocal Lens",
    shortName: "Monofocal",
    tag: "The dependable standard",
    summary:
      "One clear focus point, usually set for distance. The proven workhorse of cataract surgery, and the lens most insurance plans cover.",
    howItWorks: [
      "A monofocal lens has a single focusing power. Most patients choose to have it set for distance, so driving, golf, and the television are sharp without glasses.",
      "Because it focuses at one distance, your eyes no longer shift focus between far and near the way they did when you were young. Reading glasses handle the close-up work.",
      "Some patients choose a blended approach, with one eye set slightly nearer than the other. We will talk through whether that suits how your eyes work together.",
    ],
    bestFor: [
      "Patients who do not mind reading glasses for close work",
      "Patients whose insurance coverage is the priority, since standard monofocal lenses are typically covered",
      "Eyes with certain retinal or corneal conditions where a simple optic is the safer choice",
    ],
    tradeoffs: [
      "You should plan on reading glasses for menus, phones, and books.",
      "It does not correct astigmatism. If you have meaningful astigmatism, a toric version or glasses make up the difference.",
      "One focus point means the choice of that point matters. We help you pick it based on how you live.",
    ],
    table: {
      distance: "Excellent",
      intermediate: "Limited",
      near: "Reading glasses expected",
      astigmatism: "Not corrected",
      nightDriving: "Crisp, minimal glare or halos",
      glassesAfter: "Yes, for near work",
    },
    costNote:
      "Typically covered by insurance and Medicare as the standard cataract lens.",
  },
  {
    slug: "toric",
    name: "Toric Lens",
    shortName: "Toric",
    tag: "Built for astigmatism",
    summary:
      "A lens shaped to cancel out astigmatism, so the blur and shadowing that glasses used to fix is corrected inside the eye itself.",
    howItWorks: [
      "Astigmatism means the front of your eye is shaped more like a football than a basketball, which smears light into blur at every distance.",
      "A toric lens has that correction built into its optic. Your surgeon aligns it precisely to the axis of your astigmatism during surgery.",
      "Toric correction is available across most lens styles: monofocal, extended depth of focus, trifocal, and the Light Adjustable Lens.",
    ],
    bestFor: [
      "Patients with meaningful astigmatism who want sharp uncorrected vision at their chosen focus distance",
      "Patients who were told for years that their astigmatism made them a harder case",
    ],
    tradeoffs: [
      "A toric monofocal still behaves like a monofocal: expect reading glasses for near work.",
      "Precise alignment matters, which is one reason careful measurement and an experienced surgical team make a real difference.",
      "Toric lenses are an upgrade over the standard covered lens, so there is an out-of-pocket difference.",
    ],
    table: {
      distance: "Excellent, astigmatism corrected",
      intermediate: "Depends on base lens style",
      near: "Depends on base lens style",
      astigmatism: "Corrected in the lens",
      nightDriving: "Crisp, minimal glare or halos",
      glassesAfter: "Depends on base lens style",
    },
    costNote:
      "Premium upgrade. Financing available; we review exact pricing at your consultation.",
  },
  {
    slug: "light-adjustable-lens",
    name: "Light Adjustable Lens",
    shortName: "Light Adjustable",
    brand: "RxSight",
    tag: "The only lens you can fine-tune after surgery",
    summary:
      "The RxSight Light Adjustable Lens is customized after your eye has healed, using painless light treatments, so your prescription is dialed in based on your real-world result.",
    howItWorks: [
      "Every other lens must be chosen before surgery, based on measurements and predictions. The Light Adjustable Lens flips that order.",
      "The lens is made of a special photosensitive material. After your eye heals, you test-drive your vision. Then a series of short, painless UV light treatments reshapes the lens power to your exact preference.",
      "Once you are happy, a final light treatment locks the prescription in permanently. You wear UV-protective glasses during the adjustment period.",
    ],
    bestFor: [
      "Patients who want the most precise possible outcome and are willing to attend follow-up light treatment visits",
      "Patients with prior LASIK, PRK, or RK, where standard lens calculations are less predictable",
      "Patients who want to test their vision in real life before committing",
    ],
    tradeoffs: [
      "It requires several office visits for light treatments after surgery, typically over a few weeks.",
      "You must wear the provided UV-protective glasses until the lens is locked in.",
      "It is a premium lens with an out-of-pocket cost, and it is a distance-focused technology: most patients still use readers for small print.",
    ],
    table: {
      distance: "Excellent, adjusted after healing",
      intermediate: "Good, tunable",
      near: "Readers often still needed",
      astigmatism: "Adjustable after surgery",
      nightDriving: "Crisp, minimal glare or halos",
      glassesAfter: "Often for near work",
    },
    costNote:
      "Premium lens with an adjustment visit schedule. Financing available.",
    video: {
      id: "b11d1f6L5_I",
      title: "The Light Adjustable Lens, explained by our team",
    },
  },
  {
    slug: "edof",
    name: "Extended Depth of Focus Lens",
    shortName: "EDOF",
    tag: "Smooth range, distance through arm's length",
    summary:
      "An extended depth of focus lens stretches one focal point into a continuous range, giving strong distance and intermediate vision with fewer night-vision side effects than trifocal designs.",
    howItWorks: [
      "Instead of splitting light into separate focus zones, an EDOF lens elongates a single focus into a range.",
      "The result is seamless vision from across the room to the dashboard, the kitchen counter, and the computer screen.",
      "Fine print up close is the compromise: many EDOF patients keep inexpensive readers nearby for small text.",
    ],
    bestFor: [
      "Patients who live at distance and arm's length: driving, screens, cooking, sports",
      "Patients who want less dependence on glasses but are wary of the halo profile of diffractive multifocal lenses",
      "Many patients whose eyes are not ideal for a trifocal",
    ],
    tradeoffs: [
      "Small print and low-light reading usually still call for readers.",
      "Some patients notice mild rings or glare at night, though typically less than with trifocal designs.",
      "It is a premium lens with an out-of-pocket difference.",
    ],
    table: {
      distance: "Excellent",
      intermediate: "Excellent",
      near: "Functional; readers for fine print",
      astigmatism: "Toric versions available",
      nightDriving: "Mild halos possible, usually less than trifocal",
      glassesAfter: "Sometimes, for fine print",
    },
    costNote: "Premium lens. Financing available.",
  },
  {
    slug: "trifocal",
    name: "Trifocal Lens",
    shortName: "Trifocal",
    brand: "Alcon PanOptix Pro",
    tag: "The fullest range: near, middle, and far",
    summary:
      "The Alcon PanOptix Pro trifocal splits light into three focus zones, giving most patients useful vision at distance, arm's length, and reading range with the least need for glasses.",
    howItWorks: [
      "A trifocal optic uses concentric diffractive rings to create three focal points: far, intermediate, and near.",
      "Your brain learns to use the image that is in focus for what you are doing, a process called neuroadaptation that settles in over weeks to months.",
      "Of all lens classes, trifocals offer the highest likelihood of reading a menu, seeing the dashboard, and driving, all without glasses.",
    ],
    bestFor: [
      "Patients whose top priority is freedom from glasses at every distance",
      "Healthy eyes with healthy corneas and retinas, confirmed by careful testing",
      "Patients comfortable trading some night-vision crispness for full range",
    ],
    tradeoffs: [
      "Halos and glare around lights at night are the known tradeoff of diffractive optics. Most patients adapt; a small number find them bothersome.",
      "Trifocals need a healthy eye. Significant dry eye, corneal irregularity, or retinal disease can make a different lens the wiser choice.",
      "It is a premium lens with an out-of-pocket cost.",
    ],
    table: {
      distance: "Excellent",
      intermediate: "Excellent",
      near: "Excellent for most patients",
      astigmatism: "Toric versions available",
      nightDriving: "Halos and glare possible; most adapt",
      glassesAfter: "Usually not needed",
    },
    costNote: "Premium lens. Financing available.",
  },
];

export function getLens(slug: string) {
  return lenses.find((l) => l.slug === slug);
}
