import type { GameSummary } from "../games";

export const gameBoyGames = [
    {
        id: "tetris",
        title: "Tetris",
        coverImage: "/images/gameboy-tetris.jpg",
        releaseYear: 1989,
        platform: "Game Boy",
    },
    {
        id: "super-mario-land",
        title: "Super Mario Land",
        coverImage: "/images/gameboy-super-mario-land.jpg",
        releaseYear: 1989,
        platform: "Game Boy",
    },
    {
        id: "links-awakening",
        title: "The Legend of Zelda: Link's Awakening",
        coverImage: "/images/gameboy-zelda-links-awakening.jpg",
        releaseYear: 1993,
        platform: "Game Boy",
    },
    {
        id: "pokemon-red-blue",
        title: "Pokémon Red and Blue",
        coverImage: "/images/gameboy-pokemon-red-blue.jpg",
        releaseYear: 1996,
        platform: "Game Boy",
    },
] satisfies GameSummary[];
