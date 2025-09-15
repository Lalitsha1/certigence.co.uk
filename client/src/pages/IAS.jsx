import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorisationDetail.css";
import "../styles/ias.css";

export default function IAS() {
  return (
    <div className="auth-detail ias-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <h1>International Accreditation Service (IAS)</h1>
          <p>Accreditation focused on technical competence and impartiality.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <div className="logo-wrap">
              <div className="logo-tile">
                <img className="logo-img" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop" alt="Standards and accreditation" />
              </div>
              <div>
                <h2 className="section-title">About IAS</h2>
                <p className="lead">IAS is a globally recognised accreditation body that assesses and accredits certification bodies to ensure they demonstrate technical competence, impartiality, and consistent delivery of audits.</p>
              </div>
            </div>

            <h3 className="section-title">Why IAS accreditation matters</h3>
            <ul className="list">
              <li>Wider market recognition of your certifications.</li>
              <li>Confidence in audit methodology and decision controls.</li>
              <li>Regular oversight via witnessed audits and periodic reviews.</li>
            </ul>

            <div className="meta">
              <div className="pill">Technical competence</div>
              <div className="pill">Impartiality focus</div>
              <div className="pill">Continuous oversight</div>
            </div>

            <h3 className="section-title">Commonly included standards</h3>
            <ul className="list">
              <li>ISO 9001, 14001, 45001</li>
              <li>ISO 27001 and sector‑specific schemes</li>
            </ul>
          </article>

          <aside className="card">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop" alt="City skyline and business district" />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title">Recognition & scope</h2>
          <p className="lead">IAS provides accreditation for certification bodies and other conformity assessment entities, focusing on technical competence and impartiality to improve acceptance of certificates.</p>
          <h3 className="section-title">Certification process overview</h3>
          <ol className="list">
            <li>Planning, risk and impartiality checks.</li>
            <li>Audits, sampling and evaluation of audit evidence.</li>
            <li>Certification decision, surveillance and periodic re‑assessment.</li>
          </ol>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}
