import React, { useEffect } from "react";
import "../styles/ServicesTimeline.css";

const steps = [
  {
    id: "01",
    title: "Step 1 – Application & Enquiry",
    text: "The process begins when an organisation submits a certification application. We collect details such as company size, scope of activities, locations, and standards required. Based on this, we provide a customised certification proposal with scope and fees.",
    img: "images/stage4.jpeg",
  },
  {
    id: "02",
    title: "Step 2 – Application Review & Agreement",
    text: "Our team reviews the application to confirm eligibility and scope. A formal certification agreement is signed to ensure impartiality and mutual understanding.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "03",
    title: "Step 3 – Audit Planning",
    text: "We assign a qualified audit team with the right industry expertise. An audit plan is shared in advance, covering timelines, requirements, and audit stages.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "04",
    title: "Step 4 – Stage 1 Audit (Document Review)",
    text: "The Stage 1 audit evaluates your organisation's documentation, processes, and readiness. Any gaps or areas of improvement are highlighted before moving to Stage 2.",
    img: "images/Stage1.jpeg ",
  },
  {
    id: "05",
    title: "Step 5 – Stage 2 Audit (On-site / Remote Assessment)",
    text: "Our auditors conduct a detailed on-site or remote assessment of your operations. We verify compliance with the chosen ISO standard(s) and check for effectiveness. Non-conformities, if any, are reported with guidance for corrective action.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "06",
    title: "Step 6 – Certification Decision",
    text: "The audit report is reviewed by an independent certification committee. If compliance is demonstrated, Certigence issues an accredited ISO certificate.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "07",
    title: "Step 7 – Certificate Issuance",
    text: "The official ISO certificate is awarded, valid for 3 years, subject to surveillance audits. The certificate is internationally recognised and can be verified by stakeholders.",
    img: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "08",
    title: "Step 8 – Surveillance Audits (Ongoing Compliance)",
    text: "Annual surveillance audits ensure that compliance is maintained. This helps businesses continuously improve and retain certification.",
    img: "https://images.unsplash.com/photo-1560264357-8d9202250f21?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "09",
    title: "Step 9 – Recertification",
    text: "At the end of the 3-year cycle, a recertification audit is conducted. Successful recertification ensures uninterrupted global recognition.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
];

const ServicesTimeline = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".timeline-card, .timeline-line path")
      .forEach((el) => {
        observer.observe(el);
      });
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <button className="how-btn">▶ How We Work</button>
        <h2 className="timeline-title">This Planning Needs Your Growth</h2>
      </div>

      <div className="timeline-wrapper">
        <svg
          className="timeline-line"
          viewBox="0 0 2000 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 20 150 
               C 300 50, 600 250, 900 150
               S 1200 50, 1500 150
               S 1800 250, 2000 150"
          />
        </svg>

        <div className="timeline-container">
          {steps.map((step, index) => (
            <div key={index} className={`timeline-step step-${index + 1}`}>
              <div className="step-number-top">{index + 1}</div>

              <div className="timeline-card">
                <div className="timeline-img-circle">
                  <img src={step.img} alt={step.title} />
                </div>
                <div className="timeline-text">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTimeline;
