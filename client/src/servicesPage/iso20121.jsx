import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso20121.css";
import CountrySelector from "../components/CountrySelector";

export default function iso20121() {
  return (
    <div className="service-page iso20121">
      <section className="service-hero event-hero">
        <div className="hero-inner">
          <h1>ISO 20121: Event Sustainability Management</h1>
          <p>Build, run, and continually improve responsible events that minimise environmental impact and maximise positive social and economic outcomes.</p>
        </div>
      </section>
      <main className="service-wrap">
        <article className="service-card">
          <h2>About ISO 20121</h2>
          <p className="lead">
            ISO 20121 provides a management system framework to help organisations design and deliver events that are environmentally responsible, socially inclusive, and economically sound. It embeds sustainability into planning, procurement, delivery, and legacy, using a continual improvement cycle.
          </p>
          <div className="two-col">
            <div>
              <h3>Who it’s for</h3>
              <ul className="service-list">
                <li>Event owners, organisers, and agencies</li>
                <li>Venues, caterers, suppliers, and logistics partners</li>
                <li>Local authorities and destination management organisations</li>
                <li>Corporate teams running conferences and roadshows</li>
              </ul>
            </div>
            <div>
              <h3>Key benefits</h3>
              <ul className="service-list list-check">
                <li>Lower environmental footprint (waste, energy, travel)</li>
                <li>Improved stakeholder engagement and community impact</li>
                <li>Transparent governance and due diligence</li>
                <li>Stronger brand reputation and sponsor confidence</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="service-card case">
          <div className="case-wrap">
            <div className="case-text">
              <h2>Case Study: Sustainable Summit</h2>
              <p>Delivered a 3‑day conference for 2,000 attendees with 92% waste diversion, zero single‑use plastics, and a local supplier programme boosting community benefit.</p>
              <ul className="service-list list-check">
                <li>Carbon footprint measured and offset for travel</li>
                <li>On‑site water refill and composting stations</li>
                <li>Accessible design and community volunteering</li>
              </ul>
            </div>
            <div className="case-media">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80" alt="Conference audience and stage" loading="lazy" />
            </div>
          </div>
        </article>

        <article className="service-card glass">
          <h2>Results & Metrics</h2>
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-value">-28%</div>
              <div className="stat-label">Waste to Landfill</div>
            </div>
            <div className="stat">
              <div className="stat-value">+35%</div>
              <div className="stat-label">Recycled Materials</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Supplier Screening</div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Delivery Timeline</h2>
          <div className="steps">
            <div className="step">
              <div className="step-index">1</div>
              <div className="step-body">
                <h4>Discovery</h4>
                <p>Scope, stakeholders, material topics, baseline review.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">2</div>
              <div className="step-body">
                <h4>Design</h4>
                <p>Objectives, controls, supplier criteria, operating model.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">3</div>
              <div className="step-body">
                <h4>Deploy</h4>
                <p>Training, communications, procedures and tooling rollout.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">4</div>
              <div className="step-body">
                <h4>Measure</h4>
                <p>Data capture, audits, dashboard and reporting cadence.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">5</div>
              <div className="step-body">
                <h4>Improve</h4>
                <p>Review against targets, lessons learned, next cycle.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Sustainability Pillars</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80" alt="Environmental stewardship" loading="lazy" />
              <div className="feature-body">
                <h4>Environmental</h4>
                <p>Carbon, energy, water, waste, biodiversity impacts across the event lifecycle.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80" alt="Social inclusion" loading="lazy" />
              <div className="feature-body">
                <h4>Social</h4>
                <p>Accessibility, community engagement, worker welfare, diversity and inclusion.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1400&q=80" alt="Economic value" loading="lazy" />
              <div className="feature-body">
                <h4>Economic</h4>
                <p>Responsible procurement, local sourcing, cost efficiency, and legacy value.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80" alt="Governance" loading="lazy" />
              <div className="feature-body">
                <h4>Governance</h4>
                <p>Policies, roles, stakeholder transparency, and continual improvement.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Approach</h2>
          <ol className="service-list numbered">
            <li><strong>Context & Stakeholders:</strong> Define scope, stakeholders, material issues, and objectives.</li>
            <li><strong>Planning:</strong> Identify risks/opportunities and set sustainability KPIs per event lifecycle.</li>
            <li><strong>Support & Operations:</strong> Clarify roles, training, supplier criteria, and operational controls.</li>
            <li><strong>Performance:</strong> Monitor, measure, and evaluate outcomes against targets.</li>
            <li><strong>Improvement:</strong> Conduct reviews, capture lessons learned, and update plans.</li>
          </ol>
          <div className="meta">
            <span className="pill">Sustainability Policy</span>
            <span className="pill">Stakeholder Map</span>
            <span className="pill">Sustainable Procurement</span>
            <span className="pill">Operational Playbooks</span>
            <span className="pill">KPI Dashboard</span>
            <span className="pill">Post‑Event Report</span>
          </div>
        </article>
        <article className="service-card glass">
          <h2>Image gallery</h2>
          <div className="service-gallery">
            <div className="service-img"><img src="https://th.bing.com/th/id/OIG4.zMItxcIy.X81iSI_fFcT?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Conference with sustainable practices" loading="lazy" /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=80" alt="Venue operations and logistics" loading="lazy" /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80" alt="Attendee engagement and community impact" loading="lazy" /></div>
          </div>
        </article>

        <article className="service-card">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Is ISO 20121 only for large events?</summary>
              <p>No. The standard scales for events of any size, from internal townhalls to global sporting events.</p>
            </details>
            <details>
              <summary>Do suppliers need to be certified?</summary>
              <p>Not necessarily. You should define sustainability criteria for suppliers and evaluate them fairly and transparently.</p>
            </details>
            <details>
              <summary>How long does implementation take?</summary>
              <p>Typically 6–12 weeks for first adoption, depending on scope, supplier network, and baseline maturity.</p>
            </details>
          </div>
        </article>
        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
        </div>
      <CountrySelector
        serviceName="ISO 20121"
      />
      </main>
    </div>
  );
}
