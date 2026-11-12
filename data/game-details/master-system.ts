import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Master System";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "alex-kidd-in-miracle-world": {
        releaseDate: L("November 1, 1986 (Japan)", "1 de novembro de 1986 (Japão)"),
        publisher: "Sega",
        developer: "Sega",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Alex Kidd travels across Miracle World to rescue Prince Egle and defeat the tyrannical Janken the Great. Its bright stages, vehicle sections and rock-paper-scissors boss fights gave the Master System one of its defining mascots.",
            "Alex Kidd atravessa Miracle World para resgatar o príncipe Egle e derrotar o tirano Janken the Great. Suas fases coloridas, trechos de veículo e batalhas de pedra-papel-tesoura deram ao Master System um de seus mascotes mais marcantes.",
        ),
        trivia: T(
            [
                "Alex Kidd became Sega's mascot before Sonic the Hedgehog arrived.",
                "Boss battles are decided through matches of janken, the Japanese name for rock-paper-scissors.",
                "The game was later built into the Master System II in several markets.",
            ],
            [
                "Alex Kidd se tornou o mascote da Sega antes da chegada de Sonic the Hedgehog.",
                "As batalhas contra chefes são decididas em partidas de janken, o nome japonês para pedra-papel-tesoura.",
                "O jogo foi posteriormente embutido no Master System II em vários mercados.",
            ],
        ),
    },
    "phantasy-star": {
        releaseDate: L("December 20, 1987 (Japan)", "20 de dezembro de 1987 (Japão)"),
        publisher: "Sega",
        developer: "Sega",
        genre: L("Role-playing game", "RPG"),
        description: L(
            "After her brother is killed by the forces of King Lassic, Alis Landale sets out across the Algol system to avenge him and uncover the truth behind the darkness spreading through the worlds. Its sci-fi setting and first-person dungeons made it one of the Master System's most ambitious adventures.",
            "Depois que seu irmão é morto pelas forças do rei Lassic, Alis Landale parte pelo sistema Algol para vingá-lo e descobrir a verdade por trás da escuridão que se espalha pelos mundos. Seu cenário de ficção científica e masmorras em primeira pessoa fizeram dele uma das aventuras mais ambiciosas do Master System.",
        ),
        trivia: T(
            [
                "Alis Landale is one of the earliest female protagonists in a console role-playing game.",
                "The game used battery-backed saves to preserve long adventures.",
                "Its sci-fi fantasy universe continued in later Phantasy Star games.",
            ],
            [
                "Alis Landale é uma das primeiras protagonistas femininas de um RPG de console.",
                "O jogo usava save com bateria para preservar aventuras longas.",
                "Seu universo de fantasia científica continuou nos jogos posteriores da série Phantasy Star.",
            ],
        ),
    },
    "wonder-boy-iii-the-dragons-trap": {
        releaseDate: L("1989 (Japan)", "1989 (Japão)"),
        publisher: "Sega",
        developer: "Westone",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Cursed to live as a dragon, the hero journeys through an interconnected world in search of a cure. Each defeated boss grants a new animal form with its own abilities, turning exploration and backtracking into the heart of the adventure.",
            "Amaldiçoado a viver como dragão, o herói viaja por um mundo interligado em busca da cura. Cada chefe derrotado concede uma nova forma animal com habilidades próprias, transformando a exploração e o retorno a áreas anteriores no centro da aventura.",
        ),
        trivia: T(
            [
                "Its maze-like structure and ability-gated exploration made it an early touchstone for the metroidvania genre.",
                "The game was remade in 2017 as Wonder Boy: The Dragon's Trap.",
                "The Master System version became the best-known release of the game.",
            ],
            [
                "Sua estrutura labiríntica e exploração liberada por habilidades fizeram dele uma referência inicial do gênero metroidvania.",
                "O jogo ganhou um remake em 2017, Wonder Boy: The Dragon's Trap.",
                "A versão para Master System se tornou o lançamento mais conhecido do jogo.",
            ],
        ),
    },
    "sonic-the-hedgehog-8-bit": {
        releaseDate: L("1991 (Master System)", "1991 (Master System)"),
        publisher: "Sega",
        developer: "Ancient",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Sonic races through the zones of South Island to free the animals trapped by Dr. Robotnik and recover the Chaos Emeralds. Built for 8-bit hardware, it remixed familiar ideas into tighter stages with its own identity.",
            "Sonic atravessa as zonas de South Island para libertar os animais presos pelo Dr. Robotnik e recuperar as Esmeraldas do Caos. Feito para o hardware 8-bit, o jogo remixou ideias conhecidas em fases mais compactas e com identidade própria.",
        ),
        trivia: T(
            [
                "The 8-bit version was developed by Ancient and is distinct from the Mega Drive game.",
                "Yuzo Koshiro composed the music for this version.",
                "It helped keep Sonic present on Sega's older hardware after the Mega Drive arrived.",
            ],
            [
                "A versão 8-bit foi desenvolvida pela Ancient e é diferente do jogo de Mega Drive.",
                "Yuzo Koshiro compôs a trilha sonora desta versão.",
                "Ela ajudou a manter Sonic presente no hardware mais antigo da Sega depois da chegada do Mega Drive.",
            ],
        ),
    },
};
