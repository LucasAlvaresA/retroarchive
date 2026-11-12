import type { GameSummary } from "../games";

export const wiiUGames = [
    {
        id: "mario-kart-8",
        title: "Mario Kart 8",
        coverImage: "/images/games/wiiu-mario-kart-8.jpg",
        releaseYear: 2014,
        platform: "Wii U",
    },
    {
        id: "super-mario-3d-world",
        title: "Super Mario 3D World",
        coverImage: "/images/games/wiiu-super-mario-3d-world.jpg",
        releaseYear: 2013,
        platform: "Wii U",
    },
    {
        id: "bayonetta-2",
        title: "Bayonetta 2",
        coverImage: "/images/games/wiiu-bayonetta-2.jpg",
        releaseYear: 2014,
        platform: "Wii U",
    },
    {
        id: "splatoon",
        title: "Splatoon",
        coverImage: "/images/games/wiiu-splatoon.jpg",
        releaseYear: 2015,
        platform: "Wii U",
    },
] satisfies GameSummary[];
