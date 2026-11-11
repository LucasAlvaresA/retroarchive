import type { GameSummary } from "../games";

export const playstation2Games = [
    {
        id: "metal-gear-solid-2",
        title: "Metal Gear Solid 2: Sons of Liberty",
        coverImage: "/images/ps2-mgs2.jpg",
        releaseYear: 2001,
        platform: "PlayStation 2",
    },
    {
        id: "gta-san-andreas",
        title: "Grand Theft Auto: San Andreas",
        coverImage: "/images/ps2-gta-sa.jpg",
        releaseYear: 2004,
        platform: "PlayStation 2",
    },
    {
        id: "resident-evil-4",
        title: "Resident Evil 4",
        coverImage: "/images/ps2-re-4.jpg",
        releaseYear: 2005,
        platform: "PlayStation 2",
    },
    {
        id: "shadow-of-the-colossus",
        title: "Shadow of the Colossus",
        coverImage: "/images/ps2-shadow-of-the-colossus.jpg",
        releaseYear: 2005,
        platform: "PlayStation 2",
    },
] satisfies GameSummary[];
