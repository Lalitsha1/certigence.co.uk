import React from "react";
import "../styles/servicespage-css/iso50001.css";

import {
  FaBolt,
  FaLeaf,
  FaIndustry,
  FaUsers,
  FaCogs,
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const Iso50001 = () => {
  return (
    <div className="iso50001-container">
      {/* Hero Section */}
      <header className="iso50001-hero">
        <div className="hero-content">
          <h1 className="hero-title">ISO 50001 Certification</h1>
          <p className="hero-subtitle">
            International Standard for Energy Management Systems (EnMS)  
          </p>
        </div>
        <div className="hero-bg-effect"></div>
      </header>

      {/* Introduction */}
      <section className="iso50001-intro">
        <h2>What is ISO 50001?</h2>
        <p>
          ISO 50001 is the globally recognized standard for Energy Management Systems (EnMS).
          It provides organizations with a systematic framework to improve energy performance,
          increase efficiency, and reduce costs, while minimizing environmental impact.  
        </p>
        <p>
          Applicable to any organization regardless of size or sector, ISO 50001 focuses
          on a continuous improvement approach to managing energy consumption, ensuring
          sustainability, and meeting regulatory obligations.
        </p>
      </section>

      {/* Benefits in Grid */}
      <section className="iso50001-grid">
        <h2>Key Benefits of ISO 50001</h2>
        <div className="grid">
          <div className="grid-item">
            <FaBolt className="grid-icon" />
            <h3>Energy Efficiency</h3>
            <p>
              Reduces energy use through systematic monitoring, control, and
              optimization of energy-consuming activities.
            </p>
          </div>

          <div className="grid-item">
            <FaLeaf className="grid-icon" />
            <h3>Sustainability</h3>
            <p>
              Encourages eco-friendly practices by lowering greenhouse gas emissions
              and promoting responsible energy usage.
            </p>
          </div>

          <div className="grid-item">
            <FaIndustry className="grid-icon" />
            <h3>Operational Savings</h3>
            <p>
              Identifies opportunities to cut energy costs, reduce waste, and
              improve overall efficiency of operations.
            </p>
          </div>

          <div className="grid-item">
            <FaUsers className="grid-icon" />
            <h3>Employee Awareness</h3>
            <p>
              Builds energy-conscious culture across the workforce through training
              and awareness initiatives.
            </p>
          </div>

          <div className="grid-item">
            <FaCogs className="grid-icon" />
            <h3>Process Optimization</h3>
            <p>
              Enhances performance of machinery, facilities, and systems while
              reducing downtime and maintenance costs.
            </p>
          </div>

          <div className="grid-item">
            <FaGlobe className="grid-icon" />
            <h3>Global Recognition</h3>
            <p>
              Demonstrates international commitment to sustainable energy practices,
              improving reputation and competitiveness.
            </p>
          </div>

          <div className="grid-item">
            <FaShieldAlt className="grid-icon" />
            <h3>Regulatory Compliance</h3>
            <p>
              Aligns with local and international energy regulations, reducing risk
              of penalties and supporting climate policies.
            </p>
          </div>

          <div className="grid-item">
            <FaChartLine className="grid-icon" />
            <h3>Continuous Improvement</h3>
            <p>
              Drives ongoing enhancements in energy efficiency and long-term
              sustainability through data-driven insights.
            </p>
          </div>

          <div className="grid-item">
            <FaCheckCircle className="grid-icon" />
            <h3>Competitive Advantage</h3>
            <p>
              ISO 50001 certification builds trust with stakeholders, investors,
              and customers who value green initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="iso50001-implementation">
        <h2>Implementation Steps</h2>
        <ol>
          <li>Conduct an energy review and identify areas of improvement.</li>
          <li>Develop an energy baseline and set measurable objectives.</li>
          <li>Establish policies and documentation aligned with ISO 50001.</li>
          <li>Train employees to adopt energy-efficient practices.</li>
          <li>Implement energy-saving measures and monitor performance.</li>
          <li>Perform internal audits and management reviews.</li>
          <li>Undergo certification audit by an accredited body.</li>
        </ol>
      </section>

      {/* Requirements */}
      <section className="iso50001-requirements">
        <h2>ISO 50001 Requirements</h2>
        <ul>
          <li>Energy policy commitment from top management.</li>
          <li>Establishment of energy objectives, targets, and action plans.</li>
          <li>Compliance with legal and other energy-related requirements.</li>
          <li>Implementation of monitoring, measurement, and analysis.</li>
          <li>Employee engagement and competence development.</li>
          <li>Periodic evaluation of energy performance indicators.</li>
          <li>Continuous improvement cycle for energy efficiency.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="iso50001-cta">
        <h2>Get Certified in ISO 50001</h2>
        <p>
          Achieving ISO 50001 certification proves your organization’s commitment
          to energy efficiency, sustainability, and environmental responsibility.  
          Let us help you on your journey towards a greener, more sustainable future.
        </p>
        <button className="cta-button"><a href="/contact ">Start Certification</a> </button>
      </section>
    </div>
  );
};

export default Iso50001;
