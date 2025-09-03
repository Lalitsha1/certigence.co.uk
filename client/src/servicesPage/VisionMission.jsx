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
  FaCalendarAlt
} from "react-icons/fa";
import "../styles/servicespage-css/VisionMission.css";

const VisionMission = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Stats data - you can customize these numbers
  const statsData = {
    certifications: 1500,
    satisfaction: 98,
    countries: 25,
    experience: 12
  };
  
  // Animation for counting numbers
  const [animatedStats, setAnimatedStats] = useState({
    certifications: 0,
    satisfaction: 0,
    countries: 0,
    experience: 0
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const startCounting = () => {
    const duration = 2000; // ms
    const frameRate = 30; // fps
    const totalFrames = Math.round(duration / (1000 / frameRate));
    
    Object.keys(statsData).forEach(stat => {
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.round(statsData[stat] * progress);
        
        setAnimatedStats(prev => ({
          ...prev,
          [stat]: currentValue
        }));
        
        if (frame === totalFrames) {
          clearInterval(timer);
        }
      }, 1000 / frameRate);
    });
  };

  return (
    <div className="vision-mission-wrapper">
      <div className="vision-mission-section py-5" ref={sectionRef}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title">Our Vision & Mission</h2>
              <p className="section-subtitle">Driving excellence through certification and compliance solutions worldwide</p>
            </Col>
          </Row>
          
          <Row>
            {/* Vision Section */}
            <Col lg={6} className="mb-5">
              <div 
                className={`vision-card h-100 ${activeCard === 'vision' ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard('vision')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-floating-elements">
                  <div className="floating-circle circle-1"></div>
                  <div className="floating-circle circle-2"></div>
                  <div className="floating-circle circle-3"></div>
                </div>
                
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
                  To be the world's most trusted and innovative certification partner, transforming how organizations 
                  achieve excellence through internationally recognized standards. We envision a global business 
                  landscape where quality, safety, and sustainability are not just compliance requirements but 
                  foundational pillars that drive growth, innovation, and positive impact.
                </p>
                
                <div className="key-points">
                  <h4>Strategic Pillars:</h4>
                  <ul>
                    <li><FaAward className="point-icon" /> Global excellence in certification services</li>
                    <li><FaLightbulb className="point-icon" /> Innovation in compliance solutions</li>
                    <li><FaGlobe className="point-icon" /> Sustainable business practices worldwide</li>
                    <li><FaHandshake className="point-icon" /> Trusted partnerships across industries</li>
                    <li><FaShieldAlt className="point-icon" /> Uncompromising integrity and quality</li>
                  </ul>
                </div>
                
                <div className="cta-container">
                  <button className="cta-btn">
                    Explore Our Approach <FaArrowRight />
                  </button>
                </div>
              </div>
            </Col>
            
            {/* Mission Section */}
            <Col lg={6} className="mb-5">
              <div 
                className={`mission-card h-100 ${activeCard === 'mission' ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard('mission')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-floating-elements">
                  <div className="floating-circle circle-1"></div>
                  <div className="floating-circle circle-2"></div>
                  <div className="floating-circle circle-3"></div>
                </div>
                
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
                  To empower organizations of all sizes with comprehensive certification solutions that enhance 
                  operational efficiency, ensure regulatory compliance, and drive continuous improvement. Through 
                  expert guidance, personalized service, and innovative approaches, we enable businesses to 
                  exceed standards, mitigate risks, and achieve sustainable growth in an ever-evolving global market.
                </p>
                
                <div className="key-points">
                  <h4>Our Commitment:</h4>
                  <ul>
                    <li><FaUsers className="point-icon" /> Client-centric consultation and guidance</li>
                    <li><FaSyncAlt className="point-icon" /> Tailored certification pathways</li>
                    <li><FaChartLine className="point-icon" /> Ongoing support and training</li>
                    <li><FaRocket className="point-icon" /> Cutting-edge compliance technologies</li>
                    <li><FaHeart className="point-icon" /> Building lasting relationships</li>
                  </ul>
                </div>
                
                <div className="cta-container">
                  <button className="cta-btn">
                    Our Services <FaArrowRight />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          
          {/* Values Section */}
          <Row className="mt-5">
            <Col>
              <div className="values-section">
                <h3>Our Core Values</h3>
                <p className="values-intro">
                  These fundamental principles guide everything we do and form the foundation of our corporate culture
                </p>
                
                <Row className="mt-4">
                  <Col md={3} className="mb-4">
                    <div className="value-item">
                      <div className="value-icon integrity">
                        <FaHandshake />
                        <div className="value-shine"></div>
                      </div>
                      <h5>Integrity</h5>
                      <p>Uncompromising ethics, transparency, and honesty in all our operations and relationships</p>
                      <div className="value-hover-content">
                        <h6>How We Demonstrate Integrity:</h6>
                        <ul>
                          <li>Transparent pricing</li>
                          <li>Honest assessments</li>
                          <li>Ethical business practices</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={3} className="mb-4">
                    <div className="value-item">
                      <div className="value-icon excellence">
                        <FaRocket />
                        <div className="value-shine"></div>
                      </div>
                      <h5>Excellence</h5>
                      <p>Commitment to the highest standards of service, certification quality, and continuous improvement</p>
                      <div className="value-hover-content">
                        <h6>Our Excellence Standards:</h6>
                        <ul>
                          <li>Quality assurance protocols</li>
                          <li>Continuous training</li>
                          <li>Industry best practices</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={3} className="mb-4">
                    <div className="value-item">
                      <div className="value-icon innovation">
                        <FaLightbulb />
                        <div className="value-shine"></div>
                      </div>
                      <h5>Innovation</h5>
                      <p>Embracing new technologies, methodologies, and creative solutions to advance certification processes</p>
                      <div className="value-hover-content">
                        <h6>Innovation in Action:</h6>
                        <ul>
                          <li>Digital certification platforms</li>
                          <li>Streamlined processes</li>
                          <li>Future-focused solutions</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={3} className="mb-4">
                    <div className="value-item">
                      <div className="value-icon partnership">
                        <FaUsers />
                        <div className="value-shine"></div>
                      </div>
                      <h5>Partnership</h5>
                      <p>Building long-term, collaborative relationships based on trust, respect, and mutual success</p>
                      <div className="value-hover-content">
                        <h6>Partnership Approach:</h6>
                        <ul>
                          <li>Customized solutions</li>
                          <li>Ongoing support</li>
                          <li>Growth collaboration</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          
          {/* Stats Section */}
          <Row className="mt-5">
            <Col>
              <div className="stats-section">
                <h3>Our Impact in Numbers</h3>
                <Row className="text-center">
                  <Col md={3} className="mb-4">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FaCertificate />
                      </div>
                      <div className="stat-number">{animatedStats.certifications}</div>
                      <div className="stat-label">Certifications Issued</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-4">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FaSmile />
                      </div>
                      <div className="stat-number">{animatedStats.satisfaction}%</div>
                      <div className="stat-label">Client Satisfaction</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-4">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FaGlobeAmericas />
                      </div>
                      <div className="stat-number">{animatedStats.countries}+</div>
                      <div className="stat-label">Countries Served</div>
                    </div>
                  </Col>
                  <Col md={3} className="mb-4">
                    <div className="stat-item">
                      <div className="stat-icon">
                        <FaCalendarAlt />
                      </div>
                      <div className="stat-number">{animatedStats.experience}</div>
                      <div className="stat-label">Years of Experience</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VisionMission;