import { CheckCircle, Star, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PricingPage() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for personal budgeting with essential features.",
      features: [
        "Up to 10 expenses/month",
        "5 predefined categories",
        "Basic expense tracking",
        false,
        false,
      ],
      cta: "Get Started",
      planQuery: "basic",
    },
    {
      name: "Start",
      price: "$5/month",
      description: "Ideal for freelancers and small businesses.",
      features: [
        "Unlimited expenses",
        "Custom categories",
        "Basic analytics",
        false,
        false,
      ],
      cta: "Choose Plan",
      planQuery: "start",
      popular: true,
    },
    {
      name: "Premium",
      price: "$15/month",
      description: "Advanced features for power users and teams.",
      features: [
        "Unlimited expenses",
        "Custom categories",
        "Advanced analytics",
        "Email reports",
        "Priority support",
      ],
      cta: "Choose Plan",
      planQuery: "premium",
    },
  ];

  const features = [
    "Expenses per month",
    "Categories",
    "Analytics",
    "Email reports",
    "Support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Choose the Perfect Plan for You
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're tracking personal expenses or managing a business,
            our plans offer the tools you need to stay in control.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 backdrop-blur-sm ${
                plan.popular
                  ? "border-2 border-green-600"
                  : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                {plan.price}
              </p>
              <button
                onClick={() => navigate(`/signup?plan=${plan.planQuery}`)}
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium text-lg hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {plan.cta}
              </button>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    {feature === false ? (
                      <XCircle className="w-5 h-5 mr-2 text-red-500" />
                    ) : (
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    )}
                    {typeof feature === "string" ? feature : features[index]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white/90 rounded-xl shadow-sm p-6 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-3 text-gray-600 font-medium">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`p-3 text-gray-800 font-semibold ${
                        plan.popular ? "text-green-600" : ""
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature} className="border-t border-gray-100">
                    <td className="p-3 text-gray-600">{feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="p-3">
                        {plan.features[index] === false ? (
                          <XCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
