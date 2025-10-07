// Iso27001.jsx
import React from "react";
import {
  ShieldCheck,
  Lock,
  Globe,
  Users,
  FileCheck,
  BookOpen,
  Workflow,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import "../styles/servicespage-css/iso14001.css";
import CountrySelector from "../components/CountrySelector";

const benefits = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Protect Information Assets",
    text:
      "ISO 27001 provides a systematic approach to manage sensitive information — reducing risks of data breaches, theft and loss.",
    bgClass: "iso14001-benefit-bg-1",
  },
  {
    icon: <Lock size={40} />,
    title: "Confidentiality & Integrity",
    text:
      "Ensures data confidentiality, integrity and availability through controls, policies and technical safeguards.",
    bgClass: "iso14001-benefit-bg-2",
  },
  {
    icon: <Globe size={40} />,
    title: "Compliance & Trust",
    text:
      "Meets legal, regulatory and contractual security obligations and demonstrates trustworthiness to customers and partners.",
    bgClass: "iso14001-benefit-bg-3",
  },
  {
    icon: <Users size={40} />,
    title: "Business Continuity",
    text:
      "Integrates information security with business continuity planning to minimise downtime after incidents.",
    bgClass: "iso14001-benefit-bg-4",
  },
  {
    icon: <FileCheck size={40} />,
    title: "Risk Management",
    text:
      "A risk-based approach helps prioritize security investments on the most critical threats and vulnerabilities.",
    bgClass: "iso14001-benefit-bg-5",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Competitive Edge",
    text:
      "Certification reassures clients about responsible data handling — vital for technology, finance and cloud service providers.",
    bgClass: "iso14001-benefit-bg-6",
  },
];

const principles = [
  { icon: <BookOpen size={30} />, title: "Risk Management", text: "Identify, evaluate and treat information risks within the organization's context." },
  { icon: <Workflow size={30} />, title: "Leadership & Governance", text: "Top management must demonstrate leadership and assign information security responsibilities." },
  { icon: <Users size={30} />, title: "People & Awareness", text: "Employees and partners must understand security responsibilities and follow policies." },
  { icon: <Lightbulb size={30} />, title: "Continual Improvement", text: "Use metrics, audits and lessons learned to improve controls and reduce incidents." },
];

const steps = [
  { id: "01", title: "Scope & Context", text: "Define what assets, systems and processes are included within the ISMS scope." },
  { id: "02", title: "Risk Assessment", text: "Identify threats, vulnerabilities and impacts; assess the likelihood and prioritize treatment." },
  { id: "03", title: "Controls Implementation", text: "Apply policies, access controls, encryption, monitoring and incident response procedures." },
  { id: "04", title: "Awareness & Training", text: "Train staff on security policies, phishing resistance and secure handling of information." },
  { id: "05", title: "Internal Audit & Review", text: "Audit ISMS controls, fix gaps and conduct management reviews before certification audit." },
  { id: "06", title: "Certification Audit", text: "External auditor reviews the ISMS and validates compliance with ISO 27001 controls." },
  { id: "07", title: "Maintain & Monitor", text: "Monitor logs, perform penetration testing and update controls as threats evolve." },
];

const industries = [
  "Information Technology & Cloud Services",
  "Financial Services",
  "Healthcare & Insurance",
  "Telecommunications",
  "E-commerce & Retail",
  "Government & Public Sector",
  "Consulting & Professional Services",
  "Manufacturing (critical IP)",
];

const faqs = [
  { q: "What is ISO 27001?", a: "ISO 27001 is the international standard for information security management systems (ISMS), helping organizations protect their information assets." },
  { q: "Is ISO 27001 only for tech companies?", a: "No — any organization that handles sensitive or valuable information benefits from an ISMS, including healthcare, finance and public sector." },
  { q: "How long to implement?", a: "Typical implementation takes 4–12 months depending on complexity, assets and existing security maturity." },
  { q: "Does ISO 27001 prevent cyber attacks?", a: "It reduces risk substantially by implementing controls and processes — but no system can eliminate all risk; it improves resilience and response." },
];

const Iso27001 = () => (
  <div className="iso14001-wrapper">
    <header className="iso14001-hero-section">
      <h1 className="iso14001-hero-title">ISO 27001 Certification</h1>
      <p className="iso14001-hero-subtitle">
        ISO 27001 is the gold standard for Information Security Management Systems (ISMS).
        It defines a risk-based approach to protect confidentiality, integrity and availability of information.
      </p>
    </header>

    <section className="iso14001-main-content">
      <h2 className="section-heading">Why Choose ISO 27001?</h2>
      <div className="iso14001-benefits-grid">
        {benefits.map((b, i) => (
          <div key={i} className={`iso14001-benefit-card ${b.bgClass}`}>
            <div className="iso14001-card-overlay" />
            <div className="iso14001-card-content">
              <div className="iso14001-card-icon">{b.icon}</div>
              <h3 className="iso14001-card-title">{b.title}</h3>
              <p className="iso14001-card-text">{b.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Core Principles</h2>
      <div className="iso14001-principles-grid">
        {principles.map((p, i) => (
          <div key={i} className="iso14001-principle-card">
            <div className="iso14001-principle-icon-box">{p.icon}</div>
            <h4 className="iso14001-principle-title">{p.title}</h4>
            <p className="iso14001-principle-text">{p.text}</p>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Implementation Steps</h2>
      <div className="iso14001-steps-container">
        {steps.map((s, i) => (
          <div key={i} className="iso14001-step-card">
            <div className="iso14001-step-number">{s.id}</div>
            <div className="iso14001-step-content">
              <h4 className="iso14001-step-title">{s.title}</h4>
              <p className="iso14001-step-text">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Industries</h2>
      <ul className="iso14001-industries-list">
        {industries.map((ind, i) => (
          <li key={i} className="iso14001-industry-item">{ind}</li>
        ))}
      </ul>

      <h2 className="section-heading">FAQs</h2>
      <div className="iso14001-faq-container">
        {faqs.map((f, i) => (
          <div key={i} className="iso14001-faq-item">
            <h4 className="iso14001-faq-question">Q{i + 1}: {f.q}</h4>
            <p className="iso14001-faq-answer">{f.a}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="iso14001-cta-section">
      <h2 className="iso14001-cta-title">Protect Your Information — Get ISO 27001</h2>
      <p className="iso14001-cta-text">
        Build trust with customers and partners by demonstrating robust information security management.
      </p>
    </footer>
      <CountrySelector
        serviceName="ISO 27001"
      />
    </div>
);

export default Iso27001;
