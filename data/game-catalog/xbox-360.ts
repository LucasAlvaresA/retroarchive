import type { GameSummary } from "../games";

export const xbox360Games = [
    {
        id: "gears-of-war",
        title: "Gears of War",
        coverImage: "/images/games/x360-gears-of-war.jpg",
        releaseYear: 2006,
        platform: "Xbox 360",
    },
    {
        id: "mass-effect",
        title: "Mass Effect",
        coverImage: "/images/games/x360-mass-effect.jpg",
        releaseYear: 2007,
        platform: "Xbox 360",
    },
    {
        id: "halo-3",
        title: "Halo 3",
        coverImage: "/images/games/x360-halo-3.jpg",
        releaseYear: 2007,
        platform: "Xbox 360",
    },
    {
        id: "red-dead-redemption",
        title: "Red Dead Redemption",
        coverImage: "/images/games/x360-rdr.jpg",
        releaseYear: 2010,
        platform: "Xbox 360",
    },
] satisfies GameSummary[];
