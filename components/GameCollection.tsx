"use client";

import { useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { games, platformOrder, type Game, type Platform } from "@/data/games";
import { useLanguage } from "@/lib/i18n";
import GameCard from "./GameCard";
import GameDetailsModal from "./GameDetailsModal";

type Filter = "all" | Platform;

const PAGE_SIZE = 8;

export default function GameCollection() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<Filter>("all");
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const filters: Filter[] = useMemo(
        () => ["all", ...platformOrder],
        [],
    );

    const filteredGames = useMemo(
        () =>
            activeFilter === "all"
                ? games
                : games.filter((game) => game.platform === activeFilter),
        [activeFilter],
    );

    const visibleGames = useMemo(
        () =>
            activeFilter === "all"
                ? filteredGames.slice(0, visibleCount)
                : filteredGames,
        [activeFilter, filteredGames, visibleCount],
    );

    const hasMore =
        activeFilter === "all" && visibleCount < filteredGames.length;

    const handleFilterChange = (filter: Filter) => {
        setActiveFilter(filter);
        setVisibleCount(PAGE_SIZE);
    };

    return (
        <section className="collection section-shell" id="collection">
            <div className="section-topline">
                <span>{t.collection.topLeft}</span>
                <span>{t.collection.topRight}</span>
            </div>
            <div className="section-heading-row">
                <div>
                    <div className="eyebrow">
                        <span className="eyebrow-dot" /> {t.collection.eyebrow}
                    </div>
                    <h2 className="section-title">
                        {t.collection.titleBefore}{" "}
                        <em>{t.collection.titleAccent}</em>
                        <sup>
                            ({String(filteredGames.length).padStart(2, "0")})
                        </sup>
                    </h2>
                </div>
                <p className="section-intro">{t.collection.intro}</p>
            </div>
            <div className="filter-row">
                <div className="filter-label">
                    <SlidersHorizontal size={14} /> {t.collection.filterLabel}
                </div>
                <div
                    className="filter-list"
                    role="group"
                    aria-label={t.collection.filterAria}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-chip ${
                                activeFilter === filter ? "active" : ""
                            }`}
                            onClick={() => handleFilterChange(filter)}
                            aria-pressed={activeFilter === filter}
                        >
                            {filter === "all"
                                ? t.collection.allGames
                                : filter}
                        </button>
                    ))}
                </div>
            </div>
            <div className="game-grid" id="game-grid">
                {visibleGames.map((game, index) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        index={index}
                        onSelect={setSelectedGame}
                    />
                ))}
            </div>
            {hasMore && (
                <div className="load-more-wrap">
                    <button
                        type="button"
                        className="load-more-button"
                        onClick={() =>
                            setVisibleCount((count) =>
                                Math.min(
                                    count + PAGE_SIZE,
                                    filteredGames.length,
                                ),
                            )
                        }
                        aria-controls="game-grid"
                    >
                        {t.collection.loadMore}
                        <ChevronDown size={15} aria-hidden="true" />
                    </button>
                </div>
            )}
            <div className="collection-bottom">
                <span>{t.collection.end}</span>
                <span>
                    {t.collection.more}{" "}
                    <span className="tiny-cross">✳</span>
                </span>
            </div>
            <GameDetailsModal
                game={selectedGame}
                onClose={() => setSelectedGame(null)}
            />
        </section>
    );
}
