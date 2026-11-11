import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "SNES";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "super-mario-world": {
        releaseDate: L("November 21, 1990 (Japan)", "21 de novembro de 1990 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario journeys through Dinosaur Land with a new companion, Yoshi. A sprawling map, hidden exits and inventive power-ups make this 16-bit adventure a landmark in the genre.",
            "Mario viaja pela Terra dos Dinossauros com seu novo companheiro, Yoshi. Um mapa extenso, saídas secretas e power-ups inventivos fazem desta aventura 16-bit um marco do gênero.",
        ),
        trivia: T(
            [
                "Yoshi made his first appearance in this game.",
                "Shigeru Miyamoto produced the game, with Takashi Tezuka directing.",
                "The game launched alongside the Super Famicom in Japan.",
            ],
            [
                "Yoshi fez sua primeira aparição neste jogo.",
                "Shigeru Miyamoto produziu o jogo, com direção de Takashi Tezuka.",
                "O jogo foi lançado junto com o Super Famicom no Japão.",
            ],
        ),
    },
    "a-link-to-the-past": {
        releaseDate: L("November 21, 1991 (Japan)", "21 de novembro de 1991 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link's quest spans the Light World and the Dark World, weaving dungeon puzzles, exploration and memorable discoveries into one richly connected adventure.",
            "A jornada de Link atravessa o Mundo da Luz e o Mundo das Trevas, unindo quebra-cabeças de masmorra, exploração e descobertas marcantes em uma aventura ricamente conectada.",
        ),
        trivia: T(
            [
                "The parallel-world structure became an influential series hallmark.",
                "Takashi Tezuka directed the game, with Kensuke Tanabe among its scenario designers.",
                "The Japanese release preceded the North American release by several months.",
            ],
            [
                "A estrutura de mundos paralelos tornou-se uma marca influente da série.",
                "Takashi Tezuka dirigiu o jogo, com Kensuke Tanabe entre os roteiristas.",
                "O lançamento japonês precedeu o norte-americano em vários meses.",
            ],
        ),
    },
    "super-metroid": {
        releaseDate: L("March 19, 1994 (Japan)", "19 de março de 1994 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus returns to Zebes in a dense, atmospheric adventure built around exploration, upgrades and environmental storytelling. Its interconnected world set a benchmark for the genre.",
            "Samus retorna a Zebes em uma aventura densa e atmosférica construída em torno de exploração, melhorias e narrativa ambiental. Seu mundo interconectado se tornou referência para o gênero.",
        ),
        trivia: T(
            [
                "It is often cited as one of the finest examples of the 'Metroidvania' design style.",
                "The game's expressive animation and sound design helped sell the isolation of Zebes.",
            ],
            [
                "É frequentemente citado como um dos melhores exemplos do estilo de design 'Metroidvania'.",
                "A animação expressiva e o design de som ajudaram a transmitir o isolamento de Zebes.",
            ],
        ),
    },
    "chrono-trigger": {
        releaseDate: L("March 11, 1995 (Japan)", "11 de março de 1995 (Japão)"),
        publisher: "Square",
        developer: "Square",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A group of unlikely heroes travels across eras to prevent a catastrophe that could erase the future. Time travel, memorable characters and multiple endings made it a landmark RPG.",
            "Um grupo improvável de heróis viaja entre eras para evitar uma catástrofe capaz de apagar o futuro. Viagem no tempo, personagens marcantes e múltiplos finais fizeram dele um RPG histórico.",
        ),
        trivia: T(
            [
                "It was created by a celebrated team including Hironobu Sakaguchi, Yuji Horii and Akira Toriyama.",
                "The game features more than a dozen different endings.",
            ],
            [
                "Foi criado por uma equipe de destaque que incluía Hironobu Sakaguchi, Yuji Horii e Akira Toriyama.",
                "O jogo tem mais de uma dúzia de finais diferentes.",
            ],
        ),
    },
};
