import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaPaperPlane, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company_name: "",
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
        setFormData({ name: "", email: "", mobile: "", company_name: "", message: "" });
      } else {
        toast.error(`❌ ${data.message}`);
      }
    } catch (err) {
      toast.error("❌ Server not responding. Check backend.");
    }
  };

  return (
    <div className="contact-page-container">
      <h2 className="page-title">
        <span className="title-text">Get in Touch</span>
        <span className="title-emoji">📩</span>
      </h2>
      
      <div className="contact-content-wrapper">
        {/* Contact Form Section */}
        <div className="form-section">
          <div className="form-container-3d">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group-3d">
                <FaUser className="icon-3d" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="input-group-3d">
                <FaEnvelope className="icon-3d" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="input-group-3d">
                <FaPhone className="icon-3d" />
                <input
                  name="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your Mobile"
                  required
                />
              </div>

              <div className="input-group-3d">
                <FaEdit className="icon-3d" />
                <input
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                />
              </div>

              <div className="input-group-3d textarea">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-3d">
                <FaPaperPlane className="btn-icon" /> 
                <span>Send Message</span>
                <div className="btn-shine"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Office Information Section */}
        <div className="office-info-section">
          <div className="office-card-3d">
            <h3 className="office-title">
              <FaGlobe className="globe-icon" />
              Our Global Offices
            </h3>
            
            <div className="office-item-3d">
              <h4><FaMapMarkerAlt className="office-icon" /> UK Office</h4>
              <p>42A Churchway, Haddenham, Bucks, HP17 9HE United Kingdom.</p>
              <p>Email: info@zeppycert.com</p>
            </div>
            
            <div className="office-item-3d">
              <h4><FaMapMarkerAlt className="office-icon" /> India Office</h4>
              <p>Plot No-26B, Uttam Nagar, New Delhi West Delhi 110059.</p>
              <p>Phone: +91 8383927648</p>
              <p>Email: info@zeppycert.com</p>
            </div>
            
            <div className="office-item-3d">
              <h4><FaMapMarkerAlt className="office-icon" /> Egypt Office</h4>
              <p>Intercert Egypt</p>
              <p>El-Saqalla Sherry St., In front of Seagull Hotel, Hurghada, Red Sea, Egypt</p>
            </div>
          </div>
          
          <div className="image-container-3d">
            <div className="floating-card">
              <h3>Global Certification Services</h3>
              <p>Your trusted partner for quality certifications worldwide</p>
              <div className="floating-icons">
                <div className="icon-orb"></div>
                <div className="icon-orb"></div>
                <div className="icon-orb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;