"use client";

import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    Gamepad2,
    Globe2,
    History,
    Home,
    LayoutGrid,
    Menu,
    Sparkles,
    X,
} from "lucide-react";
import { games, platformOrder } from "@/data/games";
import { useLanguage } from "@/lib/i18n";

export default function Sidebar() {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    const links = [
        { id: "home", href: "#home", label: t.sidebar.home, icon: Home, index: "01" },
        {
            id: "collection",
            href: "#collection",
            label: t.sidebar.collection,
            icon: LayoutGrid,
            index: "02",
        },
        {
            id: "eras",
            href: "#eras",
            label: t.sidebar.timeline,
            icon: History,
            index: "03",
        },
        { id: "about", href: "#about", label: t.sidebar.about, icon: Sparkles, index: "04" },
    ];

    useEffect(() => {
        const sections = ["home", "collection", "eras", "about"]
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        if (!sections.length) return;

        const updateActive = () => {
            const probe = window.scrollY + window.innerHeight * 0.34;
            const points = sections.map((section) => ({
                id: section.id,
                top: section.getBoundingClientRect().top + window.scrollY,
            }));
            let current = points[0].id;

            for (const point of points) {
                if (point.top <= probe) current = point.id;
            }

            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 12
            ) {
                current = points[points.length - 1].id;
            }

            setActive(current);
        };

        updateActive();
        window.addEventListener("scroll", updateActive, { passive: true });
        window.addEventListener("resize", updateActive);
        return () => {
            window.removeEventListener("scroll", updateActive);
            window.removeEventListener("resize", updateActive);
        };
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            <div className="mobile-topbar">
                <a
                    href="#home"
                    className="brand"
                    aria-label={`RetroArchive — ${t.sidebar.home}`}
                >
                    <span className="brand-mark">
                        <Gamepad2 size={18} strokeWidth={1.8} />
                    </span>
                    <span>
                        RETRO<span className="brand-light">ARCHIVE</span>
                    </span>
                </a>
                <button
                    className="sidebar-toggle"
                    aria-label={open ? t.sidebar.closeMenu : t.sidebar.openMenu}
                    aria-expanded={open}
                    onClick={() => setOpen((current) => !current)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <button
                    type="button"
                    className="sidebar-overlay"
                    aria-label={t.sidebar.closeOverlay}
                    onClick={close}
                />
            )}

            <aside
                className={`site-sidebar ${open ? "sidebar-open" : ""}`}
                aria-label={t.sidebar.nav}
            >
                <div className="sidebar-glow" aria-hidden="true" />
                <div className="sidebar-inner">
                    <a
                        href="#home"
                        className="brand sidebar-brand"
                        aria-label={`RetroArchive — ${t.sidebar.home}`}
                        onClick={close}
                    >
                        <span className="brand-mark">
                            <Gamepad2 size={20} strokeWidth={1.8} />
                        </span>
                        <span className="sidebar-brand-copy">
                            <span className="sidebar-brand-name">
                                RETRO<span className="brand-light">ARCHIVE</span>
                            </span>
                            <span className="sidebar-brand-sub">
                                {t.sidebar.museum}
                            </span>
                        </span>
                    </a>

                    <div className="sidebar-rule" aria-hidden="true">
                        <span />
                        <small>{t.sidebar.volume}</small>
                    </div>

                    <nav className="sidebar-nav">
                        <span className="sidebar-nav-label">{t.sidebar.nav}</span>
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={`sidebar-link ${
                                        active === link.id ? "is-active" : ""
                                    }`}
                                    aria-current={
                                        active === link.id ? "page" : undefined
                                    }
                                    onClick={close}
                                >
                                    <span className="sidebar-link-icon">
                                        <Icon size={17} strokeWidth={1.7} />
                                    </span>
                                    <span>{link.label}</span>
                                    <span className="sidebar-link-index">
                                        {link.index}
                                    </span>
                                </a>
                            );
                        })}
                    </nav>

                    <div className="sidebar-bottom">
                        <div className="sidebar-stat-card">
                            <div className="sidebar-stat-head">
                                <span>{t.sidebar.archive}</span>
                                <span>VOL. 001</span>
                            </div>
                            <div className="sidebar-stat-number">
                                {String(games.length).padStart(2, "0")}
                            </div>
                            <div className="sidebar-stat-meta">
                                <span>{t.sidebar.entries}</span>
                                <span>
                                    {platformOrder.length} {t.sidebar.platforms}
                                </span>
                            </div>
                        </div>

                        <div className="lang-block">
                            <div className="lang-head">
                                <Globe2 size={13} />
                                <span>{t.language.label}</span>
                            </div>
                            <div
                                className={`lang-switch ${
                                    lang === "pt" ? "is-pt" : ""
                                }`}
                                role="group"
                                aria-label={t.language.aria}
                            >
                                <span
                                    className="lang-thumb"
                                    aria-hidden="true"
                                />
                                <button
                                    type="button"
                                    className={lang === "en" ? "is-active" : ""}
                                    aria-pressed={lang === "en"}
                                    onClick={() => setLang("en")}
                                >
                                    {t.language.english}
                                </button>
                                <button
                                    type="button"
                                    className={lang === "pt" ? "is-active" : ""}
                                    aria-pressed={lang === "pt"}
                                    onClick={() => setLang("pt")}
                                >
                                    {t.language.portuguese}
                                </button>
                            </div>
                            <span className="lang-current">
                                {lang === "pt"
                                    ? "Português (Brasil)"
                                    : "English"}
                            </span>
                        </div>

                        <div className="sidebar-foot">
                            <span>{t.sidebar.scrollNote}</span>
                            <ArrowUpRight size={12} />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
