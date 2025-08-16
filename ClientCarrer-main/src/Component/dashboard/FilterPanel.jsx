import { Filter, X } from "lucide-react";
import SelectInput from "../common/SelectInput.jsx";
import DateInput from "../common/DateInput.jsx";
import { CATEGORIES } from "../../constants/index.js";

export default function FilterPanel({ filters, onFiltersChange, onClear }) {
  return (
    <div className="bg-white/90 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Filter className="mr-2 text-green-600" />
          Filter Expenses
        </h3>
        <button
          onClick={onClear}
          className="flex items-center gap-1 text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-gray-800 text-sm px-3 py-1 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SelectInput
          label="Category"
          value={filters.category}
          onChange={(value) => onFiltersChange({ ...filters, category: value })}
          options={["", ...CATEGORIES]}
        />
        <DateInput
          label="From Date"
          value={filters.fromDate}
          onChange={(value) => onFiltersChange({ ...filters, fromDate: value })}
        />
        <DateInput
          label="To Date"
          value={filters.toDate}
          onChange={(value) => onFiltersChange({ ...filters, toDate: value })}
        />
      </div>
    </div>
  );
}
