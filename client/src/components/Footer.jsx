import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-box container">
        <div className="row align-items-center">
          <div className="col-md-2 text-center">
            <img
              src="images/img-logo.png"
              alt="Newsletter"
              className="img-fluid rounded-circle back "
              width="80"
            />
          </div>
          <div className="col-md-4">
            <h5>Subscribe to Our Newsletter</h5>
            <p>Stay updated with the latest ISO insights & industry trends.</p>
          </div>
          <div className="col-md-6 d-flex">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-light ms-2">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="container mt-5">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              At <strong>Certigence</strong>, we empower businesses with globally
              recognized <strong>ISO certification</strong>.
              From <em>quality management</em> to <em>cybersecurity</em>, we help
              organizations achieve compliance, trust, and sustainable growth.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">ISO Certification</a></li>
              <li><a href="#">Compliance Audits</a></li>
              <li><a href="#">Training</a></li>
              <li><a href="#">Sustainability Solutions</a></li>
              <li><a href="#">Information Security</a></li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="col-md-3">
            <h5>Gallery</h5>
            <div className="gallery-grid">
              <img src="images/industry.jpeg" alt="gallery1" />
              <img src="images/industry1.jpeg" alt="gallery2" />
              <img src="images/safity.jpeg" alt="gallery3" />
              <img src="images/safity1.jpeg" alt="gallery4" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Certigence. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
