// src/pages/Register.jsx
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/Auth.css";

const Register = () => {
  const { isAuthenticated, setUser } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 📌 Full list of country codes (you can add more)
  const countryCodes = [
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+91", country: "India" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+86", country: "China" },
    { code: "+971", country: "UAE" },
  ];

  const handleRegister = async (data) => {
    // Combine country code + phone number
    data.phone = `${data.countryCode}${data.phone}`;

    await axios
      .post("http://localhost:8822/api/v1/user/register", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate(`/otp-verification/${data.email}/${data.phone}`);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Registration failed");
      });
  };

  return (
    <div>
      <form
        className="auth-form"
        onSubmit={handleSubmit((data) => handleRegister(data))}
      >
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Name"
          required
          {...register("name")}
        />

        <input
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />

        {/* Country code + phone input */}
        <div className="phone-input">
          <select {...register("countryCode")} required>
            {countryCodes.map((c, index) => (
              <option key={index} value={c.code}>
                {c.country} ({c.code})
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Phone"
            required
            {...register("phone")}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </div>

        <div className="verification-method">
          <p>Select Verification Method</p>
          <div className="wrapper">
            <label>
              <input
                type="radio"
                name="verificationMethod"
                value="email"
                {...register("verificationMethod")}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="verificationMethod"
                value="phone"
                {...register("verificationMethod")}
              />
              Phone
            </label>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
