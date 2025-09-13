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
import { toast } from "react-toastify";
import { Context } from "../main";
import { API_BASE } from "../utils/api";

// NOTE: import bootstrap CSS ONLY (no bootstrap JS)
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const NavbarComponent = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  // Define the ISO standards you have content for
  const isoStandards = [
    { id: "iso-9001", title: "ISO 9001", description: "Quality Management System" },
    { id: "iso-14001", title: "ISO 14001", description: "Environmental Management System" },
    { id: "iso-45001", title: "ISO 45001", description: "Occupational Health and Safety" },
    { id: "iso-13485", title: "ISO 13485", description: "Medical Devices Quality Management" },
    { id: "iso-27001", title: "ISO 27001", description: "Information Security Management" },
    { id: "iso-37001", title: "ISO 37001", description: "Anti-Bribery Management Systems" },
    { id: "iso-50001", title: "ISO 50001", description: "Energy Management System" },
    { id: "iso-22000", title: "ISO 22000", description: "Food Safety Management" }
  ];

  const handleLogout = async () => {
    try {
      await axios.get(`${API_BASE}/api/v1/user/logout`, {
        withCredentials: true,
      });
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
      // Check if the search query matches any ISO standard
      const matchedStandard = isoStandards.find(standard => 
        standard.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        standard.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (matchedStandard) {
        navigate(`/${matchedStandard.id}`);
      } else {
        showToast("No results found for your search. Try searching for ISO standards like 'ISO 9001' or 'Quality Management'.", "info");
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
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  // Toast notification system
  const [toasts, setToasts] = useState([]);
  
  const showToast = (message, type = "info") => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };
  
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  
  // For demo purposes - show a toast on component mount
  useEffect(() => {
    if (isAuthenticated) {
      showToast("Welcome back! You are now logged in.", "success");
    }
  }, []);

  return (
    <div>
      {/* Toast notifications container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`custom-toast ${toast.type}`}>
            {toast.type === "success" && <FaCheckCircle className="toast-icon" />}
            {toast.type === "error" && <FaExclamationCircle className="toast-icon" />}
            {toast.type === "info" && <FaInfoCircle className="toast-icon" />}
            <span>{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="toast-close">
              &times;
            </button>
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

            {/* ✅ Login/Logout only here */}
            <div className="certi-navbar__auth ms-3">
              {isAuthenticated ? (
                <span onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" /> Logout
                </span>
              ) : (
                <span onClick={() => navigate("/auth")}>
                  <FaUser className="me-2" /> Login
                </span>
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

              <Nav.Link as={Link} to="/authorisations">Authorisations</Nav.Link>
              <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>

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
