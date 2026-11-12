import type { GameDetails, GameSummary, Platform } from "./games";

type GameDetailsModule = {
    gameDetails: Record<string, GameDetails>;
};

const detailLoaders: Record<Platform, () => Promise<GameDetailsModule>> = {
    "Atari 2600": () => import("./game-details/atari-2600"),
    NES: () => import("./game-details/nes"),
    "Atari 7800": () => import("./game-details/atari-7800"),
    "Master System": () => import("./game-details/master-system"),
    "Mega Drive": () => import("./game-details/mega-drive"),
    "Game Boy": () => import("./game-details/game-boy"),
    SNES: () => import("./game-details/snes"),
    "Neo Geo AES": () => import("./game-details/neo-geo-aes"),
    "Game Gear": () => import("./game-details/game-gear"),
    "Sega Saturn": () => import("./game-details/sega-saturn"),
    PlayStation: () => import("./game-details/playstation"),
    "Nintendo 64": () => import("./game-details/nintendo-64"),
    Dreamcast: () => import("./game-details/dreamcast"),
    "PlayStation 2": () => import("./game-details/playstation-2"),
    GameCube: () => import("./game-details/gamecube"),
    Xbox: () => import("./game-details/xbox"),
    "Game Boy Advance": () => import("./game-details/game-boy-advance"),
    "Nintendo DS": () => import("./game-details/nintendo-ds"),
    "PlayStation Portable": () =>
        import("./game-details/playstation-portable"),
    "Xbox 360": () => import("./game-details/xbox-360"),
    "PlayStation 3": () => import("./game-details/playstation-3"),
    Wii: () => import("./game-details/wii"),
    "Nintendo 3DS": () => import("./game-details/nintendo-3ds"),
    "Wii U": () => import("./game-details/wii-u"),
    "PlayStation 4": () => import("./game-details/playstation-4"),
    "Xbox One": () => import("./game-details/xbox-one"),
    "Nintendo Switch": () => import("./game-details/nintendo-switch"),
    "Xbox Series S/X": () => import("./game-details/xbox-series-s-x"),
    "PlayStation 5": () => import("./game-details/playstation-5"),
    "Nintendo Switch 2": () => import("./game-details/nintendo-switch-2"),
};

export async function getGameDetails(
    game: Pick<GameSummary, "id" | "platform">,
): Promise<GameDetails> {
    const { gameDetails } = await detailLoaders[game.platform]();
    const details = gameDetails[game.id];

    if (!details) {
        throw new Error(
            `No details found for game "${game.id}" on ${game.platform}.`,
        );
    }

    return details;
}
