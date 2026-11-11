import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const dmMono = DM_Mono({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500"],
    display: "swap",
    variable: "--font-dm-mono",
});

const dmSans = DM_Sans({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "RETROARCHIVE — The Golden Age of Gaming",
    description:
        "A living archive of the games, consoles and unforgettable adventures that shaped generations.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${dmMono.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}
        >
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
