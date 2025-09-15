import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorisationDetail.css";
import "../styles/uaf.css";

export default function UAF() {
  return (
    <div className="auth-detail uaf-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <h1>United Accreditation Foundation (UAF)</h1>
          <p>How UAF recognition supports impartial, credible certifications.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <div className="logo-wrap">
              <div className="logo-tile">
                <img className="logo-img" src="https://dashboard.uafaccreditation.org/media/logos/uaf_logo.png" alt="UAF Logo" />
              </div>
              <div>
                <h2 className="section-title">About UAF</h2>
                <p className="lead">UAF accredits management system certification bodies. Accreditation provides confidence that certifications are issued by competent, impartial, and consistently managed organisations.</p>
              </div>
            </div>

            <h3 className="section-title">What this means for you</h3>
            <ul className="list">
              <li>Certificates backed by third-party oversight of audit quality and impartiality.</li>
              <li>Ongoing surveillance of certification processes and decision-making.</li>
              <li>Recognition across diverse sectors and organisation sizes.</li>
            </ul>

            <div className="meta">
              <div className="pill">International recognition</div>
              <div className="pill">Impartial governance</div>
              <div className="pill">Surveillance & reviews</div>
            </div>

            <h3 className="section-title">Typical ISO standards under UAF</h3>
            <ul className="list">
              <li>ISO 9001, ISO 14001, ISO 45001</li>
              <li>ISO 27001, ISO 22000 and related schemes</li>
            </ul>
          </article>

          <aside className="card">
            <div className="hero-image">
              {/* Royalty‑free hero (Unsplash) */}
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" alt="Team collaboration" />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title">Recognition & scope</h2>
          <p className="lead">UAF accredits management system certification bodies operating against ISO/IEC 17021‑1. Accredited bodies demonstrate robust processes for competence management, impartiality, and decision‑making.</p>
          <h3 className="section-title">Certification process overview</h3>
          <ol className="list">
            <li>Application and contract review.</li>
            <li>Stage 1 and Stage 2 audits.</li>
            <li>Decision review and certificate issue.</li>
            <li>Annual surveillance and 3‑year recertification.</li>
          </ol>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}
