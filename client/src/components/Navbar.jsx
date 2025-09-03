// NavbarComponent.jsx
import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

// NOTE: import bootstrap CSS ONLY (no bootstrap JS)
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const NavbarComponent = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8822/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      setIsAuthenticated(false);
      setUser(null);
      navigate("/auth");
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div>
      {/* Topbar */}
      <div className="certi-navbar__topbar">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="certi-navbar__topbar-left">
            <FaEnvelope className="certi-navbar__icon" /> info@certigence.co.uk
            <FaMapMarkerAlt className="certi-navbar__icon ms-3" /> 8902 London, 8950018 US.
          </div>
          <div className="certi-navbar__topbar-right">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="certi-navbar__main">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="images/img-logo.png" alt="Certigence Logo" className="certi-navbar__logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="About Us" id="about-us-dropdown">
                <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/vision-mission">Vision & Mission</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/impartiality-policy">Impartiality Policy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quality-policy">Quality Policy & Objectives</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management-process">Management System Process</NavDropdown.Item>
              </NavDropdown>

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

              <Nav.Link as={Link} to="/accreditation">Accreditation</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            <form className="certi-navbar__search d-flex" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit"><FaSearch /></button>
            </form>

            <div className="certi-navbar__auth">
              {isAuthenticated ? (
                <span onClick={handleLogout}><FaSignOutAlt className="me-2" /> Logout</span>
              ) : (
                <span onClick={() => navigate("/auth")}><FaUser className="me-2" /> Login</span>
              )}
            </div>

            <button
              className="certi-navbar__quote"
              onClick={() => navigate("/contact")}
            >
              Get a Quote →
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
