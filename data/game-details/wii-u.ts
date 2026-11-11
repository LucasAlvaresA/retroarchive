import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Wii U";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "mario-kart-8": {
        releaseDate: L("May 29, 2014 (Japan)", "29 de maio de 2014 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Racing", "Corrida"),
        description: L(
            "Anti-gravity racing, remixed courses and a sharp soundtrack made Mario Kart 8 one of the series' most polished entries. Its Deluxe edition later became a defining game for the Switch.",
            "Corridas antigravidade, pistas remixadas e uma trilha afiada fizeram de Mario Kart 8 uma das entradas mais polidas da série. Sua edição Deluxe se tornou um jogo definidor do Switch.",
        ),
        trivia: T(
            [
                "It was the first Mario Kart game to feature anti-gravity mechanics.",
                "The Deluxe version on Switch added new characters and battle modes.",
            ],
            [
                "Foi o primeiro Mario Kart com mecânicas de antigravidade.",
                "A versão Deluxe no Switch adicionou novos personagens e modos de batalha.",
            ],
        ),
    },
    "super-mario-3d-world": {
        releaseDate: L("November 21, 2013 (Japan)", "21 de novembro de 2013 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD Tokyo",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario, Luigi, Peach and Toad race through colorful diorama-like stages with cooperative play. Its inventive power-ups and precise level design made it a Wii U highlight.",
            "Mario, Luigi, Peach e Toad correm por fases coloridas como dioramas, com jogo cooperativo. Seus power-ups inventivos e design preciso de fases fizeram dele um destaque do Wii U.",
        ),
        trivia: T(
            [
                "The game introduced the Cat Suit power-up.",
                "It was later ported to the Switch with additional content.",
            ],
            [
                "O jogo introduziu o power-up Traje de Gato.",
                "Mais tarde, foi portado para o Switch com conteúdo adicional.",
            ],
        ),
    },
    "bayonetta-2": {
        releaseDate: L("September 20, 2014 (Japan)", "20 de setembro de 2014 (Japão)"),
        publisher: "Nintendo",
        developer: "PlatinumGames",
        genre: L("Action", "Ação"),
        description: L(
            "The Umbra Witch returns with fluid, over-the-top combat against angels and demons. Nintendo's support helped PlatinumGames deliver one of the genre's most confident sequels.",
            "A Bruxa de Umbra retorna com combate fluido e exagerado contra anjos e demônios. O apoio da Nintendo ajudou a PlatinumGames a entregar uma das sequências mais confiantes do gênero.",
        ),
        trivia: T(
            [
                "Nintendo funded and published the game after the original's studio partnership changed.",
                "It was originally released as a Wii U exclusive.",
            ],
            [
                "A Nintendo financiou e publicou o jogo após mudanças na parceria do estúdio original.",
                "Foi lançado originalmente como exclusivo do Wii U.",
            ],
        ),
    },
    "splatoon": {
        releaseDate: L("May 28, 2015 (Japan)", "28 de maio de 2015 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Third-person shooter", "Tiro em terceira pessoa"),
        description: L(
            "Ink-slinging kids battle for turf in a colorful shooter where painting the ground matters as much as splatting opponents. Its fresh identity made it one of Nintendo's most successful new franchises.",
            "Jovens que espalham tinta disputam território em um shooter colorido onde pintar o chão importa tanto quanto acertar adversários. Sua identidade nova fez dela uma das franquias mais bem-sucedidas da Nintendo.",
        ),
        trivia: T(
            [
                "It was a new intellectual property for Nintendo.",
                "The game's Turf War mode rewards covering more ground than the opposing team.",
            ],
            [
                "Foi uma nova propriedade intelectual da Nintendo.",
                "O modo Turf War recompensa cobrir mais terreno que a equipe adversária.",
            ],
        ),
    },
};
