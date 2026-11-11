import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Xbox";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "halo-combat-evolved": {
        releaseDate: L("November 15, 2001 (North America)", "15 de novembro de 2001 (América do Norte)"),
        publisher: "Microsoft Game Studios",
        developer: "Bungie",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "Master Chief fights the Covenant across a mysterious ringworld while uncovering its secrets. Regenerating shields, vehicle combat and co-op made it the Xbox's signature launch game.",
            "Master Chief enfrenta a Covenant em um misterioso mundo-anel enquanto descobre seus segredos. Escudos regenerativos, combate com veículos e cooperativo fizeram dele o jogo de lançamento símbolo do Xbox.",
        ),
        trivia: T(
            [
                "It was originally in development for Mac and PC before becoming an Xbox exclusive.",
                "The game popularized regenerating health in first-person shooters.",
            ],
            [
                "Originalmente, estava em desenvolvimento para Mac e PC antes de se tornar exclusivo do Xbox.",
                "O jogo popularizou a saúde regenerativa nos shooters em primeira pessoa.",
            ],
        ),
    },
    "kotor": {
        releaseDate: L("July 15, 2003 (North America)", "15 de julho de 2003 (América do Norte)"),
        publisher: "LucasArts",
        developer: "BioWare",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A Jedi amnesiac gathers a crew and chooses sides in a conflict set thousands of years before the films. Deep dialogue and moral choices made it one of the defining Star Wars games.",
            "Um Jedi amnésico reúne uma tripulação e escolhe lados em um conflito ambientado milhares de anos antes dos filmes. Diálogos profundos e escolhas morais fizeram dele um dos jogos definidores de Star Wars.",
        ),
        trivia: T(
            [
                "It was developed by BioWare and published by LucasArts.",
                "The game's twist ending is among the most discussed in Star Wars games.",
            ],
            [
                "Foi desenvolvido pela BioWare e publicado pela LucasArts.",
                "O final surpreendente está entre os mais comentados dos jogos de Star Wars.",
            ],
        ),
    },
    "ninja-gaiden": {
        releaseDate: L("March 2, 2004 (North America)", "2 de março de 2004 (América do Norte)"),
        publisher: "Tecmo",
        developer: "Team Ninja",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Ryu Hayabusa cuts through a demonic invasion with demanding, stylish combat. Its speed and difficulty made it a benchmark for action games on the Xbox.",
            "Ryu Hayabusa abre caminho por uma invasão demoníaca com combate exigente e estiloso. Sua velocidade e dificuldade fizeram dele uma referência para jogos de ação no Xbox.",
        ),
        trivia: T(
            [
                "It was directed by Tomonobu Itagaki at Team Ninja.",
                "The game was praised for its fluid animation and responsive controls.",
            ],
            [
                "Foi dirigido por Tomonobu Itagaki na Team Ninja.",
                "O jogo foi elogiado por sua animação fluida e controles responsivos.",
            ],
        ),
    },
    "fable": {
        releaseDate: L("September 14, 2004 (North America)", "14 de setembro de 2004 (América do Norte)"),
        publisher: "Microsoft Game Studios",
        developer: "Lionhead Studios",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A hero's life unfolds from childhood to legend in a world that reacts to reputation and choice. Its ambition to make every decision visible made it a memorable Xbox RPG.",
            "A vida de um herói se desenrola da infância à lenda em um mundo que reage à reputação e às escolhas. A ambição de tornar cada decisão visível fez dele um RPG memorável do Xbox.",
        ),
        trivia: T(
            [
                "It was designed by Peter Molyneux at Lionhead Studios.",
                "The game's morality system changed the hero's appearance and how NPCs reacted.",
            ],
            [
                "Foi criado por Peter Molyneux na Lionhead Studios.",
                "O sistema de moralidade alterava a aparência do herói e a reação dos NPCs.",
            ],
        ),
    },
};
