"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { CSSProperties } from "react";
import type { Era } from "@/data/eras";
import { useLanguage } from "@/lib/i18n";

export default function EraDetailsModal({
    era,
    onClose,
}: {
    era: Era | null;
    onClose: () => void;
}) {
    const { lang, t } = useLanguage();

    useEffect(() => {
        if (!era) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [era, onClose]);

    const paragraphs = era ? era.summary[lang].split("\n\n") : [];

    return (
        <>
            {era && (
                <div
                    className="modal-backdrop"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) onClose();
                    }}
                >
                    <section
                        className="game-modal era-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="era-modal-title"
                    >
                        <button
                            className="modal-close"
                            onClick={onClose}
                            aria-label={t.timeline.modalClose}
                        >
                            <X size={20} />
                        </button>
                        <div className="modal-art era-modal-art">
                            {era.image ? (
                                <Image
                                    src={era.image}
                                    alt={`${era.name[lang]} ${t.timeline.coverAlt}`}
                                    fill
                                    sizes="(max-width: 760px) 90vw, 42vw"
                                    loading="eager"
                                />
                            ) : (
                                <div
                                    className="era-modal-fallback"
                                    style={
                                        {
                                            "--era-accent":
                                                era.accent ?? "#ae98ff",
                                        } as CSSProperties
                                    }
                                >
                                    <span className="era-modal-fallback-year">
                                        {era.year}
                                    </span>
                                    <span className="era-modal-fallback-tag">
                                        {era.tag[lang]}
                                    </span>
                                </div>
                            )}
                            <span className="modal-art-caption">
                                {t.modal.archiveCaption} {era.number}
                            </span>
                        </div>
                        <div className="modal-content era-modal-content">
                            <div className="eyebrow">
                                <span className="eyebrow-dot" />{" "}
                                {t.timeline.modalEyebrow} · {era.year}
                            </div>
                            <h2 id="era-modal-title">{era.name[lang]}</h2>
                            <p className="era-modal-subtitle">{era.tag[lang]}</p>
                            <div className="era-modal-summary">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="modal-footnote">
                                {t.timeline.modalFootnote}{" "}
                                <ArrowUpRight size={13} />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
