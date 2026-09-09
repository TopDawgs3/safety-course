import type { Quiz } from "@/lib/types";

export const quizzes: Quiz[] = [
  {
    slug: "module-s31",
    title: "Challenge — Alta Reg 31/2006 s.31",
    module: "A",
    description:
      "≤5 vs ≥6 food-handler rules, care and control, on-site presence, exemptions, and AHS context.",
    passPercent: 80,
    unlockAfterLesson: "s31-exemptions-ahs",
    questions: [
      {
        id: "a1",
        prompt:
          "Under AR 31/2006 s.31(1), when 5 or fewer food handlers are working on the premises, the operator must ensure:",
        choices: [
          "Nobody needs any food safety certificate",
          "At least one individual with care and control holds an approved food sanitation and hygiene certificate (or Minister-equivalent)",
          "Every server must hold a Red Seal",
          "Only the dishwasher needs WHMIS",
        ],
        correctIndex: 1,
        explanation:
          "s.31(1): with ≤5 food handlers, at least one person with care and control must hold the Minister-issued (or equivalent) certificate.",
      },
      {
        id: "a2",
        prompt:
          "When 6 or more food handlers are working on site (s.31(2)), the certified person must be:",
        choices: [
          "Anywhere in the city as long as they text",
          "A member of management or supervisory staff who holds the certificate and is present at the establishment",
          "Only the owner’s cousin off-site",
          "Optional if the music is loud",
        ],
        correctIndex: 1,
        explanation:
          "≥6 → certified management/supervisory staff must hold the ticket and be present.",
      },
      {
        id: "a3",
        prompt: "AHS guidance for five or fewer food handlers typically says the certified care-and-control person:",
        choices: [
          "Must sleep in the walk-in",
          "May be off-site",
          "Is illegal",
          "Must be a health inspector",
        ],
        correctIndex: 1,
        explanation:
          "AHS: with ≤5 on site, the certified person may be off-site — but certification for care and control is still required.",
      },
      {
        id: "a4",
        prompt: "For the ≥6 count, AHS materials emphasize that “food handlers” include:",
        choices: [
          "Only bakers in the back",
          "Serving staff as well as kitchen staff",
          "Only delivery drivers",
          "Only unpaid volunteers forever",
        ],
        correctIndex: 1,
        explanation:
          "AHS training-requirements guidance: six or more food handlers includes serving staff.",
      },
      {
        id: "a5",
        prompt: "s.31(3) says section 31 does not apply where:",
        choices: [
          "The restaurant is busy on Fridays",
          "Only low-risk unpackaged food is offered, or all food is received and sold only in the same pre-packaged form",
          "Anyone has a Phoenix cert from this school feed",
          "The owner prefers not to train staff",
        ],
        correctIndex: 1,
        explanation:
          "Statutory exemptions: low-risk unpackaged only, or pre-packaged-in / pre-packaged-out only.",
      },
      {
        id: "a6",
        prompt: "Alberta Food Regulation AR 31/2006 is made under the:",
        choices: [
          "Traffic Safety Act",
          "Public Health Act",
          "Copyright Act",
          "Gaming Act",
        ],
        correctIndex: 1,
        explanation: "Food Regulation sits under the Public Health Act.",
      },
      {
        id: "a7",
        prompt: "AHS strongly recommends food safety training for:",
        choices: [
          "Only the owner’s accountant",
          "Everyone who handles food — not just the minimum certified person",
          "Nobody if the menu is short",
          "Only pastry chefs",
        ],
        correctIndex: 1,
        explanation:
          "AHS recommends training for all food handlers beyond the legal minimum.",
      },
      {
        id: "a8",
        prompt: "This VSA Phoenix course certificate is:",
        choices: [
          "The Minister-issued AHS food sanitation and hygiene certificate",
          "Educational school completion only — not an official AHS food handler certificate",
          "A business operating permit",
          "A substitute for all workplace SOPs",
        ],
        correctIndex: 1,
        explanation:
          "School educational completion ≠ official AHS / Minister certificate.",
      },
    ],
  },
  {
    slug: "module-workplace-safety",
    title: "Challenge — CKA3900 Workplace Safety",
    module: "B",
    description:
      "Slips/trips, knives, burns/steam, lifting, PPE, and injury/blood response for cook apprentices.",
    passPercent: 80,
    unlockAfterLesson: "cka3900-workplace-kitchen-safety",
    questions: [
      {
        id: "b1",
        prompt: "If a knife falls off the counter, you should:",
        choices: [
          "Try to catch it mid-air",
          "Let it fall, then pick it up safely by the handle",
          "Kick it toward a coworker",
          "Leave it point-up for the next shift",
        ],
        correctIndex: 1,
        explanation: "Never catch a falling knife.",
      },
      {
        id: "b2",
        prompt: "A major slip/trip prevention habit is:",
        choices: [
          "Ignoring spills until closing",
          "Wiping spills promptly, clearing aisles, wearing non-slip footwear",
          "Running during rush with arms full",
          "Leaving mats rolled up forever",
        ],
        correctIndex: 1,
        explanation: "Immediate spill control + clear walkways + non-slip footwear.",
      },
      {
        id: "b3",
        prompt: "To help prevent burns from a stock pot lid:",
        choices: [
          "Open the lid toward your face for aroma checks",
          "Open lids away from your face and respect steam",
          "Use bare hands on metal handles",
          "Skip warning teammates that pans are hot",
        ],
        correctIndex: 1,
        explanation: "Steam and hot lids — open away from face; use proper hand protection.",
      },
      {
        id: "b4",
        prompt: "Safe lifting of heavy stock pots includes:",
        choices: [
          "Twist with a full pot held far from your body",
          "Lift with legs, keep loads close, ask for help when needed",
          "Always lift alone to prove toughness",
          "Drag pots across wet floors for speed",
        ],
        correctIndex: 1,
        explanation: "Body mechanics + teamwork beat hero lifts.",
      },
      {
        id: "b5",
        prompt: "Blood on a cutting board during prep means you should:",
        choices: [
          "Wipe with a dry towel and keep cooking",
          "Stop food work, report, discard affected food, clean & sanitize, follow protocol",
          "Taste the food to check quality",
          "Cover it with flour",
        ],
        correctIndex: 1,
        explanation: "Protect people and food; discard contaminated product; sanitize; follow workplace/school protocol.",
      },
      {
        id: "b6",
        prompt: "Carrying a chef’s knife between stations, best practice is:",
        choices: [
          "Wave it overhead to clear a path",
          "Point-down at your side, blade controlled, announce “behind / knife” as needed",
          "Hold it by the tip",
          "Hide it in your apron pocket tip-up",
        ],
        correctIndex: 1,
        explanation: "Controlled carry — point down, awareness of people around you.",
      },
    ],
  },
  {
    slug: "module-sanitation",
    title: "Challenge — Sanitation & Hygiene",
    module: "C",
    description:
      "Handwashing, clean vs sanitize, cross-contamination, danger zone 4–60°C, gloves/PPE hygiene.",
    passPercent: 80,
    unlockAfterLesson: "clean-sanitize-cross-danger-zone",
    questions: [
      {
        id: "c1",
        prompt: "When should you wash your hands with soap and water on the line?",
        choices: [
          "Only at the end of the shift",
          "Before starting, after washroom/raw foods/garbage/face-phone, and whenever hands may be dirty",
          "Never — sanitizer replaces washing always",
          "Only if the inspector is watching",
        ],
        correctIndex: 1,
        explanation:
          "Wash at key contamination moments. Sanitizer isn’t a full replacement when soil is present.",
      },
      {
        id: "c2",
        prompt: "Cleaning vs sanitizing — which is correct?",
        choices: [
          "Sanitizing removes grease; cleaning kills pathogens",
          "Cleaning removes soil; sanitizing reduces pathogens on a cleaned surface",
          "They are identical steps",
          "Only rinsing with cold water is required",
        ],
        correctIndex: 1,
        explanation: "Clean first, then sanitize at correct concentration/contact time.",
      },
      {
        id: "c3",
        prompt: "The common temperature danger zone taught for food safety is:",
        choices: [
          "−18°C to 0°C only",
          "4°C to 60°C",
          "100°C to 200°C",
          "Room temperature is always safe forever",
        ],
        correctIndex: 1,
        explanation: "Danger zone 4–60°C — limit time in that range; verify with a thermometer.",
      },
      {
        id: "c4",
        prompt: "Cross-contamination control includes:",
        choices: [
          "Same board for raw chicken and ready-to-eat garnish without washing",
          "Separated boards/utensils and handwashing between tasks",
          "Storing chemicals above open flour",
          "Using the floor as overflow storage",
        ],
        correctIndex: 1,
        explanation: "Separate raw and ready-to-eat; wash between tasks.",
      },
      {
        id: "c5",
        prompt: "Gloves should be:",
        choices: [
          "Worn all day without changing",
          "Changed between tasks, with handwashing when changing",
          "Used instead of ever washing hands",
          "Shared among the brigade",
        ],
        correctIndex: 1,
        explanation: "Gloves aren’t magic — change between tasks and wash hands.",
      },
      {
        id: "c6",
        prompt: "Personal hygiene expectations include:",
        choices: [
          "Hair restrained, clean apron/uniform, covered wounds, stay off if vomiting/diarrhea",
          "Long loose hair over open pots for “flavour”",
          "Working while sick as long as you wear cologne",
          "Jewellery dangling into mixing bowls",
        ],
        correctIndex: 0,
        explanation: "Hygiene habits protect guests and coworkers.",
      },
      {
        id: "c7",
        prompt: "Cold holding and hot holding targets commonly taught with the danger zone are:",
        choices: [
          "Cold ≤4°C and hot ≥60°C (follow workplace SOPs)",
          "Cold at 25°C and hot at 25°C",
          "Everything at room temperature",
          "Freezers at 10°C",
        ],
        correctIndex: 0,
        explanation: "Keep cold foods cold and hot foods hot — out of 4–60°C.",
      },
      {
        id: "c8",
        prompt: "Hand sanitizer alone is enough when hands are visibly soiled:",
        choices: [
          "True — sanitizer replaces washing",
          "False — wash with soap and water when soil is present",
          "True only on Fridays",
          "True for raw chicken only",
        ],
        correctIndex: 1,
        explanation: "Visibly soiled hands need soap-and-water washing.",
      },
    ],
  },
  {
    slug: "module-whmis",
    title: "Challenge — WHMIS for Cooks",
    module: "D",
    description:
      "Labels, SDS, pictograms, chemical storage away from food, and PPE for kitchen chemicals.",
    passPercent: 80,
    unlockAfterLesson: "whmis-cooks-basics",
    questions: [
      {
        id: "d1",
        prompt: "The three key WHMIS elements are:",
        choices: [
          "Menus, tips, and playlists",
          "Labels, Safety Data Sheets (SDS), and worker education/training",
          "Ovens, fridges, and dishwashers",
          "Colour, aroma, and plating",
        ],
        correctIndex: 1,
        explanation: "Labels · SDS · Training.",
      },
      {
        id: "d2",
        prompt: "If you don’t recognize a hazard symbol on a cleaner, you should:",
        choices: [
          "Smell it deeply to identify it",
          "Stop and ask / check SDS before using it",
          "Mix it with bleach to be safe",
          "Pour it on the floor as a test",
        ],
        correctIndex: 1,
        explanation: "Never improvise with unknown chemicals.",
      },
      {
        id: "d3",
        prompt: "An SDS primarily helps you:",
        choices: [
          "Calculate food cost percentages",
          "Understand hazards, safe handling, first aid, storage, and PPE for a product",
          "Design restaurant logos",
          "Skip supervisor instructions",
        ],
        correctIndex: 1,
        explanation: "SDS is the detailed hazard information sheet.",
      },
      {
        id: "d4",
        prompt: "Chemical storage in a kitchen should:",
        choices: [
          "Be above open food for easy reach",
          "Use labelled containers away from food, capped, per SDS/supervisor rules",
          "Be poured into water bottles for convenience",
          "Ignore labels if the liquid is clear",
        ],
        correctIndex: 1,
        explanation: "Labelled, separated from food, proper containers.",
      },
      {
        id: "d5",
        prompt: "You find an unlabelled spray bottle by the sink. Best move:",
        choices: [
          "Use it anyway — it’s probably sanitizer",
          "Don’t use it — report and follow WHMIS/workplace procedure",
          "Spray it on toast as a glaze",
          "Add it to the soup for shine",
        ],
        correctIndex: 1,
        explanation: "Unlabelled chemicals are a hard no.",
      },
      {
        id: "d6",
        prompt: "Applying WHMIS near food work includes:",
        choices: [
          "Skipping PPE because cooking is “natural”",
          "Using PPE as directed, protecting food/environment, following label/SDS steps",
          "Spraying oven cleaner over uncovered salads",
          "Storing degreaser in the fridge beside milk",
        ],
        correctIndex: 1,
        explanation: "PPE + protect food + follow SDS/labels.",
      },
    ],
  },
];

export const finalExam: Quiz = {
  slug: "final-exam",
  title: "Final Reels Challenge — CKA Food Safety Boss Fight",
  module: "final",
  description:
    "Stories/Reels-style final covering AR 31/2006 s.31, CKA3900 workplace safety, sanitation/hygiene (including 4–60°C), and WHMIS for cooks. Pass mark: 80%.",
  passPercent: 80,
  questions: [
    {
      id: "f1",
      prompt: "With 6+ food handlers on site, s.31(2) requires a certified manager/supervisor to be:",
      choices: [
        "Off-site forever",
        "Present at the establishment",
        "Optional",
        "Only on Mondays",
      ],
      correctIndex: 1,
      explanation: "≥6 → certified supervisory/management person present.",
    },
    {
      id: "f2",
      prompt: "With 5 or fewer food handlers, AHS guidance says the certified care-and-control person:",
      choices: [
        "May be off-site",
        "Must never exist",
        "Must be an inspector",
        "Must hold a Red Seal only",
      ],
      correctIndex: 0,
      explanation: "≤5 → certified care-and-control person required; may be off-site.",
    },
    {
      id: "f3",
      prompt: "s.31(3) pre-packaged exemption applies when food is:",
      choices: [
        "Cooked to order then boxed",
        "Received pre-packaged and sold only in that same form",
        "Opened and repacked into bulk bins",
        "Always exempt no matter what you do",
      ],
      correctIndex: 1,
      explanation: "Pre-packaged in and out, same form — narrow exemption.",
    },
    {
      id: "f4",
      prompt: "AR 31/2006 is under the:",
      choices: ["Public Health Act", "Criminal Code", "Education Act", "Wildlife Act"],
      correctIndex: 0,
      explanation: "Food Regulation under the Public Health Act.",
    },
    {
      id: "f5",
      prompt: "Danger zone commonly taught as:",
      choices: ["4–60°C", "0–2°C", "80–100°C only", "Any temperature is fine"],
      correctIndex: 0,
      explanation: "4°C to 60°C danger zone.",
    },
    {
      id: "f6",
      prompt: "Clean then sanitize means:",
      choices: [
        "Apply sanitizer to a greasy board without washing",
        "Remove soil first, then apply sanitizer correctly",
        "Wipe once with an apron",
        "Rinse with hot water only forever",
      ],
      correctIndex: 1,
      explanation: "Clean first, then sanitize.",
    },
    {
      id: "f7",
      prompt: "Never catch a falling knife — instead:",
      choices: [
        "Let it fall, then pick up by the handle",
        "Grab the blade",
        "Kick it",
        "Ignore it forever",
      ],
      correctIndex: 0,
      explanation: "Workplace knife safety.",
    },
    {
      id: "f8",
      prompt: "WHMIS’s three key elements are labels, SDS, and:",
      choices: [
        "Worker education/training",
        "Restaurant Yelp reviews",
        "Only fire extinguishers",
        "Recipe yields",
      ],
      correctIndex: 0,
      explanation: "Training is the third pillar.",
    },
    {
      id: "f9",
      prompt: "Chemicals in the kitchen should be stored:",
      choices: [
        "Above open flour bins",
        "In labelled containers away from food, following SDS/supervisor rules",
        "In unmarked water bottles in backpacks",
        "Mixed together to save shelf space",
      ],
      correctIndex: 1,
      explanation: "WHMIS storage discipline near food.",
    },
    {
      id: "f10",
      prompt: "Cross-contamination control includes:",
      choices: [
        "Same board for raw chicken and garnish without washing",
        "Separated boards/utensils and handwashing between tasks",
        "Chemicals above open food",
        "Floor as prep space",
      ],
      correctIndex: 1,
      explanation: "Separate raw and ready-to-eat.",
    },
    {
      id: "f11",
      prompt: "Gloves should be changed:",
      choices: [
        "Between tasks, with handwashing when changing",
        "Never, all shift",
        "Only yearly",
        "By sharing one pair",
      ],
      correctIndex: 0,
      explanation: "Glove discipline + handwashing.",
    },
    {
      id: "f12",
      prompt: "Opening a pot lid the safe way means:",
      choices: [
        "Face over the steam",
        "Lid away from face; respect heat and steam",
        "No mitts if you’re brave",
        "Ask someone else to burn their hands",
      ],
      correctIndex: 1,
      explanation: "Burns prevention.",
    },
    {
      id: "f13",
      prompt: "Blood contamination of food/surfaces means:",
      choices: [
        "Stop, report, discard affected food, clean & sanitize, follow protocol",
        "Wipe and plate it",
        "Ignore if guests won’t see",
        "Cover with sauce",
      ],
      correctIndex: 0,
      explanation: "Protect people and food; follow exposure procedures.",
    },
    {
      id: "f14",
      prompt: "Hand sanitizer alone when hands are visibly soiled:",
      choices: [
        "Is enough",
        "Is not enough — wash with soap and water",
        "Is required by s.31",
        "Replaces all PPE",
      ],
      correctIndex: 1,
      explanation: "Soil needs soap-and-water washing.",
    },
    {
      id: "f15",
      prompt: "This course’s printable certificate is:",
      choices: [
        "An official AHS food handler certificate",
        "Educational VSA / Victoria Phoenix CKA food safety completion — not AHS certification",
        "A Minister-issued sanitation certificate",
        "A business operating permit",
      ],
      correctIndex: 1,
      explanation: "Educational completion only — not AHS.",
    },
    {
      id: "f16",
      prompt: "“Care and control” in s.31(1) refers to:",
      choices: [
        "Someone who has care and control of the commercial food establishment (must be certified when ≤5 rule applies)",
        "Only the dishwasher",
        "Only delivery apps",
        "Random customers",
      ],
      correctIndex: 0,
      explanation: "s.31(1) keys on an individual with care and control holding the certificate.",
    },
    {
      id: "f17",
      prompt: "PPE when handling cleaning chemicals is:",
      choices: [
        "Optional cosplay",
        "Part of applying WHMIS when the label/SDS/supervisor requires it",
        "A substitute for reading labels",
        "Only for pastry competitions",
      ],
      correctIndex: 1,
      explanation: "Follow label/SDS/supervisor for PPE.",
    },
    {
      id: "f18",
      prompt: "This CKA feed’s core curriculum areas are:",
      choices: [
        "AR 31/2006 s.31, CKA3900 workplace safety, sanitation/hygiene, and WHMIS for cooks",
        "Only Canada’s Food Guide and recipe language",
        "Only pastry competitions",
        "Driver’s education",
      ],
      correctIndex: 0,
      explanation: "CKA food safety & sanitation map — not FOD1010 Food Guide/recipes.",
    },
  ],
};

export function getQuiz(slug: string): Quiz | undefined {
  if (slug === finalExam.slug) return finalExam;
  return quizzes.find((q) => q.slug === slug);
}

export const allAssessments = [...quizzes, finalExam];
