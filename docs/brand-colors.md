# Commonwealth Eye Surgery — Live Site Brand Colors

Reference for where the practice's brand colors and image assets came from.
Sampled from the production site at **commonwealtheyes.com** on 2026-08-21 by
reading computed styles, stylesheet rules, and logo pixels in the browser.

The site theme in `app/globals.css` is derived from these values. This file is
the source record, not the theme itself — change the theme in `globals.css`.

## Primary blues

| Hex | Where it appears on the live site |
| --- | --- |
| `#00A8D6` | Primary brand cyan-blue. Most common full-width section background; primary button fill (white text). |
| `#008BC8` | Secondary blue. "Learn More" button fill, inline CTA fills. |
| `#00A1D5` | Hero button fill ("See How Much You Could Save"). |
| `#0076BA` | Navigation and in-body link text. |
| `#23ADDA` | Light blue link text on navy backgrounds. |

## Logo mark blues

Dominant colors sampled from the eye icon in `logo@2x.png`:

| Hex | Note |
| --- | --- |
| `#0078A8` | Darkest ring of the iris — most pixels. Basis for `--color-brand-500`. |
| `#0080B8` | Mid ring. |
| `#00A8D8` | Highlight ring — matches the primary `#00A8D6`. |
| `#00A0C8` | Transition tone. |
| `#00A0D0` | Transition tone. |

## Navy / dark backgrounds

| Hex | Where it appears |
| --- | --- |
| `#00314D` | Deep navy button fill (light text). |
| `#002837` | Dark section background. |
| `#011D27` | Darkest section background / footer band. |
| `#161922` | Near-black used for text on white buttons. |
| `#151516` | Near-black button fill (light `#DEDEDE` text). |

## Accent

| Hex | Where it appears |
| --- | --- |
| `#FFB673` | Peach / amber CTA buttons — "Free LASIK Consultation", "Take Our LASIK Quiz", "Get the LASIK Guide", "Learn About Financing". Paired with `#343534` text. |
| `#9A8464` | Tan / gold used throughout the live theme stylesheet (secondary accent). |

## Neutrals

| Hex | Where it appears |
| --- | --- |
| `#FFFFFF` | Page background, text on colored fills. |
| `#EFEFEF` | Footer body text. |
| `#DEDEDE` | Text on near-black buttons. |
| `#424242` | Default body text. |
| `#353535` | `h2`/`h3` heading text. |
| `#343534` | Text on the peach CTA buttons. |

## Live-site summary

- **Header:** transparent over hero imagery; white logo lockup, white nav text.
- **Primary button:** `#00A8D6` fill, `#FFFFFF` text.
- **Secondary button:** `#008BC8` fill, `#FFFFFF` text.
- **Accent button:** `#FFB673` fill, `#343534` text.
- **Body text:** `#424242`; **headings:** `#353535`.

## Image assets pulled from the live site

| File | Source |
| --- | --- |
| `public/images/logo.png` | `wp-content/uploads/2023/03/logo@2x.png` (1606×264, highest-res version available; the site publishes no SVG). Cropped to 1236×264 to remove the attached "Best of Lexington 2022" award badge; transparent background preserved. |
| `public/images/doctors/lance-ferguson.jpg` | `wp-content/uploads/2016/05/Website_Ferguson.jpg` |
| `public/images/doctors/gary-wortz.jpg` | `wp-content/uploads/2016/05/Website_Wortz.jpg` |
| `public/images/doctors/asim-piracha.jpg` | `wp-content/uploads/2024/04/asim-piracha.webp` (converted to JPEG) |
| `public/images/doctors/howell-findley.jpg` | `wp-content/uploads/2016/05/Website_Findley.jpg` |
| `public/images/doctors/marty-smith.jpg` | `wp-content/uploads/2016/05/Website_Smith.jpg` |
| `public/images/doctors/christopher-kuc.jpg` | `wp-content/uploads/2026/01/kuc.jpg` |

**Resolution caveat:** the live site only publishes 220×210 headshots for
Drs. Ferguson, Wörtz, Piracha, Findley, and Smith — a full sweep of the
WordPress media library (486 images) turned up no larger clean portraits for
them. Only Dr. Kuc has a high-res headshot (1000×1000). The five small files
will look soft at large display sizes; higher-resolution originals should be
requested from the practice.
