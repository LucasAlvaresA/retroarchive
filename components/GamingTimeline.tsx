"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { eras, type Era } from "@/data/eras";
import { useLanguage } from "@/lib/i18n";
import EraDetailsModal from "./EraDetailsModal";

export default function GamingTimeline() {
    const { lang, t } = useLanguage();
    const [selectedEra, setSelectedEra] = useState<Era | null>(null);

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
                {eras.map((era) => (
                    <button
                        type="button"
                        className="era-row era-row-button"
                        key={era.number}
                        onClick={() => setSelectedEra(era)}
                        aria-haspopup="dialog"
                        aria-label={`${t.timeline.viewDetails} ${era.name[lang]}`}
                    >
                        <span className="era-number">{era.number}</span>
                        {era.image ? (
                            <div className="era-image">
                                <Image
                                    src={era.image}
                                    alt=""
                                    fill
                                    sizes="(max-width: 760px) 28vw, (max-width: 1180px) 30vw, 25vw"
                                    loading="lazy"
                                />
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
                    </button>
                ))}
            </div>
            <EraDetailsModal
                era={selectedEra}
                onClose={() => setSelectedEra(null)}
            />
        </section>
    );
}
