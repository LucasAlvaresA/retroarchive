import type { GameSummary } from "../games";

export const megaDriveGames = [
    {
        id: "sonic-the-hedgehog",
        title: "Sonic the Hedgehog",
        coverImage: "/images/games/game-09.png",
        releaseYear: 1991,
        platform: "Mega Drive",
    },
    {
        id: "sonic-the-hedgehog-2",
        title: "Sonic the Hedgehog 2",
        coverImage: "/images/games/game-07.png",
        releaseYear: 1992,
        platform: "Mega Drive",
    },
    {
        id: "streets-of-rage-2",
        title: "Streets of Rage 2",
        coverImage: "/images/games/game-08.webp",
        releaseYear: 1992,
        platform: "Mega Drive",
    },
    {
        id: "gunstar-heroes",
        title: "Gunstar Heroes",
        coverImage: "/images/games/megadrive-gunstar-heroes.jpg",
        releaseYear: 1993,
        platform: "Mega Drive",
    },
] satisfies GameSummary[];
