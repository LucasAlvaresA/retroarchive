import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "PlayStation";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "crash-bandicoot": {
        releaseDate: L("September 9, 1996 (North America)", "9 de setembro de 1996 (América do Norte)"),
        publisher: "Sony Computer Entertainment",
        developer: "Naughty Dog",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Crash spins, jumps and slides across Wumpa Island to stop Dr. Neo Cortex. Carefully framed 3D pathways and colorful characters helped make the game a defining early PlayStation platformer.",
            "Crash gira, salta e desliza pela Ilha Wumpa para deter o Dr. Neo Cortex. Caminhos 3D cuidadosamente enquadrados e personagens coloridos ajudaram a tornar o jogo um platformer definidor do primeiro PlayStation.",
        ),
        trivia: T(
            [
                "It was Naughty Dog's first Crash Bandicoot game.",
                "The game was designed around a character-led 3D platforming experience.",
                "Crash's original design was created by Charles Zembillas.",
            ],
            [
                "Foi o primeiro jogo de Crash Bandicoot da Naughty Dog.",
                "O jogo foi projetado em torno de uma experiência de plataforma 3D conduzida por personagem.",
                "O design original de Crash foi criado por Charles Zembillas.",
            ],
        ),
    },
    "symphony-of-the-night": {
        releaseDate: L("March 20, 1997 (Japan)", "20 de março de 1997 (Japão)"),
        publisher: "Konami",
        developer: "Konami Computer Entertainment Tokyo",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "Alucard explores Dracula's ever-changing castle in a richly atmospheric adventure. Its interconnected map, character progression and secrets helped define the 'Metroidvania' style.",
            "Alucard explora o castelo sempre mutável de Drácula em uma aventura ricamente atmosférica. Seu mapa interconectado, progressão de personagem e segredos ajudaram a definir o estilo 'Metroidvania'.",
        ),
        trivia: T(
            [
                "The game was directed by Toru Hagihara, with Koji Igarashi serving as assistant director.",
                "Michiru Yamane composed the soundtrack.",
                "The North American release arrived in October 1997.",
            ],
            [
                "O jogo foi dirigido por Toru Hagihara, com Koji Igarashi como diretor assistente.",
                "Michiru Yamane compôs a trilha sonora.",
                "O lançamento norte-americano chegou em outubro de 1997.",
            ],
        ),
    },
    "final-fantasy-vii": {
        releaseDate: L("January 31, 1997 (Japan)", "31 de janeiro de 1997 (Japão)"),
        publisher: "Sony Computer Entertainment",
        developer: "Square",
        genre: L("Role-playing", "RPG"),
        description: L(
            "Cloud Strife joins a resistance against a corporation draining the planet's life. Its cinematic presentation and emotional story helped bring Japanese RPGs to a global audience.",
            "Cloud Strife se junta a uma resistência contra uma corporação que drena a vida do planeta. Sua apresentação cinematográfica e história emocional ajudaram a levar os RPGs japoneses a um público global.",
        ),
        trivia: T(
            [
                "It was the first mainline Final Fantasy game rendered with 3D graphics.",
                "The game's world and cast became iconic across subsequent films and spin-offs.",
            ],
            [
                "Foi o primeiro Final Fantasy principal renderizado com gráficos 3D.",
                "O mundo e o elenco do jogo se tornaram icônicos em filmes e derivados posteriores.",
            ],
        ),
    },
    "metal-gear-solid": {
        releaseDate: L("September 3, 1998 (Japan)", "3 de setembro de 1998 (Japão)"),
        publisher: "Konami",
        developer: "Konami Computer Entertainment Japan",
        genre: L("Stealth action", "Ação furtiva"),
        description: L(
            "Solid Snake infiltrates a remote facility to stop a nuclear threat. Hideo Kojima's cinematic direction and clever use of the medium turned stealth into storytelling.",
            "Solid Snake se infiltra em uma instalação remota para impedir uma ameaça nuclear. A direção cinematográfica de Hideo Kojima e o uso inteligente do meio transformaram a furtividade em narrativa.",
        ),
        trivia: T(
            [
                "The game is famous for its fourth-wall-breaking encounter with Psycho Mantis.",
                "It was directed and written by Hideo Kojima.",
            ],
            [
                "O jogo é famoso pelo encontro com Psycho Mantis, que quebra a quarta parede.",
                "Foi dirigido e escrito por Hideo Kojima.",
            ],
        ),
    },
};
