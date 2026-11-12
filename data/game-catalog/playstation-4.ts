import type { GameSummary } from "../games";

export const playstation4Games = [
    {
        id: "bloodborne",
        title: "Bloodborne",
        coverImage: "/images/games/ps4-bloodborne.jpg",
        releaseYear: 2015,
        platform: "PlayStation 4",
    },
    {
        id: "witcher-3",
        title: "The Witcher 3: Wild Hunt",
        coverImage: "/images/games/ps4-the-witcher-3.jpg",
        releaseYear: 2015,
        platform: "PlayStation 4",
    },
    {
        id: "god-of-war-2018",
        title: "God of War",
        coverImage: "/images/games/ps4-gow.jpg",
        releaseYear: 2018,
        platform: "PlayStation 4",
    },
    {
        id: "red-dead-redemption-2",
        title: "Red Dead Redemption 2",
        coverImage: "/images/games/ps4-rdr2.jpg",
        releaseYear: 2018,
        platform: "PlayStation 4",
    },
] satisfies GameSummary[];
