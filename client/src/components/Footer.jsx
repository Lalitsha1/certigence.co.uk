import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div
        style={{
          background: "linear-gradient(90deg, #15589bb1, #00bfff)",
          borderRadius: "50px",
          padding: "30px",
          marginTop: "40px",
          position: "relative",
          zIndex: "1",
        }}
        className="d-flex flex-column flex-lg-row align-items-center justify-content-between container shadow "

      >
        <div className="d-flex align-items-center mb-3 mb-lg-0 img-box">
          <img
            src="data:image/jpeg;base64,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"
            alt="Newsletter"
            className="rounded-circle me-3 "
          />
          <h5 className="mb-0 text-white fw-bold">
            Subscribe To Our Newsletter
          </h5>
        </div>
        <Form className="d-flex w-100 w-lg-50">
          <Form.Control
            type="email"
            placeholder="Your email address"
            className="me-2"
          />
          <Button variant="dark" className="fw-bold">
            Subscribe
          </Button>
        </Form>
      </div>

      {/* Main Footer */}
      <footer className="bg-primary text-white pt-5 pb-2 mt-4">
        <Container>
          <Row className="gy-4">
            {/* About */}
            <Col md={4}>
              <img
                src="https://certigence.co.uk/demo/assets/images/logo-light.png"
                alt="Logo"
                className="mb-3 img-in "
              />
              <p>
                Certigence provides expert ISO consultancy and certification
                services, helping businesses across the UK comply with global
                standards in quality, safety, information security, and
                environmental management.
              </p>
              <div>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-pinterest"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </Col>

            {/* Services */}
            <Col md={2}>
              <h5 className="fw-bold down">Services</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Why Choose Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">Our Solutions</a></li>
                <li><a href="#" className="text-white text-decoration-none">Partners</a></li>
                <li><a href="#" className="text-white text-decoration-none">Core Values</a></li>
                <li><a href="#" className="text-white text-decoration-none">Our Projects</a></li>
              </ul>
            </Col>

            {/* City Map */}
            <Col md={3}>
              <h5 className="fw-bold down">City Map</h5>
              <p className="mb-1">
                <i className="bi bi-clock me-2"></i>
                Mon - Fri: 8.00 am - 6.00 pm
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2"></i>
                13/A, Miranda Halim City, Stanhope, IA 50246
              </p>
              <p className="mb-1">
                <i className="bi bi-telephone me-2"></i>
                +099 695 695 35 <br /> +515-826-5572
              </p>
            </Col>

            {/* Gallery */}
            <Col md={3}>
              <h5 className="fw-bold down">Gallery</h5>
              <div className="gallery-grid">
                {[...Array(4)].map((_, idx) => (
                  <img
                    key={idx}
                    src={`data:image/jpeg;base64,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${idx + 1}`}
                    alt={`Gallery ${idx + 1}`}
                    className="rounded"
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-light">
          <small>© Copyright 2025 by Certigence.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
