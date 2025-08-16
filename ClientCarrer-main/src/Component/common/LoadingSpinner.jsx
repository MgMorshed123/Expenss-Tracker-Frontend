import { DollarSign, TrendingUp, PieChart } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center z-50">
      <div className="text-center relative w-64 h-64">
        {" "}
        {/* Container size */}
        {/* Animated Circles */}
        <div className="absolute inset-0 border-8 border-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-8 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 border-8 border-purple-400 rounded-full animate-ping opacity-20"></div>
        {/* Icons and Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <DollarSign
              className="w-10 h-10 text-blue-600 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <TrendingUp
              className="w-10 h-10 text-purple-600 animate-bounce"
              style={{ animationDelay: "200ms" }}
            />
            <PieChart
              className="w-10 h-10 text-blue-600 animate-bounce"
              style={{ animationDelay: "400ms" }}
            />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ExpenseTracker
          </h2>
        </div>
      </div>
    </div>
  );
}
