"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { platformAccents } from "@/data/games";
import type { ConsoleEntry } from "@/data/consoles";
import { useLanguage } from "@/lib/i18n";

export default function ConsoleCard({
    consoleEntry,
    index,
    onSelect,
}: {
    consoleEntry: ConsoleEntry;
    index: number;
    onSelect: (consoleEntry: ConsoleEntry) => void;
}) {
    const { lang, t } = useLanguage();
    const [imageFailed, setImageFailed] = useState(false);
    const showImage = Boolean(consoleEntry.image) && !imageFailed;

    return (
        <button
            type="button"
            className="console-card"
            onClick={() => onSelect(consoleEntry)}
            aria-label={`${t.consoles.viewDetails} ${consoleEntry.platform}`}
            aria-haspopup="dialog"
        >
            <div
                className="console-photo"
                style={
                    {
                        "--console-accent":
                            platformAccents[consoleEntry.platform],
                    } as CSSProperties
                }
            >
                {showImage && consoleEntry.image ? (
                    <Image
                        src={consoleEntry.image}
                        alt={`${consoleEntry.platform} ${t.consoles.coverAlt}`}
                        fill
                        sizes="(max-width: 760px) 45vw, (max-width: 1180px) 27vw, 20vw"
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <div className="console-fallback">
                        <span className="console-fallback-index">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="console-fallback-copy">
                            <span>{consoleEntry.company}</span>
                            <strong>{consoleEntry.platform}</strong>
                            <small>{consoleEntry.generation[lang]}</small>
                        </div>
                        <span className="console-fallback-mark">✳</span>
                    </div>
                )}
                <span className="console-year">
                    {consoleEntry.releaseYear}
                </span>
                <span className="console-open">
                    <ArrowUpRight size={17} />
                </span>
            </div>
            <div className="console-meta">
                <div>
                    <span className="console-company">
                        {consoleEntry.company}
                    </span>
                    <span className="console-generation">
                        {consoleEntry.generation[lang]}
                    </span>
                </div>
                <h3>{consoleEntry.platform}</h3>
            </div>
        </button>
    );
}
