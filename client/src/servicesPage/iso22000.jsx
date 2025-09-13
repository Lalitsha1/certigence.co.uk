import React from "react";
import {
  FaUtensils,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaClipboardCheck,
  FaSearch,
  FaCertificate,
  FaHandHoldingHeart
} from "react-icons/fa";

import "../styles/servicespage-css/iso22000.css";

const Iso22000 = () => {
  return (
    <div className="iso22000-container">
      {/* Hero Section */}
      <header className="iso22000-hero">
        <div className="hero-content">
          <h1 className="hero-title">ISO 22000 Certification</h1>
          <p className="hero-subtitle">
            Food Safety Management System - International Standard
          </p>
          <button className="hero-cta"> <a href="/contact"> Start Your Certification</a></button>
        </div>
        <div className="hero-bg-effect"></div>
      </header>

      {/* Introduction */}
      <section className="iso22000-intro">
        <div className="intro-content">
          <h2>What is ISO 22000?</h2>
          <p>
            ISO 22000 is an internationally recognized standard that specifies
            the requirements for a food safety management system. It integrates
            the principles of the Hazard Analysis and Critical Control Point
            (HACCP) system and provides a framework for organizations in the
            food industry to ensure food safety throughout the supply chain.
          </p>
          <p>
            This standard applies to all organizations in the food chain, from
            farmers and producers to processors, packaging, transportation,
            storage, retailers, and food service outlets—regardless of their
            size or complexity.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="iso22000-benefits">
        <h2>Key Benefits of ISO 22000 Certification</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <FaShieldAlt className="benefit-icon" />
            <h3>Enhanced Food Safety</h3>
            <p>
              Systematically identifies, evaluates, and controls food safety
              hazards to prevent contamination and ensure safe food products.
            </p>
          </div>

          <div className="benefit-item">
            <FaGlobe className="benefit-icon" />
            <h3>Global Market Access</h3>
            <p>
              Facilitates international trade by demonstrating compliance with
              globally recognized food safety standards.
            </p>
          </div>

          <div className="benefit-item">
            <FaChartLine className="benefit-icon" />
            <h3>Improved Efficiency</h3>
            <p>
              Streamlines processes, reduces waste, and optimizes resource
              utilization throughout the food production chain.
            </p>
          </div>

          <div className="benefit-item">
            <FaUsers className="benefit-icon" />
            <h3>Stakeholder Confidence</h3>
            <p>
              Builds trust with customers, regulators, and business partners
              through demonstrated commitment to food safety.
            </p>
          </div>

          <div className="benefit-item">
            <FaCheckCircle className="benefit-icon" />
            <h3>Regulatory Compliance</h3>
            <p>
              Helps organizations meet legal and regulatory requirements related
              to food safety in various jurisdictions.
            </p>
          </div>

          <div className="benefit-item">
            <FaClipboardCheck className="benefit-icon" />
            <h3>Risk Management</h3>
            <p>
              Proactively addresses food safety risks, reducing the likelihood
              of recalls, lawsuits, and reputational damage.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="implementation-process">
        <h2>Implementation Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Gap Analysis</h3>
              <p>
                Assess current practices against ISO 22000 requirements to
                identify areas for improvement.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Planning & Documentation</h3>
              <p>
                Develop food safety policy, objectives, and necessary
                documentation for the management system.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>HACCP Implementation</h3>
              <p>
                Establish prerequisite programs and implement HACCP principles
                for hazard control.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Training & Awareness</h3>
              <p>
                Educate employees on food safety principles, procedures, and
                their responsibilities.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Internal Audit</h3>
              <p>
                Conduct internal audits to verify system implementation and
                effectiveness.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>Certification Audit</h3>
              <p>
                Engage an accredited certification body to perform the
                certification audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="key-requirements">
        <h2>Key Requirements of ISO 22000</h2>
        <div className="requirements-content">
          <div className="requirements-list">
            <div className="requirement-item">
              <FaSearch className="requirement-icon" />
              <div className="requirement-text">
                <h3>Interactive Communication</h3>
                <p>
                  Effective communication with suppliers, customers, and
                  relevant stakeholders throughout the food chain.
                </p>
              </div>
            </div>

            <div className="requirement-item">
              <FaCertificate className="requirement-icon" />
              <div className="requirement-text">
                <h3>System Management</h3>
                <p>
                  Structured approach to managing food safety processes and
                  resources.
                </p>
              </div>
            </div>

            <div className="requirement-item">
              <FaUtensils className="requirement-icon" />
              <div className="requirement-text">
                <h3>Prerequisite Programs (PRPs)</h3>
                <p>
                  Basic conditions and activities necessary to maintain a
                  hygienic environment throughout the food chain.
                </p>
              </div>
            </div>

            <div className="requirement-item">
              <FaHandHoldingHeart className="requirement-icon" />
              <div className="requirement-text">
                <h3>HACCP Principles</h3>
                <p>
                  Application of the seven HACCP principles to identify,
                  evaluate, and control food safety hazards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="iso22000-cta">
        <div className="cta-content">
          <h2>Ready to Implement ISO 22000?</h2>
          <p>
            Ensure food safety, meet regulatory requirements, and gain a
            competitive edge in the global market with ISO 22000 certification.
          </p>
          <button className="cta-button"> <a href="/contact"> Get Started Today</a></button>
        </div>
      </section>
    </div>
  );
};

export default Iso22000;