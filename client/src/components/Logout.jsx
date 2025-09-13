import React, { useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.get("http://localhost:8822/api/v1/user/logout", {
          withCredentials: true,
        });

        toast.success("Logged out successfully");
        setIsAuthenticated(false);
        setUser(null);
        navigate("/login");
      } catch (err) {
        toast.error(err.response?.data?.message || "Logout failed");
      }
    };

    handleLogout();
  }, [navigate, setIsAuthenticated, setUser]);

  return <p>Logging out...</p>;
};

export default Logout;
