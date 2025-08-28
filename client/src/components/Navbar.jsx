import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import "../styles/Navbar.css";

// ✅ Import Bootstrap CSS & JS globally
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavbarComponent = () => {
  return (
    <div>
      {/* 🔹 Topbar Section */}
      <div className="topbar">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="topbar-left">
            <FaEnvelope className="icon" /> info@certigence.co.uk
            <FaMapMarkerAlt className="icon ms-3" /> 8902 London, 8950018 US.
          </div>
          <div className="topbar-right">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>

            {/* 🔽 Language Dropdown */}
            <NavDropdown title="ENGLISH" id="language-dropdown">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>French</NavDropdown.Item>
              <NavDropdown.Item>German</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </div>

      {/* 🔹 Main Navbar Section */}
      <Navbar expand="lg" className="main-navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src="images/img-logo.jpeg"
              alt="Certigence Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              
              {/* ✅ Corrected "About Us" Dropdown */}
              <NavDropdown title="About Us" id="about-us-dropdown">
                <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/vision-mission">Vision And Mission</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/impartiality-policy">Impartiality Policy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quality-policy">Quality Policy & Objectives</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management-process">Management System Process</NavDropdown.Item>
              </NavDropdown>
              
              {/* 🔽 Services Dropdown (Your existing dropdown) */}
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/iso-9001">ISO 9001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-14001">ISO 14001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-45001">ISO 45001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-13485">ISO 13485</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-27001">ISO 27001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-37001">ISO 37001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-50001">ISO 50001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-22000">ISO 22000</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/industries">Industries</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            {/* 🔎 Search & User Icons */}
            <div className="icons">
              <FaSearch className="me-3" />
              <Link to="/auth">
                <FaUser className="me-3" />
              </Link>
            </div>

            {/* CTA Button */}
            <button className="quote-btn">Get a Quote →</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;