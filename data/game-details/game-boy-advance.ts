import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Game Boy Advance";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "metroid-fusion": {
        releaseDate: L("November 17, 2002 (North America)", "17 de novembro de 2002 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus Aran is infected by the X parasite and must explore a research station in a new Fusion Suit. Its tighter, more guided structure gave the 2D Metroid formula a tense, cinematic edge.",
            "Samus Aran é infectada pelo parasita X e precisa explorar uma estação de pesquisa com o novo Fusion Suit. Sua estrutura mais guiada e concentrada deu à fórmula 2D de Metroid um tom tenso e cinematográfico.",
        ),
        trivia: T(
            [
                "It was the first new 2D Metroid game since Super Metroid in 1994.",
                "It launched in North America on the same day as Metroid Prime.",
                "The game introduced the X parasite and Samus's Fusion Suit.",
            ],
            [
                "Foi o primeiro novo Metroid 2D desde Super Metroid, de 1994.",
                "Foi lançado na América do Norte no mesmo dia que Metroid Prime.",
                "O jogo apresentou o parasita X e o Fusion Suit de Samus.",
            ],
        ),
    },
    "golden-sun": {
        releaseDate: L("August 1, 2001 (Japan)", "1 de agosto de 2001 (Japão)"),
        publisher: "Nintendo",
        developer: "Camelot",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A young adept sets out to stop the lighting of the elemental lighthouses and uncover the truth about alchemy. Its Djinn collection and class-changing systems gave the Game Boy Advance an original role-playing series of its own.",
            "Um jovem adepto parte para impedir o acendimento dos faróis elementais e descobrir a verdade sobre a alquimia. Seu sistema de coleta de Djinn e troca de classes deu ao Game Boy Advance uma série de RPG original.",
        ),
        trivia: T(
            [
                "It was developed by Camelot, known for its Mario Golf and Mario Tennis games.",
                "Djinn can be assigned to characters to change their class and abilities.",
                "The story continues directly in Golden Sun: The Lost Age.",
            ],
            [
                "Foi desenvolvido pela Camelot, conhecida pelos jogos Mario Golf e Mario Tennis.",
                "Djinn podem ser atribuídos aos personagens para mudar sua classe e habilidades.",
                "A história continua diretamente em Golden Sun: The Lost Age.",
            ],
        ),
    },
    "advance-wars": {
        releaseDate: L("September 10, 2001 (North America)", "10 de setembro de 2001 (América do Norte)"),
        publisher: "Nintendo",
        developer: "Intelligent Systems",
        genre: L("Turn-based strategy", "Estratégia por turnos"),
        description: L(
            "Commanding officers send infantry, tanks and aircraft across grid-based maps in a battle of supply lines and terrain. Its cheerful presentation and deep tactical rules made Advance Wars a gateway to strategy games.",
            "Comandantes enviam infantaria, tanques e aeronaves por mapas em grade em uma batalha de linhas de suprimento e terreno. Sua apresentação alegre e regras táticas profundas fizeram de Advance Wars uma porta de entrada para jogos de estratégia.",
        ),
        trivia: T(
            [
                "It is part of Nintendo's Famicom Wars series.",
                "It was the first game in the series to be released outside Japan.",
                "Its Japanese and European releases were delayed following the September 11 attacks.",
            ],
            [
                "Faz parte da série Famicom Wars, da Nintendo.",
                "Foi o primeiro jogo da série lançado fora do Japão.",
                "Seus lançamentos no Japão e na Europa foram adiados após os ataques de 11 de setembro.",
            ],
        ),
    },
    "minish-cap": {
        releaseDate: L("November 4, 2004 (Japan)", "4 de novembro de 2004 (Japão)"),
        publisher: "Nintendo",
        developer: "Capcom / Flagship",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link teams up with the talking hat Ezlo and gains the power to shrink to the size of the Minish. Its tiny-scale puzzles and vibrant world made it one of the Game Boy Advance's most polished adventures.",
            "Link se une ao chapéu falante Ezlo e ganha o poder de encolher ao tamanho dos Minish. Seus quebra-cabeças em escala minúscula e mundo vibrante fizeram dele uma das aventuras mais polidas do Game Boy Advance.",
        ),
        trivia: T(
            [
                "It was developed by Capcom's Flagship studio with Nintendo.",
                "The shrinking mechanic lets players explore the same rooms at two different scales.",
                "The game arrived late in the Game Boy Advance's life cycle.",
            ],
            [
                "Foi desenvolvido pelo estúdio Flagship, da Capcom, em parceria com a Nintendo.",
                "O mecanismo de encolhimento permite explorar as mesmas salas em duas escalas diferentes.",
                "O jogo chegou no fim do ciclo de vida do Game Boy Advance.",
            ],
        ),
    },
};
