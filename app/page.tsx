"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import GameCollection from "@/components/GameCollection";
import GamingTimeline from "@/components/GamingTimeline";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { games } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

const heroCover = (id: string) =>
    games.find((game) => game.id === id) ?? games[0];

export default function Home() {
    const { t } = useLanguage();
    const heroGames = [
        heroCover("mega-man"),
        heroCover("the-legend-of-zelda"),
        heroCover("super-mario-bros"),
    ];

    return (
        <main className="site-main">
            <Sidebar />
            <section className="hero" id="home">
                <div className="hero-noise" />
                <div className="hero-grid" />
                <div className="hero-orb orb-a" />
                <div className="hero-orb orb-b" />
                <div className="hero-content">
                    <motion.div
                        className="hero-kicker"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        <span className="live-dot" /> {t.hero.kicker}{" "}
                        <span className="kicker-rule" /> VOL. 001
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                    >
                        {t.hero.titleA}
                        <br />
                        {t.hero.titleB}
                        <span className="mobile-only-break" />{" "}
                        <span>{t.hero.titleAccent}</span>
                    </motion.h1>
                    <motion.div
                        className="hero-bottom"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                    >
                        <p>{t.hero.description}</p>
                        <a href="#collection" className="primary-cta">
                            <span>{t.hero.cta}</span>
                            <ArrowUpRight size={17} />
                        </a>
                    </motion.div>
                </div>
                <div className="hero-visual">
                    <div className="visual-label visual-label-top">
                        <span>{t.hero.archiveLabel}</span>
                        <span>{t.hero.archiveNumber}</span>
                    </div>
                    <div className="visual-scanlines" />
                    <div
                        className="sleeve-stage"
                        aria-label={t.hero.selectedAlt}
                    >
                        {heroGames.map((game, index) => (
                            <div
                                className={`hero-sleeve sleeve-${index + 1}`}
                                key={game.id}
                            >
                                <img
                                    src={game.coverImage}
                                    alt={`${game.title} ${t.hero.coverAlt}`}
                                />
                                <span>
                                    {game.releaseYear} / {game.platform}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="visual-label visual-label-bottom">
                        <span>{t.hero.objects}</span>
                        <span>{t.hero.years}</span>
                    </div>
                </div>
                <div className="hero-index">
                    <span>{t.hero.scroll}</span>
                    <ArrowDown size={14} />
                </div>
                <div className="hero-side-note">{t.hero.sideNote}</div>
            </section>
            <div className="ticker" aria-label={t.hero.kicker}>
                <div className="ticker-track">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i}>
                            {t.hero.themes.map((theme, index) => (
                                <Fragment key={theme}>
                                    {theme}
                                    {index < t.hero.themes.length - 1 && (
                                        <b>✳</b>
                                    )}{" "}
                                </Fragment>
                            ))}
                        </span>
                    ))}
                </div>
            </div>
            <GameCollection />
            <GamingTimeline />
            <AboutSection />
            <Footer />
        </main>
    );
}
