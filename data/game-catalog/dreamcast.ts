import type { GameSummary } from "../games";

export const dreamcastGames = [
    {
        id: "sonic-adventure",
        title: "Sonic Adventure",
        coverImage: "/images/games/dreamcast-sonic-adventure.jpg",
        releaseYear: 1998,
        platform: "Dreamcast",
    },
    {
        id: "shenmue",
        title: "Shenmue",
        coverImage: "/images/games/dreamcast-shenmue.jpg",
        releaseYear: 1999,
        platform: "Dreamcast",
    },
    {
        id: "soulcalibur",
        title: "Soulcalibur",
        coverImage: "/images/games/dreamcast-soulcalibur.jpg",
        releaseYear: 1999,
        platform: "Dreamcast",
    },
    {
        id: "jet-set-radio",
        title: "Jet Set Radio",
        coverImage: "/images/games/dreamcast-jet-set-radio.jpg",
        releaseYear: 2000,
        platform: "Dreamcast",
    },
] satisfies GameSummary[];
