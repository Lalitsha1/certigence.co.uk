import React, { useContext, useState, useEffect } from "react";
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
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle
} from "react-icons/fa";
import axios from "axios";
import { Context } from "../main";
import { API_BASE } from "../utils/api";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const NavbarComponent = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  // ✅ Complete ISO standards list for search
  const isoStandards = [
    // Quality / Operations
    { id: "iso-9001", title: "ISO 9001", description: "Quality Management System" },
    { id: "iso-10002", title: "ISO 10002", description: "Customer Satisfaction & Complaints" },
    { id: "iso-13485", title: "ISO 13485", description: "Medical Devices" },
    { id: "iso-22000", title: "ISO 22000", description: "Food Safety" },
    { id: "iso-22301", title: "ISO 22301", description: "Business Continuity" },
    { id: "iso-28000", title: "ISO 28000", description: "Supply Chain Security" },

    // Environment / Sustainability
    { id: "iso-14001", title: "ISO 14001", description: "Environmental Management System" },
    { id: "iso-50001", title: "ISO 50001", description: "Energy Management System" },
    { id: "iso-14064", title: "ISO 14064", description: "Greenhouse Gases" },
    { id: "iso-45001", title: "ISO 45001", description: "Occupational Health & Safety" },
    { id: "iso-20121", title: "ISO 20121", description: "Event Sustainability" },
    { id: "iso-26000", title: "ISO 26000", description: "Social Responsibility Guidance" },

    // Information / Cybersecurity / Privacy
    { id: "iso-27001", title: "ISO/IEC 27001", description: "Information Security Management" },
    { id: "iso-27017", title: "ISO/IEC 27017", description: "Cloud Security" },
    { id: "iso-27018", title: "ISO/IEC 27018", description: "Protection of PII in Cloud" },
    { id: "iso-27701", title: "ISO/IEC 27701", description: "Privacy Information Management" },
    { id: "iso-20000", title: "ISO/IEC 20000", description: "IT Service Management" },

    // Health & Safety
    { id: "iso-45001", title: "ISO 45001", description: "Occupational Health & Safety" },
    { id: "iso-45003", title: "ISO 45003", description: "Psychological Health & Safety" },
    { id: "iso-39001", title: "ISO 39001", description: "Road Traffic Safety" },

    // Anti-Fraud / Risk / Integrity
    { id: "iso-37001", title: "ISO 37001", description: "Anti-Bribery" },
    { id: "iso-31000", title: "ISO 31000", description: "Risk Management" },
    { id: "iso-22316", title: "ISO 22316", description: "Organizational Resilience" },

    // Food / Agriculture / Animal Welfare
    { id: "iso-22000", title: "ISO 22000", description: "Food Safety" },
    { id: "fssc-22000", title: "FSSC 22000", description: "Food Safety System Certification" },
    { id: "haccp", title: "HACCP", description: "Hazard Analysis & Critical Control Points" },
    { id: "iso-17025", title: "ISO 17025", description: "Testing & Calibration Labs" },

    // Energy / Emissions / Carbon / Climate
    { id: "iso-50001", title: "ISO 50001", description: "Energy Management" },
    { id: "iso-14064", title: "ISO 14064", description: "Carbon Footprint" },
    { id: "iso-14046", title: "ISO 14046", description: "Water Footprint" },
    { id: "carbon-neutral", title: "Carbon Neutral", description: "Net Zero Certifications" },

    // Sector-Specific / Niche
    { id: "iso-17025", title: "ISO 17025", description: "Testing Labs" },
    { id: "iso-15189", title: "ISO 15189", description: "Medical Laboratories" },
    { id: "iso-13485", title: "ISO 13485", description: "Medical Devices QMS" },
    { id: "iso-21001", title: "ISO 21001", description: "Educational Organisations" },
    { id: "iso-20121", title: "ISO 20121", description: "Event Sustainability" },
    { id: "iso-28000", title: "ISO 28000", description: "Supply Chain Security" },
    { id: "iso-39001", title: "ISO 39001", description: "Road Traffic Safety" },
    { id: "iso-21930", title: "ISO 21930", description: "Sustainability in Construction" },
  ];

  const handleLogout = async () => {
    try {
      await axios.get(`${API_BASE}/api/v1/user/logout`, { withCredentials: true });
      showToast("Logged out successfully", "success");
      setIsAuthenticated(false);
      setUser(null);
      navigate("/auth");
    } catch (err) {
      showToast(err.response?.data?.message || "Logout failed", "error");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const matchedStandard = isoStandards.find(standard =>
        standard.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        standard.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchedStandard) {
        navigate(`/${matchedStandard.id}`);
      } else {
        showToast("No results found. Try searching for ISO standards like 'ISO 9001'.", "info");
      }
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (standardId) => {
    navigate(`/${standardId}`);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filtered = isoStandards.filter(standard =>
        standard.title.toLowerCase().includes(value.toLowerCase()) ||
        standard.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  // Toast system
  const [toasts, setToasts] = useState([]);
  const showToast = (message, type = "info") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000);
  };
  const removeToast = (id) => setToasts(prev => prev.filter(toast => toast.id !== id));

  useEffect(() => {
    if (isAuthenticated) showToast("Welcome back! You are now logged in.", "success");
  }, []);

  return (
    <div>
      {/* Toast notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`custom-toast ${toast.type}`}>
            {toast.type === "success" && <FaCheckCircle className="toast-icon" />}
            {toast.type === "error" && <FaExclamationCircle className="toast-icon" />}
            {toast.type === "info" && <FaInfoCircle className="toast-icon" />}
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="toast-close">&times;</button>
          </div>
        ))}
      </div>

      {/* Topbar */}
      <div className="certi-navbar__topbar">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="certi-navbar__topbar-left">
            <FaEnvelope className="certi-navbar__icon" /> info@certigence.co.uk
            <FaMapMarkerAlt className="certi-navbar__icon ms-3" /> 8902 London, 8950018 US.
          </div>
          <div className="certi-navbar__topbar-right d-flex align-items-center">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <div className="certi-navbar__auth ms-3">
              {isAuthenticated ? (
                <span onClick={handleLogout}><FaSignOutAlt className="me-2" /> Logout</span>
              ) : (
                <span onClick={() => navigate("/auth")}><FaUser className="me-2" /> Login</span>
              )}
            </div>
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

              {/* ✅ Full Services Dropdown */}
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Header>Quality / Operations</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-9001">ISO 9001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-10002">ISO 10002</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-13485">ISO 13485</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-22000">ISO 22000</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-22301">ISO 22301</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-28000">ISO 28000</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Environment / Sustainability</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-14001">ISO 14001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-50001">ISO 50001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-14064">ISO 14064</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-45001">ISO 45001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-20121">ISO 20121</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-26000">ISO 26000</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Information / Cybersecurity</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-27001">ISO/IEC 27001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-27017">ISO/IEC 27017</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-27018">ISO/IEC 27018</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-27701">ISO/IEC 27701</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-20000">ISO/IEC 20000</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Health & Safety</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-45001">ISO 45001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-45003">ISO 45003</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-39001">ISO 39001</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Anti-Fraud / Risk</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-37001">ISO 37001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-31000">ISO 31000</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-22316">ISO 22316</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Food / Agriculture</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-22000">ISO 22000</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fssc-22000">FSSC 22000</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/haccp">HACCP</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-17025">ISO 17025</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Energy / Emissions</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-50001">ISO 50001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-14064">ISO 14064</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-14046">ISO 14046</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/carbon-neutral">Carbon Neutral</NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Header>Sector-Specific / Niche</NavDropdown.Header>
                <NavDropdown.Item as={Link} to="/iso-17025">ISO 17025</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-15189">ISO 15189</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-13485">ISO 13485</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-21001">ISO 21001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-20121">ISO 20121</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-28000">ISO 28000</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-39001">ISO 39001</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iso-21930">ISO 21930</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/authorisations">Authorisations</Nav.Link>
              <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

            {/* Search */}
            <div className="certi-navbar__search-container">
              <form className="certi-navbar__search d-flex" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search ISO standards..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                />
                <button type="submit"><FaSearch /></button>
              </form>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="search-suggestions">
                  {filteredSuggestions.map(standard => (
                    <div
                      key={standard.id}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(standard.id)}
                    >
                      <div className="suggestion-title">{standard.title}</div>
                      <div className="suggestion-desc">{standard.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="certi-navbar__quote" onClick={() => navigate("/contact")}>
              Get a Quote →
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
