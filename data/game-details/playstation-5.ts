import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "PlayStation 5";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "astro-bot": {
        releaseDate: L("September 6, 2024 (Worldwide)", "6 de setembro de 2024 (Mundial)"),
        publisher: "Sony Interactive Entertainment",
        developer: "Team Asobi",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "A tiny robot travels across inventive worlds to rescue his crew and celebrate PlayStation's history. Its joyful design and inventive use of the DualSense made it a modern platforming standout.",
            "Um pequeno robô viaja por mundos inventivos para resgatar sua tripulação e celebrar a história do PlayStation. Seu design alegre e uso criativo do DualSense fizeram dele um destaque moderno dos plataformas.",
        ),
        trivia: T(
            [
                "It was developed by Team Asobi, the studio behind Astro's Playroom.",
                "The game is filled with cameos from classic PlayStation franchises.",
            ],
            [
                "Foi desenvolvido pela Team Asobi, o estúdio de Astro's Playroom.",
                "O jogo é repleto de participações de franquias clássicas do PlayStation.",
            ],
        ),
    },
    "demons-souls-remake": {
        releaseDate: L("November 12, 2020 (Worldwide)", "12 de novembro de 2020 (Mundial)"),
        publisher: "Sony Interactive Entertainment",
        developer: "Bluepoint Games",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A faithful remake of the game that launched a genre, rebuilt with striking visuals and near-instant loading. It reintroduced Boletaria to a new generation of players.",
            "Um remake fiel do jogo que deu origem a um gênero, reconstruído com visuais impressionantes e carregamento quase instantâneo. Ele reapresentou Boletaria a uma nova geração de jogadores.",
        ),
        trivia: T(
            [
                "It was a launch title for the PlayStation 5.",
                "Bluepoint Games rebuilt the original with new assets while preserving its design.",
            ],
            [
                "Foi um título de lançamento do PlayStation 5.",
                "A Bluepoint Games reconstruiu o original com novos recursos, preservando seu design.",
            ],
        ),
    },
    "ratchet-rift-apart": {
        releaseDate: L("June 11, 2021 (Worldwide)", "11 de junho de 2021 (Mundial)"),
        publisher: "Sony Interactive Entertainment",
        developer: "Insomniac Games",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Ratchet and Clank hop between dimensions in a showcase for the PS5's speed and DualSense features. Its playful arsenal and polished action made it a standout exclusive.",
            "Ratchet e Clank saltam entre dimensões em uma demonstração da velocidade do PS5 e dos recursos do DualSense. Seu arsenal divertido e ação polida fizeram dele um exclusivo de destaque.",
        ),
        trivia: T(
            [
                "The game uses the PS5 SSD to transition between dimensions almost instantly.",
                "It was developed by Insomniac Games.",
            ],
            [
                "O jogo usa o SSD do PS5 para alternar entre dimensões quase instantaneamente.",
                "Foi desenvolvido pela Insomniac Games.",
            ],
        ),
    },
    "spider-man-2": {
        releaseDate: L("October 20, 2023 (Worldwide)", "20 de outubro de 2023 (Mundial)"),
        publisher: "Sony Interactive Entertainment",
        developer: "Insomniac Games",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Peter Parker and Miles Morales swing across a larger New York as Venom and Kraven the Hunter close in. Faster traversal and dual-protagonist combat made it Insomniac's biggest superhero spectacle.",
            "Peter Parker e Miles Morales balançam por uma Nova York maior enquanto Venom e Kraven, o Caçador, se aproximam. Travessia mais rápida e combate com dois protagonistas fizeram dele o maior espetáculo de super-herói da Insomniac.",
        ),
        trivia: T(
            [
                "It continues the stories of Marvel's Spider-Man (2018) and Spider-Man: Miles Morales.",
                "The game's fast travel is presented as an in-universe subway ride.",
            ],
            [
                "Continua as histórias de Marvel's Spider-Man (2018) e Spider-Man: Miles Morales.",
                "A viagem rápida do jogo é apresentada como um trajeto de metrô dentro do universo.",
            ],
        ),
    },
};
