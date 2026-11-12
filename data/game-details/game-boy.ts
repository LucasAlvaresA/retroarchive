import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Game Boy";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    tetris: {
        releaseDate: L("June 14, 1989 (Japan)", "14 de junho de 1989 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        genre: L("Puzzle", "Quebra-cabeça"),
        description: L(
            "Falling blocks are rotated and slotted into complete lines in the puzzle that helped define the Game Boy. Its simple rules and endlessly replayable pace made it the perfect companion for a handheld console.",
            "Blocos que caem são girados e encaixados para completar linhas no quebra-cabeça que ajudou a definir o Game Boy. Suas regras simples e ritmo infinitamente rejogável o tornaram o companheiro perfeito para um console portátil.",
        ),
        trivia: T(
            [
                "It was a pack-in title for the Game Boy in North America and Europe.",
                "The game was licensed from Alexey Pajitnov's original creation.",
                "A two-player mode used the Game Boy Link Cable.",
            ],
            [
                "Foi um título incluído na caixa do Game Boy na América do Norte e na Europa.",
                "O jogo foi licenciado a partir da criação original de Alexey Pajitnov.",
                "Um modo para dois jogadores usava o cabo Link do Game Boy.",
            ],
        ),
    },
    "super-mario-land": {
        releaseDate: L("April 21, 1989 (Japan)", "21 de abril de 1989 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario travels to Sarasaland to rescue Princess Daisy from the alien Tatanga, piloting a submarine and a plane between side-scrolling stages. It was the first Mario platformer built for a handheld and a launch title for the Game Boy.",
            "Mario viaja para Sarasaland para resgatar a Princesa Daisy do alienígena Tatanga, pilotando um submarino e um avião entre fases de rolagem lateral. Foi o primeiro jogo de plataforma do Mario feito para um portátil e um título de lançamento do Game Boy.",
        ),
        trivia: T(
            [
                "It was a launch title for the Game Boy in Japan and North America.",
                "The game introduced Princess Daisy to the Mario series.",
                "Its soundtrack was composed by Hirokazu Tanaka.",
            ],
            [
                "Foi um título de lançamento do Game Boy no Japão e na América do Norte.",
                "O jogo apresentou a Princesa Daisy à série Mario.",
                "Sua trilha sonora foi composta por Hirokazu Tanaka.",
            ],
        ),
    },
    "links-awakening": {
        releaseDate: L("June 6, 1993 (Japan)", "6 de junho de 1993 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link wakes on the mysterious Koholint Island and must gather the Instruments of the Sirens to escape. Its dreamlike story, dense overworld and inventive dungeons made it one of the Game Boy's finest adventures.",
            "Link acorda na misteriosa Ilha Koholint e precisa reunir os Instrumentos das Sereias para escapar. Sua história onírica, mundo denso e masmorras inventivas fizeram dele uma das melhores aventuras do Game Boy.",
        ),
        trivia: T(
            [
                "It began as an after-hours project by Nintendo staff member Kazuaki Morita.",
                "The game is set on Koholint Island and features characters from outside the Zelda series.",
                "It was the first The Legend of Zelda game released for a handheld console.",
            ],
            [
                "Começou como um projeto de horas livres do funcionário da Nintendo Kazuaki Morita.",
                "O jogo se passa na Ilha Koholint e apresenta personagens de fora da série Zelda.",
                "Foi o primeiro jogo de The Legend of Zelda lançado para um console portátil.",
            ],
        ),
    },
    "pokemon-red-blue": {
        releaseDate: L("February 27, 1996 (Japan)", "27 de fevereiro de 1996 (Japão)"),
        publisher: "Nintendo",
        developer: "Game Freak",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A young trainer explores a world of creatures, battling and collecting Pokémon on the way to the Indigo League. Its two-version structure and link-cable trading turned the Game Boy into a social playground.",
            "Um jovem treinador explora um mundo de criaturas, batalhando e colecionando Pokémon no caminho para a Liga Índigo. Sua estrutura em duas versões e a troca por cabo Link transformaram o Game Boy em um parque de diversões social.",
        ),
        trivia: T(
            [
                "The concept was inspired by Satoshi Tajiri's childhood hobby of collecting insects.",
                "Red and Blue feature version-exclusive Pokémon that encourage trading.",
                "The games reached North America in 1998 and became a global phenomenon.",
            ],
            [
                "O conceito foi inspirado no hobby de infância de Satoshi Tajiri de colecionar insetos.",
                "Red e Blue têm Pokémon exclusivos de cada versão, o que incentiva as trocas.",
                "Os jogos chegaram à América do Norte em 1998 e se tornaram um fenômeno global.",
            ],
        ),
    },
};
