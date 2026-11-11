import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "NES";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "super-mario-bros": {
        releaseDate: L("September 13, 1985 (Japan)", "13 de setembro de 1985 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D4",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario and Luigi set out across the Mushroom Kingdom to rescue Princess Toadstool from Bowser. Its precise controls, secret routes and inventive level design helped define the side-scrolling platform game.",
            "Mario e Luigi atravessam o Reino dos Cogumelos para resgatar a Princesa Toadstool de Bowser. Controles precisos, rotas secretas e um design de fases inventivo ajudaram a definir o jogo de plataforma de rolagem lateral.",
        ),
        trivia: T(
            [
                "The game was designed by Shigeru Miyamoto and Takashi Tezuka.",
                "Its original Japanese release was for the Famicom in 1985.",
                "The now-iconic theme was composed by Koji Kondo.",
            ],
            [
                "O jogo foi criado por Shigeru Miyamoto e Takashi Tezuka.",
                "Seu lançamento original japonês foi para o Famicom, em 1985.",
                "O tema hoje icônico foi composto por Koji Kondo.",
            ],
        ),
    },
    "the-legend-of-zelda": {
        releaseDate: L("February 21, 1986 (Japan)", "21 de fevereiro de 1986 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D4",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "A young hero explores the land of Hyrule, searches for the fragments of the Triforce and faces the forces of Ganon. Its open-ended exploration made discovery part of the adventure.",
            "Um jovem herói explora a terra de Hyrule, busca os fragmentos da Triforce e enfrenta as forças de Ganon. Sua exploração aberta fez da descoberta parte da aventura.",
        ),
        trivia: T(
            [
                "It was first released in Japan for the Famicom Disk System.",
                "The original Japanese version used a rewritable disk format.",
                "It was among the early console games to save progress with a battery-backed cartridge in its international NES release.",
            ],
            [
                "Foi lançado primeiro no Japão para o Famicom Disk System.",
                "A versão japonesa original usava um formato de disco regravável.",
                "Estava entre os primeiros jogos de console a salvar o progresso com uma bateria no cartucho na versão internacional para NES.",
            ],
        ),
    },
    "mega-man": {
        releaseDate: L("December 17, 1987 (Japan)", "17 de dezembro de 1987 (Japão)"),
        publisher: "Capcom",
        developer: "Capcom",
        genre: L("Action-platformer", "Ação e plataforma"),
        description: L(
            "The original Blue Bomber takes on the Robot Masters created by Dr. Wily. Choosing the order of stages and gaining each boss's weapon gave the series its distinctive strategic rhythm.",
            "O Blue Bomber original enfrenta os Robot Masters criados pelo Dr. Wily. Escolher a ordem das fases e ganhar a arma de cada chefe deu à série seu ritmo estratégico característico.",
        ),
        trivia: T(
            [
                "The game was directed by Akira Kitamura, with character design by Keiji Inafune.",
                "Defeated Robot Masters grant weapons that can be used in other stages.",
                "The series is known as Rockman in Japan.",
            ],
            [
                "O jogo foi dirigido por Akira Kitamura, com design de personagens de Keiji Inafune.",
                "Os Robot Masters derrotados concedem armas que podem ser usadas em outras fases.",
                "No Japão, a série é conhecida como Rockman.",
            ],
        ),
    },
    "metroid": {
        releaseDate: L("August 6, 1986 (Japan)", "6 de agosto de 1986 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus Aran descends into the labyrinth of Zebes to stop the Space Pirates and the Metroids. Its lonely atmosphere and open-ended exploration became a blueprint for an entire genre.",
            "Samus Aran desce ao labirinto de Zebes para deter os Piratas Espaciais e os Metroids. Sua atmosfera solitária e exploração aberta se tornaram o modelo de um gênero inteiro.",
        ),
        trivia: T(
            [
                "The game introduced Samus Aran, one of the first major female protagonists in console gaming.",
                "Its non-linear structure rewarded backtracking and secret discovery.",
            ],
            [
                "O jogo apresentou Samus Aran, uma das primeiras grandes protagonistas femininas dos consoles.",
                "Sua estrutura não linear recompensava o retorno a áreas anteriores e a descoberta de segredos.",
            ],
        ),
    },
};
