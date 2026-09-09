import type { FeedPost } from "@/lib/types";

export const feedPosts: FeedPost[] = [
  {
    id: "welcome-phoenix",
    type: "photo",
    author: "Victoria Phoenix",
    handle: "@vsaphoenix",
    badge: "Pinned",
    topic: "meta",
    image: "/media/vsa-phoenix-logo.png",
    imageAlt: "Victoria Phoenix logo",
    caption:
      "Yo CKA crew 🔥 Welcome to the VSA Phoenix Food Safety feed — Victoria School of the Arts · Cook Apprenticeship (CKA) / Food Safety. Scroll like IG. Learn AR 31/2006 s.31, kitchen safety, sanitation, and WHMIS. Heart ❤️ = mark that post done.",
    ruleLine: "Inspiring Creativity · Red · White · Black",
  },
  {
    id: "disclaimer",
    type: "tip",
    author: "Phoenix Safety",
    handle: "@phoenix.eatsafe",
    badge: "Must-read",
    topic: "meta",
    caption:
      "Before you flex on the exam: this is an educational school resource for CKA food safety & sanitation. The printable cert is VSA / Victoria Phoenix completion energy — NOT an official AHS food handler card and NOT legal advice.",
    ruleLine:
      "Disclaimer: educational VSA completion · not AHS certification · not legal advice",
    slides: [
      {
        emoji: "📚",
        title: "School resource",
        body: "Built for VSA Cook Apprenticeship — practice + recall for AR 31/2006 s.31 + CKA safety/sanitation.",
      },
      {
        emoji: "🎓",
        title: "Cert = educational",
        body: "Pass the final challenge for a printable Phoenix completion cert — still not AHS.",
      },
      {
        emoji: "🧭",
        title: "Curriculum map",
        body: "1 s.31 regulation · 2 CKA3900 workplace safety · 3 sanitation/hygiene · 4 WHMIS for cooks.",
      },
    ],
  },
  {
    id: "outcomes-map",
    type: "carousel",
    author: "CKA Drop",
    handle: "@cka.phoenix",
    badge: "Map",
    topic: "meta",
    caption:
      "Cook Apprenticeship food safety map — memorize it; the feed fills in the details.",
    ruleLine: "CKA · Food Safety & Sanitation",
    slides: [
      {
        emoji: "⚖️",
        title: "1 · AR 31/2006 s.31",
        body: "≤5 care & control · ≥6 present · exemptions · AHS context (Public Health Act)",
      },
      {
        emoji: "🛠️",
        title: "2 · CKA3900 safety",
        body: "Slips · knives · burns/steam · lifting · PPE · injury/blood response",
      },
      {
        emoji: "🧼",
        title: "3 · Sanitation",
        body: "Handwash · clean vs sanitize · cross-contam · danger zone 4–60°C · hygiene/PPE",
      },
      {
        emoji: "⚠️",
        title: "4 · WHMIS",
        body: "Labels · SDS · pictograms · storage away from food · PPE for chemicals",
      },
    ],
  },
  {
    id: "meme-5-or-fewer",
    type: "meme",
    author: "Reg Memes AB",
    handle: "@alta.reg.lore",
    badge: "s.31(1) ≤5",
    topic: "regulation",
    image: "/media/meme-5-or-fewer.png",
    imageAlt: "Five or fewer food handlers meme",
    caption:
      "≤5 food handlers on site: at least one person with CARE AND CONTROL must hold an approved food sanitation & hygiene certificate (or Minister-equivalent). AHS: that certified person may be off-site — but the ticket still has to exist.",
    ruleLine: "≤5 → certified care & control (may be off-site)",
  },
  {
    id: "meme-6plus-present",
    type: "meme",
    author: "Reg Memes AB",
    handle: "@alta.reg.lore",
    badge: "s.31(2) ≥6",
    topic: "regulation",
    image: "/media/meme-6plus-present.png",
    imageAlt: "Six or more food handlers must have certified supervisor present meme",
    caption:
      "≥6 food handlers on site (AHS: includes serving staff): a certified MANAGEMENT/SUPERVISORY person must hold the ticket AND be PRESENT. Texting from the parking lot doesn’t count.",
    ruleLine: "≥6 → certified supervisor/manager present",
  },
  {
    id: "s31-carousel",
    type: "carousel",
    author: "Section 31 Desk",
    handle: "@s31.phoenix",
    badge: "AR 31/2006",
    topic: "regulation",
    caption:
      "Alta Reg 31/2006 s.31 under the Public Health Act — the legal floor for commercial food-establishment training.",
    ruleLine: "Public Health Act · Food Regulation s.31",
    slides: [
      {
        emoji: "1️⃣",
        title: "s.31(1) ≤5",
        body: "Care & control individual must be certified (Minister program or equivalent).",
      },
      {
        emoji: "2️⃣",
        title: "s.31(2) ≥6",
        body: "Certified management/supervisory staff must be on site at the time.",
      },
      {
        emoji: "3️⃣",
        title: "s.31(3) exemptions",
        body: "Low-risk unpackaged only · OR pre-packaged in / same form out.",
      },
      {
        emoji: "🏥",
        title: "AHS",
        body: "Recommends training for EVERY food handler — not just the minimum.",
      },
    ],
  },
  {
    id: "poll-s31",
    type: "poll",
    author: "Phoenix Polls",
    handle: "@phoenix.challenge",
    badge: "Quick check",
    topic: "regulation",
    caption: "Staffing math — no cap.",
    poll: {
      question: "Seven people on the floor (kitchen + servers). What does s.31(2) expect?",
      choices: [
        "Certified manager/supervisor present with an approved certificate",
        "Nobody needs training",
        "Only an off-site owner text is enough",
        "WHMIS stickers replace food safety tickets",
      ],
      correctIndex: 0,
      explanation:
        "6+ food handlers → certified management/supervisory person must be present.",
    },
  },
  {
    id: "scenario-s31-coverage",
    type: "scenario",
    author: "Scenario Drop",
    handle: "@what.would.you.do",
    badge: "s.31 Scenario",
    topic: "regulation",
    caption: "Friday rush coverage check.",
    scenario: {
      setup:
        "Your kitchen will have 6 cooks/servers on Friday. The only certified supervisor is stuck in traffic and won’t arrive until mid-service.",
      question: "Best s.31-minded move?",
      choices: [
        "Arrange another certified manager/supervisor to be present, or adjust staffing so you’re not operating ≥6 without coverage",
        "Ignore it — vibes are a control measure",
        "Have an untrained host “act certified”",
        "Post a meme and open anyway with zero plan",
      ],
      correctIndex: 0,
      explanation:
        "≥6 requires a certified management/supervisory person present — plan coverage before service.",
    },
  },
  {
    id: "rule-exemptions",
    type: "rule",
    author: "Section 31 Desk",
    handle: "@s31.phoenix",
    badge: "s.31(3)",
    topic: "regulation",
    caption:
      "Exemptions are narrow: (a) only low-risk unpackaged food to the public, or (b) all food received pre-packaged and sold only in that same form. Open, cook, reheat, or repack? You’re usually outside that path — confirm with instructor/AHS.",
    ruleLine: "Exemptions ≠ “no training forever”",
    slides: [
      {
        emoji: "📦",
        title: "Pre-packaged path",
        body: "Received sealed → sold sealed, same form.",
      },
      {
        emoji: "🥗",
        title: "Low-risk unpackaged",
        body: "Only low-risk unpackaged offered — still verify what “low-risk” means with AHS.",
      },
      {
        emoji: "🔎",
        title: "Inspector note",
        body: "AHS may require extra training based on inspection observations.",
      },
    ],
  },
  {
    id: "cta-challenge-s31",
    type: "cta",
    author: "Reels Challenge",
    handle: "@phoenix.challenge",
    badge: "Challenge",
    topic: "regulation",
    caption:
      "Section 31 Challenge unlocked — ≤5 / ≥6, care & control, exemptions, AHS. Pass mark 80%.",
    cta: {
      label: "Start s.31 Challenge",
      href: "/challenge/module-s31/",
    },
  },
  {
    id: "workspace-safety",
    type: "carousel",
    author: "Safety Station",
    handle: "@cka3900.safe",
    badge: "CKA3900",
    topic: "safety",
    caption:
      "CKA3900-style workplace safety checklist — backs, slips/trips, burns, cuts, injury treatment, blood-borne pathogens.",
    ruleLine: "Protect people first · then tickets",
    slides: [
      {
        emoji: "🏋️",
        title: "Back",
        body: "Lift with legs, keep loads close, ask for help with heavy pots.",
      },
      {
        emoji: "🛝",
        title: "Slips / trips",
        body: "Wipe spills now, clear aisles, non-slip kicks, wet-floor signs.",
      },
      {
        emoji: "🔥",
        title: "Burns & cuts",
        body: "Respect steam, lids away from face, sharp knives, never catch a falling knife.",
      },
      {
        emoji: "🩸",
        title: "Injury & blood",
        body: "Tell supervisor, first aid, bandage + glove. Blood on food/surfaces = stop, discard, sanitize, follow protocol.",
      },
    ],
  },
  {
    id: "stock-knives",
    type: "photo",
    author: "Pass Photos",
    handle: "@phoenix.kitchen",
    badge: "Knives",
    topic: "safety",
    image: "/media/stock-knives.jpg",
    imageAlt: "Chef knives on a cutting board",
    caption:
      "Safe tools energy: sharp knives on stable boards, cut away from you, point-down carry. Never catch a falling knife. Never bypass mixer/slicer guards.",
    ruleLine: "Right tool · never catch a falling knife · never bypass guards",
  },
  {
    id: "stock-kitchen",
    type: "photo",
    author: "Pass Photos",
    handle: "@phoenix.kitchen",
    topic: "safety",
    image: "/media/stock-kitchen.jpg",
    imageAlt: "Busy kitchen",
    caption:
      "Opening checklist: mats down, knives OK, extinguisher/eye-wash known, walkways clear, hand sink stocked. Speed never outranks safety.",
  },
  {
    id: "scenario-blood",
    type: "scenario",
    author: "Scenario Drop",
    handle: "@what.would.you.do",
    badge: "Safety Scenario",
    topic: "safety",
    caption: "Cut finger mid-prep. What’s the move?",
    scenario: {
      setup:
        "While dicing onions, an apprentice gets a cut that bleeds onto the board and some veggies.",
      question: "Best response?",
      choices: [
        "Stop, get supervisor/first aid, discard contaminated food, clean & sanitize, bandage + glove before returning",
        "Wipe with a towel and keep cutting",
        "Taste the onions to check quality",
        "Hide the board and say nothing",
      ],
      correctIndex: 0,
      explanation:
        "Blood-borne pathogen awareness: protect people, remove contaminated food, sanitize, follow protocol.",
    },
  },
  {
    id: "cta-challenge-safety",
    type: "cta",
    author: "Reels Challenge",
    handle: "@phoenix.challenge",
    badge: "Challenge",
    topic: "safety",
    caption:
      "CKA3900 Workplace Safety Challenge — slips, knives, burns, lifting, PPE, blood response. Pass mark 80%.",
    cta: {
      label: "Start Workplace Safety Challenge",
      href: "/challenge/module-workplace-safety/",
    },
  },
  {
    id: "video-handwash",
    type: "video",
    author: "Wash Station",
    handle: "@soap.opera",
    badge: "Video",
    topic: "sanitation",
    videoId: "eZw4Ga3jg3E",
    videoTitle: "CDC — Fight Germs. Wash Your Hands!",
    videoNote:
      "External educational video (CDC). Watch for proper handwashing technique.",
    caption:
      "Wash before service, after washroom, after raw foods, after face/phone, whenever hands might be dirty. Sanitizer ≠ a full replacement when soil is present.",
    ruleLine: "Soap + warm water when hands may be contaminated",
    image: "/media/meme-handwash.png",
    imageAlt: "Handwash meme reminder",
  },
  {
    id: "meme-handwash",
    type: "meme",
    author: "Kitchen Memes AB",
    handle: "@linecook.lore",
    badge: "Hygiene",
    topic: "sanitation",
    image: "/media/meme-handwash.png",
    imageAlt: "Handwashing meme",
    caption:
      "That 20-second scrub is not optional aesthetics. Clean nails, hair restrained, wounds covered, stay off if you’ve got vomiting/diarrhea unless cleared.",
    ruleLine: "Personal hygiene protects the brigade — and the food",
  },
  {
    id: "stock-handwash",
    type: "photo",
    author: "Pass Photos",
    handle: "@phoenix.kitchen",
    topic: "sanitation",
    image: "/media/stock-handwash.jpg",
    imageAlt: "Person washing hands at a sink",
    caption:
      "Real sink energy. Wet → soap → scrub (backs, between fingers, under nails) → rinse → dry with clean towel/air. Then glove up if the task needs it.",
  },
  {
    id: "meme-clean-sanitize",
    type: "meme",
    author: "Kitchen Memes AB",
    handle: "@linecook.lore",
    badge: "Clean ≠ sanitize",
    topic: "sanitation",
    image: "/media/meme-clean-sanitize.png",
    imageAlt: "Clean versus sanitize meme",
    caption:
      "Cleaning removes dirt/soil. Sanitizing reduces pathogens on an ALREADY CLEAN surface. Wipe with a filthy cloth ≠ sanitized. Wash → rinse as required → sanitize at correct concentration + contact time.",
    ruleLine: "You must clean before you sanitize",
  },
  {
    id: "stock-dishes",
    type: "photo",
    author: "Pass Photos",
    handle: "@phoenix.kitchen",
    topic: "sanitation",
    image: "/media/stock-dishes.jpg",
    imageAlt: "Dishwashing and cleanup",
    caption:
      "Closing vibes: wash tools, sanitize stations, clear sinks, sweep, put food away labelled/dated as directed. Leaving a disaster for next shift fails the vibe check — and food safety.",
    ruleLine: "Reset the station — every shift",
  },
  {
    id: "meme-cross-contam",
    type: "meme",
    author: "Kitchen Memes AB",
    handle: "@linecook.lore",
    badge: "Cross-contam",
    topic: "sanitation",
    image: "/media/meme-cross-contam.png",
    imageAlt: "Cross-contamination meme",
    caption:
      "Raw below ready-to-eat. Colour-coded boards. Change utensils + wash hands between tasks. Chemicals never chill above food. Floor is not overflow storage.",
    ruleLine: "Separate raw and ready-to-eat — always",
  },
  {
    id: "meme-danger-zone",
    type: "meme",
    author: "Kitchen Memes AB",
    handle: "@linecook.lore",
    badge: "4–60°C",
    topic: "sanitation",
    image: "/media/meme-danger-zone.png",
    imageAlt: "Temperature danger zone meme",
    caption:
      "Danger zone drop: 4°C to 60°C is where time + temperature abuse thrives. Cold hold ≤4°C, hot hold ≥60°C (follow SOPs). Thermometer > vibes.",
    ruleLine: "Danger zone = 4–60°C",
  },
  {
    id: "stock-thermometer",
    type: "photo",
    author: "Pass Photos",
    handle: "@phoenix.kitchen",
    topic: "sanitation",
    image: "/media/stock-thermometer.jpg",
    imageAlt: "Food thermometer",
    caption:
      "Thermometers are controls. Clean + sanitize the probe between uses. Guessing doneness or cooler temps by vibes is not a CCP.",
  },
  {
    id: "stock-gloves",
    type: "photo",
    author: "Pass Photos",
    handle: "@phoenix.kitchen",
    topic: "sanitation",
    image: "/media/stock-gloves.jpg",
    imageAlt: "Disposable gloves",
    caption:
      "Gloves aren’t magic. Contaminated gloves spread germs like bare hands. Change between tasks. Wash hands when you change gloves. Hair restraints + clean aprons still matter.",
    ruleLine: "Gloves: change between tasks + wash hands",
  },
  {
    id: "poll-sanitize",
    type: "poll",
    author: "Phoenix Polls",
    handle: "@phoenix.challenge",
    badge: "Quick check",
    topic: "sanitation",
    caption: "Tap the answer that matches clean vs sanitize — no cap.",
    poll: {
      question: "Cleaning vs sanitizing — what’s correct?",
      choices: [
        "Clean removes soil; sanitize reduces pathogens on a cleaned surface",
        "They’re the same step",
        "Sanitize first, clean never",
        "Only cold water matters",
      ],
      correctIndex: 0,
      explanation:
        "Clean first to remove dirt, then sanitize to reduce pathogens.",
    },
  },
  {
    id: "poll-danger-zone",
    type: "poll",
    author: "Phoenix Polls",
    handle: "@phoenix.challenge",
    badge: "Quick check",
    topic: "sanitation",
    caption: "Temp check.",
    poll: {
      question: "The common temperature danger zone is:",
      choices: [
        "4°C to 60°C",
        "−18°C to 0°C only",
        "100°C to 200°C",
        "Any temp is fine if you’re busy",
      ],
      correctIndex: 0,
      explanation: "4–60°C — limit time in the danger zone; verify with a thermometer.",
    },
  },
  {
    id: "cta-challenge-sanitation",
    type: "cta",
    author: "Reels Challenge",
    handle: "@phoenix.challenge",
    badge: "Challenge",
    topic: "sanitation",
    caption:
      "Sanitation & Hygiene Challenge — handwash, clean vs sanitize, cross-contam, 4–60°C, gloves.",
    cta: {
      label: "Start Sanitation Challenge",
      href: "/challenge/module-sanitation/",
    },
  },
  {
    id: "whmis-three",
    type: "carousel",
    author: "WHMIS Corner",
    handle: "@whmis.phoenix",
    badge: "WHMIS",
    topic: "whmis",
    caption:
      "WHMIS trio for cooks — if you only remember three things, make it these.",
    ruleLine: "Labels · SDS · Training",
    slides: [
      {
        emoji: "🏷️",
        title: "Labels",
        body: "Supplier/workplace labels on hazardous products — read before you spray.",
      },
      {
        emoji: "📄",
        title: "SDS",
        body: "Safety Data Sheets: hazards, handling, first aid, storage, PPE — find them fast.",
      },
      {
        emoji: "🎓",
        title: "Education / training",
        body: "Employer/instructor WHMIS training is the third pillar. Don’t skip it.",
      },
      {
        emoji: "✅",
        title: "Kitchen habit",
        body: "Unknown bottle? Don’t use it. Report. Relabel or dispose per procedure.",
      },
    ],
  },
  {
    id: "whmis-symbols",
    type: "carousel",
    author: "WHMIS Corner",
    handle: "@whmis.phoenix",
    badge: "Pictograms",
    topic: "whmis",
    caption:
      "Hazard pictograms drop — recognize the vibe before you touch the bottle. (Modern WHMIS = red-diamond pictograms.)",
    ruleLine: "Know the symbols · ask if unsure",
    slides: [
      {
        emoji: "🔥",
        title: "Flame",
        body: "Flammable — keep away from heat/sparks; store as directed.",
      },
      {
        emoji: "🧪",
        title: "Corrosion",
        body: "Can burn skin/eyes or eat metal — PPE and careful pouring.",
      },
      {
        emoji: "☠️",
        title: "Skull / acute toxicity",
        body: "Serious toxic hazard — follow SDS strictly.",
      },
      {
        emoji: "❗",
        title: "Exclamation",
        body: "May cause irritation or other effects — still respect gloves/ventilation rules.",
      },
      {
        emoji: "🫁",
        title: "Health hazard",
        body: "Serious longer-term health effects possible — read SDS, don’t DIY mixes.",
      },
    ],
  },
  {
    id: "poll-whmis",
    type: "poll",
    author: "Phoenix Polls",
    handle: "@phoenix.challenge",
    badge: "Quick check",
    topic: "whmis",
    caption: "Unlabelled spray bottle on the shelf. What’s the move?",
    poll: {
      question: "You find an unlabelled degreaser bottle. You should:",
      choices: [
        "Smell it deeply to identify it",
        "Not use it — report it and follow WHMIS/workplace procedure",
        "Mix it with bleach to be safe",
        "Pour it on the floor as a test",
      ],
      correctIndex: 1,
      explanation:
        "Don’t use unlabelled chemicals. Report, relabel or dispose per procedure, and use SDS/labels.",
    },
  },
  {
    id: "whmis-storage-ppe",
    type: "rule",
    author: "WHMIS Corner",
    handle: "@whmis.phoenix",
    badge: "Storage + PPE",
    topic: "whmis",
    caption:
      "Store chemicals labelled, capped, away from food (never above open food). In food prep: PPE as directed, move/cover food during heavy cleaning, rinse food-contact surfaces as required.",
    ruleLine: "Storage + PPE + protect the food environment",
    slides: [
      {
        emoji: "📦",
        title: "Storage",
        body: "Labelled containers, upright, per SDS — no drink-bottle remixes.",
      },
      {
        emoji: "🧤",
        title: "PPE",
        body: "Gloves/goggles when label/SDS/supervisor says so — PPE supports, not replaces, reading the label.",
      },
      {
        emoji: "🥗",
        title: "Near food",
        body: "Cover or move food; never spray cleaners over uncovered ready-to-eat items.",
      },
    ],
  },
  {
    id: "scenario-sds",
    type: "scenario",
    author: "Scenario Drop",
    handle: "@what.would.you.do",
    badge: "WHMIS Scenario",
    topic: "whmis",
    caption: "Sanitizer splash arc.",
    scenario: {
      setup:
        "While pouring sanitizer concentrate, a splash heads toward a coworker’s eyes.",
      question: "What should the team do first?",
      choices: [
        "Use eye-wash / first aid, tell the supervisor, follow SDS guidance, then review PPE and pouring",
        "Rub eyes with a dish towel and keep working",
        "Neutralize with mystery chemicals from under the sink",
        "Post it before helping",
      ],
      correctIndex: 0,
      explanation:
        "SDS + training tell you first aid and handling. Protect the person first, then fix the process.",
    },
  },
  {
    id: "cta-challenge-whmis",
    type: "cta",
    author: "Reels Challenge",
    handle: "@phoenix.challenge",
    badge: "Challenge",
    topic: "whmis",
    caption: "WHMIS for Cooks Challenge — elements, symbols, SDS, storage, PPE.",
    cta: {
      label: "Start WHMIS Challenge",
      href: "/challenge/module-whmis/",
    },
  },
  {
    id: "video-food-safe-tips",
    type: "video",
    author: "Watch Party",
    handle: "@phoenix.watch",
    badge: "Video",
    topic: "sanitation",
    videoId: "GWspVYYra7E",
    videoTitle: "Food Safe Tips — Cooking",
    videoNote: "External educational video.",
    caption:
      "Quick cooking / food-safe tips — pair with handwash, clean vs sanitize, danger zone, and safe tools.",
  },
  {
    id: "video-sicky",
    type: "video",
    author: "Watch Party",
    handle: "@phoenix.watch",
    badge: "Optional bop",
    topic: "sanitation",
    videoId: "ZbH_mSk2dNk",
    videoTitle: "Don’t Get Sicky Wit It (food safety song)",
    videoNote:
      "External engagement video. For memory hooks — still study CKA outcomes.",
    caption:
      "Optional brain-glue song. Catchy ≠ a substitute for s.31 + sanitation — but if it helps you remember handwash, we’ll take it.",
  },
  {
    id: "video-overview",
    type: "video",
    author: "Watch Party",
    handle: "@phoenix.watch",
    badge: "Longer watch",
    topic: "sanitation",
    videoId: "n7jWt7IF3QY",
    videoTitle: "Food Handling Training Overview",
    videoNote: "External educational video — longer runtime; skim key segments.",
    caption:
      "Broader food-handling overview for reinforcement. Pause and connect ideas back to AR 31/2006 s.31 and CKA sanitation.",
  },
  {
    id: "cta-exam",
    type: "cta",
    author: "Final Reels Challenge",
    handle: "@phoenix.exam",
    badge: "Boss fight",
    topic: "meta",
    caption:
      "Ready for the Final Reels Challenge? 80% to unlock your VSA Phoenix educational completion certificate for CKA Food Safety & Sanitation. Still not an official AHS card — but a solid flex for Cook Apprenticeship.",
    cta: {
      label: "Take Final Exam",
      href: "/exam/",
    },
  },
];

export const heartablePostIds = feedPosts
  .filter((p) => p.type !== "cta")
  .map((p) => p.id);

export function getFeedPost(id: string): FeedPost | undefined {
  return feedPosts.find((p) => p.id === id);
}
