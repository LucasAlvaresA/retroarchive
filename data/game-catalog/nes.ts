import type { GameSummary } from "../games";

export const nesGames = [
    {
        id: "super-mario-bros",
        title: "Super Mario Bros.",
        coverImage: "/images/nes-super-mario-bros.png",
        releaseYear: 1985,
        platform: "NES",
    },
    {
        id: "the-legend-of-zelda",
        title: "The Legend of Zelda",
        coverImage: "/images/game-02.png",
        releaseYear: 1986,
        platform: "NES",
    },
    {
        id: "mega-man",
        title: "Mega Man",
        coverImage: "/images/game-03.png",
        releaseYear: 1987,
        platform: "NES",
    },
    {
        id: "metroid",
        title: "Metroid",
        coverImage: "/images/nes-metroid.png",
        releaseYear: 1986,
        platform: "NES",
    },
] satisfies GameSummary[];
