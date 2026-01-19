import React from "react";
import { Link } from "react-router-dom";
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
        <div className="container">
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
              <li className="nav-item">
                <a className={`nav-link ${linkClassName}`} href="/services/">
                  Services
                </a>
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
