import React, { useState, useEffect, useMemo } from "react";
import {
  ShieldCheck,
  Award,
  Building2,
  Users,
  Workflow,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Target,
  Globe,
  FileCheck,
} from "lucide-react";
import "../styles/servicespage-css/iso9001.css";

// Memoize static data to prevent re-renders
const benefits = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality Assurance",
    text: "Consistently delivers products and services that meet both customer and regulatory requirements.",
  },
  {
    icon: <Award size={40} />,
    title: "Global Recognition",
    text: "ISO 9001 certification is internationally recognized, boosting credibility across markets.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Operational Efficiency",
    text: "Streamlines internal processes, reduces waste, and optimizes resource usage.",
  },
  {
    icon: <Users size={40} />,
    title: "Customer Trust",
    text: "Builds stronger customer relationships by consistently meeting expectations.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Growth",
    text: "Improves decision-making and creates new opportunities for growth.",
  },
  {
    icon: <Globe size={40} />,
    title: "Market Advantage",
    text: "Gives a competitive edge in tenders, contracts, and partnerships.",
  },
  {
    icon: <Target size={40} />,
    title: "Strategic Focus",
    text: "Aligns processes and objectives with business strategy for long-term results.",
  },
  {
    icon: <FileCheck size={40} />,
    title: "Compliance",
    text: "Helps meet regulatory and statutory obligations smoothly.",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Continuous Improvement",
    text: "Encourages innovation and ensures processes are always improving.",
  },
];

const principles = [
  { icon: <Users size={30} />, title: "Customer Focus", text: "Meeting customer needs and striving to exceed expectations." },
  { icon: <ShieldCheck size={30} />, title: "Leadership", text: "Unity of purpose and strong leadership at all levels." },
  { icon: <Workflow size={30} />, title: "Engagement of People", text: "Involving employees and valuing their contributions." },
  { icon: <BookOpen size={30} />, title: "Process Approach", text: "Managing activities as processes for efficiency." },
  { icon: <TrendingUp size={30} />, title: "Improvement", text: "Continual improvement is a permanent objective." },
  { icon: <CheckCircle size={30} />, title: "Evidence-Based Decisions", text: "Decisions made using accurate data and analysis." },
  { icon: <Award size={30} />, title: "Relationship Management", text: "Managing supplier and stakeholder relationships effectively." },
];

const steps = [
  { id: "01", title: "Application & Enquiry", text: "Submit company details, scope, and requirements for certification." },
  { id: "02", title: "Documentation Review", text: "Review of your quality manual, policies, and procedures." },
  { id: "03", title: "Stage 1 Audit", text: "Evaluate readiness, review documents, and check implementation." },
  { id: "04", title: "Stage 2 Audit", text: "Detailed on-site audit to ensure compliance with ISO 9001 standards." },
  { id: "05", title: "Certification Decision", text: "Certification body issues the ISO 9001 certificate upon compliance." },
  { id: "06", "title": "Surveillance Audits", text: "Annual audits ensure continual compliance and improvement." },
];

const BenefitCard = React.memo(({ item, index }) => (
  <div className="iso-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="iso-content">
      <div className="iso-icon">{item.icon}</div>
      <h3>{item.title}</h3>
      <p className="item-text">{item.text}</p>
    </div>
    <div className="card-hover-effect"></div>
  </div>
));

const PrincipleCard = React.memo(({ item, index }) => (
  <div className="principle-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="principle-icon">{item.icon}</div>
    <h4>{item.title}</h4>
    <p className="item-text">{item.text}</p>
    <div className="card-hover-effect"></div>
  </div>
));

const StepCard = React.memo(({ item, index }) => (
  <div className="step-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="step-circle">{item.id}</div>
    <h4>{item.title}</h4>
    <p>{item.text}</p>
    <div className="step-connector"></div>
    <div className="card-hover-effect"></div>
  </div>
));

const Iso9001 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const benefitCards = useMemo(() =>
    benefits.map((item, index) => <BenefitCard key={index} item={item} index={index} />),
    []
  );

  const principleCards = useMemo(() =>
    principles.map((p, i) => <PrincipleCard key={i} item={p} index={i} />),
    []
  );

  const stepCards = useMemo(() =>
    steps.map((s, i) => <StepCard key={i} item={s} index={i} />),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`iso-container ${isVisible ? 'visible' : ''}`}>
      <div className="header-content">
        <h1 className="iso-heading">ISO 9001 Certification</h1>
        <div className="heading-underline"></div>
        <p className="iso-subtext">
          ISO 9001 is the most recognized Quality Management System (QMS) standard.
          It helps organizations of all sizes improve processes, boost efficiency,
          and deliver consistent customer satisfaction. Achieving certification demonstrates
          commitment to quality, credibility, and business excellence.
        </p>
      </div>
      <div className="section-wrapper">
        <h2 className="section-title">Why Choose ISO 9001?</h2>
        <div className="iso-grid">
          {benefitCards}
        </div>
      </div>
      <div className="section-wrapper principles-section">
        <h2 className="section-title">Principles of ISO 9001</h2>
        <div className="principles-grid">
          {principleCards}
        </div>
      </div>
      <div className="section-wrapper">
        <h2 className="section-title">ISO 9001 Certification Process</h2>
        <div className="steps-container">
          {stepCards}
        </div>
      </div>
      <div className="closing-box">
        <div className="closing-content">
          <h2>Get Certified Today</h2>
          <p>
            Achieving ISO 9001 certification enhances credibility, improves internal
            processes, and creates new business opportunities. Take the next step
            toward excellence with ISO 9001.
          </p>
          <button className="cta-button"><a href="/contact"> Start Your Certification Journey </a></button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Iso9001);