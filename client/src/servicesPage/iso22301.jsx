import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso22301.css";

export default function ISO22301() {
  return (
    <div className="auth-detail iso22301-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          {/* <div className="iso-hero-graphic">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ISO_22301_logo.svg/300px-ISO_22301_logo.svg.png" 
              alt="ISO 22301 Logo" 
              className="iso-logo"
            />
          </div> */}
          <h1>ISO 22301: Business Continuity Management</h1>
          <p>
            An international standard that specifies requirements for a management system to protect against, reduce the likelihood of, and ensure the recovery from disruptive incidents.
          </p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <h2 className="section-title h2">What is ISO 22301?</h2>
            <p className="lead">
              ISO 22301 is the world's leading standard for **Business Continuity Management (BCM)**. It provides a comprehensive framework to help organizations of all sizes and sectors prepare for, respond to, and recover from disruptive events, whether they are natural disasters, cyber-attacks, or supply chain failures. By implementing a BCM system based on this standard, a company can ensure that it has the resilience to continue its critical operations during a crisis.
            </p>
            
            <div className="image-container img-card">
              <img
                src="https://th.bing.com/th/id/OIG3.zhSFsivgUVCcSbduWAa1?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="Business continuity team in a crisis room"
                loading="lazy"
              />
            </div>
            
            <h3 className="section-title h3">Key Principles of BCM</h3>
            <p>
              The standard is built on a set of core principles that guide the development of a resilient organization.
            </p>
            <ul className="list">
              <li><strong>Prevention and Preparedness</strong>: Proactively identifying threats and implementing controls to reduce their impact.</li>
              <li><strong>Response and Recovery</strong>: Having well-defined plans to respond to a disruption and resume operations quickly.</li>
              <li><strong>Continuous Improvement</strong>: Regularly reviewing, testing, and updating the BCM system to ensure its effectiveness.</li>
              <li><strong>Top Management Commitment</strong>: Ensuring leadership is fully committed to the BCM process.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="aside-section">
              <h3 className="section-title h3">Why is Business Continuity Important?</h3>
              <p>In today's unpredictable world, a disruption can lead to significant financial loss, damage to reputation, and legal consequences. BCM is a strategic investment that:</p>
              <ul className="list">
                <li>**Enhances Resilience**: Allows an organization to survive and thrive despite major incidents.</li>
                <li>**Builds Trust**: Demonstrates to customers, suppliers, and regulators that the business is reliable and responsible.</li>
                <li>**Reduces Risk**: Proactive planning helps mitigate potential damage and minimize downtime.</li>
                <li>**Provides a Competitive Advantage**: Differentiates the company in the market by showing a commitment to stability.</li>
              </ul>
            </div>
            <div className="image-container img-card">
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1400&auto=format&fit=crop"
                alt="Data backup and recovery"
                loading="lazy"
              />
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title h2 dark ">The ISO 22301 Implementation Cycle (Plan-Do-Check-Act)</h2>
          <p>
            ISO 22301 is structured around the **Plan-Do-Check-Act (PDCA)** cycle, a methodology for continuous improvement.
          </p>
          <div className="image-container img-card">
            <img
              src="https://th.bing.com/th/id/OIG1.DDyhSTiKKKBni5WXC8Mu?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              alt="ISO 22301 PDCA Cycle Diagram"
              loading="lazy"
            />
          </div>
          <ol className="list">
            <li><strong>Plan</strong>: Establish the BCM policy, objectives, and processes, including conducting a **Business Impact Analysis (BIA)** to identify critical activities.</li>
            <li><strong>Do</strong>: Implement the business continuity plans, train staff, and conduct regular exercises.</li>
            <li><strong>Check</strong>: Monitor, measure, and review the BCM system's performance against its objectives.</li>
            <li><strong>Act</strong>: Take corrective and preventive actions to continually improve the system.</li>
          </ol>
        </article>
        
        <article className="card">
          <h2 className="section-title h2">What is a Business Impact Analysis (BIA)?</h2>
          <p>
            A BIA is a fundamental component of ISO 22301. It is a systematic process to determine and evaluate the potential effects of a disruption on business operations. The BIA helps identify **critical business processes** and the resources required to support them. Key metrics determined by a BIA include:
          </p>
          <ul className="list">
            <li><strong>Recovery Time Objective (RTO)</strong>: The maximum acceptable downtime for a critical function.</li>
            <li><strong>Recovery Point Objective (RPO)</strong>: The maximum amount of data loss that is acceptable.</li>
            <li><strong>Maximum Tolerable Period of Disruption (MTPD)</strong>: The time after which a business could not recover from a disruption.</li>
          </ul>
          <div className="image-container img-card">
            <img
              src="https://th.bing.com/th/id/OIG4.zwXqgodpxzLXUGdO8otJ?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              alt="People working on business strategy"
              loading="lazy"
            />
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/contact">Connect With Us </Link>
        </div>
      </main>
    </div>
  );
}