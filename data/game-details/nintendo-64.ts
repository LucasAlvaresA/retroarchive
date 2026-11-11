import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Nintendo 64";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "super-mario-64": {
        releaseDate: L("June 23, 1996 (Japan)", "23 de junho de 1996 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario explores Princess Peach's castle and its paintings, leaping into expansive 3D worlds to collect Power Stars. Its analog movement and open-ended level design helped shape 3D platforming.",
            "Mario explora o castelo da Princesa Peach e suas pinturas, saltando para mundos 3D amplos para coletar Estrelas. Movimento analógico e design aberto de fases ajudaram a moldar a plataforma 3D.",
        ),
        trivia: T(
            [
                "It launched in Japan alongside the Nintendo 64.",
                "The game was directed by Shigeru Miyamoto, with Yoshiaki Koizumi among its designers.",
                "Its camera system gave players control over perspective in a 3D platform game.",
            ],
            [
                "Foi lançado no Japão junto com o Nintendo 64.",
                "O jogo foi dirigido por Shigeru Miyamoto, com Yoshiaki Koizumi entre os designers.",
                "Seu sistema de câmera deu aos jogadores controle da perspectiva em um jogo de plataforma 3D.",
            ],
        ),
    },
    "ocarina-of-time": {
        releaseDate: L("November 21, 1998 (Japan)", "21 de novembro de 1998 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link's journey through time brings Hyrule to life in a vast 3D adventure. Dungeon design, musical puzzles and context-sensitive controls became influential touchstones for the genre.",
            "A jornada de Link através do tempo dá vida a Hyrule em uma vasta aventura 3D. Design de masmorras, quebra-cabeças musicais e controles contextuais tornaram-se referências influentes para o gênero.",
        ),
        trivia: T(
            [
                "The game introduced Z-targeting, a lock-on system for 3D combat.",
                "Koji Kondo composed its music, including melodies played on the ocarina.",
                "It was directed by Eiji Aonuma, Yoshiaki Koizumi and others under Shigeru Miyamoto's production.",
            ],
            [
                "O jogo introduziu o Z-targeting, um sistema de travamento para combate 3D.",
                "Koji Kondo compôs a música, incluindo melodias tocadas na ocarina.",
                "Foi dirigido por Eiji Aonuma, Yoshiaki Koizumi e outros, sob produção de Shigeru Miyamoto.",
            ],
        ),
    },
    "goldeneye-007": {
        releaseDate: L("August 25, 1997 (North America)", "25 de agosto de 1997 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Rare",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "James Bond's mission moves from stealth to explosive action across memorable locations. Its four-player split-screen multiplayer made it a social staple of the Nintendo 64 era.",
            "A missão de James Bond passa da furtividade à ação explosiva em locais memoráveis. Seu multiplayer em tela dividida para quatro jogadores o tornou um marco social da era Nintendo 64.",
        ),
        trivia: T(
            [
                "It was developed by Rare and based on the 1995 film.",
                "The multiplayer mode was added late in development and became a defining feature.",
            ],
            [
                "Foi desenvolvido pela Rare e baseado no filme de 1995.",
                "O modo multiplayer foi adicionado no fim do desenvolvimento e se tornou uma característica marcante.",
            ],
        ),
    },
    "mario-kart-64": {
        releaseDate: L("December 14, 1996 (Japan)", "14 de dezembro de 1996 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Racing", "Corrida"),
        description: L(
            "Mario and friends race across 3D tracks with items, shortcuts and chaotic four-player battles. Its friendly rivalry made it a living-room fixture for years.",
            "Mario e seus amigos correm por pistas 3D com itens, atalhos e batalhas caóticas para quatro jogadores. Sua rivalidade amigável o manteve presente nas salas de estar por anos.",
        ),
        trivia: T(
            [
                "It was the first Mario Kart game with fully 3D courses.",
                "The multiplayer battle modes became as popular as the races themselves.",
            ],
            [
                "Foi o primeiro Mario Kart com pistas totalmente 3D.",
                "Os modos de batalha multiplayer se tornaram tão populares quanto as corridas.",
            ],
        ),
    },
};
