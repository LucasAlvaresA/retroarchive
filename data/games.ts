import { dreamcastGames } from "./game-catalog/dreamcast";
import { gamecubeGames } from "./game-catalog/gamecube";
import { masterSystemGames } from "./game-catalog/master-system";
import { megaDriveGames } from "./game-catalog/mega-drive";
import { nesGames } from "./game-catalog/nes";
import { nintendo64Games } from "./game-catalog/nintendo-64";
import { nintendoSwitch2Games } from "./game-catalog/nintendo-switch-2";
import { nintendoSwitchGames } from "./game-catalog/nintendo-switch";
import { playstation2Games } from "./game-catalog/playstation-2";
import { playstation3Games } from "./game-catalog/playstation-3";
import { playstation4Games } from "./game-catalog/playstation-4";
import { playstation5Games } from "./game-catalog/playstation-5";
import { playstationGames } from "./game-catalog/playstation";
import { snesGames } from "./game-catalog/snes";
import { wiiGames } from "./game-catalog/wii";
import { wiiUGames } from "./game-catalog/wii-u";
import { xbox360Games } from "./game-catalog/xbox-360";
import { xboxGames } from "./game-catalog/xbox";
import { xboxOneGames } from "./game-catalog/xbox-one";
import { xboxSeriesSXGames } from "./game-catalog/xbox-series-s-x";

export type Platform =
    | "NES"
    | "Master System"
    | "Mega Drive"
    | "SNES"
    | "PlayStation"
    | "Nintendo 64"
    | "Dreamcast"
    | "PlayStation 2"
    | "GameCube"
    | "Xbox"
    | "Xbox 360"
    | "PlayStation 3"
    | "Wii"
    | "Wii U"
    | "PlayStation 4"
    | "Xbox One"
    | "Nintendo Switch"
    | "Xbox Series S/X"
    | "PlayStation 5"
    | "Nintendo Switch 2";

export type Localized = { en: string; pt: string };

export type GameSummary = {
    id: string;
    title: string;
    coverImage?: string;
    releaseYear: number;
    platform: Platform;
};

export type GameDetails = {
    releaseDate: Localized;
    publisher: string;
    developer: string;
    genre: Localized;
    description: Localized;
    trivia: { en: string[]; pt: string[] };
};

export type Game = GameSummary & GameDetails;

export const platformOrder: Platform[] = [
    "NES",
    "Master System",
    "Mega Drive",
    "SNES",
    "PlayStation",
    "Nintendo 64",
    "Dreamcast",
    "PlayStation 2",
    "GameCube",
    "Xbox",
    "Xbox 360",
    "PlayStation 3",
    "Wii",
    "Wii U",
    "PlayStation 4",
    "Xbox One",
    "Nintendo Switch",
    "Xbox Series S/X",
    "PlayStation 5",
    "Nintendo Switch 2",
];

export const platformAccents: Record<Platform, string> = {
    NES: "#e46a6a",
    "Master System": "#f07c6a",
    "Mega Drive": "#5aa9e6",
    SNES: "#ae98ff",
    PlayStation: "#9aa5b8",
    "Nintendo 64": "#d8f27a",
    Dreamcast: "#ff9a62",
    "PlayStation 2": "#7088ff",
    GameCube: "#b58cff",
    Xbox: "#7ee787",
    "Xbox 360": "#a4e86b",
    "PlayStation 3": "#82b4ff",
    Wii: "#e9e6f2",
    "Wii U": "#4dd6c1",
    "PlayStation 4": "#6d8cff",
    "Xbox One": "#7ee787",
    "Nintendo Switch": "#ff6b6b",
    "Xbox Series S/X": "#48d17a",
    "PlayStation 5": "#7ad7ff",
    "Nintendo Switch 2": "#ff5f7e",
};

export const games: GameSummary[] = [
    ...nesGames,
    ...masterSystemGames,
    ...megaDriveGames,
    ...snesGames,
    ...playstationGames,
    ...nintendo64Games,
    ...dreamcastGames,
    ...playstation2Games,
    ...gamecubeGames,
    ...xboxGames,
    ...xbox360Games,
    ...playstation3Games,
    ...wiiGames,
    ...wiiUGames,
    ...playstation4Games,
    ...xboxOneGames,
    ...nintendoSwitchGames,
    ...xboxSeriesSXGames,
    ...playstation5Games,
    ...nintendoSwitch2Games,
];
