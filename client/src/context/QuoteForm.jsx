import React, { useState } from "react";
import axios from "axios";
import "../styles/QuoteForm.css";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    certification: "",
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await axios.post(
        "http://localhost:8822/api/v1/quote/new", // ✅ backend API
        formData,
        { withCredentials: true }
      );

      setMessage(res.data.message || "✅ Quote submitted successfully!");
      setFormData({ name: "", email: "", certification: "" }); // reset
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message ||
          "❌ Failed to submit. Please try again."
      );
    }
  };

  return (
    <div className="quote-container">
      {/* Left Side Image */}
      <div className="quote-left">
        <img
          src="https://thafd.bing.com/th/id/OIG2.CF6stnId_Bu.Q.pDA1F.?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
          alt="Business Woman"
          className="quote-image"
        />
      </div>

      {/* Right Side Form */}
      <div className="quote-right">
        <div className="video-box">
          <button className="video-btn">▶</button>
          <span>Watch Videos</span>
        </div>

        <h2 className="quote-heading">
          Unlock Global Recognition <br /> with ISO Certification
        </h2>

        <form className="quote-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="certification"
            value={formData.certification}
            onChange={handleChange}
            required
          >
            <option value="">Major ISO Certification *</option>
            <option value="QMS">ISO 9001 – Quality Management System (QMS)</option>
            <option value="EMS">ISO 14001 – Environmental Management System (EMS)</option>
            <option value="OHSMS">ISO 45001 – Occupational Health & Safety (OHSMS)</option>
            <option value="ISMS">ISO 27001 – Information Security Management System (ISMS)</option>
            <option value="FSMS">ISO 22000 – Food Safety Management System (FSMS)</option>
            <option value="ENMS">ISO 50001 – Energy Management System (EnMS)</option>
            <option value="13485">ISO 13485 – Medical Devices Quality Management</option>
            <option value="37001">ISO 37001 – Anti-Bribery Management System</option>
            <option value="22301">ISO 22301 – Business Continuity Management System</option>
            <option value="31000">ISO 31000 – Risk Management</option>
          </select>

          <button type="submit" className="quote-btn">
            Get a Quote →
          </button>
        </form>

        {/* ✅ Show response messages */}
        {message && <p className="form-message">{message}</p>}
      </div>
    </div>
  );
};

export default QuoteForm;
