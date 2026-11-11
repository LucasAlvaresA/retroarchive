"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { games } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

const aboutCover = (id: string) =>
    games.find((game) => game.id === id) ?? games[0];

export default function AboutSection() {
    const { t } = useLanguage();
    const covers = [
        aboutCover("super-mario-bros"),
        aboutCover("a-link-to-the-past"),
        aboutCover("sonic-the-hedgehog-2"),
    ];

    return (
        <section className="about-section section-shell" id="about">
            <div className="section-topline">
                <span>{t.about.topLeft}</span>
                <span>{t.about.topRight}</span>
            </div>
            <div className="about-layout">
                <div className="about-art" aria-label={t.about.artAria}>
                    <div className="about-art-grid" />
                    <span className="art-stamp">
                        {t.about.stampA}
                        <br />
                        {t.about.stampB}
                    </span>
                    <div className="about-sleeves">
                        {covers.map((game, index) => (
                            <div
                                className={`about-sleeve about-sleeve-${index + 1}`}
                                key={game.id}
                            >
                                {game.coverImage && (
                                    <Image
                                        src={game.coverImage}
                                        alt={`${game.title} ${t.about.coverAlt}`}
                                        fill
                                        sizes="(max-width: 760px) 40vw, 18vw"
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <span className="art-caption">{t.about.caption}</span>
                </div>
                <div className="about-copy">
                    <div className="eyebrow">
                        <span className="eyebrow-dot" /> {t.about.eyebrow}
                    </div>
                    <h2>
                        {t.about.titleA}
                        <br />
                        {t.about.titleB} <em>{t.about.titleAccent}</em>
                    </h2>
                    <p>{t.about.paragraphOne}</p>
                    <p>{t.about.paragraphTwo}</p>
                    <div className="about-signoff">
                        <Sparkles size={15} />
                        <span>{t.about.signoff}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
