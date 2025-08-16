import Navigation from "../Component/landing/Navigation";
import ResetPasswordForm from "../Component/auth/ResetPasswordForm";
import AnimatedSection from "../Component/landing/AnimatedSection";

export default function ResetPasswordPage({ onNavigate, email }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-50 flex flex-col">
      <Navigation onNavigate={onNavigate} />
      <div className="flex-1 flex items-center justify-center py-12">
        <AnimatedSection delay={200}>
          <ResetPasswordForm onNavigate={onNavigate} email={email} />
        </AnimatedSection>
      </div>
    </div>
  );
}
