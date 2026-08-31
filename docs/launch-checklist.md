# Launch checklist

Status as of the "Fill every image, video, map and graphic placeholder"
commit. The site **builds clean** (`npm ci && npm run build`, exit 0, zero
errors, zero warnings) and every visual placeholder is gone.

## Done — no visual placeholders remain

| Was | Now |
| --- | --- |
| 4 map placeholders | Real Google Maps for both offices, click-to-load, with address + directions link always visible |
| 5 lens "optical diagram" placeholders | Inline SVG schematics for monofocal, toric, EDOF, trifocal and light adjustable |
| 2 video placeholders | A real explainer from the practice's channel; empty doctor players removed |
| 1 award badge placeholder | The four official badges, real artwork |
| 7 photography placeholders | The practice's own licensed photography |
| 4 invented "sample" reviews | Removed |
| 3 empty patient-story cards | Replaced with a real, sourced pull-quote |

All imagery came from the practice's own WordPress media library. Nothing was
invented, generated, or licensed from a third party.

## Blocking — content only the practice can supply

Sixteen amber placeholders remain. Each is a fact that would be wrong to
guess. Filling these is the last step before the site can be public.

| Where | What is needed |
| --- | --- |
| `content/site.ts` | **Louisville office hours** (currently `[Office hours]`, shown on 3 pages) |
| `/patients/insurance` | Accepted insurance plans and networks |
| `/patients/financing` | Financing partner names and terms; enhancement policy details |
| `/patients/traveling` | Hotel partner names and negotiated rates |
| `/patients/forms` | The actual new-patient form PDFs |
| `content/awards.ts` | Years for "Best Cataract Surgeons in America" and "U.S. News High Performing" |
| `/about` | Philanthropy programs and partners |
| `/doctors` | Referral count, if the practice wants a number shown |
| `content/doctors.ts` | Any credential still marked `placeholder: true` |
| `content/procedures.ts` | Outcomes summary data for LASIK, PRK and EVO ICL |

## Blocking — decisions before going public

1. **Remove the demo notice.** `site.demoNote` in `content/site.ts` renders a
   "Demo preview — this is not the live website" band in the footer. It must
   go when this becomes the real site.

2. **Confirm the review set.** Nine real reviews remain, gathered from Google,
   Facebook and rater8. Spot-check the wording against the live listings
   before launch — quoting a real review inaccurately is its own problem. Do
   not re-add invented testimonials: published endorsements must be real and
   attributable.

3. **Verify the headline figures.** The homepage stat bar leads with
   "150,000+ cataract surgeries" across the three surgeons while Dr.
   Ferguson's bio says "81,000+ procedures, nearly 51,000 cataract
   surgeries." Both can be true, but a reader will do the arithmetic, so
   confirm both numbers trace to something defensible.

4. **Check the award years.** Best of Lexington is set to 2024 to match the
   badge artwork; the earlier content said 2022, evidenced by the badge on
   the practice's logo file. If the practice won both years, say so.

5. **Medical claims review.** Someone clinical should read the procedure and
   lens pages end to end before they are public.

6. **Headshot resolution.** Five of the six doctor headshots are 220×210 —
   the largest the live site publishes. They will look soft. Higher-resolution
   originals should come from the practice.

## Deploy

The branch is the repo's default, so a Git-connected Vercel project publishes
on push. Otherwise, from the repo:

```bash
npx vercel --prod
```

Project name `commonwealth-eye-demo` yields
`https://commonwealth-eye-demo.vercel.app`, which is what `metadataBase` in
`app/layout.tsx` already points at.
