import { useState, useEffect } from "react";
import ExpenseForm from "../dashboard/ExpenseForm";
import ExpenseCard from "../dashboard/ExpenseCard.jsx";
import TotalSummary from "../dashboard/TotalSummary.jsx";
import ExpenseChart from "../dashboard/ExpenseChart.jsx";
import FilterPanel from "../dashboard/FilterPanel.jsx";
import EmptyState from "../common/EmptyState.jsx";
import Navigation from "../landing/Navigation.jsx";
import apiService from "../../services/api";

export default function Dashboard({ onNavigate, onLogout }) {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingExpense, setEditingExpense] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    fromDate: "",
    toDate: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const validateAndLoadExpenses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const data = await apiService.getExpenses(token);
        setExpenses(data);
        setError("");
      } catch (error) {
        if (
          error.response?.status === 401 ||
          error.message === "No token found"
        ) {
          localStorage.removeItem("token");
          onNavigate("login");
          setError("Session expired. Please log in again.");
        } else {
          setError(error.message || "Error loading expenses");
        }
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };

    validateAndLoadExpenses();
  }, [onNavigate]);

  const handleAddExpense = async (expenseData) => {
    try {
      const token = localStorage.getItem("token");
      const newExpense = await apiService.addExpense(expenseData, token);
      setExpenses((prev) => [newExpense, ...prev]);
      setError("");
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        onNavigate("login");
        setError("Session expired. Please log in again.");
      } else {
        throw new Error(error.message || "Failed to add expense");
      }
    }
  };

  const handleUpdateExpense = async (expenseData) => {
    try {
      const token = localStorage.getItem("token");
      const updatedExpense = await apiService.updateExpense(
        editingExpense._id,
        expenseData,
        token
      );
      setExpenses((prev) =>
        prev.map((exp) =>
          exp._id === editingExpense._id ? updatedExpense : exp
        )
      );
      setEditingExpense(null);
      setError("");
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        onNavigate("login");
        setError("Session expired. Please log in again.");
      } else {
        throw new Error(error.message || "Failed to update expense");
      }
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await apiService.deleteExpense(id, token);
      setExpenses((prev) => prev.filter((exp) => exp._id !== id));
      setError("");
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        onNavigate("login");
        setError("Session expired. Please log in again.");
      } else {
        throw new Error(error.message || "Failed to delete expense");
      }
    }
  };

  const handleClearFilters = () => {
    setFilters({ category: "", fromDate: "", toDate: "" });
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = filters.category
      ? expense.category === filters.category
      : true;
    const expenseDate = new Date(expense.date);
    const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
    const toDate = filters.toDate ? new Date(filters.toDate) : null;
    const matchesFromDate = fromDate ? expenseDate >= fromDate : true;
    const matchesToDate = toDate ? expenseDate <= toDate : true;
    return matchesCategory && matchesFromDate && matchesToDate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation
        onNavigate={onNavigate}
        isAuthenticated={true}
        onLogout={onLogout}
      />
      <div className="container mx-auto px-4 py-12">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <>
            <ExpenseForm
              expense={editingExpense}
              onSubmit={editingExpense ? handleUpdateExpense : handleAddExpense}
              onCancel={editingExpense ? () => setEditingExpense(null) : null}
            />
            <TotalSummary
              expenses={filteredExpenses}
              onToggleChart={() => setShowChart(!showChart)}
              showChart={showChart}
            />
            {showChart && <ExpenseChart expenses={filteredExpenses} />}
            <FilterPanel
              filters={filters}
              onFiltersChange={setFilters}
              onClear={handleClearFilters}
            />
            {filteredExpenses.length === 0 ? (
              <EmptyState hasExpenses={expenses.length > 0} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExpenses.map((expense) => (
                  <ExpenseCard
                    key={expense._id}
                    expense={expense}
                    onEdit={setEditingExpense}
                    onDelete={handleDeleteExpense}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
