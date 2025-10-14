import React, { useEffect,  } from "react";
import "../../../assets/components-css/webecom.css";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import im1 from "../../../assets/images/ecomerceim.png"
import { useLocation } from "react-router-dom";
import { Estore } from "./New";
import { Helmet } from "react-helmet";



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
    href="https://www.bytechsol.com/services/E-Commerce-solutions"
  />
</Helmet>

    {/* 1st Section */}
        <section
  className="dg-products-section py-5"
  style={{ backgroundColor: "#1C3134" }}
>
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left content */}
      <div className="col-lg-7">
        <div className="dg-products-content text-start">
          <h1 className="dg-products-heading"data-aos="fade-down">
            Next-Level E-Commerce Solutions for Your Digital Store
          </h1>
          <p className="dg-products-description"data-aos="fade-up">
            Our e-commerce solutions assist companies in creating scalable,
            secure, and easy-to-use online stores that drive sales. We design
            custom websites, integrate payment gateways, and develop advanced
            shopping carts to expand your online store and boost revenue.
          </p>
          <div className="dg-products-buttons"data-aos="fade-left">
            <a href="#contact" className="dg-button dg-button-primary">
              Start your website project today <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right image */}
     <div className="col-lg-5 text-center d-none d-lg-block" style={{ width: "30%", marginLeft: "80px" }}>
  <img src={im1} alt="Brand Branding" className="img-fluid" data-aos="fade-left"/>
</div>

    </div>
  </div>
</section>

      <Estore/>
   

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
              <Testimonial/>
              <FaqSection/>
              <NewCon />
    </>
  );
};

export default Webecom;