import React from "react";
import { Link } from "react-router-dom";
import {
  Globe2,
  ShieldCheck,
  Compass,
  Users,
  ClipboardCheck,
  Landmark,
  Scale,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import "../styles/ukas.css";

const heroStats = [
  { label: "National body", value: "United Kingdom" },
  { label: "Standard", value: "ISO/IEC 17011" },
  { label: "Services", value: "Certification, testing, inspection" },
  { label: "Peer recognition", value: "IAF / ILAC" },
];

const valueHighlights = [
  {
    icon: ShieldCheck,
    title: "Trusted assurance",
    text: "UKAS accreditation proves certification bodies and laboratories deliver impartial, competent assessments.",
  },
  {
    icon: Globe2,
    title: "Global acceptance",
    text: "International recognition supports regulators, procurement teams, and cross-border supply chains.",
  },
  {
    icon: Compass,
    title: "Governance oversight",
    text: "Witnessed audits, impartiality committees, and decision monitoring protect the integrity of certificates.",
  },
  {
    icon: Users,
    title: "Stakeholder confidence",
    text: "Clients, regulators, and the public trust accreditation-backed outcomes for risk mitigation.",
  },
];

const focusAreas = [
  {
    icon: Landmark,
    title: "Certification bodies",
    copy: "Management system, product, and personnel certification programmes meeting ISO/IEC 17021-1.",
  },
  {
    icon: FileSearch,
    title: "Testing & calibration labs",
    copy: "Laboratories demonstrating traceability, competence, and impartial reporting under ISO/IEC 17025.",
  },
  {
    icon: Scale,
    title: "Inspection & medical",
    copy: "Inspection bodies and medical labs fulfilling sector-specific accreditation requirements.",
  },
];

const accreditationJourney = [
  {
    step: "01",
    title: "Application & impartiality",
    detail: "Provide scope, impartiality analysis, and management system documentation for UKAS review.",
  },
  {
    step: "02",
    title: "Assessment & witnessing",
    detail: "UKAS conducts office visits, competence evaluation, and observes audits or tests in practice.",
  },
  {
    step: "03",
    title: "Decision & surveillance",
    detail: "Accreditation decisions, surveillance visits, and periodic reassessment maintain confidence.",
  },
];

const evidenceChecklist = [
  "Impartiality risk assessments and committee minutes",
  "Competence criteria, authorisations, and training records",
  "Audit/testing programmes, sampling plans, and witnessed activity reports",
  "Corrective action management with effectiveness reviews",
  "Complaints, appeals, and client feedback logs with resolutions",
  "Documented management system aligned with ISO/IEC 17021-1 or applicable standard",
  "Internal audit and management review outputs driving continual improvement",
];

const UKAS = () => {
  return (
    <div className="ukas-page">
      <header className="ukas-hero">
        <div className="ukas-hero-inner">
          <span className="ukas-hero-tag">Accreditation spotlight</span>
          <h1 className="ukas-hero-title">United Kingdom Accreditation Service (UKAS)</h1>
          <p className="ukas-hero-subtitle">
            UKAS is the UKs national accreditation body. Its assessments confirm that certification bodies,
            laboratories, and inspection organisations operate with impartial governance, technical competence, and
            consistent decision-making.
          </p>
          <div className="ukas-hero-stats">
            {heroStats.map((stat) => (
              <article key={stat.label} className="ukas-stat-card">
                <span className="ukas-stat-label">{stat.label}</span>
                <span className="ukas-stat-value">{stat.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="ukas-main">
        <section className="ukas-section">
          <div className="ukas-section-head">
            <h2 className="ukas-section-title">Why UKAS accreditation matters</h2>
            <p className="ukas-section-lead">
              Accreditation reassures customers, regulators, and international partners that conformity assessment
              services are run competently and impartially.
            </p>
          </div>
          <div className="ukas-grid ukas-value-grid">
            {valueHighlights.map((item) => (
              <article key={item.title} className="ukas-card">
                <div className="ukas-card-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="ukas-card-title">{item.title}</h3>
                <p className="ukas-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ukas-section">
          <div className="ukas-section-head">
            <h2 className="ukas-section-title">Accreditation journey</h2>
            <p className="ukas-section-lead">
              Prepare your organisation for UKAS accreditation with a clear understanding of each stage.
            </p>
          </div>
          <div className="ukas-steps-grid">
            {accreditationJourney.map((step) => (
              <article key={step.step} className="ukas-step-card">
                <div className="ukas-step-number">{step.step}</div>
                <div className="ukas-step-body">
                  <h3 className="ukas-step-title">{step.title}</h3>
                  <p className="ukas-step-text">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ukas-section">
          <div className="ukas-section-head">
            <h2 className="ukas-section-title">Focus areas</h2>
            <p className="ukas-section-lead">
              UKAS supports a broad range of conformity assessment bodies. We tailor governance models and competence
              programmes to match your scope.
            </p>
          </div>
          <div className="ukas-grid ukas-focus-grid">
            {focusAreas.map((item) => (
              <article key={item.title} className="ukas-card">
                <div className="ukas-card-icon ukas-focus-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="ukas-card-title">{item.title}</h3>
                <p className="ukas-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ukas-section">
          <div className="ukas-section-head">
            <h2 className="ukas-section-title">Evidence UKAS assessors expect</h2>
            <p className="ukas-section-lead">
              Assemble these records ahead of assessments to demonstrate impartiality, competence, and continual
              improvement.
            </p>
          </div>
          <ul className="ukas-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="ukas-checklist-item">
                <ClipboardCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        
      </main>

      <footer className="ukas-footer">
        <div className="ukas-footer-content">
          <h2 className="ukas-footer-title">Strengthen confidence with UKAS-recognised certification</h2>
          <p className="ukas-footer-text">
            Certigence partners with certification bodies, laboratories, and inspection organisations to design
            impartiality safeguards, competence frameworks, and evidence packs that meet UKAS expectations.
          </p>
          <div className="ukas-footer-actions">
            <a className="ukas-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to our accreditation team <ArrowRight size={18} />
            </a>
            <Link className="ukas-cta-secondary" to="/authorisations">
              Back to authorisations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UKAS;
