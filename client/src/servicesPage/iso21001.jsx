import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Lightbulb,
  Target,
  ShieldCheck,
  ClipboardList,
  FileCheck,
  BarChart3,
  CalendarCheck,
  Layers,
  BookOpen,
  Sparkles,
  Globe2,
  LineChart,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import "../servicespage-css/iso21001.css";
import CountrySelector from "../components/CountrySelector";

const heroStats = [
  { label: "Standard", value: "ISO 21001:2018" },
  { label: "Focus", value: "Educational Organizations" },
  { label: "Core Outcome", value: "Learner Satisfaction" },
  { label: "Approach", value: "Management Systems" },
];

const valueHighlights = [
  {
    icon: GraduationCap,
    title: "Learner-Centred Excellence",
    description:
      "ISO 21001 reorients educational services around learner needs, tailoring objectives, tutoring, and support to tangible competency outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Improvement Culture",
    description:
      "Plan-Do-Check-Act cycles embed reflective practice so faculty and administrators continuously refine programs, assessments, and delivery methods.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Accountability",
    description:
      "Clear roles, evidence trails, and risk management demonstrate responsible stewardship to regulators, accreditation bodies, and stakeholders.",
  },
  {
    icon: Globe2,
    title: "Global Recognition",
    description:
      "International alignment strengthens collaboration, mobility, and trust for cross-border programs, franchise campuses, and joint degrees.",
  },
];

const managementPillars = [
  {
    icon: Users,
    title: "Learner Engagement",
    text: "Participatory feedback loops capture learner voice, adapt support services, and enhance inclusion across demographics.",
  },
  {
    icon: ClipboardList,
    title: "Strategic Planning",
    text: "Translate mission into measurable objectives, risk-treated plans, and performance indicators for every academic cycle.",
  },
  {
    icon: Layers,
    title: "Curriculum Design",
    text: "Integrate competence frameworks, blended delivery, and accessibility criteria while managing outsourced resources.",
  },
  {
    icon: BookOpen,
    title: "Faculty Capability",
    text: "Define competencies, onboarding, mentoring, and CPD pathways so educators can consistently deliver at scale.",
  },
  {
    icon: FileCheck,
    title: "Assessment Integrity",
    text: "Calibrate rubrics, moderation, and appeals processes to ensure reliable, transparent evaluation of learning outcomes.",
  },
  {
    icon: BarChart3,
    title: "Data & Insight",
    text: "Use dashboards and analytics to monitor retention, completion, satisfaction, and employability targets.",
  },
];

const servicePackages = [
  {
    icon: ClipboardList,
    title: "Maturity Diagnostic",
    description:
      "Gap analysis against ISO 21001 clauses, stakeholder mapping, and prioritised roadmap with quick wins and structural reforms.",
  },
  {
    icon: LineChart,
    title: "Learner Experience Mapping",
    description:
      "Journey mapping workshops uncover pain points during admissions, instruction, assessments, and post-study support.",
  },
  {
    icon: CalendarCheck,
    title: "Academic Cycle Governance",
    description:
      "Templates for annual planning, review boards, policy updates, and risk registers to keep academic operations aligned.",
  },
  {
    icon: Sparkles,
    title: "Digital Enablement",
    description:
      "Tool selection and configuration guidance for LMS, analytics platforms, and feedback systems supporting ISO 21001 controls.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Discovery & Scope",
    text: "Clarify organizational boundaries, programs, delivery modes, and stakeholder expectations driving the management system.",
  },
  {
    step: "02",
    title: "Baseline Assessment",
    text: "Assess policies, records, and KPIs against ISO 21001 requirements; quantify maturity and compliance gaps.",
  },
  {
    step: "03",
    title: "System Design",
    text: "Co-create processes for governance, support, operations, and evaluation; integrate risk and opportunity management.",
  },
  {
    step: "04",
    title: "Capability Building",
    text: "Deliver faculty and staff training, change management, and leadership coaching to embed behaviours.",
  },
  {
    step: "05",
    title: "Internal Validation",
    text: "Run pilot audits, management reviews, and stakeholder forums to test readiness before certification.",
  },
  {
    step: "06",
    title: "Certification & Improvement",
    text: "Support external audit, close findings, and launch continuous improvement cycles using evidence-based insights.",
  },
];

const evidenceChecklist = [
  "Documented mission, vision, values, and learner-centred policy",
  "Stakeholder analysis, communication plans, and engagement records",
  "Program handbooks, curriculum maps, and assessment matrices",
  "Faculty competence records, CPD logs, and qualification evidence",
  "Learner support workflows, accessibility accommodations, and wellbeing services",
  "Monitoring dashboards, internal audit reports, and management review minutes",
];

const benefits = [
  {
    icon: Target,
    title: "Aligned Outcomes",
    text: "Link institutional strategy with measurable educational results and employer expectations.",
  },
  {
    icon: Briefcase,
    title: "Stronger Employability",
    text: "Structured industry engagement ensures curricula stay relevant and graduates are workplace-ready.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Confidence",
    text: "Demonstrate compliance with accreditation, funding, and quality assurance agencies across jurisdictions.",
  },
  {
    icon: Users,
    title: "Inclusive Experience",
    text: "Systematic accessibility and support processes drive retention and equitable learner outcomes.",
  },
];

const faqs = [
  {
    question: "Who can implement ISO 21001?",
    answer:
      "Any organization that offers educational products or services — schools, universities, training providers, EdTech, and corporate academies — can apply the standard.",
  },
  {
    question: "Is ISO 21001 compatible with ISO 9001?",
    answer:
      "Yes. ISO 21001 shares the high-level structure and can integrate seamlessly with ISO 9001, ISO 14001, or other management systems.",
  },
  {
    question: "How long does certification take?",
    answer:
      "Typical implementations run 6–12 months depending on complexity, data availability, and change readiness.",
  },
  {
    question: "Do we need external accreditation first?",
    answer:
      "No. ISO 21001 is independent of academic accreditation; it strengthens quality assurance regardless of existing recognitions.",
  },
  {
    question: "What is the maintenance effort?",
    answer:
      "Post-certification, plan for scheduled internal audits, learner feedback cycles, and annual management reviews to sustain improvement.",
  },
];

const Iso21001 = () => {
  return (
    <div className="iso21001-page">
      <header className="iso21001-hero">
        <div className="iso21001-hero-inner">
          <span className="iso21001-hero-eyebrow">Educational Organization Management Systems</span>
          <h1 className="iso21001-hero-title">ISO 21001 for Learner-Focused Excellence</h1>
          <p className="iso21001-hero-subtitle">
            Build a resilient educational management system that elevates learner outcomes, drives evidence-based improvement, and keeps stakeholders confident in your institution's mission and delivery.
          </p>
          <div className="iso21001-hero-actions">
            <a className="iso21001-cta-primary" href="mailto:info@certigence.co.uk">
              Book a strategy call <ArrowRight size={18} />
            </a>
            <Link className="iso21001-cta-secondary" to="/">
              Return to home
            </Link>
          </div>
          <div className="iso21001-hero-stats">
            {heroStats.map((item) => (
              <div key={item.label} className="iso21001-stat-card">
                <span className="iso21001-stat-label">{item.label}</span>
                <span className="iso21001-stat-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="iso21001-main">
        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Why ISO 21001 matters</h2>
            <p className="iso21001-section-lead">
              ISO 21001 provides a shared language for quality in education, connecting mission, operations, and learner experience under one management system. Move from fragmented initiatives to a cohesive, auditable framework.
            </p>
          </div>
          <div className="iso21001-grid iso21001-value-grid">
            {valueHighlights.map((item) => (
              <article key={item.title} className="iso21001-value-card">
                <div className="iso21001-card-icon">
                  <item.icon size={34} strokeWidth={1.5} />
                </div>
                <h3 className="iso21001-card-title">{item.title}</h3>
                <p className="iso21001-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Key management pillars</h2>
            <p className="iso21001-section-lead">
              Cover the full learner lifecycle with processes that keep academic, operational, and support functions aligned to strategic goals.
            </p>
          </div>
          <div className="iso21001-grid iso21001-pillar-grid">
            {managementPillars.map((pillar) => (
              <article key={pillar.title} className="iso21001-pillar-card">
                <div className="iso21001-pillar-icon">
                  <pillar.icon size={32} strokeWidth={1.4} />
                </div>
                <h3 className="iso21001-card-title">{pillar.title}</h3>
                <p className="iso21001-card-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Service packages</h2>
            <p className="iso21001-section-lead">
              Tailored consulting accelerates adoption — from diagnostic to sustained improvement, we co-create a roadmap that fits your institution.
            </p>
          </div>
          <div className="iso21001-grid iso21001-service-grid">
            {servicePackages.map((pkg) => (
              <article key={pkg.title} className="iso21001-service-card">
                <div className="iso21001-card-icon iso21001-service-icon">
                  <pkg.icon size={30} strokeWidth={1.6} />
                </div>
                <h3 className="iso21001-card-title">{pkg.title}</h3>
                <p className="iso21001-card-text">{pkg.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Implementation roadmap</h2>
            <p className="iso21001-section-lead">
              A phased methodology reduces disruption and embeds ownership across academic leaders, faculty, and support teams.
            </p>
          </div>
          <div className="iso21001-steps-grid">
            {implementationSteps.map((step) => (
              <article key={step.step} className="iso21001-step-card">
                <div className="iso21001-step-number">{step.step}</div>
                <div className="iso21001-step-body">
                  <h3 className="iso21001-step-title">{step.title}</h3>
                  <p className="iso21001-step-text">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Evidence you'll need</h2>
            <p className="iso21001-section-lead">
              Assemble documentation and records early to streamline certification and sustain continuous improvement.
            </p>
          </div>
          <ul className="iso21001-checklist">
            {evidenceChecklist.map((item) => (
              <li key={item} className="iso21001-checklist-item">
                <ShieldCheck size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Benefits realized</h2>
            <p className="iso21001-section-lead">
              ISO 21001 provides tangible value for learners, staff, and leadership.
            </p>
          </div>
          <div className="iso21001-grid iso21001-benefit-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="iso21001-benefit-card">
                <div className="iso21001-card-icon iso21001-benefit-icon">
                  <benefit.icon size={30} strokeWidth={1.6} />
                </div>
                <h3 className="iso21001-card-title">{benefit.title}</h3>
                <p className="iso21001-card-text">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="iso21001-section">
          <div className="iso21001-section-head">
            <h2 className="iso21001-section-title">Frequently asked questions</h2>
            <p className="iso21001-section-lead">
              Common queries from leaders planning a learner-focused management system transformation.
            </p>
          </div>
          <div className="iso21001-grid iso21001-faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="iso21001-faq-card">
                <h3 className="iso21001-faq-question">{faq.question}</h3>
                <p className="iso21001-faq-answer">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      <CountrySelector
        serviceName="ISO 21001"
      />
      </main>

      <footer className="iso21001-footer">
        <div className="iso21001-footer-content">
          <h2 className="iso21001-footer-title">Empower every learner with a certified management system</h2>
          <p className="iso21001-footer-text">
            From initial diagnostic to post-certification coaching, Certigence helps educational organizations operationalise ISO 21001 with clarity and momentum.
          </p>
          <div className="iso21001-footer-actions">
            <a className="iso21001-cta-primary" href="mailto:info@certigence.co.uk">
              Start your ISO 21001 journey <ArrowRight size={18} />
            </a>
            <Link className="iso21001-cta-secondary" to="/">
              Explore other services
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Iso21001;

