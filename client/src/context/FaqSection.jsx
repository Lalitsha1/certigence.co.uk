import React, { useState } from "react";
import "../styles/FaqSection.css";
import { FaCircleQuestion, FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

const faqData = [
  {
    question: "Q1. What is ISO certification and why is it important?",
    answer:
      "A1. ISO certification is an international standard that shows a company meets quality, safety, and efficiency requirements. It builds customer trust, improves credibility, and helps win new business.",
  },
  {
    question: "Q2. Which ISO certification is best for my business?",
    answer:
      "A2. It depends on your industry: ISO 9001 – Quality Management  , ISO 14001 – Environmental Management , ISO 45001 – Occupational Health & Safety  , ISO 27001 – Information Security",
  },
  {
    question: "Q3. How long does ISO certification take?",
    answer:
      "A3. The process usually takes 3–6 months, depending on your company size, readiness, and audit results.",
  },
  {
    question: "Q4. How much does ISO certification cost?",
    answer:
      "A4. Costs vary based on company size and certification type. For small businesses, it may start from ₹40,000, while larger organizations may pay more.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleIndex = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="faq-container">
      {/* Left */}
      <div className="faq-left">
        <button className="faq-tag">
          <FaCircleQuestion /> Our Faq Us
        </button>
        <h2 className="faq-title">
          Get This Asked Answers <br />
          <span>Common Questions</span>
        </h2>

        <div className="faq-items">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleIndex(index)}
            >
              <div className="faq-question">
                <FaArrowRightLong className="faq-icon" />
                <span>{faq.question}</span>
                <FaAngleDown className="faq-toggle" />
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-bottom-link">
          <FaArrowRightLong /> 58+ Common Questions and How To{" "}
          <span>Answer?</span>
        </div>
      </div>

      {/* Right */}
      <div className="faq-right">
        <div className="faq-image-box">
          <img
            className="faq-main-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebpxUJYJWqbzhf0jejoWWOqPWMTYQBjjwSA&s"
            alt="thinking man"
          />

          <div className="faq-sub-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebpxUJYJWqbzhf0jejoWWOqPWMTYQBjjwSA&s"
              alt="couple"
            />
          </div>

          <div className="faq-decor">
            <div className="faq-icon-circle">
              <FaCircleQuestion />
            </div>
            <div className="faq-overlay-label">FAQ'S</div>
            <div className="faq-badge">
              <span className="umbrella">☂️</span> Excellent Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
