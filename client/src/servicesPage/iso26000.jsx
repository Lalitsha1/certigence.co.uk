import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/serviceBase.css";
import "../servicespage-css/iso26000.css";
import CountrySelector from "../components/CountrySelector";

export default function iso26000() {
  return (
    <div className="service-page iso26000">
      <section className="service-hero sr-hero">
        <div className="hero-inner">
          <h1>ISO 26000: Social Responsibility Guidance</h1>
          <p>
            Embed responsible practices across your organization and value chain —\n            from governance and human rights to environmental stewardship and fair\n            operating practices.
          </p>
        </div>
      </section>
      <main className="service-wrap">
        <article className="service-card">
          <h2>About ISO 26000</h2>
          <p className="lead">
            ISO 26000 provides guidance for organizations to operate in a socially
            responsible way. It helps integrate social responsibility into values and
            strategy, addressing stakeholder expectations and contributing to
            sustainable development.
          </p>
          <div className="two-col">
            <div>
              <h3>Seven Principles</h3>
              <ul className="service-list list-check">
                <li>Accountability</li>
                <li>Transparency</li>
                <li>Ethical behavior</li>
                <li>Respect for stakeholder interests</li>
                <li>Respect for the rule of law</li>
                <li>Respect for international norms of behavior</li>
                <li>Respect for human rights</li>
              </ul>
            </div>
            <div>
              <h3>Core Subjects</h3>
              <ul className="service-list list-check">
                <li>Organizational governance</li>
                <li>Human rights</li>
                <li>Labor practices</li>
                <li>Environment</li>
                <li>Fair operating practices</li>
                <li>Consumer issues</li>
                <li>Community involvement & development</li>
              </ul>
            </div>
          </div>
          <div className="image-container ratio-21x9">
            <img className="img-elevated" src="https://th.bing.com/th/id/OIG1.jR3KZuAlM3GUatliH1ih?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Community and environment" loading="lazy" />
          </div>
        </article>

        <article className="service-card">
          <h2>Implementation Journey</h2>
          <div className="steps">
            <div className="step">
              <div className="step-index">1</div>
              <div className="step-body">
                <h4>Context & Stakeholders</h4>
                <p>Define scope, map stakeholders, and identify salient issues.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">2</div>
              <div className="step-body">
                <h4>Policies & Governance</h4>
                <p>Set commitments, roles, and oversight with clear accountability.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">3</div>
              <div className="step-body">
                <h4>Integration & Controls</h4>
                <p>Embed requirements into processes, supplier criteria, and training.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">4</div>
              <div className="step-body">
                <h4>Measure & Report</h4>
                <p>Track KPIs, conduct due diligence, and publish progress.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">5</div>
              <div className="step-body">
                <h4>Improve & Engage</h4>
                <p>Review outcomes, close gaps, and deepen stakeholder dialogue.</p>
              </div>
            </div>
          </div>
          <div className="meta">
            <span className="pill">SR Policy</span>
            <span className="pill">Stakeholder Map</span>
            <span className="pill">Supplier Code</span>
            <span className="pill">Due Diligence</span>
            <span className="pill">Impact KPIs</span>
            <span className="pill">SR Report</span>
          </div>
        </article>

        <article className="service-card glass">
          <h2>Value & Benefits</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1400&q=80" alt="Trust and reputation" loading="lazy" />
              <div className="feature-body">
                <h4>Trust & Reputation</h4>
                <p>Demonstrate credible responsibility to customers, investors, and communities.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80" alt="People and culture" loading="lazy" />
              <div className="feature-body">
                <h4>People & Culture</h4>
                <p>Improve well-being, inclusion, and engagement through clear practices.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80" alt="Resilient supply chain" loading="lazy" />
              <div className="feature-body">
                <h4>Resilient Supply Chain</h4>
                <p>Reduce risk and create value with responsible sourcing.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1400&q=80" alt="Performance and growth" loading="lazy" />
              <div className="feature-body">
                <h4>Performance & Growth</h4>
                <p>Differentiate your brand and unlock long-term opportunities.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card">
          <h2>Stakeholders & Engagement</h2>
          <div className="image-container ratio-16x9">
            <img className="img-elevated" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80" alt="Stakeholder engagement" loading="lazy" />
          </div>
          <ul className="service-list">
            <li>Employees and labor representatives</li>
            <li>Communities and civil society organizations</li>
            <li>Customers and consumers</li>
            <li>Suppliers and partners</li>
            <li>Regulators, investors, and media</li>
          </ul>
        </article>

        <article className="service-card">
          <h2>Image Gallery</h2>
          <div className="service-gallery gallery-advanced">
            <div className="service-img"><img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80" alt="Hands together" loading="lazy" /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80" alt="Inclusive team" loading="lazy" /></div>
            <div className="service-img"><img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80" alt="Sustainable operations" loading="lazy" /></div>

          </div>
        </article>

        <article className="service-card glass">
          <h2>FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Is ISO 26000 certifiable?</summary>
              <p>No. ISO 26000 is a guidance standard; organizations adopt its guidance and report progress, but it is not a certifiable management system.</p>
            </details>
            <details>
              <summary>How does ISO 26000 relate to ESG and the SDGs?</summary>
              <p>ISO 26000 supports ESG reporting and maps well to the UN SDGs by structuring responsibilities and actions across core subjects.</p>
            </details>
            <details>
              <summary>How long does adoption take?</summary>
              <p>Typical projects run 8â€“14 weeks depending on scope, stakeholder complexity, and existing practices.</p>
            </details>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
        </div>
      <CountrySelector
        serviceName="ISO 26000"
      />
      </main>
    </div>
  );
}

