"use client";

import { ArrowUpRight, Gamepad2, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const GITHUB_URL = "https://github.com/LucasAlvaresA";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="site-footer">
            <div className="footer-main">
                <a href="#home" className="brand footer-brand">
                    <span className="brand-mark">
                        <Gamepad2 size={19} />
                    </span>
                    <span>
                        RETRO<span className="brand-light">ARCHIVE</span>
                    </span>
                </a>
                <p>{t.footer.tagline}</p>
                <div className="footer-actions">
                    <a
                        className="footer-github"
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.footer.githubAria}
                    >
                        <Github size={15} strokeWidth={1.7} />
                        <span>@LucasAlvaresA</span>
                        <ArrowUpRight size={12} />
                    </a>
                    <a className="back-top" href="#home">
                        {t.footer.backTop} <ArrowUpRight size={15} />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <span>{t.footer.copyright}</span>
                <div>
                    <a href="#eras">{t.footer.timeline}</a>
                    <a href="#consoles">{t.footer.consoles}</a>
                    <a href="#collection">{t.footer.collection}</a>
                    <a href="#about">{t.footer.about}</a>
                </div>
                <span>
                    {t.footer.built} <span className="tiny-cross">✳</span>
                </span>
            </div>
            <p className="disclaimer">{t.footer.disclaimer}</p>
        </footer>
    );
}
