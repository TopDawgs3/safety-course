import { lessons, totalLessonMinutes } from "./lessons";
import { quizzes, finalExam } from "./quizzes";

export const courseMeta = {
  school: "Victoria School of the Arts",
  team: "Victoria Phoenix",
  motto: "Inspiring Creativity",
  title: "VSA CKA · Food Safety & Sanitation",
  shortTitle: "VSA Phoenix · CKA Safety",
  pathway: "Cook Apprenticeship (CKA) / Food Safety",
  subtitle:
    "Victoria School of the Arts · Cook Apprenticeship (CKA) / Food Safety. Scroll an Instagram-style Phoenix feed covering Alberta Food Regulation AR 31/2006 s.31, CKA3900 workplace safety, kitchen sanitation & hygiene, and WHMIS basics for cooks.",
  disclaimer:
    "Educational Victoria School of the Arts completion resource for Cook Apprenticeship (CKA) food safety & sanitation learning. Not an official Alberta Health Services (AHS) food handler / sanitation and hygiene certificate. Not legal advice. Always confirm current requirements with AHS and your instructor.",
  estimatedMinutes: totalLessonMinutes + 45,
  modules: [
    {
      id: "A",
      title: "1 — Alta Reg 31/2006 s.31",
      blurb:
        "Food safety training rules: ≤5 vs ≥6 food handlers, care and control, on-site presence, exemptions, and AHS context under the Public Health Act.",
      lessonSlugs: lessons.filter((l) => l.module === "A").map((l) => l.slug),
      quizSlug: "module-s31",
    },
    {
      id: "B",
      title: "2 — CKA3900 Workplace Safety",
      blurb:
        "Cook apprenticeship workplace safety: slips/trips, knives, burns/steam, lifting, PPE habits, and reporting injuries in the kitchen.",
      lessonSlugs: lessons.filter((l) => l.module === "B").map((l) => l.slug),
      quizSlug: "module-workplace-safety",
    },
    {
      id: "C",
      title: "3 — Sanitation & Hygiene",
      blurb:
        "Handwashing, clean vs sanitize, cross-contamination, temperature danger zone 4–60°C, personal hygiene, and PPE for food work.",
      lessonSlugs: lessons.filter((l) => l.module === "C").map((l) => l.slug),
      quizSlug: "module-sanitation",
    },
    {
      id: "D",
      title: "4 — WHMIS for Cooks",
      blurb:
        "WHMIS basics that matter on the line: labels, SDS, pictograms, chemical storage away from food, and PPE for cleaners/sanitizers.",
      lessonSlugs: lessons.filter((l) => l.module === "D").map((l) => l.slug),
      quizSlug: "module-whmis",
    },
  ],
  extraQuizzes: [] as string[],
  finalExamSlug: finalExam.slug,
  officialLinks: [
    {
      label: "Food Regulation, Alta Reg 31/2006 (CanLII) — s.31 Food safety training",
      href: "https://www.canlii.org/en/ab/laws/regu/alta-reg-31-2006/latest/alta-reg-31-2006.html",
    },
    {
      label: "AHS — Food Safety Training Requirements in Alberta (PDF)",
      href: "https://www.albertahealthservices.ca/assets/wf/eph/wf-eh-food-safety-training-requirements-in-alberta.pdf",
    },
    {
      label: "Alberta — recognized food safety courses",
      href: "https://www.alberta.ca/food-safety-training",
    },
    {
      label: "WHMIS — overview (CCOHS)",
      href: "https://www.ccohs.ca/oshanswers/chemicals/whmis_ghs/",
    },
  ],
  stockPhotoCredits: [
    {
      file: "stock-kitchen.jpg",
      credit: "Unsplash — kitchen / cooking prep",
      url: "https://unsplash.com/photos/1556910103-1c02745aae4d",
    },
    {
      file: "stock-knives.jpg",
      credit: "Unsplash — knives / cutting board",
      url: "https://unsplash.com/photos/1593618998160-e34014e67546",
    },
    {
      file: "stock-thermometer.jpg",
      credit: "Unsplash — food thermometer",
      url: "https://unsplash.com/photos/1576045057995-568f588f82fb",
    },
    {
      file: "stock-gloves.jpg",
      credit: "Unsplash — disposable gloves",
      url: "https://unsplash.com/photos/1583947215259-38e31be8751f",
    },
    {
      file: "stock-dishes.jpg",
      credit: "Unsplash — dishwashing / clean-up",
      url: "https://unsplash.com/photos/1581578731548-c64695cc6952",
    },
    {
      file: "stock-handwash.jpg",
      credit: "Unsplash — handwashing",
      url: "https://unsplash.com/photos/1584515933487-779824d29309",
    },
  ],
  videoCredits: [
    {
      title: "Fight Germs. Wash Your Hands!",
      org: "CDC (external educational video)",
      embed: "https://www.youtube-nocookie.com/embed/eZw4Ga3jg3E",
    },
    {
      title: "Food Safe Tips — Cooking",
      org: "External educational video",
      embed: "https://www.youtube-nocookie.com/embed/GWspVYYra7E",
    },
    {
      title: "Don’t Get Sicky Wit It (food safety song)",
      org: "External engagement video — memory hooks, still study outcomes",
      embed: "https://www.youtube-nocookie.com/embed/ZbH_mSk2dNk",
    },
    {
      title: "Food Handling Training Overview",
      org: "External educational video — skim key segments",
      embed: "https://www.youtube-nocookie.com/embed/n7jWt7IF3QY",
    },
  ],
};

export { lessons, quizzes, finalExam };
