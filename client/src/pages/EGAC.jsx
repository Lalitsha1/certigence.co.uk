import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorisationDetail.css";
import "../styles/egac.css";

export default function EGAC() {
  return (
    <div className="auth-detail egac-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <h1>Egyptian Accreditation Council (EGAC)</h1>
          <p>National accreditation body of Egypt operating to ISO/IEC 17011.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <div className="logo-wrap">
              <div className="logo-tile">
                <img className="logo-img" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" alt="Accreditation concept" />
              </div>
              <div>
                <h2 className="section-title">About EGAC</h2>
                <p className="lead">EGAC accredits certification bodies, testing and calibration laboratories, and inspection bodies in accordance with international requirements, strengthening trust in issued certifications.</p>
              </div>
            </div>

            <h3 className="section-title">Benefits of EGAC‑accredited certification</h3>
            <ul className="list">
              <li>Improved market acceptance and regulatory confidence.</li>
              <li>Ongoing witness assessments and oversight of audit delivery.</li>
              <li>Consistency of certification decisions and impartial governance.</li>
            </ul>

            <div className="meta">
              <div className="pill">National body</div>
              <div className="pill">ISO/IEC 17011 aligned</div>
              <div className="pill">Witnessed audits</div>
            </div>

            <h3 className="section-title">Sectors commonly covered</h3>
            <ul className="list">
              <li>Manufacturing, services, food safety, information security.</li>
              <li>Environmental management and occupational health and safety.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop" alt="Modern office workspace" />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title">Recognition & scope</h2>
          <p className="lead">EGAC operates a national accreditation program with international peer recognition. It oversees certification bodies, labs and inspection bodies to strengthen confidence in certificates and reports.</p>
          <h3 className="section-title">Process overview</h3>
          <ol className="list">
            <li>Document review and impartiality analysis.</li>
            <li>Office assessment and witnessing activities.</li>
            <li>Findings, corrective action verification, decision and surveillance.</li>
          </ol>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}
