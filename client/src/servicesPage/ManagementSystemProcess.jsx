import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaProjectDiagram,
  FaFileAlt,
  FaClipboardCheck,
  FaUserTie,
  FaRocket,
  FaSyncAlt, // For Surveillance & Recertification
} from "react-icons/fa";
import "../styles/servicespage-css/ManagementSystemProcess.css";

const ManagementSystemProcess = () => {
  return (
    <div className="management-process-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Our Management System Process</h2>
            <p className="section-subtitle">
              A transparent, collaborative, and step-by-step journey to achieve certification excellence.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10} className="mx-auto">
            <div className="process-intro">
              <p>
                Our process ensures that your organization not only meets the ISO standard 
                requirements but also builds a culture of continual improvement. Each stage is 
                tailored to your business needs, ensuring compliance, efficiency, and long-term success.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="process-flow">
          {/* Step 1 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="process-card">
              <span className="process-step-number">1</span>
              <div className="process-icon"><FaProjectDiagram /></div>
              <h4>Initial Planning & Scoping</h4>
              <p>
                We start by understanding your organization’s context, stakeholders, and objectives. 
                Clear project timelines, roles, and responsibilities are defined to set a strong foundation.
              </p>
            </div>
          </Col>

          {/* Step 2 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="process-card">
              <span className="process-step-number">2</span>
              <div className="process-icon"><FaFileAlt /></div>
              <h4>Documentation & Implementation</h4>
              <p>
                Policies, procedures, and records are aligned with ISO requirements. Our team 
                provides templates, guidance, and best practices to help you implement 
                the system effectively.
              </p>
            </div>
          </Col>

          {/* Step 3 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="process-card">
              <span className="process-step-number">3</span>
              <div className="process-icon"><FaClipboardCheck /></div>
              <h4>Internal Audit & Management Review</h4>
              <p>
                Internal audits are performed to identify gaps. A management review ensures 
                leadership involvement and strategic alignment before moving to certification.
              </p>
            </div>
          </Col>

          {/* Step 4 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="process-card">
              <span className="process-step-number">4</span>
              <div className="process-icon"><FaUserTie /></div>
              <h4>Certification Audit</h4>
              <p>
                An independent audit is conducted in two stages (Stage 1 & 2). 
                Evidence is gathered, and conformity to ISO requirements is evaluated objectively.
              </p>
            </div>
          </Col>

          {/* Step 5 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="process-card">
              <span className="process-step-number">5</span>
              <div className="process-icon"><FaRocket /></div>
              <h4>Certification & Continual Improvement</h4>
              <p>
                Certification is awarded upon success. We provide support for continuous 
                monitoring, corrective actions, and performance improvements.
              </p>
            </div>
          </Col>

          {/* Step 6 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <div className="process-card">
              <span className="process-step-number">6</span>
              <div className="process-icon"><FaSyncAlt /></div>
              <h4>Surveillance & Recertification</h4>
              <p>
                Regular surveillance audits and a 3-year recertification cycle ensure 
                your management system remains effective, compliant, and future-ready.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManagementSystemProcess;
