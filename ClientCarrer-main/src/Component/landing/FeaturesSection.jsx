import {
  Shield,
  Zap,
  Users,
  Calendar,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Everything you need to manage your finances effectively and make
              informed decisions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Secure & Private",
              desc: "Bank-level encryption keeps your data safe.",
              color: "from-green-400 to-green-600",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Instant sync across all your devices.",
              color: "from-yellow-400 to-yellow-600",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              desc: "Share budgets with family members.",
              color: "from-indigo-400 to-indigo-600",
            },
            {
              icon: Calendar,
              title: "Smart Categorization",
              desc: "AI-powered expense categorization.",
              color: "from-teal-400 to-teal-600",
            },
            {
              icon: CreditCard,
              title: "Multiple Accounts",
              desc: "Track all your accounts in one place.",
              color: "from-red-400 to-red-600",
            },
            {
              icon: TrendingUp,
              title: "Predictive Analytics",
              desc: "Forecast your spending patterns.",
              color: "from-blue-400 to-blue-600",
            },
          ].map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group glassmorphism p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
