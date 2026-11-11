import type { GameSummary } from "../games";

export const dreamcastGames = [
    {
        id: "sonic-adventure",
        title: "Sonic Adventure",
        coverImage: "/images/dreamcast-sonic-adventure.jpg",
        releaseYear: 1998,
        platform: "Dreamcast",
    },
    {
        id: "shenmue",
        title: "Shenmue",
        coverImage: "/images/dreamcast-shenmue.jpg",
        releaseYear: 1999,
        platform: "Dreamcast",
    },
    {
        id: "soulcalibur",
        title: "Soulcalibur",
        coverImage: "/images/dreamcast-soulcalibur.jpg",
        releaseYear: 1999,
        platform: "Dreamcast",
    },
    {
        id: "jet-set-radio",
        title: "Jet Set Radio",
        coverImage: "/images/dreamcast-jet-set-radio.jpg",
        releaseYear: 2000,
        platform: "Dreamcast",
    },
] satisfies GameSummary[];
