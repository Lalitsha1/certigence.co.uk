import React from "react";
import BlogSection from "../components/BlogSection,"; // ✅ Fixed import
import "../styles/Home.css"; // import css for feedback section
import InsuranceServices from "../components/InsuranceServices"; // ✅ logo carousel styles
import ExcellentService from "../context/ExcellentService";
import ServicesTimeline from "../context/ServicesTimeline";
import { FaQ } from "react-icons/fa6";
import FaqSection from "../context/FaqSection";
import QuoteForm from "../context/QuoteForm";

const Home = () => {
  return (
    <>
    

      {/* Poster Slider Section */}
      <div className="poster-slider">
        <div className="slides">
          <img src="/images/poster1.jpeg" alt="Poster 1" />
          <img src="/images/poster2.jpeg" alt="Poster 2" />
          <img src="/images/poster3.png" alt="Poster 3" />
        </div>
      </div>


      {/* Feedback Section */}
      <div className="container mt-5 main-container">
        <div className="feedback-container">
          {/* Left Image */}
          <div className="feedback-image">
            <img
              src="https://images.pexels.com/photos/6393371/pexels-photo-6393371.jpeg"
              alt="Happy Family"
            />
          </div>

          {/* Right Content */}
          <div className="feedback-content">
            {/* Client Avatars + Feedback */}
            <div className="feedback-row">
              <div className="avatars">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client1" className="avatar" />
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client2" className="avatar" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client3" className="avatar" />
              </div>
              <p className="feedback-link">
                Client Feedback <span className="arrow">→</span>
              </p>
            </div>

            {/* Stats */}
            <p className="feedback-stats">
              1,200+ businesses empowered with ISO certifications <br />
              <span className="explore">Explore Our Services</span>
            </p>
          </div>
        </div>
      </div>



      {/* Home Section */}
      <section className="home-container">
        {/* Left Stats */}
        <div className="home-left">
          <div className="stat-box">
            <i className="bi bi-check-circle-fill"></i>
            <h3>50+</h3>
            <p>ISO Standards Covered</p>
          </div>
          <div className="stat-box">
            <i className="bi bi-people-fill"></i>
            <h3>1200+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-box">
            <i className="bi bi-award-fill"></i>
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>

        {/* Middle Image */}
        <div className="home-middle">
          <img
            src="https://img.freepik.com/free-photo/happy-family-home_1098-17663.jpg"
            alt="Happy Family"
            className="main-img"
          />
        </div>

        {/* Right Content */}
        <div className="home-right">
          <button className="about-btn">About Certigence</button>
          <h2>
            Your Trusted ISO Certification Partner Since{" "}
            <span className="highlight">2010</span>
          </h2>
          <p>
            At Certigence, we are more than just a certification body – we are your global partner in building trust, credibility, and compliance. As a multi-accreditation certification agency, we provide internationally recognised certifications that empower businesses to compete confidently in today’s market.

            With expertise across ISO standards, sector-specific certifications, and compliance solutions, we work with organisations of all sizes – from startups to multinational corporations – ensuring they meet international quality, safety, and sustainability benchmarks.

            Our approach is built on integrity, impartiality, and innovation, making Certigence the trusted choice for companies worldwide.
          </p>

          <div className="services">
            <div>✔ ISO 9001 Certification</div>
            <div>✔ ISO 27001 Implementation</div>
            <div>✔ Internal Audits</div>
            <div>✔ Compliance Training</div>
          </div>

          {/* Founder Info */}
          <div className="founder-box">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Matthews"
              className="founder-img"
            />
            <div>
              <h4>John Matthews</h4>
              <p>Founder & ISO Lead Auditor</p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta">
            <a href="#"><button className="learn-btn">Learn More →</button></a>
            <a href="https://www.youtube.com/watch?v=h9MbznbxlLc">
              <button className="video-btn">
                ▶ Watch Our Corporate Video
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== */}

      <div className="container my-5">
        <InsuranceServices />
      </div>
      {/* ================================ */}


      {/* Blog Section */}
      <div className="container mt-5">
        <ExcellentService />
      </div>


      {/* =========================================================== */}

      <div className="container mt-5">
        <ServicesTimeline />
      </div>


      {/* ================================================================ */}
      {/* =========================================================== */}

      <div className="container mt-5">
        <QuoteForm />
      </div>


      {/* ================================================================ */}
      {/* =========================================================== */}

      <div className="container mt-5">
        <FaqSection />
      </div>


      {/* ================================================================ */}

      {/* ==================== */}

      {/* Blog Section */}
      <div className="container mt-5">
        <BlogSection />
      </div>


      {/* ==================== */}

    </>
  );
};

export default Home;
