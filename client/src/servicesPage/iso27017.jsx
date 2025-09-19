import React from "react";
import { Link } from "react-router-dom";
import "../servicespage-css/iso27017.css";

export default function ISO27017() {
  return (
    <div className="auth-detail iso27017-page">
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <div className="hero-content">
            <h1>ISO/IEC 27017: Cloud Security & Trust</h1>
            <p>
              A powerful international standard designed to enhance the security of cloud services, providing a clear framework for both cloud service providers and customers to manage risks and build trust.
            </p>
          </div>
        </div>
      </section>

      <main className="detail-main">
        <div className="detail-grid">
          <article className="card">
            <h2 className="section-title h2">Diving into ISO/IEC 27017</h2>
            <p className="lead">
              ISO/IEC 27017 is not a standalone management system but a **code of practice** that extends and clarifies the information security controls of ISO/IEC 27001 specifically for cloud computing. It addresses the unique security risks and challenges presented by cloud environments, such as multi-tenancy, shared responsibility, and the lifecycle management of virtual assets. The standard is a crucial reference point for organizations looking to bridge the gap between their general ISMS and the distinct demands of the cloud.
            </p>
            
            <div className="image-container img-card ratio-16x9">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80"
                alt="Diagram showing secure cloud infrastructure"
                loading="lazy"
              />
            </div>
            
            <h3 className="section-title h3">Cloud-Specific Controls and Guidance</h3>
            <p>
              The standard provides enhanced guidance on 37 existing controls from ISO 27002 and introduces seven new, cloud-specific controls to address critical security gaps. These controls include:
            </p>
            <ul className="list">
              <li>**Shared Roles and Responsibilities**: Clarifies who is accountable for what.</li>
              <li>**Removal of Customer Assets**: Defines procedures for the secure deletion and return of data upon contract termination.</li>
              <li>**Virtual Environment Segregation**: Ensures the logical separation and protection of one customer's data from another's.</li>
              <li>**Virtual Machine Hardening**: Recommends best practices for securing and configuring virtual machine images.</li>
              <li>**Administrator Operational Security**: Provides guidance for privileged access to the cloud environment.</li>
              <li>**Monitoring of Cloud Services**: Outlines how a provider should enable customers to monitor their own activities.</li>
              <li>**Alignment of Security Management**: Harmonizes security management across physical and virtual networks.</li>
            </ul>
          </article>

          <aside className="card">
            <div className="aside-section">
              <h3 className="section-title h3">Key Drivers for Adoption</h3>
              <p>Organizations pursue ISO 27017 for several compelling reasons:</p>
              <ul className="list">
                <li>**Demonstrated Trust**: It provides a tangible way for CSPs to show they are serious about security, which is a major buying factor for customers.</li>
                <li>**Risk Mitigation**: Proactively addresses vulnerabilities like data breaches, unauthorized access, and compliance failures, leading to measurable lower incident rates.</li>
                <li>**Regulatory Compliance**: Helps meet legal and regulatory requirements (like GDPR) by providing a structured approach to protecting data in the cloud.</li>
                <li>**Competitive Edge**: A certified provider gains a significant market advantage by offering an independently verified level of security.</li>
              </ul>
            </div>
            <div className="image-container img-card ratio-4x3">
              <img
                src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80"
                alt="Abstract image representing data integrity and privacy"
                loading="lazy"
              />
            </div>
          </aside>
        </div>

        <article className="card full-width-card">
          <h2 className="section-title h2">The Shared Responsibility Model in Practice</h2>
          <p>
            The shared responsibility model is the cornerstone of cloud security. ISO 27017's primary value is eliminating ambiguity by explicitly defining the security roles for both the provider and the customer. This ensures that no aspect of security is left to chance.
          </p>
          <div className="diagram-container">
            <img
              src="blob:https://www.bing.com/7ef4c6b9-dd47-4e08-9505-40e831d4ee12"
              alt="Detailed diagram of the cloud shared responsibility model"
              loading="lazy"
              className="diagram-image"
            />
          </div>
          <div className="content-columns">
            <div className="column">
              <h3>For Cloud Service Providers (CSPs)</h3>
              <p>
                CSPs are responsible for the **security of the cloud**. This includes the physical security of data centers, the underlying hardware, networking infrastructure, and the virtualization layer. ISO 27017 guides providers on how to maintain the integrity and confidentiality of these foundational layers, ensuring that the service itself is secure for all customers.
              </p>
            </div>
            <div className="column">
              <h3>For Cloud Service Customers (CSCs)</h3>
              <p>
                CSCs are responsible for the **security in the cloud**. This covers everything they put on the cloud, including their data, applications, operating systems, and configurations. The standard empowers customers to perform due diligence, define their security requirements in contracts, and implement their own controls to protect their information within the providerâ€™s infrastructure.
              </p>
            </div>
          </div>
        </article>

        <div className="back-row">
          <Link className="back-link" to="/services">Back to Services</Link>
        </div>
      </main>
    </div>
  );
}

