import React, { useState } from "react";
import "../styles/Home.css"; // Import CSS

const ExcellentService  = () => {
  const [activeTab, setActiveTab] = useState("support");

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <>
            <h3>Excellent service :</h3>
            <ul>
              <li>✔️ Our mission is to empower businesses worldwide.</li>
              <li>✔️ Deliver quality-driven solutions for every industry.</li>
              <li>✔️ Ensure long-term trust and relationships.</li>
            </ul>
          </>
        );
      case "vision":
        return (
          <>
            <h3>Excellent service :</h3>
            <ul>
              <li>✔️ Our vision is to be a global leader in technology.</li>
              <li>✔️ Build sustainable and scalable solutions.</li>
              <li>✔️ Drive innovation through teamwork.</li>
            </ul>
          </>
        );
      case "support":
        return (
          <>
            <h3>Excellent service :</h3>
            <ul>
              <li>✔️ Cross functional teams enable out of the box.</li>
              <li>✔️ We need to build it so that it scales ramp up.</li>
              <li>✔️ Streamline what’s the status on the deliverables.</li>
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
