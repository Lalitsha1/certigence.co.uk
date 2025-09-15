import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorisationDetail.css";
import "../styles/fssc.css";

export default function FSSC22000() {
  return (
    <div className="auth-detail fssc-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <h1>FSSC 22000 Certification Scheme</h1>
          <p>GFSI‑recognised scheme for robust Food Safety Management Systems.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <div className="logo-wrap">
              <div className="logo-tile">
                <img className="logo-img" src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800&auto=format&fit=crop" alt="Food safety concept" />
              </div>
              <div>
                <h2 className="section-title">What is FSSC 22000?</h2>
                <p className="lead">FSSC 22000 is built on ISO 22000, prerequisite programs (ISO/TS 22002‑x) and additional FSSC requirements. It helps organisations demonstrate strong control of food safety hazards across the supply chain.</p>
              </div>
            </div>

            <h3 className="section-title">Key components</h3>
            <ul className="list">
              <li>ISO 22000 framework for food safety management.</li>
              <li>Sector‑specific PRPs (ISO/TS 22002 series).</li>
              <li>Additional FSSC scheme requirements.</li>
            </ul>

            <div className="meta">
              <div className="pill">GFSI recognised</div>
              <div className="pill">Supply chain coverage</div>
              <div className="pill">Regulatory trust</div>
            </div>

            <h3 className="section-title">Who benefits?</h3>
            <ul className="list">
              <li>Food manufacturing, packaging, storage, and transport.</li>
              <li>Retailers and regulators looking for GFSI recognition.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1526401281623-28f5f76a6f27?q=80&w=1400&auto=format&fit=crop" alt="Food production line" />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title">Implementation guidance</h2>
          <p className="lead">Establish governance, define scope, map processes, conduct hazard analysis (HACCP), implement PRPs, and drive continual improvement through internal audits and management review. Supplier control and traceability are critical.</p>
          <h3 className="section-title">Audit & certification cycle</h3>
          <ol className="list">
            <li>Stage 1 readiness review and Stage 2 certification audit.</li>
            <li>Annual surveillance focused on critical controls and performance.</li>
            <li>Full re‑certification every three years.</li>
          </ol>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}
