import type { Localized } from "./games";

export type Era = {
    number: string;
    year: string;
    name: Localized;
    tag: Localized;
    text: Localized;
    summary: Localized;
    image?: string;
    accent?: string;
};

const L = (en: string, pt: string): Localized => ({ en, pt });

export const eras: Era[] = [
    {
        number: "01",
        year: "1970—79",
        name: L("THE ARCADE ERA", "A ERA DOS ARCADE"),
        tag: L("INSERT COIN", "INSIRA A FICHA"),
        text: L(
            "A new kind of gathering place. Bright cabinets, high scores and the thrill of one more go.",
            "Um novo tipo de ponto de encontro. Gabinetes brilhantes, recordes e a emoção de jogar mais uma vez.",
        ),
        summary: L(
            "The 1970s transformed electronic play from a laboratory curiosity into a public ritual. Computer Space and Pong proved that a screen, two paddles and a simple rule set could draw a crowd, and the arcade cabinet quickly became a fixture of bars, bowling alleys and shopping malls.\n\nBy 1978, Space Invaders had turned high scores into a shared language. A single coin bought a few minutes of tension, and the best players became local celebrities. The era established the social rhythm — queue, play, watch, try again — that every later generation would inherit.",
            "Os anos 1970 transformaram o jogo eletrônico de uma curiosidade de laboratório em um ritual público. Computer Space e Pong provaram que uma tela, dois controles e regras simples podiam atrair uma multidão, e o gabinete de arcade logo se tornou parte de bares, boleras e shopping centers.\n\nEm 1978, Space Invaders transformou os recordes em uma linguagem compartilhada. Uma ficha comprava alguns minutos de tensão, e os melhores jogadores viravam celebridades locais. A era estabeleceu o ritmo social — fila, jogar, assistir, tentar de novo — que todas as gerações seguintes herdariam.",
        ),
        image: "/images/era-1.webp",
    },
    {
        number: "02",
        year: "1980—89",
        name: L("8-BIT WORLDS", "MUNDOS 8-BIT"),
        tag: L("PIXEL PERFECT", "PIXEL PERFEITO"),
        text: L(
            "Home consoles brought entire worlds into the living room, one carefully placed pixel at a time.",
            "Os consoles domésticos levaram mundos inteiros para a sala de estar, um pixel cuidadosamente posicionado de cada vez.",
        ),
        summary: L(
            "Home consoles became affordable, personal and impossible to ignore. The Famicom arrived in Japan in 1983 and reached North America as the NES in 1985, pairing sturdy cartridges with a licensing model that rebuilt trust after the crash of 1983.\n\nSuper Mario Bros., The Legend of Zelda and Metroid turned the living room into a place of discovery, while chiptune soundtracks gave the decade its own unmistakable voice. The 8-bit era proved that technical limits could sharpen, rather than shrink, a designer's imagination.",
            "Os consoles domésticos ficaram acessíveis, pessoais e impossíveis de ignorar. O Famicom chegou ao Japão em 1983 e à América do Norte como NES em 1985, combinando cartuchos resistentes com um modelo de licenciamento que reconstruiu a confiança após a crise de 1983.\n\nSuper Mario Bros., The Legend of Zelda e Metroid transformaram a sala de estar em um lugar de descoberta, enquanto as trilhas chiptune deram à década uma voz inconfundível. A era 8-bit provou que os limites técnicos podiam afiar, e não encolher, a imaginação de um designer.",
        ),
        image: "/images/era-2.png",
    },
    {
        number: "03",
        year: "1990—95",
        name: L("16-BIT DREAMS", "SONHOS 16-BIT"),
        tag: L("MORE COLOUR", "MAIS COR"),
        text: L(
            "Bigger sprites, richer sound and fast-moving adventures pushed 2D design to new heights.",
            "Sprites maiores, som mais rico e aventuras velozes elevaram o design 2D a novos patamares.",
        ),
        summary: L(
            "The 16-bit generation turned confidence into colour. The Mega Drive and the Super Nintendo pushed bigger sprites, layered backgrounds and sampled audio, while Mode 7 effects gave flat worlds a sense of depth.\n\nSonic the Hedgehog gave Sega speed and attitude; Super Mario World, Chrono Trigger and A Link to the Past gave Nintendo a reputation for polish and adventure. Arcades answered with Street Fighter II and a competitive scene that would eventually move into homes. It was an era of bold mascots, expensive cartridges and friendships tested by local multiplayer.",
            "A geração 16-bit transformou confiança em cor. O Mega Drive e o Super Nintendo ampliaram sprites, camadas de fundo e áudio sampleado, enquanto os efeitos Mode 7 deram profundidade a mundos planos.\n\nSonic the Hedgehog deu à Sega velocidade e atitude; Super Mario World, Chrono Trigger e A Link to the Past deram à Nintendo uma reputação de polimento e aventura. Os arcades responderam com Street Fighter II e uma cena competitiva que acabaria chegando às salas de estar. Foi uma era de mascotes ousados, cartuchos caros e amizades testadas no multiplayer local.",
        ),
        image: "/images/era-3.jpg",
    },
    {
        number: "04",
        year: "1994—97",
        name: L("32-BIT REVOLUTION", "REVOLUÇÃO 32-BIT"),
        tag: L("NEW DIMENSION", "NOVA DIMENSÃO"),
        text: L(
            "CD audio and polygonal worlds opened a new chapter for cinematic play and experimentation.",
            "Áudio em CD e mundos poligonais abriram um novo capítulo para a experimentação e o jogo cinematográfico.",
        ),
        summary: L(
            "CD-ROM changed the shape of a game. The PlayStation and Sega Saturn arrived in 1994–95 with polygonal graphics, full-motion video and room for licensed soundtracks, pushing consoles toward cinema, spectacle and adult themes.\n\nFinal Fantasy VII, Resident Evil, Tomb Raider and Metal Gear Solid showed that games could carry long stories, moody camera work and memorable voices. The 32-bit revolution was messy and experimental, but it permanently widened the idea of what a console game could be.",
            "O CD-ROM mudou a forma de um jogo. O PlayStation e o Sega Saturn chegaram em 1994–95 com gráficos poligonais, vídeos em full motion e espaço para trilhas licenciadas, aproximando os consoles do cinema, do espetáculo e de temas adultos.\n\nFinal Fantasy VII, Resident Evil, Tomb Raider e Metal Gear Solid mostraram que jogos podiam carregar histórias longas, câmeras atmosféricas e vozes memoráveis. A revolução 32-bit foi bagunçada e experimental, mas ampliou para sempre a ideia do que um jogo de console poderia ser.",
        ),
        image: "/images/era-4.webp",
    },
    {
        number: "05",
        year: "1996—99",
        name: L("THE 3D FRONTIER", "A FRONTEIRA 3D"),
        tag: L("THINK IN 3D", "PENSE EM 3D"),
        text: L(
            "Analog movement, vast spaces and new perspectives changed how players explored game worlds.",
            "Movimento analógico, espaços vastos e novas perspectivas mudaram a forma como os jogadores exploravam os mundos dos jogos.",
        ),
        summary: L(
            "The Nintendo 64 put an analog stick in players' hands and asked them to think in three dimensions. Super Mario 64 turned movement itself into a toy, while The Legend of Zelda: Ocarina of Time gave the new perspective a sense of scale and myth.\n\nGoldenEye 007 made split-screen shooters a social event, and Sega's Dreamcast arrived in 1998 with online play and arcade-perfect ports. Camera control, lock-on targeting and open spaces were still being invented in public — and that sense of discovery is what makes the era endure.",
            "O Nintendo 64 colocou um analógico nas mãos dos jogadores e pediu que eles pensassem em três dimensões. Super Mario 64 transformou o próprio movimento em brinquedo, enquanto The Legend of Zelda: Ocarina of Time deu à nova perspectiva escala e mitologia.\n\nGoldenEye 007 fez dos shooters em tela dividida um evento social, e o Dreamcast da Sega chegou em 1998 com jogo online e ports fiéis aos arcades. Controle de câmera, mira automática e espaços abertos ainda estavam sendo inventados em público — e é essa sensação de descoberta que faz a era durar.",
        ),
        image: "/images/era-5.jpg",
    },
    {
        number: "06",
        year: "2000—05",
        name: L("THE ONLINE AGE", "A ERA ONLINE"),
        tag: L("ALWAYS CONNECTED", "SEMPRE CONECTADO"),
        text: L(
            "Broadband, memory cards and online services turned consoles into shared worlds. LAN parties moved into living rooms, and a headset became part of the ritual.",
            "Banda larga, memory cards e serviços online transformaram os consoles em mundos compartilhados. As LAN parties chegaram às salas de estar, e o headset virou parte do ritual.",
        ),
        summary: L(
            "Consoles became connected. The PlayStation 2 launched in 2000 as a DVD player and a game machine; the GameCube and Xbox followed in 2001, and Xbox Live made voice chat, friends lists and online matches part of the console experience.\n\nGrand Theft Auto III opened up the city, Halo turned LAN parties into a console tradition, and broadband connections let games keep changing after launch. Memory cards, headsets and ethernet cables became part of the ritual, and the living room quietly became a network.",
            "Os consoles se conectaram. O PlayStation 2 chegou em 2000 como DVD player e videogame; GameCube e Xbox vieram em 2001, e o Xbox Live tornou chat de voz, listas de amigos e partidas online parte da experiência de console.\n\nGrand Theft Auto III abriu a cidade, Halo transformou as LAN parties em tradição dos consoles, e a banda larga permitiu que os jogos continuassem mudando após o lançamento. Memory cards, headsets e cabos de rede entraram no ritual, e a sala de estar virou uma rede sem fazer alarde.",
        ),
        image: "/images/era-6.jpeg",
    },
    {
        number: "07",
        year: "2006—09",
        name: L("HD & MOTION", "HD E MOVIMENTO"),
        tag: L("A NEW INPUT", "UM NOVO CONTROLE"),
        text: L(
            "High-definition screens sharpened every detail while motion controls invited new players to stand up and play together.",
            "Telas em alta definição aguçaram cada detalhe, enquanto os controles de movimento convidaram novos jogadores a se levantar e jogar juntos.",
        ),
        summary: L(
            "High definition sharpened everything. The Xbox 360 led the way in 2005, the PlayStation 3 and Wii followed in 2006, and the generation split into two ideas: cinematic power and motion-driven accessibility.\n\nAchievements, trophies and digital storefronts turned play into a persistent profile, while the Wii Remote and Nintendo DS brought new audiences into the hobby. Games looked cleaner than ever, but the biggest change was who was playing — and how many ways they could connect.",
            "A alta definição aguçou tudo. O Xbox 360 abriu o caminho em 2005, PlayStation 3 e Wii vieram em 2006, e a geração se dividiu entre duas ideias: potência cinematográfica e acessibilidade por movimento.\n\nConquistas, troféus e lojas digitais transformaram o ato de jogar em um perfil permanente, enquanto o Wii Remote e o Nintendo DS trouxeram novos públicos para o hobby. Os jogos ficaram mais nítidos do que nunca, mas a maior mudança foi quem estava jogando — e por quantos caminhos podia se conectar.",
        ),
        image: "/images/era-7.jpg",
    },
    {
        number: "08",
        year: "2010—14",
        name: L("THE SERVICE ERA", "A ERA DOS SERVIÇOS"),
        tag: L("PATCH & PLAY", "ATUALIZE E JOGUE"),
        text: L(
            "Digital storefronts, patches and online updates changed games from finished objects into worlds that kept evolving after launch.",
            "Lojas digitais, patches e atualizações online transformaram os jogos de objetos acabados em mundos que continuavam a evoluir após o lançamento.",
        ),
        summary: L(
            "The console became a service. Digital storefronts, patches, season passes and always-online features turned released games into evolving platforms, and the PlayStation 4 and Xbox One launched in 2013 into a market shaped by downloads and social sharing.\n\nFree-to-play experiments, streaming broadcasts and the share button made play visible to others. Games such as Destiny and GTA Online were designed to be lived in for years, while a new wave of independent titles reminded players that small ideas could still travel far.",
            "O console virou serviço. Lojas digitais, patches, season passes e recursos sempre online transformaram jogos lançados em plataformas em evolução, e PlayStation 4 e Xbox One chegaram em 2013 a um mercado moldado por downloads e compartilhamento social.\n\nExperimentos free-to-play, transmissões ao vivo e o botão de compartilhar tornaram o jogo visível para os outros. Títulos como Destiny e GTA Online foram desenhados para serem habitados por anos, enquanto uma nova onda de jogos independentes lembrou aos jogadores que ideias pequenas também podiam viajar longe.",
        ),
        image: "/images/era-8.jpg",
    },
    {
        number: "09",
        year: "2015—17",
        name: L("THE INDIE RENAISSANCE", "A RENASCENÇA INDIE"),
        tag: L("SMALL TEAMS, BIG IDEAS", "EQUIPES PEQUENAS, GRANDES IDEIAS"),
        text: L(
            "Smaller studios and accessible tools brought bold experiments back to the spotlight, proving that a great idea needs no giant budget.",
            "Estúdios menores e ferramentas acessíveis trouxeram experimentos ousados de volta aos holofotes, provando que uma grande ideia não precisa de um orçamento gigante.",
        ),
        summary: L(
            "Small teams stepped into the spotlight. Affordable engines, crowdfunding and digital distribution lowered the barrier to release, and games such as Undertale, Inside, Stardew Valley and Hollow Knight proved that a distinctive voice could compete with blockbuster budgets.\n\nThe Nintendo Switch arrived in 2017 with a hybrid design and The Legend of Zelda: Breath of the Wild, while PUBG helped define the battle royale format. Experimentation was no longer a side note; it was part of the main shelf.",
            "Equipes pequenas ganharam os holofotes. Engines acessíveis, financiamento coletivo e distribuição digital baixaram a barreira para lançar, e jogos como Undertale, Inside, Stardew Valley e Hollow Knight provaram que uma voz distinta podia competir com orçamentos de blockbuster.\n\nO Nintendo Switch chegou em 2017 com design híbrido e The Legend of Zelda: Breath of the Wild, enquanto PUBG ajudou a definir o formato battle royale. A experimentação deixou de ser nota de rodapé; virou parte da prateleira principal.",
        ),
        image: "/images/era-9.jpg",
    },
    {
        number: "10",
        year: "2018—20",
        name: L("THE LIVING GAME", "O JOGO VIVO"),
        tag: L("SHARED WORLDS", "MUNDOS COMPARTILHADOS"),
        text: L(
            "Battle royales, cross-play and live events made games social spaces that changed every season and welcomed players across platforms.",
            "Battle royales, cross-play e eventos ao vivo transformaram jogos em espaços sociais que mudavam a cada temporada e recebiam jogadores de todas as plataformas.",
        ),
        summary: L(
            "Games became places to stay. Battle royales, cross-play and seasonal events turned titles such as Fortnite and Apex Legends into shared social spaces, while live concerts, limited-time modes and creator tools made every week feel like an event.\n\nThe pandemic years gave Animal Crossing: New Horizons a particular poignancy, and cloud streaming began to move beyond the demo stage. The line between a game, a platform and a community grew thinner than ever.",
            "Os jogos viraram lugares para ficar. Battle royales, cross-play e eventos sazonais transformaram títulos como Fortnite e Apex Legends em espaços sociais compartilhados, enquanto shows ao vivo, modos temporários e ferramentas de criação fizeram cada semana parecer um evento.\n\nOs anos de pandemia deram a Animal Crossing: New Horizons um significado especial, e o streaming em nuvem começou a sair da fase de demonstração. A linha entre jogo, plataforma e comunidade ficou mais fina do que nunca.",
        ),
        image: "/images/era-10.webp",
    },
    {
        number: "11",
        year: "2021—NOW",
        name: L("THE NEW FRONTIER", "A NOVA FRONTEIRA"),
        tag: L("THE NEXT LEVEL", "O PRÓXIMO NÍVEL"),
        text: L(
            "Ray tracing, near-instant loading, cloud streaming and hybrid play closed the gap between console, PC and handheld. The archive keeps growing.",
            "Ray tracing, carregamento quase instantâneo, streaming em nuvem e o jogo híbrido encurtaram a distância entre console, PC e portátil. O arquivo continua crescendo.",
        ),
        summary: L(
            "The new generation traded load times for speed. The PlayStation 5 and Xbox Series X/S arrived in 2020 with fast SSDs, ray tracing and high frame-rate modes, while Game Pass and cloud streaming turned the library itself into a subscription.\n\nHandheld PCs such as the Steam Deck, the arrival of the Switch 2 and the return of classic franchises showed that portability and preservation matter as much as raw power. The archive keeps growing — and the next era is already being played.",
            "A nova geração trocou tempos de carregamento por velocidade. PlayStation 5 e Xbox Series X/S chegaram em 2020 com SSDs rápidos, ray tracing e modos de alta taxa de quadros, enquanto Game Pass e streaming em nuvem transformaram a própria biblioteca em assinatura.\n\nPCs portáteis como o Steam Deck, a chegada do Switch 2 e o retorno de franquias clássicas mostraram que portabilidade e preservação importam tanto quanto potência bruta. O arquivo continua crescendo — e a próxima era já está sendo jogada.",
        ),
        image: "/images/era-11.webp",
    },
];
