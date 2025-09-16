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
          <h2 className="section-title">Accreditation lifecycle</h2>
          <ul className="list">
            <li>Initial assessment including office review, witnessing of audits and competence evaluation.</li>
            <li>Certificate of accreditation with a defined scope, locations and any limitations.</li>
            <li>Ongoing surveillance to verify impartiality, decision controls and the audit programme.</li>
            <li>Reassessment at planned intervals with scope updates where applicable.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">Impartiality & governance</h2>
          <ul className="list">
            <li>Independent committee oversight of impartiality risks and mitigation actions.</li>
            <li>Clear separation of audit, review and certification decision functions.</li>
            <li>Defined competence criteria and authorisation for auditors and decision makers.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">How to verify a certificate</h2>
          <ul className="list">
            <li>Check the certification body’s accreditation status and scope.</li>
            <li>Confirm the certificate number, client name, applicable standard and locations.</li>
            <li>Ensure the certificate is within validity and not suspended or withdrawn.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">FAQs</h2>
          <ul className="list">
            <li>What is accreditation? Independent recognition that a body is competent and impartial.</li>
            <li>What is certification? Confirmation that an organisation meets a specific standard.</li>
            <li>Why UAF? Wider confidence and acceptance of accredited outcomes.</li>
          </ul>
        </article>

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
