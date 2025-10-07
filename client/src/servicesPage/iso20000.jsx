import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/serviceBase.css";
import "../servicespage-css/iso20000.css";
import CountrySelector from "../components/CountrySelector";

export default function iso20000() {
  const handleImgError = (e) => {
    const fallback = "https://placehold.co/1400x900?text=Image";
    if (e?.target && e.target.src !== fallback) e.target.src = fallback;
  };

  return (
    <div className="service-page iso20000">
      <section className="service-hero itsm-hero">
        <div className="hero-inner">
          <h1>ISO/IEC 20000-1: IT Service Management</h1>
          <p>Design, deliver and continually improve reliable, business‑aligned IT services. Build trust with a certifiable ITSM management system.</p>
        </div>
      </section>

      <main className="service-wrap">
        <article className="service-card">
          <h2>What is ISO/IEC 20000‑1?</h2>
          <p className="lead">ISO/IEC 20000‑1 specifies requirements for establishing, implementing, maintaining and continually improving an IT Service Management (ITSM) system. It aligns service delivery to business needs through policy, processes, roles, performance metrics and continual improvement.</p>
          <div className="two-col">
            <div>
              <h3>Key Processes</h3>
              <ul className="service-list list-check">
                <li>Service catalogue & SLA/SLO management</li>
                <li>Incident, request & problem management</li>
                <li>Change, release & configuration management</li>
                <li>Capacity, availability & continuity</li>
                <li>Supplier & information security alignment</li>
              </ul>
            </div>
            <div>
              <h3>Why it matters</h3>
              <ul className="service-list list-check">
                <li>Consistent, repeatable service outcomes</li>
                <li>Reduced downtime and faster recovery</li>
                <li>Clear roles, accountability and escalation</li>
                <li>Audit‑ready evidence and governance</li>
              </ul>
            </div>
          </div>

          <div className="image-container ratio-16x9">
            <img
              className="img-elevated"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80"
              alt="IT operations center and dashboards"
              loading="lazy"
              width="1600"
              height="900"
              sizes="(max-width: 1200px) 100vw, 1200px"
              onError={handleImgError}
            />
          </div>
        </article>

        <article className="service-card glass">
          <h2>Benefits</h2>
          <div className="feature-grid">
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG1.NavuzuONAAeO_zEMaF.b?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Customer experience" loading="lazy" onError={handleImgError} />
              <div className="feature-body"><h4>Customer Experience</h4><p>Predictable SLAs, faster resolutions and transparent comms.</p></div>
            </div>
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG4.bBS3h1PtNT8ufiTydIuF?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Operational efficiency" loading="lazy" onError={handleImgError} />
              <div className="feature-body"><h4>Operational Efficiency</h4><p>Standardised workflows, automation, less rework and waste.</p></div>
            </div>
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG4.UutKBy.WibA6I1y8p7pe?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Risk reduction" loading="lazy" onError={handleImgError} />
              <div className="feature-body"><h4>Risk Reduction</h4><p>Controlled changes, stronger continuity and supplier control.</p></div>
            </div>
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG4.rej3q6Eb1OVM9FH0.3fT?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Business alignment" loading="lazy" onError={handleImgError} />
              <div className="feature-body"><h4>Business Alignment</h4><p>Services mapped to outcomes, measurable value delivery.</p></div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Journey</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Scope & Governance</h4><p>Define services, stakeholders, SLAs, policy and roles.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Process Design</h4><p>Map processes (incident, change, problem, etc.) and RACI.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Tooling & Data</h4><p>Configure ITSM platform, CMDB, automation and knowledge.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Operate & Measure</h4><p>Run, measure SLAs/SLOs, dashboards and assurance.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Continual Improvement</h4><p>Reviews, CSI register and optimisation roadmap.</p></div></div>
          </div>
        </article>

        <article className="service-card">
          <h2>What We Deliver</h2>
          <div className="meta">
            <span className="pill">ITSM Policy & SLAs</span>
            <span className="pill">Process Playbooks</span>
            <span className="pill">RACI & Roles</span>
            <span className="pill">Service Catalogue</span>
            <span className="pill">Metrics & Dashboards</span>
            <span className="pill">Audit Evidence Pack</span>
          </div>
        </article>

        <article className="service-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Do we need a specific ITSM tool?</summary>
              <p>No. The standard is tool‑agnostic. We map processes to your chosen platform (ServiceNow, JSM, Freshservice, etc.).</p>
            </details>
            <details>
              <summary>How long does certification take?</summary>
              <p>Typical timelines are 8–14 weeks depending on service scope, tooling maturity and evidence readiness.</p>
            </details>
            <details>
              <summary>Can we integrate with ISO 27001 or 22301?</summary>
              <p>Yes. Policies, risk treatment and continuity align well across management systems.</p>
            </details>
          </div>
        </article>

        <article className="service-card">
          <h2>Image Gallery</h2>
          <div className="service-gallery gallery-advanced">
            <div className="service-img"><img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80" alt="Ops center" loading="lazy" onError={handleImgError} /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=1400&q=80" alt="Team workflow" loading="lazy" onError={handleImgError} /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80" alt="Automation" loading="lazy" onError={handleImgError} /></div>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
          <Link className="back-link alt" to="/contact">Talk to an Expert</Link>
        </div>
      <CountrySelector
        serviceName="ISO 20000"
      />
      </main>
    </div>
  );
}
