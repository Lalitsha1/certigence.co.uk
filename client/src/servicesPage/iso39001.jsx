import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/serviceBase.css";
import "../servicespage-css/iso39001.css";

export default function ISO39001() {
  const handleImgError = (e) => {
    const fallback = "https://placehold.co/1400x900?text=Image";
    if (e?.target && e.target.src !== fallback) e.target.src = fallback;
  };

  return (
    <div className="service-page iso39001">
      <section className="service-hero road-hero">
        <div className="hero-inner">
          <h1>ISO 39001: Road Traffic Safety (RTS) Management</h1>
          <p>
            Reduce deaths and serious injuries on the road network with a
            structured, dataâ€‘driven RTS management system aligned to ISO 39001.
          </p>
        </div>
      </section>

      <main className="service-wrap">
        <article className="service-card">
          <h2>What is ISO 39001?</h2>
          <p className="lead">
            ISO 39001 specifies requirements for a Road Traffic Safety (RTS)
            management system to help organisations that interact with the road
            network achieve RTS objectives. It applies to fleet operators,
            logistics providers, contractors, local authorities and any business
            with significant road exposure.
          </p>

          <div className="two-col">
            <div>
              <h3>RTS Factors</h3>
              <ul className="service-list list-check">
                <li>Driver readiness and competency</li>
                <li>Vehicle condition and safety technologies</li>
                <li>Journey planning, route risk and scheduling</li>
                <li>Speed, impairment, distraction and fatigue</li>
                <li>Incident reporting, investigation and learning</li>
              </ul>
            </div>
            <div>
              <h3>Why it matters</h3>
              <ul className="service-list list-check">
                <li>Protects workers and the public from harm</li>
                <li>Reduces costs of collisions, downtime and claims</li>
                <li>Supports legal and client RTS requirements</li>
                <li>Improves brand reputation and tender success</li>
              </ul>
            </div>
          </div>

          <div className="image-container ratio-16x9">
            <img
              className="img-elevated"
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=80"
              alt="Fleet safety and operations"
              loading="lazy"
              onError={handleImgError}
            />
          </div>
        </article>

        <article className="service-card glass">
          <h2>Key Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG3.mkmyyC60h89itJ0_xPy1?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="RTS objectives and KPIs" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Objectives & KPIs</h4>
                <p>Define RTS outcomes and leading/lagging indicators for impact.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG4.lRWCjlJEZS3OW.1HzaJs?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Operational control" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Operational Control</h4>
                <p>Journey risk, driver fitness, vehicle checks and safe systems.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://th.bing.com/th/id/OIG4.jepF1dc_IPITo1mPV0oY?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Data and telematics" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Data & Telematics</h4>
                <p>Use telematics and incident data to target behaviours and routes.</p>
              </div>
            </div>
            <div className="feature-card shine">
              <img src="https://tse1.mm.bing.net/th/id/OIP.kF4ZW6Bw_F0_YGe_TURmUwHaFj?r=0&pid=ImgDet&w=188&h=141&c=7&dpr=1.3&o=7&rm=3" alt="Incident learning" loading="lazy" onError={handleImgError} />
              <div className="feature-body">
                <h4>Incident Learning</h4>
                <p>Investigate, address root causes and embed improvements.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Journey</h2>
          <div className="steps">
            <div className="step"><div className="step-index">1</div><div className="step-body"><h4>Context & Scope</h4><p>Define RTS scope, stakeholders, legal duties and objectives.</p></div></div>
            <div className="step"><div className="step-index">2</div><div className="step-body"><h4>Risk & Controls</h4><p>Assess RTS risks, plan controls for drivers, vehicles and journeys.</p></div></div>
            <div className="step"><div className="step-index">3</div><div className="step-body"><h4>Competence & Support</h4><p>Training, comms, fatigue management and wellness support.</p></div></div>
            <div className="step"><div className="step-index">4</div><div className="step-body"><h4>Monitor & Analyse</h4><p>Collect data, analyse trends and engage leadership with insights.</p></div></div>
            <div className="step"><div className="step-index">5</div><div className="step-body"><h4>Improve</h4><p>Implement corrective actions, share lessons and refresh targets.</p></div></div>
          </div>
        </article>

        <article className="service-card">
          <h2>What We Deliver</h2>
          <div className="meta">
            <span className="pill">RTS Policy & Objectives</span>
            <span className="pill">Driver & Vehicle Controls</span>
            <span className="pill">Journey Risk Toolkit</span>
            <span className="pill">Telematics & Dashboards</span>
            <span className="pill">Incident & Learning Playbooks</span>
            <span className="pill">Audit Evidence Pack</span>
          </div>
        </article>

        <article className="service-card glass">
          <h2>Case Study</h2>
          <p>A national fleet reduced preventable collisions by 28% and serious injuries by 35% within 9 months.</p>
          <div className="two-col">
            <div>
              <h4>Interventions</h4>
              <ul className="service-list list-check">
                <li>Speed & harsh event coaching from telematics</li>
                <li>Fatigue policy, breaks and nightâ€‘shift scheduling</li>
                <li>Preâ€‘journey risk scores and route alternatives</li>
              </ul>
            </div>
            <div>
              <h4>Outcomes</h4>
              <ul className="service-list list-check">
                <li>Lower collision frequency & claim cost</li>
                <li>Fewer days lost and higher driver retention</li>
                <li>Improved insurance terms and client trust</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Who is ISO 39001 for?</summary>
              <p>Any organisation interacting with the road networkâ€”particularly fleets, logistics, public services and contractors.</p>
            </details>
            <details>
              <summary>How does it link to ISO 45001?</summary>
              <p>RTS risks are a subset of OH&S risks. ISO 39001 integrates well with 45001 and 9001 for governance and assurance.</p>
            </details>
            <details>
              <summary>How long does implementation take?</summary>
              <p>Typical timelines are 8â€“14 weeks depending on fleet size, routes, telematics and current practices.</p>
            </details>
          </div>
        </article>

        <article className="service-card">
          <h2>Image Gallery</h2>
          <div className="service-gallery gallery-advanced">
            <div className="service-img"><img src="https://images.unsplash.com/photo-1473976345543-9ffc928e648d?auto=format&fit=crop&w=1400&q=80" alt="Highway at night" loading="lazy" onError={handleImgError} /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1519162584292-56dfc9eb5db5?auto=format&fit=crop&w=1400&q=80" alt="Fleet readiness" loading="lazy" onError={handleImgError} /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80" alt="Safe driving" loading="lazy" onError={handleImgError} /></div>
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





