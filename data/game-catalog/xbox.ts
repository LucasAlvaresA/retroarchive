import type { GameSummary } from "../games";

export const xboxGames = [
    {
        id: "halo-combat-evolved",
        title: "Halo: Combat Evolved",
        coverImage: "/images/games/xbox-halo.jpg",
        releaseYear: 2001,
        platform: "Xbox",
    },
    {
        id: "kotor",
        title: "Star Wars: Knights of the Old Republic",
        coverImage: "/images/games/xbox-star-wars.jpg",
        releaseYear: 2003,
        platform: "Xbox",
    },
    {
        id: "ninja-gaiden",
        title: "Ninja Gaiden",
        coverImage: "/images/games/xbox-ninja-gaiden.jpg",
        releaseYear: 2004,
        platform: "Xbox",
    },
    {
        id: "fable",
        title: "Fable",
        coverImage: "/images/games/xbox-fable.jpg",
        releaseYear: 2004,
        platform: "Xbox",
    },
] satisfies GameSummary[];
