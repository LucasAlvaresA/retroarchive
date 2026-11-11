export type Platform =
    | "NES"
    | "SNES"
    | "Mega Drive"
    | "PlayStation"
    | "Nintendo 64"
    | "Dreamcast"
    | "PlayStation 2"
    | "GameCube"
    | "Xbox"
    | "Xbox 360"
    | "PlayStation 3"
    | "Wii"
    | "Wii U"
    | "PlayStation 4"
    | "Xbox One"
    | "Nintendo Switch"
    | "PlayStation 5";

export type Localized = { en: string; pt: string };

export type Game = {
    id: string;
    title: string;
    coverImage: string;
    releaseDate: Localized;
    releaseYear: number;
    publisher: string;
    developer: string;
    platform: Platform;
    genre: Localized;
    description: Localized;
    trivia: { en: string[]; pt: string[] };
};

export const platformOrder: Platform[] = [
    "NES",
    "SNES",
    "Mega Drive",
    "PlayStation",
    "Nintendo 64",
    "Dreamcast",
    "PlayStation 2",
    "GameCube",
    "Xbox",
    "Xbox 360",
    "PlayStation 3",
    "Wii",
    "Wii U",
    "PlayStation 4",
    "Xbox One",
    "Nintendo Switch",
    "PlayStation 5",
];

export const platformAccents: Record<Platform, string> = {
    NES: "#e46a6a",
    SNES: "#ae98ff",
    "Mega Drive": "#5aa9e6",
    PlayStation: "#9aa5b8",
    "Nintendo 64": "#d8f27a",
    Dreamcast: "#ff9a62",
    "PlayStation 2": "#7088ff",
    GameCube: "#b58cff",
    Xbox: "#7ee787",
    "Xbox 360": "#a4e86b",
    "PlayStation 3": "#82b4ff",
    Wii: "#e9e6f2",
    "Wii U": "#4dd6c1",
    "PlayStation 4": "#6d8cff",
    "Xbox One": "#7ee787",
    "Nintendo Switch": "#ff6b6b",
    "PlayStation 5": "#7ad7ff",
};

const L = (en: string, pt: string): Localized => ({ en, pt });
const T = (en: string[], pt: string[]) => ({ en, pt });

export const games: Game[] = [
    // ── NES ──────────────────────────────────────────────────────────────
    {
        id: "super-mario-bros",
        title: "Super Mario Bros.",
        coverImage: "/images/game-01.png",
        releaseDate: L("September 13, 1985 (Japan)", "13 de setembro de 1985 (Japão)"),
        releaseYear: 1985,
        publisher: "Nintendo",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario and Luigi set out across the Mushroom Kingdom to rescue Princess Toadstool from Bowser. Its precise controls, secret routes and inventive level design helped define the side-scrolling platform game.",
            "Mario e Luigi atravessam o Reino dos Cogumelos para resgatar a Princesa Toadstool de Bowser. Controles precisos, rotas secretas e um design de fases inventivo ajudaram a definir o jogo de plataforma de rolagem lateral.",
        ),
        trivia: T(
            [
                "The game was designed by Shigeru Miyamoto and Takashi Tezuka.",
                "Its original Japanese release was for the Famicom in 1985.",
                "The now-iconic theme was composed by Koji Kondo.",
            ],
            [
                "O jogo foi criado por Shigeru Miyamoto e Takashi Tezuka.",
                "Seu lançamento original japonês foi para o Famicom, em 1985.",
                "O tema hoje icônico foi composto por Koji Kondo.",
            ],
        ),
    },
    {
        id: "the-legend-of-zelda",
        title: "The Legend of Zelda",
        coverImage: "/images/game-02.png",
        releaseDate: L("February 21, 1986 (Japan)", "21 de fevereiro de 1986 (Japão)"),
        releaseYear: 1986,
        publisher: "Nintendo",
        developer: "Nintendo R&D4",
        platform: "NES",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "A young hero explores the land of Hyrule, searches for the fragments of the Triforce and faces the forces of Ganon. Its open-ended exploration made discovery part of the adventure.",
            "Um jovem herói explora a terra de Hyrule, busca os fragmentos da Triforce e enfrenta as forças de Ganon. Sua exploração aberta fez da descoberta parte da aventura.",
        ),
        trivia: T(
            [
                "It was first released in Japan for the Famicom Disk System.",
                "The original Japanese version used a rewritable disk format.",
                "It was among the early console games to save progress with a battery-backed cartridge in its international NES release.",
            ],
            [
                "Foi lançado primeiro no Japão para o Famicom Disk System.",
                "A versão japonesa original usava um formato de disco regravável.",
                "Estava entre os primeiros jogos de console a salvar o progresso com uma bateria no cartucho na versão internacional para NES.",
            ],
        ),
    },
    {
        id: "mega-man",
        title: "Mega Man",
        coverImage: "/images/game-03.png",
        releaseDate: L("December 17, 1987 (Japan)", "17 de dezembro de 1987 (Japão)"),
        releaseYear: 1987,
        publisher: "Capcom",
        developer: "Capcom",
        platform: "NES",
        genre: L("Action-platformer", "Ação e plataforma"),
        description: L(
            "The original Blue Bomber takes on the Robot Masters created by Dr. Wily. Choosing the order of stages and gaining each boss's weapon gave the series its distinctive strategic rhythm.",
            "O Blue Bomber original enfrenta os Robot Masters criados pelo Dr. Wily. Escolher a ordem das fases e ganhar a arma de cada chefe deu à série seu ritmo estratégico característico.",
        ),
        trivia: T(
            [
                "The game was directed by Akira Kitamura, with character design by Keiji Inafune.",
                "Defeated Robot Masters grant weapons that can be used in other stages.",
                "The series is known as Rockman in Japan.",
            ],
            [
                "O jogo foi dirigido por Akira Kitamura, com design de personagens de Keiji Inafune.",
                "Os Robot Masters derrotados concedem armas que podem ser usadas em outras fases.",
                "No Japão, a série é conhecida como Rockman.",
            ],
        ),
    },
    {
        id: "metroid",
        title: "Metroid",
        coverImage: "",
        releaseDate: L("August 6, 1986 (Japan)", "6 de agosto de 1986 (Japão)"),
        releaseYear: 1986,
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        platform: "NES",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus Aran descends into the labyrinth of Zebes to stop the Space Pirates and the Metroids. Its lonely atmosphere and open-ended exploration became a blueprint for an entire genre.",
            "Samus Aran desce ao labirinto de Zebes para deter os Piratas Espaciais e os Metroids. Sua atmosfera solitária e exploração aberta se tornaram o modelo de um gênero inteiro.",
        ),
        trivia: T(
            [
                "The game introduced Samus Aran, one of the first major female protagonists in console gaming.",
                "Its non-linear structure rewarded backtracking and secret discovery.",
            ],
            [
                "O jogo apresentou Samus Aran, uma das primeiras grandes protagonistas femininas dos consoles.",
                "Sua estrutura não linear recompensava o retorno a áreas anteriores e a descoberta de segredos.",
            ],
        ),
    },
    {
        id: "contra",
        title: "Contra",
        coverImage: "",
        releaseDate: L("February 9, 1988 (Japan)", "9 de fevereiro de 1988 (Japão)"),
        releaseYear: 1988,
        publisher: "Konami",
        developer: "Konami",
        platform: "NES",
        genre: L("Run and gun", "Run and gun"),
        description: L(
            "Two commandos fight through an alien invasion with relentless action and imaginative bosses. Precise controls and two-player co-op made it an arcade-style classic at home.",
            "Dois comandos enfrentam uma invasão alienígena com ação implacável e chefes imaginativos. Controles precisos e cooperativo para dois jogadores fizeram dele um clássico estilo arcade em casa.",
        ),
        trivia: T(
            [
                "The NES version is famous for its Konami Code entry, which grants extra lives.",
                "It was originally an arcade game released in 1987.",
            ],
            [
                "A versão de NES é famosa pelo código Konami, que concede vidas extras.",
                "Originalmente, foi um jogo de arcade lançado em 1987.",
            ],
        ),
    },

    // ── SNES ─────────────────────────────────────────────────────────────
    {
        id: "super-mario-world",
        title: "Super Mario World",
        coverImage: "/images/game-04.png",
        releaseDate: L("November 21, 1990 (Japan)", "21 de novembro de 1990 (Japão)"),
        releaseYear: 1990,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "SNES",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Mario journeys through Dinosaur Land with a new companion, Yoshi. A sprawling map, hidden exits and inventive power-ups make this 16-bit adventure a landmark in the genre.",
            "Mario viaja pela Terra dos Dinossauros com seu novo companheiro, Yoshi. Um mapa extenso, saídas secretas e power-ups inventivos fazem desta aventura 16-bit um marco do gênero.",
        ),
        trivia: T(
            [
                "Yoshi made his first appearance in this game.",
                "Shigeru Miyamoto produced the game, with Takashi Tezuka directing.",
                "The game launched alongside the Super Famicom in Japan.",
            ],
            [
                "Yoshi fez sua primeira aparição neste jogo.",
                "Shigeru Miyamoto produziu o jogo, com direção de Takashi Tezuka.",
                "O jogo foi lançado junto com o Super Famicom no Japão.",
            ],
        ),
    },
    {
        id: "a-link-to-the-past",
        title: "The Legend of Zelda: A Link to the Past",
        coverImage: "/images/game-05.png",
        releaseDate: L("November 21, 1991 (Japan)", "21 de novembro de 1991 (Japão)"),
        releaseYear: 1991,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "SNES",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link's quest spans the Light World and the Dark World, weaving dungeon puzzles, exploration and memorable discoveries into one richly connected adventure.",
            "A jornada de Link atravessa o Mundo da Luz e o Mundo das Trevas, unindo quebra-cabeças de masmorra, exploração e descobertas marcantes em uma aventura ricamente conectada.",
        ),
        trivia: T(
            [
                "The parallel-world structure became an influential series hallmark.",
                "Takashi Tezuka directed the game, with Kensuke Tanabe among its scenario designers.",
                "The Japanese release preceded the North American release by several months.",
            ],
            [
                "A estrutura de mundos paralelos tornou-se uma marca influente da série.",
                "Takashi Tezuka dirigiu o jogo, com Kensuke Tanabe entre os roteiristas.",
                "O lançamento japonês precedeu o norte-americano em vários meses.",
            ],
        ),
    },
    {
        id: "donkey-kong-country",
        title: "Donkey Kong Country",
        coverImage: "/images/game-06.png",
        releaseDate: L("November 18, 1994 (North America)", "18 de novembro de 1994 (América do Norte)"),
        releaseYear: 1994,
        publisher: "Nintendo",
        developer: "Rare",
        platform: "SNES",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Donkey Kong and Diddy Kong cross a vibrant island to recover their stolen banana hoard. Pre-rendered character art and a lively soundtrack gave the platformer a striking visual identity.",
            "Donkey Kong e Diddy Kong cruzam uma ilha vibrante para recuperar o tesouro de bananas roubado. Arte pré-renderizada e uma trilha animada deram ao platformer uma identidade visual marcante.",
        ),
        trivia: T(
            [
                "The game was developed by the British studio Rare.",
                "Its visual style was built from pre-rendered 3D models converted into sprites.",
                "David Wise composed much of its atmospheric soundtrack.",
            ],
            [
                "O jogo foi desenvolvido pelo estúdio britânico Rare.",
                "Seu visual foi construído a partir de modelos 3D pré-renderizados convertidos em sprites.",
                "David Wise compôs boa parte de sua trilha atmosférica.",
            ],
        ),
    },
    {
        id: "super-metroid",
        title: "Super Metroid",
        coverImage: "",
        releaseDate: L("March 19, 1994 (Japan)", "19 de março de 1994 (Japão)"),
        releaseYear: 1994,
        publisher: "Nintendo",
        developer: "Nintendo R&D1",
        platform: "SNES",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus returns to Zebes in a dense, atmospheric adventure built around exploration, upgrades and environmental storytelling. Its interconnected world set a benchmark for the genre.",
            "Samus retorna a Zebes em uma aventura densa e atmosférica construída em torno de exploração, melhorias e narrativa ambiental. Seu mundo interconectado se tornou referência para o gênero.",
        ),
        trivia: T(
            [
                "It is often cited as one of the finest examples of the 'Metroidvania' design style.",
                "The game's expressive animation and sound design helped sell the isolation of Zebes.",
            ],
            [
                "É frequentemente citado como um dos melhores exemplos do estilo de design 'Metroidvania'.",
                "A animação expressiva e o design de som ajudaram a transmitir o isolamento de Zebes.",
            ],
        ),
    },
    {
        id: "chrono-trigger",
        title: "Chrono Trigger",
        coverImage: "",
        releaseDate: L("March 11, 1995 (Japan)", "11 de março de 1995 (Japão)"),
        releaseYear: 1995,
        publisher: "Square",
        developer: "Square",
        platform: "SNES",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A group of unlikely heroes travels across eras to prevent a catastrophe that could erase the future. Time travel, memorable characters and multiple endings made it a landmark RPG.",
            "Um grupo improvável de heróis viaja entre eras para evitar uma catástrofe capaz de apagar o futuro. Viagem no tempo, personagens marcantes e múltiplos finais fizeram dele um RPG histórico.",
        ),
        trivia: T(
            [
                "It was created by a celebrated team including Hironobu Sakaguchi, Yuji Horii and Akira Toriyama.",
                "The game features more than a dozen different endings.",
            ],
            [
                "Foi criado por uma equipe de destaque que incluía Hironobu Sakaguchi, Yuji Horii e Akira Toriyama.",
                "O jogo tem mais de uma dúzia de finais diferentes.",
            ],
        ),
    },

    // ── MEGA DRIVE ───────────────────────────────────────────────────────
    {
        id: "sonic-the-hedgehog",
        title: "Sonic the Hedgehog",
        coverImage: "/images/game-09.png",
        releaseDate: L("June 23, 1991 (North America)", "23 de junho de 1991 (América do Norte)"),
        releaseYear: 1991,
        publisher: "Sega",
        developer: "Sonic Team",
        platform: "Mega Drive",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Sega's speedy mascot bursts through loop-filled landscapes to free animals trapped by Dr. Robotnik. Its momentum-driven stages and vivid art established a new platforming icon.",
            "O mascote veloz da Sega atravessa cenários cheios de loops para libertar animais presos pelo Dr. Robotnik. Fases movidas por impulso e arte vibrante estabeleceram um novo ícone dos platformers.",
        ),
        trivia: T(
            [
                "The game was created by a team led by programmer Yuji Naka and designer Hirokazu Yasuhara.",
                "Naoto Ohshima designed Sonic.",
                "The Japanese Mega Drive release followed in July 1991.",
            ],
            [
                "O jogo foi criado por uma equipe liderada pelo programador Yuji Naka e pelo designer Hirokazu Yasuhara.",
                "Naoto Ohshima desenhou Sonic.",
                "O lançamento japonês para Mega Drive veio em julho de 1991.",
            ],
        ),
    },
    {
        id: "sonic-the-hedgehog-2",
        title: "Sonic the Hedgehog 2",
        coverImage: "/images/game-07.png",
        releaseDate: L("November 21, 1992 (North America)", "21 de novembro de 1992 (América do Norte)"),
        releaseYear: 1992,
        publisher: "Sega",
        developer: "Sega Technical Institute",
        platform: "Mega Drive",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Sonic races through spectacular zones with Tails at his side, chasing Dr. Robotnik and the Chaos Emeralds. Its sense of speed and bold level design became central to the series identity.",
            "Sonic cruza zonas espetaculares ao lado de Tails, perseguindo o Dr. Robotnik e as Esmeraldas do Caos. A sensação de velocidade e o design ousado das fases tornaram-se centrais à identidade da série.",
        ),
        trivia: T(
            [
                "Miles 'Tails' Prower debuted as a playable companion.",
                "The game introduced the Spin Dash move.",
                "A coordinated global launch was promoted as 'Sonic 2sday'.",
            ],
            [
                "Miles 'Tails' Prower estreou como companheiro jogável.",
                "O jogo introduziu o movimento Spin Dash.",
                "Um lançamento global coordenado foi promovido como 'Sonic 2sday'.",
            ],
        ),
    },
    {
        id: "streets-of-rage-2",
        title: "Streets of Rage 2",
        coverImage: "/images/game-08.webp",
        releaseDate: L("December 20, 1992 (Japan)", "20 de dezembro de 1992 (Japão)"),
        releaseYear: 1992,
        publisher: "Sega",
        developer: "Sega; Ancient",
        platform: "Mega Drive",
        genre: L("Beat 'em up", "Beat 'em up"),
        description: L(
            "Four fighters take to the streets to stop the return of crime boss Mr. X. Responsive combat, expressive pixel animation and Yuzo Koshiro's electronic score made it a co-op favorite.",
            "Quatro lutadores tomam as ruas para impedir o retorno do chefão do crime Mr. X. Combate responsivo, animação expressiva em pixel art e a trilha eletrônica de Yuzo Koshiro fizeram dele um favorito do co-op.",
        ),
        trivia: T(
            [
                "The soundtrack was composed by Yuzo Koshiro, with Motohiro Kawashima.",
                "Skate and Max join returning characters Axel and Blaze.",
                "The Japanese title is Bare Knuckle II: Shitou e no Requiem.",
            ],
            [
                "A trilha sonora foi composta por Yuzo Koshiro, com Motohiro Kawashima.",
                "Skate e Max se juntam aos veteranos Axel e Blaze.",
                "O título japonês é Bare Knuckle II: Shitou e no Requiem.",
            ],
        ),
    },
    {
        id: "gunstar-heroes",
        title: "Gunstar Heroes",
        coverImage: "",
        releaseDate: L("September 10, 1993 (Japan)", "10 de setembro de 1993 (Japão)"),
        releaseYear: 1993,
        publisher: "Sega",
        developer: "Treasure",
        platform: "Mega Drive",
        genre: L("Run and gun", "Run and gun"),
        description: L(
            "Two brothers take on an empire with combinable weapons and relentlessly inventive set pieces. Fast, flexible combat made it a showcase for the Mega Drive's action potential.",
            "Dois irmãos enfrentam um império com armas combináveis e cenas de ação implacavelmente inventivas. O combate rápido e flexível fez dele uma demonstração do potencial de ação do Mega Drive.",
        ),
        trivia: T(
            [
                "It was the first game developed by Treasure, a studio founded by former Konami staff.",
                "Players can combine two weapon types to create new attacks.",
            ],
            [
                "Foi o primeiro jogo desenvolvido pela Treasure, um estúdio fundado por ex-funcionários da Konami.",
                "Os jogadores podem combinar dois tipos de arma para criar novos ataques.",
            ],
        ),
    },
    {
        id: "mortal-kombat-ii",
        title: "Mortal Kombat II",
        coverImage: "",
        releaseDate: L("September 9, 1994 (North America)", "9 de setembro de 1994 (América do Norte)"),
        releaseYear: 1994,
        publisher: "Midway",
        developer: "Sculptured Software",
        platform: "Mega Drive",
        genre: L("Fighting", "Luta"),
        description: L(
            "The tournament returns with a larger roster, faster combat and the series' signature finishing moves. The Mega Drive version became a defining competitive fighting game of its generation.",
            "O torneio retorna com um elenco maior, combate mais rápido e os golpes finais característicos da série. A versão para Mega Drive se tornou um dos fighting games competitivos mais marcantes de sua geração.",
        ),
        trivia: T(
            [
                "The home version was notable for keeping the arcade's blood and fatalities intact.",
                "It expanded the roster with characters such as Kitana, Kung Lao and Mileena.",
            ],
            [
                "A versão doméstica se destacou por manter o sangue e os fatalities do arcade.",
                "Ampliou o elenco com personagens como Kitana, Kung Lao e Mileena.",
            ],
        ),
    },

    // ── PLAYSTATION ──────────────────────────────────────────────────────
    {
        id: "crash-bandicoot",
        title: "Crash Bandicoot",
        coverImage: "/images/game-10.png",
        releaseDate: L("September 9, 1996 (North America)", "9 de setembro de 1996 (América do Norte)"),
        releaseYear: 1996,
        publisher: "Sony Computer Entertainment",
        developer: "Naughty Dog",
        platform: "PlayStation",
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
    {
        id: "tekken-3",
        title: "Tekken 3",
        coverImage: "/images/game-11.png",
        releaseDate: L("March 26, 1998 (PlayStation, Japan)", "26 de março de 1998 (PlayStation, Japão)"),
        releaseYear: 1998,
        publisher: "Namco",
        developer: "Namco",
        platform: "PlayStation",
        genre: L("Fighting", "Luta"),
        description: L(
            "The King of Iron Fist Tournament returns with a new generation of fighters. Fluid movement, a deep roster and accessible-yet-technical combat helped establish Tekken 3 as a genre classic.",
            "O Torneio Rei do Punho de Ferro retorna com uma nova geração de lutadores. Movimento fluido, um elenco profundo e combate acessível e técnico ajudaram a consagrar Tekken 3 como clássico do gênero.",
        ),
        trivia: T(
            [
                "The arcade version debuted in Japan in 1997, before the PlayStation conversion arrived in 1998.",
                "The game introduced series characters including Jin Kazama, Hwoarang and Xiaoyu.",
                "It was built on Namco's System 12 arcade hardware.",
            ],
            [
                "A versão de arcade estreou no Japão em 1997, antes da conversão para PlayStation em 1998.",
                "O jogo introduziu personagens da série como Jin Kazama, Hwoarang e Xiaoyu.",
                "Foi construído sobre o hardware de arcade System 12 da Namco.",
            ],
        ),
    },
    {
        id: "symphony-of-the-night",
        title: "Castlevania: Symphony of the Night",
        coverImage: "/images/game-12.jpg",
        releaseDate: L("March 20, 1997 (Japan)", "20 de março de 1997 (Japão)"),
        releaseYear: 1997,
        publisher: "Konami",
        developer: "Konami Computer Entertainment Tokyo",
        platform: "PlayStation",
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
    {
        id: "final-fantasy-vii",
        title: "Final Fantasy VII",
        coverImage: "",
        releaseDate: L("January 31, 1997 (Japan)", "31 de janeiro de 1997 (Japão)"),
        releaseYear: 1997,
        publisher: "Sony Computer Entertainment",
        developer: "Square",
        platform: "PlayStation",
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
    {
        id: "metal-gear-solid",
        title: "Metal Gear Solid",
        coverImage: "",
        releaseDate: L("September 3, 1998 (Japan)", "3 de setembro de 1998 (Japão)"),
        releaseYear: 1998,
        publisher: "Konami",
        developer: "Konami Computer Entertainment Japan",
        platform: "PlayStation",
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

    // ── NINTENDO 64 ──────────────────────────────────────────────────────
    {
        id: "super-mario-64",
        title: "Super Mario 64",
        coverImage: "/images/game-13.png",
        releaseDate: L("June 23, 1996 (Japan)", "23 de junho de 1996 (Japão)"),
        releaseYear: 1996,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario explores Princess Peach's castle and its paintings, leaping into expansive 3D worlds to collect Power Stars. Its analog movement and open-ended level design helped shape 3D platforming.",
            "Mario explora o castelo da Princesa Peach e suas pinturas, saltando para mundos 3D amplos para coletar Estrelas. Movimento analógico e design aberto de fases ajudaram a moldar a plataforma 3D.",
        ),
        trivia: T(
            [
                "It launched in Japan alongside the Nintendo 64.",
                "The game was directed by Shigeru Miyamoto, with Yoshiaki Koizumi among its designers.",
                "Its camera system gave players control over perspective in a 3D platform game.",
            ],
            [
                "Foi lançado no Japão junto com o Nintendo 64.",
                "O jogo foi dirigido por Shigeru Miyamoto, com Yoshiaki Koizumi entre os designers.",
                "Seu sistema de câmera deu aos jogadores controle da perspectiva em um jogo de plataforma 3D.",
            ],
        ),
    },
    {
        id: "ocarina-of-time",
        title: "The Legend of Zelda: Ocarina of Time",
        coverImage: "/images/game-14.webp",
        releaseDate: L("November 21, 1998 (Japan)", "21 de novembro de 1998 (Japão)"),
        releaseYear: 1998,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link's journey through time brings Hyrule to life in a vast 3D adventure. Dungeon design, musical puzzles and context-sensitive controls became influential touchstones for the genre.",
            "A jornada de Link através do tempo dá vida a Hyrule em uma vasta aventura 3D. Design de masmorras, quebra-cabeças musicais e controles contextuais tornaram-se referências influentes para o gênero.",
        ),
        trivia: T(
            [
                "The game introduced Z-targeting, a lock-on system for 3D combat.",
                "Koji Kondo composed its music, including melodies played on the ocarina.",
                "It was directed by Eiji Aonuma, Yoshiaki Koizumi and others under Shigeru Miyamoto's production.",
            ],
            [
                "O jogo introduziu o Z-targeting, um sistema de travamento para combate 3D.",
                "Koji Kondo compôs a música, incluindo melodias tocadas na ocarina.",
                "Foi dirigido por Eiji Aonuma, Yoshiaki Koizumi e outros, sob produção de Shigeru Miyamoto.",
            ],
        ),
    },
    {
        id: "goldeneye-007",
        title: "GoldenEye 007",
        coverImage: "",
        releaseDate: L("August 25, 1997 (North America)", "25 de agosto de 1997 (América do Norte)"),
        releaseYear: 1997,
        publisher: "Nintendo",
        developer: "Rare",
        platform: "Nintendo 64",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "James Bond's mission moves from stealth to explosive action across memorable locations. Its four-player split-screen multiplayer made it a social staple of the Nintendo 64 era.",
            "A missão de James Bond passa da furtividade à ação explosiva em locais memoráveis. Seu multiplayer em tela dividida para quatro jogadores o tornou um marco social da era Nintendo 64.",
        ),
        trivia: T(
            [
                "It was developed by Rare and based on the 1995 film.",
                "The multiplayer mode was added late in development and became a defining feature.",
            ],
            [
                "Foi desenvolvido pela Rare e baseado no filme de 1995.",
                "O modo multiplayer foi adicionado no fim do desenvolvimento e se tornou uma característica marcante.",
            ],
        ),
    },
    {
        id: "mario-kart-64",
        title: "Mario Kart 64",
        coverImage: "",
        releaseDate: L("December 14, 1996 (Japan)", "14 de dezembro de 1996 (Japão)"),
        releaseYear: 1996,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Nintendo 64",
        genre: L("Racing", "Corrida"),
        description: L(
            "Mario and friends race across 3D tracks with items, shortcuts and chaotic four-player battles. Its friendly rivalry made it a living-room fixture for years.",
            "Mario e seus amigos correm por pistas 3D com itens, atalhos e batalhas caóticas para quatro jogadores. Sua rivalidade amigável o manteve presente nas salas de estar por anos.",
        ),
        trivia: T(
            [
                "It was the first Mario Kart game with fully 3D courses.",
                "The multiplayer battle modes became as popular as the races themselves.",
            ],
            [
                "Foi o primeiro Mario Kart com pistas totalmente 3D.",
                "Os modos de batalha multiplayer se tornaram tão populares quanto as corridas.",
            ],
        ),
    },
    {
        id: "banjo-kazooie",
        title: "Banjo-Kazooie",
        coverImage: "",
        releaseDate: L("June 29, 1998 (North America)", "29 de junho de 1998 (América do Norte)"),
        releaseYear: 1998,
        publisher: "Nintendo",
        developer: "Rare",
        platform: "Nintendo 64",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "A bear and a wisecracking bird explore a witch's lair to rescue Banjo's sister. Witty characters and densely packed worlds made it a standout of the collect-a-thon era.",
            "Um urso e uma ave falante exploram o covil de uma bruxa para resgatar a irmã de Banjo. Personagens espirituosos e mundos densos fizeram dele um destaque da era dos collect-a-thons.",
        ),
        trivia: T(
            [
                "It was developed by Rare, the studio behind Donkey Kong Country.",
                "The game's dialogue and rhyming villain became fan favorites.",
            ],
            [
                "Foi desenvolvido pela Rare, o estúdio por trás de Donkey Kong Country.",
                "Os diálogos e a vilã que fala em rimas se tornaram favoritos dos fãs.",
            ],
        ),
    },

    // ── DREAMCAST ────────────────────────────────────────────────────────
    {
        id: "sonic-adventure",
        title: "Sonic Adventure",
        coverImage: "",
        releaseDate: L("December 23, 1998 (Japan)", "23 de dezembro de 1998 (Japão)"),
        releaseYear: 1998,
        publisher: "Sega",
        developer: "Sonic Team",
        platform: "Dreamcast",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Sonic's first full 3D adventure spans open stages, cinematic story scenes and multiple playable characters. It captured the ambition of Sega's final console.",
            "A primeira aventura completa de Sonic em 3D percorre fases abertas, cenas narrativas cinematográficas e vários personagens jogáveis. Ela capturou a ambição do último console da Sega.",
        ),
        trivia: T(
            [
                "It launched alongside the Dreamcast in Japan.",
                "The game introduced the Chao virtual pet system.",
            ],
            [
                "Foi lançado junto com o Dreamcast no Japão.",
                "O jogo introduziu o sistema de estimação virtual Chao.",
            ],
        ),
    },
    {
        id: "shenmue",
        title: "Shenmue",
        coverImage: "",
        releaseDate: L("December 29, 1999 (Japan)", "29 de dezembro de 1999 (Japão)"),
        releaseYear: 1999,
        publisher: "Sega",
        developer: "AM2",
        platform: "Dreamcast",
        genre: L("Adventure", "Aventura"),
        description: L(
            "Ryo Hazuki searches a meticulously detailed Japanese town for clues about his father's murder. Its immersive world and free exploration pointed toward the open-world games that followed.",
            "Ryo Hazuki investiga uma cidade japonesa meticulosamente detalhada em busca de pistas sobre o assassinato de seu pai. Seu mundo imersivo e exploração livre apontaram para os jogos de mundo aberto que viriam.",
        ),
        trivia: T(
            [
                "It was directed by Yu Suzuki and became one of the most expensive games of its time.",
                "The game simulated weather, schedules and everyday routines in unusual detail.",
            ],
            [
                "Foi dirigido por Yu Suzuki e se tornou um dos jogos mais caros de sua época.",
                "O jogo simulava clima, horários e rotinas cotidianas com detalhes incomuns.",
            ],
        ),
    },
    {
        id: "soulcalibur",
        title: "Soulcalibur",
        coverImage: "",
        releaseDate: L("August 5, 1999 (Japan)", "5 de agosto de 1999 (Japão)"),
        releaseYear: 1999,
        publisher: "Namco",
        developer: "Namco",
        platform: "Dreamcast",
        genre: L("Fighting", "Luta"),
        description: L(
            "Weapon-based fighters clash in a gorgeous arcade conversion with fluid eight-way movement. Its home version became a technical showcase for the Dreamcast.",
            "Lutadores armados se enfrentam em uma conversão de arcade deslumbrante, com movimento fluido em oito direções. Sua versão doméstica se tornou uma vitrine técnica do Dreamcast.",
        ),
        trivia: T(
            [
                "It was built on Namco's System 12 arcade hardware.",
                "The game is remembered for its visual leap over its predecessor, Soul Edge.",
            ],
            [
                "Foi construído sobre o hardware de arcade System 12 da Namco.",
                "O jogo é lembrado pelo salto visual em relação ao seu antecessor, Soul Edge.",
            ],
        ),
    },
    {
        id: "jet-set-radio",
        title: "Jet Set Radio",
        coverImage: "",
        releaseDate: L("June 29, 2000 (Japan)", "29 de junho de 2000 (Japão)"),
        releaseYear: 2000,
        publisher: "Sega",
        developer: "Smilebit",
        platform: "Dreamcast",
        genre: L("Action", "Ação"),
        description: L(
            "A crew of graffiti artists skates through a stylized Tokyo to claim territory and outrun the authorities. Cel-shaded art and a genre-blending soundtrack gave it a look and sound all its own.",
            "Uma turma de grafiteiros patina por uma Tóquio estilizada para conquistar território e fugir das autoridades. A arte com cel-shading e uma trilha que mistura gêneros deram ao jogo uma identidade única.",
        ),
        trivia: T(
            [
                "It is credited with popularizing cel-shaded 3D graphics.",
                "The soundtrack blended electronic, hip-hop and funk tracks.",
            ],
            [
                "É creditado por popularizar os gráficos 3D com cel-shading.",
                "A trilha sonora misturava faixas de música eletrônica, hip-hop e funk.",
            ],
        ),
    },
    {
        id: "skies-of-arcadia",
        title: "Skies of Arcadia",
        coverImage: "",
        releaseDate: L("October 5, 2000 (Japan)", "5 de outubro de 2000 (Japão)"),
        releaseYear: 2000,
        publisher: "Sega",
        developer: "Overworks",
        platform: "Dreamcast",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A crew of air pirates sails a world of floating islands in search of ancient treasures. Optimistic adventure and airship exploration made it a beloved Dreamcast RPG.",
            "Uma tripulação de piratas do céu navega por um mundo de ilhas flutuantes em busca de tesouros antigos. A aventura otimista e a exploração de dirigíveis fizeram dele um RPG querido do Dreamcast.",
        ),
        trivia: T(
            [
                "It was developed by Overworks, a Sega studio formed from the Team Shinobi team.",
                "The game was later ported to the GameCube as Skies of Arcadia Legends.",
            ],
            [
                "Foi desenvolvido pela Overworks, um estúdio da Sega formado pela equipe Team Shinobi.",
                "Mais tarde, o jogo foi portado para o GameCube como Skies of Arcadia Legends.",
            ],
        ),
    },

    // ── PLAYSTATION 2 ────────────────────────────────────────────────────
    {
        id: "metal-gear-solid-2",
        title: "Metal Gear Solid 2: Sons of Liberty",
        coverImage: "",
        releaseDate: L("November 13, 2001 (North America)", "13 de novembro de 2001 (América do Norte)"),
        releaseYear: 2001,
        publisher: "Konami",
        developer: "Konami Computer Entertainment Japan",
        platform: "PlayStation 2",
        genre: L("Stealth action", "Ação furtiva"),
        description: L(
            "Raiden infiltrates a floating fortress after a tanker disaster, in a story that questions information, memory and control. Its layered plot and detailed presentation made it one of the PS2's defining games.",
            "Raiden se infiltra em uma fortaleza flutuante após um desastre com um navio-tanque, em uma história que questiona informação, memória e controle. Seu enredo em camadas e apresentação detalhada fizeram dele um dos jogos definidores do PS2.",
        ),
        trivia: T(
            [
                "It was directed by Hideo Kojima and first shown at E3 2000.",
                "The game is remembered for its prescient themes about digital information.",
            ],
            [
                "Foi dirigido por Hideo Kojima e apresentado pela primeira vez na E3 2000.",
                "O jogo é lembrado por seus temas premonitórios sobre a informação digital.",
            ],
        ),
    },
    {
        id: "gta-san-andreas",
        title: "Grand Theft Auto: San Andreas",
        coverImage: "",
        releaseDate: L("October 26, 2004 (North America)", "26 de outubro de 2004 (América do Norte)"),
        releaseYear: 2004,
        publisher: "Rockstar Games",
        developer: "Rockstar North",
        platform: "PlayStation 2",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "CJ returns to San Andreas to rebuild his family's influence across three sprawling cities and the countryside between them. Its scale and sense of place made it one of the most influential open-world games ever.",
            "CJ retorna a San Andreas para reconstruir a influência de sua família em três cidades imensas e no interior entre elas. Sua escala e sensação de lugar o tornaram um dos jogos de mundo aberto mais influentes de todos os tempos.",
        ),
        trivia: T(
            [
                "The game's map spans the fictional cities of Los Santos, San Fierro and Las Venturas.",
                "It introduced role-playing-style stats for stamina, driving and weapon skills.",
            ],
            [
                "O mapa do jogo abrange as cidades fictícias de Los Santos, San Fierro e Las Venturas.",
                "Introduziu atributos de RPG para resistência, direção e habilidades com armas.",
            ],
        ),
    },
    {
        id: "resident-evil-4",
        title: "Resident Evil 4",
        coverImage: "",
        releaseDate: L("January 11, 2005 (North America)", "11 de janeiro de 2005 (América do Norte)"),
        releaseYear: 2005,
        publisher: "Capcom",
        developer: "Capcom Production Studio 4",
        platform: "PlayStation 2",
        genre: L("Survival horror", "Survival horror"),
        description: L(
            "Leon Kennedy travels to a rural village to rescue the president's daughter from a cult. Its over-the-shoulder camera and tense encounters reinvented the series and influenced action games for years.",
            "Leon Kennedy viaja a uma vila rural para resgatar a filha do presidente de um culto. Sua câmera sobre o ombro e encontros tensos reinventaram a série e influenciaram jogos de ação por anos.",
        ),
        trivia: T(
            [
                "It was directed by Shinji Mikami.",
                "The game was originally conceived as a more supernatural entry in the series.",
            ],
            [
                "Foi dirigido por Shinji Mikami.",
                "O jogo foi originalmente concebido como uma entrada mais sobrenatural da série.",
            ],
        ),
    },
    {
        id: "shadow-of-the-colossus",
        title: "Shadow of the Colossus",
        coverImage: "",
        releaseDate: L("October 18, 2005 (North America)", "18 de outubro de 2005 (América do Norte)"),
        releaseYear: 2005,
        publisher: "Sony Computer Entertainment",
        developer: "Team Ico",
        platform: "PlayStation 2",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "A lone wanderer crosses a forbidden land to defeat sixteen towering colossi and revive a sleeping girl. Its quiet world and monumental encounters turned scale itself into emotion.",
            "Um andarilho solitário cruza uma terra proibida para derrotar dezesseis colossos gigantescos e reviver uma garota adormecida. Seu mundo silencioso e encontros monumentais transformaram a própria escala em emoção.",
        ),
        trivia: T(
            [
                "It was directed by Fumito Ueda and developed by Team Ico.",
                "The game uses minimal dialogue and music to build its atmosphere.",
            ],
            [
                "Foi dirigido por Fumito Ueda e desenvolvido pela Team Ico.",
                "O jogo usa diálogo e música mínimos para construir sua atmosfera.",
            ],
        ),
    },
    {
        id: "god-of-war-ii",
        title: "God of War II",
        coverImage: "",
        releaseDate: L("March 13, 2007 (North America)", "13 de março de 2007 (América do Norte)"),
        releaseYear: 2007,
        publisher: "Sony Computer Entertainment",
        developer: "Santa Monica Studio",
        platform: "PlayStation 2",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Kratos seeks the Sisters of Fate after being betrayed by Zeus, cutting a brutal path through Greek myth. Its spectacle and combat made it a late-generation showcase for the PS2.",
            "Kratos busca as Irmãs do Destino após ser traído por Zeus, abrindo um caminho brutal pela mitologia grega. Seu espetáculo e combate fizeram dele uma vitrine de fim de geração para o PS2.",
        ),
        trivia: T(
            [
                "It was directed by Cory Barlog.",
                "The game was one of the final major first-party releases for the PlayStation 2.",
            ],
            [
                "Foi dirigido por Cory Barlog.",
                "Foi um dos últimos grandes lançamentos first-party do PlayStation 2.",
            ],
        ),
    },

    // ── GAMECUBE ─────────────────────────────────────────────────────────
    {
        id: "super-smash-bros-melee",
        title: "Super Smash Bros. Melee",
        coverImage: "",
        releaseDate: L("November 21, 2001 (Japan)", "21 de novembro de 2001 (Japão)"),
        releaseYear: 2001,
        publisher: "Nintendo",
        developer: "HAL Laboratory",
        platform: "GameCube",
        genre: L("Fighting", "Luta"),
        description: L(
            "Nintendo's mascots collide in a fast, technical party fighter packed with stages, trophies and unlockables. Its speed and depth turned it into a competitive institution.",
            "Os mascotes da Nintendo se enfrentam em um jogo de luta festivo, rápido e técnico, repleto de fases, troféus e desbloqueáveis. Sua velocidade e profundidade o transformaram em uma instituição competitiva.",
        ),
        trivia: T(
            [
                "It launched alongside the GameCube in North America.",
                "The game's competitive scene remained active for decades.",
            ],
            [
                "Foi lançado junto com o GameCube na América do Norte.",
                "A cena competitiva do jogo permaneceu ativa por décadas.",
            ],
        ),
    },
    {
        id: "metroid-prime",
        title: "Metroid Prime",
        coverImage: "",
        releaseDate: L("November 17, 2002 (North America)", "17 de novembro de 2002 (América do Norte)"),
        releaseYear: 2002,
        publisher: "Nintendo",
        developer: "Retro Studios",
        platform: "GameCube",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Samus explores the alien world of Tallon IV in first person, scanning creatures and ruins to piece together its history. Seamless exploration and atmosphere translated Metroid's isolation into 3D.",
            "Samus explora o mundo alienígena de Tallon IV em primeira pessoa, escaneando criaturas e ruínas para reconstruir sua história. A exploração fluida e a atmosfera traduziram o isolamento de Metroid para o 3D.",
        ),
        trivia: T(
            [
                "It was the first 3D entry in the Metroid series.",
                "Retro Studios rebuilt the project after an early internal version struggled.",
            ],
            [
                "Foi a primeira entrada em 3D da série Metroid.",
                "A Retro Studios reconstruiu o projeto depois que uma versão interna inicial enfrentou dificuldades.",
            ],
        ),
    },
    {
        id: "wind-waker",
        title: "The Legend of Zelda: The Wind Waker",
        coverImage: "",
        releaseDate: L("December 13, 2002 (Japan)", "13 de dezembro de 2002 (Japão)"),
        releaseYear: 2002,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "GameCube",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link sails a vast ocean in search of his sister and the secrets of a drowned kingdom. Its expressive cel-shaded art and sense of discovery turned a bold visual gamble into a timeless adventure.",
            "Link navega por um vasto oceano em busca de sua irmã e dos segredos de um reino submerso. Sua arte expressiva com cel-shading e o senso de descoberta transformaram uma aposta visual ousada em uma aventura atemporal.",
        ),
        trivia: T(
            [
                "The game's art style was initially controversial after an earlier realistic demo.",
                "Its Great Sea is filled with islands, ruins and optional discoveries.",
            ],
            [
                "O estilo artístico foi inicialmente polêmico após uma demonstração realista anterior.",
                "Seu Grande Mar é repleto de ilhas, ruínas e descobertas opcionais.",
            ],
        ),
    },
    {
        id: "mario-kart-double-dash",
        title: "Mario Kart: Double Dash!!",
        coverImage: "",
        releaseDate: L("November 7, 2003 (Japan)", "7 de novembro de 2003 (Japão)"),
        releaseYear: 2003,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "GameCube",
        genre: L("Racing", "Corrida"),
        description: L(
            "Two characters share every kart, swapping drivers and special items on the fly. The team-based twist gave the series one of its most distinctive multiplayer entries.",
            "Dois personagens dividem cada kart, alternando motorista e itens especiais em tempo real. A reviravolta em duplas deu à série uma de suas entradas multiplayer mais marcantes.",
        ),
        trivia: T(
            [
                "Each pair of characters had a unique special item.",
                "The game supported LAN play with additional adapters.",
            ],
            [
                "Cada dupla de personagens tinha um item especial exclusivo.",
                "O jogo suportava jogo em rede local com adaptadores adicionais.",
            ],
        ),
    },
    {
        id: "paper-mario-thousand-year-door",
        title: "Paper Mario: The Thousand-Year Door",
        coverImage: "",
        releaseDate: L("July 22, 2004 (Japan)", "22 de julho de 2004 (Japão)"),
        releaseYear: 2004,
        publisher: "Nintendo",
        developer: "Intelligent Systems",
        platform: "GameCube",
        genre: L("Role-playing", "RPG"),
        description: L(
            "Mario hunts for crystal stars in a stage-play world full of paper-thin jokes and surprisingly sharp writing. Turn-based battles and partner abilities made it a fan-favorite RPG.",
            "Mario busca estrelas de cristal em um mundo de teatro repleto de piadas de papel e uma escrita surpreendentemente afiada. Batalhas por turnos e habilidades de parceiros fizeram dele um RPG favorito dos fãs.",
        ),
        trivia: T(
            [
                "The game is presented as a stage performance, complete with an audience.",
                "It was developed by Intelligent Systems.",
            ],
            [
                "O jogo é apresentado como uma peça de teatro, com plateia e tudo.",
                "Foi desenvolvido pela Intelligent Systems.",
            ],
        ),
    },

    // ── XBOX ─────────────────────────────────────────────────────────────
    {
        id: "halo-combat-evolved",
        title: "Halo: Combat Evolved",
        coverImage: "",
        releaseDate: L("November 15, 2001 (North America)", "15 de novembro de 2001 (América do Norte)"),
        releaseYear: 2001,
        publisher: "Microsoft Game Studios",
        developer: "Bungie",
        platform: "Xbox",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "Master Chief fights the Covenant across a mysterious ringworld while uncovering its secrets. Regenerating shields, vehicle combat and co-op made it the Xbox's signature launch game.",
            "Master Chief enfrenta a Covenant em um misterioso mundo-anel enquanto descobre seus segredos. Escudos regenerativos, combate com veículos e cooperativo fizeram dele o jogo de lançamento símbolo do Xbox.",
        ),
        trivia: T(
            [
                "It was originally in development for Mac and PC before becoming an Xbox exclusive.",
                "The game popularized regenerating health in first-person shooters.",
            ],
            [
                "Originalmente, estava em desenvolvimento para Mac e PC antes de se tornar exclusivo do Xbox.",
                "O jogo popularizou a saúde regenerativa nos shooters em primeira pessoa.",
            ],
        ),
    },
    {
        id: "kotor",
        title: "Star Wars: Knights of the Old Republic",
        coverImage: "",
        releaseDate: L("July 15, 2003 (North America)", "15 de julho de 2003 (América do Norte)"),
        releaseYear: 2003,
        publisher: "LucasArts",
        developer: "BioWare",
        platform: "Xbox",
        genre: L("Role-playing", "RPG"),
        description: L(
            "A Jedi amnesiac gathers a crew and chooses sides in a conflict set thousands of years before the films. Deep dialogue and moral choices made it one of the defining Star Wars games.",
            "Um Jedi amnésico reúne uma tripulação e escolhe lados em um conflito ambientado milhares de anos antes dos filmes. Diálogos profundos e escolhas morais fizeram dele um dos jogos definidores de Star Wars.",
        ),
        trivia: T(
            [
                "It was developed by BioWare and published by LucasArts.",
                "The game's twist ending is among the most discussed in Star Wars games.",
            ],
            [
                "Foi desenvolvido pela BioWare e publicado pela LucasArts.",
                "O final surpreendente está entre os mais comentados dos jogos de Star Wars.",
            ],
        ),
    },
    {
        id: "ninja-gaiden",
        title: "Ninja Gaiden",
        coverImage: "",
        releaseDate: L("March 2, 2004 (North America)", "2 de março de 2004 (América do Norte)"),
        releaseYear: 2004,
        publisher: "Tecmo",
        developer: "Team Ninja",
        platform: "Xbox",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Ryu Hayabusa cuts through a demonic invasion with demanding, stylish combat. Its speed and difficulty made it a benchmark for action games on the Xbox.",
            "Ryu Hayabusa abre caminho por uma invasão demoníaca com combate exigente e estiloso. Sua velocidade e dificuldade fizeram dele uma referência para jogos de ação no Xbox.",
        ),
        trivia: T(
            [
                "It was directed by Tomonobu Itagaki at Team Ninja.",
                "The game was praised for its fluid animation and responsive controls.",
            ],
            [
                "Foi dirigido por Tomonobu Itagaki na Team Ninja.",
                "O jogo foi elogiado por sua animação fluida e controles responsivos.",
            ],
        ),
    },
    {
        id: "halo-2",
        title: "Halo 2",
        coverImage: "",
        releaseDate: L("November 9, 2004 (North America)", "9 de novembro de 2004 (América do Norte)"),
        releaseYear: 2004,
        publisher: "Microsoft Game Studios",
        developer: "Bungie",
        platform: "Xbox",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "Master Chief defends Earth while the Arbiter's story unfolds in parallel. Its online multiplayer helped define console shooters for a generation.",
            "Master Chief defende a Terra enquanto a história do Arbiter se desenrola em paralelo. Seu multiplayer online ajudou a definir os shooters de console por uma geração.",
        ),
        trivia: T(
            [
                "It was a flagship title for Xbox Live.",
                "The game introduced dual wielding and playable Covenant characters.",
            ],
            [
                "Foi um título de destaque do Xbox Live.",
                "O jogo introduziu o uso de duas armas e personagens Covenant jogáveis.",
            ],
        ),
    },
    {
        id: "fable",
        title: "Fable",
        coverImage: "",
        releaseDate: L("September 14, 2004 (North America)", "14 de setembro de 2004 (América do Norte)"),
        releaseYear: 2004,
        publisher: "Microsoft Game Studios",
        developer: "Lionhead Studios",
        platform: "Xbox",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A hero's life unfolds from childhood to legend in a world that reacts to reputation and choice. Its ambition to make every decision visible made it a memorable Xbox RPG.",
            "A vida de um herói se desenrola da infância à lenda em um mundo que reage à reputação e às escolhas. A ambição de tornar cada decisão visível fez dele um RPG memorável do Xbox.",
        ),
        trivia: T(
            [
                "It was designed by Peter Molyneux at Lionhead Studios.",
                "The game's morality system changed the hero's appearance and how NPCs reacted.",
            ],
            [
                "Foi criado por Peter Molyneux na Lionhead Studios.",
                "O sistema de moralidade alterava a aparência do herói e a reação dos NPCs.",
            ],
        ),
    },

    // ── XBOX 360 ─────────────────────────────────────────────────────────
    {
        id: "gears-of-war",
        title: "Gears of War",
        coverImage: "",
        releaseDate: L("November 7, 2006 (North America)", "7 de novembro de 2006 (América do Norte)"),
        releaseYear: 2006,
        publisher: "Microsoft Game Studios",
        developer: "Epic Games",
        platform: "Xbox 360",
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
    {
        id: "bioshock",
        title: "BioShock",
        coverImage: "",
        releaseDate: L("August 21, 2007 (North America)", "21 de agosto de 2007 (América do Norte)"),
        releaseYear: 2007,
        publisher: "2K Games",
        developer: "Irrational Games",
        platform: "Xbox 360",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "A plane crash leads to the underwater city of Rapture, where ideology and genetic power have gone terribly wrong. Its atmosphere and storytelling made it one of the medium's most discussed games.",
            "Um acidente de avião leva à cidade submersa de Rapture, onde ideologia e poder genético deram terrivelmente errado. Sua atmosfera e narrativa fizeram dele um dos jogos mais discutidos do meio.",
        ),
        trivia: T(
            [
                "It was directed by Ken Levine.",
                "The game's Big Daddy and Little Sister characters became instantly recognizable.",
            ],
            [
                "Foi dirigido por Ken Levine.",
                "Os personagens Big Daddy e Little Sister se tornaram imediatamente reconhecíveis.",
            ],
        ),
    },
    {
        id: "mass-effect",
        title: "Mass Effect",
        coverImage: "",
        releaseDate: L("November 20, 2007 (North America)", "20 de novembro de 2007 (América do Norte)"),
        releaseYear: 2007,
        publisher: "Microsoft Game Studios",
        developer: "BioWare",
        platform: "Xbox 360",
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
    {
        id: "halo-3",
        title: "Halo 3",
        coverImage: "",
        releaseDate: L("September 25, 2007 (Worldwide)", "25 de setembro de 2007 (Mundial)"),
        releaseYear: 2007,
        publisher: "Microsoft Game Studios",
        developer: "Bungie",
        platform: "Xbox 360",
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
    {
        id: "red-dead-redemption",
        title: "Red Dead Redemption",
        coverImage: "",
        releaseDate: L("May 18, 2010 (North America)", "18 de maio de 2010 (América do Norte)"),
        releaseYear: 2010,
        publisher: "Rockstar Games",
        developer: "Rockstar San Diego",
        platform: "Xbox 360",
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

    // ── PLAYSTATION 3 ────────────────────────────────────────────────────
    {
        id: "mgs4",
        title: "Metal Gear Solid 4: Guns of the Patriots",
        coverImage: "",
        releaseDate: L("June 12, 2008 (Worldwide)", "12 de junho de 2008 (Mundial)"),
        releaseYear: 2008,
        publisher: "Konami",
        developer: "Kojima Productions",
        platform: "PlayStation 3",
        genre: L("Stealth action", "Ação furtiva"),
        description: L(
            "An aging Solid Snake takes on a final mission in a world where war has become a paid service. Its long cinematics and emotional closure made it a defining PS3 exclusive.",
            "Um Solid Snake envelhecido assume uma missão final em um mundo onde a guerra se tornou um serviço pago. Suas longas cenas cinematográficas e conclusão emocional fizeram dele um exclusivo marcante do PS3.",
        ),
        trivia: T(
            [
                "It was directed by Hideo Kojima and concluded Solid Snake's story.",
                "The game was praised for its technical presentation on PlayStation 3.",
            ],
            [
                "Foi dirigido por Hideo Kojima e concluiu a história de Solid Snake.",
                "O jogo foi elogiado por sua apresentação técnica no PlayStation 3.",
            ],
        ),
    },
    {
        id: "demons-souls",
        title: "Demon's Souls",
        coverImage: "",
        releaseDate: L("February 5, 2009 (Japan)", "5 de fevereiro de 2009 (Japão)"),
        releaseYear: 2009,
        publisher: "Sony Computer Entertainment",
        developer: "FromSoftware",
        platform: "PlayStation 3",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A lone warrior enters the cursed kingdom of Boletaria, where death is a lesson and every encounter demands care. Its uncompromising design launched a new school of action RPGs.",
            "Um guerreiro solitário entra no reino amaldiçoado de Boletaria, onde a morte é uma lição e cada encontro exige cuidado. Seu design inflexível deu origem a uma nova escola de RPGs de ação.",
        ),
        trivia: T(
            [
                "It was directed by Hidetaka Miyazaki.",
                "The game's online messages and phantom summoning became series hallmarks.",
            ],
            [
                "Foi dirigido por Hidetaka Miyazaki.",
                "As mensagens online e a invocação de fantasmas se tornaram marcas da série.",
            ],
        ),
    },
    {
        id: "uncharted-2",
        title: "Uncharted 2: Among Thieves",
        coverImage: "",
        releaseDate: L("October 13, 2009 (North America)", "13 de outubro de 2009 (América do Norte)"),
        releaseYear: 2009,
        publisher: "Sony Computer Entertainment",
        developer: "Naughty Dog",
        platform: "PlayStation 3",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Nathan Drake chases a lost treasure across mountains, cities and trains in a blockbuster adventure. Its set pieces and character banter raised the bar for cinematic action games.",
            "Nathan Drake persegue um tesouro perdido por montanhas, cidades e trens em uma aventura de sucesso. Suas cenas de ação e o humor dos personagens elevaram o padrão dos jogos de ação cinematográficos.",
        ),
        trivia: T(
            [
                "It was developed by Naughty Dog and directed by Amy Hennig.",
                "The game's train sequence became one of the most celebrated set pieces of its generation.",
            ],
            [
                "Foi desenvolvido pela Naughty Dog e dirigido por Amy Hennig.",
                "A sequência do trem se tornou uma das cenas de ação mais celebradas de sua geração.",
            ],
        ),
    },
    {
        id: "journey",
        title: "Journey",
        coverImage: "",
        releaseDate: L("March 13, 2012 (North America)", "13 de março de 2012 (América do Norte)"),
        releaseYear: 2012,
        publisher: "Sony Computer Entertainment",
        developer: "thatgamecompany",
        platform: "PlayStation 3",
        genre: L("Adventure", "Aventura"),
        description: L(
            "A robed traveler crosses a desert toward a distant mountain, guided by light and the quiet presence of strangers. Its wordless story and anonymous co-op turned simplicity into something profound.",
            "Um viajante encapuzado cruza um deserto rumo a uma montanha distante, guiado pela luz e pela presença silenciosa de estranhos. Sua história sem palavras e o cooperativo anônimo transformaram a simplicidade em algo profundo.",
        ),
        trivia: T(
            [
                "It was developed by thatgamecompany and composed by Austin Wintory.",
                "Players can meet anonymous companions without any chat or usernames.",
            ],
            [
                "Foi desenvolvido pela thatgamecompany, com trilha de Austin Wintory.",
                "Os jogadores podem encontrar companheiros anônimos, sem chat ou nomes de usuário.",
            ],
        ),
    },
    {
        id: "the-last-of-us",
        title: "The Last of Us",
        coverImage: "",
        releaseDate: L("June 14, 2013 (Worldwide)", "14 de junho de 2013 (Mundial)"),
        releaseYear: 2013,
        publisher: "Sony Computer Entertainment",
        developer: "Naughty Dog",
        platform: "PlayStation 3",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Joel and Ellie cross a post-pandemic America, forging a bond amid loss and violence. Its restrained storytelling and detailed world made it one of the most acclaimed games of its era.",
            "Joel e Ellie atravessam uma América pós-pandemia, construindo um laço em meio à perda e à violência. Sua narrativa contida e mundo detalhado fizeram dele um dos jogos mais aclamados de sua época.",
        ),
        trivia: T(
            [
                "It was directed by Neil Druckmann and Bruce Straley.",
                "The game's opening sequence is often cited as a masterclass in interactive storytelling.",
            ],
            [
                "Foi dirigido por Neil Druckmann e Bruce Straley.",
                "A sequência de abertura é frequentemente citada como uma aula de narrativa interativa.",
            ],
        ),
    },

    // ── WII ──────────────────────────────────────────────────────────────
    {
        id: "wii-sports",
        title: "Wii Sports",
        coverImage: "",
        releaseDate: L("November 19, 2006 (North America)", "19 de novembro de 2006 (América do Norte)"),
        releaseYear: 2006,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Wii",
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
    {
        id: "twilight-princess",
        title: "The Legend of Zelda: Twilight Princess",
        coverImage: "",
        releaseDate: L("November 19, 2006 (North America)", "19 de novembro de 2006 (América do Norte)"),
        releaseYear: 2006,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Wii",
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
    {
        id: "super-mario-galaxy",
        title: "Super Mario Galaxy",
        coverImage: "",
        releaseDate: L("November 1, 2007 (Japan)", "1 de novembro de 2007 (Japão)"),
        releaseYear: 2007,
        publisher: "Nintendo",
        developer: "Nintendo EAD Tokyo",
        platform: "Wii",
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
    {
        id: "super-smash-bros-brawl",
        title: "Super Smash Bros. Brawl",
        coverImage: "",
        releaseDate: L("January 31, 2008 (Japan)", "31 de janeiro de 2008 (Japão)"),
        releaseYear: 2008,
        publisher: "Nintendo",
        developer: "Sora Ltd.; Game Arts",
        platform: "Wii",
        genre: L("Fighting", "Luta"),
        description: L(
            "Nintendo's crossover fighter expanded with third-party guests, a story campaign and extensive customization. Its Subspace Emissary mode turned the roster into an adventure.",
            "O jogo de luta crossover da Nintendo se expandiu com convidados de terceiros, uma campanha e ampla personalização. Seu modo Subspace Emissary transformou o elenco em uma aventura.",
        ),
        trivia: T(
            [
                "Solid Snake and Sonic the Hedgehog joined the roster.",
                "The game introduced the Subspace Emissary story mode.",
            ],
            [
                "Solid Snake e Sonic the Hedgehog entraram no elenco.",
                "O jogo introduziu o modo história Subspace Emissary.",
            ],
        ),
    },
    {
        id: "xenoblade-chronicles",
        title: "Xenoblade Chronicles",
        coverImage: "",
        releaseDate: L("June 10, 2010 (Japan)", "10 de junho de 2010 (Japão)"),
        releaseYear: 2010,
        publisher: "Nintendo",
        developer: "Monolith Soft",
        platform: "Wii",
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

    // ── WII U ────────────────────────────────────────────────────────────
    {
        id: "mario-kart-8",
        title: "Mario Kart 8",
        coverImage: "",
        releaseDate: L("May 29, 2014 (Japan)", "29 de maio de 2014 (Japão)"),
        releaseYear: 2014,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Wii U",
        genre: L("Racing", "Corrida"),
        description: L(
            "Anti-gravity racing, remixed courses and a sharp soundtrack made Mario Kart 8 one of the series' most polished entries. Its Deluxe edition later became a defining game for the Switch.",
            "Corridas antigravidade, pistas remixadas e uma trilha afiada fizeram de Mario Kart 8 uma das entradas mais polidas da série. Sua edição Deluxe se tornou um jogo definidor do Switch.",
        ),
        trivia: T(
            [
                "It was the first Mario Kart game to feature anti-gravity mechanics.",
                "The Deluxe version on Switch added new characters and battle modes.",
            ],
            [
                "Foi o primeiro Mario Kart com mecânicas de antigravidade.",
                "A versão Deluxe no Switch adicionou novos personagens e modos de batalha.",
            ],
        ),
    },
    {
        id: "super-mario-3d-world",
        title: "Super Mario 3D World",
        coverImage: "",
        releaseDate: L("November 21, 2013 (Japan)", "21 de novembro de 2013 (Japão)"),
        releaseYear: 2013,
        publisher: "Nintendo",
        developer: "Nintendo EAD Tokyo",
        platform: "Wii U",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario, Luigi, Peach and Toad race through colorful diorama-like stages with cooperative play. Its inventive power-ups and precise level design made it a Wii U highlight.",
            "Mario, Luigi, Peach e Toad correm por fases coloridas como dioramas, com jogo cooperativo. Seus power-ups inventivos e design preciso de fases fizeram dele um destaque do Wii U.",
        ),
        trivia: T(
            [
                "The game introduced the Cat Suit power-up.",
                "It was later ported to the Switch with additional content.",
            ],
            [
                "O jogo introduziu o power-up Traje de Gato.",
                "Mais tarde, foi portado para o Switch com conteúdo adicional.",
            ],
        ),
    },
    {
        id: "donkey-kong-tropical-freeze",
        title: "Donkey Kong Country: Tropical Freeze",
        coverImage: "",
        releaseDate: L("February 13, 2014 (Japan)", "13 de fevereiro de 2014 (Japão)"),
        releaseYear: 2014,
        publisher: "Nintendo",
        developer: "Retro Studios",
        platform: "Wii U",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "Donkey Kong and friends fight through a frozen archipelago to reclaim their island. Precise platforming and a dynamic soundtrack made it a modern high point for the series.",
            "Donkey Kong e seus amigos atravessam um arquipélago congelado para recuperar sua ilha. Plataforma precisa e uma trilha dinâmica fizeram dele um ponto alto moderno da série.",
        ),
        trivia: T(
            [
                "It was developed by Retro Studios, with music by David Wise.",
                "The game was later ported to the Nintendo Switch.",
            ],
            [
                "Foi desenvolvido pela Retro Studios, com música de David Wise.",
                "O jogo foi posteriormente portado para o Nintendo Switch.",
            ],
        ),
    },
    {
        id: "bayonetta-2",
        title: "Bayonetta 2",
        coverImage: "",
        releaseDate: L("September 20, 2014 (Japan)", "20 de setembro de 2014 (Japão)"),
        releaseYear: 2014,
        publisher: "Nintendo",
        developer: "PlatinumGames",
        platform: "Wii U",
        genre: L("Action", "Ação"),
        description: L(
            "The Umbra Witch returns with fluid, over-the-top combat against angels and demons. Nintendo's support helped PlatinumGames deliver one of the genre's most confident sequels.",
            "A Bruxa de Umbra retorna com combate fluido e exagerado contra anjos e demônios. O apoio da Nintendo ajudou a PlatinumGames a entregar uma das sequências mais confiantes do gênero.",
        ),
        trivia: T(
            [
                "Nintendo funded and published the game after the original's studio partnership changed.",
                "It was originally released as a Wii U exclusive.",
            ],
            [
                "A Nintendo financiou e publicou o jogo após mudanças na parceria do estúdio original.",
                "Foi lançado originalmente como exclusivo do Wii U.",
            ],
        ),
    },
    {
        id: "splatoon",
        title: "Splatoon",
        coverImage: "",
        releaseDate: L("May 28, 2015 (Japan)", "28 de maio de 2015 (Japão)"),
        releaseYear: 2015,
        publisher: "Nintendo",
        developer: "Nintendo EAD",
        platform: "Wii U",
        genre: L("Third-person shooter", "Tiro em terceira pessoa"),
        description: L(
            "Ink-slinging kids battle for turf in a colorful shooter where painting the ground matters as much as splatting opponents. Its fresh identity made it one of Nintendo's most successful new franchises.",
            "Jovens que espalham tinta disputam território em um shooter colorido onde pintar o chão importa tanto quanto acertar adversários. Sua identidade nova fez dela uma das franquias mais bem-sucedidas da Nintendo.",
        ),
        trivia: T(
            [
                "It was a new intellectual property for Nintendo.",
                "The game's Turf War mode rewards covering more ground than the opposing team.",
            ],
            [
                "Foi uma nova propriedade intelectual da Nintendo.",
                "O modo Turf War recompensa cobrir mais terreno que a equipe adversária.",
            ],
        ),
    },

    // ── PLAYSTATION 4 ────────────────────────────────────────────────────
    {
        id: "bloodborne",
        title: "Bloodborne",
        coverImage: "",
        releaseDate: L("March 24, 2015 (North America)", "24 de março de 2015 (América do Norte)"),
        releaseYear: 2015,
        publisher: "Sony Computer Entertainment",
        developer: "FromSoftware",
        platform: "PlayStation 4",
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
    {
        id: "witcher-3",
        title: "The Witcher 3: Wild Hunt",
        coverImage: "",
        releaseDate: L("May 19, 2015 (Worldwide)", "19 de maio de 2015 (Mundial)"),
        releaseYear: 2015,
        publisher: "CD Projekt",
        developer: "CD Projekt Red",
        platform: "PlayStation 4",
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
    {
        id: "horizon-zero-dawn",
        title: "Horizon Zero Dawn",
        coverImage: "",
        releaseDate: L("February 28, 2017 (North America)", "28 de fevereiro de 2017 (América do Norte)"),
        releaseYear: 2017,
        publisher: "Sony Interactive Entertainment",
        developer: "Guerrilla Games",
        platform: "PlayStation 4",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "Aloy explores a lush world ruled by animal-like machines while uncovering the fate of humanity. Its unique premise and ranged combat gave the PS4 one of its most striking new worlds.",
            "Aloy explora um mundo exuberante governado por máquinas semelhantes a animais enquanto descobre o destino da humanidade. Sua premissa única e combate à distância deram ao PS4 um de seus mundos mais marcantes.",
        ),
        trivia: T(
            [
                "It was developed by Guerrilla Games, previously known for the Killzone series.",
                "The game's robotic creatures are inspired by both animals and ancient cultures.",
            ],
            [
                "Foi desenvolvido pela Guerrilla Games, antes conhecida pela série Killzone.",
                "As criaturas robóticas são inspiradas tanto em animais quanto em culturas antigas.",
            ],
        ),
    },
    {
        id: "god-of-war-2018",
        title: "God of War",
        coverImage: "",
        releaseDate: L("April 20, 2018 (Worldwide)", "20 de abril de 2018 (Mundial)"),
        releaseYear: 2018,
        publisher: "Sony Interactive Entertainment",
        developer: "Santa Monica Studio",
        platform: "PlayStation 4",
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
    {
        id: "red-dead-redemption-2",
        title: "Red Dead Redemption 2",
        coverImage: "",
        releaseDate: L("October 26, 2018 (Worldwide)", "26 de outubro de 2018 (Mundial)"),
        releaseYear: 2018,
        publisher: "Rockstar Games",
        developer: "Rockstar Studios",
        platform: "PlayStation 4",
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

    // ── XBOX ONE ─────────────────────────────────────────────────────────
    {
        id: "halo-5",
        title: "Halo 5: Guardians",
        coverImage: "",
        releaseDate: L("October 27, 2015 (Worldwide)", "27 de outubro de 2015 (Mundial)"),
        releaseYear: 2015,
        publisher: "Microsoft Studios",
        developer: "343 Industries",
        platform: "Xbox One",
        genre: L("First-person shooter", "Tiro em primeira pessoa"),
        description: L(
            "Master Chief and Spartan Locke pursue the same mystery from opposite sides. Squad-based combat and a strong multiplayer suite made it a major Xbox One shooter.",
            "Master Chief e o Spartan Locke perseguem o mesmo mistério por lados opostos. Combate em esquadrão e um multiplayer robusto fizeram dele um dos principais shooters do Xbox One.",
        ),
        trivia: T(
            [
                "It was the first mainline Halo game developed by 343 Industries.",
                "The campaign supports four-player cooperative play.",
            ],
            [
                "Foi o primeiro Halo principal desenvolvido pela 343 Industries.",
                "A campanha suporta cooperativo para quatro jogadores.",
            ],
        ),
    },
    {
        id: "ori-and-the-blind-forest",
        title: "Ori and the Blind Forest",
        coverImage: "",
        releaseDate: L("March 11, 2015 (Worldwide)", "11 de março de 2015 (Mundial)"),
        releaseYear: 2015,
        publisher: "Microsoft Studios",
        developer: "Moon Studios",
        platform: "Xbox One",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "A small spirit named Ori restores a dying forest in a hand-painted metroidvania. Its emotional opening and graceful movement made it one of the Xbox One's most beloved smaller games.",
            "Um pequeno espírito chamado Ori restaura uma floresta moribunda em um metroidvania pintado à mão. Sua abertura emocional e movimento gracioso fizeram dele um dos jogos menores mais queridos do Xbox One.",
        ),
        trivia: T(
            [
                "It was developed by Moon Studios, a distributed team.",
                "The game's soundtrack was composed by Gareth Coker.",
            ],
            [
                "Foi desenvolvido pela Moon Studios, uma equipe distribuída.",
                "A trilha sonora foi composta por Gareth Coker.",
            ],
        ),
    },
    {
        id: "cuphead",
        title: "Cuphead",
        coverImage: "",
        releaseDate: L("September 29, 2017 (Worldwide)", "29 de setembro de 2017 (Mundial)"),
        releaseYear: 2017,
        publisher: "Studio MDHR",
        developer: "Studio MDHR",
        platform: "Xbox One",
        genre: L("Run and gun", "Run and gun"),
        description: L(
            "Cuphead and Mugman battle bosses in a world drawn like a 1930s cartoon. Its hand-animated art and punishing rhythm made it instantly unmistakable.",
            "Cuphead e Mugman enfrentam chefes em um mundo desenhado como um desenho animado dos anos 1930. Sua arte animada à mão e ritmo exigente fizeram dele imediatamente inconfundível.",
        ),
        trivia: T(
            [
                "It was developed by the husband-and-wife team at Studio MDHR.",
                "Every animation was hand-drawn in a vintage cartoon style.",
            ],
            [
                "Foi desenvolvido pela dupla de marido e mulher do Studio MDHR.",
                "Cada animação foi desenhada à mão em estilo de cartoon antigo.",
            ],
        ),
    },
    {
        id: "sea-of-thieves",
        title: "Sea of Thieves",
        coverImage: "",
        releaseDate: L("March 20, 2018 (Worldwide)", "20 de março de 2018 (Mundial)"),
        releaseYear: 2018,
        publisher: "Microsoft Studios",
        developer: "Rare",
        platform: "Xbox One",
        genre: L("Adventure", "Aventura"),
        description: L(
            "Pirate crews sail, dig and fight together in a shared world built around emergent stories. Its cooperative chaos made it a long-running multiplayer playground.",
            "Tripulações piratas navegam, cavam e lutam juntas em um mundo compartilhado construído em torno de histórias emergentes. Seu caos cooperativo o transformou em um playground multiplayer duradouro.",
        ),
        trivia: T(
            [
                "It was developed by Rare, the studio behind Banjo-Kazooie.",
                "The game is designed around player-driven stories rather than a fixed narrative.",
            ],
            [
                "Foi desenvolvido pela Rare, o estúdio de Banjo-Kazooie.",
                "O jogo é projetado em torno de histórias criadas pelos jogadores, não de uma narrativa fixa.",
            ],
        ),
    },
    {
        id: "forza-horizon-4",
        title: "Forza Horizon 4",
        coverImage: "",
        releaseDate: L("October 2, 2018 (Worldwide)", "2 de outubro de 2018 (Mundial)"),
        releaseYear: 2018,
        publisher: "Microsoft Studios",
        developer: "Playground Games",
        platform: "Xbox One",
        genre: L("Racing", "Corrida"),
        description: L(
            "An open-world festival of racing set across a stylized Britain that changes with the seasons. Its freedom and polish made it one of the most accessible racing games of its generation.",
            "Um festival de corrida em mundo aberto ambientado em uma Grã-Bretanha estilizada que muda com as estações. Sua liberdade e polimento fizeram dele um dos jogos de corrida mais acessíveis de sua geração.",
        ),
        trivia: T(
            [
                "The game's map changes season every week in the shared world.",
                "It was developed by Playground Games.",
            ],
            [
                "O mapa do jogo muda de estação a cada semana no mundo compartilhado.",
                "Foi desenvolvido pela Playground Games.",
            ],
        ),
    },

    // ── NINTENDO SWITCH ──────────────────────────────────────────────────
    {
        id: "breath-of-the-wild",
        title: "The Legend of Zelda: Breath of the Wild",
        coverImage: "",
        releaseDate: L("March 3, 2017 (Worldwide)", "3 de março de 2017 (Mundial)"),
        releaseYear: 2017,
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        platform: "Nintendo Switch",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Link wakes in a ruined Hyrule and is free to climb, explore and solve its world in almost any order. Its open-air design reinvented the series and influenced a generation of games.",
            "Link desperta em Hyrule arruinada e é livre para escalar, explorar e resolver o mundo em quase qualquer ordem. Seu design de mundo aberto reinventou a série e influenciou uma geração de jogos.",
        ),
        trivia: T(
            [
                "It launched simultaneously on the Wii U and as a Switch launch title.",
                "The game's chemistry and physics systems allow many unscripted solutions.",
            ],
            [
                "Foi lançado simultaneamente no Wii U e como título de lançamento do Switch.",
                "Os sistemas de química e física permitem muitas soluções não roteirizadas.",
            ],
        ),
    },
    {
        id: "super-mario-odyssey",
        title: "Super Mario Odyssey",
        coverImage: "",
        releaseDate: L("October 27, 2017 (Worldwide)", "27 de outubro de 2017 (Mundial)"),
        releaseYear: 2017,
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        platform: "Nintendo Switch",
        genre: L("3D platformer", "Plataforma 3D"),
        description: L(
            "Mario travels across kingdoms with Cappy, capturing enemies and objects to reach each Power Moon. Its boundless movement and playful ideas made it a modern platforming landmark.",
            "Mario viaja por reinos com Cappy, capturando inimigos e objetos para alcançar cada Power Moon. Seu movimento livre e ideias brincalhonas fizeram dele um marco moderno dos plataformas.",
        ),
        trivia: T(
            [
                "The game introduced Cappy and the capture mechanic.",
                "Its soundtrack includes the vocal theme 'Jump Up, Super Star!'.",
            ],
            [
                "O jogo introduziu Cappy e a mecânica de captura.",
                "A trilha sonora inclui o tema cantado 'Jump Up, Super Star!'.",
            ],
        ),
    },
    {
        id: "smash-ultimate",
        title: "Super Smash Bros. Ultimate",
        coverImage: "",
        releaseDate: L("December 7, 2018 (Worldwide)", "7 de dezembro de 2018 (Mundial)"),
        releaseYear: 2018,
        publisher: "Nintendo",
        developer: "Bandai Namco Studios; Sora Ltd.",
        platform: "Nintendo Switch",
        genre: L("Fighting", "Luta"),
        description: L(
            "Every fighter from the series' history returned for a colossal crossover with stages, spirits and robust multiplayer. Its 'everyone is here' promise made it a celebration of gaming itself.",
            "Todos os lutadores da história da série retornaram em um crossover colossal com fases, espíritos e multiplayer robusto. A promessa de que 'todos estão aqui' fez dele uma celebração dos próprios games.",
        ),
        trivia: T(
            [
                "Its tagline was 'Everyone is here'.",
                "The game includes a massive roster spanning dozens of franchises.",
            ],
            [
                "Seu slogan era 'Everyone is here' ('Todos estão aqui').",
                "O jogo inclui um elenco enorme que abrange dezenas de franquias.",
            ],
        ),
    },
    {
        id: "animal-crossing-new-horizons",
        title: "Animal Crossing: New Horizons",
        coverImage: "",
        releaseDate: L("March 20, 2020 (Worldwide)", "20 de março de 2020 (Mundial)"),
        releaseYear: 2020,
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        platform: "Nintendo Switch",
        genre: L("Life simulation", "Simulação de vida"),
        description: L(
            "A deserted-island getaway becomes a personalized home through fishing, decorating and quiet daily rituals. Released at the start of a global lockdown, it became a shared refuge for millions.",
            "Uma escapada para uma ilha deserta se torna um lar personalizado por meio de pesca, decoração e rituais diários tranquilos. Lançado no início de um isolamento global, tornou-se um refúgio compartilhado para milhões.",
        ),
        trivia: T(
            [
                "It was released during the early days of the COVID-19 pandemic.",
                "The game lets players customize their island and visit friends online.",
            ],
            [
                "Foi lançado nos primeiros dias da pandemia de COVID-19.",
                "O jogo permite personalizar a ilha e visitar amigos online.",
            ],
        ),
    },
    {
        id: "mario-kart-8-deluxe",
        title: "Mario Kart 8 Deluxe",
        coverImage: "",
        releaseDate: L("April 28, 2017 (Worldwide)", "28 de abril de 2017 (Mundial)"),
        releaseYear: 2017,
        publisher: "Nintendo",
        developer: "Nintendo EPD",
        platform: "Nintendo Switch",
        genre: L("Racing", "Corrida"),
        description: L(
            "The Wii U hit arrived on Switch with all its courses, new characters and refined battle modes. It became the definitive version of one of the best-loved racing games ever made.",
            "O sucesso do Wii U chegou ao Switch com todas as pistas, novos personagens e modos de batalha refinados. Tornou-se a versão definitiva de um dos jogos de corrida mais amados de todos os tempos.",
        ),
        trivia: T(
            [
                "It was the best-selling game on the Nintendo Switch.",
                "The Deluxe version restored the classic battle mode from earlier entries.",
            ],
            [
                "Foi o jogo mais vendido do Nintendo Switch.",
                "A versão Deluxe restaurou o modo de batalha clássico das entradas anteriores.",
            ],
        ),
    },

    // ── PLAYSTATION 5 ────────────────────────────────────────────────────
    {
        id: "astro-bot",
        title: "Astro Bot",
        coverImage: "",
        releaseDate: L("September 6, 2024 (Worldwide)", "6 de setembro de 2024 (Mundial)"),
        releaseYear: 2024,
        publisher: "Sony Interactive Entertainment",
        developer: "Team Asobi",
        platform: "PlayStation 5",
        genre: L("Platformer", "Plataforma"),
        description: L(
            "A tiny robot travels across inventive worlds to rescue his crew and celebrate PlayStation's history. Its joyful design and inventive use of the DualSense made it a modern platforming standout.",
            "Um pequeno robô viaja por mundos inventivos para resgatar sua tripulação e celebrar a história do PlayStation. Seu design alegre e uso criativo do DualSense fizeram dele um destaque moderno dos plataformas.",
        ),
        trivia: T(
            [
                "It was developed by Team Asobi, the studio behind Astro's Playroom.",
                "The game is filled with cameos from classic PlayStation franchises.",
            ],
            [
                "Foi desenvolvido pela Team Asobi, o estúdio de Astro's Playroom.",
                "O jogo é repleto de participações de franquias clássicas do PlayStation.",
            ],
        ),
    },
    {
        id: "demons-souls-remake",
        title: "Demon's Souls",
        coverImage: "",
        releaseDate: L("November 12, 2020 (Worldwide)", "12 de novembro de 2020 (Mundial)"),
        releaseYear: 2020,
        publisher: "Sony Interactive Entertainment",
        developer: "Bluepoint Games",
        platform: "PlayStation 5",
        genre: L("Action role-playing", "RPG de ação"),
        description: L(
            "A faithful remake of the game that launched a genre, rebuilt with striking visuals and near-instant loading. It reintroduced Boletaria to a new generation of players.",
            "Um remake fiel do jogo que deu origem a um gênero, reconstruído com visuais impressionantes e carregamento quase instantâneo. Ele reapresentou Boletaria a uma nova geração de jogadores.",
        ),
        trivia: T(
            [
                "It was a launch title for the PlayStation 5.",
                "Bluepoint Games rebuilt the original with new assets while preserving its design.",
            ],
            [
                "Foi um título de lançamento do PlayStation 5.",
                "A Bluepoint Games reconstruiu o original com novos recursos, preservando seu design.",
            ],
        ),
    },
    {
        id: "ratchet-rift-apart",
        title: "Ratchet & Clank: Rift Apart",
        coverImage: "",
        releaseDate: L("June 11, 2021 (Worldwide)", "11 de junho de 2021 (Mundial)"),
        releaseYear: 2021,
        publisher: "Sony Interactive Entertainment",
        developer: "Insomniac Games",
        platform: "PlayStation 5",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Ratchet and Clank hop between dimensions in a showcase for the PS5's speed and DualSense features. Its playful arsenal and polished action made it a standout exclusive.",
            "Ratchet e Clank saltam entre dimensões em uma demonstração da velocidade do PS5 e dos recursos do DualSense. Seu arsenal divertido e ação polida fizeram dele um exclusivo de destaque.",
        ),
        trivia: T(
            [
                "The game uses the PS5 SSD to transition between dimensions almost instantly.",
                "It was developed by Insomniac Games.",
            ],
            [
                "O jogo usa o SSD do PS5 para alternar entre dimensões quase instantaneamente.",
                "Foi desenvolvido pela Insomniac Games.",
            ],
        ),
    },
    {
        id: "returnal",
        title: "Returnal",
        coverImage: "",
        releaseDate: L("April 30, 2021 (Worldwide)", "30 de abril de 2021 (Mundial)"),
        releaseYear: 2021,
        publisher: "Sony Interactive Entertainment",
        developer: "Housemarque",
        platform: "PlayStation 5",
        genre: L("Roguelike shooter", "Shooter roguelike"),
        description: L(
            "Selene crashes on a hostile alien planet and relives the same cycle after every death. Its tense combat and cryptic story made it one of the PS5's most distinctive early releases.",
            "Selene cai em um planeta alienígena hostil e revive o mesmo ciclo após cada morte. Seu combate tenso e história enigmática fizeram dele um dos lançamentos iniciais mais distintos do PS5.",
        ),
        trivia: T(
            [
                "It was developed by Housemarque, known for arcade-style shooters.",
                "The game uses the DualSense's haptic feedback to reflect its alien environments.",
            ],
            [
                "Foi desenvolvido pela Housemarque, conhecida por shooters de estilo arcade.",
                "O jogo usa o feedback tátil do DualSense para refletir seus ambientes alienígenas.",
            ],
        ),
    },
    {
        id: "god-of-war-ragnarok",
        title: "God of War Ragnarök",
        coverImage: "",
        releaseDate: L("November 9, 2022 (Worldwide)", "9 de novembro de 2022 (Mundial)"),
        releaseYear: 2022,
        publisher: "Sony Interactive Entertainment",
        developer: "Santa Monica Studio",
        platform: "PlayStation 5",
        genre: L("Action-adventure", "Ação e aventura"),
        description: L(
            "Kratos and Atreus face the coming of Ragnarök across all nine realms. Its emotional scale and refined combat close the Norse chapter of the series.",
            "Kratos e Atreus enfrentam a chegada do Ragnarök pelos nove reinos. Sua escala emocional e combate refinado encerram o capítulo nórdico da série.",
        ),
        trivia: T(
            [
                "It concludes the Norse mythology saga begun in God of War (2018).",
                "The game was directed by Eric Williams.",
            ],
            [
                "Conclui a saga da mitologia nórdica iniciada em God of War (2018).",
                "O jogo foi dirigido por Eric Williams.",
            ],
        ),
    },
];
