"use client";

import { Fragment } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { games } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

const heroCover = (id: string) =>
    games.find((game) => game.id === id) ?? games[0];

export default function HeroSection() {
    const { t } = useLanguage();
    const heroGames = [
        heroCover("mega-man"),
        heroCover("the-legend-of-zelda"),
        heroCover("super-mario-bros"),
    ];

    return (
        <>
            <section className="hero" id="home">
                <div className="hero-noise" />
                <div className="hero-grid" />
                <div className="hero-orb orb-a" />
                <div className="hero-orb orb-b" />
                <div className="hero-content">
                    <div className="hero-kicker">
                        <span className="live-dot" /> {t.hero.kicker}{" "}
                        <span className="kicker-rule" /> VOL. 001
                    </div>
                    <h1>
                        {t.hero.titleA}
                        <br />
                        {t.hero.titleB}
                        <span className="mobile-only-break" />{" "}
                        <span>{t.hero.titleAccent}</span>
                    </h1>
                    <div className="hero-bottom">
                        <p>{t.hero.description}</p>
                        <a href="#collection" className="primary-cta">
                            <span>{t.hero.cta}</span>
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
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
                                {game.coverImage && (
                                    <Image
                                        src={game.coverImage}
                                        alt={`${game.title} ${t.hero.coverAlt}`}
                                        fill
                                        sizes="(max-width: 760px) 25vw, 15vw"
                                        priority={index === 1}
                                        loading={index === 1 ? undefined : "eager"}
                                    />
                                )}
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
        </>
    );
}
