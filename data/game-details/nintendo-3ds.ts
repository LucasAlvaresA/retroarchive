import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Nintendo 3DS";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "super-mario-3d-land": {
        releaseDate: L("November 3, 2011 (Japan)", "3 de novembro de 2011 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD Tokyo",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario runs, jumps and rolls through compact 3D courses designed to be read at a glance. Its stereoscopic depth and short, inventive stages made it the ideal introduction to the Nintendo 3DS.",
            "Mario corre, salta e rola por fases 3D compactas, projetadas para serem lidas rapidamente. Sua profundidade estereoscópica e fases curtas e inventivas fizeram dele a introdução ideal ao Nintendo 3DS.",
        ),
        trivia: T(
            [
                "It was the first 3D Mario platformer designed specifically for a handheld.",
                "The stereoscopic 3D effect was used to help players judge jumps.",
                "It brought back the Tanooki suit from Super Mario Bros. 3.",
            ],
            [
                "Foi o primeiro jogo de plataforma 3D do Mario projetado especificamente para um portátil.",
                "O efeito 3D estereoscópico era usado para ajudar os jogadores a calcular os saltos.",
                "Trouxe de volta o traje Tanooki de Super Mario Bros. 3.",
            ],
        ),
    },
    "fire-emblem-awakening": {
        releaseDate: L("April 19, 2012 (Japan)", "19 de abril de 2012 (Japão)"),
        publisher: "Nintendo",
        developer: "Intelligent Systems",
        genre: L("Tactical role-playing", "RPG tático"),
        description: L(
            "Chrom and his allies defend their kingdom while a mysterious amnesiac joins the fight. Its accessible options and character-driven support conversations helped Fire Emblem reach a much wider audience.",
            "Chrom e seus aliados defendem seu reino enquanto um misterioso amnésico se junta à luta. Suas opções acessíveis e conversas de apoio centradas nos personagens ajudaram Fire Emblem a alcançar um público muito maior.",
        ),
        trivia: T(
            [
                "It was planned as the series' final game if it failed to sell well.",
                "It introduced Casual Mode, which disables permanent character death.",
                "The story involves time travel and the character Lucina.",
            ],
            [
                "Foi planejado como o último jogo da série caso não vendesse bem.",
                "Introduziu o Modo Casual, que desativa a morte permanente de personagens.",
                "A história envolve viagem no tempo e a personagem Lucina.",
            ],
        ),
    },
    "animal-crossing-new-leaf": {
        releaseDate: L("November 8, 2012 (Japan)", "8 de novembro de 2012 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Life simulation", "Simulação de vida"),
        description: L(
            "The player arrives in a small town and is unexpectedly made mayor, shaping its development while fishing, gardening and befriending neighbours. Its gentle pace and constant small discoveries made it a comfort game for millions.",
            "O jogador chega a uma pequena cidade e inesperadamente se torna prefeito, moldando seu desenvolvimento enquanto pesca, cultiva plantas e faz amizade com os vizinhos. Seu ritmo tranquilo e as pequenas descobertas constantes fizeram dele um jogo reconfortante para milhões de pessoas.",
        ),
        trivia: T(
            [
                "The player becomes the town's mayor for the first time in the series.",
                "It used StreetPass and Play Coins on the Nintendo 3DS.",
                "It was released in Japan in 2012 and worldwide in 2013.",
            ],
            [
                "Pela primeira vez na série, o jogador se torna prefeito da cidade.",
                "Usava StreetPass e Play Coins no Nintendo 3DS.",
                "Foi lançado no Japão em 2012 e no resto do mundo em 2013.",
            ],
        ),
    },
    "a-link-between-worlds": {
        releaseDate: L("November 22, 2013 (Worldwide)", "22 de novembro de 2013 (Mundial)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link returns to Hyrule and Lorule, merging into walls to move between two parallel kingdoms. Its open-ended item rental and elegant puzzle design made it one of the most acclaimed handheld Zelda games.",
            "Link retorna a Hyrule e Lorule, fundindo-se às paredes para se mover entre dois reinos paralelos. Seu aluguel de itens em sistema aberto e design de quebra-cabeças elegante fizeram dele um dos jogos de Zelda portáteis mais aclamados.",
        ),
        trivia: T(
            [
                "It is a sequel to The Legend of Zelda: A Link to the Past.",
                "The wall-merging mechanic lets Link travel across parallel worlds.",
                "Items can be rented, allowing dungeons to be tackled in almost any order.",
            ],
            [
                "É uma sequência de The Legend of Zelda: A Link to the Past.",
                "O mecanismo de fusão com as paredes permite a Link viajar entre mundos paralelos.",
                "Os itens podem ser alugados, permitindo enfrentar as masmorras em quase qualquer ordem.",
            ],
        ),
    },
};
