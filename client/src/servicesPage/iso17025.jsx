import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Gauge,
  FileSearch,
  Workflow,
  Microscope,
  ClipboardCheck,
  Settings2,
  Users,
  Layers,
  ScrollText,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  LineChart,
  Sparkles,
  Library,
  TestTube,
  Timer,
  ArrowRight,
} from "lucide-react";
import "../servicespage-css/iso17025.css";
import CountrySelector from "../components/CountrySelector";

const heroStats = [
  { label: "Standard", value: "ISO/IEC 17025:2017" },
  { label: "Scope", value: "Testing & calibration laboratories" },
  { label: "Core proof", value: "Technical competence" },
  { label: "Recognition", value: "Supports ILAC-MRA" },
];

const valueDrivers = [
  {
    icon: ShieldCheck,
    title: "Defensible laboratory results",
    description:
      "Structured controls for impartiality, confidentiality, and method validation underpin every certificate you issue.",
  },
  {
    icon: FileSearch,
    title: "Traceable evidence trail",
    description:
      "Documented procedures, uncertainty budgets, and equipment histories withstand regulator and customer scrutiny.",
  },
  {
    icon: Gauge,
    title: "Measurement confidence",
    description:
      "Metrological traceability links instruments to national standards so reported values stay accurate and comparable.",
  },
  {
    icon: Workflow,
    title: "Operational discipline",
    description:
      "Process mapping, risk controls, and competence matrices keep daily testing consistent through staff or volume changes.",
  },
];

const competencePillars = [
  {
    icon: Microscope,
    title: "Method mastery",
    text: "Validated methods with ongoing proficiency checks and inter-lab comparisons safeguard analytical integrity.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality monitoring",
    text: "Internal audits, control charts, and corrective action tracking surface issues before they impact customers.",
  },
  {
    icon: Settings2,
    title: "Equipment control",
    text: "Calibration, maintenance, and metrology traceability records keep critical equipment performing within limits.",
  },
  {
    icon: Users,
    title: "Competence management",
    text: "Role-specific training, authorisations, and witness assessments demonstrate impartial, qualified personnel.",
  },
];

const serviceModules = [
  {
    icon: Layers,
    title: "Gap analysis & roadmap",
    description:
      "Clause-by-clause review with maturity scoring, quick wins, and a prioritised roadmap aligned to accreditation timelines.",
  },
  {
    icon: ScrollText,
    title: "Laboratory QMS build",
    description:
      "Procedure drafting, uncertainty templates, risk registers, and document control frameworks tailored to your scope.",
  },
  {
    icon: BarChart3,
    title: "Data & metrics enablement",
    description:
      "Dashboards for proficiency results, nonconformities, and turnaround time help leadership steer continual improvement.",
  },
  {
    icon: CheckCircle2,
    title: "Accreditation coaching",
    description:
      "Mock assessments, evidence packing, and assessor briefings prepare teams for accreditation body evaluations.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Discovery & scope confirmation",
    description:
      "Clarify laboratory activities, locations, subcontractors, and customer expectations to define the accreditation scope.",
  },
  {
    step: "02",
    title: "Baseline analysis",
    description:
      "Review existing SOPs, calibration records, and quality controls to identify conformity gaps and risks.",
  },
  {
    step: "03",
    title: "System build",
    description:
      "Co-create procedures, records, and competence frameworks with laboratory leads and technical managers.",
  },
  {
    step: "04",
    title: "Implementation sprints",
    description:
      "Coach teams through method validation, uncertainty calculations, and internal audit drills.",
  },
  {
    step: "05",
    title: "Assessment readiness",
    description:
      "Execute management review, compile application packs, and rehearse assessor interviews with actionable feedback.",
  },
];

const evidenceChecklist = [
  "Documented impartiality risk assessment with mitigation actions",
  "Competence matrix referencing training, authorisations, and witnessed activities",
  "Equipment calibration certificates with traceability to national standards",
  "Method validation and verification records including uncertainty budgets",
  "Internal audit reports, corrective actions, and effectiveness reviews",
  "Proficiency testing or inter-lab comparison results with analysis",
  "Management review minutes covering resources, risks, and improvement opportunities",
];

const qualityHighlights = [
  {
    icon: ClipboardList,
    title: "Integrated risk-based thinking",
    text: "Risk registers link technical, operational, and impartiality controls so mitigation plans stay visible and owned.",
  },
  {
    icon: LineChart,
    title: "Performance transparency",
    text: "KPIs across turnaround time, repeat analysis, and customer feedback keep focus on service delivery outcomes.",
  },
  {
    icon: Sparkles,
    title: "Culture of continual improvement",
    text: "Improvement logs, lessons learned, and knowledge sharing sessions build resilient laboratory habits.",
  },
];

const faqs = [
  {
    question: "How long does ISO 17025 implementation typically take?",
    answer:
      "Most laboratories achieve accreditation readiness within 4-8 months depending on existing quality systems, method complexity, and staffing availability.",
  },
  {
    question: "Do we need dedicated software to comply?",
    answer:
      "Purpose-built LIMS or QMS tools help, but well-governed spreadsheets and document control platforms can comply if responsibilities and versioning are clear.",
  },
  {
    question: "What if we outsource calibration or testing?",
    answer:
      "ISO 17025 permits subcontracting when evaluated and approved; supplier qualification and record review remain your responsibility.",
  },
  {
    question: "Can we extend scope after accreditation?",
    answer:
      "Yes. Maintain validation evidence and competence records for new methods, then request a scope extension assessment from your accreditation body.",
  },
];

const labScenarios = [
  {
    icon: Library,
    title: "Regulatory laboratories",
    description:
      "Demonstrate impartial enforcement and reproducible results that stand up in court or regulatory proceedings.",
  },
  {
    icon: TestTube,
    title: "Industrial QA labs",
    description:
      "Support product release decisions with trusted data that aligns with customer and OEM requirements.",
  },
  {
    icon: Timer,
    title: "Fast-turnaround testing",
    description:
      "Balance rapid throughput with controls that protect validity under time pressure and shift changes.",
  },
];

const Iso17025 = () => {
  return (
    <div className="iso17025-page">
      <header className="iso17025-hero">
        <div className="iso17025-hero-inner">
          <span className="iso17025-hero-eyebrow">Testing & calibration excellence</span>
          <h1 className="iso17025-hero-title">
            Build an ISO 17025 laboratory that customers and regulators trust
          </h1>
          <p className="iso17025-hero-subtitle">
            We guide laboratories through the practical steps of ISO/IEC 17025 implementation - designing quality systems, validating methods, and coaching teams so accreditation visits run smoothly.
          </p>
          <div className="iso17025-hero-actions">
            <a className="iso17025-cta-primary" href="mailto:info@certigence.co.uk">
              Talk to a 17025 specialist <ArrowRight size={18} />
            </a>
            <Link className="iso17025-cta-secondary" to="/contact">
              Request a readiness review
            </Link>
          </div>
          <div className="iso17025-hero-stats">
            {heroStats.map((item) => (
              <article key={item.label} className="iso17025-stat-card">
                <span className="iso17025-stat-label">{item.label}</span>
                <span className="iso17025-stat-value">{item.value}</span>
              </article>
            ))}
          </div>
        </div>
      </header>

      <main className="iso17025-main">
        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Why laboratories choose ISO 17025 support from Certigence</h2>
            <p className="iso17025-section-lead">
              Translate the standard into practical controls, records, and coaching delivered by consultants who have led assessments across chemical, mechanical, and calibration labs.
            </p>
          </div>
          <div className="iso17025-grid iso17025-card-grid">
            {valueDrivers.map((item) => (
              <article key={item.title} className="iso17025-card">
                <div className="iso17025-card-icon">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="iso17025-card-title">{item.title}</h3>
                <p className="iso17025-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Pillars of an accredited laboratory</h2>
            <p className="iso17025-section-lead">
              We co-develop the practices and records assessors expect to see when evaluating competence and impartiality.
            </p>
          </div>
          <div className="iso17025-grid iso17025-pillar-grid">
            {competencePillars.map((pillar) => (
              <article key={pillar.title} className="iso17025-pillar-card">
                <div className="iso17025-card-icon iso17025-pillar-icon">
                  <pillar.icon size={30} strokeWidth={1.4} />
                </div>
                <h3 className="iso17025-card-title">{pillar.title}</h3>
                <p className="iso17025-card-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Service modules</h2>
            <p className="iso17025-section-lead">
              Select a full implementation partnership or targeted interventions to close priority gaps before assessment.
            </p>
          </div>
          <div className="iso17025-grid iso17025-service-grid">
            {serviceModules.map((service) => (
              <article key={service.title} className="iso17025-service-card">
                <div className="iso17025-card-icon iso17025-service-icon">
                  <service.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className="iso17025-card-title">{service.title}</h3>
                <p className="iso17025-card-text">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Implementation roadmap</h2>
            <p className="iso17025-section-lead">
              A structured programme keeps your team on track from initial readiness assessment through accreditation visits.
            </p>
          </div>
          <div className="iso17025-steps-grid">
            {implementationSteps.map((step) => (
              <article key={step.step} className="iso17025-step-card">
                <div className="iso17025-step-number">{step.step}</div>
                <div className="iso17025-step-body">
                  <h3 className="iso17025-step-title">{step.title}</h3>
                  <p className="iso17025-step-text">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Evidence assessors look for</h2>
            <p className="iso17025-section-lead">
              We help compile, organise, and present the artefacts that demonstrate competence, impartiality, and continual improvement.
            </p>
          </div>
          <ul className="iso17025-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="iso17025-checklist-item">
                <ShieldCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Laboratory scenarios we support</h2>
            <p className="iso17025-section-lead">
              From public health testing to aerospace component calibration, our consultants adapt ISO 17025 requirements to real-world environments.
            </p>
          </div>
          <div className="iso17025-grid iso17025-scenario-grid">
            {labScenarios.map((scenario) => (
              <article key={scenario.title} className="iso17025-scenario-card">
                <div className="iso17025-card-icon iso17025-scenario-icon">
                  <scenario.icon size={30} strokeWidth={1.4} />
                </div>
                <h3 className="iso17025-card-title">{scenario.title}</h3>
                <p className="iso17025-card-text">{scenario.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Quality system highlights</h2>
            <p className="iso17025-section-lead">
              Embed routines that keep your management system living long after the accreditation visit.
            </p>
          </div>
          <div className="iso17025-grid iso17025-quality-grid">
            {qualityHighlights.map((item) => (
              <article key={item.title} className="iso17025-quality-card">
                <div className="iso17025-card-icon iso17025-quality-icon">
                  <item.icon size={30} strokeWidth={1.4} />
                </div>
                <h3 className="iso17025-card-title">{item.title}</h3>
                <p className="iso17025-card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso17025-section">
          <div className="iso17025-section-head">
            <h2 className="iso17025-section-title">Frequently asked questions</h2>
            <p className="iso17025-section-lead">
              The clarity you need before launching your ISO 17025 project.
            </p>
          </div>
          <div className="iso17025-grid iso17025-faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="iso17025-faq-card">
                <h3 className="iso17025-faq-question">{faq.question}</h3>
                <p className="iso17025-faq-answer">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      <CountrySelector
        serviceName="ISO 17025"
      />
      </main>

      <footer className="iso17025-footer">
        <div className="iso17025-footer-content">
          <h2 className="iso17025-footer-title">Accreditation-ready, without the guesswork</h2>
          <p className="iso17025-footer-text">
            Certigence provides experienced consultants, proven templates, and on-site coaching so your laboratory meets ISO/IEC 17025 requirements with confidence.
          </p>
          <div className="iso17025-footer-actions">
            <a className="iso17025-cta-primary" href="mailto:info@certigence.co.uk">
              Schedule a discovery call <ArrowRight size={18} />
            </a>
            <Link className="iso17025-cta-secondary" to="/">
              Explore more services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Iso17025;






