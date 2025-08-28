import React, { useState } from "react";
import "../styles/QuoteForm.css"; // import styles

const QuoteForm = () => {
  const [balance, setBalance] = useState(70000);

  return (
    <div className="quote-container">
      {/* Left Side Image */}
      <div className="quote-left">
        <img
          src="https://certigence.co.uk/demo/assets/images/contact/contact-1-1.png" // ✅ working image
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
          Get The Free Ready Begin <br /> your Savings Money
        </h2>

        <form className="quote-form">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your Email *" required />
          <select required>
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

          <div className="slider-box">
            <label>Limits Of Balance:</label>
            <div className="slider-row">
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
              <span>${balance}</span>
            </div>
          </div>

          <button type="submit" className="quote-btn">
            Get a Quote →
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;