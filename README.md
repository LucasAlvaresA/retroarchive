# RetroArchive

**A digital museum for the games that grew up with us.**

RetroArchive is an interactive exhibition about video game history: the eras that shaped the industry, the consoles that made it into the living room, and a four-game selection that introduces each of those machines. It all lives on a single page, with section navigation, filters, detail modals and content in both English and Portuguese.

It is an independent fan project with no commercial purpose. There is no backend, database or authentication — the whole archive lives in TypeScript files, which keeps the site fast and easy to preserve alongside the code.

## What's on the page

- **Opening** — an editorial cover featuring three classic games, an archive counter and a shortcut into the collection.
- **Timeline** — 11 eras, from the arcades of the 1970s to the present, each with a short text, an image and a modal telling the full story.
- **Consoles** — 30 machines, filterable by generation, with maker, year, media and each platform's four featured games.
- **Collection** — 120 games across 30 platforms, filterable by console, with a full record: release, genre, publisher, developer, description and trivia.
- **About** — the idea behind the project and a small tribute to the people who made those worlds exist.

The visual language is closer to an editorial museum than a product page: spaced-out typography, archive labels, film grain, cover crops and a warm, dark palette. The typefaces are DM Mono, DM Sans and Space Grotesk, loaded through `next/font`.

## Running locally

You will need **Node.js 20 or newer** and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To produce a production build:

```bash
npm run build
npm start
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload. |
| `npm run build` | Compiles the optimized production build. |
| `npm start` | Serves the production build. |
| `npm run lint` | Runs ESLint with the Next.js and TypeScript rules. |
| `npm run validate:data` | Checks the archive's integrity (catalogs, details, translations and covers). |

## Inside the project

```text
app/
  styles/              # the entire visual system
  layout.tsx           # fonts, metadata and the language provider
  page.tsx             # composition of the single page
components/
  Sidebar.tsx          # navigation, archive counters and language switch
  HeroSection.tsx
  GamingTimeline.tsx
  EraDetailsModal.tsx
  ConsolesSection.tsx
  ConsoleCard.tsx
  ConsoleDetailsModal.tsx
  GameCollection.tsx
  GameCard.tsx
  GameDetailsModal.tsx
  AboutSection.tsx
  Footer.tsx
data/
  games.ts             # types, platform order and the final game list
  game-catalog/        # game summaries, one file per platform
  game-details.ts      # on-demand loading of full records
  game-details/        # full records, one file per platform
  consoles.ts          # console entries
  eras.ts              # era entries
lib/
  i18n.tsx             # EN/PT-BR dictionaries and language persistence
public/images/
  games/               # game covers
  consoles/            # console photos
  eras/                # timeline artwork
scripts/
  validate-games.cjs   # archive validator
```

### The archive in two layers

Every game exists in two places, on purpose:

1. **Summary** in `data/game-catalog/<platform>.ts` — id, title, year, platform and, optionally, the cover. This is what the grid and filters use.
2. **Details** in `data/game-details/<platform>.ts` — description, release date, genre, publisher, developer and trivia.

`GameDetailsModal` imports the full record only when a game is opened. The collection can keep growing without inflating the page's initial JavaScript.

Consoles live in `data/consoles.ts`, eras in `data/eras.ts`, and `data/games.ts` brings together the types, the platform order, the accent colours and the final list of games.

## Adding content

### A new game

1. Create the summary in the platform's catalog under `data/game-catalog/`.
2. Add the matching record in `data/game-details/`, using the same `id`.
3. If you want a cover, drop the file in `public/images/games/` and point `coverImage` at it.
4. Run `npm run validate:data`.

```ts
{
    id: "outrun",
    title: "Out Run",
    coverImage: "/images/games/mega-drive-outrun.jpg", // optional
    releaseYear: 1986,
    platform: "Mega Drive",
}
```

### A new console

1. Add the entry to `data/consoles.ts`, keeping the list in chronological order.
2. If it is a brand-new platform, register it in `data/games.ts` (the `Platform` type, `platformOrder` and `platformAccents`), create its catalog and detail files, and add the loader in `data/game-details.ts`.
3. Run `npm run validate:data`.

The project works with **exactly four games per platform**. It is a curation, not a complete catalog: the goal is to introduce any console through four strong choices. The validator rejects platforms with more or fewer than that, and also checks for duplicate ids, invalid years, empty translations and missing records.

### Images and fallback

Covers live in `public/images/games/`, console photos in `public/images/consoles/` and timeline artwork in `public/images/eras/`. All of them are rendered with `next/image`.

Covers generally follow a platform prefix plus a short game name — for example, `atari-2600-adventure.jpg`, `dreamcast-shenmue.jpg` and `gameboy-tetris.jpg`. Console photos use the machine name, such as `atari-2600.png` and `gamecube.png`.

`coverImage` is optional. Every current entry has local artwork, but if a file is missing or fails to load, the site builds a graphic card with the title, platform and year, keeping the grid intact. It is the same safety net for whenever the archive grows ahead of its images.

## Language and accessibility

- English and Portuguese (Brazil) share the same data; only the interface copy and the records are translated. The choice is saved in `localStorage`, and the document's `lang` attribute and tab title follow the selected language.
- Modals close with `Esc`, close on backdrop click and lock page scrolling while open.
- The sidebar becomes a slide-out menu on mobile, with `aria-expanded` and keyboard dismissal.
- Animations respect `prefers-reduced-motion`.
- Covers have alt text, and the cards are buttons with descriptive labels.

## Archive validation

```bash
npm run validate:data
```

The script reads the catalogs and records with the TypeScript compiler and checks:

- exactly four games per platform;
- unique ids and plausible release years;
- required fields and English/Portuguese translations;
- known platforms with records grouped under the right one;
- the existence of every referenced cover file.

Missing covers only produce warnings (the fallback handles the visuals), and unreferenced image files are listed to help with curation.

## Stack

- Next.js 15 (App Router) and React 19
- Strict TypeScript
- Tailwind CSS v4 for utilities, alongside a bespoke CSS visual system
- Lucide React for icons
- `next/font` for the typefaces

## Credits

Built by [Lucas Alvares](https://github.com/LucasAlvaresA).

All titles, trademarks and images belong to their respective owners. This is an independent, non-commercial project made for the love of games and the memory of everyone who played them.
