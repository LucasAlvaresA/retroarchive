"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { platformAccents, type GameSummary } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

export default function GameCard({
    game,
    index,
    onSelect,
}: {
    game: GameSummary;
    index: number;
    onSelect: (game: GameSummary) => void;
}) {
    const { t } = useLanguage();
    const [imageFailed, setImageFailed] = useState(false);
    const showCover = Boolean(game.coverImage) && !imageFailed;

    return (
        <button
            type="button"
            className="game-card"
            onClick={() => onSelect(game)}
            aria-label={`${t.card.viewDetails} ${game.title}`}
        >
            <div className="cover-wrap">
                <span className="cover-number">
                    {String(index + 1).padStart(2, "0")}
                </span>
                {showCover && game.coverImage ? (
                    <Image
                        src={game.coverImage}
                        alt={`${game.title} ${t.card.originalCover}`}
                        fill
                        sizes="(max-width: 760px) 45vw, (max-width: 1180px) 27vw, 20vw"
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <div
                        className="cover-fallback"
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
                <span className="cover-open">
                    <ArrowUpRight size={17} />
                </span>
            </div>
            <div className="game-meta">
                <div>
                    <span className="game-year">{game.releaseYear}</span>
                    <span className="game-platform">{game.platform}</span>
                </div>
                <h3>{game.title}</h3>
            </div>
        </button>
    );
}
