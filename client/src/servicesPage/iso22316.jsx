import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso22316.css";
import CountrySelector from "../components/CountrySelector";

export default function ISO22316() {
  const handleImgError = (e) => {
    const fallback = "https://placehold.co/1400x900?text=Image";
    if (e?.target && e.target.src !== fallback) e.target.src = fallback;
  };

  return (
    <div className="service-page iso22316">
      <section className="res-hero">
        <div className="hero-orbs" aria-hidden="true"></div>
        <div className="hero-inner">
          <h1>ISO 22316: Organisational Resilience</h1>
          <p>Build the principles, culture and capabilities to anticipate, absorb and adapt to change — and seize opportunity.</p>
        </div>
      </section>

      <main className="res-wrap">
        <article className="res-card animated-border slide-up">
          <h2 className="glow-line">What is ISO 22316?</h2>
          <p className="lead">ISO 22316 provides guidance on organisational resilience — the ability to absorb and adapt in a changing environment to deliver objectives, survive and prosper. It emphasises leadership, shared purpose, information, continual learning and coordinated capabilities across the organisation and its interested parties.</p>
          <div className="two-col">
            <div>
              <h3>Principles</h3>
              <ul className="res-list list-check">
                <li>Shared vision, purpose and values</li>
                <li>Effective leadership and empowered people</li>
                <li>Information, insight and innovation</li>
                <li>Anticipation, adaptation and learning</li>
                <li>Collaborative networks and resources</li>
              </ul>
            </div>
            <div>
              <h3>Enablers</h3>
              <ul className="res-list list-check">
                <li>Strategy and governance integration</li>
                <li>Culture of trust and inclusion</li>
                <li>Clear roles, accountabilities and competencies</li>
                <li>Information flows and situational awareness</li>
                <li>Review, improvement and assurance</li>
              </ul>
            </div>
          </div>
          <div className="image-container ratio-16x9">
            <img
              className="img-elevated"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Resilient teams collaborating"
              loading="lazy"
              onError={handleImgError}
            />
          </div>
        </article>

        <article className="res-card slide-up delay-1">
          <h2 className="glow-line">Key Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card tilt">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80" alt="Sense and anticipate" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Sense & Anticipate</h4>
                <p>Horizon scanning, risk/opportunity sensing and scenario thinking.</p>
              </div>
            </div>
            <div className="feature-card tilt">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80" alt="Adapt and coordinate" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Adapt & Coordinate</h4>
                <p>Cross-functional playbooks, resource agility and decisive governance.</p>
              </div>
            </div>
            <div className="feature-card tilt">
              <img src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=1400&q=80" alt="Learn and improve" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Learn & Improve</h4>
                <p>After-action reviews, metrics and continuous improvement loops.</p>
              </div>
            </div>
            <div className="feature-card tilt">
              <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1400&q=80" alt="Engage stakeholders" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Engage Stakeholders</h4>
                <p>Trusted relationships with suppliers, partners and communities.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="res-card slide-up delay-2">
          <h2 className="glow-line">Implementation Journey</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Context & Ambition</h4><p>Define outcomes, appetite and success measures.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Assess & Prioritise</h4><p>Capabilities, dependencies and change readiness.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Design & Embed</h4><p>Principles, playbooks, roles and information flows.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Operate & Measure</h4><p>Exercises, incidents, KPIs and governance insights.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Learn & Evolve</h4><p>Lessons learned, maturity roadmap and culture.</p></div></div>
          </div>
        </article>

        <article className="res-card slide-up delay-3">
          <h2 className="glow-line">What We Deliver</h2>
          <div className="meta">
            <span className="pill">Resilience Policy & Principles</span>
            <span className="pill">Capability Assessment</span>
            <span className="pill">Stakeholder & Dependency Map</span>
            <span className="pill">Playbooks & Training</span>
            <span className="pill">KPIs & Reporting</span>
            <span className="pill">Improvement Roadmap</span>
          </div>
        </article>

        <article className="res-card slide-up delay-4">
          <h2 className="glow-line">FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Is ISO 22316 certifiable?</summary>
              <p>No. It’s guidance. Many organisations use internal or third‑party assurance instead.</p>
            </details>
            <details>
              <summary>How does it relate to 22301 (BCM)?</summary>
              <p>22316 sits above BC. It emphasises culture, leadership and capabilities that support BCM and other systems.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Typical initiatives take 6–12 weeks depending on scope and maturity.</p>
            </details>
          </div>
        </article>

        <article className="res-card slide-up delay-5">
          <h2 className="glow-line">Queries & Solutions</h2>
          <div className="qa-grid">
            <div className="qa-card">
              <h4 className="qa-q">How do we measure resilience?</h4>
              <p className="qa-a">Define a small set of leading and lagging KPIs mapped to outcomes: time‑to‑detect, time‑to‑decide, time‑to‑recover, exercise pass rate, supplier readiness, and engagement scores. Report trend and variance, not just point values.</p>
            </div>
            <div className="qa-card">
              <h4 className="qa-q">We have 22301 already — what changes?</h4>
              <p className="qa-a">Keep BCM but extend beyond single‑scenario continuity. Add horizon scanning, dependency mapping, cross‑functional playbooks, and leadership cadences so that teams adapt proactively rather than only recover.</p>
            </div>
            <div className="qa-card">
              <h4 className="qa-q">How do we build culture, not just documents?</h4>
              <p className="qa-a">Embed micro‑routines: short weekly risk huddles, post‑incident learning within 5 days, leadership ‘rounds’ that recognise good escalation, and exercises that include partners and suppliers.</p>
            </div>
            <div className="qa-card">
              <h4 className="qa-q">Where do we start with stakeholders?</h4>
              <p className="qa-a">Create a dependency map (people, tech, suppliers, sites) and score each for criticality and fragility. Prioritise 3 interventions: alternative suppliers, information pathways, and decision authorities.</p>
            </div>
            <div className="qa-card">
              <h4 className="qa-q">Exercises feel theoretical — how to fix?</h4>
              <p className="qa-a">Use realistic injects, time‑boxed decisions, and success criteria tied to KPIs. Rotate facilitators, include external parties, and always capture 3 improvements with owners and dates.</p>
            </div>
            <div className="qa-card">
              <h4 className="qa-q">How do we integrate with ERM and projects?</h4>
              <p className="qa-a">Adopt shared criteria and appetite statements. Require resilience review at gate decisions, and ensure project risks feed the enterprise register with clear escalations.</p>
            </div>
          </div>

          <div className="qa-playbook">
            <h3>Quick Solutions Playbook</h3>
            <ul className="res-list list-check">
              <li>Run a 90‑minute dependency mapping workshop for your top product or service.</li>
              <li>Establish a weekly 15‑minute horizon scan (top 5 signals + one action).</li>
              <li>Define decision rights and a 3‑tier escalation matrix for incidents.</li>
              <li>Schedule a cross‑functional exercise within 30 days; track 3 improvements.</li>
              <li>Publish a simple KPI dashboard (detect, decide, recover) each month.</li>
            </ul>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
          <Link className="back-link " to="/contact">Talk to an Expert</Link>
        </div>
      <CountrySelector
        serviceName="ISO 22316"
      />
      </main>
    </div>
  );
}
