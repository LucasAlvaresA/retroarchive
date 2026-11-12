import { atari2600Games } from "./game-catalog/atari-2600";
import { atari7800Games } from "./game-catalog/atari-7800";
import { dreamcastGames } from "./game-catalog/dreamcast";
import { gameBoyAdvanceGames } from "./game-catalog/game-boy-advance";
import { gameBoyGames } from "./game-catalog/game-boy";
import { gameGearGames } from "./game-catalog/game-gear";
import { gamecubeGames } from "./game-catalog/gamecube";
import { masterSystemGames } from "./game-catalog/master-system";
import { megaDriveGames } from "./game-catalog/mega-drive";
import { neoGeoAesGames } from "./game-catalog/neo-geo-aes";
import { nesGames } from "./game-catalog/nes";
import { nintendo3DsGames } from "./game-catalog/nintendo-3ds";
import { nintendo64Games } from "./game-catalog/nintendo-64";
import { nintendoDsGames } from "./game-catalog/nintendo-ds";
import { nintendoSwitch2Games } from "./game-catalog/nintendo-switch-2";
import { nintendoSwitchGames } from "./game-catalog/nintendo-switch";
import { playstation2Games } from "./game-catalog/playstation-2";
import { playstation3Games } from "./game-catalog/playstation-3";
import { playstation4Games } from "./game-catalog/playstation-4";
import { playstation5Games } from "./game-catalog/playstation-5";
import { playstationPortableGames } from "./game-catalog/playstation-portable";
import { playstationGames } from "./game-catalog/playstation";
import { segaSaturnGames } from "./game-catalog/sega-saturn";
import { snesGames } from "./game-catalog/snes";
import { wiiGames } from "./game-catalog/wii";
import { wiiUGames } from "./game-catalog/wii-u";
import { xbox360Games } from "./game-catalog/xbox-360";
import { xboxGames } from "./game-catalog/xbox";
import { xboxOneGames } from "./game-catalog/xbox-one";
import { xboxSeriesSXGames } from "./game-catalog/xbox-series-s-x";

export type Platform =
    | "Atari 2600"
    | "NES"
    | "Atari 7800"
    | "Master System"
    | "Mega Drive"
    | "Game Boy"
    | "SNES"
    | "Neo Geo AES"
    | "Game Gear"
    | "Sega Saturn"
    | "PlayStation"
    | "Nintendo 64"
    | "Dreamcast"
    | "PlayStation 2"
    | "GameCube"
    | "Xbox"
    | "Game Boy Advance"
    | "Nintendo DS"
    | "PlayStation Portable"
    | "Xbox 360"
    | "PlayStation 3"
    | "Wii"
    | "Nintendo 3DS"
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
    "Atari 2600",
    "NES",
    "Atari 7800",
    "Master System",
    "Mega Drive",
    "Game Boy",
    "SNES",
    "Neo Geo AES",
    "Game Gear",
    "Sega Saturn",
    "PlayStation",
    "Nintendo 64",
    "Dreamcast",
    "PlayStation 2",
    "GameCube",
    "Xbox",
    "Game Boy Advance",
    "Nintendo DS",
    "PlayStation Portable",
    "Xbox 360",
    "PlayStation 3",
    "Wii",
    "Nintendo 3DS",
    "Wii U",
    "PlayStation 4",
    "Xbox One",
    "Nintendo Switch",
    "Xbox Series S/X",
    "PlayStation 5",
    "Nintendo Switch 2",
];

export const platformAccents: Record<Platform, string> = {
    "Atari 2600": "#e8a557",
    NES: "#e46a6a",
    "Atari 7800": "#cf6f5a",
    "Master System": "#f07c6a",
    "Mega Drive": "#5aa9e6",
    "Game Boy": "#9bbc0f",
    SNES: "#ae98ff",
    "Neo Geo AES": "#ff4f5e",
    "Game Gear": "#3f7bd6",
    "Sega Saturn": "#7f8fd6",
    PlayStation: "#9aa5b8",
    "Nintendo 64": "#d8f27a",
    Dreamcast: "#ff9a62",
    "PlayStation 2": "#7088ff",
    GameCube: "#b58cff",
    Xbox: "#7ee787",
    "Game Boy Advance": "#7b5cff",
    "Nintendo DS": "#c4d3e8",
    "PlayStation Portable": "#5f7fff",
    "Xbox 360": "#a4e86b",
    "PlayStation 3": "#82b4ff",
    Wii: "#e9e6f2",
    "Nintendo 3DS": "#ff4fa3",
    "Wii U": "#4dd6c1",
    "PlayStation 4": "#6d8cff",
    "Xbox One": "#7ee787",
    "Nintendo Switch": "#ff6b6b",
    "Xbox Series S/X": "#48d17a",
    "PlayStation 5": "#7ad7ff",
    "Nintendo Switch 2": "#ff5f7e",
};

export const games: GameSummary[] = [
    ...atari2600Games,
    ...nesGames,
    ...atari7800Games,
    ...masterSystemGames,
    ...megaDriveGames,
    ...gameBoyGames,
    ...snesGames,
    ...neoGeoAesGames,
    ...gameGearGames,
    ...segaSaturnGames,
    ...playstationGames,
    ...nintendo64Games,
    ...dreamcastGames,
    ...playstation2Games,
    ...gamecubeGames,
    ...xboxGames,
    ...gameBoyAdvanceGames,
    ...nintendoDsGames,
    ...playstationPortableGames,
    ...xbox360Games,
    ...playstation3Games,
    ...wiiGames,
    ...nintendo3DsGames,
    ...wiiUGames,
    ...playstation4Games,
    ...xboxOneGames,
    ...nintendoSwitchGames,
    ...xboxSeriesSXGames,
    ...playstation5Games,
    ...nintendoSwitch2Games,
];
