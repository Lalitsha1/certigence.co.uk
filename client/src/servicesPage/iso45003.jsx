import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/serviceBase.css";
import "../servicespage-css/iso45003.css";

export default function ISO45003() {
  const handleImgError = (e) => {
    const fallback = "https://placehold.co/1400x900?text=Image";
    if (e?.target && e.target.src !== fallback) e.target.src = fallback;
  };

  return (
    <div className="service-page iso45003">
      <section className="service-hero phs-hero">
        <div className="hero-inner">
          <h1>ISO 45003: Psychological Health & Safety at Work</h1>
          <p>
            Guidance for managing psychosocial risks to build safer, healthier and more
            productive workplaces. Create a culture where people can thrive.
          </p>
        </div>
      </section>

      <main className="service-wrap">
        <article className="service-card">
          <h2>What is ISO 45003?</h2>
          <p className="lead">
            ISO 45003 provides practical guidance to identify, assess and control
            psychosocial risks as part of your occupational health and safety (OH&S)
            management system. It extends ISO 45001 by focusing on factors such as
            workload, role clarity, leadership, recognition, change and social support
            that can affect psychological health.
          </p>

          <div className="two-col">
            <div>
              <h3>Why it matters</h3>
              <ul className="service-list list-check">
                <li>Protects wellbeing and prevents work-related stress and harm</li>
                <li>Improves engagement, retention and team performance</li>
                <li>Supports legal/ESG expectations and due diligence</li>
                <li>Reduces absenteeism and associated costs</li>
              </ul>
            </div>
            <div>
              <h3>Psychosocial hazards</h3>
              <ul className="service-list list-check">
                <li>Workload, pace, hours and recovery</li>
                <li>Role clarity, autonomy and job control</li>
                <li>Leadership, civility and social support</li>
                <li>Change management and job security</li>
                <li>Remote, hybrid or isolated work</li>
              </ul>
            </div>
          </div>

          <div className="image-container ratio-16x9">
            <img
              className="img-elevated"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
              alt="Healthy team culture and support"
              loading="lazy"
              onError={handleImgError}
            />
          </div>
        </article>

        <article className="service-card glass">
          <h2>Key Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="Risk assessment" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Risk Assessment</h4>
                <p>Survey tools, focus groups and analysis to prioritise psychosocial risks.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" alt="Controls" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Controls & Support</h4>
                <p>Work design, workload levelling, role clarity, coaching and EAP access.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1400&q=80" alt="Leadership" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Leadership & Skills</h4>
                <p>Manager capability, civility & respect, difficult conversation skills.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80" alt="Measurement" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Measure & Learn</h4>
                <p>KPIs, incident reporting, lessons learned and continual improvement.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Maturity Model</h2>
          <div className="v-timeline">
            <div className="vt-item"><strong>Ad‑hoc</strong> — Reactive responses to stress, limited data or ownership.</div>
            <div className="vt-item"><strong>Defined</strong> — Policy, roles and a basic psychosocial risk assessment.</div>
            <div className="vt-item"><strong>Managed</strong> — Controls embedded in work design, leadership behaviours and support.</div>
            <div className="vt-item"><strong>Optimising</strong> — KPIs, lessons learned and continuous improvement drive culture.</div>
          </div>
          <div className="metric-grid" style={{marginTop: '12px'}}>
            <div className="metric"><div className="value">-32%</div><div className="label">Absence due to stress</div></div>
            <div className="metric"><div className="value">+41%</div><div className="label">Engagement score</div></div>
            <div className="metric"><div className="value">90%</div><div className="label">Manager training</div></div>
          </div>
        </article>

        <article className="service-card">
          <h2>Programme Pillars</h2>
          <div className="two-col">
            <div>
              <h3>Work Design</h3>
              <ul className="service-list list-check">
                <li>Role clarity, autonomy and fair workload</li>
                <li>Flexible work, breaks and recovery</li>
                <li>Change management and participation</li>
              </ul>
            </div>
            <div>
              <h3>People & Culture</h3>
              <ul className="service-list list-check">
                <li>Civility and respect, zero tolerance for bullying</li>
                <li>Peer support, EAP and crisis response</li>
                <li>Leader capability: feedback, coaching, empathy</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="service-card glass">
          <h2>Case Study</h2>
          <p>A 600‑person services firm reduced stress‑related absence by 32% and improved eNPS by 18 points in six months.</p>
          <div className="two-col">
            <div>
              <h4>Interventions</h4>
              <ul className="service-list list-check">
                <li>Team workload levelling and escalation rules</li>
                <li>Manager micro‑skills and civility workshops</li>
                <li>Anonymous reporting, fast triage and support</li>
              </ul>
            </div>
            <div>
              <h4>Outcomes</h4>
              <ul className="service-list list-check">
                <li>Fewer high‑severity incidents</li>
                <li>Higher retention and satisfaction</li>
                <li>Better cross‑team collaboration</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Journey</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Context & Commitment</h4><p>Set policy, leadership, roles and worker participation.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Assess</h4><p>Identify hazards, assess risks, prioritise actions with workers.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Integrate Controls</h4><p>Design work, clarify roles, resources, training and support.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Operate & Support</h4><p>Run programmes, peer support, reporting and response.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Monitor & Improve</h4><p>KPIs, surveys, incidents, reviews and continuous improvement.</p></div></div>
          </div>
        </article>

        <article className="service-card">
          <h2>What We Deliver</h2>
          <div className="meta">
            <span className="pill">Policy & Objectives</span>
            <span className="pill">Psychosocial Risk Register</span>
            <span className="pill">Leadership & Worker Training</span>
            <span className="pill">Incident & Support Playbooks</span>
            <span className="pill">Survey & KPI Dashboard</span>
            <span className="pill">Audit Evidence Pack</span>
          </div>
        </article>

        <article className="service-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Do we need ISO 45001 first?</summary>
              <p>ISO 45003 is guidance aligned to ISO 45001. Many organisations integrate it with their OH&S system.</p>
            </details>
            <details>
              <summary>How do we assess psychosocial risks?</summary>
              <p>We combine surveys, interviews and data (absence, turnover, incidents) to create a prioritised risk register.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Typical programmes take 8–12 weeks depending on scope, size and baseline maturity.</p>
            </details>
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
