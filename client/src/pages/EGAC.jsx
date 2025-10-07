import React from "react";
import { Link } from "react-router-dom";
import {
  Building,
  ShieldCheck,
  Compass,
  Users,
  Scale,
  ClipboardCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import "../styles/egac.css";

const heroStats = [
  { label: "National body", value: "Egypt" },
  { label: "Standard", value: "ISO/IEC 17011" },
  { label: "Scope", value: "CBs, labs, inspection" },
  { label: "Recognition", value: "IAF/ILAC peer" },
];

const valueHighlights = [
  {
    icon: ShieldCheck,
    title: "Confidence in certification",
    text: "EGAC oversight proves certificates are issued by competent, impartial certification bodies.",
  },
  {
    icon: Scale,
    title: "Regulatory trust",
    text: "National and regional regulators recognise EGAC-accredited reports for compliance assurance.",
  },
  {
    icon: Compass,
    title: "Governance discipline",
    text: "Witnessed audits, impartiality committees, and surveillance keep certification decisions robust.",
  },
  {
    icon: Users,
    title: "Market acceptance",
    text: "Customers and tender boards prefer suppliers with EGAC-accredited certification partners.",
  },
];

const focusAreas = [
  {
    icon: Building,
    title: "Certification bodies",
    copy: "Management system, product, and personnel certification programmes.",
  },
  {
    icon: Landmark,
    title: "Testing & calibration labs",
    copy: "Laboratories demonstrating traceability, competence, and impartial reporting.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection organisations",
    copy: "Bodies performing impartial inspections, surveys, and verification activities.",
  },
];

const accreditationJourney = [
  {
    step: "01",
    title: "Application & impartiality",
    detail: "Submit programme scope, impartiality analysis, and management system documentation.",
  },
  {
    step: "02",
    title: "Assessments & witnessing",
    detail: "EGAC performs office assessments and observes audits or inspections to verify competence.",
  },
  {
    step: "03",
    title: "Decision & surveillance",
    detail: "Formal accreditation, surveillance visits, and periodic re-assessment to maintain confidence.",
  },
];

const evidenceChecklist = [
  "Impartiality committee minutes and risk treatment plans",
  "Competence criteria for auditors, inspectors, and decision makers",
  "Audit/inspection programmes, sampling plans, and witnessed activity reports",
  "Corrective action records with effectiveness verification",
  "Complaints and appeals logs with documented resolutions",
  "Documented management system aligned with ISO/IEC 17021-1 or relevant standards",
  "Internal audit and management review outputs driving continual improvement",
];

const EGAC = () => {
  return (
    <div className="egac-page">
      <header className="egac-hero">
        <div className="egac-hero-inner">
          <span className="egac-hero-tag">Accreditation spotlight</span>
          <h1 className="egac-hero-title">Egyptian Accreditation Council (EGAC)</h1>
          <p className="egac-hero-subtitle">
            EGAC provides national accreditation services that align with ISO/IEC 17011, building trust in Egyptian
            certification bodies, laboratories, and inspection organisations through impartial and technically rigorous
            oversight.
          </p>
          <div className="egac-hero-stats">
            {heroStats.map((stat) => (
              <article key={stat.label} className="egac-stat-card">
                <span className="egac-stat-label">{stat.label}</span>
                <span className="egac-stat-value">{stat.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="egac-main">
        <section className="egac-section">
          <div className="egac-section-head">
            <h2 className="egac-section-title">Why EGAC accreditation matters</h2>
            <p className="egac-section-lead">
              EGAC accreditation assures regulators, customers, and international partners that conformity assessment
              bodies in Egypt operate with impartial governance, competent personnel, and consistent decision controls.
            </p>
          </div>
          <div className="egac-grid egac-value-grid">
            {valueHighlights.map((item) => (
              <article key={item.title} className="egac-card">
                <div className="egac-card-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="egac-card-title">{item.title}</h3>
                <p className="egac-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="egac-section">
          <div className="egac-section-head">
            <h2 className="egac-section-title">Accreditation journey</h2>
            <p className="egac-section-lead">
              Understanding EGACs process empowers your team to prepare impartiality committees, competence evidence,
              and witnessed activities that demonstrate capability.
            </p>
          </div>
          <div className="egac-steps-grid">
            {accreditationJourney.map((step) => (
              <article key={step.step} className="egac-step-card">
                <div className="egac-step-number">{step.step}</div>
                <div className="egac-step-body">
                  <h3 className="egac-step-title">{step.title}</h3>
                  <p className="egac-step-text">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="egac-section">
          <div className="egac-section-head">
            <h2 className="egac-section-title">Focus areas</h2>
            <p className="egac-section-lead">
              EGAC accredits a wide spectrum of conformity assessment activities. We handle each with tailored governance
              models, competence programmes, and impartiality safeguards.
            </p>
          </div>
          <div className="egac-grid egac-focus-grid">
            {focusAreas.map((item) => (
              <article key={item.title} className="egac-card">
                <div className="egac-card-icon egac-focus-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="egac-card-title">{item.title}</h3>
                <p className="egac-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="egac-section">
          <div className="egac-section-head">
            <h2 className="egac-section-title">Evidence EGAC assessors expect</h2>
            <p className="egac-section-lead">
              Ensure smooth assessments with documentation that proves impartiality, technical competence, and continual
              improvement across your programmes.
            </p>
          </div>
          <ul className="egac-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="egac-checklist-item">
                <ClipboardCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        
      </main>

      <footer className="egac-footer">
        <div className="egac-footer-content">
          <h2 className="egac-footer-title">Leverage EGAC accreditation for trusted certification</h2>
          <p className="egac-footer-text">
            Certigence supports certification bodies and laboratories through impartiality frameworks, competence
            development, and audit evidence preparation that satisfy EGAC requirements.
          </p>
          <div className="egac-footer-actions">
            <a className="egac-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to our accreditation team <ArrowRight size={18} />
            </a>
            <Link className="egac-cta-secondary" to="/authorisations">
              Back to authorisations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EGAC;
