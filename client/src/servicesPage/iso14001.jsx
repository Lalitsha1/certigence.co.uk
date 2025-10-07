import React from "react";
import {
  Leaf,
  Globe,
  ShieldCheck,
  Award,
  Users,
  Recycle,
  Factory,
  TrendingUp,
  Target,
  FileCheck,
  BookOpen,
  Workflow,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import "../styles/servicespage-css/iso14001.css";
import CountrySelector from "../components/CountrySelector";

const benefits = [
  {
    icon: <Leaf size={40} />,
    title: "Environmental Responsibility",
    text: "ISO 14001 ensures organizations take accountability for environmental impact, reducing pollution and conserving resources. It drives eco-friendly practices that protect biodiversity and promote sustainability in the long run.",
    bgClass: "iso14001-benefit-bg-1",
  },
  {
    icon: <Globe size={40} />,
    title: "Global Recognition",
    text: "Being internationally recognized, ISO 14001 certification increases credibility across global markets. It positions organizations as environmentally responsible, making them more attractive to investors and partners.",
    bgClass: "iso14001-benefit-bg-2",
  },
  {
    icon: <Recycle size={40} />,
    title: "Waste Reduction",
    text: "By implementing ISO 14001, businesses streamline resource use, reduce waste generation, and encourage recycling initiatives. This leads to both environmental and cost-saving benefits.",
    bgClass: "iso14001-benefit-bg-3",
  },
  {
    icon: <Factory size={40} />,
    title: "Regulatory Compliance",
    text: "ISO 14001 helps organizations comply with legal and regulatory environmental requirements. It reduces the risk of penalties and ensures smooth operations across regions.",
    bgClass: "iso14001-benefit-bg-regulatory", // Changed to a unique class
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Growth",
    text: "Sustainability is increasingly tied to growth. ISO 14001 helps companies tap into new markets, strengthen reputation, and secure contracts where environmental certification is a prerequisite.",
    bgClass: "iso14001-benefit-bg-5",
  },
  {
    icon: <Award size={40} />,
    title: "Competitive Advantage",
    text: "Certification differentiates businesses from competitors, showing stakeholders a strong commitment to sustainability and long-term environmental goals.",
    bgClass: "iso14001-benefit-bg-6",
  },
  {
    icon: <Target size={40} />,
    title: "Strategic Focus",
    text: "Aligns environmental objectives with overall business strategy, ensuring that growth and sustainability goals complement each other.",
    bgClass: "iso14001-benefit-bg-7",
  },
  {
    icon: <Users size={40} />,
    title: "Stakeholder Trust",
    text: "ISO 14001 builds stronger relationships with customers, communities, regulators, and investors by demonstrating accountability for environmental impact.",
    bgClass: "iso14001-benefit-bg-8",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Continuous Improvement",
    text: "It encourages ongoing monitoring and improvement of environmental performance, keeping organizations adaptive and innovative.",
    bgClass: "iso14001-benefit-bg-9",
  },
];

const principles = [
  { icon: <Globe size={30} />, title: "Sustainability", text: "Balancing business needs with environmental protection." },
  { icon: <ShieldCheck size={30} />, title: "Leadership", text: "Strong leadership is key to setting environmental goals." },
  { icon: <Workflow size={30} />, title: "Engagement of People", text: "Involving staff in sustainability initiatives for collective success." },
  { icon: <BookOpen size={30} />, title: "Process Approach", text: "Managing activities as processes to reduce waste and impact." },
  { icon: <Lightbulb size={30} />, title: "Innovation", text: "Encourages eco-friendly innovations and green technologies." },
  { icon: <FileCheck size={30} />, title: "Evidence-Based Decisions", text: "Data-driven monitoring ensures accurate environmental impact tracking." },
  { icon: <Award size={30} />, title: "Relationship Management", text: "Building green partnerships with stakeholders and suppliers." },
];

const steps = [
  { id: "01", title: "Initial Enquiry", text: "Submit details of company operations, industry, and environmental aspects." },
  { id: "02", title: "Gap Analysis", text: "Evaluate current environmental practices against ISO 14001 requirements." },
  { id: "03", title: "Documentation Review", text: "Assessment of environmental policies, manuals, and procedures." },
  { id: "04", title: "Stage 1 Audit", text: "Review documentation and check initial compliance readiness." },
  { id: "05", title: "Stage 2 Audit", text: "On-site evaluation of environmental management systems in action." },
  { id: "06", title: "Certification", text: "Certificate issued once compliance with ISO 14001 standards is confirmed." },
  { id: "07", title: "Surveillance Audits", text: "Annual audits conducted to ensure ongoing compliance and improvement." },
];

const industries = [
  "Manufacturing & Industrial Plants",
  "Construction & Real Estate",
  "Energy & Power Sector",
  "Hospitality & Tourism",
  "Healthcare & Pharmaceuticals",
  "IT & Technology Companies",
  "Education & Institutions",
  "Logistics & Transportation",
];

const faqs = [
  {
    q: "What is ISO 14001 certification?",
    a: "ISO 14001 is an international standard for Environmental Management Systems (EMS). It provides a framework for organizations to reduce environmental impact, ensure compliance, and promote sustainability.",
  },
  {
    q: "Who needs ISO 14001?",
    a: "Organizations of all sizes and industries can benefit from ISO 14001, especially those aiming to minimize environmental impact and demonstrate accountability to stakeholders.",
  },
  {
    q: "How long does ISO 14001 certification take?",
    a: "The process varies depending on company size and complexity. It typically takes between 3 to 6 months, including audits and documentation reviews.",
  },
  {
    q: "What is the validity of ISO 14001 certification?",
    a: "Certification is valid for 3 years, subject to successful surveillance audits during the cycle.",
  },
  {
    q: "How much does ISO 14001 certification cost?",
    a: "Costs depend on company size, number of locations, and audit scope. Generally, it includes application fees, audit charges, and certification body fees.",
  },
];

const Iso14001 = () => {
  return (
    <div className="iso14001-wrapper">
      <header className="iso14001-hero-section">
        <h1 className="iso14001-hero-title">ISO 14001 Certification</h1>
        <p className="iso14001-hero-subtitle">
          ISO 14001 is the internationally recognized standard for Environmental Management Systems (EMS). It helps organizations reduce environmental impact, comply with legal obligations, and continually improve sustainability practices.
          <br />
          Achieving ISO 14001 certification demonstrates your commitment to sustainability, resource efficiency, and long-term environmental responsibility.
        </p>
      </header>

      <section className="iso14001-main-content">
        <h2 className="section-heading">Why Choose ISO 14001?</h2>
        <div className="iso14001-benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className={`iso14001-benefit-card ${item.bgClass}`}>
              <div className="iso14001-card-overlay"></div>
              <div className="iso14001-card-content">
                <div className="iso14001-card-icon">{item.icon}</div>
                <h3 className="iso14001-card-title">{item.title}</h3>
                <p className="iso14001-card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-heading">Principles of ISO 14001</h2>
        <div className="iso14001-principles-grid">
          {principles.map((p, i) => (
            <div key={i} className="iso14001-principle-card">
              <div className="iso14001-principle-icon-box">{p.icon}</div>
              <h4 className="iso14001-principle-title">{p.title}</h4>
              <p className="iso14001-principle-text">{p.text}</p>
            </div>
          ))}
        </div>

        <h2 className="section-heading">ISO 14001 Certification Process</h2>
        <div className="iso14001-steps-container">
          {steps.map((s, i) => (
            <div key={i} className="iso14001-step-card">
              <div className="iso14001-step-number">{s.id}</div>
              <div className="iso14001-step-content">
                <h4 className="iso14001-step-title">{s.title}</h4>
                <p className="iso14001-step-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-heading">Industries Benefiting from ISO 14001</h2>
        <ul className="iso14001-industries-list">
          {industries.map((ind, i) => (
            <li key={i} className="iso14001-industry-item">
              {ind}
            </li>
          ))}
        </ul>

        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="iso14001-faq-container">
          {faqs.map((f, i) => (
            <div key={i} className="iso14001-faq-item">
              <h4 className="iso14001-faq-question">Q{i + 1}: {f.q}</h4>
              <p className="iso14001-faq-answer">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="iso14001-cta-section">
        <h2 className="iso14001-cta-title">Start Your Sustainability Journey Today</h2>
        <p className="iso14001-cta-text">
          Achieving ISO 14001 certification not only enhances your reputation but also
          ensures compliance, reduces operational costs, and strengthens stakeholder trust.
          Begin your journey towards a greener and more sustainable future today.
        </p>
      </footer>
      <CountrySelector
        serviceName="ISO 14001"
      />
    </div>
    

  );
};

export default Iso14001;