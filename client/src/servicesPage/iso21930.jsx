import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Leaf,
  ClipboardList,
  Recycle,
  Database,
  LineChart,
  ShieldCheck,
  FileText,
  Layers,
  BarChart3,
  Globe2,
  Users,
  ArrowRight,
} from "lucide-react";
import "../servicespage-css/iso21930.css";
import CountrySelector from "../components/CountrySelector";

const heroStats = [
  { label: "Standard", value: "ISO 21930:2017" },
  { label: "Framework", value: "Environmental Product Declarations" },
  { label: "LCA Modules", value: "Cradle-to-grave (A1-D)" },
  { label: "Ideal For", value: "Building product manufacturers" },
];

const valueDrivers = [
  {
    icon: FileText,
    title: "Transparent Environmental Declarations",
    description:
      "ISO 21930 defines the structure, indicators, and reporting rules for construction EPDs so stakeholders can compare products using consistent, verifiable data.",
  },
  {
    icon: Layers,
    title: "Life-Cycle Rigor",
    description:
      "Aligns with EN 15804 modules and requires cradle-to-grave assessment, covering impacts from raw material supply through dismantling and recovery.",
  },
  {
    icon: Globe2,
    title: "Global Market Access",
    description:
      "Internationally recognized guidance accelerates entry into green building supply chains and satisfies regional program operators and specifiers.",
  },
  {
    icon: ShieldCheck,
    title: "Proof of Sustainability",
    description:
      "Backed by independent verification and PCR alignment, the standard demonstrates due diligence for ESG reporting, tenders, and credit programs.",
  },
];

const lifecycleModules = [
  {
    icon: Building2,
    code: "Module A",
    title: "Product Stage",
    description: "Raw material supply (A1), transport (A2), and manufacturing (A3) establishing the baseline carbon footprint.",
  },
  {
    icon: Users,
    code: "Module B",
    title: "Use Stage",
    description: "Operational impacts including maintenance, repair, replacement, refurbishment, and operational energy or water.",
  },
  {
    icon: Recycle,
    code: "Module C",
    title: "End of Life Stage",
    description: "Deconstruction, transport, waste processing, and disposal scenarios to capture real-world end-of-life outcomes.",
  },
  {
    icon: Leaf,
    code: "Module D",
    title: "Beyond the System Boundary",
    description: "Benefits and loads from reuse, recovery, or recycling that occur after the product leaves the system boundary.",
  },
];

const serviceDeliverables = [
  {
    icon: ClipboardList,
    title: "Gap Assessment & PCR Mapping",
    description: "Detailed review of existing documentation against relevant Product Category Rules (PCR) and ISO 21930 clauses.",
  },
  {
    icon: Database,
    title: "Life-Cycle Inventory Model",
    description: "Robust data model built with primary and secondary datasets, allocation rules, and transport calculations ready for LCA tools.",
  },
  {
    icon: LineChart,
    title: "Impact Hotspot Dashboard",
    description: "Clear visual breakdown of impact categories (GWP, ODP, AP, EP, POCP, ADP) to drive improvement priorities.",
  },
  {
    icon: BarChart3,
    title: "EPD Draft & Verification Support",
    description: "Publication-ready EPD narrative, data tables, and guidance for third-party critical review and program submission.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Kick-off & Scope Definition",
    description: "Confirm product families, functional units, reference service life, and applicable PCR requirements.",
  },
  {
    step: "02",
    title: "Data Collection & LCI Build",
    description: "Gather bill of materials, energy, packaging, logistics, and end-of-life assumptions with supplier engagement templates.",
  },
  {
    step: "03",
    title: "LCA Modeling & Validation",
    description: "Populate LCA software, test allocation methods, and benchmark against industry datasets for plausibility.",
  },
  {
    step: "04",
    title: "Results Interpretation",
    description: "Translate impact indicators into actionable insights, identify hotspots, and develop reduction roadmaps.",
  },
  {
    step: "05",
    title: "EPD Authoring & Review",
    description: "Draft ISO 21930-compliant disclosure, align graphics, and prepare annexes for verifier review.",
  },
  {
    step: "06",
    title: "Publication & Market Launch",
    description: "Coordinate with program operators, finalize declarations, and enable sales and marketing teams with summary collateral.",
  },
];

const documentationChecklist = [
  "Product category rules (PCR) and supplemental requirements",
  "Manufacturing flow diagrams and process descriptions",
  "Bill of materials with sourcing and recycled content data",
  "Utility consumption, emission factors, and waste treatment records",
  "Transportation modes, distances, and packaging specifications",
  "Use-phase assumptions, maintenance scenarios, and end-of-life pathways",
];

const faqs = [
  {
    question: "What does ISO 21930 cover?",
    answer: "It sets core rules for environmental product declarations (EPDs) of building products, ensuring consistent life-cycle inventory, impact assessment, and reporting.",
  },
  {
    question: "How does ISO 21930 relate to EN 15804?",
    answer: "ISO 21930 is harmonized with EN 15804. Many regional programs rely on EN 15804 PCRs, and ISO 21930 clarifies how to apply them globally.",
  },
  {
    question: "Do we need third-party verification?",
    answer: "While ISO 21930 encourages independent verification for credibility, program operators or green building schemes may mandate third-party review.",
  },
  {
    question: "How long does an EPD project take?",
    answer: "Typical timelines range from 12 to 20 weeks depending on data maturity, number of product variations, and verification scheduling.",
  },
  {
    question: "Can ISO 21930 help with ESG reporting?",
    answer: "Yes. Quantified life-cycle impacts support Scope 3 reporting, sustainable procurement criteria, and stakeholder transparency commitments.",
  },
];

const Iso21930 = () => {
  return (
    <div className="iso21930-page">
      <header className="iso21930-hero">
        <div className="iso21930-hero-inner">
          <span className="iso21930-hero-eyebrow">Sustainability in Building Construction</span>
          <h1 className="iso21930-hero-title">ISO 21930 Environmental Declarations for Building Products</h1>
          <p className="iso21930-hero-subtitle">
            ISO 21930:2017 provides the internationally agreed rules for disclosing life-cycle impacts of construction products. We help you turn complex data into verified environmental product declarations (EPDs) that resonate with architects, developers, and green building schemes.
          </p>
          <div className="iso21930-hero-cta">
            <a className="iso21930-cta-primary" href="mailto:info@certigence.co.uk">
              Request a consultation <ArrowRight size={18} />
            </a>
            <Link className="iso21930-cta-secondary" to="/">
              Back to home
            </Link>
          </div>
          <div className="iso21930-hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="iso21930-stat-card">
                <span className="iso21930-stat-label">{stat.label}</span>
                <span className="iso21930-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="iso21930-main">
        <section className="iso21930-section">
          <div className="iso21930-section-head">
            <h2 className="iso21930-section-title">Why ISO 21930 matters</h2>
            <p className="iso21930-section-lead">
              Gain a defensible sustainability narrative backed by life-cycle science. ISO 21930 ensures your environmental declarations follow standardized rules, enabling specifiers to trust the numbers and differentiating your products in low-carbon procurement.
            </p>
          </div>
          <div className="iso21930-grid iso21930-value-grid">
            {valueDrivers.map((item) => (
              <article key={item.title} className="iso21930-value-card">
                <div className="iso21930-card-icon">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="iso21930-card-title">{item.title}</h3>
                <p className="iso21930-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21930-section">
          <div className="iso21930-section-head">
            <h2 className="iso21930-section-title">Life-cycle modules covered</h2>
            <p className="iso21930-section-lead">
              ISO 21930 aligns with the modular structure used in building declarations. Each module captures a different phase in the product journey, enabling transparent comparison and hotspot targeting.
            </p>
          </div>
          <div className="iso21930-grid iso21930-module-grid">
            {lifecycleModules.map((module) => (
              <article key={module.code} className="iso21930-module-card">
                <div className="iso21930-module-icon">
                  <module.icon size={34} strokeWidth={1.4} />
                </div>
                <div className="iso21930-module-meta">
                  <span className="iso21930-module-code">{module.code}</span>
                  <h3 className="iso21930-module-title">{module.title}</h3>
                </div>
                <p className="iso21930-module-text">{module.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21930-section">
          <div className="iso21930-section-head">
            <h2 className="iso21930-section-title">What you receive</h2>
            <p className="iso21930-section-lead">
              From data diagnostics to verification support, our methodology gives your teams the evidence, tooling, and messaging needed to release a credible EPD aligned with ISO 21930.
            </p>
          </div>
          <div className="iso21930-grid iso21930-deliverable-grid">
            {serviceDeliverables.map((deliverable) => (
              <article key={deliverable.title} className="iso21930-deliverable-card">
                <div className="iso21930-card-icon iso21930-deliverable-icon">
                  <deliverable.icon size={32} strokeWidth={1.6} />
                </div>
                <h3 className="iso21930-card-title">{deliverable.title}</h3>
                <p className="iso21930-card-text">{deliverable.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21930-section">
          <div className="iso21930-section-head">
            <h2 className="iso21930-section-title">Implementation roadmap</h2>
            <p className="iso21930-section-lead">
              A structured, audit-ready approach keeps your project on schedule and minimizes rework once third-party verification begins.
            </p>
          </div>
          <div className="iso21930-steps-grid">
            {implementationSteps.map((item) => (
              <article key={item.step} className="iso21930-step-card">
                <div className="iso21930-step-number">{item.step}</div>
                <div className="iso21930-step-body">
                  <h3 className="iso21930-step-title">{item.title}</h3>
                  <p className="iso21930-step-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21930-section">
          <div className="iso21930-section-head">
            <h2 className="iso21930-section-title">Evidence checklist</h2>
            <p className="iso21930-section-lead">
              Preparing these records early prevents delays during verification and ensures your LCA model stands up to scrutiny.
            </p>
          </div>
          <ul className="iso21930-checklist">
            {documentationChecklist.map((item) => (
              <li key={item} className="iso21930-checklist-item">
                <ShieldCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="iso21930-section">
          <div className="iso21930-section-head">
            <h2 className="iso21930-section-title">Frequently asked questions</h2>
            <p className="iso21930-section-lead">
              Still evaluating the standard? Explore the essentials our clients ask before launching an environmental declaration project.
            </p>
          </div>
          <div className="iso21930-faq-grid">
            {faqs.map((item) => (
              <article key={item.question} className="iso21930-faq-card">
                <h3 className="iso21930-faq-question">{item.question}</h3>
                <p className="iso21930-faq-answer">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      <CountrySelector
        serviceName="ISO 21930"
      />
      </main>

      <footer className="iso21930-footer">
        <div className="iso21930-footer-content">
          <h2 className="iso21930-footer-title">Bring your product story to life with a verified EPD</h2>
          <p className="iso21930-footer-text">
            Certigence guides manufacturers through ISO 21930 projects with experienced LCA practitioners, industry benchmarks, and verifier-ready documentation.
          </p>
          <div className="iso21930-footer-actions">
            <a className="iso21930-cta-primary" href="mailto:info@certigence.co.uk">
              Start a discovery call <ArrowRight size={18} />
            </a>
            <Link className="iso21930-cta-secondary" to="/">
              Return to home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Iso21930;
