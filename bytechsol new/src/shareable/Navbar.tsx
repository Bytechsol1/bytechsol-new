import React from 'react';
import Logo from '../assets/images/logo.svg';
import LogoText from '../assets/images/Logotext.svg'
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-custom sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={Logo} alt="logo-icon" className="logo-icon" />
            <img src={LogoText} alt="logo-text" className="logo-text ms-2" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#case-studies">Case studies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
            </ul>
            <a className="btn btn-primary contact-btn" href="#contact">
              Contact us <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
