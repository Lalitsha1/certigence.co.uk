import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Compass,
  ClipboardCheck,
  Gauge,
  Users,
  Landmark,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import "../styles/ias.css";

const heroStats = [
  { label: "Established", value: "1975" },
  { label: "Scope", value: "Global accreditation" },
  { label: "Focus", value: "Technical competence" },
  { label: "Recognised in", value: "90+ countries" },
];

const valueHighlights = [
  {
    icon: ShieldCheck,
    title: "Trusted assurance",
    text: "IAS accreditation demonstrates impartiality, consistent decision-making, and internationally recognised audit rigour.",
  },
  {
    icon: BarChart3,
    title: "Market acceptance",
    text: "Accredited certificates satisfy regulators, procurement teams, and global supply chain partners.",
  },
  {
    icon: Compass,
    title: "Governance oversight",
    text: "Witnessed audits and surveillance programmes ensure certification bodies maintain impartial governance.",
  },
  {
    icon: Gauge,
    title: "Performance insight",
    text: "Key indicators, impartiality committees, and risk reviews keep audit programmes on course.",
  },
];

const accreditationJourney = [
  {
    step: "01",
    title: "Application & review",
    detail: "Submit scope, impartiality analysis, and management system documentation for initial screening.",
  },
  {
    step: "02",
    title: "Assessments & witnessing",
    detail: "IAS conducts office assessments and observes audits to verify technical competence.",
  },
  {
    step: "03",
    title: "Decision & monitoring",
    detail: "Formal accreditation decision followed by annual surveillance and periodic re-assessment.",
  },
];

const focusAreas = [
  {
    icon: Users,
    title: "Management system CBs",
    copy: "Certification bodies delivering ISO 9001, 14001, 45001, and integrated management systems.",
  },
  {
    icon: Landmark,
    title: "Product certification",
    copy: "Product and personnel certification organisations demonstrating robust schemes.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection agencies",
    copy: "Bodies performing inspections and evaluations requiring impartial technical judgement.",
  },
];

const evidenceChecklist = [
  "Documented impartiality committee minutes and risk reviews",
  "Competence matrices for auditors, decision makers, and technical reviewers",
  "Audit programmes, sampling plans, and witnessed audit records",
  "Corrective action reports addressing findings and effectiveness checks",
  "Management system procedures aligned to ISO/IEC 17021-1 or relevant standard",
  "Complaints, appeals, and client feedback logs with resolutions",
  "Continual improvement actions from internal audits and management review",
];

const IAS = () => {
  return (
    <div className="ias-page">
      <header className="ias-hero">
        <div className="ias-hero-inner">
          <span className="ias-hero-tag">Accreditation spotlight</span>
          <h1 className="ias-hero-title">International Accreditation Service (IAS)</h1>
          <p className="ias-hero-subtitle">
            IAS is a globally recognised accreditation body that validates certification bodies for impartiality,
            technical competence, and consistent outcomes. Partnering with an IAS-accredited certification body builds
            confidence with regulators, customers, and international supply chains.
          </p>
          <div className="ias-hero-stats">
            {heroStats.map((stat) => (
              <article key={stat.label} className="ias-stat-card">
                <span className="ias-stat-label">{stat.label}</span>
                <span className="ias-stat-value">{stat.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="ias-main">
        <section className="ias-section">
          <div className="ias-section-head">
            <h2 className="ias-section-title">Why IAS accreditation matters</h2>
            <p className="ias-section-lead">
              IAS accreditation confirms that certification bodies deliver audits with impartial oversight, competent
              personnel, and consistent decision controls across their global operations.
            </p>
          </div>
          <div className="ias-grid ias-value-grid">
            {valueHighlights.map((item) => (
              <article key={item.title} className="ias-card">
                <div className="ias-card-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="ias-card-title">{item.title}</h3>
                <p className="ias-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ias-section">
          <div className="ias-section-head">
            <h2 className="ias-section-title">Accreditation journey</h2>
            <p className="ias-section-lead">
              Understanding the IAS process helps certification bodies prepare the evidence teams will review and the
              witnessed audits IAS will observe.
            </p>
          </div>
          <div className="ias-steps-grid">
            {accreditationJourney.map((step) => (
              <article key={step.step} className="ias-step-card">
                <div className="ias-step-number">{step.step}</div>
                <div className="ias-step-body">
                  <h3 className="ias-step-title">{step.title}</h3>
                  <p className="ias-step-text">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ias-section">
          <div className="ias-section-head">
            <h2 className="ias-section-title">Focus areas</h2>
            <p className="ias-section-lead">
              IAS supports a broad range of conformity assessment activities. We tailor support to match the governance,
              competence, and impartiality requirements of each programme.
            </p>
          </div>
          <div className="ias-grid ias-focus-grid">
            {focusAreas.map((item) => (
              <article key={item.title} className="ias-focus-card">
                <div className="ias-card-icon ias-focus-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="ias-card-title">{item.title}</h3>
                <p className="ias-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ias-section">
          <div className="ias-section-head">
            <h2 className="ias-section-title">Evidence IAS assessors expect</h2>
            <p className="ias-section-lead">
              Prepare these records to demonstrate impartial governance, competence, and continual improvement during IAS
              surveillance.
            </p>
          </div>
          <ul className="ias-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="ias-checklist-item">
                <ClipboardCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        
      </main>

      <footer className="ias-footer">
        <div className="ias-footer-content">
          <h2 className="ias-footer-title">Strengthen confidence with IAS-recognised certification</h2>
          <p className="ias-footer-text">
            Certigence partners with certification bodies to design impartial governance, competence programmes, and
            evidence packs that stand up to IAS assessments.
          </p>
          <div className="ias-footer-actions">
            <a className="ias-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to our accreditation team <ArrowRight size={18} />
            </a>
            <Link className="ias-cta-secondary" to="/authorisations">
              Back to authorisations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IAS;
