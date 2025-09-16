import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/serviceBase.css";

export default function iso20000() {
  return (
    <div className="service-page">
      <section className="service-hero">
        <h1>ISO 20000</h1>
        <p>Overview and implementation guidance.</p>
      </section>
      <main className="service-wrap">
        <article className="service-card">
          <h2>Overview</h2>
          <p className="lead">This service page explains the purpose, scope and typical implementation steps for ISO 20000, helping organisations adopt a recognised, structured approach.</p>
          <h3>Core elements</h3>
          <ul className="service-list">
            <li>Policy, objectives and governance</li>
            <li>Risk-based planning and controls</li>
            <li>Competence, awareness and communication</li>
            <li>Performance evaluation and improvement</li>
          </ul>
        </article>
        <article className="service-card">
          <h2>Image gallery</h2>
          <div className="service-gallery">
            <div className="service-img"><img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="ISO 20000 visual 1" loading="lazy" /></div>
            <div className="service-img"><img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="ISO 20000 visual 2" loading="lazy" /></div>
            <div className="service-img"><img src="https://www.gstatic.com/webp/gallery/3.jpg" alt="ISO 20000 visual 3" loading="lazy" /></div>
          </div>
        </article>
        <div className="back-row">
          <Link className="back-link" to="/">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
