import type { GameSummary } from "../games";

export const nintendo64Games = [
    {
        id: "super-mario-64",
        title: "Super Mario 64",
        coverImage: "/images/n64-super-mario-64.jpg",
        releaseYear: 1996,
        platform: "Nintendo 64",
    },
    {
        id: "ocarina-of-time",
        title: "The Legend of Zelda: Ocarina of Time",
        coverImage: "/images/game-14.webp",
        releaseYear: 1998,
        platform: "Nintendo 64",
    },
    {
        id: "goldeneye-007",
        title: "GoldenEye 007",
        coverImage: "/images/n64-goldeneye-007.jpg",
        releaseYear: 1997,
        platform: "Nintendo 64",
    },
    {
        id: "mario-kart-64",
        title: "Mario Kart 64",
        coverImage: "/images/n64-mario-kart-64.jpg",
        releaseYear: 1996,
        platform: "Nintendo 64",
    },
] satisfies GameSummary[];
