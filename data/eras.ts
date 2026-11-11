import type { Localized } from "./games";

export type Era = {
    number: string;
    year: string;
    name: Localized;
    tag: Localized;
    text: Localized;
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
        image: "/images/era-01.jpg",
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
        image: "/images/era-02.jpg",
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
        image: "/images/era-03.jpg",
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
        image: "/images/era-04.jpg",
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
        image: "/images/era-05.jpg",
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
        accent: "#7088ff",
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
        accent: "#9be36b",
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
        accent: "#ae98ff",
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
        accent: "#ff9a62",
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
        accent: "#4dd6c1",
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
        accent: "#7ad7ff",
    },
];
