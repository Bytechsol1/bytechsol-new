import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/lg.svg";
import LogoText from "../assets/images/lg-text.svg";
import "flag-icons/css/flag-icons.min.css";

const Footer: React.FC = () => {
  // Smoothly scroll to top whenever the route (pathname) changes
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <footer className="footer-section pt-5 pb-4">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {/* Left Column: Logo + Description */}
          <div className="col-12 col-md-3">
            <Link to="/">
              <img
                src={logo}
                alt="Bytechsol Logo"
                className="footer-logo mb-3 mx-1"
              />
              <img
                src={LogoText}
                alt="Bytechsol Text"
                className="footer-logo"
              />
            </Link>
            <p className="footer-description">
              BytechSol is a full-service software agency offering web
              development, AI/ML solutions, ERP implementation, and digital
              marketing.
            </p>

            <Link className="deck-button" to="/contact">
              Contact Us <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
          <div className="col-md-1 d-none d-md-block"></div>
          {/* Services */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <Link to="/services/web-app">
                <li>Web App</li>
              </Link>
              <Link to="/services/seo-service">
                <li>SEO Service</li>
              </Link>
              <Link to="/services/brand-building">
                <li>Brand Building</li>
              </Link>
              <Link to="/services/ERP-service">
                <li>ERP Service</li>
              </Link>
              <Link to="/services/website-design-and-development">
                <li>Website Design & Development</li>
              </Link>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="col-6 col-md-2">
            <ul className="footer-links mt-md-4 pt-md-2">
              <Link to="/services/E-Commerce-solutions">
                <li>E-Commerce Solutions</li>
              </Link>
              <Link to="/services/odoo-services">
                <li>Odoo Services</li>
              </Link>
              <Link to="/services/Ai-Ml">
                <li>AI / ML</li>
              </Link>
              <Link to="/services/custom-web">
                <li>Custom Web</li>
              </Link>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/Blog">
                <li>Blog</li>
              </Link>
              <Link to="/Careers">
                <li>Career</li>
              </Link>
              <Link to="/Contact">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Social</h6>
            <ul className="footer-links">
              <Link
                to="https://www.linkedin.com/company/bytechsol-llc"
                target="_blank"
              >
                <li>LinkedIn</li>
              </Link>
              <Link to="https://www.instagram.com/bytechsol1/" target="_blank">
                <li>Instagram</li>
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100092258931848"
                target="_blank"
              >
                <li>Facebook</li>
              </Link>
              <Link to="https://x.com/BytechSol" target="_blank">
                <li>Twitter</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom d-flex justify-content-center align-items-center pt-4">
          <small className="text" style={{ color: "#aaa" }}>
            © 2025 BytechSol LLC
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
