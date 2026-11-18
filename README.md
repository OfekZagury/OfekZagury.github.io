# ofekzagury.github.io

My personal portfolio site, live at **https://ofekzagury.github.io**.

Built with React 19, TypeScript, Vite and Tailwind CSS 4, and deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`.

## Editing content

All text lives in `src/data/`, so updating the site never requires touching components:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, role, intro, contact blurb and links (email, LinkedIn, CV) – empty links are hidden |
| `src/data/projects.ts` | Project cards: description, pipeline steps, highlights, tech stack, repository link, accent colour |
| `src/data/skills.ts` | Skill groups |

To add a CV, put the PDF in `public/` and set `links.cv` to `"/cv.pdf"`.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Features

- Navy and champagne-gold design (Playfair Display, Jost and Inter), with the crossing gold beams from my profile banner
- Light / dark mode that follows the system setting, with a remembered manual toggle
- Project filter by domain (AI & LLMs, Computer Vision, Backend, Frontend)
- Pipeline "covers" on each card instead of screenshots
- Responsive down to 360 px, keyboard accessible, respects reduced-motion settings
