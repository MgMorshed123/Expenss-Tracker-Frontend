import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation({
  onNavigate,
  isAuthenticated,
  onLogout,
  currentPage,
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 glassmorphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>

            <span className="text-xl font-semibold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
              ExpenseTracker
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate("home")}
              className={`font-medium transition-colors text-sm ${
                currentPage === "home"
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className={`font-medium transition-colors text-sm ${
                currentPage === "contact"
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Contact
            </button>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => onNavigate("dashboard")}
                  className="bg-gradient-to-r from-green-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:from-green-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-md"
                >
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-green-600 font-medium text-sm transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate("login")}
                  className="text-gray-600 hover:text-green-600 font-medium text-sm transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onNavigate("register")}
                  className="bg-gradient-to-r from-green-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:from-green-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-md"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
