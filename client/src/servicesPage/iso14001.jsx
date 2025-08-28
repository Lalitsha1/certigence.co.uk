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
  Building2,
  Lightbulb,
} from "lucide-react";
import "../styles/servicespage-css/iso14001.css";

const benefits = [
  {
    icon: <Leaf size={40} />,
    title: "Environmental Responsibility",
    text: "ISO 14001 ensures organizations take accountability for environmental impact, reducing pollution and conserving resources. It drives eco-friendly practices that protect biodiversity and promote sustainability in the long run.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    icon: <Globe size={40} />,
    title: "Global Recognition",
    text: "Being internationally recognized, ISO 14001 certification increases credibility across global markets. It positions organizations as environmentally responsible, making them more attractive to investors and partners.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    icon: <Recycle size={40} />,
    title: "Waste Reduction",
    text: "By implementing ISO 14001, businesses streamline resource use, reduce waste generation, and encourage recycling initiatives. This leads to both environmental and cost-saving benefits.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    icon: <Factory size={40} />,
    title: "Regulatory Compliance",
    text: "ISO 14001 helps organizations comply with legal and regulatory environmental requirements. It reduces the risk of penalties and ensures smooth operations across regions.",
    img: "https://images.unsplash.com/photo-1581091012184-5c2fca48d9f5",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Growth",
    text: "Sustainability is increasingly tied to growth. ISO 14001 helps companies tap into new markets, strengthen reputation, and secure contracts where environmental certification is a prerequisite.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    icon: <Award size={40} />,
    title: "Competitive Advantage",
    text: "Certification differentiates businesses from competitors, showing stakeholders a strong commitment to sustainability and long-term environmental goals.",
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
  },
  {
    icon: <Target size={40} />,
    title: "Strategic Focus",
    text: "Aligns environmental objectives with overall business strategy, ensuring that growth and sustainability goals complement each other.",
    img: "https://images.unsplash.com/photo-1473187983305-f615310e7daa",
  },
  {
    icon: <Users size={40} />,
    title: "Stakeholder Trust",
    text: "ISO 14001 builds stronger relationships with customers, communities, regulators, and investors by demonstrating accountability for environmental impact.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Continuous Improvement",
    text: "It encourages ongoing monitoring and improvement of environmental performance, keeping organizations adaptive and innovative.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
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
    <div className="iso14001-container">
      {/* Header */}
      <h1 className="iso14001-heading">ISO 14001 Certification</h1>
      <p className="iso14001-subtext">
        ISO 14001 is the internationally recognized standard for Environmental Management Systems (EMS). It helps organizations reduce environmental impact, comply with legal obligations, and continually improve sustainability practices. 
        Achieving ISO 14001 certification demonstrates your commitment to sustainability, resource efficiency, and long-term environmental responsibility.
      </p>

      {/* Benefits */}
      <h2 className="section-title">Why Choose ISO 14001?</h2>
      <div className="iso14001-grid">
        {benefits.map((item, index) => (
          <div key={index} className="iso14001-card">
            <div className="iso14001-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="iso14001-content">
              <div className="iso14001-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <h2 className="section-title">Principles of ISO 14001</h2>
      <div className="principles-grid">
        {principles.map((p, i) => (
          <div key={i} className="principle-card">
            <div className="principle-icon">{p.icon}</div>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="section-title">ISO 14001 Certification Process</h2>
      <div className="steps-container">
        {steps.map((s, i) => (
          <div key={i} className="step-card">
            <div className="step-circle">{s.id}</div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      {/* Industries */}
      <h2 className="section-title">Industries Benefiting from ISO 14001</h2>
      <ul className="industries-list">
        {industries.map((ind, i) => (
          <li key={i}>{ind}</li>
        ))}
      </ul>

      {/* FAQs */}
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((f, i) => (
          <div key={i} className="faq-card">
            <h4>Q{i + 1}: {f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="closing-box">
        <h2>Start Your Sustainability Journey Today</h2>
        <p>
          Achieving ISO 14001 certification not only enhances your reputation but also 
          ensures compliance, reduces operational costs, and strengthens stakeholder trust. 
          Begin your journey towards a greener and more sustainable future today.
        </p>
      </div>
    </div>
  );
};

export default Iso14001;
