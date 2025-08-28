import React from "react";
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

const benefits = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality Assurance",
    text: "Consistently delivers products and services that meet both customer and regulatory requirements.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    icon: <Award size={40} />,
    title: "Global Recognition",
    text: "ISO 9001 certification is internationally recognized, boosting credibility across markets.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    icon: <Building2 size={40} />,
    title: "Operational Efficiency",
    text: "Streamlines internal processes, reduces waste, and optimizes resource usage.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    icon: <Users size={40} />,
    title: "Customer Trust",
    text: "Builds stronger customer relationships by consistently meeting expectations.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Growth",
    text: "Improves decision-making and creates new opportunities for growth.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    icon: <Globe size={40} />,
    title: "Market Advantage",
    text: "Gives a competitive edge in tenders, contracts, and partnerships.",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
  },
  {
    icon: <Target size={40} />,
    title: "Strategic Focus",
    text: "Aligns processes and objectives with business strategy for long-term results.",
    img: "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
  },
  {
    icon: <FileCheck size={40} />,
    title: "Compliance",
    text: "Helps meet regulatory and statutory obligations smoothly.",
    img: "https://images.unsplash.com/photo-1581091012184-5c2fca48d9f5",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Continuous Improvement",
    text: "Encourages innovation and ensures processes are always improving.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
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
  { id: "06", title: "Surveillance Audits", text: "Annual audits ensure continual compliance and improvement." },
];

const Iso9001 = () => {
  return (
    <div className="iso-container">
      {/* Header */}
      <h1 className="iso-heading">ISO 9001 Certification</h1>
      <p className="iso-subtext">
        ISO 9001 is the most recognized Quality Management System (QMS) standard. 
        It helps organizations of all sizes improve processes, boost efficiency, 
        and deliver consistent customer satisfaction. Achieving certification demonstrates 
        commitment to quality, credibility, and business excellence.
      </p>

      {/* Benefits */}
      <h2 className="section-title">Why Choose ISO 9001?</h2>
      <div className="iso-grid">
        {benefits.map((item, index) => (
          <div key={index} className="iso-card">
            <div className="iso-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="iso-content">
              <div className="iso-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <h2 className="section-title">Principles of ISO 9001</h2>
      <div className="principles-grid">
        {principles.map((p, i) => (
          <div key={i} className="principle-card">
            <div className="principle-icon">{p.icon}</div>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      {/* Steps */}
      <h2 className="section-title">ISO 9001 Certification Process</h2>
      <div className="steps-container">
        {steps.map((s, i) => (
          <div key={i} className="step-card">
            <div className="step-circle">{s.id}</div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="closing-box">
        <h2>Get Certified Today</h2>
        <p>
          Achieving ISO 9001 certification enhances credibility, improves internal 
          processes, and creates new business opportunities. Take the next step 
          toward excellence with ISO 9001.
        </p>
      </div>
    </div>
  );
};

export default Iso9001;
