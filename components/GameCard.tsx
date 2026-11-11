"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { platformAccents, type Game } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

export default function GameCard({
    game,
    index,
    onSelect,
}: {
    game: Game;
    index: number;
    onSelect: (game: Game) => void;
}) {
    const { t } = useLanguage();
    const [imageFailed, setImageFailed] = useState(false);
    const showCover = Boolean(game.coverImage) && !imageFailed;

    return (
        <motion.button
            type="button"
            className="game-card"
            onClick={() => onSelect(game)}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: 0.48,
                delay: (index % 4) * 0.055,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -7 }}
            aria-label={`${t.card.viewDetails} ${game.title}`}
        >
            <div className="cover-wrap">
                <span className="cover-number">
                    {String(index + 1).padStart(2, "0")}
                </span>
                {showCover ? (
                    // Wikimedia-hosted cover art; the designed fallback keeps the layout intact if a file moves.
                    <img
                        src={game.coverImage}
                        alt={`${game.title} ${t.card.originalCover}`}
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
        </motion.button>
    );
}
