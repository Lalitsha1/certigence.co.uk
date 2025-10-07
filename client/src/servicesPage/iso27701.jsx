import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../servicespage-css/iso27701.css";
import CountrySelector from "../components/CountrySelector";

const Iso27701 = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const isoContent = {
    overview: {
      title: "ISO/IEC 27701 Overview",
      content:
        "ISO/IEC 27701 extends an ISO/IEC 27001 ISMS with privacy controls to build a Privacy Information Management System (PIMS). It helps controllers and processors implement, operate and improve a robust privacy program aligned to laws such as GDPR.",
    },
    roles: {
      title: "Roles & Responsibilities",
      content: [
        "Define controller vs processor per processing activity",
        "Assign accountability, resources and oversight",
        "Use DPAs to clarify lawful basis, purposes and transfers",
        "Manage sub-processors and cross-border restrictions",
      ],
    },
    controls: {
      title: "Key Privacy Controls",
      content: [
        "Records of Processing (RoPA) and data flow maps",
        "Data subject rights intake, verification and fulfilment",
        "PIAs/DPIAs and risk treatment for high-risk processing",
        "Security of processing, logging and breach notification",
        "Retention schedules, deletion and data minimisation",
      ],
    },
    benefits: {
      title: "Business Benefits",
      content: [
        "Demonstrable compliance and audit-ready evidence",
        "Higher customer trust and market access",
        "Reduced incident impact via prepared playbooks",
        "Consistent privacy by design across products",
      ],
    },
  };

  const handleImgError = (e) => {
    const fallback = 'https://placehold.co/1400x900?text=Image+unavailable';
    if (e?.target && e.target.src !== fallback) {
      e.target.src = fallback;
    }
  };

  return (
    <div className="iso-container iso27701">
      <header className="iso-header">
        <h1>ISO/IEC 27701: Privacy Information Management</h1>
        <p>Extend ISO/IEC 27001 with privacy controls for controllers and processors (PIMS).</p>
      </header>

      <nav className="iso-nav">
        {Object.keys(isoContent).map((section) => (
          <button
            key={section}
            className={`nav-btn ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {isoContent[section].title}
          </button>
        ))}
      </nav>

      <main className="iso-content">
        <div className="content-card">
          <h2>{isoContent[activeSection].title}</h2>
          {Array.isArray(isoContent[activeSection].content) ? (
            <ul>
              {isoContent[activeSection].content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{isoContent[activeSection].content}</p>
          )}
        </div>

        <div className="additional-info">
          <h3>Implementation Guidance</h3>
          <p>
            Successful PIMS implementation needs leadership commitment, a risk-based approach, and clear integration
            with your ISMS, product and legal workflows.
          </p>
          <div className="stats-container">
            <div className="stat"><h4>90%</h4><p>report improved compliance</p></div>
            <div className="stat"><h4>72%</h4><p>reduced privacy incidents</p></div>
            <div className="stat"><h4>85%</h4><p>higher customer trust</p></div>
          </div>
        </div>

        <div className="content-card">
          <h2>Roles & Mapping</h2>
          <div className="two-col">
            <div>
              <h4>Controller vs Processor</h4>
              <ul>
                <li>Determine purposes/means (controller) vs process on behalf (processor).</li>
                <li>Clarify DPAs, sub-processor approvals and cross-border controls.</li>
              </ul>
            </div>
            <div>
              <h4>Mapping to GDPR</h4>
              <ul>
                <li>Support rights (access, rectification, erasure, portability).</li>
                <li>Lawful basis, purpose limitation, minimisation, retention.</li>
                <li>Security of processing and breach notification.</li>
              </ul>
            </div>
          </div>
          <div className="image-container ratio-16x9">
            <img
              className="img-elevated"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
              alt="Privacy workflow and governance"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={handleImgError}
            />
          </div>
        </div>

        <div className="content-card full-span">
          <h2>Key Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80" alt="Records of processing" loading="lazy" referrerPolicy="no-referrer" onError={handleImgError} />
              <div className="feature-body">
                <h4>Records of Processing</h4>
                <p>Maintain RoPA with purposes, basis, transfers and retention.</p>
                <ul className="cap-list">
                  <li>Purposes and lawful bases</li>
                  <li>PII categories and recipients</li>
                  <li>International transfers and safeguards</li>
                  <li>Retention schedules and review</li>
                </ul>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1400&q=80" alt="Data subject rights" loading="lazy" referrerPolicy="no-referrer" onError={handleImgError} />
              <div className="feature-body">
                <h4>Data Subject Rights</h4>
                <p>Intake, verify, fulfil and document requests with SLAs.</p>
                <ul className="cap-list">
                  <li>DSAR workflow and triage</li>
                  <li>Identity verification steps</li>
                  <li>Secure response and delivery</li>
                  <li>Logging and evidence retention</li>
                </ul>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80" alt="PIAs and risk" loading="lazy" referrerPolicy="no-referrer" onError={handleImgError} />
              <div className="feature-body">
                <h4>PIAs & Risk</h4>
                <p>Run DPIAs/PIAs, evaluate residual risk, record mitigations.</p>
                <ul className="cap-list">
                  <li>PPIA/DPIA screening and triggers</li>
                  <li>Templates and guidance library</li>
                  <li>Risk register and treatments</li>
                  <li>Stakeholder reviews and sign‑off</li>
                </ul>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80" alt="Security of processing" loading="lazy" referrerPolicy="no-referrer" onError={handleImgError} />
              <div className="feature-body">
                <h4>Security of Processing</h4>
                <p>Technical/organizational measures aligned to 27001.</p>
                <ul className="cap-list">
                  <li>Encryption in transit/at rest</li>
                  <li>Access control and least privilege</li>
                  <li>Logging, monitoring and alerts</li>
                  <li>Incident and breach response</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2>Delivery Timeline</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Context</h4><p>Define scope, roles, data categories and jurisdictions.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Inventory</h4><p>Map PII, purposes, transfers, retention; identify gaps.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Controls</h4><p>Implement rights, PIAs, incident and vendor controls.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Assurance</h4><p>Collect evidence, track KPIs, audit and review.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Improve</h4><p>Continuous improvement across processes and law changes.</p></div></div>
          </div>
        </div>

        <div className="content-card">
          <h2>What We Deliver</h2>
          <div className="meta">
            <span className="pill">PIMS Policy & Objectives</span>
            <span className="pill">RoPA & Data Flow Maps</span>
            <span className="pill">Rights Request SOPs</span>
            <span className="pill">DPIA/PIA Toolkit</span>
            <span className="pill">Incident & Breach Playbooks</span>
            <span className="pill">Audit Evidence Pack</span>
          </div>
        </div>

        <div className="content-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Do we need ISO/IEC 27001 first?</summary>
              <p>Yes. 27701 extends an ISO/IEC 27001 ISMS with privacy controls for a PIMS.</p>
            </details>
            <details>
              <summary>Does 27701 cover controllers and processors?</summary>
              <p>It includes guidance and controls for both roles; define your role per processing activity.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Typical timelines are 8–14 weeks depending on scope, data complexity and evidence readiness.</p>
            </details>
          </div>
        </div>
      <CountrySelector
        serviceName="ISO 27701"
      />
      </main>

      <footer className="iso-footer">
        <p>&copy; {new Date().getFullYear()} Privacy Information Management (ISO/IEC 27701)</p>
      </footer>
    </div>
  );
};

export default Iso27701;
