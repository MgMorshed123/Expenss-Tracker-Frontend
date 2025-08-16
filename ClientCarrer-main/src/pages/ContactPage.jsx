import Navigation from "../Component/landing/Navigation";
import ContactSection from "../Component/landing/ContactSection.jsx";

export default function ContactPage({ onNavigate, isAuthenticated, onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation
        onNavigate={onNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
      />
      <ContactSection />
    </div>
  );
}
