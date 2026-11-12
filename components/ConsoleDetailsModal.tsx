"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    CalendarDays,
    Cpu,
    Disc3,
    Gamepad2,
    X,
} from "lucide-react";
import type { CSSProperties } from "react";
import { games, platformAccents } from "@/data/games";
import type { ConsoleEntry } from "@/data/consoles";
import { useLanguage } from "@/lib/i18n";

export default function ConsoleDetailsModal({
    consoleEntry,
    onClose,
}: {
    consoleEntry: ConsoleEntry | null;
    onClose: () => void;
}) {
    const { lang, t } = useLanguage();
    const [imageFailed, setImageFailed] = useState(false);

    useEffect(() => {
        setImageFailed(false);
    }, [consoleEntry]);

    useEffect(() => {
        if (!consoleEntry) return;
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
    }, [consoleEntry, onClose]);

    const keyGames = consoleEntry
        ? games
              .filter((game) => game.platform === consoleEntry.platform)
              .slice(0, 4)
        : [];

    return (
        <>
            {consoleEntry && (
                <div
                    className="modal-backdrop"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) onClose();
                    }}
                >
                    <section
                        className="game-modal console-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="console-modal-title"
                    >
                        <button
                            className="modal-close"
                            onClick={onClose}
                            aria-label={t.consoles.modalClose}
                        >
                            <X size={20} />
                        </button>
                        <div
                            className="modal-art console-modal-art"
                            style={
                                {
                                    "--console-accent":
                                        platformAccents[
                                            consoleEntry.platform
                                        ],
                                } as CSSProperties
                            }
                        >
                            {consoleEntry.image && !imageFailed ? (
                                <Image
                                    src={consoleEntry.image}
                                    alt={`${consoleEntry.platform} ${t.consoles.coverAlt}`}
                                    fill
                                    sizes="(max-width: 760px) 90vw, 42vw"
                                    loading="eager"
                                    onError={() => setImageFailed(true)}
                                />
                            ) : (
                                <div className="console-modal-fallback">
                                    <span className="console-modal-fallback-year">
                                        {consoleEntry.releaseYear}
                                    </span>
                                    <span className="console-modal-fallback-company">
                                        {consoleEntry.company}
                                    </span>
                                    <strong>{consoleEntry.platform}</strong>
                                    <span className="console-modal-fallback-media">
                                        {consoleEntry.media[lang]}
                                    </span>
                                    <span className="console-modal-fallback-mark">
                                        ✳
                                    </span>
                                </div>
                            )}
                            <span className="modal-art-caption">
                                {t.modal.archiveCaption}{" "}
                                {consoleEntry.id.toUpperCase()}
                            </span>
                        </div>
                        <div className="modal-content console-modal-content">
                            <div className="eyebrow">
                                <span className="eyebrow-dot" />{" "}
                                {t.consoles.modalEyebrow} ·{" "}
                                {consoleEntry.releaseYear}
                            </div>
                            <h2 id="console-modal-title">
                                {consoleEntry.platform}
                            </h2>
                            <p className="console-modal-company">
                                {consoleEntry.company}
                            </p>
                            <p className="modal-description">
                                {consoleEntry.summary[lang]}
                            </p>
                            <div className="detail-grid">
                                <div>
                                    <CalendarDays />
                                    <span>{t.consoles.release}</span>
                                    <strong>{consoleEntry.releaseYear}</strong>
                                </div>
                                <div>
                                    <Gamepad2 />
                                    <span>{t.consoles.company}</span>
                                    <strong>{consoleEntry.company}</strong>
                                </div>
                                <div>
                                    <Cpu />
                                    <span>{t.consoles.generation}</span>
                                    <strong>{consoleEntry.generation[lang]}</strong>
                                </div>
                                <div>
                                    <Disc3 />
                                    <span>{t.consoles.media}</span>
                                    <strong>{consoleEntry.media[lang]}</strong>
                                </div>
                            </div>
                            <div className="console-games">
                                <div className="console-games-head">
                                    <span>{t.consoles.keyGames}</span>
                                    <span>
                                        {String(keyGames.length).padStart(
                                            2,
                                            "0",
                                        )}{" "}
                                        / {t.consoles.keyGamesCount}
                                    </span>
                                </div>
                                <ul>
                                    {keyGames.map((game, index) => (
                                        <li key={game.id}>
                                            <span>
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>
                                            <strong>{game.title}</strong>
                                            <em>{game.releaseYear}</em>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footnote">
                                {t.consoles.modalFootnote}{" "}
                                <ArrowUpRight size={13} />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
