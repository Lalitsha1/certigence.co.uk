import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8822/api/v1/user/login",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(res.data.message);
      setIsAuthenticated(true);
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(handleLogin)}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <span className="error">{errors.email.message}</span>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <span className="error">{errors.password.message}</span>}

      <p className="forgot-password">
        <Link to="/password/forgot">Forgot Password?</Link>
      </p>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
