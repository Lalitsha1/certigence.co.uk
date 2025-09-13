import React, { useState, useEffect, useMemo } from "react";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  TrendingUp,
  CheckCircle,
  Target,
  Globe,
  FileCheck,
  HeartPulse,
  Briefcase,
} from "lucide-react";
import "../styles/servicespage-css/iso45001.css";

// Benefits of ISO 45001
const benefits = [
  {
    icon: <HeartPulse size={40} />,
    title: "Workplace Safety",
    text: "Reduces risks of workplace injuries, accidents, and occupational diseases.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Legal Compliance",
    text: "Helps organizations meet occupational health & safety regulations.",
  },
  {
    icon: <Award size={40} />,
    title: "Global Recognition",
    text: "Internationally acknowledged certification that boosts credibility.",
  },
  {
    icon: <Users size={40} />,
    title: "Employee Morale",
    text: "Creates a safer, healthier work culture improving engagement.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Operational Efficiency",
    text: "Minimizes downtime due to accidents and improves productivity.",
  },
  {
    icon: <Globe size={40} />,
    title: "Market Advantage",
    text: "Provides a competitive edge in tenders and contracts.",
  },
  {
    icon: <Target size={40} />,
    title: "Risk Management",
    text: "Systematic approach to identifying, reducing, and managing risks.",
  },
  {
    icon: <FileCheck size={40} />,
    title: "Continuous Compliance",
    text: "Ensures ongoing improvement in safety management systems.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Sustainability",
    text: "Supports long-term success with safe and responsible practices.",
  },
];

// Key Principles of ISO 45001
const principles = [
  { icon: <Users size={30} />, title: "Worker Participation", text: "Actively involve employees in safety decisions." },
  { icon: <ShieldCheck size={30} />, title: "Leadership Commitment", text: "Strong leadership ensures a culture of safety." },
  { icon: <Briefcase size={30} />, title: "Risk-Based Thinking", text: "Identify hazards and proactively manage risks." },
  { icon: <Target size={30} />, title: "Health & Safety Objectives", text: "Align safety goals with business strategy." },
  { icon: <CheckCircle size={30} />, title: "Compliance & Control", text: "Meet all legal and regulatory obligations." },
  { icon: <Award size={30} />, title: "Continuous Improvement", text: "Ensure ongoing performance enhancement." },
];

// Certification Process Steps
const steps = [
  { id: "01", title: "Application & Scope", text: "Submit company details and define the scope of certification." },
  { id: "02", title: "Documentation Review", text: "Review of OH&S policy, procedures, and safety records." },
  { id: "03", title: "Stage 1 Audit", text: "Evaluate readiness and review safety management documentation." },
  { id: "04", title: "Stage 2 Audit", text: "On-site audit to verify compliance with ISO 45001 standards." },
  { id: "05", title: "Certification Decision", text: "Certification body grants ISO 45001 certificate upon compliance." },
  { id: "06", title: "Surveillance Audits", text: "Regular audits to maintain certification and continuous improvement." },
];

const BenefitCard = React.memo(({ item, index }) => (
  <div className="iso45001-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="iso45001-content">
      <div className="iso45001-icon">{item.icon}</div>
      <h3>{item.title}</h3>
      <p className="iso45001-item-text">{item.text}</p>
    </div>
    <div className="iso45001-card-hover-effect"></div>
  </div>
));

const PrincipleCard = React.memo(({ item, index }) => (
  <div className="iso45001-principle-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="iso45001-principle-icon">{item.icon}</div>
    <h4>{item.title}</h4>
    <p className="iso45001-item-text">{item.text}</p>
    <div className="iso45001-card-hover-effect"></div>
  </div>
));

const StepCard = React.memo(({ item, index }) => (
  <div className="iso45001-step-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="iso45001-step-circle">{item.id}</div>
    <h4>{item.title}</h4>
    <p>{item.text}</p>
    <div className="iso45001-step-connector"></div>
    <div className="iso45001-card-hover-effect"></div>
  </div>
));

const Iso45001 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const benefitCards = useMemo(
    () => benefits.map((item, index) => <BenefitCard key={index} item={item} index={index} />),
    []
  );

  const principleCards = useMemo(
    () => principles.map((p, i) => <PrincipleCard key={i} item={p} index={i} />),
    []
  );

  const stepCards = useMemo(
    () => steps.map((s, i) => <StepCard key={i} item={s} index={i} />),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`iso45001-container ${isVisible ? "visible" : ""}`}>
      <div className="iso45001-header-content">
        <h1 className="iso45001-heading">ISO 45001 Certification</h1>
        <div className="iso45001-heading-underline"></div>
        <p className="iso45001-subtext">
          ISO 45001 is the international standard for Occupational Health & Safety Management Systems (OHSMS). 
          It provides a framework to improve employee safety, reduce workplace risks, and create better working 
          conditions worldwide. Achieving certification demonstrates commitment to safety, compliance, and 
          sustainable business practices.
        </p>
      </div>

      <div className="iso45001-section-wrapper">
        <h2 className="iso45001-section-title">Why Choose ISO 45001?</h2>
        <div className="iso45001-grid">{benefitCards}</div>
      </div>

      <div className="iso45001-section-wrapper">
        <h2 className="iso45001-section-title">Principles of ISO 45001</h2>
        <div className="iso45001-principles-grid">{principleCards}</div>
      </div>

      <div className="iso45001-section-wrapper">
        <h2 className="iso45001-section-title">ISO 45001 Certification Process</h2>
        <div className="iso45001-steps-container">{stepCards}</div>
      </div>

      <div className="iso45001-closing-box">
        <div className="iso45001-closing-content">
          <h2>Start Your Certification Journey</h2>
          <p>
            Achieving ISO 45001 certification not only ensures compliance but also builds a safe, 
            resilient, and sustainable workplace. Take the next step towards protecting your workforce 
            and strengthening your organization.
          </p>
          <button className="iso45001-cta-button">
            <a href="/contact"> Get Certified Now </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Iso45001);
