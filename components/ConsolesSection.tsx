"use client";

import { useMemo, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { consoles, type ConsoleEntry } from "@/data/consoles";
import { useLanguage } from "@/lib/i18n";
import ConsoleCard from "./ConsoleCard";
import ConsoleDetailsModal from "./ConsoleDetailsModal";

const PAGE_SIZE = 8;

export default function ConsolesSection() {
    const { lang, t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [selectedConsole, setSelectedConsole] =
        useState<ConsoleEntry | null>(null);

    const generationFilters = useMemo(() => {
        const labels = new Map<string, ConsoleEntry["generation"]>();

        for (const entry of consoles) {
            if (!labels.has(entry.generation.en)) {
                labels.set(entry.generation.en, entry.generation);
            }
        }

        return Array.from(labels, ([key, label]) => ({ key, label }));
    }, []);

    const filteredConsoles = useMemo(
        () =>
            activeFilter === "all"
                ? consoles
                : consoles.filter(
                      (entry) => entry.generation.en === activeFilter,
                  ),
        [activeFilter],
    );

    const visibleConsoles = useMemo(
        () =>
            activeFilter === "all"
                ? filteredConsoles.slice(0, visibleCount)
                : filteredConsoles,
        [activeFilter, filteredConsoles, visibleCount],
    );

    const hasMore =
        activeFilter === "all" && visibleCount < filteredConsoles.length;

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setVisibleCount(PAGE_SIZE);
    };

    return (
        <section
            className="consoles section-shell"
            id="consoles"
            aria-label={t.consoles.aria}
        >
            <div className="section-topline">
                <span>{t.consoles.topLeft}</span>
                <span>{t.consoles.topRight}</span>
            </div>
            <div className="section-heading-row">
                <div>
                    <div className="eyebrow">
                        <span className="eyebrow-dot" /> {t.consoles.eyebrow}
                    </div>
                    <h2 className="section-title">
                        {t.consoles.titleBefore}{" "}
                        <em>{t.consoles.titleAccent}</em>
                        <sup>
                            ({String(filteredConsoles.length).padStart(2, "0")})
                        </sup>
                    </h2>
                </div>
                <p className="section-intro">{t.consoles.intro}</p>
            </div>
            <div className="filter-row">
                <div className="filter-label">
                    <SlidersHorizontal size={14} /> {t.consoles.filterLabel}
                </div>
                <div
                    className="filter-list"
                    role="group"
                    aria-label={t.consoles.filterAria}
                >
                    <button
                        className={`filter-chip ${
                            activeFilter === "all" ? "active" : ""
                        }`}
                        onClick={() => handleFilterChange("all")}
                        aria-pressed={activeFilter === "all"}
                    >
                        {t.consoles.allConsoles}
                    </button>
                    {generationFilters.map(({ key, label }) => (
                        <button
                            key={key}
                            className={`filter-chip ${
                                activeFilter === key ? "active" : ""
                            }`}
                            onClick={() => handleFilterChange(key)}
                            aria-pressed={activeFilter === key}
                        >
                            {label[lang]}
                        </button>
                    ))}
                </div>
            </div>
            <div className="console-grid" id="console-grid">
                {visibleConsoles.map((consoleEntry, index) => (
                    <ConsoleCard
                        key={consoleEntry.id}
                        consoleEntry={consoleEntry}
                        index={index}
                        onSelect={setSelectedConsole}
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
                                    filteredConsoles.length,
                                ),
                            )
                        }
                        aria-controls="console-grid"
                    >
                        {t.consoles.loadMore}
                        <ChevronDown size={15} aria-hidden="true" />
                    </button>
                </div>
            )}
            <div className="collection-bottom">
                <span>{t.consoles.end}</span>
                <span>
                    {t.consoles.more} <span className="tiny-cross">✳</span>
                </span>
            </div>
            <ConsoleDetailsModal
                consoleEntry={selectedConsole}
                onClose={() => setSelectedConsole(null)}
            />
        </section>
    );
}
