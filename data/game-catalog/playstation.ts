import type { GameSummary } from "../games";

export const playstationGames = [
    {
        id: "crash-bandicoot",
        title: "Crash Bandicoot",
        coverImage: "/images/games/ps1-crash.jpg",
        releaseYear: 1996,
        platform: "PlayStation",
    },
    {
        id: "symphony-of-the-night",
        title: "Castlevania: Symphony of the Night",
        coverImage: "/images/games/ps1-castlevania-symphony-of-the-night.jpg",
        releaseYear: 1997,
        platform: "PlayStation",
    },
    {
        id: "final-fantasy-vii",
        title: "Final Fantasy VII",
        coverImage: "/images/games/ps1-ffvii.jpg",
        releaseYear: 1997,
        platform: "PlayStation",
    },
    {
        id: "metal-gear-solid",
        title: "Metal Gear Solid",
        coverImage: "/images/games/ps1-metal-gear-solid.jpg",
        releaseYear: 1998,
        platform: "PlayStation",
    },
] satisfies GameSummary[];
