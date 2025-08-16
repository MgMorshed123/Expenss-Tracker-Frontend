import { DollarSign } from "lucide-react";

export default function EmptyState({ hasExpenses }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-12 text-center">
      <div className="text-gray-400 mb-4">
        <DollarSign className="w-16 h-16 mx-auto mb-4 opacity-50" />
      </div>
      <h3 className="text-xl font-semibold text-gray-600 mb-2">
        No expenses found
      </h3>
      <p className="text-gray-500">
        {hasExpenses
          ? "Try adjusting your filters to see more expenses."
          : "Start by adding your first expense above!"}
      </p>
    </div>
  );
}
