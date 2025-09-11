import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/lg.svg";
import arrowIcon from "../assets/images/arrow down.png";
import trustBadges from "../assets/images/btn arrow icon.png";
import LogoText from "../assets/images/lg-text.svg";

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
            <img src={LogoText} alt="Bytechsol Text" className="footer-logo mb-3" />
            <p className="footer-description">
              Wavespace is a global UI/UX design agency that boosts brand value with
              user-friendly, effective designs for web, mobile, and SaaS platforms.
            </p>
            <a href="#" className="deck-button">
              Company Deck{" "}
              <span className="circle-icon">
                <img src={arrowIcon} alt="↓" style={{ height: "20px" }} />
              </span>
            </a>
          </div>

          {/* Spacer Column */}
          <div className="col-md-1 d-none d-md-block"></div>

          {/* Services */}
          <div className="col-md-2">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
             <Link to="/WebApp"><li>Web App</li></Link>
               <Link to="/ECommerceSolutions"><li>E-Commerce Solutions</li></Link>
               <Link to="/BrandBuilding"><li>Brand Building</li></Link>
              <Link to="/ERPservice"><li>ERP Service</li></Link>
              
            </ul>
          </div>

          {/* Additional Services */}
          <div className="col-md-2">
            <ul className="footer-links mt-md-4 pt-md-2">
              <Link to="/website-design-and-development"><li>Website Design & Development</li></Link>
              <Link to="/seoservice"><li>SEO Service</li></Link> 
              <Link to="/Odoo-Services"><li>Odoo Services</li></Link>
              <Link to="/Aiml"><li>AI / ML</li></Link>
              <Link to="/CustomWeb"><li>CustomWeb</li></Link>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="col-md-2">
            <h6 className="footer-heading">Case studies</h6>
            <ul className="footer-links">
              <li>Open Hub</li>
              <li>Better AI</li>
              <li>Spacebook</li>
              <li>Kodezi</li>
              <li className="view-all">View all work</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2">
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-links">
              <li>Clutch</li>
              <li>Behance</li>
              <li>Dribbble</li>
              <li>Awwwards</li>
            </ul>
          </div>
        </div>

        {/* Top Row of Bottom Footer */}
        <div className="footer-connect d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 mt-5">
          <div className="social-links d-flex gap-3 mb-3 mb-md-0">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>

          <div className="footer-cta text-md-end text-center">
            <span className="footer-cta-text">Let’s work together</span>
            <br />
            <a href="#" className="call-button">
              Call bytechsol{" "}
              <span className="circle-icon">
                <img src={trustBadges} alt="→" />
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center pt-9">
          <small className="text" style={{ color: "#aaa" }}>
            © 2025 bytechsol LLC
          </small>
          <div className="text-center legal-text my-2 my-md-0">
            <span className="text" style={{ color: "#aaa" }}>
              bytechsol is a limited liability company based in US
            </span>
          </div>
          <img src={trustBadges} alt="Trust Badges" className="trust-badges" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
