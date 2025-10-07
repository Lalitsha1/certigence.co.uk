import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso27018.css";
import CountrySelector from "../components/CountrySelector";

export default function iso27018() {
  return (
    <div className="service-page iso27018">
      <section className="service-hero pii-hero">
        <div className="hero-inner">
          <h1>ISO/IEC 27018: Protection of PII in Public Clouds</h1>
          <p>Code of practice for cloud service providers acting as PII processors — adding privacy controls on top of ISO/IEC 27002 for public cloud.</p>
        </div>
      </section>
      <main className="service-wrap">
        <article className="service-card">
          <h2>What is ISO/IEC 27018?</h2>
          <p className="lead">ISO/IEC 27018 provides guidance to implement privacy principles for processing personally identifiable information (PII) in public clouds, when the cloud provider acts as a PII processor. It extends ISO/IEC 27002 with cloud‑specific controls to meet data protection expectations, contracts, and laws.</p>

          <div className="two-col">
            <div>
              <h3>Who it’s for</h3>
              <ul className="service-list list-check">
                <li>Public cloud providers (IaaS, PaaS, SaaS) acting as PII processors</li>
                <li>SaaS vendors that host and process customer PII</li>
                <li>Enterprises evaluating cloud providers’ privacy controls</li>
              </ul>
            </div>
            <div>
              <h3>Key principles</h3>
              <ul className="service-list list-check">
                <li>Lawful, fair and transparent processing</li>
                <li>Purpose limitation and data minimisation</li>
                <li>Accuracy, storage limitation and security</li>
                <li>Support for data subject rights and redress</li>
              </ul>
            </div>
          </div>

          <div className="image-container ratio-16x9">
            <img className="img-elevated" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80" alt="Cloud privacy and data protection" loading="lazy" />
          </div>
        </article>

        <article className="service-card glass">
          <div className="feature-grid">
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80" alt="Consent and contracts" loading="lazy" />
              <div className="feature-body">
                <h4>Lawful Basis & Contracts</h4>
                <p>Support controller’s lawful basis, DPA clauses, and jurisdictional disclosure.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80" alt="Data subject rights" loading="lazy" />
              <div className="feature-body">
                <h4>Data Subject Rights</h4>
                <p>Assist with access, rectification, erasure, and portability requests.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80" alt="Security of processing" loading="lazy" />
              <div className="feature-body">
                <h4>Security of Processing</h4>
                <p>Encryption, segregation, logging and breach notification support.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e2?auto=format&fit=crop&w=1400&q=80" alt="Deletion and return of data" loading="lazy" />
              <div className="feature-body">
                <h4>Return & Deletion</h4>
                <p>Verified data return and secure deletion at contract end or request.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Journey</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Context & Roles</h4><p>Define controller/processor roles, jurisdictions and services.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>PII Inventory</h4><p>Map PII categories, purposes, retention and transfers.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Controls & DPAs</h4><p>Implement 27018 controls and contract/DPA clauses.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Assurance</h4><p>Evidence logging, incident response and breach notification.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Improve</h4><p>Review metrics, rights requests and supplier oversight.</p></div></div>
          </div>
        </article>

        <article className="service-card">
          <h2>What We Deliver</h2>
          <div className="meta">
            <span className="pill">PII Inventory & Data Flows</span>
            <span className="pill">Data Processing Addendum</span>
            <span className="pill">Sub‑processor Management</span>
            <span className="pill">Encryption & Key Policy</span>
            <span className="pill">Retention & Deletion SOPs</span>
            <span className="pill">Breach Response Playbook</span>
          </div>
        </article>

        <article className="service-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Do we need ISO 27001 first?</summary>
              <p>27018 complements ISO/IEC 27001/27002. Certification is against 27001 with 27018 as additional guidance and evidence.</p>
            </details>
            <details>
              <summary>Is 27018 only for public clouds?</summary>
              <p>It focuses on public clouds acting as PII processors, but principles help any cloud processing PII.</p>
            </details>
            <details>
              <summary>How long does implementation take?</summary>
              <p>Typical timelines: 6–12 weeks depending on scope, data flows and evidence readiness.</p>
            </details>
          </div>
        </article>

        <article className="service-card">
          <h2>Image Gallery</h2>
          <div className="service-gallery gallery-advanced">
            <div className="service-img"><img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80" alt="Secure cloud" loading="lazy" /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80" alt="Audit evidence" loading="lazy" /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1523966211575-eb4a6b8d6f18?auto=format&fit=crop&w=1400&q=80" alt="Data lifecycle" loading="lazy" /></div>
            {/* <div className="service-img wide"><img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80" alt="Global privacy" loading="lazy" /></div> */}
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
          <Link className="back-link alt" to="/contact">Talk to an Expert</Link>
        </div>
      <CountrySelector
        serviceName="ISO 27018"
      />
      </main>
    </div>
  );
}
