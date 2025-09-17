import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso10002.css";


export default function ISO10002() {
  return (
    <div className="auth-detail iso10002-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          {/* <div className="iso-hero-graphic">
            <img 
              src="https://www.iso.org/files/live/sites/isoorg/files/standards/iso/10000/10002/01/logo.png" 
              alt="ISO 10002 Logo" 
              className="iso-logo"
            />
          </div> */}
          <h1>ISO 10002: Customer Complaint Management</h1>
          <p>Guidelines for Quality Management – Customer Satisfaction: Managing customer complaints effectively to enhance satisfaction and loyalty.</p>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <h2 className="section-title h2">What is ISO 10002?</h2>
            <p className="lead">
              ISO 10002 is an international standard that provides a framework for organizations to design and implement an efficient and effective customer **complaint management system (CMS)**. It is a guideline, not a certifiable standard like ISO 9001, but it is often used to support and strengthen the customer satisfaction requirements of other management systems. The standard helps businesses to handle complaints consistently, fairly, and transparently, turning negative feedback into an opportunity for improvement.
            </p>

            <h3 className="section-title h3">The Complaint Handling Process (Flow)</h3>
            <p>
              The standard outlines a structured, eight-step process for handling complaints, ensuring a systematic and repeatable approach.
            </p>
            <div className="iso-image-container img-card">
              <img
                src="https://th.bing.com/th/id/OIG2.98BGC8g3oWe_BJnUQ_qX?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                alt="ISO 10002 Complaint Handling Process Flowchart"
                loading="lazy"
              />
            </div>
            <ol className="list iso-process-list">
              <li><strong>Initiation</strong>: Receiving the complaint and acknowledging it.</li>
              <li><strong>Tracking</strong>: Assigning a unique ID and logging the complaint.</li>
              <li><strong>Investigation</strong>: Gathering all relevant information to understand the issue.</li>
              <li><strong>Response</strong>: Formulating a clear, well-communicated resolution.</li>
              <li><strong>Decision & Action</strong>: Implementing the agreed-upon solution.</li>
              <li><strong>Communication</strong>: Informing the customer of the outcome.</li>
              <li><strong>Closure</strong>: Formally closing the complaint file.</li>
              <li><strong>Review & Analysis</strong>: Using the complaint data to identify trends and improve processes.</li>
            </ol>
            
            <div className="meta">
              <div className="pill">Customer Focus</div>
              <div className="pill">Continuous Improvement</div>
              <div className="pill">Transparency</div>
            </div>

            <h3 className="section-title h3">Key Principles</h3>
            <ul className="list iso-principles">
              <li><strong>Visibility</strong>: The CMS must be easily accessible and known to customers.</li>
              <li><strong>Accessibility</strong>: The complaint process should be simple for customers to use.</li>
              <li><strong>Responsiveness</strong>: Complaints should be acknowledged and addressed promptly.</li>
              <li><strong>Objectivity</strong>: All complaints must be handled impartially and without bias.</li>
              <li><strong>Confidentiality</strong>: Customer privacy must be protected at all times.</li>
              <li><strong>Accountability</strong>: Clear responsibilities for complaint handling should be defined.</li>
              <li><strong>Continual Improvement</strong>: The system should be a tool for ongoing enhancement.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="aside-section">
              <h3 className="section-title h3">Who Benefits?</h3>
              <p>Any organization that interacts with customers can benefit from implementing ISO 10002, regardless of size, type, or industry. It is especially valuable for:</p>
              <ul className="list">
                <li>Service-oriented businesses (e.g., hospitality, finance, healthcare)</li>
                <li>Product-based companies (e.g., manufacturers, retailers)</li>
                <li>Public and government bodies</li>
              </ul>
            </div>
            
            <div className="aside-section">
              <h3 className="section-title h3">Why is it Important?</h3>
              <p>An effective CMS is more than just a process; it's a strategic asset. It helps to:</p>
              <ul className="list">
                <li>**Enhance Customer Loyalty**: A well-handled complaint can turn a dissatisfied customer into a loyal advocate.</li>
                <li>**Improve Reputation**: Demonstrates a commitment to customer care.</li>
                <li>**Reduce Costs**: Resolving issues early prevents them from escalating and becoming more expensive.</li>
                <li>**Gain Valuable Insights**: Complaint data is a rich source of information for improving products and services.</li>
              </ul>
              <div className="iso-image-container img-card" style={{ marginTop: '20px' }}>
                <img
                  src="https://th.bing.com/th/id/OIG2.9bMXX84DTRPAJb2QuSPV?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
                  alt="Customer service representative on the phone"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>
        </div>

        <article className="card">
          <h2 className="section-title h2">ISO 10002 and the PDCA Cycle</h2>
          <p>
            The standard is built around the **Plan-Do-Check-Act (PDCA)** cycle for continuous improvement. This ensures that the complaint management system is not a static process but a dynamic one that constantly adapts and improves.
          </p>
          <div className="iso-image-container img-card">
            <img
              src="https://th.bing.com/th/id/OIG3.E5.W7vsBlHm6v39PDmc8?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              alt="ISO 10002 PDCA Cycle"
              loading="lazy"
            />
          </div>
          <ul className="list">
            <li><strong>Plan</strong>: Establish the complaint handling policy and process.</li>
            <li><strong>Do</strong>: Implement the process and handle complaints.</li>
            <li><strong>Check</strong>: Monitor and measure the performance of the CMS.</li>
            <li><strong>Act</strong>: Take actions to continually improve the system.</li>
          </ul>
        </article>
        
        <div className="back-row">
          <Link className="back-link" to="/authorisations">Back to Authorisations</Link>
        </div>
      </main>
    </div>
  );
}