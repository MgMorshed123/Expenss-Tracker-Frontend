import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import VerifyOTPPage from "./pages/VerifyOTPPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Dashboard from "./Component/DashboardM/Dashboard.jsx";
import LoadingSpinner from "./Component/common/LoadingSpinner.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Show spinner for 2-3 seconds
    const timer = setTimeout(() => {
      if (token) {
        setIsAuthenticated(true);
        setCurrentPage("dashboard");
      } else {
        setCurrentPage("home");
      }
      setIsLoading(false); // stop spinner
    }, 10); // 2500ms = 2.5 seconds

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  const handleNavigation = (page) => {
    if (page === "dashboard" && !isAuthenticated) {
      setCurrentPage("login");
    } else {
      setCurrentPage(page);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setCurrentPage("home");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="w-full">
      {currentPage === "home" && (
        <HomePage
          onNavigate={handleNavigation}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
      )}
      {currentPage === "login" && (
        <LoginPage
          onNavigate={handleNavigation}
          onLogin={handleLogin}
          setUserEmail={setUserEmail}
        />
      )}
      {currentPage === "register" && (
        <RegisterPage
          onNavigate={handleNavigation}
          setUserEmail={setUserEmail}
        />
      )}
      {currentPage === "verify-otp" && (
        <VerifyOTPPage onNavigate={handleNavigation} email={userEmail} />
      )}
      {currentPage === "forgot-password" && (
        <ForgotPasswordPage
          onNavigate={handleNavigation}
          setUserEmail={setUserEmail}
        />
      )}
      {currentPage === "reset-password" && (
        <ResetPasswordPage onNavigate={handleNavigation} email={userEmail} />
      )}
      {currentPage === "contact" && (
        <ContactPage
          onNavigate={handleNavigation}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
      )}
      {currentPage === "dashboard" && (
        <Dashboard onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
    </div>
  );
}
