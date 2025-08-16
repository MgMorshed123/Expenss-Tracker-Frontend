export default function SelectInput({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option || "All Categories"}
          </option>
        ))}
      </select>
    </div>
  );
}
