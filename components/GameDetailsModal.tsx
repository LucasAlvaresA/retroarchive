"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    CalendarDays,
    Disc3,
    Gamepad2,
    Layers3,
    X,
} from "lucide-react";
import type { CSSProperties } from "react";
import { platformAccents, type Game } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

export default function GameDetailsModal({
    game,
    onClose,
}: {
    game: Game | null;
    onClose: () => void;
}) {
    const { lang, t } = useLanguage();

    useEffect(() => {
        if (!game) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [game, onClose]);

    return (
        <AnimatePresence>
            {game && (
                <motion.div
                    className="modal-backdrop"
                    role="presentation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) onClose();
                    }}
                >
                    <motion.section
                        className="game-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        initial={{ opacity: 0, y: 28, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <button
                            className="modal-close"
                            onClick={onClose}
                            aria-label={t.modal.close}
                        >
                            <X size={20} />
                        </button>
                        <div className="modal-art">
                            {game.coverImage ? (
                                <img
                                    src={game.coverImage}
                                    alt={`${game.title} ${t.modal.coverAlt}`}
                                    onError={(event) => {
                                        event.currentTarget.style.display =
                                            "none";
                                    }}
                                />
                            ) : (
                                <div
                                    className="cover-fallback modal-art-fallback"
                                    style={
                                        {
                                            "--cover-accent":
                                                platformAccents[game.platform],
                                        } as CSSProperties
                                    }
                                >
                                    <span className="fallback-kicker">
                                        {t.card.originalRelease}
                                    </span>
                                    <strong>{game.title}</strong>
                                    <span className="fallback-platform">
                                        {game.platform} · {game.releaseYear}
                                    </span>
                                    <span className="fallback-pixel">✳</span>
                                </div>
                            )}
                            <span className="modal-art-caption">
                                {t.modal.archiveCaption}{" "}
                                {game.id.toUpperCase()}
                            </span>
                        </div>
                        <div className="modal-content">
                            <div className="eyebrow">
                                <span className="eyebrow-dot" />{" "}
                                {t.modal.entry} · {game.releaseYear}
                            </div>
                            <h2 id="modal-title">{game.title}</h2>
                            <p className="modal-description">
                                {game.description[lang]}
                            </p>
                            <div className="detail-grid">
                                <div>
                                    <CalendarDays />
                                    <span>{t.modal.originalRelease}</span>
                                    <strong>{game.releaseDate[lang]}</strong>
                                </div>
                                <div>
                                    <Gamepad2 />
                                    <span>{t.modal.platform}</span>
                                    <strong>{game.platform}</strong>
                                </div>
                                <div>
                                    <Disc3 />
                                    <span>{t.modal.genre}</span>
                                    <strong>{game.genre[lang]}</strong>
                                </div>
                                <div>
                                    <Layers3 />
                                    <span>{t.modal.publisher}</span>
                                    <strong>{game.publisher}</strong>
                                </div>
                                <div className="detail-wide">
                                    <span>{t.modal.developedBy}</span>
                                    <strong>{game.developer}</strong>
                                </div>
                            </div>
                            <div className="trivia-block">
                                <div className="trivia-heading">
                                    <span>{t.modal.fieldNotes}</span>
                                    <span>
                                        {String(
                                            game.trivia[lang].length,
                                        ).padStart(2, "0")}{" "}
                                        / {t.modal.facts}
                                    </span>
                                </div>
                                <ul>
                                    {game.trivia[lang].map((fact, i) => (
                                        <li key={i}>
                                            <span>0{i + 1}</span>
                                            {fact}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footnote">
                                {t.modal.preserved} <ArrowUpRight size={13} />
                            </div>
                        </div>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
