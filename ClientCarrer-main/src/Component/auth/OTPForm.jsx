import { useState } from "react";
import { Smartphone } from "lucide-react";
import apiService from "../../services/api.js";

export default function OTPForm({ onNavigate, email }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      await apiService.verifyOTP({ email, otp: otp.join("") });
      onNavigate("login");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    setError("");
    try {
      await apiService.register({ email }); // Resend OTP
      alert("OTP resent to your email");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl mb-4">
          <Smartphone className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600">We've sent a 6-digit code to {email}</p>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex justify-center space-x-2 mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading || otp.some((digit) => !digit)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none mb-6"
      >
        {loading ? "Verifying..." : "Verify Code"}
      </button>

      <div className="text-center space-y-2">
        <p className="text-gray-600">Didn't receive the code?</p>
        <button
          onClick={handleResend}
          disabled={loading}
          className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
        >
          Resend Code
        </button>
      </div>
    </div>
  );
}
