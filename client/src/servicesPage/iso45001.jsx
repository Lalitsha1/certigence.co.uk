import React from "react";
import {
  ShieldCheck,
  Users,
  Activity,
  Award,
  Building2,
  HeartPulse,
  Workflow,
  TrendingUp,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import "../styles/servicespage-css/iso45001.css";

const benefits = [
  {
    icon: <HeartPulse size={40} />,
    title: "Workplace Safety",
    text: "ISO 45001 helps organizations create a safe working environment, reducing workplace incidents, injuries, and hazards.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Risk Reduction",
    text: "Identify, evaluate, and mitigate occupational health and safety risks effectively through structured frameworks.",
    img: "https://images.unsplash.com/photo-1581091012184-5c32e0f27c56",
  },
  {
    icon: <Award size={40} />,
    title: "Global Recognition",
    text: "Gain international credibility and compliance with safety standards recognized worldwide.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    icon: <Users size={40} />,
    title: "Employee Wellbeing",
    text: "Enhance trust and morale by prioritizing employee safety, health, and engagement at all levels.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    icon: <Building2 size={40} />,
    title: "Legal Compliance",
    text: "Meet national and international occupational health and safety requirements, avoiding penalties and liabilities.",
    img: "https://images.unsplash.com/photo-1581091870634-2b6a3b47f607",
  },
  {
    icon: <Activity size={40} />,
    title: "Improved Productivity",
    text: "Safe and healthy work environments lead to fewer disruptions, reduced absenteeism, and higher productivity.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    icon: <Workflow size={40} />,
    title: "Process Efficiency",
    text: "Structured safety processes streamline workflows, ensuring fewer accidents and smoother operations.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Reputation",
    text: "Strengthen your corporate image by demonstrating commitment to employee safety and sustainability.",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Continuous Improvement",
    text: "Drive ongoing enhancements in workplace safety management through monitoring and evaluation.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];

const principles = [
  { icon: <Users size={30} />, title: "Employee Participation", text: "Encouraging active involvement of employees at all levels to improve workplace safety culture." },
  { icon: <ShieldCheck size={30} />, title: "Risk-Based Thinking", text: "Identifying and managing risks before they cause harm." },
  { icon: <Workflow size={30} />, title: "Process Integration", text: "Embedding safety management into every business process." },
  { icon: <BookOpen size={30} />, title: "Legal & Regulatory Compliance", text: "Meeting occupational health & safety laws globally." },
  { icon: <TrendingUp size={30} />, title: "Performance Evaluation", text: "Regular monitoring and measuring of safety performance." },
  { icon: <Award size={30} />, title: "Leadership Commitment", text: "Top management actively driving a culture of safety." },
  { icon: <Activity size={30} />, title: "Health Protection", text: "Focusing not just on physical safety but also on mental well-being." },
];

const steps = [
  { id: "01", title: "Application & Scope", text: "Organizations submit details of operations, risks, and scope for certification." },
  { id: "02", title: "Gap Analysis", text: "Review existing safety systems against ISO 45001 requirements." },
  { id: "03", title: "Documentation Review", text: "Evaluate manuals, policies, risk assessments, and compliance procedures." },
  { id: "04", title: "Stage 1 Audit", text: "Preliminary assessment of safety processes and documentation readiness." },
  { id: "05", title: "Stage 2 Audit", text: "On-site audit to evaluate implementation of safety practices." },
  { id: "06", title: "Certification Decision", text: "Certification body issues ISO 45001 certificate after compliance is demonstrated." },
  { id: "07", title: "Surveillance Audits", text: "Periodic audits to ensure continuous compliance and improvement." },
  { id: "08", title: "Recertification", text: "Full reassessment every 3 years to renew certification." },
];

const Iso45001 = () => {
  return (
    <div className="iso45001-container">
      {/* ✅ Header Section */}
      <h1 className="iso45001-heading">ISO 45001 Certification</h1>
      <p className="iso45001-subtext">
        ISO 45001 is the international standard for Occupational Health and Safety Management Systems (OHSMS). 
        It provides a framework that organizations can adopt to proactively improve employee safety, reduce workplace risks, 
        and create better, safer working conditions worldwide. Implementing ISO 45001 helps organizations build trust, 
        demonstrate regulatory compliance, and foster a culture of safety and well-being.
      </p>

      {/* ✅ Benefits Section */}
      <h2 className="section-title">Why Choose ISO 45001?</h2>
      <div className="iso45001-grid">
        {benefits.map((item, index) => (
          <div key={index} className="iso45001-card">
            <div className="iso45001-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="iso45001-content">
              <div className="iso45001-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Principles Section */}
      <h2 className="section-title">Principles of ISO 45001</h2>
      <div className="principles-grid">
        {principles.map((p, i) => (
          <div key={i} className="principle-card">
            <div className="principle-icon">{p.icon}</div>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ Process Section */}
      <h2 className="section-title">ISO 45001 Certification Process</h2>
      <div className="steps-container">
        {steps.map((s, i) => (
          <div key={i} className="step-card">
            <div className="step-circle">{s.id}</div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ Closing Section */}
      <div className="closing-box">
        <h2>Get Certified with ISO 45001</h2>
        <p>
          By achieving ISO 45001 certification, your organization demonstrates a strong commitment 
          to the health, safety, and well-being of employees. Beyond compliance, this certification 
          improves trust with stakeholders, reduces workplace incidents, and ensures long-term sustainability. 
          Take the step towards a safer future and show your dedication to protecting your most valuable asset – your people.
        </p>
      </div>
    </div>
  );
};

export default Iso45001;
