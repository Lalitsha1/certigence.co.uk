import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// ================= Image Slider =================
const ImageSlider = () => {
  const images = [
    "https://via.placeholder.com/1200x400/007bff/ffffff?text=Slide+1",
    "https://via.placeholder.com/1200x400/6f42c1/ffffff?text=Slide+2",
    "https://via.placeholder.com/1200x400/fd7e14/ffffff?text=Slide+3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ width: "100%", maxWidth: "1200px", height: "400px", margin: "0 auto", overflow: "hidden" }}>
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
          transition: "opacity 0.5s ease-in-out"
        }}
      />
    </div>
  );
};

// ================= Footer =================
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div>
        <p className="mb-1">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
        <div>
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

// ================= Home Page =================
const Home = () => {
  return (
    <>
      {/* ===== Top Info Bar ===== */}
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
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-pinterest"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
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
              <li><a className="dropdown-item" href="#">English</a></li>
              <li><a className="dropdown-item" href="#">Spanish</a></li>
              <li><a className="dropdown-item" href="#">French</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://certigence.co.uk/demo/assets/images/logo-dark.png"
              alt="Certigence ISO Consultancy"
              className="me-2"
              style={{ height: "40px" }}
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

              {/* Dropdown 1 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="standardDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Standard
                </a>
                <ul className="dropdown-menu" aria-labelledby="standardDropdown">
                  <li><a className="dropdown-item" href="#">ISO 9001</a></li>
                  <li><a className="dropdown-item" href="#">ISO 14001</a></li>
                  <li><a className="dropdown-item" href="#">ISO 45001</a></li>
                </ul>
              </li>

              {/* Dropdown 2 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="#">Consulting</a></li>
                  <li><a className="dropdown-item" href="#">Training</a></li>
                  <li><a className="dropdown-item" href="#">Audit</a></li>
                </ul>
              </li>

              <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item d-flex align-items-center ms-3">
                <a href="#" className="nav-link px-2"><i className="bi bi-search fs-5"></i></a>
                <a href="http://localhost:5173/auth" className="nav-link px-2"><i className="bi bi-person fs-5"></i></a>
              </li>
              <li className="nav-item ms-3">
                <a href="#" className="btn btn-primary rounded-pill px-4 d-flex align-items-center" style={{ height: "40px" }}>
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

      {/* ===== Main Content ===== */}
      <Container className="py-5 text-center">
        <h1>Welcome to My App</h1>
        <p className="text-muted">This is your home page. Add your content here.</p>
        <ImageSlider />
      </Container>

      {/* ===== Footer ===== */}
      <Footer />
    </>
  );
};

export default Home;
