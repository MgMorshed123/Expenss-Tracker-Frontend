import { useState } from "react";
import { Edit3, Trash2 } from "lucide-react";
import { CATEGORY_COLORS } from "../../constants/index.js";

export default function ExpenseCard({ expense, onEdit, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete "${expense.title}"?`))
      return;
    setDeleting(true);
    try {
      await onDelete(expense._id);
    } catch (error) {
      alert(error.message || "Failed to delete expense");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className="bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5 border-l-4 backdrop-blur-sm"
      style={{ borderLeftColor: CATEGORY_COLORS[expense.category] }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-lg">
            {expense.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {new Date(expense.date).toLocaleDateString()}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-800">
            ${expense.amount.toFixed(2)}
          </p>
          <span
            className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: CATEGORY_COLORS[expense.category] }}
          >
            {expense.category}
          </span>
        </div>
      </div>
      <div className="flex gap-2 pt-3 border-t border-gray-100">
        <button
          onClick={() => onEdit(expense)}
          className="group bg-gradient-to-r from-green-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium text-lg hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
        >
          <Edit3 className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="group bg-gradient-to-r from-green-600 to-red-400 text-white px-8 py-3 rounded-xl font-medium text-lg hover:from-green-300 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
        >
          <Trash2 className="w-4 h-4" />
          {deleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
