export const site = {
  name: "Commonwealth Eye Surgery",
  shortName: "Commonwealth Eye",
  tagline: "Choose the Doctors the Doctors Choose.",
  secondaryTagline: "Better Living Through Better Vision.",
  description:
    "Premier surgical eye care in the Bluegrass. Cataract surgery, LASIK, and advanced lens options in Lexington and Louisville, Kentucky.",
  demoNote:
    "Demo preview for internal review. This is not the live Commonwealth Eye Surgery website. Content marked in amber is placeholder.",
  bookHref: "/book",
  eyeSurgeryTodayUrl: "https://eyesurgerytoday.com",
};

export type LocationHours = { days: string; hours: string };

export type PracticeLocation = {
  slug: "lexington" | "louisville";
  name: string;
  badge?: string;
  address1: string;
  address2: string;
  cityStateZip: string;
  phone: string;
  phoneHref: string;
  hours: LocationHours[];
  blurb: string;
};

export const locations: PracticeLocation[] = [
  {
    slug: "lexington",
    name: "Lexington",
    address1: "2353 Alexandria Dr #260",
    address2: "",
    cityStateZip: "Lexington, KY 40504",
    phone: "(859) 224-2655",
    phoneHref: "tel:+18592242655",
    hours: [{ days: "Monday – Friday", hours: "8:00 AM – 5:00 PM" }],
    blurb:
      "Our home base and surgery center. Kentucky's first optometric co-management surgical center has served the Bluegrass from Lexington for decades.",
  },
  {
    slug: "louisville",
    name: "Louisville",
    badge: "Now Open",
    address1: "9780 Ormsby Station Road #200",
    address2: "",
    cityStateZip: "Louisville, KY 40223",
    phone: "(502) 306-9551",
    phoneHref: "tel:+15023069551",
    hours: [{ days: "Monday – Friday", hours: "[Office hours]" }],
    blurb:
      "The same surgeons and the same standard of care, now closer to home for Louisville families.",
  },
];

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Start Here",
    href: "/start-here",
    children: [
      {
        label: "Ages 18–45",
        href: "/start-here/18-45",
        description: "LASIK, PRK, and EVO ICL",
      },
      {
        label: "Ages 45–60",
        href: "/start-here/45-60",
        description: "Refractive Lens Exchange",
      },
      {
        label: "Ages 60+",
        href: "/start-here/60-plus",
        description: "Advanced cataract surgery",
      },
      {
        label: "Vision Correction Quiz",
        href: "/vision-quiz",
        description: "Find your path in 60 seconds",
      },
      {
        label: "Cataract Self-Test",
        href: "/cataract-self-test",
        description: "Check your symptoms",
      },
    ],
  },
  {
    label: "LASIK & Vision Correction",
    href: "/vision-correction",
    children: [
      { label: "LASIK", href: "/vision-correction/lasik" },
      { label: "PRK", href: "/vision-correction/prk" },
      { label: "EVO ICL", href: "/vision-correction/evo-icl" },
      {
        label: "LASIK Alternatives",
        href: "/vision-correction/lasik-alternatives",
      },
      { label: "Vision Correction Quiz", href: "/vision-quiz" },
    ],
  },
  {
    label: "Cataracts & Lenses",
    href: "/cataracts",
    children: [
      { label: "Cataract Surgery", href: "/cataracts" },
      { label: "Lens Options", href: "/cataracts/lens-options" },
      {
        label: "Light Adjustable Lens",
        href: "/cataracts/lens-options/light-adjustable-lens",
      },
      {
        label: "Refractive Lens Exchange",
        href: "/cataracts/refractive-lens-exchange",
      },
      { label: "Cataract Self-Test", href: "/cataract-self-test" },
    ],
  },
  { label: "Doctors", href: "/doctors" },
  { label: "Reviews", href: "/reviews" },
  { label: "Patients", href: "/patients" },
  { label: "Locations", href: "/locations" },
];

export type Stat = {
  value: string;
  label: string;
  placeholder: boolean;
};

/** Authority stat bar. Figures from the practice's published bios and public review listings (Aug 2026). */
export const stats: Stat[] = [
  {
    value: "First in Kentucky",
    label: "to perform femtosecond laser cataract surgery",
    placeholder: false,
  },
  {
    value: "Introduced LensAR",
    label: "femtosecond laser technology to the region",
    placeholder: false,
  },
  {
    value: "150,000+",
    label: "cataract surgeries by our three surgeons",
    placeholder: false,
  },
  {
    value: "6,155+",
    label: "verified patient reviews on rater8",
    placeholder: false,
  },
  {
    value: "4.8 stars",
    label: "across 865+ Google reviews",
    placeholder: false,
  },
];

export const footerLinks = {
  explore: [
    { label: "Why Commonwealth", href: "/why-commonwealth" },
    { label: "Start Here — By Age", href: "/start-here" },
    { label: "LASIK & Vision Correction", href: "/vision-correction" },
    { label: "Cataracts & Lens Options", href: "/cataracts" },
    { label: "Refractive Lens Exchange", href: "/cataracts/refractive-lens-exchange" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Reviews & Stories", href: "/reviews" },
    { label: "About Us", href: "/about" },
  ],
  patients: [
    { label: "Book a Consultation", href: "/book" },
    { label: "Cataract Self-Test", href: "/cataract-self-test" },
    { label: "Vision Correction Quiz", href: "/vision-quiz" },
    { label: "Financing", href: "/patients/financing" },
    { label: "Insurance", href: "/patients/insurance" },
    { label: "Patient Forms", href: "/patients/forms" },
    { label: "Traveling Patients", href: "/patients/traveling" },
    { label: "FAQs", href: "/patients/faqs" },
  ],
};
