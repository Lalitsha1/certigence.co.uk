
// src/pages/Iso27001.jsx
import React from "react";
import {
  FaLock,
  FaUserShield,
  FaCloud,
  FaGlobe,
  FaClipboardCheck,
  FaChartLine,
  FaTools,
  FaHandshake,
  FaBookOpen,
} from "react-icons/fa";
import "../styles/servicespage-css/iso27001.css";

const Iso27001 = () => {
  return (
    <div className="iso27001-container">
      {/* Header Section */}
      <header className="iso27001-header">
        <h1 className="iso27001-title">ISO 27001 Certification</h1>
        <p className="iso27001-subtitle">
          Safeguarding your organization's most valuable asset – <b>information</b>.
          Learn everything about ISO 27001, the globally recognized standard for
          <i> Information Security Management Systems (ISMS)</i>.
        </p>
      </header>

      {/* Hero Image */}
      <div className="iso27001-hero">
        <img
          src="https://img.freepik.com/free-vector/cyber-security-concept-illustration_114360-1016.jpg"
          alt="ISO 27001 Security"
          className="iso27001-hero-img"
        />
        <div className="iso27001-hero-overlay">
          <h2>Protect • Secure • Comply</h2>
          <p>
            ISO 27001 ensures confidentiality, integrity, and availability of
            information in the digital era.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="iso27001-intro">
        <h2>What is ISO 27001?</h2>
        <p>
          ISO/IEC 27001 is the international standard for <b>Information
          Security Management Systems (ISMS)</b>. It provides a systematic
          approach to managing sensitive company information so that it remains
          secure. It includes people, processes, and IT systems by applying a
          risk management process.
        </p>
        <p>
          The standard helps organizations of any size in any sector protect
          their information through an <b>effective ISMS framework</b>. It
          addresses not only IT security but also organizational processes,
          human behavior, and physical security aspects.
        </p>
      </section>

      {/* Grid Section (3x3 cards with 3D hover effect) */}
      <section className="iso27001-grid">
        <h2>Core Elements of ISO 27001</h2>
        <div className="grid">
          <div className="grid-card">
            <FaLock className="grid-icon" />
            <h3>Information Security</h3>
            <p>
              Ensures protection of sensitive data including financial,
              intellectual property, employee details, and third-party
              information.
            </p>
          </div>

          <div className="grid-card">
            <FaUserShield className="grid-icon" />
            <h3>Risk Management</h3>
            <p>
              Identifies, assesses, and mitigates risks to prevent unauthorized
              access, breaches, or loss of information.
            </p>
          </div>

          <div className="grid-card">
            <FaCloud className="grid-icon" />
            <h3>Cloud Security</h3>
            <p>
              Provides strong controls for cloud data storage, encryption, and
              secure access across hybrid IT infrastructures.
            </p>
          </div>

          <div className="grid-card">
            <FaGlobe className="grid-icon" />
            <h3>Global Recognition</h3>
            <p>
              ISO 27001 certification is recognized worldwide, enhancing trust
              with international clients and partners.
            </p>
          </div>

          <div className="grid-card">
            <FaClipboardCheck className="grid-icon" />
            <h3>Compliance</h3>
            <p>
              Helps comply with GDPR, HIPAA, and other data protection laws by
              demonstrating strong security practices.
            </p>
          </div>

          <div className="grid-card">
            <FaChartLine className="grid-icon" />
            <h3>Continuous Improvement</h3>
            <p>
              Encourages organizations to continuously monitor, review, and
              improve their information security controls.
            </p>
          </div>

          <div className="grid-card">
            <FaTools className="grid-icon" />
            <h3>Systematic Approach</h3>
            <p>
              ISO 27001 offers a structured methodology to identify weak points
              and strengthen the ISMS systematically.
            </p>
          </div>

          <div className="grid-card">
            <FaHandshake className="grid-icon" />
            <h3>Trust & Reputation</h3>
            <p>
              Builds customer confidence by showing your organization is
              committed to protecting sensitive information.
            </p>
          </div>

          <div className="grid-card">
            <FaBookOpen className="grid-icon" />
            <h3>Documentation & Training</h3>
            <p>
              Requires detailed security policies, procedures, and employee
              training to ensure compliance and awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="iso27001-benefits">
        <h2>Why ISO 27001 Certification is Important</h2>
        <ul>
          <li>✅ Safeguards sensitive business and customer information</li>
          <li>✅ Reduces the likelihood of costly data breaches</li>
          <li>✅ Provides legal and regulatory compliance</li>
          <li>✅ Enhances reputation and competitive advantage</li>
          <li>✅ Demonstrates commitment to information security</li>
          <li>✅ Improves business resilience against cyberattacks</li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="iso27001-process">
        <h2>Steps to Achieve ISO 27001 Certification</h2>
        <ol>
          <li>Conduct a gap analysis against ISO 27001 requirements.</li>
          <li>Establish the ISMS scope and security objectives.</li>
          <li>Identify risks and implement security controls.</li>
          <li>Develop required policies and documentation.</li>
          <li>Conduct internal training and awareness sessions.</li>
          <li>Perform an internal audit and management review.</li>
          <li>Undergo external certification audit by an accredited body.</li>
          <li>Maintain and continuously improve the ISMS.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="iso27001-footer">
        <h3>ISO 27001 – Securing the Digital Future</h3>
        <p>
          By implementing ISO 27001, organizations not only protect data but
          also gain competitive advantages in the global marketplace. It is a
          critical investment in trust, compliance, and long-term growth.
        </p>
      </footer>
    </div>
  );
};

export default Iso27001;
