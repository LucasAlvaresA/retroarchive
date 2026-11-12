import type { GameSummary } from "../games";

export const atari2600Games = [
    {
        id: "adventure-2600",
        title: "Adventure",
        coverImage: "/images/games/atari-2600-adventure.jpg",
        releaseYear: 1980,
        platform: "Atari 2600",
    },
    {
        id: "pitfall",
        title: "Pitfall!",
        coverImage: "/images/games/atari-2600-pitfall.jpg",
        releaseYear: 1982,
        platform: "Atari 2600",
    },
    {
        id: "yars-revenge",
        title: "Yars' Revenge",
        coverImage: "/images/games/atari-2600-yars-revenge.jpg",
        releaseYear: 1982,
        platform: "Atari 2600",
    },
    {
        id: "space-invaders-2600",
        title: "Space Invaders",
        coverImage: "/images/games/atari-2600-space-invaders.jpg",
        releaseYear: 1980,
        platform: "Atari 2600",
    },
] satisfies GameSummary[];
