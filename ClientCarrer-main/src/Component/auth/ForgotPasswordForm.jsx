import { useState } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import apiService from "../../services/api.js";

export default function ForgotPasswordForm({ onNavigate, setUserEmail }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await apiService.forgotPassword({ email });
      setUserEmail(email);
      setSent(true);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to send reset instructions"
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Check Your Email
          </h2>
          <p className="text-gray-600">
            We've sent password reset instructions to {email}
          </p>
        </div>

        <button
          onClick={() => onNavigate("reset-password")}
          className="w-full group bg-gradient-to-r from-green-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium text-lg hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
        >
          Proceed to Reset Password
        </button>

        <p className="text-sm text-gray-600">
          Didn't receive the email? Check your spam folder or{" "}
          <button
            onClick={() => setSent(false)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            try again
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <button
          onClick={() => onNavigate("login")}
          className="absolute top-6 left-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Reset Password
        </h2>
        <p className="text-gray-600">
          Enter your email to receive reset instructions
        </p>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium text-lg hover:from-green-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center text-center"
        >
          {loading ? "Sending Instructions..." : "Send Reset Instructions"}
        </button>
      </form>
    </div>
  );
}
