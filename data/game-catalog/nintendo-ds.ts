import type { GameSummary } from "../games";

export const nintendoDsGames = [
    {
        id: "mario-kart-ds",
        title: "Mario Kart DS",
        coverImage: "/images/ds-mario-kart-ds.jpg",
        releaseYear: 2005,
        platform: "Nintendo DS",
    },
    {
        id: "new-super-mario-bros-ds",
        title: "New Super Mario Bros.",
        coverImage: "/images/ds-new-super-mario-bros.jpg",
        releaseYear: 2006,
        platform: "Nintendo DS",
    },
    {
        id: "pokemon-diamond-pearl",
        title: "Pokémon Diamond and Pearl",
        coverImage: "/images/ds-pokemon-diamond.jpg",
        releaseYear: 2006,
        platform: "Nintendo DS",
    },
    {
        id: "phantom-hourglass",
        title: "The Legend of Zelda: Phantom Hourglass",
        coverImage: "/images/ds-zelda-phantom-hourglass.jpg",
        releaseYear: 2007,
        platform: "Nintendo DS",
    },
] satisfies GameSummary[];
