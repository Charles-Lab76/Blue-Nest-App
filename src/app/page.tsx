
import CustomersSaid from "./components/CustomersSaid";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RectangleCard from "./components/RectangleCard";
import SectionHowItWorks from "./components/SectionHowItWorks";
import WelcomeSection from "./components/WelcomeSection";



export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] text-[#101010]">
      <h1 className="text-4xl font-bold text-[#1F299C]"></h1>
      <p className="mt-4 text-lg text-[#0466C8]">
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <RectangleCard />
        <SectionHowItWorks />
        <CustomersSaid />
        <Footer />
      
    
        
      </p>
    </main>
  
  );
}
