import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Nintendo Switch 2";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "mario-kart-world": {
        releaseDate: L("June 5, 2025 (Worldwide)", "5 de junho de 2025 (Mundial)"),
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        genre: L("Racing", "Corrida"),
        description: L(
            "The Switch 2 launch title turns the series into an open world, letting racers drive between courses and take on 24-player races. Its connected routes and knockout mode rethink the formula.",
            "O título de lançamento do Switch 2 transforma a série em mundo aberto, permitindo dirigir entre pistas e disputar corridas de 24 jogadores. Suas rotas conectadas e o modo eliminatório repensam a fórmula.",
        ),
        trivia: T(
            [
                "It launched alongside the Nintendo Switch 2.",
                "Races support up to 24 players, the largest grid in the series.",
            ],
            [
                "Foi lançado junto com o Nintendo Switch 2.",
                "As corridas suportam até 24 jogadores, o maior grid da série.",
            ],
        ),
    },
    "donkey-kong-bananza": {
        releaseDate: L("July 17, 2025 (Worldwide)", "17 de julho de 2025 (Mundial)"),
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Donkey Kong tunnels through fully destructible layers of earth in a 3D platformer built around smashing and digging. Its playful destruction showcases the Switch 2's power.",
            "Donkey Kong atravessa camadas de terra totalmente destrutíveis em um plataforma 3D construído em torno de quebrar e cavar. Sua destruição divertida demonstra a potência do Switch 2.",
        ),
        trivia: T(
            [
                "It is the first 3D Donkey Kong platformer since Donkey Kong 64.",
                "Most of the terrain in the game can be destroyed or dug through.",
            ],
            [
                "É o primeiro plataforma 3D do Donkey Kong desde Donkey Kong 64.",
                "A maior parte do terreno do jogo pode ser destruída ou escavada.",
            ],
        ),
    },
    "kirby-air-riders": {
        releaseDate: L("November 20, 2025 (Worldwide)", "20 de novembro de 2025 (Mundial)"),
        publisher: "Nintendo",
        developer: "Bandai Namco Studios; Sora Ltd.",
        genre: L("Racing", "Corrida"),
        description: L(
            "Kirby rides air machines through fast, chaotic courses in a follow-up to the GameCube cult classic. Simple controls and deep customization make it a party racing game with surprising depth.",
            "Kirby pilota máquinas voadoras por pistas rápidas e caóticas nesta continuação do cultuado jogo do GameCube. Controles simples e personalização profunda fazem dele um jogo de corrida para festas com profundidade surpreendente.",
        ),
        trivia: T(
            [
                "It is directed by Masahiro Sakurai, creator of Kirby and Super Smash Bros.",
                "The game is a sequel to Kirby Air Ride, released on the GameCube in 2003.",
            ],
            [
                "É dirigido por Masahiro Sakurai, criador de Kirby e Super Smash Bros.",
                "O jogo é uma sequência de Kirby Air Ride, lançado para o GameCube em 2003.",
            ],
        ),
    },
    "metroid-prime-4": {
        releaseDate: L("December 4, 2025 (Worldwide)", "4 de dezembro de 2025 (Mundial)"),
        publisher: "Nintendo",
        developer: "Retro Studios",
        genre: L("First-person action-adventure", "Ação e aventura em primeira pessoa"),
        description: L(
            "Samus Aran returns in a new first-person adventure, exploring the planet Viewros and wielding psychic abilities. It brings the Prime series to a new generation with modern controls and presentation.",
            "Samus Aran retorna em uma nova aventura em primeira pessoa, explorando o planeta Viewros e usando habilidades psíquicas. Ela leva a série Prime a uma nova geração com controles e apresentação modernos.",
        ),
        trivia: T(
            [
                "It is the first new mainline Metroid Prime game since 2007.",
                "Development was moved to Retro Studios in 2019 and restarted.",
            ],
            [
                "É o primeiro jogo principal inédito de Metroid Prime desde 2007.",
                "O desenvolvimento foi transferido para a Retro Studios em 2019 e recomeçado.",
            ],
        ),
    },
};
