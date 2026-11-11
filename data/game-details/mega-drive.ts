import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Mega Drive";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "sonic-the-hedgehog": {
        releaseDate: L("June 23, 1991 (North America)", "23 de junho de 1991 (América do Norte)"),
        publisher: "Sega",
        developer: "Sonic Team",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Sega's speedy mascot bursts through loop-filled landscapes to free animals trapped by Dr. Robotnik. Its momentum-driven stages and vivid art established a new platforming icon.",
            "O mascote veloz da Sega atravessa cenários cheios de loops para libertar animais presos pelo Dr. Robotnik. Fases movidas por impulso e arte vibrante estabeleceram um novo ícone dos platformers.",
        ),
        trivia: T(
            [
                "The game was created by a team led by programmer Yuji Naka and designer Hirokazu Yasuhara.",
                "Naoto Ohshima designed Sonic.",
                "The Japanese Mega Drive release followed in July 1991.",
            ],
            [
                "O jogo foi criado por uma equipe liderada pelo programador Yuji Naka e pelo designer Hirokazu Yasuhara.",
                "Naoto Ohshima desenhou Sonic.",
                "O lançamento japonês para Mega Drive veio em julho de 1991.",
            ],
        ),
    },
    "sonic-the-hedgehog-2": {
        releaseDate: L("November 21, 1992 (North America)", "21 de novembro de 1992 (América do Norte)"),
        publisher: "Sega",
        developer: "Sega Technical Institute",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Sonic races through spectacular zones with Tails at his side, chasing Dr. Robotnik and the Chaos Emeralds. Its sense of speed and bold level design became central to the series identity.",
            "Sonic cruza zonas espetaculares ao lado de Tails, perseguindo o Dr. Robotnik e as Esmeraldas do Caos. A sensação de velocidade e o design ousado das fases tornaram-se centrais à identidade da série.",
        ),
        trivia: T(
            [
                "Miles 'Tails' Prower debuted as a playable companion.",
                "The game introduced the Spin Dash move.",
                "A coordinated global launch was promoted as 'Sonic 2sday'.",
            ],
            [
                "Miles 'Tails' Prower estreou como companheiro jogável.",
                "O jogo introduziu o movimento Spin Dash.",
                "Um lançamento global coordenado foi promovido como 'Sonic 2sday'.",
            ],
        ),
    },
    "streets-of-rage-2": {
        releaseDate: L("December 20, 1992 (Japan)", "20 de dezembro de 1992 (Japão)"),
        publisher: "Sega",
        developer: "Sega; Ancient",
        genre: L("Beat 'em up", "Beat 'em up"),
        description: L(
            "Four fighters take to the streets to stop the return of crime boss Mr. X. Responsive combat, expressive pixel animation and Yuzo Koshiro's electronic score made it a co-op favorite.",
            "Quatro lutadores tomam as ruas para impedir o retorno do chefão do crime Mr. X. Combate responsivo, animação expressiva em pixel art e a trilha eletrônica de Yuzo Koshiro fizeram dele um favorito do co-op.",
        ),
        trivia: T(
            [
                "The soundtrack was composed by Yuzo Koshiro, with Motohiro Kawashima.",
                "Skate and Max join returning characters Axel and Blaze.",
                "The Japanese title is Bare Knuckle II: Shitou e no Requiem.",
            ],
            [
                "A trilha sonora foi composta por Yuzo Koshiro, com Motohiro Kawashima.",
                "Skate e Max se juntam aos veteranos Axel e Blaze.",
                "O título japonês é Bare Knuckle II: Shitou e no Requiem.",
            ],
        ),
    },
    "gunstar-heroes": {
        releaseDate: L("September 10, 1993 (Japan)", "10 de setembro de 1993 (Japão)"),
        publisher: "Sega",
        developer: "Treasure",
        genre: L("Run and gun", "Run and gun"),
        description: L(
            "Two brothers take on an empire with combinable weapons and relentlessly inventive set pieces. Fast, flexible combat made it a showcase for the Mega Drive's action potential.",
            "Dois irmãos enfrentam um império com armas combináveis e cenas de ação implacavelmente inventivas. O combate rápido e flexível fez dele uma demonstração do potencial de ação do Mega Drive.",
        ),
        trivia: T(
            [
                "It was the first game developed by Treasure, a studio founded by former Konami staff.",
                "Players can combine two weapon types to create new attacks.",
            ],
            [
                "Foi o primeiro jogo desenvolvido pela Treasure, um estúdio fundado por ex-funcionários da Konami.",
                "Os jogadores podem combinar dois tipos de arma para criar novos ataques.",
            ],
        ),
    },
};
