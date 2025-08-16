import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { BarChart3 } from "lucide-react";
import { CATEGORIES, CATEGORY_COLORS } from "../../constants/index.js";

export default function ExpenseChart({ expenses }) {
  const chartData = CATEGORIES.map((category) => {
    const categoryExpenses = expenses.filter(
      (exp) => exp.category === category
    );
    const total = categoryExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    return {
      name: category,
      value: total,
      color: CATEGORY_COLORS[category],
    };
  }).filter((item) => item.value > 0);

  if (chartData.length === 0) return null;

  return (
    <div className="bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-8 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <BarChart3 className="mr-2 text-green-600" />
        Expenses by Category
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
