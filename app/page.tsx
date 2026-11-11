import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import GameCollection from "@/components/GameCollection";
import GamingTimeline from "@/components/GamingTimeline";
import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <main className="site-main">
            <Sidebar />
            <HeroSection />
            <GamingTimeline />
            <GameCollection />
            <AboutSection />
            <Footer />
        </main>
    );
}
