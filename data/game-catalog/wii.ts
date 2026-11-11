import type { GameSummary } from "../games";

export const wiiGames = [
    {
        id: "wii-sports",
        title: "Wii Sports",
        coverImage: "/images/wii-wii-sports.jpg",
        releaseYear: 2006,
        platform: "Wii",
    },
    {
        id: "twilight-princess",
        title: "The Legend of Zelda: Twilight Princess",
        coverImage: "/images/wii-zelda-twilight-princess.jpg",
        releaseYear: 2006,
        platform: "Wii",
    },
    {
        id: "super-mario-galaxy",
        title: "Super Mario Galaxy",
        coverImage: "/images/wii-super-mario-galaxy.jpg",
        releaseYear: 2007,
        platform: "Wii",
    },
    {
        id: "xenoblade-chronicles",
        title: "Xenoblade Chronicles",
        coverImage: "/images/wii-xenoblade.jpg",
        releaseYear: 2010,
        platform: "Wii",
    },
] satisfies GameSummary[];
