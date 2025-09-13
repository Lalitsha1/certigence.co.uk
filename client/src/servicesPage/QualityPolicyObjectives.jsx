import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMedal,
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaSyncAlt,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaRocket,
  FaArrowRight,
  FaUserCheck, // New icon for Professionalism
  FaClipboardCheck, // New icon for Integrity
} from "react-icons/fa";
import "../styles/servicespage-css/QualityPolicyObjectives.css";

const QualityPolicy = () => {
  const [activeCard, setActiveCard] = useState("policy");

  return (
    <div className="quality-policy-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Our Commitment to Quality & Excellence</h2>
            <p className="section-subtitle">
              Building a foundation of trust, integrity, and continuous improvement.
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <div className="quality-intro">
              <div className="quality-icon-main">
                <FaMedal />
              </div>
              <p>
                At Certigence, our unwavering commitment to quality is the cornerstone of our mission. Our Quality Management System is built on the principles of impartiality, competence, and continuous improvement, ensuring that every certification service we provide is of the highest standard. We are dedicated to delivering professional, value-adding services that not only meet but exceed the expectations of our clients and stakeholders.
              </p>
            </div>
          </Col>
        </Row>

        {/* Policy & Objectives Cards */}
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <div
              className={`quality-card ${
                activeCard === "policy" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveCard("policy")}
            >
              <div className="quality-card-header">
                <div className="quality-icon">
                  <FaAward />
                </div>
                <h4>Our Quality Policy</h4>
              </div>
              <div className="quality-card-body">
                <p>
                  Certigence is committed to providing independent, impartial, and value-adding certification services in accordance with ISO/IEC 17021 requirements. We pledge to maintain a robust and effective Quality Management System to ensure the confidence of our clients and the integrity of our certification process. Our policy is defined by the following core principles:
                </p>
                <ul>
                  <li>
                    <FaClipboardCheck className="list-icon" />
                    <strong>Compliance & Integrity:</strong> We strictly adhere to all relevant international standards and statutory requirements, ensuring every audit is conducted with the utmost integrity and professionalism.
                  </li>
                  <li>
                    <FaUserCheck className="list-icon" />
                    <strong>Impartiality & Objectivity:</strong> We guarantee the impartiality of our certification decisions by managing all potential conflicts of interest, ensuring objective and evidence-based assessments.
                  </li>
                  <li>
                    <FaSyncAlt className="list-icon" />
                    <strong>Continual Improvement:</strong> We are dedicated to the ongoing enhancement of our management system and operational processes to improve efficiency, effectiveness, and customer satisfaction.
                  </li>
                  <li>
                    <FaHandshake className="list-icon" />
                    <strong>Client Focus:</strong> We actively listen to our clients and strive to understand their unique needs, delivering services that support their business goals and foster long-term partnerships.
                  </li>
                  <li>
                    <FaUsers className="list-icon" />
                    <strong>Personnel Competence:</strong> We invest in the continuous training and development of our auditors and staff to ensure they possess the necessary skills and knowledge to perform their duties competently and professionally.
                  </li>
                </ul>
                <div className="policy-statement">
                  <h5>Our Quality Promise:</h5>
                  <p>
                    "We pledge to deliver certification services that enhance organizational performance, build stakeholder confidence, and promote excellence in management systems, every time."
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mb-4">
            <div
              className={`quality-card ${
                activeCard === "objectives" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveCard("objectives")}
            >
              <div className="quality-card-header">
                <div className="quality-icon">
                  <FaBullseye />
                </div>
                <h4>Our Quality Objectives</h4>
              </div>
              <div className="quality-card-body">
                <p>
                  To bring our Quality Policy to life, Certigence has established clear, measurable objectives that guide our daily operations and strategic planning. We regularly review our performance against these objectives to ensure we are meeting our commitments.
                </p>
                <div className="objective-item">
                  <div className="objective-icon">
                    <FaChartLine />
                  </div>
                  <div className="objective-content">
                    <h6>Enhance Client Satisfaction</h6>
                    <p>
                      To achieve and maintain a client satisfaction rating of 95% or higher, measured through annual feedback surveys. We are committed to addressing client concerns promptly and effectively.
                    </p>
                  </div>
                </div>

                <div className="objective-item">
                  <div className="objective-icon">
                    <FaSyncAlt />
                  </div>
                  <div className="objective-content">
                    <h6>Ensure Timely Service Delivery</h6>
                    <p>
                      To deliver 98% of all certification decisions within the agreed-upon timeframe, ensuring clients can proceed with their business operations without unnecessary delays.
                    </p>
                  </div>
                </div>

                <div className="objective-item">
                  <div className="objective-icon">
                    <FaUsers />
                  </div>
                  <div className="objective-content">
                    <h6>Invest in Auditor Competence</h6>
                    <p>
                      To provide a minimum of 40 hours of relevant professional development training annually to all auditors and staff, ensuring they remain at the forefront of industry knowledge.
                    </p>
                  </div>
                </div>

                <div className="objective-item">
                  <div className="objective-icon">
                    <FaEye />
                  </div>
                  <div className="objective-content">
                    <h6>Drive Process Excellence</h6>
                    <p>
                      To implement at least 5 significant process improvements annually, based on internal audits, client feedback, and management reviews to streamline operations and enhance service quality.
                    </p>
                  </div>
                </div>

                <div className="objective-item">
                  <div className="objective-icon">
                    <FaAward />
                  </div>
                  <div className="objective-content">
                    <h6>Increase Market Reach</h6>
                    <p>
                      To expand our client base by 15% year-over-year, demonstrating our growing reputation for excellence and reliability in the certification industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* New Section: The Benefits of Our Quality Approach */}
        <Row className="mt-5">
            <Col lg={10} className="mx-auto text-center">
                <h3 className="section-title">The Benefits of Our Quality-Driven Approach</h3>
                <p className="section-subtitle">
                    Our commitment to quality translates directly into tangible benefits for your business.
                </p>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md={3} className="benefit-card mb-4 text-center">
                <div className="benefit-icon"><FaLightbulb /></div>
                <h4>Enhanced Credibility</h4>
                <p>Gain trust and respect from your clients and partners with a certification from a reputable, quality-focused body.</p>
            </Col>
            <Col md={3} className="benefit-card mb-4 text-center">
                <div className="benefit-icon"><FaRocket /></div>
                <h4>Improved Performance</h4>
                <p>Our audit process provides valuable insights that help you optimize your management systems and business operations.</p>
            </Col>
            <Col md={3} className="benefit-card mb-4 text-center">
                <div className="benefit-icon"><FaArrowRight /></div>
                <h4>Reduced Risk</h4>
                <p>Our rigorous and impartial assessments help you identify and mitigate risks, safeguarding your reputation and operational stability.</p>
            </Col>
            <Col md={3} className="benefit-card mb-4 text-center">
                <div className="benefit-icon"><FaHandshake /></div>
                <h4>Global Recognition</h4>
                <p>Our certifications are internationally recognized, opening up new markets and opportunities for your business.</p>
            </Col>
        </Row>
        
        {/* ✅ Keep your remaining sections as they are */}
      </Container>
    </div>
  );
};

export default QualityPolicy;
