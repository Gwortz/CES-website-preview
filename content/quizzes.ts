export type QuizOption = {
  value: string;
  label: string;
  sub?: string;
  score?: number;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  help?: string;
  options: QuizOption[];
};

export type QuizResultLink = { label: string; href: string };

export type QuizResult = {
  id: string;
  badge: string;
  title: string;
  body: string[];
  links: QuizResultLink[];
};

export type Quiz = {
  slug: string;
  title: string;
  minutes: string;
  intro: string;
  disclaimer: string;
  questions: QuizQuestion[];
  compute: (answers: Record<string, string>) => string;
  results: Record<string, QuizResult>;
};

/* ------------------------------------------------------------------ */
/* Cataract Self-Test                                                  */
/* ------------------------------------------------------------------ */

export const cataractSelfTest: Quiz = {
  slug: "cataract-self-test",
  title: "Cataract Self-Test",
  minutes: "2 minutes",
  intro:
    "Seven quick questions about how you see. At the end you get an honest read on whether your symptoms sound like cataracts, and what to do next.",
  disclaimer:
    "This self-test is educational. It is not a diagnosis. Only a dilated eye exam can confirm whether you have cataracts.",
  questions: [
    {
      id: "age",
      prompt: "How old are you?",
      options: [
        { value: "under50", label: "Under 50", score: 0 },
        { value: "50s", label: "50 to 59", score: 1 },
        { value: "60s", label: "60 to 69", score: 2 },
        { value: "70plus", label: "70 or older", score: 3 },
      ],
    },
    {
      id: "night",
      prompt: "How is night driving?",
      help: "Think about oncoming headlights and streetlights.",
      options: [
        { value: "fine", label: "Comfortable, like always", score: 0 },
        {
          value: "some",
          label: "Some glare or halos around lights",
          score: 2,
        },
        {
          value: "avoid",
          label: "Hard enough that I avoid driving at night",
          score: 3,
        },
      ],
    },
    {
      id: "cloudy",
      prompt: "Does your vision seem cloudy, filmy, or dim, even with glasses?",
      options: [
        { value: "no", label: "No", score: 0 },
        { value: "sometimes", label: "Sometimes", score: 2 },
        { value: "often", label: "Most of the time", score: 3 },
      ],
    },
    {
      id: "reading",
      prompt: "How is reading and close work?",
      options: [
        { value: "fine", label: "Fine with my usual glasses", score: 0 },
        {
          value: "light",
          label: "I need brighter light than I used to",
          score: 1,
        },
        {
          value: "hard",
          label: "Difficult even with good light and glasses",
          score: 2,
        },
      ],
    },
    {
      id: "rx",
      prompt:
        "Has your glasses prescription been changing without really helping?",
      options: [
        { value: "no", label: "No, my prescription is stable", score: 0 },
        { value: "some", label: "It has changed once or twice", score: 1 },
        {
          value: "yes",
          label: "Yes, new glasses never quite fix it",
          score: 2,
        },
      ],
    },
    {
      id: "colors",
      prompt: "Do colors seem faded or yellowed lately?",
      options: [
        { value: "no", label: "No, colors look normal", score: 0 },
        { value: "maybe", label: "Maybe a little", score: 1 },
        { value: "yes", label: "Yes, noticeably", score: 2 },
      ],
    },
    {
      id: "prior",
      prompt: "Have you had cataract surgery before?",
      options: [
        { value: "no", label: "No", score: 0 },
        { value: "one", label: "Yes, in one eye", score: 0 },
        { value: "both", label: "Yes, in both eyes", score: 0 },
      ],
    },
  ],
  compute(answers) {
    if (answers.prior === "both") return "prior";
    let score = 0;
    for (const q of this.questions) {
      const opt = q.options.find((o) => o.value === answers[q.id]);
      score += opt?.score ?? 0;
    }
    if (score >= 8) return "high";
    if (score >= 4) return "moderate";
    return "low";
  },
  results: {
    high: {
      id: "high",
      badge: "Your result",
      title: "Your symptoms sound a lot like cataracts.",
      body: [
        "Glare at night, cloudy vision, and glasses that never quite help are the classic pattern. The good news: cataract surgery is one of the most common and most successful procedures in medicine, and modern lens options can often give you better vision than you had before the cataract.",
        "The next step is a dilated exam so a doctor can actually look. If it is a cataract, we will walk you through your lens options with no pressure.",
      ],
      links: [
        { label: "How cataract surgery works", href: "/cataracts" },
        { label: "Explore lens options", href: "/cataracts/lens-options" },
      ],
    },
    moderate: {
      id: "moderate",
      badge: "Your result",
      title: "Some of your symptoms could be early cataract changes.",
      body: [
        "You are describing changes worth checking, but nothing about this pattern says surgery is urgent. Early cataracts can often be watched for years. An exam gives you a baseline and an honest timeline.",
        "If it turns out to be something simpler, like dry eye or an outdated prescription, you will know that too.",
      ],
      links: [
        { label: "Learn about cataracts", href: "/cataracts" },
        { label: "Questions we hear often", href: "/patients/faqs" },
      ],
    },
    low: {
      id: "low",
      badge: "Your result",
      title: "Your answers do not point strongly to cataracts.",
      body: [
        "That is good news. If your vision still bothers you, something else may be going on, like dry eye, an old prescription, or simple eye strain, and an exam can sort that out.",
        "If you are under 60 and mainly tired of glasses or contacts, vision correction might be the more useful conversation.",
      ],
      links: [
        { label: "Take the Vision Correction Quiz", href: "/vision-quiz" },
        { label: "Explore vision correction", href: "/vision-correction" },
      ],
    },
    prior: {
      id: "prior",
      badge: "Your result",
      title: "New symptoms after cataract surgery deserve a look.",
      body: [
        "You cannot get a cataract back after surgery, but a common condition called posterior capsule haze can cloud vision months or years later. It is treatable in minutes with a YAG laser, right in the office.",
        "Let us take a look and tell you exactly what is going on.",
      ],
      links: [
        { label: "About YAG capsulotomy", href: "/cataracts#yag" },
        { label: "Contact us", href: "/book" },
      ],
    },
  },
};

/* ------------------------------------------------------------------ */
/* Vision Correction Quiz                                              */
/* ------------------------------------------------------------------ */

export const visionQuiz: Quiz = {
  slug: "vision-quiz",
  title: "Vision Correction Quiz",
  minutes: "60 seconds",
  intro:
    "Four quick questions. We will point you to the procedure path that usually fits people like you, and tell you what to explore next.",
  disclaimer:
    "This quiz is educational, not a diagnosis or a candidacy decision. Real candidacy comes from measurements at a consultation.",
  questions: [
    {
      id: "situation",
      prompt: "Which sounds most like your vision today?",
      options: [
        {
          value: "distance",
          label: "I wear glasses or contacts to see far away",
          sub: "Nearsighted, farsighted, or astigmatism",
        },
        {
          value: "readers",
          label: "I mostly just need reading glasses",
          sub: "Distance is fine, close-up is the struggle",
        },
        {
          value: "both",
          label: "I need help at distance and up close",
          sub: "Bifocals, progressives, or juggling pairs",
        },
        {
          value: "cloudy",
          label: "My vision is cloudy or dim even with glasses",
          sub: "Glare at night, faded colors",
        },
      ],
    },
    {
      id: "age",
      prompt: "How old are you?",
      options: [
        { value: "18-44", label: "18 to 44" },
        { value: "45-59", label: "45 to 59" },
        { value: "60plus", label: "60 or older" },
      ],
    },
    {
      id: "motivation",
      prompt: "What would better vision change most for you?",
      options: [
        { value: "active", label: "Sports, workouts, and the outdoors" },
        { value: "work", label: "Long days on screens" },
        { value: "hassle", label: "Freedom from the daily contacts routine" },
        { value: "confidence", label: "Confidence driving, especially at night" },
      ],
    },
    {
      id: "timeline",
      prompt: "When would you want to move forward?",
      options: [
        { value: "soon", label: "As soon as it makes sense" },
        { value: "months", label: "In the next 3 to 6 months" },
        { value: "research", label: "Just researching for now" },
      ],
    },
  ],
  compute(answers) {
    if (answers.situation === "cloudy") return "cataract";
    if (answers.age === "18-44") return "laser";
    if (answers.age === "45-59") return "rle";
    return "sixty";
  },
  results: {
    laser: {
      id: "laser",
      badge: "Your likely path",
      title: "Laser vision correction: LASIK, PRK, or EVO ICL.",
      body: [
        "At your age, the lens inside your eye still focuses well on its own. Correcting the surface of the eye, or adding a lens that works with yours, usually makes the most sense.",
        "Most people your age are LASIK candidates. If your corneas are thin, your eyes run dry, or your prescription is very strong, PRK or the EVO ICL often fits better. Your measurements will tell us, and consultations are free.",
      ],
      links: [
        { label: "Explore LASIK", href: "/vision-correction/lasik" },
        { label: "Your path at 18 to 45", href: "/start-here/18-45" },
      ],
    },
    rle: {
      id: "rle",
      badge: "Your likely path",
      title: "Refractive Lens Exchange deserves a serious look.",
      body: [
        "In your 40s and 50s, the natural lens starts stiffening. That is why reading glasses crept in. LASIK can sharpen distance, but it cannot stop that process.",
        "Refractive Lens Exchange replaces the aging lens with an advanced one that can restore range, and you will never develop a cataract. For many people this is the one-and-done option. We will compare it honestly against LASIK for your eyes.",
      ],
      links: [
        {
          label: "How Refractive Lens Exchange works",
          href: "/cataracts/refractive-lens-exchange",
        },
        { label: "Your path at 45 to 60", href: "/start-here/45-60" },
      ],
    },
    sixty: {
      id: "sixty",
      badge: "Your likely path",
      title: "A lens-based plan, and it is worth checking for cataracts.",
      body: [
        "At 60 and beyond, the natural lens is usually the limiting factor, whether or not a cataract has formed yet. Replacing it with a modern lens can correct distance, astigmatism, and often reading range in one procedure.",
        "If a cataract is present, insurance typically helps with the surgery itself, and you choose the lens technology. An exam tells us which situation you are in.",
      ],
      links: [
        { label: "Your path at 60 and up", href: "/start-here/60-plus" },
        { label: "Explore lens options", href: "/cataracts/lens-options" },
      ],
    },
    cataract: {
      id: "cataract",
      badge: "Your likely path",
      title: "Cloudy vision with glasses points toward a cataract evaluation.",
      body: [
        "When new glasses cannot fix cloudiness, glare, or faded colors, the cause is usually inside the eye, and the most common cause with age is a cataract.",
        "Take the two-minute cataract self-test, or skip straight to booking an exam. Either way, you will get straight answers about what is going on and every option available to you.",
      ],
      links: [
        { label: "Take the Cataract Self-Test", href: "/cataract-self-test" },
        { label: "How cataract surgery works", href: "/cataracts" },
      ],
    },
  },
};
