import React from "react";
import "../styles/ServicesTimeline.css";

const steps = [
  {
    id: "01",
    title: "Anytime Money",
    text: "Logged in users can view full social service",
    img: "https://picsum.photos/300/300?random=1",
    icon: "💰",
  },
  {
    id: "02",
    title: "Appointment",
    text: "Your work on this project has been impactful",
    img: "https://picsum.photos/300/300?random=2",
    icon: "📅",
  },
  {
    id: "03",
    title: "Client Needs",
    text: "Nail it down helicopter view on your plate",
    img: "https://picsum.photos/300/300?random=3",
    icon: "🧑‍💼",
  },
  {
    id: "04",
    title: "Medical Health",
    text: "Table the discussion scope creep backlog",
    img: "https://picsum.photos/300/300?random=4",
    icon: "⚕️",
  },
];

const ServicesTimeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">This Planning Needs Your Growth</h2>
      <div className="timeline-container">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-img">
              <img src={step.img} alt={step.title} />
              <div className="timeline-icon">{step.icon}</div>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <span className="step-number">{step.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTimeline;
