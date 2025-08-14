// src/pages/Register.jsx
import React, { useContext, useEffect } from "react";
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

  const handleRegister = async (data) => {
    data.phone = `+91${data.phone}`;
    await axios
      .post("http://localhost:8822/api/v1/user/register", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        toast.success(res.data.message);
        navigate(`/otp-verification/${data.email}/${data.phone}`);
      }).catch((err) => {
        toast.error(err.response.data.message || "Registration failed");
      });


  }

  return <> 
  
  <div>
    <form  className="auth-form" onSubmit={handleSubmit((data)=> handleRegister(data))}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" required {...register("name")} />


      <input type="email" placeholder="Email" required {...register("email")} />

      <div>
        <span>+91</span>
        <input type="number" placeholder="Phone" required {...register("phone")} />

      </div>

      <div>
       
        <input type="password" placeholder="Password" required {...register("password")} />

      </div>

      <div className="verification-method">
        <p> Select Verification Method </p>
        <div className="wrapper ">
        <label><input  type="radio" name="verificationMethod" value={"email"} {...register("verificationMethod")}/>Email
        </label>
        <label><input  type="radio" name="verificationMethod" value={"Phone"} {...register("verificationMethod")}/>Phone
        </label>
        </div>
      </div>


      <button type="submit">Register</button>

    </form>
  </div>
  
    </>
}

export default Register;