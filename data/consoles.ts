import type { Localized, Platform } from "./games";

export type ConsoleEntry = {
    id: string;
    platform: Platform;
    company: string;
    releaseYear: number;
    generation: Localized;
    media: Localized;
    image?: string;
    summary: Localized;
};

const L = (en: string, pt: string): Localized => ({ en, pt });

export const consoles: ConsoleEntry[] = [
    {
        id: "nes",
        platform: "NES",
        company: "Nintendo",
        releaseYear: 1983,
        generation: L("3rd generation", "3ª geração"),
        media: L("Cartridge", "Cartucho"),
        image: "/images/consoles/nes.png",
        summary: L(
            "Nintendo's 8-bit machine rebuilt the home console market after the crash of 1983. Its strict licensing, durable cartridges and unforgettable first-party library made the NES the template for generations of living-room play.",
            "A máquina 8-bit da Nintendo reconstruiu o mercado de consoles domésticos após a crise de 1983. O licenciamento rigoroso, os cartuchos resistentes e uma biblioteca first-party inesquecível fizeram do NES o modelo para gerações de jogo na sala de estar.",
        ),
    },
    {
        id: "master-system",
        platform: "Master System",
        company: "Sega",
        releaseYear: 1986,
        generation: L("3rd generation", "3ª geração"),
        media: L("Cartridge / Sega Card", "Cartucho / Sega Card"),
        image: "/images/consoles/master-system.png",
        summary: L(
            "Sega's 8-bit follow-up to the SG-1000 arrived in Japan as the Mark III in 1985 and reached the West as the Master System in 1986. Built-in software, clean cartridge design and strong support in Europe and Brazil gave it a long life beyond its rivalry with the NES.",
            "O sucessor 8-bit do SG-1000 chegou ao Japão como Mark III em 1985 e ao Ocidente como Master System em 1986. Jogos embutidos, cartuchos bem desenhados e forte apoio na Europa e no Brasil deram ao console uma longa vida além da rivalidade com o NES.",
        ),
    },
    {
        id: "mega-drive",
        platform: "Mega Drive",
        company: "Sega",
        releaseYear: 1988,
        generation: L("4th generation", "4ª geração"),
        media: L("Cartridge", "Cartucho"),
        image: "/images/consoles/mega-drive.png",
        summary: L(
            "Sega's 16-bit answer to Nintendo leaned into speed, attitude and arcade conversions. Sonic became the mascot of a console that gave the Mega Drive a sharper, more rebellious identity in the early 1990s.",
            "A resposta 16-bit da Sega à Nintendo apostou em velocidade, atitude e conversões de arcade. Sonic se tornou o mascote de um console que deu ao Mega Drive uma identidade mais afiada e rebelde no início dos anos 1990.",
        ),
    },
    {
        id: "snes",
        platform: "SNES",
        company: "Nintendo",
        releaseYear: 1990,
        generation: L("4th generation", "4ª geração"),
        media: L("Cartridge", "Cartucho"),
        image: "/images/consoles/snes.png",
        summary: L(
            "Building on the 8-bit formula, the Super Nintendo paired richer colour and sampled sound with Mode 7 effects. The result was a golden run of role-playing games, platformers and racing titles that still define 16-bit design.",
            "Partindo da fórmula 8-bit, o Super Nintendo uniu cores mais ricas e som sampleado aos efeitos Mode 7. O resultado foi uma sequência dourada de RPGs, plataformas e jogos de corrida que ainda definem o design 16-bit.",
        ),
    },
    {
        id: "playstation",
        platform: "PlayStation",
        company: "Sony",
        releaseYear: 1994,
        generation: L("5th generation", "5ª geração"),
        media: L("CD-ROM", "CD-ROM"),
        image: "/images/consoles/playstation.png",
        summary: L(
            "Sony's debut console moved games onto CD-ROM and into a more cinematic register. Its focus on 3D graphics, third-party partnerships and adult-oriented hits turned PlayStation into the first console brand to sell over 100 million units.",
            "O console de estreia da Sony levou os jogos para o CD-ROM e para um registro mais cinematográfico. O foco em gráficos 3D, parcerias com terceiros e sucessos voltados ao público adulto fez do PlayStation a primeira marca de console a vender mais de 100 milhões de unidades.",
        ),
    },
    {
        id: "nintendo-64",
        platform: "Nintendo 64",
        company: "Nintendo",
        releaseYear: 1996,
        generation: L("5th generation", "5ª geração"),
        media: L("Cartridge", "Cartucho"),
        image: "/images/consoles/nintendo-64.png",
        summary: L(
            "The Nintendo 64 brought analog control, four-player ports and true 3D worlds into the living room. Mario 64 and Ocarina of Time established a grammar for 3D movement that designers still study today.",
            "O Nintendo 64 levou controle analógico, quatro portas de controle e mundos realmente 3D para a sala de estar. Mario 64 e Ocarina of Time estabeleceram uma gramática de movimento 3D que designers ainda estudam hoje.",
        ),
    },
    {
        id: "dreamcast",
        platform: "Dreamcast",
        company: "Sega",
        releaseYear: 1998,
        generation: L("6th generation", "6ª geração"),
        media: L("GD-ROM", "GD-ROM"),
        image: "/images/consoles/dreamcast.png",
        summary: L(
            "Sega's final console arrived early, online-ready and full of experimental ambition. Its arcade-perfect ports and bold originals made it beloved, even if commercial momentum could not last.",
            "O último console da Sega chegou cedo, pronto para a internet e cheio de ambição experimental. Seus ports fiéis aos arcades e originais ousados o tornaram adorado, mesmo que o ímpeto comercial não tenha durado.",
        ),
    },
    {
        id: "playstation-2",
        platform: "PlayStation 2",
        company: "Sony",
        releaseYear: 2000,
        generation: L("6th generation", "6ª geração"),
        media: L("DVD-ROM", "DVD-ROM"),
        image: "/images/consoles/playstation-2.png",
        summary: L(
            "The PlayStation 2 combined DVD playback with a colossal library and backward compatibility. It became the best-selling console ever, carrying series such as GTA, Final Fantasy and God of War into a new decade.",
            "O PlayStation 2 combinou reprodução de DVD com uma biblioteca colossal e compatibilidade retroativa. Tornou-se o console mais vendido de todos os tempos, levando séries como GTA, Final Fantasy e God of War para uma nova década.",
        ),
    },
    {
        id: "gamecube",
        platform: "GameCube",
        company: "Nintendo",
        releaseYear: 2001,
        generation: L("6th generation", "6ª geração"),
        media: L("GameCube Game Disc (miniDVD)", "Disco GameCube (miniDVD)"),
        image: "/images/consoles/gamecube.png",
        summary: L(
            "Nintendo's compact purple box favoured fast load times and local multiplayer over multimedia features. Its first-party catalogue remains one of the most consistent of any generation.",
            "A caixa compacta e roxa da Nintendo priorizou carregamentos rápidos e multiplayer local em vez de recursos multimídia. Seu catálogo first-party continua sendo um dos mais consistentes de qualquer geração.",
        ),
    },
    {
        id: "xbox",
        platform: "Xbox",
        company: "Microsoft",
        releaseYear: 2001,
        generation: L("6th generation", "6ª geração"),
        media: L("DVD-ROM", "DVD-ROM"),
        image: "/images/consoles/xbox.png",
        summary: L(
            "Microsoft's first console brought PC hardware, a built-in hard drive and Xbox Live into the market. Halo made the platform a shooter destination and established online play as a console standard.",
            "O primeiro console da Microsoft trouxe hardware de PC, disco rígido integrado e Xbox Live para o mercado. Halo fez da plataforma um destino para shooters e estabeleceu o jogo online como padrão dos consoles.",
        ),
    },
    {
        id: "xbox-360",
        platform: "Xbox 360",
        company: "Microsoft",
        releaseYear: 2005,
        generation: L("7th generation", "7ª geração"),
        media: L("DVD-ROM / digital", "DVD-ROM / digital"),
        image: "/images/consoles/xbox-360.png",
        summary: L(
            "The Xbox 360 helped make high definition, achievements and digital downloads part of everyday console life. Its early lead and strong online service shaped the seventh generation.",
            "O Xbox 360 ajudou a tornar a alta definição, as conquistas e os downloads digitais parte do dia a dia dos consoles. Sua vantagem inicial e o forte serviço online moldaram a sétima geração.",
        ),
    },
    {
        id: "playstation-3",
        platform: "PlayStation 3",
        company: "Sony",
        releaseYear: 2006,
        generation: L("7th generation", "7ª geração"),
        media: L("Blu-ray", "Blu-ray"),
        image: "/images/consoles/playstation-3.png",
        summary: L(
            "The PlayStation 3 launched with Blu-ray and formidable hardware, then grew into a home for cinematic exclusives. Its late-generation run produced some of the most acclaimed games of the era.",
            "O PlayStation 3 foi lançado com Blu-ray e hardware formidável, e depois se tornou lar de exclusivos cinematográficos. Sua reta final produziu alguns dos jogos mais aclamados da época.",
        ),
    },
    {
        id: "wii",
        platform: "Wii",
        company: "Nintendo",
        releaseYear: 2006,
        generation: L("7th generation", "7ª geração"),
        media: L("Wii Optical Disc", "Disco óptico Wii"),
        image: "/images/consoles/wii.png",
        summary: L(
            "The Wii traded raw power for motion control and a lower barrier to entry. Wii Sports and the Remote brought families and lapsed players back into the living room.",
            "O Wii trocou potência bruta por controle de movimento e uma barreira de entrada menor. Wii Sports e o Remote trouxeram famílias e jogadores afastados de volta à sala de estar.",
        ),
    },
    {
        id: "wii-u",
        platform: "Wii U",
        company: "Nintendo",
        releaseYear: 2012,
        generation: L("8th generation", "8ª geração"),
        media: L("Wii U Optical Disc", "Disco óptico Wii U"),
        image: "/images/consoles/wii-u.png",
        summary: L(
            "The Wii U tried to make the controller a second screen, with mixed results. Despite modest sales, it hosted inventive games that later found new life on the Switch.",
            "O Wii U tentou transformar o controle em uma segunda tela, com resultados mistos. Apesar das vendas modestas, abrigou jogos inventivos que depois ganharam nova vida no Switch.",
        ),
    },
    {
        id: "playstation-4",
        platform: "PlayStation 4",
        company: "Sony",
        releaseYear: 2013,
        generation: L("8th generation", "8ª geração"),
        media: L("Blu-ray / digital", "Blu-ray / digital"),
        image: "/images/consoles/playstation-4.png",
        summary: L(
            "The PlayStation 4 refocused on games, developers and social sharing after a difficult predecessor. Its exclusives and consistent performance made it the defining console of the eighth generation.",
            "O PlayStation 4 voltou o foco para jogos, desenvolvedores e compartilhamento social depois de um antecessor difícil. Seus exclusivos e desempenho consistente o tornaram o console que definiu a oitava geração.",
        ),
    },
    {
        id: "xbox-one",
        platform: "Xbox One",
        company: "Microsoft",
        releaseYear: 2013,
        generation: L("8th generation", "8ª geração"),
        media: L("Blu-ray / digital", "Blu-ray / digital"),
        image: "/images/consoles/xbox-one.png",
        summary: L(
            "The Xbox One began as an all-in-one entertainment hub and later rediscovered its gaming focus. Game Pass, backward compatibility and services became its most lasting contributions.",
            "O Xbox One começou como um hub de entretenimento tudo-em-um e depois reencontrou o foco nos jogos. Game Pass, compatibilidade retroativa e serviços se tornaram suas contribuições mais duradouras.",
        ),
    },
    {
        id: "nintendo-switch",
        platform: "Nintendo Switch",
        company: "Nintendo",
        releaseYear: 2017,
        generation: L("9th generation", "9ª geração"),
        media: L("Game Card / digital", "Cartão de jogo / digital"),
        image: "/images/consoles/nintendo-switch.png",
        summary: L(
            "The Switch merged handheld and home play into a single hybrid device. Its portability, local multiplayer and steady stream of first-party hits made it one of Nintendo's most successful systems.",
            "O Switch uniu o jogo portátil e o doméstico em um único aparelho híbrido. A portabilidade, o multiplayer local e o fluxo constante de sucessos first-party o tornaram um dos sistemas mais bem-sucedidos da Nintendo.",
        ),
    },
    {
        id: "xbox-series-s-x",
        platform: "Xbox Series S/X",
        company: "Microsoft",
        releaseYear: 2020,
        generation: L("9th generation", "9ª geração"),
        media: L("Blu-ray / digital", "Blu-ray / digital"),
        image: "/images/consoles/xbox-series-s-x.png",
        summary: L(
            "The Series X and the all-digital Series S brought fast SSDs, Quick Resume and high frame rates to Xbox. Backward compatibility and Game Pass tied the new generation to the archive behind it.",
            "O Series X e o Series S totalmente digital trouxeram SSDs rápidos, Quick Resume e altas taxas de quadros para o Xbox. A compatibilidade retroativa e o Game Pass conectaram a nova geração ao arquivo que veio antes.",
        ),
    },
    {
        id: "playstation-5",
        platform: "PlayStation 5",
        company: "Sony",
        releaseYear: 2020,
        generation: L("9th generation", "9ª geração"),
        media: L("Ultra HD Blu-ray / digital", "Ultra HD Blu-ray / digital"),
        image: "/images/consoles/playstation-5.png",
        summary: L(
            "The PlayStation 5 paired an ultra-fast SSD with a new controller built around haptic feedback. Its generation has leaned into seamless loading, 60fps modes and ambitious cinematic exclusives.",
            "O PlayStation 5 uniu um SSD ultrarrápido a um novo controle construído em torno do feedback tátil. Sua geração tem apostado em carregamento contínuo, modos a 60fps e exclusivos cinematográficos ambiciosos.",
        ),
    },
    {
        id: "nintendo-switch-2",
        platform: "Nintendo Switch 2",
        company: "Nintendo",
        releaseYear: 2025,
        generation: L("9th generation", "9ª geração"),
        media: L("Game Card / digital", "Cartão de jogo / digital"),
        image: "/images/consoles/nintendo-switch-2.png",
        summary: L(
            "The Switch 2 refines the hybrid formula with more power, larger screens and new social features. It continues Nintendo's strategy of combining portability with shared living-room play.",
            "O Switch 2 refina a fórmula híbrida com mais potência, telas maiores e novos recursos sociais. Ele continua a estratégia da Nintendo de combinar portabilidade com o jogo compartilhado na sala de estar.",
        ),
    },
];
