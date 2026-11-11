import type { GameDetails, GameSummary, Platform } from "./games";

type GameDetailsModule = {
    gameDetails: Record<string, GameDetails>;
};

const detailLoaders: Record<Platform, () => Promise<GameDetailsModule>> = {
    NES: () => import("./game-details/nes"),
    SNES: () => import("./game-details/snes"),
    "Mega Drive": () => import("./game-details/mega-drive"),
    PlayStation: () => import("./game-details/playstation"),
    "Nintendo 64": () => import("./game-details/nintendo-64"),
    Dreamcast: () => import("./game-details/dreamcast"),
    "PlayStation 2": () => import("./game-details/playstation-2"),
    GameCube: () => import("./game-details/gamecube"),
    Xbox: () => import("./game-details/xbox"),
    "Xbox 360": () => import("./game-details/xbox-360"),
    "PlayStation 3": () => import("./game-details/playstation-3"),
    Wii: () => import("./game-details/wii"),
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
