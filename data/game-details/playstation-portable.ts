import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "PlayStation Portable";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "gta-liberty-city-stories": {
        releaseDate: L("October 25, 2005 (North America)", "25 de outubro de 2005 (América do Norte)"),
        publisher: "Rockstar Games",
        developer: "Rockstar Leeds",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Toni Cipriani returns to Liberty City and works his way up the criminal ladder in a portable Grand Theft Auto built around short, sharp missions. It proved that the series' open city could survive on a handheld.",
            "Toni Cipriani retorna a Liberty City e sobe na hierarquia do crime em um Grand Theft Auto portátil construído em torno de missões curtas e diretas. Provou que a cidade aberta da série podia funcionar em um portátil.",
        ),
        trivia: T(
            [
                "It was the first Grand Theft Auto game designed for the PSP.",
                "The story is set three years before Grand Theft Auto III.",
                "It was later ported to the PlayStation 2 in 2006.",
            ],
            [
                "Foi o primeiro Grand Theft Auto projetado para o PSP.",
                "A história se passa três anos antes de Grand Theft Auto III.",
                "Mais tarde, foi portado para o PlayStation 2 em 2006.",
            ],
        ),
    },
    "god-of-war-chains-of-olympus": {
        releaseDate: L("March 4, 2008 (North America)", "4 de março de 2008 (América do Norte)"),
        publisher: "Sony Computer Entertainment",
        developer: "Ready at Dawn",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Kratos takes on the gods of Olympus in a prequel that brings the series' brutal combat to the PSP. Its scale and fluid action were a technical showcase for the handheld.",
            "Kratos enfrenta os deuses do Olimpo em uma prequela que leva o combate brutal da série para o PSP. Sua escala e ação fluida foram uma demonstração técnica do portátil.",
        ),
        trivia: T(
            [
                "It is a prequel set before the original God of War.",
                "It was developed by Ready at Dawn.",
                "It was later bundled with God of War: Ghost of Sparta in the Origins Collection.",
            ],
            [
                "É uma prequela que se passa antes do God of War original.",
                "Foi desenvolvido pela Ready at Dawn.",
                "Mais tarde, foi reunido a God of War: Ghost of Sparta na Origins Collection.",
            ],
        ),
    },
    "crisis-core-ffvii": {
        releaseDate: L("September 13, 2007 (Japan)", "13 de setembro de 2007 (Japão)"),
        publisher: "Square Enix",
        developer: "Square Enix",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "Zack Fair's story unfolds before the events of Final Fantasy VII, mixing real-time combat with a slot-machine-style power system. It gave one of gaming's most famous supporting characters a tragedy of his own.",
            "A história de Zack Fair se desenrola antes dos eventos de Final Fantasy VII, misturando combate em tempo real com um sistema de poderes estilo caça-níqueis. Deu a um dos personagens coadjuvantes mais famosos dos games uma tragédia própria.",
        ),
        trivia: T(
            [
                "It is a prequel to Final Fantasy VII.",
                "The Digital Mind Wave system uses spinning slots to trigger bonuses.",
                "It was remastered in 2022 as Crisis Core: Final Fantasy VII Reunion.",
            ],
            [
                "É uma prequela de Final Fantasy VII.",
                "O sistema Digital Mind Wave usa roletas giratórias para ativar bônus.",
                "Foi remasterizado em 2022 como Crisis Core: Final Fantasy VII Reunion.",
            ],
        ),
    },
    "monster-hunter-freedom-unite": {
        releaseDate: L("March 27, 2008 (Japan)", "27 de março de 2008 (Japão)"),
        publisher: "Capcom",
        developer: "Capcom",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "Hunters track enormous monsters across snowy peaks and volcanic valleys, crafting gear from the parts they carve. Its ad-hoc four-player hunts made the PSP a social hub for one of Capcom's biggest franchises.",
            "Caçadores rastreiam monstros enormes por picos nevados e vales vulcânicos, criando equipamentos a partir das partes que recolhem. Suas caçadas para quatro jogadores via ad-hoc fizeram do PSP um ponto de encontro social para uma das maiores franquias da Capcom.",
        ),
        trivia: T(
            [
                "It is an expanded version of Monster Hunter Freedom 2.",
                "Up to four players can hunt together over an ad-hoc connection.",
                "The series became a cultural phenomenon in Japan, particularly on the PSP.",
            ],
            [
                "É uma versão expandida de Monster Hunter Freedom 2.",
                "Até quatro jogadores podem caçar juntos por uma conexão ad-hoc.",
                "A série se tornou um fenômeno cultural no Japão, especialmente no PSP.",
            ],
        ),
    },
};
