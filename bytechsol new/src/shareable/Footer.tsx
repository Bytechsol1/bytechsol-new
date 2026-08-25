import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/lg.svg";
import LogoText from "../assets/images/lg-text.svg";
import "flag-icons/css/flag-icons.min.css";
import CursorColorSection from "../components/CustomCursor/CursorColorSection";

const Footer: React.FC = () => {
  // Smoothly scroll to top whenever the route (pathname) changes
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <CursorColorSection color="#a3e635" className="footer-section pt-5 pb-4">
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

            <Link className="deck-button" to="/contact/">
              Contact Us <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
          <div className="col-md-1 d-none d-xl-block"></div>
          {/* Services */}
          <div className="col-6 col-md-2">
            <Link to="/services/" className="service-link"><h6 className="footer-heading">Services</h6></Link>
            <ul className="footer-links">
              <li>
                <Link to="/services/web-app/">Web App</Link>
              </li>
              <li>
                <Link to="/services/seo-service/">SEO Service</Link>
              </li>
              <li>
                <Link to="/services/brand-building/">Brand Building</Link>
              </li>
              <li>
                <Link to="/services/erp-service/">ERP Service</Link>
              </li>
              <li>
                <Link to="/services/website-design-and-development/">Website Design & Development</Link>
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="col-6 col-md-2">
            <ul className="footer-links mt-md-4 pt-md-2">
              <li>
                <Link to="/services/e-commerce-solutions/">E-Commerce Solutions</Link>
              </li>
              <li>
                <Link to="/services/odoo-services/">Odoo Services</Link>
              </li>
              <li>
                <Link to="/services/ai-ml/">AI / ML</Link>
              </li>
              <li>
                <Link to="/services/custom-web/">Custom Web</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
              <li>
                <Link to="/careers/">Career</Link>
              </li>
              <li>
                <Link to="/contact/">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Social</h6>
            <ul className="footer-links">
              <li>
                <Link
                  to="https://www.linkedin.com/company/bytechsol-llc"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/bytechsol1/" target="_blank">
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=100092258931848"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="https://x.com/BytechSol" target="_blank">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Removed Legal Column */}
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom row pt-4 pb-3 align-items-center">
          <div className="col-12 col-md-4 d-none d-md-block"></div>
          <div className="col-12 col-md-4 text-center">
            <small className="text" style={{ color: "#aaa" }}>
              © {new Date().getFullYear()} BytechSol LLC
            </small>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-4 mt-3 mt-md-0">
            <Link to="/privacy-policy/" style={{ color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-condition/" style={{ color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </CursorColorSection>
  );
};

export default Footer;
