import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso28000.css"; // Make sure to create this CSS file

export default function ISO28000() {
  return (
    <div className="auth-detail iso28000-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          {/* <div className="iso-hero-graphic">
            <img 
              src="https://www.iso.org/files/live/sites/isoorg/files/store/en/home/iso_28000_product.png" 
              alt="ISO 28000 Logo" 
              className="iso-logo"
            />
          </div> */}
          <h1>ISO 28000: Supply Chain Security Management</h1>
          <p>
            Establish a structured system to manage risks and enhance
            security across your entire supply chain, from raw materials to
            final delivery.
          </p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <h2 className="section-title h2 dark">What is ISO 28000?</h2>
            <p className="lead">
              ISO 28000 provides a robust <strong>framework for Supply Chain
              Security Management (SCSM)</strong>. It helps organizations of all
              types and sizes that are involved in any aspect of the supply
              chain to establish, implement, maintain, and improve a security
              management system. The standard addresses risks related to
              threats such as theft, terrorism, piracy, smuggling, and
              unauthorized access—preserving the integrity and flow of goods
              and services.
            </p>
            
            <div className="image-container img-card">
              <img
                src="https://th.bing.com/th/id/OIG3.UzXlxod9wACyQl003Uzc?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="Global supply chain logistics"
                loading="lazy"
              />
            </div>
            
            <h3 className="section-title h3 dark">Key Objectives of ISO 28000</h3>
            <p>
              Implementing ISO 28000 helps organizations achieve critical security objectives within their supply chains.
            </p>
            <ul className="list">
              <li><strong>Risk Assessment and Management</strong>: Identifying, evaluating, and treating security risks.</li>
              <li><strong>Security Policy Development</strong>: Establishing clear security policies and objectives.</li>
              <li><strong>Continuous Improvement</strong>: Ensuring the SCSM system evolves and remains effective.</li>
              <li><strong>Compliance and Legal Requirements</strong>: Meeting relevant national and international security regulations.</li>
              <li><strong>Enhanced Visibility and Control</strong>: Gaining better oversight of security measures throughout the supply chain.</li>
            </ul>

            <h3 className="section-title h3 dark">Benefits & Business Impact</h3>
            <ul className="list">
              <li><strong>Reduced Disruptions</strong>: Proactively prevents incidents that halt operations.</li>
              <li><strong>Lower Insurance Costs</strong>: Demonstrated controls can reduce premiums.</li>
              <li><strong>Customer Confidence</strong>: Proves due diligence to clients and regulators.</li>
              <li><strong>Operational Efficiency</strong>: Clear processes and responsibilities reduce waste.</li>
              <li><strong>Global Acceptance</strong>: Aligns with international security expectations.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="aside-section">
              <h3 className="section-title h3 dark">Why is Supply Chain Security Crucial?</h3>
              <p>A secure supply chain is vital for business continuity, reputation, and profitability. It helps to:</p>
              <ul className="list">
                <li><strong>Prevent Losses</strong>: Mitigate risks of theft, damage, or loss of goods.</li>
                <li><strong>Protect Reputation</strong>: Build trust with customers and stakeholders via proven controls.</li>
                <li><strong>Ensure Compliance</strong>: Meet stringent security regulations and avoid penalties.</li>
                <li><strong>Optimize Operations</strong>: Reduce disruptions and increase reliability.</li>
                <li><strong>Enhance Competitiveness</strong>: Stand out as a secure, reliable partner.</li>
              </ul>
            </div>
            <div className="image-container img-card">
              <img
                src="https://th.bing.com/th/id/OIG3.v3kTnTqpuSjN2kuPUazj?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="Secure shipping container and logistics"
                loading="lazy"
              />
            </div>

            <div className="aside-section">
              <h3 className="section-title h3 dark">Who Should Implement?</h3>
              <ul className="list">
                <li><strong>Manufacturers</strong> with multi‑tier suppliers and complex networks.</li>
                <li><strong>Logistics Providers</strong> managing warehousing, ports, and transport.</li>
                <li><strong>Retail & eCommerce</strong> requiring end‑to‑end visibility and trust.</li>
                <li><strong>Importers/Exporters</strong> navigating cross‑border requirements.</li>
                <li><strong>Critical Infrastructure</strong> handling sensitive materials and services.</li>
              </ul>
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title h2 dark">The PDCA Cycle in ISO 28000</h2>
          <p>
            Like many ISO management system standards, ISO 28000 is structured around the **Plan-Do-Check-Act (PDCA)** cycle, promoting a proactive and iterative approach to security management.
          </p>
          <div className="image-container img-card">
            <img
              src="https://th.bing.com/th/id/OIG3.oQtQZOfY_Bph_1m5.9My?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" /* Placeholder image - replace with actual PDCA diagram for ISO 28000 */
              alt="ISO 28000 PDCA Cycle Diagram"
              loading="lazy"
            />
          </div>
          <ol className="list">
            <li><strong>Plan</strong>: Identify security risks, establish security policies and objectives, and define processes for managing them.</li>
            <li><strong>Do</strong>: Implement the security management system, including operational controls, training, and communication.</li>
            <li><strong>Check</strong>: Monitor and measure the effectiveness of the SCSM, conduct audits, and review performance against objectives.</li>
            <li><strong>Act</strong>: Take actions to continually improve the system based on monitoring results and audit findings.</li>
          </ol>
        </article>
        
        <article className="card">
          <h2 className="section-title h2 dark">Key Elements of ISO 28000</h2>
          <p>
            The standard requires organizations to address several critical areas to build a comprehensive SCSM.
          </p>
          <ul className="list">
            <li><strong>Security Policy</strong>: Top management commitment to security.</li>
            <li><strong>Security Objectives and Planning</strong>: Setting measurable security goals.</li>
            <li><strong>Resource Management</strong>: Ensuring adequate resources for security implementation.</li>
            <li><strong>Operational Control</strong>: Implementing security measures for transport, storage, and handling.</li>
            <li><strong>Emergency Preparedness and Response</strong>: Planning for and responding to security incidents.</li>
            <li><strong>Performance Evaluation</strong>: Monitoring, measurement, and auditing of the SCSM.</li>
            <li><strong>Improvement</strong>: Taking corrective actions to enhance security.</li>
          </ul>
          <div className="image-container img-card">
            <img
              src="https://th.bing.com/th/id/OIG1.JAMGNqdwgqZ2z2qIIJam?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              alt="Warehouse security and inventory management"
              loading="lazy"
            />
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">Certification Journey</h2>
          <div className="steps">
            <div className="step">
              <div className="step-index">1</div>
              <div className="step-body">
                <h4>Gap Assessment</h4>
                <p>Review current controls against ISO 28000 requirements.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">2</div>
              <div className="step-body">
                <h4>Design & Planning</h4>
                <p>Define scope, risks, policies, and responsibilities.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">3</div>
              <div className="step-body">
                <h4>Implementation</h4>
                <p>Roll out procedures, training, and operational controls.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">4</div>
              <div className="step-body">
                <h4>Internal Audit</h4>
                <p>Verify effectiveness and readiness for certification.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-index">5</div>
              <div className="step-body">
                <h4>Certification Audit</h4>
                <p>Stage 1 & 2 audits by an accredited certification body.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">What We Deliver</h2>
          <div className="meta">
            <span className="pill">Supply Chain Risk Register</span>
            <span className="pill">Security Policy & Objectives</span>
            <span className="pill">SOPs & Work Instructions</span>
            <span className="pill">Training & Awareness</span>
            <span className="pill">Internal Audit Toolkit</span>
            <span className="pill">Certification Readiness</span>
          </div>
        </article>

        <article className="card">
          <h2 className="section-title h2 dark">FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>How long does ISO 28000 implementation take?</summary>
              <p>Typical projects take 8–16 weeks depending on scope, complexity,
              and organizational readiness.</p>
            </details>
            <details>
              <summary>Do we need a separate ISO 28000 if we have ISO 9001 or 27001?</summary>
              <p>No. ISO 28000 integrates well with other management systems and
              can leverage existing documentation and controls.</p>
            </details>
            <details>
              <summary>Is certification mandatory?</summary>
              <p>Certification is optional, but many partners and customers may
              require it as evidence of supply chain security.</p>
            </details>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link alt" to="/contact">Talk to an Expert</Link>
        </div>
      </main>
    </div>
  );
}
