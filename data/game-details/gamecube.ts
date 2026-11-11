import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "GameCube";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "super-smash-bros-melee": {
        releaseDate: L("November 21, 2001 (Japan)", "21 de novembro de 2001 (Japão)"),
        publisher: "Nintendo",
        developer: "HAL Laboratory",
        genre: L("Fighting", "Luta"),
        description: L(
            "Nintendo's mascots collide in a fast, technical party fighter packed with stages, trophies and unlockables. Its speed and depth turned it into a competitive institution.",
            "Os mascotes da Nintendo se enfrentam em um jogo de luta festivo, rápido e técnico, repleto de fases, troféus e desbloqueáveis. Sua velocidade e profundidade o transformaram em uma instituição competitiva.",
        ),
        trivia: T(
            [
                "It launched alongside the GameCube in North America.",
                "The game's competitive scene remained active for decades.",
            ],
            [
                "Foi lançado junto com o GameCube na América do Norte.",
                "A cena competitiva do jogo permaneceu ativa por décadas.",
            ],
        ),
    },
    "metroid-prime": {
        releaseDate: L("November 17, 2002 (North America)", "17 de novembro de 2002 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Retro Studios",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus explores the alien world of Tallon IV in first person, scanning creatures and ruins to piece together its history. Seamless exploration and atmosphere translated Metroid's isolation into 3D.",
            "Samus explora o mundo alienígena de Tallon IV em primeira pessoa, escaneando criaturas e ruínas para reconstruir sua história. A exploração fluida e a atmosfera traduziram o isolamento de Metroid para o 3D.",
        ),
        trivia: T(
            [
                "It was the first 3D entry in the Metroid series.",
                "Retro Studios rebuilt the project after an early internal version struggled.",
            ],
            [
                "Foi a primeira entrada em 3D da série Metroid.",
                "A Retro Studios reconstruiu o projeto depois que uma versão interna inicial enfrentou dificuldades.",
            ],
        ),
    },
    "wind-waker": {
        releaseDate: L("December 13, 2002 (Japan)", "13 de dezembro de 2002 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link sails a vast ocean in search of his sister and the secrets of a drowned kingdom. Its expressive cel-shaded art and sense of discovery turned a bold visual gamble into a timeless adventure.",
            "Link navega por um vasto oceano em busca de sua irmã e dos segredos de um reino submerso. Sua arte expressiva com cel-shading e o senso de descoberta transformaram uma aposta visual ousada em uma aventura atemporal.",
        ),
        trivia: T(
            [
                "The game's art style was initially controversial after an earlier realistic demo.",
                "Its Great Sea is filled with islands, ruins and optional discoveries.",
            ],
            [
                "O estilo artístico foi inicialmente polêmico após uma demonstração realista anterior.",
                "Seu Grande Mar é repleto de ilhas, ruínas e descobertas opcionais.",
            ],
        ),
    },
    "mario-kart-double-dash": {
        releaseDate: L("November 7, 2003 (Japan)", "7 de novembro de 2003 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Racing", "Corrida"),
        description: L(
            "Two characters share every kart, swapping drivers and special items on the fly. The team-based twist gave the series one of its most distinctive multiplayer entries.",
            "Dois personagens dividem cada kart, alternando motorista e itens especiais em tempo real. A reviravolta em duplas deu à série uma de suas entradas multiplayer mais marcantes.",
        ),
        trivia: T(
            [
                "Each pair of characters had a unique special item.",
                "The game supported LAN play with additional adapters.",
            ],
            [
                "Cada dupla de personagens tinha um item especial exclusivo.",
                "O jogo suportava jogo em rede local com adaptadores adicionais.",
            ],
        ),
    },
};
