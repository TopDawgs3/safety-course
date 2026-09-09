import type { Lesson } from "@/lib/types";

export const lessons: Lesson[] = [
  {
    slug: "s31-thresholds-care-control",
    module: "A",
    moduleTitle: "1 — Alta Reg 31/2006 s.31",
    number: 1,
    title: "s.31 Thresholds & Care and Control",
    durationMinutes: 12,
    summary:
      "Alberta Food Regulation AR 31/2006 s.31: when ≤5 vs ≥6 food handlers are on site, who must hold the certificate, and what “care and control” means.",
    sections: [
      {
        heading: "Where this rule lives",
        paragraphs: [
          "Alberta’s Food Regulation (Alta Reg 31/2006) is made under the Public Health Act. Section 31 sets the food safety training / certification floor for commercial food establishments — not a “nice to have,” a legal operating requirement.",
          "This school course teaches the rule accurately so cook apprentices understand what kitchens must meet. Completing this feed is educational only — it is not the Minister-issued / AHS-recognized food sanitation and hygiene certificate.",
        ],
        callouts: [
          {
            type: "rule",
            title: "Public Health Act context",
            body: "AR 31/2006 sits under the Public Health Act. Inspectors (AHS Environmental Public Health) enforce food establishment requirements in Alberta.",
          },
        ],
      },
      {
        heading: "≤5 food handlers (s.31(1))",
        paragraphs: [
          "When there are 5 or fewer food handlers working on the premises, the operator must ensure that at least one individual who has care and control of the commercial food establishment holds a certificate issued by the Minister (successful completion of an approved food sanitation and hygiene training program) — or a document the Minister considers equivalent.",
          "In practice (AHS guidance): with five or fewer food handlers on site, the certified person in care and control may be off-site. The certificate still has to exist for someone with care and control — you cannot skip certification entirely just because the kitchen is small.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Memory hook",
            body: "≤5 → certified care-and-control person required; they may be off-site. Still need the ticket.",
          },
        ],
      },
      {
        heading: "≥6 food handlers (s.31(2))",
        paragraphs: [
          "When there are 6 or more food handlers working on the premises, at least one member of management or supervisory staff must hold that same certificate (or equivalent) — and that certified individual must be present at the establishment at the time.",
          "AHS materials emphasize that “food handlers” for this count includes serving staff. Work camps are called out as needing certified staff on site at all times under the training-requirements guidance.",
        ],
        callouts: [
          {
            type: "rule",
            title: "≥6 = present",
            body: "Six or more on site → certified manager/supervisor must be physically present while operating. Off-site ticket is not enough.",
          },
          {
            type: "scenario",
            title: "Scenario",
            body: "Friday rush: 7 cooks/servers on the floor, certified manager stuck in traffic. Under s.31(2) the ≥6 rule expects a certified management/supervisory person present — plan coverage before the rush.",
          },
        ],
      },
    ],
  },
  {
    slug: "s31-exemptions-ahs",
    module: "A",
    moduleTitle: "1 — Alta Reg 31/2006 s.31",
    number: 2,
    title: "s.31 Exemptions & AHS Context",
    durationMinutes: 10,
    summary:
      "s.31(3) exemptions (low-risk unpackaged; pre-packaged only) plus AHS recommendations and common facility notes for apprentices.",
    sections: [
      {
        heading: "Statutory exemptions (s.31(3))",
        paragraphs: [
          "Section 31 does not apply to a commercial food establishment where (a) only unpackaged food that is low-risk is made available to the public, or (b) all food received for public consumption arrives pre-packaged and is sold only in that same pre-packaged form.",
          "If you open packages, prepare, cook, reheat, or otherwise handle food beyond selling sealed packages as received, you are generally outside the “pre-packaged only” exemption path — confirm with your instructor / AHS for edge cases.",
        ],
        callouts: [
          {
            type: "rule",
            title: "Exemption ≠ “no training forever”",
            body: "Exemptions are narrow. AHS also notes inspectors may require additional training based on inspection observations even where certification is not normally mandated.",
          },
        ],
      },
      {
        heading: "AHS practical context",
        paragraphs: [
          "Alberta Health Services strongly recommends food safety training for everyone who handles food — not only the minimum certified person required by s.31.",
          "AHS training-requirements guidance lists facility types that typically require certification (restaurants, caterers, bakeries, cafeterias, many convenience stores that prep food, etc.) and examples that usually do not (e.g., bed and breakfasts; facilities handling only pre-packaged foods; farmers’ market vendors; many temporary special-event booths; some social care settings under stated client thresholds). Always use current AHS documents — guidance can be updated.",
          "Approved courses appear on the Government of Alberta recognized food safety courses list. This VSA Phoenix feed is school learning support, not that official certificate.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Apprentice takeaway",
            body: "Know the ≤5 / ≥6 split, care and control, on-site rule, and exemptions — then get an AHS-recognized ticket when your workplace requires it.",
          },
        ],
      },
    ],
  },
  {
    slug: "cka3900-workplace-kitchen-safety",
    module: "B",
    moduleTitle: "2 — CKA3900 Workplace Safety",
    number: 3,
    title: "CKA3900 Workplace & Kitchen Physical Safety",
    durationMinutes: 12,
    summary:
      "Cook apprenticeship (CKA3900-aligned) workplace safety: slips/trips, knives, burns/steam, lifting, PPE, and injury response on the line.",
    sections: [
      {
        heading: "Kitchen physical hazards",
        paragraphs: [
          "Cook apprentices work around heat, steam, sharp tools, wet floors, heavy stock pots, and rush pacing. CKA3900-style workplace safety starts with controlling those hazards before speed.",
          "Slips/trips: wipe spills immediately, use wet-floor signs, keep aisles clear, wear non-slip footwear, coil cords properly. Burns: dry towels/mitts, mark hot pans, open lids away from your face, respect steam and fryer oil. Cuts: sharp knives on stable boards, cut away from yourself, never catch a falling knife, carry knives point-down at your side, store safely.",
          "Lifting: lift with legs, keep loads close, ask for help with heavy pots or deliveries. Never sacrifice body mechanics for “I’ll just hustle.”",
        ],
        callouts: [
          {
            type: "rule",
            title: "Falling knife",
            body: "Let it fall. Step back. Pick it up by the handle. Catching knives is how ER visits start.",
          },
        ],
      },
      {
        heading: "PPE, reporting, blood on the board",
        paragraphs: [
          "Use PPE that fits the task: cut-resistant gloves when required, heat protection for ovens/fryers, eye protection for chemical pours, hair restraints, and clean kitchen whites/aprons per shop rules.",
          "Report injuries to your supervisor/instructor. Use first aid. For cuts that may contaminate food: stop food work, protect the wound (bandage + glove as directed), discard contaminated food, clean and sanitize surfaces, and follow school/workplace exposure procedures. Treat blood as potentially infectious.",
        ],
        callouts: [
          {
            type: "scenario",
            title: "Scenario",
            body: "Oil sheen on the tile by the fryer during rush. Wipe/sign immediately — a “I’ll get it after tickets” spill is a slip waiting for a coworker.",
          },
        ],
      },
    ],
  },
  {
    slug: "handwash-hygiene-ppe",
    module: "C",
    moduleTitle: "3 — Sanitation & Hygiene",
    number: 4,
    title: "Handwashing, Personal Hygiene & Food PPE",
    durationMinutes: 10,
    summary:
      "Personal hygiene, proper handwashing, glove discipline, and when PPE protects food vs when it gives false confidence.",
    sections: [
      {
        heading: "Personal hygiene",
        paragraphs: [
          "Show up food-ready: clean uniform/apron, hair restrained, short clean nails, jewellery limited per workplace/school rules, wounds covered with waterproof dressings and gloves when needed.",
          "Stay off the line (and tell your supervisor) if you have vomiting, diarrhea, fever, or jaundice. Don’t taste with the same utensil you stir with. Wash after touching face, phones, money, garbage, or raw foods.",
        ],
        callouts: [
          {
            type: "rule",
            title: "Sick = stay off",
            body: "Working sick can spread pathogens to guests and the brigade. Hygiene is a food-safety control.",
          },
        ],
      },
      {
        heading: "Handwashing and gloves",
        paragraphs: [
          "Wash with soap and warm water before starting, after washroom use, after raw foods, after garbage, after face/phone, and whenever hands may be dirty. Scrub backs of hands, between fingers, and under nails (~20 seconds), rinse, and dry with a clean towel or air dryer. Prefer the dedicated hand sink.",
          "Hand sanitizer is a backup when hands look clean — not a replacement when soil is present. Change gloves between tasks and wash hands when you change them. Contaminated gloves spread germs like bare hands.",
        ],
        callouts: [
          {
            type: "tip",
            title: "Line tip",
            body: "Crack eggs → wash (or change gloves + wash) before touching ready-to-eat garnish or bread.",
          },
        ],
      },
    ],
  },
  {
    slug: "clean-sanitize-cross-danger-zone",
    module: "C",
    moduleTitle: "3 — Sanitation & Hygiene",
    number: 5,
    title: "Clean vs Sanitize, Cross-Contam & Danger Zone",
    durationMinutes: 12,
    summary:
      "Cleaning vs sanitizing sequence, cross-contamination controls, and the 4–60°C temperature danger zone for cook apprentices.",
    sections: [
      {
        heading: "Clean ≠ sanitize",
        paragraphs: [
          "Cleaning removes dirt and food soil. Sanitizing reduces pathogens on an already clean surface. Sequence: wash with detergent → rinse as required → sanitize at the correct concentration and contact time → air-dry when possible.",
          "Use approved sanitizer, test strips when provided, and clean wiping cloths stored properly. Never mix bleach with ammonia or mystery chemicals.",
        ],
        callouts: [
          {
            type: "rule",
            title: "Order matters",
            body: "You must clean before you sanitize. A greasy wipe with a filthy cloth is not sanitized.",
          },
        ],
      },
      {
        heading: "Cross-contamination and 4–60°C",
        paragraphs: [
          "Keep raw and ready-to-eat separate: colour-coded boards/utensils, raw stored below ready-to-eat in coolers, wash hands and change tools between tasks, never use the floor as overflow storage, and keep chemicals away from food (never above open food).",
          "The temperature danger zone commonly taught for bacterial growth control is 4°C to 60°C (about 40°F to 140°F). Move food through this range quickly: cool leftovers properly, reheat thoroughly, and verify with a clean, sanitized thermometer — don’t guess by vibes.",
        ],
        callouts: [
          {
            type: "scenario",
            title: "Scenario",
            body: "Raw chicken board then immediately slice tomatoes for salad on the same board without washing/sanitizing = classic cross-contam fail.",
          },
          {
            type: "tip",
            title: "Danger zone hook",
            body: "4–60°C is where time + temperature abuse thrives. Cold hold ≤4°C; hot hold ≥60°C (follow your workplace SOPs).",
          },
        ],
      },
    ],
  },
  {
    slug: "whmis-cooks-basics",
    module: "D",
    moduleTitle: "4 — WHMIS for Cooks",
    number: 6,
    title: "WHMIS Basics for Cook Apprenticeship",
    durationMinutes: 12,
    summary:
      "WHMIS elements, pictograms, SDS, storage, and PPE as they apply to kitchen cleaners, degreasers, and sanitizers.",
    sections: [
      {
        heading: "Labels, SDS, training",
        paragraphs: [
          "WHMIS (Workplace Hazardous Materials Information System) helps workers identify and handle hazardous products. The three pillars: (1) labels on hazardous products, (2) Safety Data Sheets (SDS), and (3) worker education/training.",
          "In a kitchen, that means reading supplier/workplace labels on cleaners and sanitizers, knowing where SDS live, and following what your employer/instructor trained you to do. Unknown bottle? Don’t use it — report it.",
        ],
        callouts: [
          {
            type: "rule",
            title: "Trio",
            body: "Labels · SDS · Training. Missing any one leaves a gap.",
          },
        ],
      },
      {
        heading: "Pictograms, storage, PPE near food",
        paragraphs: [
          "Modern WHMIS uses pictograms in red diamonds (flame, corrosion, skull and crossbones, health hazard, exclamation mark, and others). If you don’t recognize a symbol, stop and ask / check the SDS before using the product.",
          "Store chemicals in labelled containers, capped, away from food and food-contact surfaces (never above open food). Don’t decant into drink bottles. Use PPE as the label/SDS/supervisor requires. Cover or move food during heavy cleaning; rinse food-contact surfaces as required after chemicals.",
        ],
        callouts: [
          {
            type: "scenario",
            title: "Scenario",
            body: "Sanitizer splash toward eyes → eye-wash / first aid, tell supervisor, follow SDS, then fix pouring technique and PPE.",
          },
        ],
      },
    ],
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonIndex(slug: string): number {
  return lessons.findIndex((l) => l.slug === slug);
}

export const totalLessonMinutes = lessons.reduce(
  (sum, l) => sum + l.durationMinutes,
  0
);
