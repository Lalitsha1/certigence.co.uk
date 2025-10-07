import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso14064.css";
import CountrySelector from "../components/CountrySelector";

export default function ISO14064() {
  return (
    <div className="auth-detail iso14064-page">
      <section className="detail-hero ghg-hero">
        <div className="detail-hero-inner">
          <h1>ISO 14064: Greenhouse Gas Accounting & Verification</h1>
          <p>
            Build a credible greenhouse gas (GHG) inventory, set science‑based
            targets, and report emissions transparently across Scopes 1, 2, and 3.
          </p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <h2 className="section-title h2 dark">What is ISO 14064?</h2>
            <p className="lead">
              ISO 14064 is a family of standards that provides guidance and
              requirements for the quantification, monitoring, reporting, and
              verification of greenhouse gas emissions and removals. It enables
              organizations to develop a consistent, transparent GHG inventory
              and demonstrate progress toward decarbonization.
            </p>

            <div className="image-container img-card ratio-16x9">
              <img
                className="img-elevated"
                src="https://th.bing.com/th/id/OIG1.myISSPPpWdbaDeT02fN9?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="Forest canopy representing climate action"
                loading="lazy"
              />
            </div>

            <h3 className="section-title h3 dark">Why it Matters</h3>
            <ul className="list">
              <li><strong>Credibility</strong>: Align with recognized standards for investor‑grade reporting.</li>
              <li><strong>Risk Management</strong>: Identify carbon hotspots and transition risks.</li>
              <li><strong>Regulatory Readiness</strong>: Prepare for reporting schemes and disclosures.</li>
              <li><strong>Stakeholder Trust</strong>: Communicate progress with confidence and consistency.</li>
              <li><strong>Operational Value</strong>: Drive efficiency and cost savings via data‑driven action.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="aside-section">
              <h3 className="section-title h3 dark">Scopes Explained</h3>
              <ul className="list">
                <li><strong>Scope 1</strong>: Direct emissions from owned or controlled sources.</li>
                <li><strong>Scope 2</strong>: Indirect emissions from purchased electricity, heat, or steam.</li>
                <li><strong>Scope 3</strong>: All other value‑chain emissions (upstream and downstream).</li>
              </ul>
            </div>
            <div className="image-container img-card ratio-4x3">
              <img
                className="img-elevated"
                src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1600&q=80"
                alt="Factory and grid symbolizing scopes 1, 2, 3"
                loading="lazy"
              />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title h2 dark">Implementation Journey</h2>
          <div className="steps">
            <div className="step">
              <div className="step-index">1</div>
              <div className="step-body">
                <h4>Define Boundaries</h4>
                <p>Establish organizational and operational boundaries per ISO 14064‑1.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">2</div>
              <div className="step-body">
                <h4>Data & Methods</h4>
                <p>Collect activity data; select emission factors and calculation methods.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">3</div>
              <div className="step-body">
                <h4>Quantify Emissions</h4>
                <p>Calculate Scope 1, 2, and relevant Scope 3 categories.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">4</div>
              <div className="step-body">
                <h4>Assure Quality</h4>
                <p>Apply QA/QC, uncertainty evaluation, and internal review.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">5</div>
              <div className="step-body">
                <h4>Report & Verify</h4>
                <p>Publish the GHG report and undertake ISO 14064‑3 verification.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">ISO 14064 Parts Overview</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=70" alt="Data and reporting" loading="lazy"/>
              <h4>14064-1: Organizations</h4>
              <p>Quantify and report GHG emissions/removals at the organizational level with transparent boundaries and methods.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=70" alt="Project reductions" loading="lazy"/>
              <h4>14064-2: Projects</h4>
              <p>Design and account for project-based reductions and enhanced removals with robust baselines and monitoring.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=70" alt="Assurance and verification" loading="lazy"/>
              <h4>14064-3: Verification</h4>
              <p>Obtain independent validation/verification of your GHG assertions for limited or reasonable assurance.</p>
            </div>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">Scope 3 Category Highlights</h2>
          <div className="feature-grid six">
            <div className="feature-card small">
              <img src="https://th.bing.com/th/id/OIG2.BCft0A1UA9HacDDEuLk6?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Purchased goods and services" loading="lazy"/>
              <h4>Purchased Goods & Services</h4>
            </div>
            <div className="feature-card small">
              <img src="https://th.bing.com/th/id/OIG4.fpTTdQfcGpKAsN2dZ3NY?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Capital goods" loading="lazy"/>
              <h4>Capital Goods</h4>
            </div>
            <div className="feature-card small">
              <img src="https://th.bing.com/th/id/OIG4.FQCtZ925eZtE0jQyWU_U?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Fuel and energy" loading="lazy"/>
              <h4>Fuel & Energy</h4>
            </div>
            <div className="feature-card small">
              <img src="https://th.bing.com/th/id/OIG2.mrr.Niuux_8NdI0BIMc8?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Upstream transport" loading="lazy"/>
              <h4>Upstream Transport</h4>
            </div>
            <div className="feature-card small">
              <img src="https://th.bing.com/th/id/OIG1.jcA9Q1iIACDdXRz2TJRw?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Business travel" loading="lazy"/>
              <h4>Business Travel</h4>
            </div>
            <div className="feature-card small">
              <img src="https://th.bing.com/th/id/OIG1.nyMwB38.3VkKe7ZqehDt?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Use of sold products" loading="lazy"/>
              <h4>Use of Sold Products</h4>
            </div>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">Results You Can Measure</h2>
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-value">-18%</div>
              <div className="stat-label">tCO₂e Year 1 Reduction</div>
            </div>
            <div className="stat">
              <div className="stat-value">92%</div>
              <div className="stat-label">Data Coverage Achieved</div>
            </div>
            <div className="stat">
              <div className="stat-value">Reasonable</div>
              <div className="stat-label">Verification Level</div>
            </div>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">Inspiration Gallery</h2>
          <div className="gallery">
            <img src="https://th.bing.com/th/id/OIG4.NSjCc20vLb_ou3YmRekJ?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Solar arrays" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=1200&q=70" alt="Wind turbines" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70" alt="Smart metering" loading="lazy"/>
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=70" alt="Efficient buildings" loading="lazy"/>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">What We Deliver</h2>
          <div className="meta">
            <span className="pill">GHG Inventory & Baseline</span>
            <span className="pill">Emission Factors Library</span>
            <span className="pill">Scope 3 Screening</span>
            <span className="pill">Targets & Reduction Plan</span>
            <span className="pill">GHG Report Templates</span>
            <span className="pill">Verification Readiness</span>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>What’s the difference between 14064‑1, ‑2, and ‑3?</summary>
              <p>14064‑1 covers organizational inventories, 14064‑2 covers projects
              and removals, and 14064‑3 covers validation/verification.</p>
            </details>
            <details>
              <summary>Do we need verification?</summary>
              <p>Third‑party verification increases credibility and is often
              required by investors and reporting frameworks.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Most organizations complete the first cycle within 6–12 weeks,
              depending on data availability and scope.</p>
            </details>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link alt" to="/contact">Start Your GHG Journey</Link>
        </div>
      <CountrySelector
        serviceName="ISO 14064"
      />
      </main>
    </div>
  );
}
