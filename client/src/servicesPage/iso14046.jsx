import React from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  Waves,
  Recycle,
  BarChart3,
  ClipboardCheck,
  Gauge,
  Globe2,
  ShieldCheck,
  Factory,
  LineChart,
  Layers,
  Database,
  Sparkles,
  Settings,
  FileText,
  ArrowRight,
} from "lucide-react";
import "../servicespage-css/iso14046.css";
import CountrySelector from "../components/CountrySelector";

const heroStats = [
  { label: "Standard", value: "ISO 14046:2014" },
  { label: "Scope", value: "Water footprint assessment" },
  { label: "Approach", value: "Life cycle perspective" },
  { label: "Ideal for", value: "Water-intensive sectors" },
];

const valueDrivers = [
  {
    icon: Droplets,
    title: "Quantify water impacts",
    description:
      "Measure water scarcity, degradation, and consumption across operations and value chains using globally harmonised indicators.",
  },
  {
    icon: Waves,
    title: "Protect critical basins",
    description:
      "Identify hotspots in stressed catchments and prioritise interventions that safeguard shared resources for communities and ecosystems.",
  },
  {
    icon: Gauge,
    title: "Target efficiency",
    description:
      "Benchmark water use against peers, set reduction targets, and track performance improvement over time.",
  },
  {
    icon: ShieldCheck,
    title: "Proof for stakeholders",
    description:
      "Demonstrate responsible stewardship to regulators, investors, and supply chain partners with verifiable data.",
  },
];

const assessmentComponents = [
  {
    icon: Layers,
    title: "Goal & scope definition",
    text: "Clarify functional units, system boundaries, spatial resolution, and intended applications of your assessment.",
  },
  {
    icon: Database,
    title: "Inventory analysis",
    text: "Collect quality-assured water input and output data across processes, suppliers, and product life cycles.",
  },
  {
    icon: BarChart3,
    title: "Impact assessment",
    text: "Apply characterisation models to translate water use into scarcity, quality, and availability indicators.",
  },
  {
    icon: FileText,
    title: "Interpretation",
    text: "Evaluate significance, data sensitivity, and uncertainty to drive actionable recommendations.",
  },
];

const implementationJourney = [
  {
    step: "01",
    title: "Diagnostic & intent",
    detail: "Align stakeholders on objectives, scope, and governance for your ISO 14046 programme.",
  },
  {
    step: "02",
    title: "Data mapping",
    detail: "Build inventory templates, supplier engagement plans, and quality criteria for water-related data streams.",
  },
  {
    step: "03",
    title: "Modelling & analysis",
    detail: "Model water footprint scenarios, assess hotspot basins, and stress-test mitigation options.",
  },
  {
    step: "04",
    title: "Strategy integration",
    detail: "Embed outcomes into corporate water stewardship, ESG disclosures, and target-setting frameworks.",
  },
  {
    step: "05",
    title: "Verification support",
    detail: "Prepare evidence packs, reviewer briefs, and continuous improvement roadmaps for audit success.",
  },
];

const opportunityHighlights = [
  {
    icon: Factory,
    title: "Process optimisation",
    copy: "Optimise cooling, cleaning, and production water loops with best-available technologies and monitoring.",
  },
  {
    icon: Recycle,
    title: "Circular use",
    copy: "Implement reuse, recycling, and alternative water sources to reduce freshwater withdrawals.",
  },
  {
    icon: LineChart,
    title: "Basin partnerships",
    copy: "Collaborate with local stakeholders on watershed restoration, shared infrastructure, and resilience.",
  },
  {
    icon: Sparkles,
    title: "Innovation pipeline",
    copy: "Accelerate R&D projects focused on low-water products, digital twins, and smart irrigation.",
  },
];

const evidenceChecklist = [
  "Documented goal, scope, and system boundary for each assessment",
  "Water inventory dataset with sources, quality ratings, and temporal coverage",
  "Impact assessment calculations, models, and sensitivity analyses",
  "Hotspot basin profiles with stakeholder engagement records",
  "Mitigation action plans linked to KPIs and responsibilities",
  "Verification records, reviewer feedback, and corrective actions",
  "Public disclosures or sustainability reports aligned with findings",
];

const Iso14046 = () => {
  return (
    <div className="iso14046-page">
      <header className="iso14046-hero">
        <div className="iso14046-hero-inner">
          <span className="iso14046-hero-eyebrow">Water stewardship leadership</span>
          <h1 className="iso14046-hero-title">Turn ISO 14046 into actionable water intelligence</h1>
          <p className="iso14046-hero-subtitle">
            Certigence helps organisations quantify water footprints, protect sensitive basins, and integrate water
            stewardship into ESG commitments using ISO 14046 best practice.
          </p>
          <div className="iso14046-hero-actions">
            <a className="iso14046-cta-primary" href="mailto:info@certigence.co.uk">
              Speak with a water footprint specialist <ArrowRight size={18} />
            </a>
            <Link className="iso14046-cta-secondary" to="/contact">
              Request a scoping workshop
            </Link>
          </div>
          <div className="iso14046-hero-stats">
            {heroStats.map((item) => (
              <article key={item.label} className="iso14046-stat-card">
                <span className="iso14046-stat-label">{item.label}</span>
                <span className="iso14046-stat-value">{item.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="iso14046-main">
        <section className="iso14046-section">
          <div className="iso14046-section-head">
            <h2 className="iso14046-section-title">Why organisations pursue ISO 14046</h2>
            <p className="iso14046-section-lead">
              Water stewardship is now a board-level imperative. Our consultants connect ISO 14046 with strategy,
              operations, and stakeholder expectations to unlock measurable value.
            </p>
          </div>
          <div className="iso14046-grid iso14046-value-grid">
            {valueDrivers.map((driver) => (
              <article key={driver.title} className="iso14046-card">
                <div className="iso14046-card-icon">
                  <driver.icon size={32} strokeWidth={1.6} />
                </div>
                <h3 className="iso14046-card-title">{driver.title}</h3>
                <p className="iso14046-card-text">{driver.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso14046-section">
          <div className="iso14046-section-head">
            <h2 className="iso14046-section-title">Core components of a water footprint assessment</h2>
            <p className="iso14046-section-lead">
              Build a credible assessment that captures local context, science-based indicators, and clear interpretation for decision makers.
            </p>
          </div>
          <div className="iso14046-grid iso14046-component-grid">
            {assessmentComponents.map((component) => (
              <article key={component.title} className="iso14046-component-card">
                <div className="iso14046-card-icon iso14046-component-icon">
                  <component.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="iso14046-card-title">{component.title}</h3>
                <p className="iso14046-card-text">{component.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso14046-section">
          <div className="iso14046-section-head">
            <h2 className="iso14046-section-title">Implementation journey</h2>
            <p className="iso14046-section-lead">
              A phased approach keeps stakeholders engaged while ensuring data quality, basin relevance, and rapid time to insight.
            </p>
          </div>
          <div className="iso14046-steps-grid">
            {implementationJourney.map((stage) => (
              <article key={stage.step} className="iso14046-step-card">
                <div className="iso14046-step-number">{stage.step}</div>
                <div className="iso14046-step-body">
                  <h3 className="iso14046-step-title">{stage.title}</h3>
                  <p className="iso14046-step-text">{stage.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iso14046-section">
          <div className="iso14046-section-head">
            <h2 className="iso14046-section-title">Where opportunity expands</h2>
            <p className="iso14046-section-lead">
              Use water footprint insights to improve processes, strengthen basin partnerships, and invest in innovation.
            </p>
          </div>
          <div className="iso14046-grid iso14046-opportunity-grid">
            {opportunityHighlights.map((item) => (
              <article key={item.title} className="iso14046-opportunity-card">
                <div className="iso14046-card-icon iso14046-opportunity-icon">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="iso14046-card-title">{item.title}</h3>
                <p className="iso14046-card-text">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso14046-section">
          <div className="iso14046-section-head">
            <h2 className="iso14046-section-title">Evidence assessors expect to see</h2>
            <p className="iso14046-section-lead">
              Prepare for verification with curated documentation that proves robustness, transparency, and follow-through.
            </p>
          </div>
          <ul className="iso14046-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="iso14046-checklist-item">
                <ShieldCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      <CountrySelector
        serviceName="ISO 14046"
      />
      </main>

      <footer className="iso14046-footer">
        <div className="iso14046-footer-content">
          <h2 className="iso14046-footer-title">Lead with transparent water stewardship</h2>
          <p className="iso14046-footer-text">
            From data collection to basin action plans, Certigence equips your teams to deliver ISO 14046 assessments
            that resonate with customers, regulators, and communities.
          </p>
          <div className="iso14046-footer-actions">
            <a className="iso14046-cta-primary" href="mailto:info@certigence.co.uk">
              Schedule a discovery call <ArrowRight size={18} />
            </a>
            <Link className="iso14046-cta-secondary" to="/">
              Explore more services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Iso14046;
