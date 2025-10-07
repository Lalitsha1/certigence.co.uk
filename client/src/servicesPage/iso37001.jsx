import React from "react";
import "../styles/servicespage-css/iso37001.css";
import CountrySelector from "../components/CountrySelector";

import {
  FaShieldAlt,
  FaUsers,
  FaBalanceScale,
  FaRegHandshake,
  FaGlobe,
  FaCheckCircle,
  FaClipboardList,
  FaRegLightbulb,
  FaCogs,
} from "react-icons/fa";

const Iso37001 = () => {
  return (
    <div className="iso37001-container">
      {/* Hero Section */}
      <header className="iso37001-hero">
        <div className="hero-content">
          <h1 className="hero-title">ISO 37001 Certification</h1>
          <p className="hero-subtitle">
            International Standard for Anti-Bribery Management Systems (ABMS)
          </p>
        </div>
        <div className="hero-bg-effect"></div>
      </header>

      {/* Introduction */}
      <section className="iso37001-intro">
        <h2>What is ISO 37001?</h2>
        <p>
          ISO 37001 is the globally recognized standard for Anti-Bribery
          Management Systems (ABMS). It helps organizations establish, implement,
          maintain, and improve an anti-bribery program by adopting a culture of
          integrity, transparency, and compliance.
        </p>
        <p>
          This standard provides organizations with tools to prevent, detect, and
          respond to bribery risks effectively, ensuring accountability across
          all levels of business activities.
        </p>
      </section>

      {/* Benefits in Grid */}
      <section className="iso37001-grid">
        <h2>Key Benefits of ISO 37001</h2>
        <div className="grid">
          <div className="grid-item">
            <FaShieldAlt className="grid-icon" />
            <h3>Risk Prevention</h3>
            <p>
              Protects organizations against bribery and corruption risks, ensuring
              secure and ethical operations.
            </p>
          </div>

          <div className="grid-item">
            <FaUsers className="grid-icon" />
            <h3>Stakeholder Trust</h3>
            <p>
              Builds credibility with customers, partners, regulators, and
              investors by showing strong ethical practices.
            </p>
          </div>

          <div className="grid-item">
            <FaBalanceScale className="grid-icon" />
            <h3>Legal Compliance</h3>
            <p>
              Assists in complying with international anti-bribery laws such as
              the UK Bribery Act and the US FCPA.
            </p>
          </div>

          <div className="grid-item">
            <FaRegHandshake className="grid-icon" />
            <h3>Business Integrity</h3>
            <p>
              Promotes a culture of transparency and fair business conduct across
              the organization.
            </p>
          </div>

          <div className="grid-item">
            <FaClipboardList className="grid-icon" />
            <h3>Systematic Approach</h3>
            <p>
              Provides structured anti-bribery policies, procedures, and
              compliance programs.
            </p>
          </div>

          <div className="grid-item">
            <FaRegLightbulb className="grid-icon" />
            <h3>Awareness & Training</h3>
            <p>
              Enhances employee awareness and ensures regular training on ethical
              business practices.
            </p>
          </div>

          <div className="grid-item">
            <FaCheckCircle className="grid-icon" />
            <h3>Improved Governance</h3>
            <p>
              Encourages stronger leadership commitment and effective
              accountability frameworks.
            </p>
          </div>

          <div className="grid-item">
            <FaCogs className="grid-icon" />
            <h3>Operational Excellence</h3>
            <p>
              Reduces bribery-related risks and improves efficiency in compliance
              management systems.
            </p>
          </div>

          <div className="grid-item">
            <FaGlobe className="grid-icon" />
            <h3>Global Recognition</h3>
            <p>
              Widely recognized, ISO 37001 helps organizations compete in
              international markets with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="iso37001-implementation">
        <h2>Implementation Steps</h2>
        <ol>
          <li>Conduct a bribery risk assessment across all business processes.</li>
          <li>Develop and implement anti-bribery policies and procedures.</li>
          <li>Assign responsibilities and leadership roles for compliance.</li>
          <li>Provide employee training on anti-bribery measures.</li>
          <li>Implement monitoring, auditing, and reporting mechanisms.</li>
          <li>Undergo an external certification audit by an accredited body.</li>
        </ol>
      </section>

      {/* Requirements */}
      <section className="iso37001-requirements">
        <h2>ISO 37001 Requirements</h2>
        <ul>
          <li>Anti-bribery policy and top management commitment.</li>
          <li>Risk assessments and due diligence on third parties.</li>
          <li>Internal financial and non-financial controls.</li>
          <li>Whistleblowing and reporting mechanisms.</li>
          <li>Regular monitoring and internal audits.</li>
          <li>Corrective actions and continual improvement.</li>
          <li>Compliance with legal and regulatory frameworks.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="iso37001-cta">
        <h2>Get Certified in ISO 37001</h2>
        <p>
          Achieving ISO 37001 certification shows your organization's dedication
          to ethical business conduct and strong anti-bribery practices.  
          Start your certification journey today and enhance your credibility in
          global markets.
        </p>
        <button className="cta-button"><a href="/contact "> Start Certification</a></button>
      </section>
      <CountrySelector
        serviceName="ISO 37001"
      />
    </div>
    

  );
};

export default Iso37001;
