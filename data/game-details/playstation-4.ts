import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "PlayStation 4";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "bloodborne": {
        releaseDate: L("March 24, 2015 (North America)", "24 de março de 2015 (América do Norte)"),
        publisher: "Sony Computer Entertainment",
        developer: "FromSoftware",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A hunter navigates the gothic city of Yharnam, where beasts and cosmic horrors lurk around every corner. Its aggressive combat and dense lore made it a defining PS4 exclusive.",
            "Um caçador percorre a cidade gótica de Yharnam, onde feras e horrores cósmicos espreitam em cada esquina. Seu combate agressivo e lore denso fizeram dele um exclusivo definidor do PS4.",
        ),
        trivia: T(
            [
                "It was directed by Hidetaka Miyazaki.",
                "The game's Trick Weapon system lets players transform weapons mid-combo.",
            ],
            [
                "Foi dirigido por Hidetaka Miyazaki.",
                "O sistema de Trick Weapons permite transformar armas no meio dos combos.",
            ],
        ),
    },
    "witcher-3": {
        releaseDate: L("May 19, 2015 (Worldwide)", "19 de maio de 2015 (Mundial)"),
        publisher: "CD Projekt",
        developer: "CD Projekt Red",
        genre: L("Role-playing", "RPG"),
        description: L(
            "Geralt searches for Ciri across a vast, war-torn fantasy world, where side quests carry the weight of main stories. Its writing and scale set a new standard for open-world RPGs.",
            "Geralt procura Ciri por um vasto mundo de fantasia devastado pela guerra, onde missões secundárias têm o peso das principais. Sua escrita e escala estabeleceram um novo padrão para RPGs de mundo aberto.",
        ),
        trivia: T(
            [
                "It won numerous Game of the Year awards in 2015.",
                "The game's expansions, Hearts of Stone and Blood and Wine, were acclaimed in their own right.",
            ],
            [
                "Ganhou inúmeros prêmios de Jogo do Ano em 2015.",
                "As expansões Hearts of Stone e Blood and Wine foram aclamadas por si só.",
            ],
        ),
    },
    "god-of-war-2018": {
        releaseDate: L("April 20, 2018 (Worldwide)", "20 de abril de 2018 (Mundial)"),
        publisher: "Sony Interactive Entertainment",
        developer: "Santa Monica Studio",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Kratos and his son Atreus journey through Norse realms, learning from each other as gods close in. Its intimate story and unbroken camera gave the series new emotional depth.",
            "Kratos e seu filho Atreus viajam pelos reinos nórdicos, aprendendo um com o outro enquanto deuses se aproximam. Sua história íntima e câmera sem cortes deram à série uma nova profundidade emocional.",
        ),
        trivia: T(
            [
                "It was directed by Cory Barlog.",
                "The game is presented as a single continuous shot.",
            ],
            [
                "Foi dirigido por Cory Barlog.",
                "O jogo é apresentado como um plano-sequência contínuo.",
            ],
        ),
    },
    "red-dead-redemption-2": {
        releaseDate: L("October 26, 2018 (Worldwide)", "26 de outubro de 2018 (Mundial)"),
        publisher: "Rockstar Games",
        developer: "Rockstar Studios",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Arthur Morgan rides with the Van der Linde gang as the American frontier closes in. Its slow-burn story and extraordinary detail made it one of the most ambitious games ever made.",
            "Arthur Morgan cavalga com a gangue Van der Linde enquanto a fronteira americana se fecha. Sua história de ritmo lento e detalhes extraordinários fizeram dele um dos jogos mais ambiciosos já criados.",
        ),
        trivia: T(
            [
                "It is a prequel to the original Red Dead Redemption.",
                "The game's world includes dynamic weather, wildlife and detailed routines for NPCs.",
            ],
            [
                "É uma prequela do Red Dead Redemption original.",
                "O mundo do jogo inclui clima dinâmico, vida selvagem e rotinas detalhadas para os NPCs.",
            ],
        ),
    },
};
