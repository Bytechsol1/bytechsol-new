import React from "react";
import logo from "../assets/images/lg.svg";
import arrowIcon from "../assets/images/arrow down.png";
import trustBadges from "../assets/images/btn arrow icon.png";
import LogoText from "../assets/images/lg-text.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          {/* 1️⃣ Left Column: Logo + Description */}
          <div className="col-md-3">
            <img src={logo} alt="Bytechsol Logo" className="footer-logo mb-3" />
            <img src={LogoText} alt="Bytechsol Text" className="footer-logo mb-3" />
            <p className="footer-description">
              Wavespace is a global UI/UX design agency that boosts brand value with
              user-friendly, effective designs for web, mobile, and SaaS platforms.
            </p>
                    <a href="#" className="deck-button">
                    Company Deck <span className="circle-icon"><img src={arrowIcon} alt="↓" style={{height: "20px"}}/></span>
                    </a>

          </div>

          {/* Spacer Column to create gap */}
          <div className="col-md-1 d-none d-md-block"></div>

          {/* 2️⃣ Services */}
          <div className="col-md-2">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li>UI UX Design</li>
              <li>Web Design</li>
              <li>Product Design</li>
              <li>SaaS Design</li>
              <li>Branding</li>
              <li>UX Audit</li>
            </ul>
          </div>

          {/* 3️⃣ Additional Services */}
          <div className="col-md-2">
            <ul className="footer-links mt-md-4 pt-md-2">
              <li>Mobile App</li>
              <li>Design System</li>
              <li>Webflow</li>
              <li>Build Product (MVP)</li>
              <li>Conversion Rate.. (CRO)</li>
            </ul>
          </div>

          {/* 4️⃣ Case Studies */}
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

          {/* 5️⃣ Contact */}
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

        {/* 📎 Bottom Row */}
{/* 📎 Top of Bottom Footer (Above line) */}
<div className="footer-connect d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 mt-5">
  <div className="social-links d-flex gap-3 mb-3 mb-md-0">
    <a href="#">Instagram</a>
    <a href="#">Facebook</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
  </div>

  <div className="footer-cta text-md-end text-center">
    <span className="footer-cta-text">Let’s work together</span><br />
    <a href="#" className="call-button">
      Call bytechsol <span className="circle-icon">
        <img src={trustBadges} alt="→" />
      </span>
    </a>
  </div>
</div>

{/* Divider */}
<hr className="footer-divider" />

{/* 📎 Bottom Footer (Below line) */}
<div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center pt-9">
  <small className="text" style={{color: "#aaa"}}>© 2025 bytechsol LLC</small>
  <div className="text-center legal-text my-2 my-md-0">
    <span className="text" style={{color: "#aaa"}}>bytechsol is a limited liability company based in US</span>
  </div>
  <img src={trustBadges} alt="Trust Badges" className="trust-badges" />
</div>

      </div>
    </footer>
  );
};

export default Footer;
