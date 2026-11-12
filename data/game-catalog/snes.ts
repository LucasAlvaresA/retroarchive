import type { GameSummary } from "../games";

export const snesGames = [
    {
        id: "super-mario-world",
        title: "Super Mario World",
        coverImage: "/images/games/snes-super-mario-world.jpg",
        releaseYear: 1990,
        platform: "SNES",
    },
    {
        id: "a-link-to-the-past",
        title: "The Legend of Zelda: A Link to the Past",
        coverImage: "/images/games/snes-zelda-a-link-to-the-past.jpg",
        releaseYear: 1991,
        platform: "SNES",
    },
    {
        id: "super-metroid",
        title: "Super Metroid",
        coverImage: "/images/games/snes-super-metroid.jpg",
        releaseYear: 1994,
        platform: "SNES",
    },
    {
        id: "chrono-trigger",
        title: "Chrono Trigger",
        coverImage: "/images/games/snes-chrono-trigger.jpg",
        releaseYear: 1995,
        platform: "SNES",
    },
] satisfies GameSummary[];
