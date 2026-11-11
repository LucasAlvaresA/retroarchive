import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Dreamcast";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "sonic-adventure": {
        releaseDate: L("December 23, 1998 (Japan)", "23 de dezembro de 1998 (Japão)"),
        publisher: "Sega",
        developer: "Sonic Team",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Sonic's first full 3D adventure spans open stages, cinematic story scenes and multiple playable characters. It captured the ambition of Sega's final console.",
            "A primeira aventura completa de Sonic em 3D percorre fases abertas, cenas narrativas cinematográficas e vários personagens jogáveis. Ela capturou a ambição do último console da Sega.",
        ),
        trivia: T(
            [
                "It launched alongside the Dreamcast in Japan.",
                "The game introduced the Chao virtual pet system.",
            ],
            [
                "Foi lançado junto com o Dreamcast no Japão.",
                "O jogo introduziu o sistema de estimação virtual Chao.",
            ],
        ),
    },
    "shenmue": {
        releaseDate: L("December 29, 1999 (Japan)", "29 de dezembro de 1999 (Japão)"),
        publisher: "Sega",
        developer: "AM2",
        genre: L("Adventure", "Aventura"),
        description: L(
            "Ryo Hazuki searches a meticulously detailed Japanese town for clues about his father's murder. Its immersive world and free exploration pointed toward the open-world games that followed.",
            "Ryo Hazuki investiga uma cidade japonesa meticulosamente detalhada em busca de pistas sobre o assassinato de seu pai. Seu mundo imersivo e exploração livre apontaram para os jogos de mundo aberto que viriam.",
        ),
        trivia: T(
            [
                "It was directed by Yu Suzuki and became one of the most expensive games of its time.",
                "The game simulated weather, schedules and everyday routines in unusual detail.",
            ],
            [
                "Foi dirigido por Yu Suzuki e se tornou um dos jogos mais caros de sua época.",
                "O jogo simulava clima, horários e rotinas cotidianas com detalhes incomuns.",
            ],
        ),
    },
    "soulcalibur": {
        releaseDate: L("August 5, 1999 (Japan)", "5 de agosto de 1999 (Japão)"),
        publisher: "Namco",
        developer: "Namco",
        genre: L("Fighting", "Luta"),
        description: L(
            "Weapon-based fighters clash in a gorgeous arcade conversion with fluid eight-way movement. Its home version became a technical showcase for the Dreamcast.",
            "Lutadores armados se enfrentam em uma conversão de arcade deslumbrante, com movimento fluido em oito direções. Sua versão doméstica se tornou uma vitrine técnica do Dreamcast.",
        ),
        trivia: T(
            [
                "It was built on Namco's System 12 arcade hardware.",
                "The game is remembered for its visual leap over its predecessor, Soul Edge.",
            ],
            [
                "Foi construído sobre o hardware de arcade System 12 da Namco.",
                "O jogo é lembrado pelo salto visual em relação ao seu antecessor, Soul Edge.",
            ],
        ),
    },
    "jet-set-radio": {
        releaseDate: L("June 29, 2000 (Japan)", "29 de junho de 2000 (Japão)"),
        publisher: "Sega",
        developer: "Smilebit",
        genre: L("Action", "Ação"),
        description: L(
            "A crew of graffiti artists skates through a stylized Tokyo to claim territory and outrun the authorities. Cel-shaded art and a genre-blending soundtrack gave it a look and sound all its own.",
            "Uma turma de grafiteiros patina por uma Tóquio estilizada para conquistar território e fugir das autoridades. A arte com cel-shading e uma trilha que mistura gêneros deram ao jogo uma identidade única.",
        ),
        trivia: T(
            [
                "It is credited with popularizing cel-shaded 3D graphics.",
                "The soundtrack blended electronic, hip-hop and funk tracks.",
            ],
            [
                "É creditado por popularizar os gráficos 3D com cel-shading.",
                "A trilha sonora misturava faixas de música eletrônica, hip-hop e funk.",
            ],
        ),
    },
};
