// src/pages/OtpVerification.jsx
import React, { useContext, useState, useRef, useEffect } from "react";
import "../styles/OtpVerification.css";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const OtpVerification = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const { email, phone } = useParams();
  const [otp, setOtp] = useState(["", "", "", "", "" , ""]);
  const inputRefs = useRef([]);

  // Auto-focus first input
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Handle typing in OTP boxes
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits or empty
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP verification
  const handleOtpVerification = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      toast.error("Please enter the complete 6-digit OTP");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8822/api/v1/user/otp-verification",
        { email, phone, otp: enteredOtp },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setUser(data.user);
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed");
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="otp-verification-page">
      <div className="otp-container">
        <h2>OTP Verification</h2>
        <p>Enter the 6-digit OTP sent to your registered email.</p>

        <form onSubmit={handleOtpVerification} className="otp-form">
          <div className="otp-inputs">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="otp-input"
              />
            ))}
          </div>
          <br />
          <br />

          <button type="submit" className="verify-button">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
