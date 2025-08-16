import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const apiService = {
  async register({ email, password }) {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      email,
      password,
    });
    return response.data;
  },

  async verifyOTP({ email, otp }) {
    const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, {
      email,
      otp,
    });
    return response.data;
  },

  async login({ email, password }) {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  },

  async forgotPassword({ email }) {
    const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, {
      email,
    });
    return response.data;
  },

  async resetPassword({ email, otp, newPassword }) {
    const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, {
      email,
      otp,
      newPassword,
    });
    return response.data;
  },

  async getExpenses(token) {
    const response = await axios.get(`${API_BASE_URL}/expenses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async addExpense(expense, token) {
    const response = await axios.post(`${API_BASE_URL}/expenses`, expense, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async updateExpense(id, expense, token) {
    const response = await axios.patch(
      `${API_BASE_URL}/expenses/${id}`,
      expense,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  },

  async deleteExpense(id, token) {
    const response = await axios.delete(`${API_BASE_URL}/expenses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};

export default apiService;
