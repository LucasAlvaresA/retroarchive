import type { GameSummary } from "../games";

export const nintendo3DsGames = [
    {
        id: "super-mario-3d-land",
        title: "Super Mario 3D Land",
        coverImage: "/images/3ds-super-mario-3d-land.jpg",
        releaseYear: 2011,
        platform: "Nintendo 3DS",
    },
    {
        id: "fire-emblem-awakening",
        title: "Fire Emblem: Awakening",
        coverImage: "/images/3ds-fire-emblem.jpg",
        releaseYear: 2012,
        platform: "Nintendo 3DS",
    },
    {
        id: "animal-crossing-new-leaf",
        title: "Animal Crossing: New Leaf",
        coverImage: "/images/3ds-animal-crossing.webp",
        releaseYear: 2012,
        platform: "Nintendo 3DS",
    },
    {
        id: "a-link-between-worlds",
        title: "The Legend of Zelda: A Link Between Worlds",
        coverImage: "/images/3ds-zelda.jpg",
        releaseYear: 2013,
        platform: "Nintendo 3DS",
    },
] satisfies GameSummary[];
