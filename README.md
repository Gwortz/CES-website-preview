# Commonwealth Eye Surgery — Demo Website Redesign

A proof-of-concept redesign of commonwealtheyes.com, built to show partners
what a modern rebuild could look like. **This is a demo, not the live site.**
It is marked `noindex` and every unverified figure appears as an obvious
amber bracketed placeholder like `[XX,000+ procedures]`.

## Stack

- Next.js (App Router), fully static generation
- Tailwind CSS v4
- No CMS, no database: all copy lives in typed files under `/content`
- Local SVG/gradient image placeholders only (no external imagery)
- Deployed to Vercel

## Editing content

| File | Contains |
| --- | --- |
| `content/site.ts` | Practice info, locations, nav, footer, stat bar |
| `content/doctors.ts` | All six doctor bios and credentials |
| `content/lenses.ts` | The five lens classes and comparison table data |
| `content/procedures.ts` | LASIK, PRK, EVO ICL page content |
| `content/age-paths.ts` | The three Start Here age journeys |
| `content/quizzes.ts` | Both self-test flows, questions and results |
| `content/reviews.ts` | Sample reviews (all clearly labeled as samples) |
| `content/faqs.ts` | FAQ entries |

Anything wrapped in `[brackets]` inside content strings renders in the amber
placeholder style automatically.

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
vercel --prod
```
