import React, { useContext, useState } from "react";
import "../styles/ForgotPassword.css";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { isAuthenticated } = useContext(Context);
  const [email, setEmail] = useState(true);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8822/api/v1/user/password/forgot",
        { email },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h3>Forgot Password</h3>
        <p>Enter your email address to receive a password reset token.</p>
        <form onSubmit={handleForgotPassword} className="forgot-password-form">
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ✅ correct
            required
            className="forgot-input"
          />

          <button type="submit" className="forgot-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
