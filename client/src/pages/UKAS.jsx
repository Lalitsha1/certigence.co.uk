import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorisationDetail.css";
import "../styles/ukas.css";

export default function UKAS() {
  return (
    <div className="auth-detail ukas-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          {/* <div className="ukas-hero-logo">
            <img
              src="/ukas-logo.jpg"
              alt="UKAS logo"
              width={220}
              height={88}
              loading="lazy"
              decoding="async"
            />
          </div> */}
          <h1>United Kingdom Accreditation Service (UKAS)</h1>
          <p>UKAS is the UK’s National Accreditation Body for certification, testing, inspection and calibration activities.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <div className="logo-wrap">
              {/* <div className="logo-tile">
                <img
                  className="logo-img"
                  src="https://www.ukas.com/wp-content/uploads/2020/06/UKAS-Logo.png"
                  alt="UKAS logo"
                  width={200}
                  height={80}
                  loading="lazy"
                  decoding="async"
                />
              </div> */}
              <div>
                <h2 className="section-title h2" id="about-ukas">About UKAS</h2>
                <p className="lead">
                  UKAS assesses and accredits organisations that provide certification, testing, inspection and calibration
                  services. Accreditation confirms competence, impartiality and consistent performance.
                </p>
              </div>
            </div>

            <h3 className="section-title h2" id="about1">Why accreditation matters</h3>
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

            <h3 className="section-title h2"  id="about2">Typical standards supported</h3>
            <ul className="list">
              <li>ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (OH&S)</li>
              <li>ISO 27001 (Information Security), ISO 22000 (Food Safety)</li>
            </ul>

            <h3 className="section-title h2 "  id="about3">Benefits for organisations</h3>
            <ul className="list">
              <li>Greater acceptance of certificates in tenders and global supply chains.</li>
              <li>More trusted claims when engaging regulators, customers and partners.</li>
              <li>Improved internal discipline through periodic surveillance and review.</li>
              <li>Clearer scope definitions that help avoid misrepresentation.</li>
            </ul>

            <h3 className="section-title h2"  id="about4">Example scope statements</h3>
            <ul className="list">
              <li>“Provision of design and manufacture of precision components at Site A and Site B.”</li>
              <li>“Information security management for hosted SaaS services at the London data centre.”</li>
            </ul>

            <div className="inline-illustration img-card" style={{ marginTop: 12 }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Certificate_icon.svg/1024px-Certificate_icon.svg.png"
                alt="Accreditation certificate concept"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <aside className="card">
            <div className="hero-image img-card">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop"
                alt="London skyline and government district"
                loading="lazy"
              />
            </div>

            <div className="hero-image img-card" style={{ marginTop: 12 }}>
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1400&auto=format&fit=crop"
                alt="Laboratory equipment and calibration"
                loading="lazy"
              />
            </div>

            <div className="hero-image img-card" style={{ marginTop: 12 }}>
              <img
                src="https://th.bing.com/th/id/OIG4.y6lhmQQVTQq4l26xZ5gH?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="Calibration bench overview"
                loading="lazy"
              />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title h2"  id="about5">Quick facts</h2>
          <ul className="list">
            <li>Accreditation underpins confidence in certification, inspection and testing.</li>
            <li>Accredited bodies are assessed for competence, impartiality and performance.</li>
            <li>Accreditation scopes describe the exact activities and locations covered.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title h2"  id="about16">How accreditation works (high level)</h2>
          <ol className="list">
            <li>Assessment planning and impartiality review.</li>
            <li>Witnessed audits and evaluation of certification decisions.</li>
            <li>Corrective actions and close‑out, followed by surveillance.</li>
          </ol>
          <h3 className="section-title h2"  id="about7">Using certification and accreditation marks</h3>
          <ul className="list">
            <li>Use marks in a way that does not mislead or imply product certification.</li>
            <li>Reference the relevant ISO standard and certificate number where needed.</li>
            <li>Remove or suspend use if certification is withdrawn or suspended.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title h2"  id="about8">Areas UKAS accredits</h2>
          <ul className="list">
            <li>
              Certification bodies for management systems (e.g., ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000).
            </li>
            <li>Testing and calibration laboratories across multiple disciplines.</li>
            <li>Inspection bodies conducting conformity assessment activities.</li>
            <li>Medical laboratories and proficiency testing providers in specific scopes.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title h2 "  id="about9">Who relies on UKAS accreditation</h2>
          <ul className="list">
            <li>Businesses seeking credible certificates for tenders and supply chains.</li>
            <li>Regulators and authorities referencing accredited results.</li>
            <li>Customers and the public looking for trustworthy, impartial assurance.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title h2 "  id="about10">How to check accreditation status</h2>
          <ul className="list">
            <li>Use the UKAS public directory to confirm an organisation’s current accreditation and scope.</li>
            <li>Verify scope documents, locations, and any restrictions noted in the listing.</li>
            <li>Ensure the certificate references an accredited certification body and relevant standard.</li>
          </ul>
        </article>

        <article className="card">
          <h2 className="section-title h2  "  id="about11"> Accreditation vs Certification</h2>
          <ul className="list">
            <li>
              <strong>Accreditation</strong>: recognition that a conformity assessment body (CB/inspection/lab) is competent and
              impartial.
            </li>
            <li>
              <strong>Certification</strong>: evaluation of an organisation against a standard (e.g., ISO 9001) leading to a
              certificate.
            </li>
            <li>Accreditation underpins certification by assuring the certifier’s competence and governance.</li>
          </ul>
        </article>


        <article className="card">
          <h2 className="section-title"  id="about12">More visuals</h2>
          <div className="image-grid">
            <div className="grid-item img-card">
              <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="Google image 1" loading="lazy" />
            </div>
            <div className="grid-item img-card">
              <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Google image 2" loading="lazy" />
            </div>
            <div className="grid-item img-card">
              <img src="https://www.gstatic.com/webp/gallery/3.jpg" alt="Google image 3" loading="lazy" />
            </div>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}
