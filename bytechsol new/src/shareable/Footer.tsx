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
      <div className="container">
        <div className="row gy-4">
          {/* Left Column: Logo + Description */}
          <div className="col-md-3">
            <img src={logo} alt="Bytechsol Logo" className="footer-logo mb-3" />
            <img
              src={LogoText}
              alt="Bytechsol Text"
              className="footer-logo mb-3"
            />
            <p className="footer-description">
              Wavespace is a global UI/UX design agency that boosts brand value
              with user-friendly, effective designs for web, mobile, and SaaS
              platforms.
            </p>

            <Link className="deck-button" to="/contact">
              Contact Us <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>

          {/* Spacer Column */}
          <div className="col-md-1 d-none d-md-block"></div>

          {/* Services */}
          <div className="col-md-2">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <Link to="/WebApp">
                <li>Web App</li>
              </Link>
              <Link to="/seoservice">
                <li>SEO Service</li>
              </Link>

              <Link to="/BrandBuilding">
                <li>Brand Building</li>
              </Link>
              <Link to="/ERPservice">
                <li>ERP Service</li>
              </Link>
              <Link to="/website-design-and-development">
                <li>Website Design & Development</li>
              </Link>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="col-md-2">
            <ul className="footer-links mt-md-4 pt-md-2">
              <Link to="/ECommerceSolutions">
                <li>E-Commerce Solutions</li>
              </Link>
              <Link to="/Odoo-Services">
                <li>Odoo Services</li>
              </Link>
              <Link to="/Aiml">
                <li>AI / ML</li>
              </Link>
              <Link to="/CustomWeb">
                <li>CustomWeb</li>
              </Link>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="col-md-2">
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
              {/* <li className="view-all">View all work</li> */}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2">
            <h6 className="footer-heading">Contact</h6>
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
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center pt-9">
          <small className="text" style={{ color: "#aaa" }}>
            © 2025 Bytechsol LLC
          </small>
          <div className="text-center legal-text my-2 my-md-0">
            <span className="text" style={{ color: "#aaa" }}>
              Bytechsol is a limited liability company based in
              <span className="flag-wave mx-1 fi fi-us"></span>
              <span className="flag-wave fi fi-pk"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
