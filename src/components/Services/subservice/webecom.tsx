import React, { useEffect, } from "react";
import "../../../assets/components-css/Services.css";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import im1 from "../../../assets/images/ecom-3d-iso.png"
import { useLocation } from "react-router-dom";
import { Estore } from "./New";
import { Helmet } from "react-helmet";
import { ecomFaqs } from "../../../shareable/faqData";



const Webecom: React.FC = () => {


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>E-Commerce Solutions | BytechSol</title>
        <meta
          name="description"
          content="Empower your online store with BytechSol’s secure, scalable, and conversion-focused eCommerce development solutions."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bytechsol.com/services/e-commerce-solutions/"
        />
      </Helmet>

      {/* 1st Section - Hero */}
      <section
        className="dg-products-section"
        style={{ background: "#0F0C29", color: "#fff" }}
      >
        <div className="dg-products-container">
          {/* Left content */}
          <div className="dg-products-content text-start">
            <h1 className="dg-products-heading" data-aos="fade-down">
              Next-Level E-Commerce Solutions for Your Digital Store
            </h1>
            <p className="dg-products-description" data-aos="fade-up">
              Our e-commerce solutions assist companies in creating scalable,
              secure, and easy-to-use online stores that drive sales. We design
              custom websites, integrate payment gateways, and develop advanced
              shopping carts to expand your online store and boost revenue.
            </p>
            <div className="dg-products-buttons" data-aos="fade-left">
              <a href="#contact" className="dg-button dg-button-primary">
                Start your website project today <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="dg-products-image" data-aos="fade-left">
            <img src={im1} alt="E-commerce 3D" className="floating-3d img-fluid" />
          </div>
        </div>
      </section>

      <Estore />


      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">
            Your Growth, Our Priority
          </h2>
          <div className="group7-columns">
            {[...Array(3)].map((_, idx) => (
              <div className="group7-column" key={idx}>
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">
                  {
                    [
                      "Focused on What Matters",
                      "A Team by Your Side",
                      "Quality You Can Rely On",
                    ][idx]
                  }
                </h3>
                <p className="group7-description">
                  {
                    [
                      "We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.",
                      "Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).",
                      "We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.",
                    ][idx]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />
      <FaqSection faqs={ecomFaqs} />
      <NewCon />
    </>
  );
};

export default Webecom;