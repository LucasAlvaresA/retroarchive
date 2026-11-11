import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Xbox Series S/X";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "halo-infinite": {
        releaseDate: L("December 8, 2021 (Worldwide)", "8 de dezembro de 2021 (Mundial)"),
        publisher: "Xbox Game Studios",
        developer: "343 Industries",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "Master Chief returns to Zeta Halo armed with a grappling hook and a more open-ended campaign. Its free multiplayer and refined sandbox brought the series back to its roots.",
            "Master Chief retorna a Zeta Halo armado com um gancho e uma campanha mais aberta. Seu multiplayer gratuito e sandbox refinado trouxeram a série de volta às raízes.",
        ),
        trivia: T(
            [
                "It was a launch title for the Xbox Series X|S.",
                "The grappling hook was a new addition to the series' sandbox.",
            ],
            [
                "Foi um título de lançamento do Xbox Series X|S.",
                "O gancho foi uma nova adição ao sandbox da série.",
            ],
        ),
    },
    "forza-horizon-5": {
        releaseDate: L("November 9, 2021 (Worldwide)", "9 de novembro de 2021 (Mundial)"),
        publisher: "Xbox Game Studios",
        developer: "Playground Games",
        genre: L("Racing", "Corrida"),
        description: L(
            "An open-world festival races across Mexico, from deserts and jungles to snow-capped volcanoes. Dynamic seasons and a huge car roster made it a showcase for the new consoles.",
            "Um festival de mundo aberto percorre o México, de desertos e selvas a vulcões cobertos de neve. Estações dinâmicas e um enorme catálogo de carros fizeram dele uma vitrine dos novos consoles.",
        ),
        trivia: T(
            [
                "Its map is the largest in the Forza Horizon series.",
                "The game features ray tracing in its Forzavista showcase mode.",
            ],
            [
                "Seu mapa é o maior da série Forza Horizon.",
                "O jogo apresenta ray tracing no modo de exibição Forzavista.",
            ],
        ),
    },
    "starfield": {
        releaseDate: L("September 6, 2023 (Worldwide)", "6 de setembro de 2023 (Mundial)"),
        publisher: "Bethesda Softworks",
        developer: "Bethesda Game Studios",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A space explorer joins Constellation to uncover the mystery of alien artifacts across more than a thousand planets. Its ship building and freedom of choice carry Bethesda's formula to the stars.",
            "Um explorador espacial se junta à Constelação para desvendar o mistério de artefatos alienígenas em mais de mil planetas. A construção de naves e a liberdade de escolha levam a fórmula da Bethesda às estrelas.",
        ),
        trivia: T(
            [
                "It was Bethesda Game Studios' first new universe in 25 years.",
                "The game includes over a thousand explorable planets.",
            ],
            [
                "Foi o primeiro novo universo da Bethesda Game Studios em 25 anos.",
                "O jogo inclui mais de mil planetas exploráveis.",
            ],
        ),
    },
    "hellblade-2": {
        releaseDate: L("May 21, 2024 (Worldwide)", "21 de maio de 2024 (Mundial)"),
        publisher: "Xbox Game Studios",
        developer: "Ninja Theory",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Senua journeys through Iceland to confront Viking raiders and her own inner voices. Its photogrammetry, binaural audio and cinematic presentation push the Series X|S hardware.",
            "Senua viaja pela Islândia para enfrentar invasores vikings e suas próprias vozes internas. Sua fotogrametria, áudio binaural e apresentação cinematográfica exigem o hardware do Series X|S.",
        ),
        trivia: T(
            [
                "The development team scanned locations in Iceland for its environments.",
                "Its sound design was built around binaural audio to portray Senua's voices.",
            ],
            [
                "A equipe escaneou locações na Islândia para criar seus ambientes.",
                "Seu design de som foi construído em torno de áudio binaural para retratar as vozes de Senua.",
            ],
        ),
    },
};
