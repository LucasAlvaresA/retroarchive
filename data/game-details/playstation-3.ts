import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "PlayStation 3";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "demons-souls": {
        releaseDate: L("February 5, 2009 (Japan)", "5 de fevereiro de 2009 (Japão)"),
        publisher: "Sony Computer Entertainment",
        developer: "FromSoftware",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A lone warrior enters the cursed kingdom of Boletaria, where death is a lesson and every encounter demands care. Its uncompromising design launched a new school of action RPGs.",
            "Um guerreiro solitário entra no reino amaldiçoado de Boletaria, onde a morte é uma lição e cada encontro exige cuidado. Seu design inflexível deu origem a uma nova escola de RPGs de ação.",
        ),
        trivia: T(
            [
                "It was directed by Hidetaka Miyazaki.",
                "The game's online messages and phantom summoning became series hallmarks.",
            ],
            [
                "Foi dirigido por Hidetaka Miyazaki.",
                "As mensagens online e a invocação de fantasmas se tornaram marcas da série.",
            ],
        ),
    },
    "uncharted-2": {
        releaseDate: L("October 13, 2009 (North America)", "13 de outubro de 2009 (América do Norte)"),
        publisher: "Sony Computer Entertainment",
        developer: "Naughty Dog",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Nathan Drake chases a lost treasure across mountains, cities and trains in a blockbuster adventure. Its set pieces and character banter raised the bar for cinematic action games.",
            "Nathan Drake persegue um tesouro perdido por montanhas, cidades e trens em uma aventura de sucesso. Suas cenas de ação e o humor dos personagens elevaram o padrão dos jogos de ação cinematográficos.",
        ),
        trivia: T(
            [
                "It was developed by Naughty Dog and directed by Amy Hennig.",
                "The game's train sequence became one of the most celebrated set pieces of its generation.",
            ],
            [
                "Foi desenvolvido pela Naughty Dog e dirigido por Amy Hennig.",
                "A sequência do trem se tornou uma das cenas de ação mais celebradas de sua geração.",
            ],
        ),
    },
    "journey": {
        releaseDate: L("March 13, 2012 (North America)", "13 de março de 2012 (América do Norte)"),
        publisher: "Sony Computer Entertainment",
        developer: "thatgamecompany",
        genre: L("Adventure", "Aventura"),
        description: L(
            "A robed traveler crosses a desert toward a distant mountain, guided by light and the quiet presence of strangers. Its wordless story and anonymous co-op turned simplicity into something profound.",
            "Um viajante encapuzado cruza um deserto rumo a uma montanha distante, guiado pela luz e pela presença silenciosa de estranhos. Sua história sem palavras e o cooperativo anônimo transformaram a simplicidade em algo profundo.",
        ),
        trivia: T(
            [
                "It was developed by thatgamecompany and composed by Austin Wintory.",
                "Players can meet anonymous companions without any chat or usernames.",
            ],
            [
                "Foi desenvolvido pela thatgamecompany, com trilha de Austin Wintory.",
                "Os jogadores podem encontrar companheiros anônimos, sem chat ou nomes de usuário.",
            ],
        ),
    },
    "the-last-of-us": {
        releaseDate: L("June 14, 2013 (Worldwide)", "14 de junho de 2013 (Mundial)"),
        publisher: "Sony Computer Entertainment",
        developer: "Naughty Dog",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Joel and Ellie cross a post-pandemic America, forging a bond amid loss and violence. Its restrained storytelling and detailed world made it one of the most acclaimed games of its era.",
            "Joel e Ellie atravessam uma América pós-pandemia, construindo um laço em meio à perda e à violência. Sua narrativa contida e mundo detalhado fizeram dele um dos jogos mais aclamados de sua época.",
        ),
        trivia: T(
            [
                "It was directed by Neil Druckmann and Bruce Straley.",
                "The game's opening sequence is often cited as a masterclass in interactive storytelling.",
            ],
            [
                "Foi dirigido por Neil Druckmann e Bruce Straley.",
                "A sequência de abertura é frequentemente citada como uma aula de narrativa interativa.",
            ],
        ),
    },
};
