import type { GameSummary } from "../games";

export const nintendoSwitchGames = [
    {
        id: "breath-of-the-wild",
        title: "The Legend of Zelda: Breath of the Wild",
        coverImage: "/images/switch-zelda-botw.jpg",
        releaseYear: 2017,
        platform: "Nintendo Switch",
    },
    {
        id: "super-mario-odyssey",
        title: "Super Mario Odyssey",
        coverImage: "/images/switch-super-mario-odyssey.jpg",
        releaseYear: 2017,
        platform: "Nintendo Switch",
    },
    {
        id: "smash-ultimate",
        title: "Super Smash Bros. Ultimate",
        coverImage: "/images/switch-super-smash-bros-ultimate.jpg",
        releaseYear: 2018,
        platform: "Nintendo Switch",
    },
    {
        id: "animal-crossing-new-horizons",
        title: "Animal Crossing: New Horizons",
        coverImage: "/images/switch-animal-crossing-new-horizons.jpg",
        releaseYear: 2020,
        platform: "Nintendo Switch",
    },
] satisfies GameSummary[];
