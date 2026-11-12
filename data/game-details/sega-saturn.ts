import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Sega Saturn";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "nights-into-dreams": {
        releaseDate: L("July 5, 1996 (Japan)", "5 de julho de 1996 (Japão)"),
        publisher: "Sega",
        developer: "Sonic Team",
        genre: L("Action", "Ação"),
        description: L(
            "A visitor from the dream world, NiGHTS flies through looping courses to free the dreams of two children from the nightmare creature Wizeman. Its graceful flight and dreamlike presentation made it the Sega Saturn's signature experience.",
            "Vindo do mundo dos sonhos, NiGHTS voa por percursos em loop para libertar os sonhos de duas crianças da criatura pesadelo Wizeman. Seu voo gracioso e apresentação onírica fizeram dele a experiência símbolo do Sega Saturn.",
        ),
        trivia: T(
            [
                "Sonic Team designed it around the Saturn's analog 3D Control Pad.",
                "It was produced by Yuji Naka and directed by Naoto Ohshima.",
                "Its soundtrack was composed by Naofumi Hataya and Tomoko Sasaki.",
            ],
            [
                "A Sonic Team o projetou em torno do controle analógico 3D do Saturn.",
                "Foi produzido por Yuji Naka e dirigido por Naoto Ohshima.",
                "Sua trilha sonora foi composta por Naofumi Hataya e Tomoko Sasaki.",
            ],
        ),
    },
    "panzer-dragoon-saga": {
        releaseDate: L("January 29, 1998 (Japan)", "29 de janeiro de 1998 (Japão)"),
        publisher: "Sega",
        developer: "Team Andromeda",
        genre: L("Role-playing", "RPG"),
        description: L(
            "Edge and his dragon journey across a dying world in a role-playing game built on the Panzer Dragoon universe. Its tactical combat, haunting atmosphere and mature story closed out the Saturn era with unusual ambition.",
            "Edge e seu dragão atravessam um mundo moribundo em um RPG ambientado no universo Panzer Dragoon. Seu combate tático, atmosfera melancólica e história madura encerraram a era Saturn com ambição incomum.",
        ),
        trivia: T(
            [
                "It shipped on four CDs, an unusually large release for its time.",
                "It was developed by Team Andromeda, the studio behind Panzer Dragoon and Zwei.",
                "The game became one of the Saturn's rarest and most sought-after titles.",
            ],
            [
                "Foi lançado em quatro CDs, um lançamento incomumente grande para a época.",
                "Foi desenvolvido pela Team Andromeda, o estúdio de Panzer Dragoon e Zwei.",
                "O jogo se tornou um dos títulos mais raros e procurados do Saturn.",
            ],
        ),
    },
    "virtua-fighter-2": {
        releaseDate: L("1995 (Japan)", "1995 (Japão)"),
        publisher: "Sega",
        developer: "Sega AM2",
        genre: L("Fighting", "Luta"),
        description: L(
            "Akira, Pai, Sarah and the rest of the roster return in a faster, more polished 3D fighter. The Saturn port became a technical showcase for the console and one of its best-selling games.",
            "Akira, Pai, Sarah e o resto do elenco retornam em um jogo de luta 3D mais rápido e polido. A versão para Saturn se tornou uma demonstração técnica do console e um dos seus jogos mais vendidos.",
        ),
        trivia: T(
            [
                "It was directed by Yu Suzuki and developed by Sega AM2.",
                "The Saturn version offered a high-resolution mode that ran at 60 frames per second.",
                "The arcade original ran on Sega's Model 2 hardware.",
            ],
            [
                "Foi dirigido por Yu Suzuki e desenvolvido pela Sega AM2.",
                "A versão Saturn oferecia um modo de alta resolução a 60 quadros por segundo.",
                "O arcade original rodava no hardware Model 2 da Sega.",
            ],
        ),
    },
    "radiant-silvergun": {
        releaseDate: L("1998 (Japan)", "1998 (Japão)"),
        publisher: "ESP",
        developer: "Treasure",
        genre: L("Shoot 'em up", "Tiro e nave"),
        description: L(
            "A vertically scrolling shooter with seven weapons that level up as they are used, Radiant Silvergun rewards precision and route planning. Its elaborate scoring and cinematic presentation turned it into a cult classic of the genre.",
            "Um shooter de rolagem vertical com sete armas que evoluem conforme são usadas, Radiant Silvergun recompensa precisão e planejamento de rota. Sua pontuação elaborada e apresentação cinematográfica o tornaram um clássico cult do gênero.",
        ),
        trivia: T(
            [
                "It was developed by Treasure and directed by Hiroshi Iuchi.",
                "The Saturn version was released only in Japan.",
                "It was later ported to Xbox Live Arcade in 2011.",
            ],
            [
                "Foi desenvolvido pela Treasure e dirigido por Hiroshi Iuchi.",
                "A versão para Saturn foi lançada apenas no Japão.",
                "Mais tarde, recebeu uma versão para Xbox Live Arcade em 2011.",
            ],
        ),
    },
};
