import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Game Gear";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "sonic-the-hedgehog-gg": {
        releaseDate: L("December 1991 (Japan)", "Dezembro de 1991 (Japão)"),
        publisher: "Sega",
        developer: "Ancient",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Sonic races through Green Hill and beyond to stop Dr. Robotnik, scaled down for the Game Gear's smaller screen. Despite the reduced view, it kept the speed and bounce that made the Mega Drive original a sensation.",
            "Sonic corre por Green Hill e além para deter o Dr. Robotnik, adaptado para a tela menor do Game Gear. Apesar da visão reduzida, manteve a velocidade e o impulso que fizeram do original de Mega Drive um fenômeno.",
        ),
        trivia: T(
            [
                "It was developed by Ancient, a studio founded by Yuzo Koshiro.",
                "The game adapts the 1991 Mega Drive title for the handheld.",
                "It arrived a year after the Game Gear's Japanese launch and became one of the system's signature games.",
            ],
            [
                "Foi desenvolvido pela Ancient, um estúdio fundado por Yuzo Koshiro.",
                "O jogo adapta o título de Mega Drive de 1991 para o portátil.",
                "Chegou um ano após o lançamento japonês do Game Gear e se tornou um dos jogos símbolo do sistema.",
            ],
        ),
    },
    "shinobi-gg": {
        releaseDate: L("1991 (Japan)", "1991 (Japão)"),
        publisher: "Sega",
        developer: "Sega",
        genre: L("Action", "Ação"),
        description: L(
            "Joe Musashi fights through armed enemies and rescues hostages in a handheld take on the arcade classic. Its shuriken-throwing action and precise jumps translated well to the Game Gear's screen.",
            "Joe Musashi enfrenta inimigos armados e resgata reféns em uma versão portátil do clássico de arcade. Sua ação de arremessar shurikens e saltos precisos funcionaram bem na tela do Game Gear.",
        ),
        trivia: T(
            [
                "It adapts the 1987 arcade game Shinobi for the Game Gear.",
                "The series stars ninja Joe Musashi.",
                "The Game Gear version was released in 1991.",
            ],
            [
                "Adapta o arcade Shinobi, de 1987, para o Game Gear.",
                "A série tem como protagonista o ninja Joe Musashi.",
                "A versão para Game Gear foi lançada em 1991.",
            ],
        ),
    },
    "streets-of-rage-2-gg": {
        releaseDate: L("1993 (North America)", "1993 (América do Norte)"),
        publisher: "Sega",
        developer: "Sega",
        genre: L("Beat 'em up", "Briga de rua"),
        description: L(
            "Axel, Blaze and their allies clean up the streets in a handheld version of the Mega Drive brawler. The Game Gear port trims the screen and the multiplayer, but keeps the series' punchy combat and club-ready soundtrack.",
            "Axel, Blaze e seus aliados limpam as ruas em uma versão portátil do beat 'em up de Mega Drive. A conversão para Game Gear reduz a tela e o multiplayer, mas mantém o combate impactante e a trilha sonora digna de balada.",
        ),
        trivia: T(
            [
                "It adapts the 1992 Mega Drive game Streets of Rage 2.",
                "The Game Gear version is single-player only.",
                "The Mega Drive original added Max Thunder and Skate to the roster.",
            ],
            [
                "Adapta Streets of Rage 2, de 1992, lançado para Mega Drive.",
                "A versão para Game Gear é apenas para um jogador.",
                "O original de Mega Drive adicionou Max Thunder e Skate ao elenco.",
            ],
        ),
    },
    columns: {
        releaseDate: L("October 6, 1990 (Japan)", "6 de outubro de 1990 (Japão)"),
        publisher: "Sega",
        developer: "Sega",
        genre: L("Puzzle", "Quebra-cabeça"),
        description: L(
            "Columns of coloured jewels fall from above, and players rearrange them to line up matching sets before the stack reaches the top. Its calm, methodical pace made it a natural fit for the Game Gear's portable library.",
            "Colunas de joias coloridas caem de cima, e os jogadores as reorganizam para alinhar conjuntos iguais antes que a pilha chegue ao topo. Seu ritmo calmo e metódico o tornou uma escolha natural para a biblioteca portátil do Game Gear.",
        ),
        trivia: T(
            [
                "It was a launch title for the Game Gear in Japan and North America.",
                "The game is based on Sega's 1990 arcade puzzle title.",
                "It was designed as a more relaxed alternative to faster falling-block games.",
            ],
            [
                "Foi um título de lançamento do Game Gear no Japão e na América do Norte.",
                "O jogo é baseado no título de quebra-cabeça de arcade da Sega de 1990.",
                "Foi concebido como uma alternativa mais relaxada aos jogos de blocos mais rápidos.",
            ],
        ),
    },
};
