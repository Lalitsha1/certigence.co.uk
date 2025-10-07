import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ClipboardList,
  Factory,
  Package,
  Warehouse,
  Truck,
  Users,
  Sparkles,
  Gauge,
  AlarmCheck,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import "../styles/fssc.css";

const heroStats = [
  { label: "Standard", value: "FSSC 22000 v6" },
  { label: "Framework", value: "ISO 22000 + PRPs" },
  { label: "Recognition", value: "GFSI benchmarked" },
  { label: "Cycle", value: "3-year certification" },
];

const valueDrivers = [
  {
    icon: ShieldCheck,
    title: "Global food safety proof",
    copy: "Demonstrate internationally recognised controls to regulators, retailers, and brand owners.",
  },
  {
    icon: Sparkles,
    title: "Brand protection",
    copy: "Reduce recall risk through traceability, hazard analysis, and corrective action discipline.",
  },
  {
    icon: Users,
    title: "Customer confidence",
    copy: "Win supplier approvals and respond to customer audits with a unified certification.",
  },
  {
    icon: Gauge,
    title: "Process optimisation",
    copy: "Embed KPIs, verification routines, and continual improvement across production lines.",
  },
];

const lifecycleSteps = [
  {
    step: "01",
    title: "Scope & gap analysis",
    detail: "Define product categories, site boundaries, and maturity baseline against FSSC requirements.",
  },
  {
    step: "02",
    title: "PRP implementation",
    detail: "Deploy ISO/TS 22002 prerequisite programmes tailored to manufacturing, packaging, or storage.",
  },
  {
    step: "03",
    title: "FSMS integration",
    detail: "Combine HACCP studies, hazard controls, and management system procedures within ISO 22000.",
  },
  {
    step: "04",
    title: "Readiness & audits",
    detail: "Run internal audits, management review, and evidence packing before Stage 1 & Stage 2 audits.",
  },
  {
    step: "05",
    title: "Continual improvement",
    detail: "Maintain surveillance, supplier monitoring, and food defence/vulnerability updates annually.",
  },
];

const scopeCoverage = [
  {
    icon: Factory,
    title: "Food manufacturing",
    text: "Primary and processed food manufacturers managing ambient, chilled, or frozen products.",
  },
  {
    icon: Package,
    title: "Packaging producers",
    text: "Suppliers of food contact packaging materials implementing ISO/TS 22002-4 controls.",
  },
  {
    icon: Warehouse,
    title: "Storage & distribution",
    text: "Cold-chain, logistics hubs, and warehouses responsible for product integrity.",
  },
  {
    icon: Truck,
    title: "Transport & logistics",
    text: "Hauliers and carriers managing hygiene, temperature, and traceability on the move.",
  },
];

const evidenceChecklist = [
  "Approved PRP procedures mapped to ISO/TS 22002 or BSI PAS hygiene codes",
  "Documented hazard analysis, CCP monitoring plans, and verification records",
  "Food defence and food fraud vulnerability assessments with mitigation actions",
  "Internal audit programme with findings, corrections, and effectiveness checks",
  "Supplier qualification, monitoring results, and incoming material controls",
  "Traceability tests, recall simulations, and incident management reports",
  "Management review minutes covering performance, resources, and improvement decisions",
];

const FSSC22000 = () => {
  return (
    <div className="fssc-page">
      <header className="fssc-hero">
        <div className="fssc-hero-inner">
          <span className="fssc-tag">Food Safety System Certification</span>
          <h1 className="fssc-title">FSSC 22000: Globally trusted food safety assurance</h1>
          <p className="fssc-subtitle">
            Certigence guides food manufacturers, packaging plants, and logistics providers through FSSC 22000
            certification with practical implementation support, internal audit coaching, and auditor-ready evidence packs.
          </p>
          <div className="fssc-stats">
            {heroStats.map((item) => (
              <article key={item.label} className="fssc-stat-card">
                <span className="fssc-stat-label">{item.label}</span>
                <span className="fssc-stat-value">{item.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="fssc-main">
        <section className="fssc-section">
          <div className="fssc-section-head">
            <h2 className="fssc-section-title">Why organisations choose FSSC 22000</h2>
            <p className="fssc-section-lead">
              FSSC 22000 combines ISO 22000, sector-specific prerequisite programmes, and FSSC additional requirements to
              deliver a comprehensive, certifiable food safety management system recognised by the GFSI.
            </p>
          </div>
          <div className="fssc-grid fssc-value-grid">
            {valueDrivers.map((item) => (
              <article key={item.title} className="fssc-card">
                <div className="fssc-card-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="fssc-card-title">{item.title}</h3>
                <p className="fssc-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fssc-section">
          <div className="fssc-section-head">
            <h2 className="fssc-section-title">Implementation journey</h2>
            <p className="fssc-section-lead">
              Our phased programme keeps stakeholders aligned from initial scoping to surveillance audits, ensuring every
              clause and PRP is embedded in day-to-day operations.
            </p>
          </div>
          <div className="fssc-steps-grid">
            {lifecycleSteps.map((step) => (
              <article key={step.step} className="fssc-step-card">
                <div className="fssc-step-number">{step.step}</div>
                <div className="fssc-step-body">
                  <h3 className="fssc-step-title">{step.title}</h3>
                  <p className="fssc-step-text">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fssc-section">
          <div className="fssc-section-head">
            <h2 className="fssc-section-title">Industries & scope coverage</h2>
            <p className="fssc-section-lead">
              FSSC 22000 spans the entire food supply chain. We tailor prerequisite programmes to the realities of each
              sector9s hygiene, infrastructure, and regulatory obligations.
            </p>
          </div>
          <div className="fssc-grid fssc-scope-grid">
            {scopeCoverage.map((item) => (
              <article key={item.title} className="fssc-scope-card">
                <div className="fssc-card-icon fssc-scope-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="fssc-card-title">{item.title}</h3>
                <p className="fssc-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fssc-section">
          <div className="fssc-section-head">
            <h2 className="fssc-section-title">Evidence assessors expect to see</h2>
            <p className="fssc-section-lead">
              Build confidence ahead of Stage 1 and Stage 2 audits with documentation that demonstrates control,
              traceability, and continual improvement.
            </p>
          </div>
          <ul className="fssc-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="fssc-checklist-item">
                <ClipboardCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        
      </main>

      <footer className="fssc-footer">
        <div className="fssc-footer-content">
          <h2 className="fssc-footer-title">Ready to elevate your food safety system?</h2>
          <p className="fssc-footer-text">
            Partner with Certigence to plan, implement, and maintain a resilient FSSC 22000 programme that protects your
            brand and satisfies customers worldwide.
          </p>
          <div className="fssc-footer-actions">
            <a className="fssc-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to a consultant <ArrowRight size={18} />
            </a>
            <Link className="fssc-cta-secondary" to="/authorisations">
              Back to authorisations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FSSC22000;
