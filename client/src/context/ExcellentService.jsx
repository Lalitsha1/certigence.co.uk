import React, { useState } from "react";
import "../styles/Home.css"; // Import CSS

const ExcellentService = () => {
  const [activeTab, setActiveTab] = useState("support");

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <>
            <h3>Excellent service :</h3>
            <ul>
              <li>✔️ Deliver credible, accredited, and globally recognised certification services that build trust, ensure compliance, and open doors to international business opportunities.</li>
              <li>✔️ Maintain impartiality and transparency in every certification we provide.</li>
              <li>✔️ Uphold excellence as a standard across all our services.</li>
            </ul>
          </>
        );
      case "vision":
        return (
          <>
            <h3>Excellent service :</h3>
            <ul>
              <li>✔️ To be recognised as a leading global certification agency that builds confidence in international trade.</li>
              <li>✔️ To provide trusted ISO certification services across diverse industries.</li>
              <li>✔️ To make certification simple, accessible, and respected by businesses and stakeholders worldwide.</li>
            </ul>
          </>
        );
      case "support":
        return (
          <>
            <h3>Excellent service :</h3>
            <ul>
              <li>✔️ Trusted Certification Partner – Upholding integrity, impartiality, and transparency while delivering professional, value-driven audits.</li>
              <li>✔️ Global Recognition – Providing accredited certifications aligned with international standards across industries and regions.</li>
              <li>✔️ Client-Centered Approach – Empowering businesses with reliable support, credibility, and long-term success throughout their certification journey.</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="excellent-service">
      <div className="container">
        {/* ✅ Tabs */}
        <div className="tab-buttons">
          <button
            onClick={() => setActiveTab("mission")}
            className={activeTab === "mission" ? "active" : ""}
          >
            OUR MISSION
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={activeTab === "vision" ? "active" : ""}
          >
            OUR VISION
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={activeTab === "support" ? "active" : ""}
          >
            OUR SUPPORT
          </button>
        </div>

        {/* ✅ Content */}
        <div className="excellent-service__inner">
          <div className="icon-box">
            {/* Family Icon */}
            <img
              src="https://img.icons8.com/fluency/96/family.png"
              alt="family"
            />
          </div>
          <div className="content-box">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};



export default ExcellentService;
