import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Atari 7800";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "ms-pac-man-7800": {
        releaseDate: L("1987 (North America)", "1987 (América do Norte)"),
        publisher: "Atari Corporation",
        developer: "General Computer Corporation",
        genre: L("Maze", "Labirinto"),
        description: L(
            "Ms. Pac-Man chomps through mazes, power pellets and ghosts in a sequel that refined the original formula with faster action and moving bonus fruit. The Atari 7800 version was praised for how closely it reproduced the arcade experience at home.",
            "Ms. Pac-Man devora labirintos, pílulas de poder e fantasmas em uma sequência que refinou a fórmula original com ação mais rápida e frutas bônus móveis. A versão para Atari 7800 foi elogiada por reproduzir em casa a experiência do arcade com grande fidelidade.",
        ),
        trivia: T(
            [
                "Ms. Pac-Man began as an unofficial enhancement of Pac-Man before Midway licensed it.",
                "The Atari 7800 port is often cited as one of the console's best arcade conversions.",
                "The game introduced moving bonus fruit, which later became a series staple.",
            ],
            [
                "Ms. Pac-Man começou como um aprimoramento não oficial de Pac-Man antes de ser licenciado pela Midway.",
                "A versão para Atari 7800 é frequentemente citada como uma das melhores conversões de arcade do console.",
                "O jogo introduziu frutas bônus em movimento, que depois se tornaram marca da série.",
            ],
        ),
    },
    "food-fight": {
        releaseDate: L("1987 (North America)", "1987 (América do Norte)"),
        publisher: "Atari Corporation",
        developer: "Atari, Inc.",
        genre: L("Action", "Ação"),
        description: L(
            "Charley Chuck tries to reach a giant ice cream cone while angry chefs hurl food at him. Its absurd premise and quick, readable action made it one of the Atari 7800's most fondly remembered games.",
            "Charley Chuck tenta alcançar um sorvete gigante enquanto chefs furiosos atiram comida nele. Sua premissa absurda e ação rápida e legível fizeram dele um dos jogos mais lembrados com carinho do Atari 7800.",
        ),
        trivia: T(
            [
                "The arcade original was released by Atari in 1983.",
                "The Atari 7800 version arrived in 1987 during the console's relaunch.",
                "The game's premise was reportedly inspired by a food fight at a company cafeteria.",
            ],
            [
                "O arcade original foi lançado pela Atari em 1983.",
                "A versão para Atari 7800 chegou em 1987, durante o relançamento do console.",
                "A premissa do jogo teria sido inspirada por uma guerra de comida na lanchonete da empresa.",
            ],
        ),
    },
    "ninja-golf": {
        releaseDate: L("1990 (North America)", "1990 (América do Norte)"),
        publisher: "Atari Corporation",
        developer: "BlueSky Software",
        genre: L("Sports / beat 'em up", "Esporte / briga"),
        description: L(
            "A golfer in ninja garb plays each hole before fighting the rival ninja guarding the green. The strange hybrid is remembered as one of the most inventive and unusual games released for the Atari 7800.",
            "Um golfista vestido de ninja joga cada buraco antes de enfrentar o ninja rival que protege o green. A estranha mistura é lembrada como um dos jogos mais inventivos e incomuns lançados para o Atari 7800.",
        ),
        trivia: T(
            [
                "It was developed by BlueSky Software.",
                "Each hole ends with a side-scrolling martial arts battle.",
                "It was one of the last games officially released for the Atari 7800.",
            ],
            [
                "Foi desenvolvido pela BlueSky Software.",
                "Cada buraco termina com uma luta de artes marciais em rolagem lateral.",
                "Foi um dos últimos jogos lançados oficialmente para o Atari 7800.",
            ],
        ),
    },
    "scrapyard-dog": {
        releaseDate: L("1990 (North America)", "1990 (América do Norte)"),
        publisher: "Atari Corporation",
        developer: "BlueSky Software",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Louie sets out through a junkyard underworld to rescue his kidnapped dog from the villain Mr. Big. Its colourful scrolling stages gave the aging Atari 7800 a late burst of platforming energy.",
            "Louie atravessa um submundo de ferro-velho para resgatar seu cão sequestrado pelo vilão Mr. Big. Suas fases coloridas de rolagem deram ao envelhecido Atari 7800 um último impulso de plataforma.",
        ),
        trivia: T(
            [
                "It began as a title for the Atari Lynx before being adapted for the 7800.",
                "It was developed by BlueSky Software.",
                "It was among the final official releases for the Atari 7800.",
            ],
            [
                "Começou como um título para o Atari Lynx antes de ser adaptado para o 7800.",
                "Foi desenvolvido pela BlueSky Software.",
                "Estava entre os últimos lançamentos oficiais do Atari 7800.",
            ],
        ),
    },
};
