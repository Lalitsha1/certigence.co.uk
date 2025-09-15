import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorisationDetail.css";
import "../styles/ukas.css";

export default function UKAS() {
  return (
    <div className="auth-detail ukas-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <h1>United Kingdom Accreditation Service (UKAS)</h1>
          <p>UKAS is the UK’s National Accreditation Body for certification, testing, inspection and calibration activities.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <div className="logo-wrap">
              <div className="logo-tile">
                {/* Using a neutral, online image instead of a local logo */}
                <img className="logo-img" src="https://images.unsplash.com/photo-1581093588401-16f71b46b0c7?q=80&w=800&auto=format&fit=crop" alt="Accreditation symbol concept" />
              </div>
              <div>
                <h2 className="section-title">About UKAS</h2>
                <p className="lead">UKAS assesses and accredits organisations that provide certification, testing, inspection and calibration services. Accreditation confirms competence, impartiality and consistent performance.</p>
              </div>
            </div>

            <h3 className="section-title">Why accreditation matters</h3>
            <ul className="list">
              <li>Confidence that certifications are issued by competent, impartial bodies.</li>
              <li>International recognition that supports regulator and customer acceptance.</li>
              <li>Ongoing surveillance and witnessed assessments to protect integrity.</li>
            </ul>

            <div className="meta">
              <div className="pill">National authority</div>
              <div className="pill">International recognition</div>
              <div className="pill">Impartial oversight</div>
            </div>

            <h3 className="section-title">Typical standards supported</h3>
            <ul className="list">
              <li>ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (OH&S)</li>
              <li>ISO 27001 (Information Security), ISO 22000 (Food Safety)</li>
            </ul>
          </article>

          <aside className="card">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop" alt="London skyline and government district" />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title">How accreditation works (high level)</h2>
          <ol className="list">
            <li>Assessment planning and impartiality review.</li>
            <li>Witnessed audits and evaluation of certification decisions.</li>
            <li>Corrective actions and close‑out, followed by surveillance.</li>
          </ol>
          <h3 className="section-title">Using certification and accreditation marks</h3>
          <ul className="list">
            <li>Use marks in a way that does not mislead or imply product certification.</li>
            <li>Reference the relevant ISO standard and certificate number where needed.</li>
            <li>Remove or suspend use if certification is withdrawn or suspended.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">Areas UKAS accredits</h2>
          <ul className="list">
            <li>Certification bodies for management systems (e.g., ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000).</li>
            <li>Testing and calibration laboratories across multiple disciplines.</li>
            <li>Inspection bodies conducting conformity assessment activities.</li>
            <li>Medical laboratories and proficiency testing providers in specific scopes.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">Who relies on UKAS accreditation</h2>
          <ul className="list">
            <li>Businesses seeking credible certificates for tenders and supply chains.</li>
            <li>Regulators and authorities referencing accredited results.</li>
            <li>Customers and the public looking for trustworthy, impartial assurance.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">How to check accreditation status</h2>
          <ul className="list">
            <li>Use the UKAS public directory to confirm an organisation’s current accreditation and scope.</li>
            <li>Verify scope documents, locations, and any restrictions noted in the listing.</li>
            <li>Ensure the certificate references an accredited certification body and relevant standard.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title">Image highlights</h2>
          <div className="image-grid">
            <div className="grid-item"><img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop" alt="Laboratory" /></div>
            <div className="grid-item"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" alt="Inspection" /></div>
            <div className="grid-item"><img src="https://images.unsplash.com/photo-1532635181-65489d0d0d44?q=80&w=1200&auto=format&fit=crop" alt="Calibration" /></div>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}
