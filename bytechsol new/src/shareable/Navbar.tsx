import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, BarChart, BrainCircuit, Monitor, PenTool, AppWindow, Search, Layers, ShoppingCart, Code } from "lucide-react";
import "../assets/components-css/Navbar.css";
import "../App.css";

export type NavbarProps = {
  logoIconSrc: string;
  logoTextSrc?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  variant?: "light" | "dark";
  navClassName?: string;
  linkClassName?: string;
  buttonClassName?: string;
  buttonSchemeClass?: string;
  sticky?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  logoIconSrc,
  logoTextSrc,
  backgroundColor,
  backgroundImage,
  variant = "light",
  navClassName = "",
  linkClassName = "text-dark",
  buttonClassName = "",
  buttonSchemeClass = "",
  sticky = true,
}) => {
  const backgroundStyle = backgroundImage
    ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }
    : backgroundColor
      ? { backgroundColor }
      : {};

  return (
    <header>
      <nav
        className={[
          "navbar",
          "navbar-expand-lg",
          variant === "light" ? "navbar-light" : "navbar-dark",
          "navbar-custom",
          sticky ? "sticky-top" : "",
          navClassName,
        ].join(" ")}
        style={backgroundStyle}
      >
        <div className="container-fluid px-md-5">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logoIconSrc}
              alt="logo-icon"
              className="logo-icon"
              data-aos="fade-right"
            />
            {logoTextSrc ? (
              <img
                src={logoTextSrc}
                alt="logo-text"
                className="logo-text ms-2"
                data-aos="fade-right"
              />
            ) : null}
          </Link>

          <nav className="navbar navbar-expand-lg navbar-light ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            data-aos="fade-down"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


              <li className="nav-item dropdown-parent">
                <div className={`nav-link-content ${linkClassName}`}>
                  <Link to="/services/" className={`text-decoration-none ${linkClassName}`}>Services</Link>
                  <ChevronDown className="dropdown-arrow" size={16} />
                </div>

                <div className="mega-menu">
                  {/* Column 1 */}
                  <div className="menu-column">
                    <div className="service-list">
                      <Link to="/services/website-design-and-development/" className="service-item">
                        <div className="service-icon-box">
                          <Monitor size={20} />
                        </div>
                        <div className="service-info">
                          <h4>Web Design & Dev</h4>
                        </div>
                      </Link>
                      <Link to="/services/web-app/" className="service-item">
                        <div className="service-icon-box">
                          <AppWindow size={20} />
                        </div>
                        <div className="service-info">
                          <h4>Web App Handeling</h4>
                        </div>
                      </Link>
                      <Link to="/services/custom-web/" className="service-item">
                        <div className="service-icon-box">
                          <Code size={20} />
                        </div>
                        <div className="service-info">
                          <h4>Custom Web Solutions</h4>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="menu-column">
                    <div className="service-list">
                      <Link to="/services/odoo-services/" className="service-item">
                        <div className="service-icon-box">
                          <BarChart size={20} />
                        </div>
                        <div className="service-info">
                          <h4>Odoo Services</h4>
                        </div>
                      </Link>
                      <Link to="/services/erp-service/" className="service-item">
                        <div className="service-icon-box">
                          <Layers size={20} />
                        </div>
                        <div className="service-info">
                          <h4>ERP Services</h4>
                        </div>
                      </Link>
                      <Link to="/services/e-commerce-solutions/" className="service-item">
                        <div className="service-icon-box">
                          <ShoppingCart size={20} />
                        </div>
                        <div className="service-info">
                          <h4>E-Commerce Solutions</h4>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="menu-column">
                    <div className="service-list">
                      <Link to="/services/ai-ml/" className="service-item">
                        <div className="service-icon-box">
                          <BrainCircuit size={20} />
                        </div>
                        <div className="service-info">
                          <h4>AI & ML Solutions</h4>
                        </div>
                      </Link>
                      <Link to="/services/seo-service/" className="service-item">
                        <div className="service-icon-box">
                          <Search size={20} />
                        </div>
                        <div className="service-info">
                          <h4>SEO Services</h4>
                        </div>
                      </Link>
                      <Link to="/services/brand-building/" className="service-item">
                        <div className="service-icon-box">
                          <PenTool size={20} />
                        </div>
                        <div className="service-info">
                          <h4>Brand Building</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${linkClassName}`} to="/about/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${linkClassName}`} to="/blog/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${linkClassName}`} to="/portfolio/">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${linkClassName}`} to="/careers/">
                  Careers
                </Link>
              </li>
            </ul>

            <Link
              className={`btn contact-btn ${buttonClassName} ${buttonSchemeClass}`}
              to="/contact/"
              data-aos="fade-left"
            >
              <span className="btn-label">
                Contact us <i className="bi bi-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
