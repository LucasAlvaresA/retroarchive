"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { eras } from "@/data/eras";
import { useLanguage } from "@/lib/i18n";

export default function GamingTimeline() {
    const { lang, t } = useLanguage();

    return (
        <section
            className="timeline-section section-shell"
            id="eras"
            aria-label={t.timeline.aria}
        >
            <div className="section-topline">
                <span>{t.timeline.topLeft}</span>
                <span>{t.timeline.topRight}</span>
            </div>
            <div className="timeline-heading">
                <div>
                    <div className="eyebrow">
                        <span className="eyebrow-dot" /> {t.timeline.eyebrow}
                    </div>
                    <h2 className="section-title">
                        {t.timeline.titleA}
                        <br />
                        <em>{t.timeline.titleAccent}</em>
                    </h2>
                </div>
                <p className="section-intro">{t.timeline.intro}</p>
            </div>
            <div className="era-list">
                {eras.map((era, i) => (
                    <motion.article
                        className="era-row"
                        key={era.number}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: i * 0.03 }}
                    >
                        <div className="era-number">{era.number}</div>
                        {era.image ? (
                            <div className="era-image">
                                <img src={era.image} alt="" loading="lazy" />
                                <span>{era.tag[lang]}</span>
                            </div>
                        ) : (
                            <div
                                className="era-image era-image-graphic"
                                style={
                                    {
                                        "--era-accent": era.accent,
                                    } as CSSProperties
                                }
                            >
                                <div className="era-graphic-grid" />
                                <div className="era-graphic-year">
                                    {era.year}
                                </div>
                                <div className="era-graphic-mark">✳</div>
                                <span>{era.tag[lang]}</span>
                            </div>
                        )}
                        <div className="era-copy">
                            <span className="era-years">{era.year}</span>
                            <h3>{era.name[lang]}</h3>
                            <p>{era.text[lang]}</p>
                        </div>
                        <span className="era-arrow">
                            <ArrowUpRight size={19} />
                        </span>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
