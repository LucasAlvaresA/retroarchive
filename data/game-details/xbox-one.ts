import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Xbox One";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "ori-and-the-blind-forest": {
        releaseDate: L("March 11, 2015 (Worldwide)", "11 de março de 2015 (Mundial)"),
        publisher: "Microsoft Studios",
        developer: "Moon Studios",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "A small spirit named Ori restores a dying forest in a hand-painted metroidvania. Its emotional opening and graceful movement made it one of the Xbox One's most beloved smaller games.",
            "Um pequeno espírito chamado Ori restaura uma floresta moribunda em um metroidvania pintado à mão. Sua abertura emocional e movimento gracioso fizeram dele um dos jogos menores mais queridos do Xbox One.",
        ),
        trivia: T(
            [
                "It was developed by Moon Studios, a distributed team.",
                "The game's soundtrack was composed by Gareth Coker.",
            ],
            [
                "Foi desenvolvido pela Moon Studios, uma equipe distribuída.",
                "A trilha sonora foi composta por Gareth Coker.",
            ],
        ),
    },
    "cuphead": {
        releaseDate: L("September 29, 2017 (Worldwide)", "29 de setembro de 2017 (Mundial)"),
        publisher: "Studio MDHR",
        developer: "Studio MDHR",
        genre: L("Run and gun", "Run and gun"),
        description: L(
            "Cuphead and Mugman battle bosses in a world drawn like a 1930s cartoon. Its hand-animated art and punishing rhythm made it instantly unmistakable.",
            "Cuphead e Mugman enfrentam chefes em um mundo desenhado como um desenho animado dos anos 1930. Sua arte animada à mão e ritmo exigente fizeram dele imediatamente inconfundível.",
        ),
        trivia: T(
            [
                "It was developed by the husband-and-wife team at Studio MDHR.",
                "Every animation was hand-drawn in a vintage cartoon style.",
            ],
            [
                "Foi desenvolvido pela dupla de marido e mulher do Studio MDHR.",
                "Cada animação foi desenhada à mão em estilo de cartoon antigo.",
            ],
        ),
    },
    "sea-of-thieves": {
        releaseDate: L("March 20, 2018 (Worldwide)", "20 de março de 2018 (Mundial)"),
        publisher: "Microsoft Studios",
        developer: "Rare",
        genre: L("Adventure", "Aventura"),
        description: L(
            "Pirate crews sail, dig and fight together in a shared world built around emergent stories. Its cooperative chaos made it a long-running multiplayer playground.",
            "Tripulações piratas navegam, cavam e lutam juntas em um mundo compartilhado construído em torno de histórias emergentes. Seu caos cooperativo o transformou em um playground multiplayer duradouro.",
        ),
        trivia: T(
            [
                "It was developed by Rare, the studio behind Banjo-Kazooie.",
                "The game is designed around player-driven stories rather than a fixed narrative.",
            ],
            [
                "Foi desenvolvido pela Rare, o estúdio de Banjo-Kazooie.",
                "O jogo é projetado em torno de histórias criadas pelos jogadores, não de uma narrativa fixa.",
            ],
        ),
    },
    "forza-horizon-4": {
        releaseDate: L("October 2, 2018 (Worldwide)", "2 de outubro de 2018 (Mundial)"),
        publisher: "Microsoft Studios",
        developer: "Playground Games",
        genre: L("Racing", "Corrida"),
        description: L(
            "An open-world festival of racing set across a stylized Britain that changes with the seasons. Its freedom and polish made it one of the most accessible racing games of its generation.",
            "Um festival de corrida em mundo aberto ambientado em uma Grã-Bretanha estilizada que muda com as estações. Sua liberdade e polimento fizeram dele um dos jogos de corrida mais acessíveis de sua geração.",
        ),
        trivia: T(
            [
                "The game's map changes season every week in the shared world.",
                "It was developed by Playground Games.",
            ],
            [
                "O mapa do jogo muda de estação a cada semana no mundo compartilhado.",
                "Foi desenvolvido pela Playground Games.",
            ],
        ),
    },
};
