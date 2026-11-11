import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
    title: "RETROARCHIVE — The Golden Age of Gaming",
    description:
        "A living archive of the games, consoles and unforgettable adventures that shaped generations.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
