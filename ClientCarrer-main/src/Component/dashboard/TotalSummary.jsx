import { useState, useEffect } from "react";
import { BarChart3, Download } from "lucide-react";
import apiService from "../../services/api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function TotalSummary({
  expenses,
  onToggleChart,
  showChart,
  onNavigate,
}) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const [userPlan, setUserPlan] = useState("premium");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserPlan = async () => {
      try {
        const token = localStorage.getItem("token");
        const user = await apiService.getUser(token);
        setUserPlan(user.plan || "basic");
      } catch (err) {
        setError("Failed to fetch user plan");
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          onNavigate("/login");
        }
      }
    };
    fetchUserPlan();
  }, [onNavigate]);

  const handleExportPDF = () => {
    if (userPlan !== "premium") {
      alert(
        "PDF export is available only for Premium plan users. Please upgrade!"
      );
      onNavigate("/pricing");
      return;
    }

    // Filter expenses for the current month (August 2025)
    const currentDate = new Date("2025-08-15T00:00:00.000Z");
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const filteredExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getFullYear() === currentYear &&
        expenseDate.getMonth() === currentMonth
      );
    });

    // Generate PDF
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("Expense Report - August 2025", 14, 20);

    const tableData = filteredExpenses.map((expense) => [
      new Date(expense.date).toISOString().split("T")[0],
      expense.title,
      expense.category,
      `$${expense.amount.toFixed(2)}`,
    ]);

    autoTable(doc, {
      startY: 30,
      head: [["Date", "Title", "Category", "Amount"]],
      body: tableData,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 2 },
      headStyles: { fillColor: [22, 163, 74], textColor: [255, 255, 255] }, // green-600
      alternateRowStyles: { fillColor: [240, 253, 244] }, // green-50
    });

    const totalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(
      `Total: $${filteredExpenses
        .reduce((sum, exp) => sum + exp.amount, 0)
        .toFixed(2)}`,
      14,
      totalY
    );

    doc.save("Expense_Report_August_2025.pdf");
  };

  return (
    <div className="bg-green-600 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Expenses</h2>
          <p className="text-3xl md:text-4xl font-bold">${total.toFixed(2)}</p>
          <p className="text-green-50 mt-1">
            {expenses.length} expense{expenses.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            onClick={onToggleChart}
            className="bg-green-50 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4" />
            {showChart ? "Hide Chart" : "Show Chart"}
          </button>
          <button
            onClick={handleExportPDF}
            className="bg-green-50 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
}
