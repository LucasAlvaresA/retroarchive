import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "PlayStation 2";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "metal-gear-solid-2": {
        releaseDate: L("November 13, 2001 (North America)", "13 de novembro de 2001 (América do Norte)"),
        publisher: "Konami",
        developer: "Konami Computer Entertainment Japan",
        genre: L("Stealth action", "Ação furtiva"),
        description: L(
            "Raiden infiltrates a floating fortress after a tanker disaster, in a story that questions information, memory and control. Its layered plot and detailed presentation made it one of the PS2's defining games.",
            "Raiden se infiltra em uma fortaleza flutuante após um desastre com um navio-tanque, em uma história que questiona informação, memória e controle. Seu enredo em camadas e apresentação detalhada fizeram dele um dos jogos definidores do PS2.",
        ),
        trivia: T(
            [
                "It was directed by Hideo Kojima and first shown at E3 2000.",
                "The game is remembered for its prescient themes about digital information.",
            ],
            [
                "Foi dirigido por Hideo Kojima e apresentado pela primeira vez na E3 2000.",
                "O jogo é lembrado por seus temas premonitórios sobre a informação digital.",
            ],
        ),
    },
    "gta-san-andreas": {
        releaseDate: L("October 26, 2004 (North America)", "26 de outubro de 2004 (América do Norte)"),
        publisher: "Rockstar Games",
        developer: "Rockstar North",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "CJ returns to San Andreas to rebuild his family's influence across three sprawling cities and the countryside between them. Its scale and sense of place made it one of the most influential open-world games ever.",
            "CJ retorna a San Andreas para reconstruir a influência de sua família em três cidades imensas e no interior entre elas. Sua escala e sensação de lugar o tornaram um dos jogos de mundo aberto mais influentes de todos os tempos.",
        ),
        trivia: T(
            [
                "The game's map spans the fictional cities of Los Santos, San Fierro and Las Venturas.",
                "It introduced role-playing-style stats for stamina, driving and weapon skills.",
            ],
            [
                "O mapa do jogo abrange as cidades fictícias de Los Santos, San Fierro e Las Venturas.",
                "Introduziu atributos de RPG para resistência, direção e habilidades com armas.",
            ],
        ),
    },
    "resident-evil-4": {
        releaseDate: L("January 11, 2005 (North America)", "11 de janeiro de 2005 (América do Norte)"),
        publisher: "Capcom",
        developer: "Capcom Production Studio 4",
        genre: L("Survival horror", "Survival horror"),
        description: L(
            "Leon Kennedy travels to a rural village to rescue the president's daughter from a cult. Its over-the-shoulder camera and tense encounters reinvented the series and influenced action games for years.",
            "Leon Kennedy viaja a uma vila rural para resgatar a filha do presidente de um culto. Sua câmera sobre o ombro e encontros tensos reinventaram a série e influenciaram jogos de ação por anos.",
        ),
        trivia: T(
            [
                "It was directed by Shinji Mikami.",
                "The game was originally conceived as a more supernatural entry in the series.",
            ],
            [
                "Foi dirigido por Shinji Mikami.",
                "O jogo foi originalmente concebido como uma entrada mais sobrenatural da série.",
            ],
        ),
    },
    "shadow-of-the-colossus": {
        releaseDate: L("October 18, 2005 (North America)", "18 de outubro de 2005 (América do Norte)"),
        publisher: "Sony Computer Entertainment",
        developer: "Team Ico",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "A lone wanderer crosses a forbidden land to defeat sixteen towering colossi and revive a sleeping girl. Its quiet world and monumental encounters turned scale itself into emotion.",
            "Um andarilho solitário cruza uma terra proibida para derrotar dezesseis colossos gigantescos e reviver uma garota adormecida. Seu mundo silencioso e encontros monumentais transformaram a própria escala em emoção.",
        ),
        trivia: T(
            [
                "It was directed by Fumito Ueda and developed by Team Ico.",
                "The game uses minimal dialogue and music to build its atmosphere.",
            ],
            [
                "Foi dirigido por Fumito Ueda e desenvolvido pela Team Ico.",
                "O jogo usa diálogo e música mínimos para construir sua atmosfera.",
            ],
        ),
    },
};
