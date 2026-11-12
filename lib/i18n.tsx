"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

export type Language = "en" | "pt";

const en = {
    language: {
        label: "LANGUAGE",
        english: "EN",
        portuguese: "PT-BR",
        aria: "Switch between English and Portuguese",
    },
    sidebar: {
        museum: "DIGITAL MUSEUM",
        nav: "MAIN NAVIGATION",
        home: "Home",
        collection: "Collection",
        consoles: "Consoles",
        timeline: "Timeline",
        about: "About",
        archive: "THE ARCHIVE",
        entries: "entries",
        platforms: "platforms",
        volume: "VOL. 001",
        scrollNote: "PRESERVING PLAY SINCE 1985",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        closeOverlay: "Close navigation",
        github: "GITHUB",
        githubAria: "Open Lucas Alvares' GitHub profile in a new tab",
    },
    hero: {
        kicker: "A DIGITAL MUSEUM OF PLAY",
        titleA: "THE GOLDEN",
        titleB: "AGE OF",
        titleAccent: "GAMING.",
        description:
            "Explore the games, consoles and unforgettable adventures that shaped generations.",
        cta: "EXPLORE THE COLLECTION",
        archiveLabel: "THE ARCHIVE / SELECTED WORKS",
        archiveNumber: "NO. 001—003",
        objects: "OBJECTS OF PLAY",
        years: "1985—NOW",
        scroll: "SCROLL TO EXPLORE",
        sideNote: "PIXELS FADE. LEGENDS DON'T.",
        themes: [
            "PRESS START",
            "PLAY FOREVER",
            "SAVE YOUR MEMORIES",
            "THE GOLDEN AGE",
        ],
        selectedAlt: "Selected classic game cover artwork",
        coverAlt: "original cover",
    },
    collection: {
        topLeft: "03 / THE COLLECTION",
        topRight: "CURATED CLASSICS · 1985—2025",
        eyebrow: "A CONSOLE-BY-CONSOLE INTRODUCTION",
        titleBefore: "4 GAMES TO",
        titleAccent: "DISCOVER EACH CONSOLE",
        intro: "A hand-picked set of four games offers a quick introduction to every console in the archive.",
        filterLabel: "FILTER BY PLATFORM",
        allGames: "All Games",
        filterAria: "Filter games by platform",
        loadMore: "LOAD MORE GAMES",
        end: "END OF CURRENT INDEX",
        more: "MORE LEGENDS TO BE PRESERVED",
    },
    card: {
        viewDetails: "View details for",
        originalRelease: "RETROARCHIVE / ORIGINAL",
        originalCover: "original cover artwork",
    },
    modal: {
        close: "Close game details",
        archiveCaption: "THE ARCHIVE /",
        entry: "ARCHIVE ENTRY",
        originalRelease: "Original release",
        platform: "Platform",
        genre: "Genre",
        publisher: "Publisher",
        developedBy: "DEVELOPED BY",
        fieldNotes: "FIELD NOTES",
        facts: "FACTS",
        preserved: "PRESERVED IN THE RETROARCHIVE COLLECTION",
        coverAlt: "cover artwork",
        loadingDetails: "Loading game details...",
        detailsUnavailable: "Game details could not be loaded. Please try again.",
    },
    timeline: {
        topLeft: "01 / A BRIEF HISTORY",
        topRight: "ELEVEN ERAS · ONE CULTURE",
        eyebrow: "A JOURNEY THROUGH TIME",
        titleA: "GAMING THROUGH",
        titleAccent: "THE YEARS.",
        intro: "Every generation had its own magic. These are the milestones.",
        aria: "Gaming history timeline",
        viewDetails: "View details for",
        modalClose: "Close era details",
        modalEyebrow: "ERA ENTRY",
        coverAlt: "era cover artwork",
        modalFootnote: "PRESERVED IN THE RETROARCHIVE TIMELINE",
    },
    consoles: {
        topLeft: "02 / THE HARDWARE",
        topRight: "TWENTY MACHINES · ONE OBSESSION",
        eyebrow: "THE MACHINES THAT MADE IT HAPPEN",
        titleBefore: "CONSOLES",
        titleAccent: "IN THE ARCHIVE",
        intro: "Every console that shaped the collection, from the 8-bit pioneers to the hybrid machines of today.",
        filterLabel: "FILTER BY GENERATION",
        allConsoles: "All Consoles",
        filterAria: "Filter consoles by generation",
        loadMore: "LOAD MORE CONSOLES",
        aria: "Console archive",
        viewDetails: "View console details for",
        company: "Maker",
        release: "Launch",
        generation: "Generation",
        media: "Media",
        keyGames: "KEY GAMES",
        keyGamesCount: "FEATURED TITLES",
        modalClose: "Close console details",
        modalEyebrow: "HARDWARE ENTRY",
        coverAlt: "console photo",
        modalFootnote: "PRESERVED IN THE RETROARCHIVE COLLECTION",
        end: "END OF THE HARDWARE INDEX",
        more: "MORE MACHINES TO BE PRESERVED",
    },
    about: {
        topLeft: "04 / WHY WE PLAY",
        topRight: "AN ARCHIVE OF FEELING",
        artAria: "A collage of classic game cover artwork",
        stampA: "A STUDY IN",
        stampB: "PLAY / 001",
        caption: "PRESS START TO REMEMBER · EST. 1985",
        eyebrow: "THE STORY CONTINUES",
        titleA: "MORE THAN GAMES.",
        titleB: "THEY ARE",
        titleAccent: "MEMORIES.",
        paragraphOne:
            "Before worlds were measured in terabytes, they were built from imagination. A cartridge clicked into place. A familiar theme filled the room. A new high score became a story worth telling.",
        paragraphTwo:
            "RetroArchive is a small tribute to the games that brought us together — and to the artists, designers and dreamers who made those worlds feel real.",
        signoff: "MADE FOR THE LOVE OF THE GAME",
        coverAlt: "cover artwork",
    },
    footer: {
        tagline:
            "A living library of the games, consoles and adventures that shaped generations.",
        backTop: "BACK TO TOP",
        copyright: "© 2026 RETROARCHIVE. AN INDEPENDENT FAN PROJECT.",
        collection: "COLLECTION",
        consoles: "CONSOLES",
        timeline: "TIMELINE",
        about: "ABOUT",
        built: "BUILT FOR THE LOVE OF PLAY",
        githubAria: "Open Lucas Alvares' GitHub profile in a new tab",
        disclaimer:
            "All game titles and trademarks belong to their respective owners. This is an independent, non-commercial showcase.",
    },
};

const pt: typeof en = {
    language: {
        label: "IDIOMA",
        english: "EN",
        portuguese: "PT-BR",
        aria: "Alternar entre inglês e português",
    },
    sidebar: {
        museum: "MUSEU DIGITAL",
        nav: "NAVEGAÇÃO PRINCIPAL",
        home: "Início",
        collection: "Coleção",
        consoles: "Consoles",
        timeline: "Linha do Tempo",
        about: "Sobre",
        archive: "O ARQUIVO",
        entries: "registros",
        platforms: "plataformas",
        volume: "VOL. 001",
        scrollNote: "PRESERVANDO O JOGO DESDE 1985",
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
        closeOverlay: "Fechar navegação",
        github: "GITHUB",
        githubAria: "Abrir o perfil de Lucas Alvares no GitHub em uma nova aba",
    },
    hero: {
        kicker: "UM MUSEU DIGITAL DO JOGO",
        titleA: "A ERA DE",
        titleB: "OURO DOS",
        titleAccent: "GAMES.",
        description:
            "Explore os jogos, consoles e aventuras inesquecíveis que moldaram gerações.",
        cta: "EXPLORAR A COLEÇÃO",
        archiveLabel: "O ARQUIVO / OBRAS SELECIONADAS",
        archiveNumber: "Nº 001—003",
        objects: "OBJETOS DE JOGO",
        years: "1985—HOJE",
        scroll: "ROLE PARA EXPLORAR",
        sideNote: "PIXELS DESAPARECEM. LENDAS NÃO.",
        themes: [
            "APERTE START",
            "JOGUE PARA SEMPRE",
            "SALVE SUAS MEMÓRIAS",
            "A ERA DE OURO",
        ],
        selectedAlt: "Seleção de capas clássicas de jogos",
        coverAlt: "capa original",
    },
    collection: {
        topLeft: "03 / A COLEÇÃO",
        topRight: "CLÁSSICOS CURADOS · 1985—2025",
        eyebrow: "UMA INTRODUÇÃO A CADA CONSOLE",
        titleBefore: "4 JOGOS PARA",
        titleAccent: "CONHECER CADA CONSOLE",
        intro: "Uma seleção de quatro jogos para conhecer os títulos que representam cada console do acervo.",
        filterLabel: "FILTRAR POR PLATAFORMA",
        allGames: "Todos os Jogos",
        filterAria: "Filtrar jogos por plataforma",
        loadMore: "CARREGAR MAIS JOGOS",
        end: "FIM DO ÍNDICE ATUAL",
        more: "MAIS LENDAS A PRESERVAR",
    },
    card: {
        viewDetails: "Ver detalhes de",
        originalRelease: "ARQUIVO / ORIGINAL",
        originalCover: "capa original",
    },
    modal: {
        close: "Fechar detalhes do jogo",
        archiveCaption: "O ARQUIVO /",
        entry: "REGISTRO DO ARQUIVO",
        originalRelease: "Lançamento original",
        platform: "Plataforma",
        genre: "Gênero",
        publisher: "Publicadora",
        developedBy: "DESENVOLVIDO POR",
        fieldNotes: "NOTAS DE CAMPO",
        facts: "FATOS",
        preserved: "PRESERVADO NA COLEÇÃO RETROARCHIVE",
        coverAlt: "capa do jogo",
        loadingDetails: "Carregando detalhes do jogo...",
        detailsUnavailable: "Não foi possível carregar os detalhes. Tente novamente.",
    },
    timeline: {
        topLeft: "01 / UMA BREVE HISTÓRIA",
        topRight: "ONZE ERAS · UMA CULTURA",
        eyebrow: "UMA JORNADA PELO TEMPO",
        titleA: "GAMES ATRAVÉS",
        titleAccent: "DOS ANOS.",
        intro: "Cada geração teve sua própria magia. Estes são os marcos.",
        aria: "Linha do tempo da história dos games",
        viewDetails: "Ver detalhes de",
        modalClose: "Fechar detalhes da era",
        modalEyebrow: "REGISTRO DE ERA",
        coverAlt: "imagem de capa da era",
        modalFootnote: "PRESERVADO NA LINHA DO TEMPO RETROARCHIVE",
    },
    consoles: {
        topLeft: "02 / O HARDWARE",
        topRight: "VINTE MÁQUINAS · UMA OBSESSÃO",
        eyebrow: "AS MÁQUINAS QUE FIZERAM TUDO ACONTECER",
        titleBefore: "CONSOLES",
        titleAccent: "NO ARQUIVO",
        intro: "Todos os consoles que moldaram a coleção, dos pioneiros 8-bit às máquinas híbridas de hoje.",
        filterLabel: "FILTRAR POR GERAÇÃO",
        allConsoles: "Todos os Consoles",
        filterAria: "Filtrar consoles por geração",
        loadMore: "CARREGAR MAIS CONSOLES",
        aria: "Arquivo de consoles",
        viewDetails: "Ver detalhes do console",
        company: "Fabricante",
        release: "Lançamento",
        generation: "Geração",
        media: "Mídia",
        keyGames: "JOGOS PRINCIPAIS",
        keyGamesCount: "TÍTULOS EM DESTAQUE",
        modalClose: "Fechar detalhes do console",
        modalEyebrow: "REGISTRO DE HARDWARE",
        coverAlt: "foto do console",
        modalFootnote: "PRESERVADO NA COLEÇÃO RETROARCHIVE",
        end: "FIM DO ÍNDICE DE HARDWARE",
        more: "MAIS MÁQUINAS A PRESERVAR",
    },
    about: {
        topLeft: "04 / POR QUE JOGAMOS",
        topRight: "UM ARQUIVO DE EMOÇÕES",
        artAria: "Uma colagem de capas clássicas de jogos",
        stampA: "UM ESTUDO SOBRE",
        stampB: "JOGAR / 001",
        caption: "APERTE START PARA LEMBRAR · DESDE 1985",
        eyebrow: "A HISTÓRIA CONTINUA",
        titleA: "MAIS QUE JOGOS.",
        titleB: "ELES SÃO",
        titleAccent: "MEMÓRIAS.",
        paragraphOne:
            "Antes de os mundos serem medidos em terabytes, eles eram construídos com imaginação. Um cartucho encaixava no lugar. Um tema familiar preenchia o ambiente. Um novo recorde se tornava uma história que valia a pena contar.",
        paragraphTwo:
            "O RetroArchive é uma pequena homenagem aos jogos que nos aproximaram — e aos artistas, designers e sonhadores que fizeram esses mundos parecerem reais.",
        signoff: "FEITO POR AMOR AO JOGO",
        coverAlt: "capa do jogo",
    },
    footer: {
        tagline:
            "Uma biblioteca viva dos jogos, consoles e aventuras que moldaram gerações.",
        backTop: "VOLTAR AO TOPO",
        copyright: "© 2026 RETROARCHIVE. UM PROJETO DE FÃ INDEPENDENTE.",
        collection: "COLEÇÃO",
        consoles: "CONSOLES",
        timeline: "LINHA DO TEMPO",
        about: "SOBRE",
        built: "FEITO POR AMOR AO JOGO",
        githubAria: "Abrir o perfil de Lucas Alvares no GitHub em uma nova aba",
        disclaimer:
            "Todos os títulos e marcas pertencem aos seus respectivos proprietários. Este é um projeto independente e não comercial.",
    },
};

export const dictionaries = { en, pt } as const;

type Dictionary = typeof en;

type LanguageContextValue = {
    lang: Language;
    setLang: (language: Language) => void;
    toggleLang: () => void;
    t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "retroarchive-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>("en");

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "pt") {
            setLangState(stored);
        }
    }, []);

    const setLang = useCallback((next: Language) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Storage can be unavailable in private mode; the toggle still works.
        }
    }, []);

    const toggleLang = useCallback(() => {
        setLangState((current) => {
            const next = current === "en" ? "pt" : "en";
            try {
                window.localStorage.setItem(STORAGE_KEY, next);
            } catch {
                // Ignore storage failures.
            }
            return next;
        });
    }, []);

    const value = useMemo<LanguageContextValue>(
        () => ({ lang, setLang, toggleLang, t: dictionaries[lang] }),
        [lang, setLang, toggleLang],
    );

    useEffect(() => {
        const root = document.documentElement;
        root.lang = lang === "pt" ? "pt-BR" : "en";
        document.title =
            lang === "pt"
                ? "RETROARCHIVE — A Era de Ouro dos Games"
                : "RETROARCHIVE — The Golden Age of Gaming";
    }, [lang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return context;
}
