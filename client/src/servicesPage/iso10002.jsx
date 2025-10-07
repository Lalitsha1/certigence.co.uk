import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  Gauge,
  Globe2,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import "../servicespage-css/iso10002.css";
import CountrySelector from "../components/CountrySelector";

const heroStats = [
  { label: "Standard", value: "ISO 10002:2018" },
  { label: "Orientation", value: "Customer voice & retention" },
  { label: "Engagement length", value: "8-12 weeks" },
  { label: "Stakeholders", value: "CX, Ops, Compliance" },
];

const transformationAreas = [
  {
    icon: MessageSquare,
    title: "Omnichannel listening",
    copy: "Connect call centre, social, and in-app feedback into one taxonomy so stories never fall through the cracks.",
  },
  {
    icon: Globe2,
    title: "Regulatory confidence",
    copy: "Align with FCA, Ofgem, NHS or sector regulators by evidencing fair treatment, accessibility, and data privacy.",
  },
  {
    icon: Lightbulb,
    title: "Insight activation",
    copy: "Translate complaint data into product, policy, and training actions with clear owners and timeframes.",
  },
  {
    icon: BarChart3,
    title: "Experience metrics",
    copy: "Track effort, sentiment, and resolution time to prove the link between complaint handling and loyalty.",
  },
];

const serviceModules = [
  {
    icon: Workflow,
    title: "Customer Recovery Blueprint",
    detail: "Design intake, triage, escalation, and closure workflows that embed empathy and accountability at every touchpoint.",
  },
  {
    icon: Users,
    title: "Capability & culture",
    detail: "Define roles, coaching cadences, and playbooks so specialists feel confident handling complex conversations.",
  },
  {
    icon: Gauge,
    title: "Performance cockpit",
    detail: "Build dashboards for backlog, cycle time, and regulatory breaches with alerts that keep leaders proactive.",
  },
  {
    icon: ClipboardList,
    title: "Assurance & audit",
    detail: "Run readiness reviews, evidence walkthroughs, and corrective action loops that mirror assessor expectations.",
  },
];

const engagementPath = [
  {
    step: "01",
    title: "Baseline & ambition",
    info: "Frame customer promises, regulatory obligations, and current service levels using rapid diagnostics and heatmaps.",
  },
  {
    step: "02",
    title: "Journey redesign",
    info: "Co-create future-state workflows, RACI, and decision trees with stakeholders from operations, digital, and legal.",
  },
  {
    step: "03",
    title: "Enablement sprint",
    info: "Launch training, templates, and knowledge articles while aligning CRM or ticketing changes with release cycles.",
  },
  {
    step: "04",
    title: "Run & refine",
    info: "Shadow interactions, monitor KPIs, and embed feedback huddles to reinforce behaviours and surface quick wins.",
  },
  {
    step: "05",
    title: "Evidence & handover",
    info: "Package artefacts, audit logs, and improvement roadmaps so teams sustain ISO 10002 long after go-live.",
  },
];

const toolkitItems = [
  "Complaint handling policy suite and governance calendar",
  "Voice-of-customer taxonomy with response SLAs and scripts",
  "Root cause analytics templates and improvement backlog format",
  "Leadership dashboard starter kit for Power BI or Tableau",
  "Assessor-ready evidence map linking clauses to artefacts",
];

const outcomeMetrics = [
  { value: "-38%", descriptor: "Average reduction in complaint backlog within 90 days" },
  { value: "+24%", descriptor: "Increase in customer advocacy scores post-resolution" },
  { value: "3x", descriptor: "Improvement in closed-loop actions completed on time" },
];

const faqs = [
  {
    question: "Can ISO 10002 be integrated with ISO 9001 or 27001?",
    answer:
      "Yes. We map complaint handling responsibilities to your existing management system so audits and governance remain unified.",
  },
  {
    question: "What technology do you work with?",
    answer:
      "We sit on top of your CRM, ticketing, or bespoke platforms. Quick wins come from configuration, integrations, and consistent data fields rather than buying new tools.",
  },
  {
    question: "How quickly will we see benefits?",
    answer:
      "Most clients see backlog reduction and clearer insight cadence inside the first 6-8 weeks as new routines bed in.",
  },
];

const caseStudy = {
  quote:
    "We didn\'t just close complaints faster; we uncovered product defects and training gaps we had ignored for years.",
  client: "Head of Customer Care, UK energy retailer",
  context:
    "Scaled ISO 10002 across 3 contact centres handling 42k complaints annually, while meeting Ofgem reporting standards.",
  results: [
    "48-hour average response time achieved vs. 96-hour baseline",
    "Customer churn reduced by 12% in key segments",
    "Regulator feedback confirmed evidence trail was \"best in class\"",
  ],
};

const Iso10002 = () => {
  return (
    <div className="iso10002-page">
      <header className="iso10002-hero">
        <div className="iso10002-hero-inner">
          <div className="iso10002-hero-copy">
            <p className="iso10002-kicker">Customer advocacy programmes</p>
            <h1>ISO 10002 Customer Complaint Excellence</h1>
            <p className="iso10002-hero-lead">
              Transform complaints into loyalty moments. Our consultants help you embed ISO 10002 so every interaction is
              empathetic, compliant, and insight-rich across every channel you operate.
            </p>
            <div className="iso10002-hero-actions">
              <a className="iso10002-cta-primary" href="mailto:info@certigence.co.uk">
                Plan an ISO 10002 programme <ArrowRight size={18} strokeWidth={1.7} />
              </a>
              <Link className="iso10002-cta-secondary" to="/contact">
                Chat with the CX team
              </Link>
            </div>
          </div>
          <dl className="iso10002-hero-stats" aria-label="ISO 10002 engagement facts">
            {heroStats.map((stat) => (
              <div key={stat.label} className="iso10002-hero-stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main className="iso10002-main">
        <section className="iso10002-section">
          <div className="iso10002-section-head">
            <h2>Where ISO 10002 unlocks performance</h2>
            <p className="iso10002-section-lead">
              We combine customer journey design, operational excellence, and regulatory know-how, giving you a complaint
              system customers trust and managers can steer with confidence.
            </p>
          </div>
          <div className="iso10002-grid iso10002-grid--tiles">
            {transformationAreas.map((area) => (
              <article key={area.title} className="iso10002-card">
                <div className="iso10002-card-icon">
                  <area.icon size={28} strokeWidth={1.7} />
                </div>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso10002-section">
          <div className="iso10002-section-head">
            <h2>Service modules we deliver</h2>
            <p className="iso10002-section-lead">
              Pick the full transformation or target the modules that matter most. Each one is engineered to meet ISO 10002
              clause expectations while fitting your organisation's culture.
            </p>
          </div>
          <div className="iso10002-grid iso10002-grid--modules">
            {serviceModules.map((module) => (
              <article key={module.title} className="iso10002-module-card">
                <div className="iso10002-card-icon iso10002-module-icon">
                  <module.icon size={26} strokeWidth={1.6} />
                </div>
                <h3>{module.title}</h3>
                <p>{module.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso10002-section">
          <div className="iso10002-section-head">
            <h2>Engagement path</h2>
            <p className="iso10002-section-lead">
              A proven five-phase journey keeps stakeholders aligned and produces the artefacts, metrics, and behaviours
              assessors expect to see.
            </p>
          </div>
          <div className="iso10002-steps">
            {engagementPath.map((stage) => (
              <article key={stage.step} className="iso10002-step-card">
                <div className="iso10002-step-number">{stage.step}</div>
                <div className="iso10002-step-body">
                  <h3>{stage.title}</h3>
                  <p>{stage.info}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iso10002-section">
          <div className="iso10002-section-head">
            <h2>The toolkit you retain</h2>
            <p className="iso10002-section-lead">
              Every deliverable is packaged so your teams can maintain, evidence, and enhance the complaint management
              system without external support.
            </p>
          </div>
          <ul className="iso10002-toolkit">
            {toolkitItems.map((item) => (
              <li key={item}>
                <ShieldCheck size={20} strokeWidth={1.6} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="iso10002-section">
          <div className="iso10002-section-head">
            <h2>Measurable outcomes</h2>
            <p className="iso10002-section-lead">
              We agree the metrics that matter before kickoff and track progress together so wins are visible to leadership
              and front-line teams alike.
            </p>
          </div>
          <div className="iso10002-grid iso10002-grid--metrics">
            {outcomeMetrics.map((metric) => (
              <article key={metric.value} className="iso10002-metric-card">
                <span className="iso10002-metric-value">{metric.value}</span>
                <span className="iso10002-metric-descriptor">{metric.descriptor}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="iso10002-section">
          <div className="iso10002-case-card">
            <div className="iso10002-case-quote">
              <Sparkles size={32} strokeWidth={1.6} />
              <blockquote>{caseStudy.quote}</blockquote>
            </div>
            <div className="iso10002-case-meta">
              <p className="iso10002-case-context">{caseStudy.context}</p>
              <p className="iso10002-case-client">{caseStudy.client}</p>
              <ul>
                {caseStudy.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="iso10002-section">
          <div className="iso10002-section-head">
            <h2>Common questions</h2>
            <p className="iso10002-section-lead">
              Transparent expectations are vital to a successful programme. Here are the topics clients raise most during
              planning.
            </p>
          </div>
          <div className="iso10002-faq">
            {faqs.map((item) => (
              <article key={item.question} className="iso10002-faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      <CountrySelector
        serviceName="ISO 10002"
      />
      </main>

      <footer className="iso10002-footer">
        <div className="iso10002-footer-content">
          <h2>Let's elevate every customer recovery moment</h2>
          <p>
            Certigence blends CX design, quality management, and regulatory assurance so ISO 10002 becomes a springboard
            for loyalty, not a compliance checkbox. We'll co-create a roadmap that fits your ambition.
          </p>
          <div className="iso10002-footer-actions">
            <a className="iso10002-cta-primary" href="mailto:info@certigence.co.uk">
              Book a working session <ArrowRight size={18} strokeWidth={1.7} />
            </a>
            <Link className="iso10002-cta-secondary" to="/authorisations">
              Back to Authorisations
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Iso10002;



