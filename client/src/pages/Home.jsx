import React from "react";
import BlogSection from "../components/BlogSection,"; // ✅ Fixed import
import "../styles/Home.css"; // import css for feedback section
import InsuranceServices from "../components/InsuranceServices"; // ✅ logo carousel styles
import ExcellentService from "../context/ExcellentService";
import ServicesTimeline from "../context/ServicesTimeline";

// Reusable social links
const socialLinks = [
  { href: "#", icon: "facebook" },
  { href: "#", icon: "pinterest" },
  { href: "#", icon: "twitter" },
  { href: "#", icon: "instagram" },
];

// Navbar dropdown items
const navDropdowns = {
  Standard: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 22000", "ISO 27001"],
  Services: ["Consulting", "Training", "Audit", "Certification Support", "Risk Assessment"],
  Industries: ["Manufacturing", "Healthcare", "Education", "IT & Software", "Food & Beverages"],
};

// Dropdown Component
const Dropdown = ({ title, items }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {title}
    </a>
    <ul className="dropdown-menu">
      {items.map((item, i) => (
        <li key={i}>
          <a className="dropdown-item" href="#">{item}</a>
        </li>
      ))}
    </ul>
  </li>
);

// ✅ Logo Carousel Component
// const LogoCarousel = () => {
//   const logos = Array(10).fill(
//     "https://randomuser.me/api/portraits/men/32.jpg"
//   ); // you can replace with your logo paths

//   return (
//     <div className="logo-carousel">
//       <div className="logo-track">
//         {logos.map((logo, index) => (
//           <div className="logo" key={index}>
//             <img src={logo} alt={`logo-${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary text-white d-flex justify-content-between align-items-center px-4 py-2">
        <div>
          <i className="bi bi-envelope-fill me-2"></i>
          <a href="mailto:info@certigence.co.uk" className="text-white text-decoration-none">
            info@certigence.co.uk
          </a>
          <span className="ms-4">
            <i className="bi bi-geo-alt-fill me-2"></i>
            8902 London, 8950018 US.
          </span>
        </div>
        <div>
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} className="text-white me-3">
              <i className={`bi bi-${s.icon}`}></i>
            </a>
          ))}
          {/* Language Dropdown */}
          <div className="d-inline dropdown">
            <a
              href="#"
              className="text-white text-decoration-none dropdown-toggle"
              id="languageDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ENGLISH
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
              {["English", "Spanish", "French", "Hindi", "German"].map((lang, i) => (
                <li key={i}>
                  <a className="dropdown-item" href="#">{lang}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/images/img-logo.jpeg" // ✅ from public/images
              alt="Certigence ISO Consultancy"
              className="me-2"
              style={{ height: "60px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>

              {/* Dropdowns */}
              {Object.entries(navDropdowns).map(([title, items]) => (
                <Dropdown key={title} title={title} items={items} />
              ))}

              <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>

              {/* Search + User */}
              <li className="nav-item d-flex align-items-center ms-3">
                <a href="#" className="nav-link px-2"><i className="bi bi-search fs-5"></i></a>
                <a href="http://localhost:5173/auth" className="nav-link px-2"><i className="bi bi-person fs-5"></i></a>
              </li>

              {/* Get a Quote */}
              <li className="nav-item ms-3">
                <a
                  href="#"
                  className="btn btn-primary rounded-pill px-4 d-flex align-items-center"
                  style={{ height: "40px" }}
                >
                  <span>Get a</span>
                  <br />
                  <strong style={{ lineHeight: "1" }}>Quote</strong>
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
            At Certigence, we specialize in helping organizations achieve global
            compliance through internationally recognized ISO standards. With years
            of expertise, we ensure a seamless certification process tailored to
            your business needs.
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
