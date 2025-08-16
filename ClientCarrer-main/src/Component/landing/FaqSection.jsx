import { HelpCircle, ChevronDown, ChevronUp, Mail } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I add an expense?",
      answer:
        "Go to the Dashboard, fill out the expense form with details like amount, category, and description, then click 'Add Expense'. Your expense will be automatically categorized and added to your monthly summary.",
    },
    {
      question: "Can I upgrade my plan?",
      answer:
        "Yes, visit the Pricing page to choose between Start or Premium plans. You can upgrade instantly and all new features will be available immediately. Downgrades take effect at the next billing cycle.",
    },
    {
      question: "What analytics are available?",
      answer:
        "Start and Premium plans offer comprehensive spending analytics including spending by category, monthly trends, budget tracking, expense forecasting, and custom reporting. Premium users also get advanced insights and export capabilities.",
    },
    {
      question: "How do I set up budget limits?",
      answer:
        "Navigate to Settings > Budget, set monthly limits for each category, and enable notifications. You'll receive alerts when you're approaching or exceeding your budget limits.",
    },
    {
      question: "Can I export my expense data?",
      answer:
        "Premium users can export data in CSV, PDF, or Excel formats. Go to Analytics > Export and choose your preferred format and date range. Free users can view data online but cannot export.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. We use bank-level encryption, secure cloud storage, and never store sensitive payment information. All data is encrypted both in transit and at rest, and we comply with industry security standards.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-green-500 to-indigo-500 p-3 rounded-full">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about using our expense tracker
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white/90"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-indigo-600 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-600 transform transition-transform duration-300" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-green-500 to-indigo-600 rounded-2xl p-8 text-center shadow-2xl">
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Still Need Help?
          </h3>
          <p className="text-white/90 mb-6 text-lg max-w-md mx-auto">
            Our support team is here to assist you with any questions or issues
            you might have.
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:support@expensetracker.com")
            }
            className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
}
