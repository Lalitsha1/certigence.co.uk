import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Gauge,
  Workflow,
  Target,
  TrendingUp,
  BarChart3,
  ClipboardList,
  FileCheck,
  Layers,
  LineChart,
  Factory,
  Sparkles,
  Globe2,
  Settings,
  ArrowRight,
} from "lucide-react";
import "../styles/servicespage-css/iso9001.css";
import CountrySelector from "../components/CountrySelector";

const heroStats = [
  { label: "Standard", value: "ISO 9001:2015" },
  { label: "Framework", value: "Quality management system" },
  { label: "Focus", value: "Process excellence" },
  { label: "Ideal for", value: "All industries" },
];

const valueDrivers = [
  {
    icon: ShieldCheck,
    title: "Assured quality",
    description:
      "Embed governance, risk, and compliance controls that stand up to audits and customer scrutiny.",
  },
  {
    icon: Users,
    title: "Engaged teams",
    description:
      "Align leadership and frontline teams around consistent work instructions and feedback loops.",
  },
  {
    icon: Gauge,
    title: "Operational flow",
    description:
      "Map and optimise end-to-end processes to eliminate rework, latency, and hidden waste.",
  },
  {
    icon: TrendingUp,
    title: "Growth-ready",
    description:
      "Use data-driven insights to win bids, expand certifications, and build resilient partnerships.",
  },
];

const systemPillars = [
  {
    icon: Workflow,
    title: "Process architecture",
    text: "Visualise core value streams, interfaces, and ownership so every requirement has a home.",
  },
  {
    icon: Target,
    title: "Policy & objectives",
    text: "Cascade strategy into measurable quality objectives linked to customer and business outcomes.",
  },
  {
    icon: Layers,
    title: "Document control",
    text: "Maintain digital traceability for procedures, records, and revisions across global teams.",
  },
  {
    icon: ClipboardList,
    title: "Risk & opportunity",
    text: "Proactively assess process risks and improvement opportunities using prioritised action logs.",
  },
  {
    icon: LineChart,
    title: "Performance insight",
    text: "Dashboards, KPIs, and management review cadence keep attention on the right indicators.",
  },
  {
    icon: Settings,
    title: "Continuous improvement",
    text: "Structured PDCA cycles, root cause analysis, and lessons learned sustain momentum.",
  },
];

const implementationJourney = [
  {
    step: "01",
    title: "Discover & diagnose",
    detail: "Clarify certification scope, maturity, and stakeholder expectations via rapid assessment workshops.",
  },
  {
    step: "02",
    title: "Design & document",
    detail: "Blueprint process architecture, quality policy, and document stack using tailored templates.",
  },
  {
    step: "03",
    title: "Deploy & train",
    detail: "Roll out procedures, competence matrices, and change readiness training across teams.",
  },
  {
    step: "04",
    title: "Operate & monitor",
    detail: "Run pilots, capture metrics, and close actions from internal audits and management reviews.",
  },
  {
    step: "05",
    title: "Certification support",
    detail: "Coordinate stage 1 & 2 audits, evidence packs, and corrective actions through approval.",
  },
];

const improvementHighlights = [
  {
    icon: Factory,
    title: "Lean workflows",
    copy: "Synchronise production and service delivery with takt-driven planning and standard work.",
  },
  {
    icon: BarChart3,
    title: "Customer intelligence",
    copy: "Capture voice-of-customer signals and route them into prioritised improvement projects.",
  },
  {
    icon: FileCheck,
    title: "Supplier assurance",
    copy: "Qualify and monitor partners with scorecards, corrective actions, and shared KPIs.",
  },
  {
    icon: Sparkles,
    title: "Innovation culture",
    copy: "Empower teams with idea funnels, Kaizen events, and recognition programs that stick.",
  },
];

const evidenceChecklist = [
  "Quality policy cascaded to objectives and KPI dashboards",
  "Process maps with owners, inputs, outputs, and performance criteria",
  "Controlled procedures and records with full revision history",
  "Risk & opportunity register with evaluation and action follow-up",
  "Internal audit programme, reports, and corrective action logs",
  "Management review minutes addressing resources, trends, and decisions",
  "Competence and training records aligned with role expectations",
];

const Iso9001 = () => {
  const standardLabel = heroStats.find((item) => item.label === "Standard")?.value || "ISO 9001";

  return (
    <div className="iso9001-page">
      <header className="iso9001-hero">
        <div className="iso9001-hero-inner">
          <span className="iso9001-hero-eyebrow">Quality management excellence</span>
          <h1 className="iso9001-hero-title">Make ISO 9001 your engine for scalable, repeatable success</h1>
          <p className="iso9001-hero-subtitle">
            We partner with leadership and delivery teams to transform ISO 9001 from a compliance exercise into a
            performance system that protects margins, delights customers, and accelerates growth.
          </p>
          <div className="iso9001-hero-actions">
            <a className="iso9001-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to an ISO 9001 expert <ArrowRight size={18} />
            </a>
            <Link className="iso9001-cta-secondary" to="/contact">
              Request a readiness review
            </Link>
          </div>
          <div className="iso9001-hero-stats">
            {heroStats.map((item) => (
              <article key={item.label} className="iso9001-stat-card">
                <span className="iso9001-stat-label">{item.label}</span>
                <span className="iso9001-stat-value">{item.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="iso9001-main">
        <section className="iso9001-section">
          <div className="iso9001-section-head">
            <h2 className="iso9001-section-title">Why organisations modernise with us</h2>
            <p className="iso9001-section-lead">
              Bring clarity to processes, controls, and metrics with consultants who have embedded ISO 9001 in complex,
              multi-site environments worldwide.
            </p>
          </div>
          <div className="iso9001-grid iso9001-value-grid">
            {valueDrivers.map((driver) => (
              <article key={driver.title} className="iso9001-card">
                <div className="iso9001-card-icon">
                  <driver.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="iso9001-card-title">{driver.title}</h3>
                <p className="iso9001-card-text">{driver.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso9001-section">
          <div className="iso9001-section-head">
            <h2 className="iso9001-section-title">Strengthen every pillar of your QMS</h2>
            <p className="iso9001-section-lead">
              We co-create the playbooks, governance, and insights that keep your quality management system living and
              relevant to strategic decisions.
            </p>
          </div>
          <div className="iso9001-grid iso9001-pillar-grid">
            {systemPillars.map((pillar) => (
              <article key={pillar.title} className="iso9001-pillar-card">
                <div className="iso9001-card-icon iso9001-pillar-icon">
                  <pillar.icon size={30} strokeWidth={1.4} />
                </div>
                <h3 className="iso9001-card-title">{pillar.title}</h3>
                <p className="iso9001-card-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso9001-section">
          <div className="iso9001-section-head">
            <h2 className="iso9001-section-title">Implementation journey</h2>
            <p className="iso9001-section-lead">
              From discovery to certification, our phased programme keeps teams aligned, accountable, and audit-ready.
            </p>
          </div>
          <div className="iso9001-steps-grid">
            {implementationJourney.map((stage) => (
              <article key={stage.step} className="iso9001-step-card">
                <div className="iso9001-step-number">{stage.step}</div>
                <div className="iso9001-step-body">
                  <h3 className="iso9001-step-title">{stage.title}</h3>
                  <p className="iso9001-step-text">{stage.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iso9001-section">
          <div className="iso9001-section-head">
            <h2 className="iso9001-section-title">Where improvement accelerates</h2>
            <p className="iso9001-section-lead">
              Modern ISO 9001 systems fuel smarter operations, procurement rigour, and continuous innovation.
            </p>
          </div>
          <div className="iso9001-grid iso9001-improvement-grid">
            {improvementHighlights.map((item) => (
              <article key={item.title} className="iso9001-improvement-card">
                <div className="iso9001-card-icon iso9001-improvement-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="iso9001-card-title">{item.title}</h3>
                <p className="iso9001-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso9001-section">
          <div className="iso9001-section-head">
            <h2 className="iso9001-section-title">Evidence assessors expect to see</h2>
            <p className="iso9001-section-lead">
              Build confidence with a curated evidence pack that demonstrates control, improvement, and leadership
              ownership.
            </p>
          </div>
          <ul className="iso9001-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="iso9001-checklist-item">
                <ShieldCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <CountrySelector
          serviceName={standardLabel}
          descriptor="Quality Management System (QMS)"
        />
      </main>

      <footer className="iso9001-footer">
        <div className="iso9001-footer-content">
          <h2 className="iso9001-footer-title">Turn ISO 9001 into your competitive advantage</h2>
          <p className="iso9001-footer-text">
            Certigence delivers experienced consultants, proven toolkits, and engaging facilitation so your QMS
            becomes the heartbeat of continuous improvement across every function.
          </p>
          <div className="iso9001-footer-actions">
            <a className="iso9001-cta-primary" href="mailto:info@certigence.co.uk">
              Schedule a discovery call <ArrowRight size={18} />
            </a>
            <Link className="iso9001-cta-secondary" to="/">
              Explore more services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Iso9001;
