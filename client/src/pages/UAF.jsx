import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Landmark,
  Compass,
  ClipboardCheck,
  Gauge,
  ArrowRight,
} from "lucide-react";
import "../styles/uaf.css";

const heroStats = [
  { label: "Standard", value: "ISO/IEC 17021-1" },
  { label: "Scope", value: "Management system CBs" },
  { label: "Approach", value: "Impartial governance" },
  { label: "Global reach", value: "Multi-sector" },
];

const valueHighlights = [
  {
    icon: ShieldCheck,
    title: "Accredited confidence",
    text: "UAF accreditation assures clients that certification bodies are competent, impartial, and audit-ready.",
  },
  {
    icon: Users,
    title: "Customer acceptance",
    text: "Accredited certificates satisfy procurement, regulators, and international supply-chain partners.",
  },
  {
    icon: Compass,
    title: "Governance oversight",
    text: "UAF reviews impartiality risks, witnessed audits, and decision controls to keep programmes disciplined.",
  },
  {
    icon: Gauge,
    title: "Performance improvement",
    text: "KPIs, findings, and corrective actions feed continual improvement across the certification life cycle.",
  },
];

const focusAreas = [
  {
    icon: Landmark,
    title: "Management system CBs",
    copy: "Certification bodies issuing ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001 and related schemes.",
  },
  {
    icon: ClipboardCheck,
    title: "Product & personnel",
    copy: "Programmes certifying products, services, and personnel against regulatory or industry requirements.",
  },
];

const accreditationJourney = [
  {
    step: "01",
    title: "Application & impartiality",
    detail: "Submit scope, impartiality analysis, and management system documentation for review.",
  },
  {
    step: "02",
    title: "Assessment & witnessing",
    detail: "UAF evaluates offices, audits, and competence to verify the certification programme.",
  },
  {
    step: "03",
    title: "Decision & surveillance",
    detail: "Accreditation decisions followed by surveillance visits and periodic reassessment.",
  },
];

const evidenceChecklist = [
  "Impartiality committee minutes and mitigation actions",
  "Competence criteria and authorisation records for auditors and decision-makers",
  "Audit programmes, sampling plans, and witnessed audit reports",
  "Corrective action records addressing findings and effectiveness checks",
  "Complaints, appeals, and client feedback logs with outcomes",
  "Documented management system aligned with ISO/IEC 17021-1",
  "Management review outputs driving continual improvement",
];

const UAF = () => {
  return (
    <div className="uaf-page">
      <header className="uaf-hero">
        <div className="uaf-hero-inner">
          <span className="uaf-hero-tag">Accreditation spotlight</span>
          <h1 className="uaf-hero-title">United Accreditation Foundation (UAF)</h1>
          <p className="uaf-hero-subtitle">
            UAF accredits certification bodies against ISO/IEC 17021-1, verifying impartial governance, competent
            personnel, and consistent audit delivery so your certificates carry global credibility.
          </p>
          <div className="uaf-hero-stats">
            {heroStats.map((stat) => (
              <article key={stat.label} className="uaf-stat-card">
                <span className="uaf-stat-label">{stat.label}</span>
                <span className="uaf-stat-value">{stat.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="uaf-main">
        <section className="uaf-section">
          <div className="uaf-section-head">
            <h2 className="uaf-section-title">Why UAF accreditation matters</h2>
            <p className="uaf-section-lead">
              UAF oversight provides confidence to regulators, customers, and international partners that your
              certification body operates with impartiality and technical excellence.
            </p>
          </div>
          <div className="uaf-grid uaf-value-grid">
            {valueHighlights.map((item) => (
              <article key={item.title} className="uaf-card">
                <div className="uaf-card-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="uaf-card-title">{item.title}</h3>
                <p className="uaf-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="uaf-section">
          <div className="uaf-section-head">
            <h2 className="uaf-section-title">Accreditation journey</h2>
            <p className="uaf-section-lead">
              Prepare for each stage of UAF accreditation with a clear roadmap of documentation, witnessing, and
              surveillance requirements.
            </p>
          </div>
          <div className="uaf-steps-grid">
            {accreditationJourney.map((step) => (
              <article key={step.step} className="uaf-step-card">
                <div className="uaf-step-number">{step.step}</div>
                <div className="uaf-step-body">
                  <h3 className="uaf-step-title">{step.title}</h3>
                  <p className="uaf-step-text">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="uaf-section">
          <div className="uaf-section-head">
            <h2 className="uaf-section-title">Focus areas</h2>
            <p className="uaf-section-lead">
              UAF accredits diverse conformity assessment bodies. We tailor governance models and competence programmes to
              each scope.
            </p>
          </div>
          <div className="uaf-grid uaf-focus-grid">
            {focusAreas.map((item) => (
              <article key={item.title} className="uaf-card">
                <div className="uaf-card-icon uaf-focus-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="uaf-card-title">{item.title}</h3>
                <p className="uaf-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="uaf-section">
          <div className="uaf-section-head">
            <h2 className="uaf-section-title">Evidence UAF assessors expect</h2>
            <p className="uaf-section-lead">
              Compile these records to demonstrate control of impartiality, competence, and audit quality during UAF
              assessments.
            </p>
          </div>
          <ul className="uaf-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="uaf-checklist-item">
                <ClipboardCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        
      </main>

      <footer className="uaf-footer">
        <div className="uaf-footer-content">
          <h2 className="uaf-footer-title">Partner with a UAF-recognised certification team</h2>
          <p className="uaf-footer-text">
            Certigence supports certification bodies with impartiality frameworks, competence management, and audit
            evidence to satisfy UAF requirements.
          </p>
          <div className="uaf-footer-actions">
            <a className="uaf-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to our accreditation team <ArrowRight size={18} />
            </a>
            <Link className="uaf-cta-secondary" to="/authorisations">
              Back to authorisations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UAF;
