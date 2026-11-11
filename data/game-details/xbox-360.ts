import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Xbox 360";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "gears-of-war": {
        releaseDate: L("November 7, 2006 (North America)", "7 de novembro de 2006 (América do Norte)"),
        publisher: "Microsoft Game Studios",
        developer: "Epic Games",
        genre: L("Third-person shooter", "Tiro em terceira pessoa"),
        description: L(
            "Marcus Fenix fights the Locust Horde through a ruined planet, using cover and coordinated squad tactics. Its weighty combat and dark world became a visual benchmark for the Xbox 360.",
            "Marcus Fenix enfrenta a Horda Locust em um planeta arruinado, usando cobertura e táticas coordenadas de esquadrão. Seu combate pesado e mundo sombrio se tornaram referência visual para o Xbox 360.",
        ),
        trivia: T(
            [
                "It was built with Unreal Engine 3 and became a showcase for the technology.",
                "The game popularized the cover-based third-person shooter formula.",
            ],
            [
                "Foi construído com a Unreal Engine 3 e se tornou uma vitrine da tecnologia.",
                "O jogo popularizou a fórmula de tiro em terceira pessoa baseada em cobertura.",
            ],
        ),
    },
    "mass-effect": {
        releaseDate: L("November 20, 2007 (North America)", "20 de novembro de 2007 (América do Norte)"),
        publisher: "Microsoft Game Studios",
        developer: "BioWare",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "Commander Shepard builds a crew and uncovers a galactic threat while making choices that carry across the trilogy. Its cinematic dialogue and world-building set a new standard for science-fiction RPGs.",
            "Comandante Shepard reúne uma tripulação e descobre uma ameaça galáctica enquanto toma decisões que atravessam a trilogia. Seus diálogos cinematográficos e construção de mundo estabeleceram um novo padrão para RPGs de ficção científica.",
        ),
        trivia: T(
            [
                "It was the first game in BioWare's Mass Effect trilogy.",
                "Player choices could be imported into later games.",
            ],
            [
                "Foi o primeiro jogo da trilogia Mass Effect da BioWare.",
                "As escolhas do jogador podiam ser importadas para os jogos seguintes.",
            ],
        ),
    },
    "halo-3": {
        releaseDate: L("September 25, 2007 (Worldwide)", "25 de setembro de 2007 (Mundial)"),
        publisher: "Microsoft Game Studios",
        developer: "Bungie",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "The original trilogy reaches its climax as Master Chief and the Arbiter face the Flood and the Covenant. Its campaign, multiplayer and Forge mode made it a cultural event.",
            "A trilogia original chega ao clímax enquanto Master Chief e o Arbiter enfrentam o Flood e a Covenant. Sua campanha, multiplayer e modo Forge fizeram dele um evento cultural.",
        ),
        trivia: T(
            [
                "It was the first Halo game released simultaneously worldwide.",
                "The Forge mode let players build and share custom multiplayer maps.",
            ],
            [
                "Foi o primeiro Halo lançado simultaneamente no mundo todo.",
                "O modo Forge permitia criar e compartilhar mapas multiplayer personalizados.",
            ],
        ),
    },
    "red-dead-redemption": {
        releaseDate: L("May 18, 2010 (North America)", "18 de maio de 2010 (América do Norte)"),
        publisher: "Rockstar Games",
        developer: "Rockstar San Diego",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "John Marston hunts his former gang across a fading American frontier. Its open world, weather and quiet moments made the Western feel alive.",
            "John Marston caça sua antiga gangue por uma fronteira americana em declínio. Seu mundo aberto, clima e momentos silenciosos fizeram o Velho Oeste parecer vivo.",
        ),
        trivia: T(
            [
                "It was developed by Rockstar San Diego.",
                "The game won numerous awards for its open world and storytelling.",
            ],
            [
                "Foi desenvolvido pela Rockstar San Diego.",
                "O jogo ganhou inúmeros prêmios por seu mundo aberto e narrativa.",
            ],
        ),
    },
};
