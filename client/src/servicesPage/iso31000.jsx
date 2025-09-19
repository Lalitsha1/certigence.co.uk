import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/serviceBase.css";
import "../servicespage-css/iso31000.css";

export default function ISO31000() {
  const handleImgError = (e) => {
    const fallback = "https://placehold.co/1400x900?text=Image";
    if (e?.target && e.target.src !== fallback) e.target.src = fallback;
  };

  return (
    <div className="service-page iso31000">
      <section className="service-hero risk-hero">
        <div className="hero-inner">
          <h1>ISO 31000: Risk Management</h1>
          <p>Principles, framework and process to identify, assess and treat uncertainty — creating value and improving decision‑making across your organisation.</p>
        </div>
      </section>

      <main className="service-wrap">
        <article className="service-card">
          <h2>What is ISO 31000?</h2>
          <p className="lead">ISO 31000 provides best‑practice guidance for designing and operating an enterprise risk management approach. It helps you establish principles and a framework, and to apply a consistent risk process to strategic, programme and operational decisions.</p>

          <div className="two-col">
            <div>
              <h3>Principles</h3>
              <ul className="service-list list-check">
                <li>Creates and protects value</li>
                <li>Structured, comprehensive and customised</li>
                <li>Inclusive, dynamic and responsive to change</li>
                <li>Integrated with governance and culture</li>
                <li>Based on best information and human factors</li>
              </ul>
            </div>
            <div>
              <h3>Framework & Process</h3>
              <ul className="service-list list-check">
                <li>Leadership & integration with strategy</li>
                <li>Design: scope, roles, appetite & criteria</li>
                <li>Implementation & resources</li>
                <li>Process: communication, context, assessment, treatment</li>
                <li>Monitoring, review and continual improvement</li>
              </ul>
            </div>
          </div>

          <div className="image-container ratio-16x9">
            <img
              className="img-elevated"
              src="https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1600&q=80"
              alt="Risk management dashboards and collaboration"
              loading="lazy"
              onError={handleImgError}
            />
          </div>
        </article>

        <article className="service-card glass">
          <h2>Key Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG1.GGMMwAgLD1KSFJRzrq1Y?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Risk appetite and criteria" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Risk Appetite & Criteria</h4>
                <p>Define tolerances and decision criteria aligned to objectives.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80" alt="Assessment workshops" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Assessment & Workshops</h4>
                <p>Facilitated identification, analysis, evaluation and prioritisation.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=1400&q=80" alt="Risk treatment and controls" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Treatment & Controls</h4>
                <p>Options, action plans, owners, budgets and due dates.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1400&q=80" alt="Monitoring and reporting" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Monitor & Report</h4>
                <p>KRIs, dashboards, assurance and lessons learned.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Journey</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Set Context</h4><p>Define objectives, stakeholders, boundaries and interfaces.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Design Framework</h4><p>Roles, appetite, criteria, processes and tools.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Implement</h4><p>Workshops, registers, action plans and change management.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Monitor</h4><p>KRIs, audits, reviews and reporting to governance.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Improve</h4><p>Lessons learned, horizon scanning and maturity roadmap.</p></div></div>
          </div>
        </article>

        <article className="service-card">
          <h2>What We Deliver</h2>
          <div className="meta">
            <span className="pill">Risk Policy & Appetite</span>
            <span className="pill">Enterprise Risk Register</span>
            <span className="pill">Method & Criteria</span>
            <span className="pill">Workshops & Training</span>
            <span className="pill">KRIs & Dashboards</span>
            <span className="pill">Audit Evidence Pack</span>
          </div>
        </article>

        <article className="service-card glass">
          <h2>Case Study</h2>
          <p>A multi‑site services organisation reduced high‑impact incidents by 24% and improved strategic delivery through better risk‑based decisions.</p>
          <div className="two-col">
            <div>
              <h4>Interventions</h4>
              <ul className="service-list list-check">
                <li>Risk appetite statements and criteria refresh</li>
                <li>Cross‑functional risk workshops and ownership</li>
                <li>KRIs and governance reporting cadence</li>
              </ul>
            </div>
            <div>
              <h4>Outcomes</h4>
              <ul className="service-list list-check">
                <li>Fewer surprises and clearer decisions</li>
                <li>Higher accountability for actions</li>
                <li>Better alignment of investment to risk</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Do we need ISO 9001/27001 first?</summary>
              <p>No. ISO 31000 is guidance and can be adopted standalone or integrated into existing systems.</p>
            </details>
            <details>
              <summary>Is ISO 31000 certifiable?</summary>
              <p>ISO 31000 is not a certifiable standard. Many organisations choose internal or third‑party assurance of their ERM.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Typical programmes take 6–12 weeks depending on scope, maturity and resourcing.</p>
            </details>
          </div>
        </article>

        <article className="service-card">
          <h2>Image Gallery</h2>
          <div className="service-gallery gallery-advanced">
            <div className="service-img"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="City risk context" loading="lazy" onError={handleImgError} /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1460925895917-8f79b24b1aa1?auto=format&fit=crop&w=1400&q=80" alt="Data and analysis" loading="lazy" onError={handleImgError} /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=1400&q=80" alt="Decision and governance" loading="lazy" onError={handleImgError} /></div>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
          <Link className="back-link alt" to="/contact">Talk to an Expert</Link>
        </div>
      </main>
    </div>
  );
}

