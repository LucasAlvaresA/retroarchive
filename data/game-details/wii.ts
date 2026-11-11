import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Wii";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "wii-sports": {
        releaseDate: L("November 19, 2006 (North America)", "19 de novembro de 2006 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Sports", "Esporte"),
        description: L(
            "Tennis, bowling and boxing became living-room rituals through simple motion controls. Packed with the console, it introduced gaming to an entirely new audience.",
            "Tênis, boliche e boxe se tornaram rituais de sala de estar por meio de controles de movimento simples. Incluído com o console, apresentou os jogos a um público completamente novo.",
        ),
        trivia: T(
            [
                "It was bundled with the Wii in most regions.",
                "Its simple motion controls helped the Wii reach players who had never owned a console.",
            ],
            [
                "Foi incluído com o Wii na maioria das regiões.",
                "Seus controles de movimento simples ajudaram o Wii a alcançar jogadores que nunca tiveram um console.",
            ],
        ),
    },
    "twilight-princess": {
        releaseDate: L("November 19, 2006 (North America)", "19 de novembro de 2006 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link is drawn into a twilight realm and must balance his human and wolf forms to save Hyrule. Its darker tone and expansive quest made it a launch showpiece for the Wii.",
            "Link é levado a um reino do crepúsculo e precisa equilibrar as formas humana e de lobo para salvar Hyrule. Seu tom mais sombrio e jornada ampla fizeram dele uma vitrine de lançamento do Wii.",
        ),
        trivia: T(
            [
                "It released on both the Wii and GameCube.",
                "The Wii version mirrored the entire world to match right-handed motion controls.",
            ],
            [
                "Foi lançado para Wii e GameCube.",
                "A versão de Wii espelhou o mundo inteiro para se adequar aos controles de movimento para destros.",
            ],
        ),
    },
    "super-mario-galaxy": {
        releaseDate: L("November 1, 2007 (Japan)", "1 de novembro de 2007 (Japão)"),
        publisher: "Nintendo",
        developer: "Nintendo EAD Tokyo",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario leaps between tiny planets and gravity-bending galaxies to rescue Peach and Rosalina. Its inventive physics and orchestral score made it a pinnacle of 3D platforming.",
            "Mario salta entre planetas minúsculos e galáxias que desafiam a gravidade para resgatar Peach e Rosalina. Sua física inventiva e trilha orquestral fizeram dele um auge do plataforma 3D.",
        ),
        trivia: T(
            [
                "It was developed by Nintendo EAD Tokyo, the team behind Donkey Kong Jungle Beat.",
                "The game's orchestral soundtrack was recorded with the Mario Galaxy Orchestra.",
            ],
            [
                "Foi desenvolvido pela Nintendo EAD Tokyo, equipe de Donkey Kong Jungle Beat.",
                "A trilha orquestral foi gravada com a Mario Galaxy Orchestra.",
            ],
        ),
    },
    "xenoblade-chronicles": {
        releaseDate: L("June 10, 2010 (Japan)", "10 de junho de 2010 (Japão)"),
        publisher: "Nintendo",
        developer: "Monolith Soft",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A vast world rests on the bodies of two frozen giants, and a young hero sets out to uncover why. Its enormous landscapes and real-time combat made it a cult favorite.",
            "Um mundo vasto repousa sobre os corpos de dois gigantes congelados, e um jovem herói parte para descobrir o motivo. Suas paisagens enormes e combate em tempo real fizeram dele um favorito cultuado.",
        ),
        trivia: T(
            [
                "It was developed by Monolith Soft.",
                "The game's overseas release became a fan campaign known as Operation Rainfall.",
            ],
            [
                "Foi desenvolvido pela Monolith Soft.",
                "O lançamento no exterior virou uma campanha de fãs conhecida como Operation Rainfall.",
            ],
        ),
    },
};
