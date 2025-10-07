import React, { useContext, useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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

const ABOUT_OPTIONS = [
  { label: "About Us", value: "/aboutus" },
  { label: "Vision & Mission", value: "/vision-mission" },
  { label: "Impartiality Policy", value: "/impartiality-policy" },
  { label: "Quality Policy & Objectives", value: "/quality-policy" },
  { label: "Management System Process", value: "/management-process" },
];

const SERVICES_OPTIONS = [
  { label: "Quality / Operations", value: "heading-quality", disabled: true },
  { label: "ISO 9001", value: "/iso-9001" },
  { label: "ISO 10002", value: "/iso-10002" },
  { label: "ISO 13485", value: "/iso-13485" },
  { label: "ISO 22000", value: "/iso-22000" },
  { label: "ISO 22301", value: "/iso-22301" },
  { label: "ISO 28000", value: "/iso-28000" },
  { label: "Environment / Sustainability", value: "heading-environment", disabled: true },
  { label: "ISO 14001", value: "/iso-14001" },
  { label: "ISO 50001", value: "/iso-50001" },
  { label: "ISO 14064", value: "/iso-14064" },
  { label: "ISO 45001", value: "/iso-45001" },
  { label: "ISO 20121", value: "/iso-20121" },
  { label: "ISO 26000", value: "/iso-26000" },
  { label: "Information / Cybersecurity", value: "heading-info", disabled: true },
  { label: "ISO/IEC 27001", value: "/iso-27001" },
  { label: "ISO/IEC 27017", value: "/iso-27017" },
  { label: "ISO/IEC 27018", value: "/iso-27018" },
  { label: "ISO/IEC 27701", value: "/iso-27701" },
  { label: "ISO/IEC 20000", value: "/iso-20000" },
  { label: "Health & Safety", value: "heading-health", disabled: true },
  { label: "ISO 45001", value: "/iso-45001" },
  { label: "ISO 45003", value: "/iso-45003" },
  { label: "ISO 39001", value: "/iso-39001" },
  { label: "Anti-Fraud / Risk", value: "heading-risk", disabled: true },
  { label: "ISO 37001", value: "/iso-37001" },
  { label: "ISO 31000", value: "/iso-31000" },
  { label: "ISO 22316", value: "/iso-22316" },
  { label: "Food / Agriculture", value: "heading-food", disabled: true },
  { label: "ISO 22000", value: "/iso-22000" },
  { label: "FSSC 22000", value: "/fssc-22000" },
  { label: "HACCP", value: "/haccp" },
  { label: "ISO 17025", value: "/iso-17025" },
  { label: "Energy / Emissions", value: "heading-energy", disabled: true },
  { label: "ISO 50001", value: "/iso-50001" },
  { label: "ISO 14064", value: "/iso-14064" },
  { label: "ISO 14046", value: "/iso-14046" },
  { label: "Sector-Specific / Niche", value: "heading-sector", disabled: true },
  { label: "ISO 13485", value: "/iso-13485" },
  { label: "ISO 21001", value: "/iso-21001" },
  { label: "ISO 20121", value: "/iso-20121" },
  { label: "ISO 28000", value: "/iso-28000" },
  { label: "ISO 39001", value: "/iso-39001" },
  { label: "ISO 21930", value: "/iso-21930" },
];

const STATIC_SEARCH_ITEMS = [
  { label: "Home", value: "/", keywords: ["home", "landing", "main"] },
  { label: "Authorisations", value: "/authorisations", keywords: ["authorisations", "authorizations", "accreditation"] },
  { label: "Blog", value: "/Blog", keywords: ["blog", "news", "articles"] },
  { label: "FAQ", value: "/faq", keywords: ["faq", "questions", "help"] },
  { label: "Contact", value: "/contact", keywords: ["contact", "support", "help"] },
];

const ABOUT_SEARCH_ITEMS = ABOUT_OPTIONS.map((item) => ({
  ...item,
  keywords: ["about", item.label.toLowerCase()],
}));

const SERVICE_SEARCH_ITEMS = SERVICES_OPTIONS
  .filter((option) => !option.disabled)
  .map((option) => ({
    label: option.label,
    value: option.value,
    keywords: ["service", "iso", option.label.toLowerCase()],
  }));

const SEARCH_ITEMS = [
  ...STATIC_SEARCH_ITEMS,
  ...ABOUT_SEARCH_ITEMS,
  ...SERVICE_SEARCH_ITEMS,
];

const normalizeText = (value = "") => value.trim().toLowerCase();
const buildSearchTokens = (item) => [
  item.label,
  item.value,
  ...(item.keywords || []),
]
  .filter(Boolean)
  .join(" ")
  .toLowerCase();

const NavbarComponent = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [searchFeedback, setSearchFeedback] = useState("");
  const [aboutSelection, setAboutSelection] = useState("");
  const [servicesSelection, setServicesSelection] = useState("");
  const navigate = useNavigate();

  const handleNavSelectChange = (event, setSelection) => {
    const { value } = event.target;

    if (!value || value.startsWith("heading")) {
      setSelection("");
      return;
    }

    navigate(value);
    setSelection("");
  };

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

  const [toasts, setToasts] = useState([]);
  const showToast = (message, type = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000);
  };
  const removeToast = (id) => setToasts((prev) => prev.filter((toast) => toast.id !== id));

  useEffect(() => {
    if (isAuthenticated) {
      showToast("Welcome back! You are now logged in.", "success");
    }
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (!value.trim()) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setSearchFeedback("");
      return;
    }

    const normalized = normalizeText(value);
    const matches = SEARCH_ITEMS.filter((item) => buildSearchTokens(item).includes(normalized)).slice(0, 8);

    setFilteredSuggestions(matches);
    setShowSuggestions(matches.length > 0);
    setSearchFeedback("");
  };

  const handleInputFocus = () => {
    if (filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150);
  };

  const clearSearchState = () => {
    setSearchQuery("");
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSearchFeedback("");
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    clearSearchState();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const normalized = normalizeText(searchQuery);

    if (!normalized) {
      setSearchFeedback("Please enter a search term.");
      setShowSuggestions(false);
      return;
    }

    const match = SEARCH_ITEMS.find((item) => buildSearchTokens(item).includes(normalized));

    if (match) {
      handleSuggestionClick(match.value);
    } else {
      setSearchFeedback("No matching page found. Please try different keywords.");
      setShowSuggestions(false);
    }
  };

  return (
    <div>
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
            <a href="https://www.instagram.com/certi_gence/"><FaInstagram /></a>
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

      <Navbar expand="lg" className="certi-navbar__main">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="images/img-logo.png" alt="Certigence Logo" className="certi-navbar__logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* FIX: Use only ms-auto (margin-left auto) to push navigation to the right */}
            <Nav className="ms-auto align-items-center"> 
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              {/* ABOUT US SELECT */}
              <Nav.Item className="certi-navbar__select-wrapper">
                <select
                  className="certi-navbar__select nav-link"
                  value={aboutSelection}
                  onChange={(event) => handleNavSelectChange(event, setAboutSelection)}
                >
                  <option value="">About Us</option>
                  {ABOUT_OPTIONS.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </Nav.Item>

              {/* SERVICES SELECT */}
              <Nav.Item className="certi-navbar__select-wrapper">
                <select
                  className="certi-navbar__select nav-link"
                  value={servicesSelection}
                  onChange={(event) => handleNavSelectChange(event, setServicesSelection)}
                >
                  <option value="">Services</option>
                  {SERVICES_OPTIONS.map(({ label, value, disabled }, index) => (
                    <option key={`${value}-${index}`} value={value} disabled={disabled}>
                      {label}
                    </option>
                  ))}
                </select>
              </Nav.Item>

              <Nav.Link as={Link} to="/authorisations">
                Authorisations
              </Nav.Link>
              <Nav.Link as={Link} to="/Blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>

            {/* Search container and Quote button */}
            <div className="d-flex align-items-center ms-3">
              <div className="certi-navbar__search-container me-3"> 
                <form className="certi-navbar__search" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search ISO standards..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <button type="submit">
                    <FaSearch />
                  </button>
                </form>
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="search-suggestions">
                    {filteredSuggestions.map((item) => (
                      <div
                        key={`${item.value}-${item.label}`}
                        className="suggestion-item"
                        onMouseDown={() => handleSuggestionClick(item.value)}
                      >
                        <div className="suggestion-title">{item.label}</div>
                        <div className="suggestion-desc">
                          {item.value === "/"
                            ? "home"
                            : item.value.replace(/^\//, "").replace(/-/g, " ")}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!showSuggestions && searchFeedback && (
                  <div className="search-feedback">{searchFeedback}</div>
                )}
              </div>

              <button className="certi-navbar__quote" onClick={() => navigate("/contact")}>
                Get a Quote
              </button>
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;