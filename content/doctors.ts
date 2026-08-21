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
  /** Real video from the practice's YouTube channel, when one fits. */
  video?: { id: string; title: string };
};

/**
 * Bios below are drawn from the practice's published doctor pages at
 * commonwealtheyes.com and public professional sources, gathered by search.
 * Anything still bracketed in amber could not be verified and needs
 * confirmation from the practice.
 */
export const doctors: Doctor[] = [
  {
    slug: "lance-ferguson",
    photo: "/images/doctors/lance-ferguson.jpg",
    name: "Lance S. Ferguson, MD",
    displayName: "Dr. Lance Ferguson",
    degree: "MD",
    role: "Cataract & Refractive Surgeon",
    focus: "Surgical Director. Laser cataract surgery pioneer with more than 81,000 procedures performed.",
    isSurgeon: true,
    quote: "Every eye is different. The plan should be too.",
    intro: [
      "Dr. Ferguson has practiced in Lexington since 1985 and serves as Surgical Director of Commonwealth Eye Surgery. He has performed over 81,000 ophthalmic procedures, including nearly 51,000 cataract surgeries.",
      "He made Kentucky history as the first ophthalmologist in the state to perform femtosecond laser cataract surgery, chosen by the laser's maker to introduce the technology here. With Dr. Wörtz, he later brought the LensAR femtosecond laser to the region.",
      "Patients meet a surgeon who is direct, warm, and unhurried. He explains what he sees, what he recommends, and why. Then he listens. Referring optometrists across Kentucky have trusted him with their patients, their families, and their own eyes for four decades.",
    ],
    credentials: [
      {
        label: "Undergraduate",
        value: "B.A. in Mathematics, Duke University, magna cum laude, 1976",
        placeholder: false,
      },
      {
        label: "Medical degree",
        value: "M.D., University of Cincinnati College of Medicine, 1980",
        placeholder: false,
      },
      {
        label: "Residency",
        value:
          "University of Cincinnati, Chief Resident in Ophthalmology, 1984; internship at Presbyterian Medical Center, Denver",
        placeholder: false,
      },
      {
        label: "Board certifications",
        value:
          "American Board of Ophthalmology, 1985; American Board of Eye Surgery subspecialist in cataract and implant surgery, 1990, and in LASIK, 1997",
        placeholder: false,
      },
      {
        label: "Leadership",
        value:
          "Past President, American College of Eye Surgeons; advisory boards of the American Board of Eye Surgery and American College of Eye Surgeons; Fellow, Society for Excellence in Eye Care",
        placeholder: false,
      },
      {
        label: "Teaching",
        value:
          "Assistant Professor of Ophthalmology and Visual Sciences, University of Kentucky; adjunct clinical professor at multiple colleges of optometry",
        placeholder: false,
      },
    ],
    innovation: [
      {
        title: "First femtosecond laser cataract surgery in Kentucky",
        body: "Dr. Ferguson was the first ophthalmologist in Kentucky to perform femtosecond laser cataract surgery, selected by OptiMedica as its surgeon of choice to introduce the technology to the state.",
      },
      {
        title: "Brought LensAR to the region",
        body: "With Dr. Wörtz, he introduced the LensAR femtosecond laser to the region, adding laser precision and astigmatism-correction advantages to cataract surgery close to home.",
      },
      {
        title: "First-in-state lens implants",
        body: "He performed Kentucky's first implant of the Lenstec Softec HD intraocular lens in October 2010, among the first surgeons in the country to offer it. Lens makers seek him out for his clinical expertise in developing new implant technology.",
      },
    ],
    video: {
      id: "oo3deULUAjI",
      title: "Watch: a live PRK procedure, narrated by Dr. Ferguson",
    },
  },
  {
    slug: "gary-wortz",
    photo: "/images/doctors/gary-wortz.jpg",
    name: "Gary Wörtz, MD",
    displayName: "Dr. Gary Wörtz",
    degree: "MD",
    role: "Cataract & Refractive Surgeon",
    focus: "Surgeon, inventor, and educator. 50 patents and one of the busiest cataract and refractive surgeons in the country.",
    isSurgeon: true,
    quote:
      "The best technology in the world only matters if it is matched to the right patient.",
    intro: [
      "Dr. Wörtz is a surgeon and an inventor. He is among the busiest cataract and refractive surgeons in the United States, and he has spent his career designing better tools for the whole field, with 50 patents granted in the U.S. and internationally.",
      "He is the founder and Chief Medical Officer of Omega Ophthalmics, a Lexington-based company developing a new kind of intraocular lens platform, and co-founder of Arcuate Innovations, which guides surgeons worldwide in the surgical correction of astigmatism. With Dr. Ferguson, he introduced the LensAR femtosecond laser to the region.",
      "Beyond the operating room, he teaches residents as Associate Professor of Ophthalmology at the University of Kentucky, hosts the Ophthalmology off the Grid podcast, and helped found Eye Surgery Today so patients everywhere could get plain-language answers. In clinic, that curiosity shows up as patience: he enjoys walking you through your lens options until the choice actually makes sense.",
    ],
    credentials: [
      {
        label: "Undergraduate",
        value: "B.A. in Chemistry, Asbury University, Wilmore, Kentucky",
        placeholder: false,
      },
      {
        label: "Medical degree",
        value:
          "M.D., University of Louisville School of Medicine, with honors, 2004",
        placeholder: false,
      },
      {
        label: "Residency",
        value:
          "University of Kentucky, Chief Resident in Ophthalmology, 2008; surgical internship, University of Kentucky Department of Surgery",
        placeholder: false,
      },
      {
        label: "Board certification",
        value: "Board-certified ophthalmologist",
        placeholder: false,
      },
      {
        label: "Patents",
        value: "50 patents granted in the U.S. and internationally",
        placeholder: false,
      },
      {
        label: "Recognition",
        value:
          'The Ophthalmologist "Top 40 Under 40" Power List, 2015, and Power List, 2022; Ocular Surgery News Premier Surgeon 300; Chief Medical Editor of MillennialEYE',
        placeholder: false,
      },
      {
        label: "Teaching",
        value:
          "Associate Professor of Ophthalmology, University of Kentucky, lecturing and instructing residents in refractive surgery",
        placeholder: false,
      },
    ],
    innovation: [
      {
        title: "Founder, Omega Ophthalmics",
        body: "Dr. Wörtz founded Omega Ophthalmics and serves as its Chief Medical Officer, developing a novel intraocular lens platform designed to advance what lens implants can do.",
      },
      {
        title: "Co-founder, Arcuate Innovations",
        body: "Arcuate Innovations provides evidence-based guidance for the surgical correction of astigmatism to ophthalmologists around the world.",
      },
      {
        title: "Co-founder, Eye Surgery Today",
        body: "He is a featured surgeon and co-founder of Eye Surgery Today, the national patient education platform that explains modern eye surgery without the jargon.",
      },
    ],
    video: {
      id: "SV72po8OO1A",
      title: "Watch: Is LASIK painful? Dr. Wörtz answers",
    },
  },
  {
    slug: "asim-piracha",
    photo: "/images/doctors/asim-piracha.jpg",
    name: "Asim Piracha, MD",
    displayName: "Dr. Asim Piracha",
    degree: "MD",
    role: "Cataract & Refractive Surgeon",
    focus: "Cornea and refractive specialist. Performed Kentucky's first all-laser LASIK and now anchors our Louisville care.",
    isSurgeon: true,
    quote: "Great outcomes start with honest candidacy decisions.",
    intro: [
      "Dr. Piracha is a nationally recognized refractive surgeon. He is credited with performing Kentucky's first all-laser LASIK in 2003, and his practice centers on LASIK, cornea, and lens-based vision correction.",
      "He is fellowship-trained in cornea and refractive surgery, a past President of the American Board of Eye Surgery, and served on the Kentucky Board of Medical Licensure by appointment of the Governor from 2011 to 2015. He teaches as an associate professor in the ophthalmology departments of both the University of Kentucky and the University of Louisville.",
      "He is exacting about candidacy. If LASIK is not the safest path to great vision for your eyes, he will tell you, and he will show you the option that is. Louisville patients now see him right in our Ormsby Station office.",
    ],
    credentials: [
      {
        label: "Medical degree",
        value:
          "M.D., West Virginia University School of Medicine; Alpha Omega Alpha national medical honor society",
        placeholder: false,
      },
      {
        label: "Residency",
        value:
          "University of Kentucky, Senior Chief Resident of Ophthalmology; first runner-up in a North America-wide cataract and lens implant surgery competition",
        placeholder: false,
      },
      {
        label: "Fellowship",
        value:
          "University of Minnesota: cornea, refractive, external disease, and anterior segment surgery",
        placeholder: false,
      },
      {
        label: "Board certifications",
        value:
          "American Board of Ophthalmology, 2000; certified in both LASIK and phacoemulsification by the American Board of Eye Surgery",
        placeholder: false,
      },
      {
        label: "Leadership",
        value:
          "Past President, American Board of Eye Surgery; board of the American College of Eye Surgeons; Kentucky Board of Medical Licensure, 2011 to 2015",
        placeholder: false,
      },
      {
        label: "Teaching",
        value:
          "Associate professor, University of Kentucky Department of Ophthalmology and University of Louisville Department of Ophthalmology and Visual Sciences",
        placeholder: false,
      },
    ],
    innovation: [
      {
        title: "Kentucky's first all-laser LASIK",
        body: "Dr. Piracha is credited with performing the first all-laser LASIK surgery in Kentucky in 2003, the blade-free approach that is now our standard for every LASIK patient.",
      },
      {
        title: "A career of refractive leadership",
        body: "From leading the American Board of Eye Surgery to lecturing and publishing for ophthalmology audiences, his career has centered on raising the standard of refractive surgery.",
      },
    ],
  },
  {
    slug: "howell-findley",
    photo: "/images/doctors/howell-findley.jpg",
    name: "Howell M. Findley, OD",
    displayName: "Dr. Howell Findley",
    degree: "OD",
    role: "Optometrist",
    focus: "Co-founder of the co-management model that became Commonwealth Eye Surgery. 40+ years serving the Bluegrass.",
    isSurgeon: false,
    intro: [
      "Dr. Findley did not just join the co-management model. He helped invent it. Practicing in Lexington since 1984, he was among the first optometrists in the nation to develop a system where your hometown eye doctor and your surgeon work as one team, the idea that became Kentucky's first optometric co-management surgical center.",
      "Trained at the UAB School of Optometry and through an optometric fellowship at the Bascom Palmer Eye Institute, he has spent four decades making surgical care feel seamless, local, and never rushed. His alma mater named him Alumnus of the Year in 2022.",
    ],
    credentials: [
      {
        label: "Optometry degree",
        value:
          "B.S. in Physiological Optics, 1979, and O.D., 1981, University of Alabama at Birmingham School of Optometry",
        placeholder: false,
      },
      {
        label: "Fellowship",
        value: "Optometric Fellowship, Bascom Palmer Eye Institute, 1982",
        placeholder: false,
      },
      {
        label: "Awards",
        value:
          "Kentucky Optometric Association Young Optometrist of the Year, 1988–89, and Optometrist of the Year, 2006; UAB School of Optometry Alumnus of the Year, 2022",
        placeholder: false,
      },
      {
        label: "Teaching",
        value:
          "Adjunct clinical professor at multiple colleges of optometry, including Ferris State, Illinois College of Optometry, Indiana University, and Ohio State",
        placeholder: false,
      },
      {
        label: "Publications",
        value:
          "Articles in regional and national optometric journals, including reviews of intraocular lens implants and glaucoma, and a chapter on co-management",
        placeholder: false,
      },
    ],
  },
  {
    slug: "marty-smith",
    photo: "/images/doctors/marty-smith.jpg",
    name: "R. Marty Smith, OD",
    displayName: "Dr. Marty Smith",
    degree: "OD",
    role: "Optometrist",
    focus: "Surgical evaluation and patient counseling. With the practice since 1996.",
    isSurgeon: false,
    intro: [
      "A native of Hindman, Kentucky, Dr. Smith has guided Commonwealth Eye Surgery patients through their surgical decisions since May 1996: whether it is time, which lens fits your life, and what recovery will really look like.",
      "He trained at the Indiana University School of Optometry and completed fellowships at both Commonwealth Eye Surgery and the Bascom Palmer Eye Institute. His exams are thorough and his explanations are plain. Patients leave knowing exactly where they stand.",
    ],
    credentials: [
      {
        label: "Undergraduate",
        value: "Morehead State University, 1991",
        placeholder: false,
      },
      {
        label: "Optometry degree",
        value: "O.D., Indiana University School of Optometry, 1995",
        placeholder: false,
      },
      {
        label: "Fellowships",
        value:
          "Commonwealth Eye Surgery, Lexington, and Bascom Palmer Eye Institute, Miami",
        placeholder: false,
      },
      {
        label: "Memberships",
        value:
          "American Optometric Association, Kentucky Optometric Association, Society for Excellence in Eye Care",
        placeholder: false,
      },
    ],
  },
  {
    slug: "christopher-kuc",
    photo: "/images/doctors/christopher-kuc.jpg",
    name: "Christopher J. Kuc, OD, FAAO",
    displayName: "Dr. Christopher Kuc",
    degree: "OD",
    role: "Optometrist",
    focus: "Two decades of clinical expertise anchoring patient care in our Louisville office.",
    isSurgeon: false,
    intro: [
      "Dr. Kuc brings more than two decades of experience as a clinician and eye care thought leader to our Louisville clinic. He is a Fellow of the American Academy of Optometry and a Diplomate of the American Board of Optometry.",
      "An experienced surgical co-manager who has guided thousands of patients through the period around surgery, he also manages the conditions that matter before it: corneal surface disease, dry eye, glaucoma, diabetic eye care, and macular degeneration. He has published in peer-reviewed journals and lectures nationally on ocular disease management.",
    ],
    credentials: [
      {
        label: "Undergraduate",
        value: "B.S. in Molecular Biology, Grove City College",
        placeholder: false,
      },
      {
        label: "Optometry degree",
        value: "O.D., Pennsylvania College of Optometry, 2003",
        placeholder: false,
      },
      {
        label: "Certifications",
        value:
          "Fellow, American Academy of Optometry; Diplomate, American Board of Optometry",
        placeholder: false,
      },
      {
        label: "Leadership",
        value:
          "Former Trustee, Pennsylvania Optometric Association board, and past president of his local optometric society",
        placeholder: false,
      },
      {
        label: "Clinical focus",
        value:
          "Surgical co-management, dry eye and ocular surface disease, glaucoma, diabetic eye care, macular degeneration",
        placeholder: false,
      },
    ],
  },
];

export const surgeons = doctors.filter((d) => d.isSurgeon);
export const optometrists = doctors.filter((d) => !d.isSurgeon);

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
