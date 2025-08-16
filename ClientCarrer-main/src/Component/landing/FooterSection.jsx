import { DollarSign, Twitter, Linkedin, Github, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";

export default function FooterSection({
  onNavigate,
  isAuthenticated,
  onLogout,
}) {
  return (
    <footer className="relative bg-gradient-to-br from-green-50 to-indigo-50 py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Branding Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-indigo-600 rounded-xl flex items-center justify-center animate-bounce">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                  ExpenseTracker
                </span>
              </div>
              <p className="text-gray-600 text-sm text-center md:text-left">
                Your trusted partner in smart money management. Track, analyze,
                and achieve your financial goals.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                {[
                  { name: "Home", page: "home" },
                  { name: "Contact", page: "contact" },
                  ...(isAuthenticated
                    ? [
                        { name: "Dashboard", page: "dashboard" },
                        { name: "Logout", action: onLogout },
                      ]
                    : [
                        { name: "Sign In", page: "login" },
                        { name: "Get Started", page: "register" },
                      ]),
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        link.action ? link.action() : onNavigate(link.page)
                      }
                      className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors duration-300 transform hover:scale-105"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Stay Updated
              </h3>
              <div className="glassmorphism p-6 rounded-xl shadow-md w-full max-w-sm">
                <p className="text-gray-600 text-sm mb-4">
                  Subscribe for the latest updates and tips.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/50"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "Newsletter signup is not implemented in this demo."
                      )
                    }
                    className="bg-gradient-to-r from-green-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Media and Copyright */}
        <AnimatedSection delay={400}>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[
                { icon: Twitter, href: "https://x.com", label: "Twitter" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                { icon: Github, href: "https://github.com", label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} ExpenseTracker. All rights
              reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
