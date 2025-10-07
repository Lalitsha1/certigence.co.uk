import React from "react";
import "../styles/servicespage-css/iso13485.css";
import CountrySelector from "../components/CountrySelector";

import {
  FaCheckCircle,
  FaIndustry,
  FaUsers,
  FaClipboardList,
  FaRegLightbulb,
  FaLeaf,
  FaShieldAlt,
  FaGlobe,
  FaCogs,
} from "react-icons/fa";

const Iso13485 = () => {
  return (
    <div className="iso13485-container">
      {/* Hero Section */}
      <header className="iso13485-hero">
        <div className="hero-content">
          <h1 className="hero-title">ISO 13485 Certification</h1>
          <p className="hero-subtitle">
            International Standard for Quality Management Systems in Medical Devices
          </p>
        </div>
        <div className="hero-bg-effect"></div>
      </header>
      <section className="iso13485-intro">
        <h2>What is ISO 13485?</h2>
        <div className="content-grid">
          <div>
            <p className="intext">
              ISO 13485 is the globally recognized standard for Quality Management Systems (QMS)
              specifically designed for the medical device industry. It ensures that organizations
              consistently meet customer and regulatory requirements, while maintaining the
              highest level of safety and effectiveness of medical devices.
            </p>
            <p className="intext">
              This standard is widely adopted across the world and is a mandatory
              requirement in many regions for companies manufacturing or supplying
              medical devices and related services. ISO 13485 provides a strong
              framework for risk management, process control, and regulatory compliance.
            </p>
          </div>
          <img
            src="https://thafd.bing.com/th/id/OIG2.KRGXQSBdALlc6aurhbS6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
            alt="ISO 13485 Overview"
            className="content-image"
          />
        </div>
      </section>

      <section className="iso13485-grid">
        <h2>Key Benefits of ISO 13485</h2>
        <div className="grid">
          <div className="grid-item">
            <FaCheckCircle className="grid-icon" />
            <h3>Regulatory Compliance</h3>
            <p>
              Helps organizations meet international and local regulatory requirements,
              making market access easier and more reliable.
            </p>
          </div>
          <div className="grid-item">
            <FaUsers className="grid-icon" />
            <h3>Customer Confidence</h3>
            <p>
              Builds trust with customers and stakeholders by demonstrating commitment
              to safety and quality in medical devices.
            </p>
          </div>
          <div className="grid-item">
            <FaIndustry className="grid-icon" />
            <h3>Process Efficiency</h3>
            <p>
              Encourages streamlined processes, waste reduction, and improved efficiency
              in manufacturing and quality assurance activities.
            </p>
          </div>
          <div className="grid-item">
            <FaShieldAlt className="grid-icon" />
            <h3>Risk Management</h3>
            <p>
              ISO 13485 emphasizes identifying, analyzing, and mitigating risks throughout
              the product lifecycle, improving patient safety.
            </p>
          </div>
          <div className="grid-item">
            <FaClipboardList className="grid-icon" />
            <h3>Consistent Quality</h3>
            <p>
              Ensures uniform standards across design, development, production,
              installation, and servicing of medical devices.
            </p>
          </div>
          <div className="grid-item">
            <FaRegLightbulb className="grid-icon" />
            <h3>Innovation Support</h3>
            <p>
              Provides a structured framework for introducing new products while
              maintaining compliance and safety.
            </p>
          </div>
          <div className="grid-item">
            <FaLeaf className="grid-icon" />
            <h3>Sustainability</h3>
            <p>
              Encourages environmentally conscious practices in the medical device
              manufacturing sector.
            </p>
          </div>
          <div className="grid-item">
            <FaCogs className="grid-icon" />
            <h3>Operational Excellence</h3>
            <p>
              Improves production reliability and reduces recalls, reworks, or
              customer complaints.
            </p>
          </div>
          <div className="grid-item">
            <FaGlobe className="grid-icon" />
            <h3>Global Recognition</h3>
            <p>
              Accepted worldwide, ISO 13485 helps organizations expand into
              international markets with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Combined Implementation & Requirements Section */}
      <section className="iso13485-combined">
        <div className="combined-grid">
          <div className="implementation-section">
            <h2>Implementation Steps</h2>
            <ol>
              <li>Conduct a gap analysis to compare existing processes with ISO 13485 requirements.</li>
              <li>Train employees on QMS concepts and medical device regulations.</li>
              <li>Develop policies, objectives, and documentation aligned with ISO 13485.</li>
              <li>Implement risk management and process controls across product lifecycle.</li>
              <li>Monitor, measure, and improve processes with internal audits.</li>
              <li>Undergo certification audit with an accredited body.</li>
            </ol>
          </div>
          <div className="requirements-section">
            <h2>ISO 13485 Requirements</h2>
            <ul>
              <li>Quality management system documentation and records control.</li>
              <li>Management responsibility, including customer focus and quality policies.</li>
              <li>Resource management: human resources, infrastructure, and work environment.</li>
              <li>Product realization: planning, design, development, and production.</li>
              <li>Measurement, analysis, and improvement mechanisms.</li>
              <li>Risk management and validation of processes.</li>
              <li>Regulatory compliance and post-market surveillance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="iso13485-cta">
        <h2>Get Certified in ISO 13485</h2>
        <p>
          By achieving ISO 13485 certification, your organization demonstrates its commitment
          to quality, compliance, and patient safety in the medical device industry.
          Partner with us to simplify your certification journey and gain access to global markets.
        </p>
        <button className="cta-button"><a href="/contact">Start Certification </a> </button>
      </section>
      <CountrySelector
        serviceName="ISO 13485"
      />
    </div>
    

  );
};

export default Iso13485;