import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaPaperPlane } from "react-icons/fa";
import "../styles/ContactForm.css"; // CSS file we will create

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8822/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        toast.error(`❌ ${data.message}`);
      }
    } catch (err) {
      toast.error("❌ Server not responding. Check backend.");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">📩 Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="input-group">
          <FaPhone className="icon" />
          <input
            name="mobile"
            type="text"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your Mobile"
            required
          />
        </div>

        <div className="input-group">
          <FaEdit className="icon" />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>

        <div className="input-group textarea">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <FaPaperPlane className="btn-icon" /> Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
