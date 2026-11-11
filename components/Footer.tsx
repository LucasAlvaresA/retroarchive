"use client";

import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

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
                <a className="back-top" href="#home">
                    {t.footer.backTop} <ArrowUpRight size={15} />
                </a>
            </div>
            <div className="footer-bottom">
                <span>{t.footer.copyright}</span>
                <div>
                    <a href="#eras">{t.footer.timeline}</a>
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
