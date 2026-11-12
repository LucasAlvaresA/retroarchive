import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Nintendo DS";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "mario-kart-ds": {
        releaseDate: L("November 14, 2005 (North America)", "14 de novembro de 2005 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Racing", "Corrida"),
        description: L(
            "Mario and friends race across new tracks and classic courses, using shells, bananas and drift boosts to take the lead. It was the first Mario Kart to bring the series online and the first to gather its retro circuits in dedicated cups.",
            "Mario e seus amigos correm por pistas novas e circuitos clássicos, usando cascos, bananas e turbos de derrapagem para assumir a liderança. Foi o primeiro Mario Kart a levar a série para a internet e o primeiro a reunir seus circuitos retrô em copas dedicadas.",
        ),
        trivia: T(
            [
                "It was the first Mario Kart game with online multiplayer.",
                "The game introduced the Retro Grand Prix, grouping classic courses into cups.",
                "The dual screen displayed a live map and player standings.",
            ],
            [
                "Foi o primeiro Mario Kart com multiplayer online.",
                "O jogo introduziu o Retro Grand Prix, agrupando pistas clássicas em copas.",
                "A tela dupla exibia um mapa ao vivo e a classificação dos jogadores.",
            ],
        ),
    },
    "new-super-mario-bros-ds": {
        releaseDate: L("May 15, 2006 (North America)", "15 de maio de 2006 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario returns to side-scrolling platforming with new power-ups, wall jumps and a world map full of secret exits. Its blend of classic rhythm and modern polish reintroduced 2D Mario to a new generation.",
            "Mario volta ao plataforma de rolagem lateral com novos poderes, saltos na parede e um mapa repleto de saídas secretas. Sua mistura de ritmo clássico e polimento moderno reapresentou o Mario 2D a uma nova geração.",
        ),
        trivia: T(
            [
                "It was the first original 2D Mario platformer since Super Mario World.",
                "The top screen showed the world map and status information during play.",
                "It introduced the Mega Mushroom, which turns Mario into a giant.",
            ],
            [
                "Foi o primeiro jogo de plataforma 2D original do Mario desde Super Mario World.",
                "A tela superior mostrava o mapa do mundo e informações de status durante o jogo.",
                "Introduziu o Mega Cogumelo, que transforma Mario em um gigante.",
            ],
        ),
    },
    "pokemon-diamond-pearl": {
        releaseDate: L("September 28, 2006 (Japan)", "28 de setembro de 2006 (Japão)"),
        publisher: "Nintendo / The Pokémon Company",
        developer: "Game Freak",
        genre: L("Role-playing", "RPG"),
        description: L(
            "Trainers explore the Sinnoh region, catch new Pokémon and challenge the gyms on the way to the Pokémon League. Its online features and revised battle rules made it a major step forward for the series.",
            "Treinadores exploram a região de Sinnoh, capturam novos Pokémon e desafiam os ginásios no caminho para a Liga Pokémon. Seus recursos online e regras de batalha revisadas fizeram dele um grande avanço para a série.",
        ),
        trivia: T(
            [
                "It introduced online trading and battling through the Nintendo Wi-Fi Connection.",
                "The games split moves into physical and special categories, changing battle strategy.",
                "Diamond and Pearl are set in the Sinnoh region.",
            ],
            [
                "Introduziu trocas e batalhas online por meio da Nintendo Wi-Fi Connection.",
                "Os jogos dividiram os golpes em categorias físicas e especiais, mudando a estratégia de batalha.",
                "Diamond e Pearl se passam na região de Sinnoh.",
            ],
        ),
    },
    "phantom-hourglass": {
        releaseDate: L("June 23, 2007 (Japan)", "23 de junho de 2007 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link sails into a mysterious sea to rescue Tetra, solving puzzles with the stylus and charting a course on the touch screen. Its direct touch controls made the DS feel like part of the adventure.",
            "Link navega por um mar misterioso para resgatar Tetra, resolvendo quebra-cabeças com a stylus e traçando rotas na tela de toque. Seus controles diretos por toque fizeram o DS parecer parte da aventura.",
        ),
        trivia: T(
            [
                "It is a direct sequel to The Legend of Zelda: The Wind Waker.",
                "The entire game can be controlled with the stylus.",
                "Players return repeatedly to the Temple of the Ocean King.",
            ],
            [
                "É uma sequência direta de The Legend of Zelda: The Wind Waker.",
                "O jogo inteiro pode ser controlado com a stylus.",
                "Os jogadores retornam várias vezes ao Templo do Rei do Oceano.",
            ],
        ),
    },
};
