import React from "react";
import "../styles/FAQ.css";

const faqs = [
  {
    group: "General ISO",
    items: [
      { q: "What is ISO and why does it matter?", a: "ISO publishes globally recognized standards that improve quality, safety, security, efficiency and sustainability. Certification proves you meet a standard’s requirements and builds trust." },
      { q: "Accreditation vs certification — what’s the difference?", a: "Accreditation confirms a certification body is competent (e.g., UKAS/IAS/UAF/EGAC). Certification confirms an organization has been assessed against a standard (e.g., ISO 9001)." },
      { q: "Do small businesses benefit from ISO?", a: "Yes — it scales for SMEs, helps win tenders, reduces rework and clarifies roles and KPIs." },
    ],
  },
  {
    group: "Certification Process",
    items: [
      { q: "How long does certification take?", a: "Usually 4–12 weeks depending on scope, size, sites and readiness." },
      { q: "What are the steps to get certified?", a: "1) Gap & plan  2) Documentation & implementation  3) Internal audit & management review  4) Stage 1 & Stage 2 audits  5) Certification & surveillance." },
      { q: "How long is a certificate valid?", a: "Typically 3 years with annual/six‑monthly surveillance and full recertification at year 3." },
      { q: "Can we integrate multiple standards?", a: "Yes — an IMS combines common processes across 9001/14001/45001/27001 etc." },
    ],
  },
  {
    group: "Popular Standards (overview)",
    items: [
      { q: "What is ISO 9001?", a: "QMS — consistent processes, risk‑based thinking and continual improvement." },
      { q: "What is ISO 27001?", a: "ISMS — risk assessment, Annex A controls, governance and incident response." },
      { q: "What is ISO 45001?", a: "OH&S — identify hazards, reduce risks and improve worker wellbeing." },
      { q: "What is ISO 22000 / FSSC 22000?", a: "Food Safety — ISO 22000 + GFSI recognized FSSC 22000 using ISO/TS 22002‑x PRPs." },
    ],
  },
  {
    group: "Environmental & Continuity",
    items: [
      { q: "What is ISO 14001?", a: "EMS — manage aspects, obligations and programs to reduce environmental impacts." },
      { q: "What is ISO 22301?", a: "BCMS — keep or quickly restore critical services after disruption." },
    ],
  },
  {
    group: "Labs, Medical & Energy",
    items: [
      { q: "What is ISO/IEC 17025?", a: "Labs — methods, measurement traceability, equipment and reporting." },
      { q: "What is ISO 15189?", a: "Medical labs — quality and competence with patient‑centric requirements." },
      { q: "What is ISO 50001?", a: "Energy — improve energy performance, baselines and targets." },
    ],
  },
  {
    group: "Governance & Ethics",
    items: [
      { q: "What is ISO 37001?", a: "Anti‑bribery — reasonable and proportionate controls across the organization." },
      { q: "What is ISO 13485?", a: "Medical devices QMS — aligns with regulatory expectations (e.g., MDR, FDA)." },
    ],
  },
  {
    group: "All ISO Standards (site coverage)",
    items: [
      { q: "ISO 9001 (Quality Management)", a: "Improve consistency, reduce defects and raise customer satisfaction." },
      { q: "ISO 14001 (Environmental Management)", a: "Reduce environmental impacts and comply with obligations." },
      { q: "ISO 45001 (Occupational Health & Safety)", a: "Hazard identification, risk controls and participation." },
      { q: "ISO 13485 (Medical Devices QMS)", a: "Quality management for medical device lifecycle." },
      { q: "ISO/IEC 27001 (Information Security)", a: "ISMS with risk assessment and Annex A controls." },
      { q: "ISO 37001 (Anti-bribery)", a: "Anti‑corruption controls and governance." },
      { q: "ISO 50001 (Energy Management)", a: "Energy performance, baselines and targets." },
      { q: "ISO 22000 (Food Safety)", a: "Food safety management using HACCP principles." },
      { q: "FSSC 22000 (Scheme)", a: "GFSI scheme built on ISO 22000 + PRPs." },
      { q: "ISO 10002 (Customer Complaints)", a: "Effective complaints handling to improve satisfaction." },
      { q: "ISO 22301 (Business Continuity)", a: "Maintain or recover critical activities during disruption." },
      { q: "ISO 28000 (Supply Chain Security)", a: "Security risks and controls for supply chains." },
      { q: "ISO 14064 (GHG)", a: "GHG quantification and verification guidance." },
      { q: "ISO 20121 (Event Sustainability)", a: "Sustainable event management system." },
      { q: "ISO 26000 (Social Responsibility)", a: "Guidance on integrating social responsibility." },
      { q: "ISO/IEC 27017 (Cloud Security Controls)", a: "Cloud‑specific security guidance for providers and customers." },
      { q: "ISO/IEC 27018 (PII in Public Cloud)", a: "Protection of personal data in public cloud." },
      { q: "ISO/IEC 27701 (Privacy Information)", a: "PIMS extension to ISO 27001/27002." },
      { q: "ISO/IEC 20000-1 (IT Service Management)", a: "Requirements for IT service delivery and improvement." },
      { q: "ISO 45003 (Psychosocial H&S)", a: "Guidance for psychosocial risk within OH&S MS." },
      { q: "ISO 39001 (Road Traffic Safety)", a: "RTS outcomes for organizations influencing road safety." },
      { q: "ISO 31000 (Risk Management)", a: "Framework and processes to manage risk (guidance)." },
      { q: "ISO 22316 (Organizational Resilience)", a: "Build resilience capabilities across the organization." },
      { q: "ISO/IEC 17025 (Testing & Calibration Labs)", a: "Laboratory competence requirements." },
      { q: "ISO 15189 (Medical Laboratories)", a: "Quality and competence requirements for medical labs." },
      { q: "ISO 21001 (Educational Organizations)", a: "MS for educational organizations focused on learners." },
      { q: "ISO 21930 (EPD for Building Products)", a: "Environmental product declarations framework." },
      { q: "HACCP (Codex)", a: "Hazard Analysis and Critical Control Points." },
      { q: "Carbon Neutral (PAS 2060)", a: "Demonstrate carbon neutrality with clear disclosure." },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <h1>ISO FAQs</h1>
          <p>Answers to the most common ISO questions — clear, practical and up‑to‑date.</p>
        </div>
      </section>

      <main className="faq-content">
        {faqs.map((block, i) => (
          <section key={i} className="faq-block">
            <h2 className="faq-heading">{block.group}</h2>
            <div className="faq-accordion">
              {block.items.map((item, j) => (
                <details key={j} className="faq-item">
                  <summary>
                    <span className="q">{item.q}</span>
                    <span className="chev" aria-hidden>›</span>
                  </summary>
                  <div className="a">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}


