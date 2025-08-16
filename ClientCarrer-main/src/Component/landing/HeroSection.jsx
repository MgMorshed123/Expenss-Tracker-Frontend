import {
  DollarSign,
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  Target,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-indigo-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <AnimatedSection delay={200}>
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-indigo-600 rounded-xl mb-8 animate-bounce">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                Smart Money
              </span>
              <br />
              Management
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take control of your finances with our intuitive expense tracking
              system. Visualize spending, set budgets, and achieve your
              financial goals effortlessly.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate("register")}
              className="group bg-gradient-to-r from-green-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium text-lg hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="group glassmorphism text-gray-800 px-8 py-3 rounded-xl font-medium text-lg border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <BarChart3 className="mr-2 w-5 h-5 group-hover:text-green-600 transition-colors" />
              View Demo
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Track Expenses",
                desc: "Monitor your spending in real-time with ease.",
              },
              {
                icon: PieChart,
                title: "Visual Analytics",
                desc: "Gain insights with stunning, interactive charts.",
              },
              {
                icon: Target,
                title: "Set Goals",
                desc: "Plan and achieve your financial milestones.",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="glassmorphism p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <feature.icon className="w-10 h-10 text-green-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
