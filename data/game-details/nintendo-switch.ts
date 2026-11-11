import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Nintendo Switch";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "breath-of-the-wild": {
        releaseDate: L("March 3, 2017 (Worldwide)", "3 de março de 2017 (Mundial)"),
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link wakes in a ruined Hyrule and is free to climb, explore and solve its world in almost any order. Its open-air design reinvented the series and influenced a generation of games.",
            "Link desperta em Hyrule arruinada e é livre para escalar, explorar e resolver o mundo em quase qualquer ordem. Seu design de mundo aberto reinventou a série e influenciou uma geração de jogos.",
        ),
        trivia: T(
            [
                "It launched simultaneously on the Wii U and as a Switch launch title.",
                "The game's chemistry and physics systems allow many unscripted solutions.",
            ],
            [
                "Foi lançado simultaneamente no Wii U e como título de lançamento do Switch.",
                "Os sistemas de química e física permitem muitas soluções não roteirizadas.",
            ],
        ),
    },
    "super-mario-odyssey": {
        releaseDate: L("October 27, 2017 (Worldwide)", "27 de outubro de 2017 (Mundial)"),
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario travels across kingdoms with Cappy, capturing enemies and objects to reach each Power Moon. Its boundless movement and playful ideas made it a modern platforming landmark.",
            "Mario viaja por reinos com Cappy, capturando inimigos e objetos para alcançar cada Power Moon. Seu movimento livre e ideias brincalhonas fizeram dele um marco moderno dos plataformas.",
        ),
        trivia: T(
            [
                "The game introduced Cappy and the capture mechanic.",
                "Its soundtrack includes the vocal theme 'Jump Up, Super Star!'.",
            ],
            [
                "O jogo introduziu Cappy e a mecânica de captura.",
                "A trilha sonora inclui o tema cantado 'Jump Up, Super Star!'.",
            ],
        ),
    },
    "smash-ultimate": {
        releaseDate: L("December 7, 2018 (Worldwide)", "7 de dezembro de 2018 (Mundial)"),
        publisher: "Nintendo",
        developer: "Bandai Namco Studios; Sora Ltd.",
        genre: L("Fighting", "Luta"),
        description: L(
            "Every fighter from the series' history returned for a colossal crossover with stages, spirits and robust multiplayer. Its 'everyone is here' promise made it a celebration of gaming itself.",
            "Todos os lutadores da história da série retornaram em um crossover colossal com fases, espíritos e multiplayer robusto. A promessa de que 'todos estão aqui' fez dele uma celebração dos próprios games.",
        ),
        trivia: T(
            [
                "Its tagline was 'Everyone is here'.",
                "The game includes a massive roster spanning dozens of franchises.",
            ],
            [
                "Seu slogan era 'Everyone is here' ('Todos estão aqui').",
                "O jogo inclui um elenco enorme que abrange dezenas de franquias.",
            ],
        ),
    },
    "animal-crossing-new-horizons": {
        releaseDate: L("March 20, 2020 (Worldwide)", "20 de março de 2020 (Mundial)"),
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        genre: L("Life simulation", "Simulação de vida"),
        description: L(
            "A deserted-island getaway becomes a personalized home through fishing, decorating and quiet daily rituals. Released at the start of a global lockdown, it became a shared refuge for millions.",
            "Uma escapada para uma ilha deserta se torna um lar personalizado por meio de pesca, decoração e rituais diários tranquilos. Lançado no início de um isolamento global, tornou-se um refúgio compartilhado para milhões.",
        ),
        trivia: T(
            [
                "It was released during the early days of the COVID-19 pandemic.",
                "The game lets players customize their island and visit friends online.",
            ],
            [
                "Foi lançado nos primeiros dias da pandemia de COVID-19.",
                "O jogo permite personalizar a ilha e visitar amigos online.",
            ],
        ),
    },
};
