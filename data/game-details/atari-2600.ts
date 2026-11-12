import type { GameDetails, Localized, Platform } from "../games";

export const platform: Platform = "Atari 2600";

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const gameDetails: Record<string, GameDetails> = {
    "adventure-2600": {
        releaseDate: L("1980 (North America)", "1980 (América do Norte)"),
        publisher: "Atari, Inc.",
        developer: "Atari, Inc.",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "A small square hero explores a maze of castles, dungeons and caverns in search of a golden chalice, dodging dragons and carrying a handful of useful objects. Its open structure made it one of the first console action-adventures and one of the most influential Atari 2600 games.",
            "Um pequeno herói quadrado explora um labirinto de castelos, masmorras e cavernas em busca de um cálice dourado, fugindo de dragões e carregando alguns objetos úteis. Sua estrutura aberta fez dele uma das primeiras aventuras de ação dos consoles e um dos jogos mais influentes do Atari 2600.",
        ),
        trivia: T(
            [
                "It was designed and programmed by Warren Robinett.",
                "A hidden room displays the programmer's name — one of the first well-known video game Easter eggs.",
                "It was one of the earliest console games to let players carry and use an inventory of items.",
            ],
            [
                "Foi projetado e programado por Warren Robinett.",
                "Uma sala secreta exibe o nome do programador — um dos primeiros easter eggs conhecidos dos videogames.",
                "Foi um dos primeiros jogos de console a permitir carregar e usar um inventário de itens.",
            ],
        ),
    },
    pitfall: {
        releaseDate: L("September 1982 (North America)", "Setembro de 1982 (América do Norte)"),
        publisher: "Activision",
        developer: "Activision",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Pitfall Harry runs, jumps and swings through a jungle of crocodiles, snakes and quicksand in a race to collect treasure before time runs out. Its 255 screens and tight time limit turned a simple adventure into one of the Atari 2600's most memorable challenges.",
            "Pitfall Harry corre, salta e se balança por uma selva de crocodilos, cobras e areia movediça na corrida para coletar tesouros antes que o tempo acabe. Suas 255 telas e o limite de tempo apertado transformaram uma aventura simples em um dos desafios mais marcantes do Atari 2600.",
        ),
        trivia: T(
            [
                "It was designed by David Crane, one of Activision's founding programmers.",
                "The game spans 255 screens and gives the player a 20-minute countdown.",
                "It became one of the best-selling games ever released for the Atari 2600.",
            ],
            [
                "Foi criado por David Crane, um dos programadores fundadores da Activision.",
                "O jogo tem 255 telas e dá ao jogador uma contagem regressiva de 20 minutos.",
                "Tornou-se um dos jogos mais vendidos já lançados para o Atari 2600.",
            ],
        ),
    },
    "yars-revenge": {
        releaseDate: L("May 1982 (North America)", "Maio de 1982 (América do Norte)"),
        publisher: "Atari, Inc.",
        developer: "Atari, Inc.",
        genre: L("Shoot 'em up", "Tiro e nave"),
        description: L(
            "A Yar, a mutated fly-like warrior, attacks the Qotile shield with a powerful cannon while dodging its energy attacks. Its fast, almost hypnotic rhythm gave the Atari 2600 one of its most distinctive original shooters.",
            "Um Yar, um guerreiro mutante semelhante a uma mosca, ataca o escudo Qotile com um canhão poderoso enquanto desvia de seus ataques de energia. Seu ritmo rápido e quase hipnótico deu ao Atari 2600 um dos seus shooters originais mais marcantes.",
        ),
        trivia: T(
            [
                "It was designed by Howard Scott Warshaw, who also created E.T. the Extra-Terrestrial.",
                "The game began as a port of the arcade title Star Castle before evolving into an original concept.",
                "Its original release included a pack-in comic book that expanded the game's story.",
            ],
            [
                "Foi criado por Howard Scott Warshaw, que também fez E.T. the Extra-Terrestrial.",
                "O jogo começou como uma conversão do arcade Star Castle antes de se tornar um conceito original.",
                "Seu lançamento original incluía um gibi que ampliava a história do jogo.",
            ],
        ),
    },
    "space-invaders-2600": {
        releaseDate: L("March 1980 (North America)", "Março de 1980 (América do Norte)"),
        publisher: "Atari, Inc.",
        developer: "Atari, Inc.",
        genre: L("Shoot 'em up", "Tiro e nave"),
        description: L(
            "The Atari 2600 adaptation of Taito's arcade phenomenon brought the descending alien formation into the living room. With dozens of game variations and simple, tense shooting, it became one of the console's defining early releases.",
            "A adaptação para Atari 2600 do fenômeno de arcade da Taito levou a formação de alienígenas descendentes para a sala de estar. Com dezenas de variações de jogo e um tiro simples e tenso, tornou-se um dos primeiros lançamentos decisivos do console.",
        ),
        trivia: T(
            [
                "The 2600 version is widely credited with quadrupling sales of the console.",
                "It was officially licensed from Taito, an unusual arrangement for the time.",
                "The cartridge includes 112 game variations.",
            ],
            [
                "A versão para 2600 é amplamente creditada por quadruplicar as vendas do console.",
                "Foi licenciada oficialmente da Taito, um acordo incomum para a época.",
                "O cartucho inclui 112 variações de jogo.",
            ],
        ),
    },
};
