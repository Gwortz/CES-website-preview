export type Credential = {
  label: string;
  value: string;
  /** true when the value is an unverified bracketed placeholder */
  placeholder: boolean;
};

export type InnovationItem = {
  title: string;
  body: string;
  /** parts of the body that are placeholders get marked inline in the page */
  placeholderNote?: string;
};

export type Doctor = {
  slug: string;
  name: string;
  displayName: string;
  degree: "MD" | "OD";
  role: string;
  focus: string;
  isSurgeon: boolean;
  intro: string[];
  credentials: Credential[];
  innovation?: InnovationItem[];
  quote?: string;
  /** Path under /public, e.g. "/images/doctors/lance-ferguson.jpg". Falls back to a placeholder when absent. */
  photo?: string;
  /** YouTube video ID for the doctor's video introduction, when available. */
  videoId?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "lance-ferguson",
    name: "Lance S. Ferguson, MD",
    displayName: "Dr. Lance Ferguson",
    degree: "MD",
    role: "Cataract & Refractive Surgeon",
    focus: "Laser cataract surgery pioneer and refractive surgery leader",
    isSurgeon: true,
    quote:
      "Every eye is different. The plan should be too.",
    intro: [
      "Dr. Ferguson made Kentucky history. He was the first ophthalmologist in the state to perform femtosecond laser cataract surgery, and together with Dr. Wörtz he introduced the LensAR femtosecond laser to the region.",
      "Patients meet a surgeon who is direct, warm, and unhurried. He explains what he sees, what he recommends, and why. Then he listens.",
      "Referring optometrists across Kentucky have trusted Dr. Ferguson with their patients, their families, and in many cases their own eyes.",
    ],
    credentials: [
      { label: "Medical degree", value: "Medical school", placeholder: true },
      { label: "Residency", value: "Ophthalmology residency", placeholder: true },
      { label: "Board certification", value: "Certification details", placeholder: true },
      { label: "Years in practice", value: "XX years", placeholder: true },
      { label: "Professional memberships", value: "Societies and roles", placeholder: true },
    ],
    innovation: [
      {
        title: "First femtosecond laser cataract surgery in Kentucky",
        body: "Dr. Ferguson was the first ophthalmologist in Kentucky to perform femtosecond laser cataract surgery, bringing laser precision to a procedure that had been done by hand for decades.",
      },
      {
        title: "Brought LensAR to the region",
        body: "With Dr. Wörtz, he introduced the LensAR femtosecond laser to the region, giving Bluegrass patients access to laser-assisted cataract surgery close to home.",
      },
      {
        title: "Teaching and leadership",
        body: "Details of lectureships, society leadership, and teaching appointments belong here.",
        placeholderNote: "Lectureships, leadership roles, and teaching appointments",
      },
    ],
  },
  {
    slug: "gary-wortz",
    name: "Gary Wörtz, MD",
    displayName: "Dr. Gary Wörtz",
    degree: "MD",
    role: "Cataract & Refractive Surgeon",
    focus: "Surgical innovation, device design, and premium lens surgery",
    isSurgeon: true,
    quote:
      "The best technology in the world only matters if it is matched to the right patient.",
    intro: [
      "Dr. Wörtz is a surgeon and an inventor. Alongside a busy cataract and refractive practice, he has spent his career designing better tools and better intraocular lens technology for the whole field.",
      "With Dr. Ferguson, he introduced the LensAR femtosecond laser to the region. He is also a co-founder of Eye Surgery Today, the patient education platform built to help people understand their options in plain language.",
      "In clinic, that curiosity shows up as patience. He enjoys walking patients through their lens options until the choice actually makes sense.",
    ],
    credentials: [
      { label: "Medical degree", value: "Medical school", placeholder: true },
      { label: "Residency", value: "Ophthalmology residency", placeholder: true },
      { label: "Board certification", value: "Certification details", placeholder: true },
      { label: "Patents", value: "X patents issued", placeholder: true },
      { label: "Publications & lectures", value: "Selected publications", placeholder: true },
    ],
    innovation: [
      {
        title: "Device innovation and patents",
        body: "Dr. Wörtz holds patents in ophthalmic device and lens technology. Specific patents and the companies he has founded or advised belong here.",
        placeholderNote: "Patent numbers, devices, and company roles",
      },
      {
        title: "Brought LensAR to the region",
        body: "With Dr. Ferguson, he introduced the LensAR femtosecond laser to the region for laser-assisted cataract surgery.",
      },
      {
        title: "Co-founder, Eye Surgery Today",
        body: "He co-founded Eye Surgery Today, a national patient education platform that explains modern eye surgery without the jargon.",
      },
    ],
  },
  {
    slug: "asim-piracha",
    name: "Asim Piracha, MD",
    displayName: "Dr. Asim Piracha",
    degree: "MD",
    role: "Cataract & Refractive Surgeon",
    focus: "LASIK and advanced refractive surgery expertise",
    isSurgeon: true,
    quote:
      "Great outcomes start with honest candidacy decisions.",
    intro: [
      "Dr. Piracha is known for deep refractive surgery expertise. LASIK, PRK, EVO ICL, and lens-based vision correction are the center of his surgical practice.",
      "He is exacting about candidacy. If LASIK is not the safest path to great vision for your eyes, he will tell you, and he will show you the option that is.",
      "Patients and referring doctors describe the same experience: careful measurement, straight answers, and a calm, practiced hand.",
    ],
    credentials: [
      { label: "Medical degree", value: "Medical school", placeholder: true },
      { label: "Residency", value: "Ophthalmology residency", placeholder: true },
      { label: "Fellowship", value: "Cornea / refractive fellowship", placeholder: true },
      { label: "Board certification", value: "Certification details", placeholder: true },
      { label: "Professional roles", value: "Society roles and faculty positions", placeholder: true },
    ],
    innovation: [
      {
        title: "Refractive surgery depth",
        body: "Dr. Piracha's refractive expertise spans all-laser LASIK, wavefront-guided treatment planning, PRK, and EVO ICL. Specific training, research, and trial participation belong here.",
        placeholderNote: "Research, clinical trials, and teaching detail",
      },
    ],
  },
  {
    slug: "howell-findley",
    name: "Howell M. Findley, OD",
    displayName: "Dr. Howell Findley",
    degree: "OD",
    role: "Optometrist",
    focus: "Co-management and surgical care coordination",
    isSurgeon: false,
    intro: [
      "Dr. Findley is a cornerstone of the co-management model that made Commonwealth Eye Surgery Kentucky's first optometric co-management surgical center.",
      "He partners with your hometown optometrist so your care before and after surgery is seamless, close to home, and never rushed.",
    ],
    credentials: [
      { label: "Optometry degree", value: "College of optometry", placeholder: true },
      { label: "Clinical focus", value: "Pre- and post-operative surgical care", placeholder: false },
      { label: "Years in practice", value: "XX years", placeholder: true },
    ],
  },
  {
    slug: "marty-smith",
    name: "R. Marty Smith, OD",
    displayName: "Dr. Marty Smith",
    degree: "OD",
    role: "Optometrist",
    focus: "Surgical evaluation and patient counseling",
    isSurgeon: false,
    intro: [
      "Dr. Smith guides patients through the decisions that surround surgery: whether it is time, which lens fits your life, and what recovery will really look like.",
      "His exams are thorough and his explanations are plain. Patients leave knowing exactly where they stand.",
    ],
    credentials: [
      { label: "Optometry degree", value: "College of optometry", placeholder: true },
      { label: "Clinical focus", value: "Surgical evaluation and counseling", placeholder: false },
      { label: "Years in practice", value: "XX years", placeholder: true },
    ],
  },
  {
    slug: "christopher-kuc",
    name: "Christopher J. Kuc, OD",
    displayName: "Dr. Christopher Kuc",
    degree: "OD",
    role: "Optometrist",
    focus: "Post-operative care and ocular health",
    isSurgeon: false,
    intro: [
      "Dr. Kuc watches over the healing. From the first day after surgery through your final visit, he tracks your recovery and keeps your surgeon and your hometown optometrist in the loop.",
      "He also manages ocular health conditions that matter before surgery, so your eyes are ready when the day comes.",
    ],
    credentials: [
      { label: "Optometry degree", value: "College of optometry", placeholder: true },
      { label: "Clinical focus", value: "Post-operative care and ocular health", placeholder: false },
      { label: "Years in practice", value: "XX years", placeholder: true },
    ],
  },
];

export const surgeons = doctors.filter((d) => d.isSurgeon);
export const optometrists = doctors.filter((d) => !d.isSurgeon);

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
