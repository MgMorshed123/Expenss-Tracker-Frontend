import { useState, useEffect } from "react";
import { PlusCircle, Tag, DollarSign, Calendar } from "lucide-react";
import TextInput from "../common/TextInput";
import NumberInput from "../common/NumberInput";
import DateInput from "../common/DateInput";
import SelectInput from "../common/SelectInput";
import { CATEGORIES } from "../../constants/index";

export default function ExpenseForm({ expense, onSubmit, onCancel }) {
  // console.log("expense", expense);

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  const [formData, setFormData] = useState({
    title: expense?.title || "",
    amount: expense?.amount || "",
    category: expense?.category || "Food",
    date: expense?.date
      ? formatDateForInput(expense.date)
      : formatDateForInput(new Date()),
  });

  if (expense) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 600);
  }

  // ✅ Update formData whenever `expense` changes
  useEffect(() => {
    if (expense) {
      setFormData({
        title: expense?.title || "",
        amount: expense?.amount || "",
        category: expense?.category || "Food",
        date: expense?.date
          ? formatDateForInput(expense.date)
          : formatDateForInput(new Date()),
      });
    }
  }, [expense]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title || formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters long";
    }
    if (
      !formData.amount ||
      isNaN(formData.amount) ||
      parseFloat(formData.amount) <= 0
    ) {
      newErrors.amount = "Amount must be a number greater than 0";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      await onSubmit({ ...formData, amount: parseFloat(formData.amount) });

      // Reset form after successful submit
      setFormData({
        title: "",
        amount: "",
        category: "Food",
        date: new Date().toISOString().split("T")[0], // default to today
      });
      setErrors({}); // clear errors
    } catch (error) {
      alert(error.message || "Failed to submit expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-6 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <PlusCircle className="mr-2 text-green-600" />
        {expense ? "Edit Expense" : "Add New Expense"}
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Title"
            value={formData?.title}
            onChange={(value) => setFormData({ ...formData, title: value })}
            error={errors.title}
            placeholder="e.g., Grocery shopping"
            icon={Tag}
          />
          <NumberInput
            label="Amount"
            value={formData?.amount}
            onChange={(value) => setFormData({ ...formData, amount: value })}
            error={errors.amount}
            placeholder="0.00"
            icon={DollarSign}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput
            label="Category"
            value={formData?.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
            options={CATEGORIES}
          />
          <DateInput
            label="Date"
            value={formData?.date}
            onChange={(value) => setFormData({ ...formData, date: value })}
            error={errors.date}
            icon={Calendar}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-green-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium text-lg hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 max-w-xs"
          >
            {loading
              ? "Processing..."
              : expense
              ? "Update Expense"
              : "Add Expense"}
          </button>
          {onCancel && (
            <button
              onClick={onCancel}
              className="flex-1 sm:flex-none px-6 py-3 border border-gray-100 text-gray-600 bg-gray-50 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
