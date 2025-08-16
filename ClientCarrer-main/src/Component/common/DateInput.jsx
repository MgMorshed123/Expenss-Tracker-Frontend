import { useState } from "react";

export default function DateInput({
  label,
  value,
  onChange,
  error,
  icon: Icon,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
              error
                ? "text-red-500"
                : focused
                ? "text-green-600"
                : "text-gray-600"
            }`}
          />
        )}
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
            error ? "border-red-500" : "border-gray-100"
          } bg-white/90 text-gray-800 focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
