import type { GameSummary } from "../games";

export const masterSystemGames = [
    {
        id: "alex-kidd-in-miracle-world",
        title: "Alex Kidd in Miracle World",
        coverImage: "/images/master-system-alex-kidd.jpg",
        releaseYear: 1986,
        platform: "Master System",
    },
    {
        id: "phantasy-star",
        title: "Phantasy Star",
        coverImage: "/images/master-system-phantasy-star.jpg",
        releaseYear: 1987,
        platform: "Master System",
    },
    {
        id: "wonder-boy-iii-the-dragons-trap",
        title: "Wonder Boy III: The Dragon's Trap",
        coverImage: "/images/master-system-wonder-boy-iii.jpg",
        releaseYear: 1989,
        platform: "Master System",
    },
    {
        id: "sonic-the-hedgehog-8-bit",
        title: "Sonic the Hedgehog (8-bit)",
        coverImage: "/images/master-system-sonic.jpg",
        releaseYear: 1991,
        platform: "Master System",
    },
] satisfies GameSummary[];
