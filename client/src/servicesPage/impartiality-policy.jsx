import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import {
  FaBalanceScale,
  FaUserShield,
  FaHandshake,
  FaEye,
  FaChartLine,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaLock,
  FaGlobe,
  FaShieldAlt,
  FaSyncAlt,
  FaArrowRight
} from "react-icons/fa";
import "../styles/servicespage-css/impartiality-policy.css";

const ImpartialityPolicy = () => {
  const [activePolicy, setActivePolicy] = useState("principle");

  return (
    <div className="impartiality-policy-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Impartiality Policy</h2>
            <p className="section-subtitle">Ensuring objectivity, independence, and integrity in all our certification activities</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="policy-intro">
              <div className="policy-icon-main">
                <FaBalanceScale />
              </div>
              <p>
                At Certigence, we recognize that impartiality is fundamental to delivering credible certification services.
                This policy outlines our commitment to maintaining objectivity and independence in all our certification activities,
                ensuring that our decisions are based solely on objective evidence without any bias or influence.
              </p>
            </div>
          </Col>
        </Row>

        {/* Policy Principles */}
        <Row className="mt-5">
          <Col>
            <h3 className="text-center mb-4">Our Impartiality Principles</h3>
            <Row>
              <Col md={6} className="mb-4">
                <div 
                  className={`policy-card ${activePolicy === 'principle' ? 'active' : ''}`}
                  onMouseEnter={() => setActivePolicy('principle')}
                >
                  <div className="policy-card-header">
                    <div className="policy-icon">
                      <FaShieldAlt />
                    </div>
                    <h4>Fundamental Principle</h4>
                  </div>
                  <div className="policy-card-body">
                    <p>
                      Certigence is committed to impartiality in all its certification activities. We understand the importance of 
                      making decisions based on objective evidence without any bias or influence from external parties.
                    </p>
                    <ul>
                      <li>Decisions based solely on objective evidence</li>
                      <li>No discrimination against any applicant</li>
                      <li>No external influences on certification decisions</li>
                    </ul>
                  </div>
                </div>
              </Col>
              
              <Col md={6} className="mb-4">
                <div 
                  className={`policy-card ${activePolicy === 'management' ? 'active' : ''}`}
                  onMouseEnter={() => setActivePolicy('management')}
                >
                  <div className="policy-card-header">
                    <div className="policy-icon">
                      <FaChartLine />
                    </div>
                    <h4>Management of Impartiality</h4>
                  </div>
                  <div className="policy-card-body">
                    <p>
                      We have established a robust framework to identify, analyze, and mitigate potential threats to impartiality
                      on an ongoing basis.
                    </p>
                    <ul>
                      <li>Regular risk assessments</li>
                      <li>Impartiality committee oversight</li>
                      <li>Confidentiality agreements for all personnel</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Detailed Policy Content */}
        <Row className="mt-5">
          <Col>
            <div className="policy-details">
              <h3 className="text-center mb-4">Detailed Policy Framework</h3>
              
              <Accordion defaultActiveKey="0" className="policy-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FaUserShield className="accordion-icon" />
                    <span>Structural Safeguards</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Certigence has implemented structural safeguards to ensure impartiality:</p>
                    <ul>
                      <li>Separation of  certification activities</li>
                      <li>Independent Impartiality Committee with external stakeholders</li>
                      <li>Clear organizational structure with defined responsibilities</li>
                      <li>Financial independence from specific clients or client groups</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaHandshake className="accordion-icon" />
                    <span>Relationship Management</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>We maintain strict protocols for managing relationships:</p>
                    <ul>
                      <li>No financial relationships that could compromise impartiality</li>
                      <li>Clear boundaries between certification and other services</li>
                      <li>Regular declaration of interests from all personnel</li>
                      <li>Procedures to address conflicts of interest</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaEye className="accordion-icon" />
                    <span>Oversight & Monitoring</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Continuous monitoring ensures ongoing impartiality:</p>
                    <ul>
                      <li>Regular internal audits of certification activities</li>
                      <li>Impartiality Committee reviews of certification decisions</li>
                      <li>Client feedback mechanisms to identify potential issues</li>
                      <li>Management reviews of impartiality risks</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaExclamationTriangle className="accordion-icon" />
                    <span>Threat Identification</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>We proactively identify potential threats to impartiality:</p>
                    <ul>
                      <li>Self-interest threats (financial or personal interests)</li>
                      <li>Self-review threats (reviewing one's own work)</li>
                      <li>Familiarity threats (relationships with clients)</li>
                      <li>Intimidation threats (pressures from external sources)</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>

        {/* Implementation Framework */}
        <Row className="mt-5">
          <Col>
            <div className="implementation-framework">
              <h3 className="text-center mb-4">Implementation Framework</h3>
              
              <Row>
                <Col md={4} className="mb-4">
                  <div className="framework-item">
                    <div className="framework-icon">
                      <FaLock />
                    </div>
                    <h5>Confidentiality</h5>
                    <p>All client information is treated with strict confidentiality to prevent any misuse that could compromise impartiality.</p>
                  </div>
                </Col>
                
                <Col md={4} className="mb-4">
                  <div className="framework-item">
                    <div className="framework-icon">
                      <FaClipboardCheck />
                    </div>
                    <h5>Process Integrity</h5>
                    <p>Standardized processes ensure consistent application of certification criteria without variation based on client relationships.</p>
                  </div>
                </Col>
                
                <Col md={4} className="mb-4">
                  <div className="framework-item">
                    <div className="framework-icon">
                      <FaGlobe />
                    </div>
                    <h5>Global Standards</h5>
                    <p>Adherence to international standards (ISO/IEC 17021) ensures our impartiality measures meet global best practices.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Commitment Statement */}
        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <div className="commitment-statement">
              <h3 className="text-center mb-4">Our Commitment</h3>
              <div className="statement-content">
                <p>
                  Certigence is fully committed to maintaining  in all its certification activities. 
                  We ensure that all personnel involved in certification activities act impartially and are free 
                  from any commercial, financial, or other pressures that might affect judgment.
                </p>
                <p>
                  We regularly review our processes to identify and eliminate any potential threats to impartiality. 
                  Any situation that could present a conflict of interest is promptly addressed through our established 
                  procedures to ensure the integrity of our certification process.
                </p>
                <div className="signature-block">
                  <div className="signature-line"></div>
                  <p className signature-name>John Smith</p>
                  <p className="signature-title">Chief Executive Officer, Certigence</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Contact Information */}
        <Row className="mt-5">
          <Col>
            <div className="policy-contact">
              <h4>Questions About Our info Policy?</h4>
              <p>Contact our info Committee at <a href="info@certigence.co.uk">info@certigence.co.uk</a></p>
              <button className="cta-btn">
               <a href="/contact"> Contact Us  <FaArrowRight /></a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImpartialityPolicy;