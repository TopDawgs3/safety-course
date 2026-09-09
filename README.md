# Victoria Phoenix · CKA Food Safety & Sanitation

Personalized **Victoria School of the Arts** Cook Apprenticeship (CKA) learning feed (Team **Victoria Phoenix**).

Instagram / TikTok-style vertical scroll course covering:

1. **Alberta Food Regulation Alta Reg 31/2006 s.31** (under the Public Health Act) — ≤5 / ≥6 rules, care and control, exemptions, AHS context
2. **CKA3900 workplace & kitchen physical safety** — slips, knives, burns, lifting, PPE, injury response
3. **Sanitation & hygiene** — handwash, clean vs sanitize, cross-contamination, danger zone **4–60°C**, PPE
4. **WHMIS basics for cooks** — labels, SDS, pictograms, storage, PPE near food

## Disclaimer

Educational school resource only. **Not** an official AHS food handler certificate. **Not** legal advice.

## Stack

- Next.js 14 (`output: 'export'`) + Tailwind
- GitHub Pages via `.github/workflows/deploy-pages.yml`
- `basePath` / `assetPrefix`: `/safety-course`

## Scripts

```bash
npm install
npm run dev
npm run build   # writes static site to out/
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Splash |
| `/feed` | Main social learning feed |
| `/challenge/[slug]` | Module quizzes as Stories challenges |
| `/exam` | Final Reels Challenge |
| `/certificate` | Printable VSA Phoenix educational cert |
| `/resources` | Regulation/AHS/WHMIS links + media credits |

Progress is stored in `localStorage` on the learner’s device.
