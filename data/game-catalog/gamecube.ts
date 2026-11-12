import type { GameSummary } from "../games";

export const gamecubeGames = [
    {
        id: "super-smash-bros-melee",
        title: "Super Smash Bros. Melee",
        coverImage: "/images/games/gamecube-super-smash-bros-melee.jpg",
        releaseYear: 2001,
        platform: "GameCube",
    },
    {
        id: "metroid-prime",
        title: "Metroid Prime",
        coverImage: "/images/games/gamecube-metroid-prime.jpg",
        releaseYear: 2002,
        platform: "GameCube",
    },
    {
        id: "wind-waker",
        title: "The Legend of Zelda: The Wind Waker",
        coverImage: "/images/games/gamecube-zelda-windwaker.jpg",
        releaseYear: 2002,
        platform: "GameCube",
    },
    {
        id: "mario-kart-double-dash",
        title: "Mario Kart: Double Dash!!",
        coverImage: "/images/games/gamecube-mario-kart-double-dash.jpg",
        releaseYear: 2003,
        platform: "GameCube",
    },
] satisfies GameSummary[];
