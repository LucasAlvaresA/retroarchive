import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Neo Geo AES";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "metal-slug": {
        releaseDate: L("1996 (Japan)", "1996 (Japão)"),
        publisher: "SNK",
        developer: "Nazca Corporation",
        genre: L("Run and gun", "Corrida e tiro"),
        description: L(
            "Soldiers fight through a cartoon war zone filled with tanks, helicopters and bizarre enemies, rescuing prisoners along the way. Its hand-drawn animation and comic timing made Metal Slug one of the Neo Geo's most beloved action series.",
            "Soldados atravessam uma zona de guerra de desenho animado cheia de tanques, helicópteros e inimigos bizarros, resgatando prisioneiros pelo caminho. Sua animação desenhada à mão e timing cômico fizeram de Metal Slug uma das séries de ação mais queridas do Neo Geo.",
        ),
        trivia: T(
            [
                "It was developed by Nazca Corporation, a studio formed by former Irem staff.",
                "The game was designed for SNK's MVS arcade hardware before coming to the AES.",
                "Its detailed sprite animation remains a reference point for the genre.",
            ],
            [
                "Foi desenvolvido pela Nazca Corporation, um estúdio formado por ex-funcionários da Irem.",
                "O jogo foi projetado para o hardware de arcade MVS da SNK antes de chegar ao AES.",
                "Sua detalhada animação de sprites continua sendo referência para o gênero.",
            ],
        ),
    },
    "kof-98": {
        releaseDate: L("July 23, 1998 (Japan)", "23 de julho de 1998 (Japão)"),
        publisher: "SNK",
        developer: "SNK",
        genre: L("Fighting", "Luta"),
        description: L(
            "The King of Fighters '98 gathers fighters from across SNK's series for a dream match without a story. Its enormous roster, refined three-on-one battles and lasting balance made it a competitive favourite decades later.",
            "The King of Fighters '98 reúne lutadores de várias séries da SNK em uma luta dos sonhos sem história. Seu elenco enorme, batalhas três contra um refinadas e equilíbrio duradouro fizeram dele um favorito competitivo décadas depois.",
        ),
        trivia: T(
            [
                "It is subtitled The Slugfest in Japan and is known as a Dream Match title.",
                "The game deliberately has no story, allowing almost every major SNK fighter to appear.",
                "It remains a regular fixture at fighting game tournaments.",
            ],
            [
                "É subtitulado The Slugfest no Japão e é conhecido como um título Dream Match.",
                "O jogo não tem história de propósito, permitindo a presença de quase todos os grandes lutadores da SNK.",
                "Continua sendo presença frequente em torneios de jogos de luta.",
            ],
        ),
    },
    "samurai-shodown-ii": {
        releaseDate: L("1994 (Japan)", "1994 (Japão)"),
        publisher: "SNK",
        developer: "SNK",
        genre: L("Fighting", "Luta"),
        description: L(
            "Weapon-based duels unfold in feudal Japan, where a single decisive strike can end a round. Samurai Shodown II slowed the pace of fighting games and turned timing, range and nerve into its central drama.",
            "Duelos com armas acontecem no Japão feudal, onde um único golpe decisivo pode encerrar o round. Samurai Shodown II desacelerou o ritmo dos jogos de luta e transformou tempo, alcance e nervo em seu drama central.",
        ),
        trivia: T(
            [
                "It is the second entry in SNK's Samurai Shodown series.",
                "The game emphasises weapon range and heavy, consequential strikes.",
                "Its roster includes Haohmaru, Nakoruru and the referee Kuroko.",
            ],
            [
                "É o segundo título da série Samurai Shodown, da SNK.",
                "O jogo enfatiza o alcance das armas e golpes pesados e decisivos.",
                "Seu elenco inclui Haohmaru, Nakoruru e o árbitro Kuroko.",
            ],
        ),
    },
    "garou-mark-of-the-wolves": {
        releaseDate: L("November 26, 1999 (Japan)", "26 de novembro de 1999 (Japão)"),
        publisher: "SNK",
        developer: "SNK",
        genre: L("Fighting", "Luta"),
        description: L(
            "A new generation of fighters takes over Fatal Fury, led by Rock Howard and the wolf-powered Terry Bogard. Its smooth animation, top-of-screen T.O.P. system and confident style made it one of the Neo Geo's final great fighters.",
            "Uma nova geração de lutadores assume Fatal Fury, liderada por Rock Howard e pelo lobo Terry Bogard. Sua animação fluida, o sistema T.O.P. no topo da tela e o estilo confiante fizeram dele um dos últimos grandes jogos de luta do Neo Geo.",
        ),
        trivia: T(
            [
                "It introduced Rock Howard, the son of series antagonist Geese Howard.",
                "The T.O.P. system grants a chosen character a powerful boost during a selectable portion of the match.",
                "It was the last Fatal Fury game for over two decades, until Fatal Fury: City of the Wolves.",
            ],
            [
                "Apresentou Rock Howard, filho do antagonista da série, Geese Howard.",
                "O sistema T.O.P. concede a um personagem escolhido um reforço poderoso durante um trecho selecionável da luta.",
                "Foi o último jogo de Fatal Fury por mais de duas décadas, até Fatal Fury: City of the Wolves.",
            ],
        ),
    },
};
