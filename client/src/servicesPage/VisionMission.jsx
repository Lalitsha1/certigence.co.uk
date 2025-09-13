import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaEye,
  FaBullseye,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaGlobe,
  FaAward,
  FaShieldAlt,
  FaHeart,
  FaSyncAlt,
  FaArrowRight,
  FaCertificate,
  FaSmile,
  FaGlobeAmericas,
  FaCalendarAlt,
} from "react-icons/fa";
import "../styles/servicespage-css/VisionMission.css";

const VisionMission = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ Use numeric values only (no "+")
  const statsData = {
    certifications: 3500,
    satisfaction: 98,
    countries: 150,
    experience: 18,
  };

  const [animatedStats, setAnimatedStats] = useState({
    certifications: 0,
    satisfaction: 0,
    countries: 0,
    experience: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  const startCounting = () => {
    const duration = 2000; // ms
    const frameRate = 30; // fps
    const totalFrames = Math.round(duration / (1000 / frameRate));

    Object.keys(statsData).forEach((stat) => {
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.round(statsData[stat] * progress);

        setAnimatedStats((prev) => ({
          ...prev,
          [stat]: currentValue,
        }));

        if (frame === totalFrames) clearInterval(timer);
      }, 1000 / frameRate);
    });
  };

  return (
    <div className="vision-mission-wrapper">
      <div className="vision-mission-section py-5" ref={sectionRef}>
        <Container>
          {/* Title */}
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Our Vision & Mission</h2>
              <p className="section-subtitle">
                Driving excellence through certification and compliance
                solutions worldwide
              </p>
            </Col>
          </Row>

          {/* Vision & Mission Cards */}
          <Row>
            {/* Vision */}
            <Col lg={6} className="mb-5">
              <div
                className={`vision-card h-100 ${
                  activeCard === "vision" ? "active" : ""
                }`}
                onMouseEnter={() => setActiveCard("vision")}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="icon-container">
                  <div className="icon-wrapper">
                    <FaEye className="main-icon" />
                    <div className="icon-orbit">
                      <FaLightbulb className="orbit-icon" />
                      <FaGlobe className="orbit-icon" />
                      <FaChartLine className="orbit-icon" />
                    </div>
                  </div>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the world's most trusted and innovative certification
                  partner, transforming how organizations achieve excellence
                  through internationally recognized standards.
                </p>
                <div className="key-points">
                  <h4>Strategic Pillars:</h4>
                  <ul>
                    <li>
                      <FaAward className="point-icon" /> Global excellence in
                      certification
                    </li>
                    <li>
                      <FaLightbulb className="point-icon" /> Innovation in
                      compliance
                    </li>
                    <li>
                      <FaGlobe className="point-icon" /> Sustainable business
                      practices
                    </li>
                    <li>
                      <FaHandshake className="point-icon" /> Trusted partnerships
                    </li>
                    <li>
                      <FaShieldAlt className="point-icon" /> Integrity & quality
                    </li>
                  </ul>
                </div>
                <div className="cta-container">
                  <button className="cta-btn">
                  <a href="/contact"> Explore Our Approach <FaArrowRight /></a> 
                  </button>
                </div>
              </div>
            </Col>

            {/* Mission */}
            <Col lg={6} className="mb-5">
              <div
                className={`mission-card h-100 ${
                  activeCard === "mission" ? "active" : ""
                }`}
                onMouseEnter={() => setActiveCard("mission")}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="icon-container">
                  <div className="icon-wrapper">
                    <FaBullseye className="main-icon" />
                    <div className="icon-orbit">
                      <FaRocket className="orbit-icon" />
                      <FaUsers className="orbit-icon" />
                      <FaHandshake className="orbit-icon" />
                    </div>
                  </div>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower organizations of all sizes with certification
                  solutions that enhance efficiency, ensure compliance, and
                  enable sustainable growth.
                </p>
                <div className="key-points">
                  <h4>Our Commitment:</h4>
                  <ul>
                    <li>
                      <FaUsers className="point-icon" /> Client-centric guidance
                    </li>
                    <li>
                      <FaSyncAlt className="point-icon" /> Tailored pathways
                    </li>
                    <li>
                      <FaChartLine className="point-icon" /> Ongoing support
                    </li>
                    <li>
                      <FaRocket className="point-icon" /> Compliance tech
                    </li>
                    <li>
                      <FaHeart className="point-icon" /> Long-term relationships
                    </li>
                  </ul>
                </div>
                <div className="cta-container">
                  <button className="cta-btn">
                  <a href="/contact">  Our Services <FaArrowRight /></a>
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Stats Section */}
          <Row className="mt-5 text-center">
            <Col>
              <h3 id="numb">Our Impact in Numbers</h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <FaCertificate className="stat-icon" />
                <div className="stat-number">
                  {animatedStats.certifications}+
                </div>
                <div className="stat-label">Certifications</div>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <FaSmile className="stat-icon" />
                <div className="stat-number">
                  {animatedStats.satisfaction}%
                </div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <FaGlobeAmericas className="stat-icon" />
                <div className="stat-number">{animatedStats.countries}+</div>
                <div className="stat-label">Countries</div>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="stat-item">
                <FaCalendarAlt className="stat-icon" />
                <div className="stat-number">{animatedStats.experience}</div>
                <div className="stat-label">Years</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VisionMission;
