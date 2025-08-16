import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection.jsx";
import FooterSection from "./FooterSection.jsx";

export default function ContactSection() {
  return (
    <>
      <div className="py-24 bg-gradient-to-br from-green-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Have questions about ExpenseTracker? We're here to help you
                manage your finances better.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    desc: "support@expensetracker.com",
                    subDesc: "We’ll respond within 24 hours",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    desc: "+123566899",
                    subDesc: "Mon-Fri, 9AM-6PM EST",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    desc: "123 Finance Street,Dhaka",
                    subDesc: "By appointment only",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 glassmorphism rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-green-600 font-medium mb-1">
                        {contact.desc}
                      </p>
                      <p className="text-gray-600 text-sm">{contact.subDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="glassmorphism p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Send us a Message
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/50"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/50 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "Message submission is not implemented in this demo."
                      )
                    }
                    className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <FooterSection></FooterSection>
    </>
  );
}
