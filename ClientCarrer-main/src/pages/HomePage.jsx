import HeroSection from "../Component/landing/HeroSection.jsx";
import FeaturesSection from "../Component/landing/FeaturesSection.jsx";
import Navigation from "../Component/landing/Navigation.jsx";
import FooterSection from "../Component/landing/FooterSection.jsx";
import PricingPage from "@/Component/landing/PricingSection.jsx";
import FAQPage from "@/Component/landing/FaqSection.jsx";

export default function HomePage({ onNavigate, isAuthenticated, onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-50">
      <Navigation
        onNavigate={onNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
        currentPage="home"
      />
      <HeroSection onNavigate={onNavigate} />

      <FeaturesSection />
      <PricingPage />
      <FAQPage />
      <FooterSection
        onNavigate={onNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
      />
    </div>
  );
}
