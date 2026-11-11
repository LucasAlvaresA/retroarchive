# RETROARCHIVE

A responsive, frontend-only Next.js showcase for a curated library of classic games.

## Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS v4 (with bespoke CSS for the visual system)
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  AboutSection.tsx
  Footer.tsx
  GameCard.tsx
  GameCollection.tsx
  GameDetailsModal.tsx
  GamingTimeline.tsx
  Header.tsx
data/
  games.ts
  game-catalog/
  game-details/
  game-details.ts
scripts/
  validate-games.cjs
```

## Notes
- The compact game catalog is grouped by platform in `data/game-catalog/`; long descriptions and trivia are grouped in `data/game-details/` and loaded when a game is opened.
- Run `npm run validate:data` to check catalog/detail consistency, localized fields, platform assignments and referenced cover files. Missing and unreferenced cover art is reported for curation; the UI fallback remains supported.
- Collection filters and the game details modal run entirely in React state.
- Modal supports backdrop click, Escape, and background scroll locking.
- Cover art uses Wikimedia file redirects; a designed fallback cover is shown if a remote cover file is unavailable. The timeline uses remote editorial photography.
- This is an independent fan showcase. Game names, marks and trademarks belong to their respective owners.

## Visual refinement pass
- Reworked the hero artwork into a layered editorial composition using local game-library cover data.
- Replaced the abstract About illustration with a matching cover-art collage.
- Refined typography scale, spacing, contrast, section rhythm, cover proportions, and timeline image crops.
- Improved small-screen headline wrapping, archive grid spacing, timeline layout, and modal artwork treatment.
- Added restrained cover drift and hover transitions while preserving reduced-motion styling.
