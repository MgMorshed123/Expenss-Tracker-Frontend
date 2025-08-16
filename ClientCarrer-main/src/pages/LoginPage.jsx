import Navigation from "../Component/landing/Navigation";
import LoginForm from "../Component/auth/LoginForm";
import AnimatedSection from "../Component/landing/AnimatedSection";

export default function LoginPage({ onNavigate, onLogin, setUserEmail }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-50 flex flex-col">
      <Navigation onNavigate={onNavigate} />
      <div className="flex-1 flex items-center justify-center py-12">
        <AnimatedSection delay={200}>
          <LoginForm
            onNavigate={onNavigate}
            onLogin={onLogin}
            setUserEmail={setUserEmail}
          />
        </AnimatedSection>
      </div>
    </div>
  );
}
