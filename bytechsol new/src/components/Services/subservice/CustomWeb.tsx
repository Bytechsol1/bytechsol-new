import React, { useEffect } from "react";
import Testimonial from "../../../shareable/testimonial";
import "../../../assets/components-css/Services.css";
import cl from "../../../assets/images/customwebnew.png";
import FaqSection from "../../../shareable/faq";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import NewCon from "../../../shareable/NewCon";
import { useLocation } from "react-router-dom";
import { Cmsdev } from "./New";
import { Helmet } from "react-helmet";
import { customwebFaqs } from "../../../shareable/faqData";




const CustomWeb: React.FC = () => {

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
        <title>Custom Web Development | BytechSol</title>
        <meta
          name="description"
          content="Build robust, scalable, and feature-rich web applications tailored to your unique business requirements with BytechSol’s development experts."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bytechsol.com/services/custom-web/"
        />
      </Helmet>

      {/* Hero */}
      <section className="dg-hero-section">
        <div className="dg-hero-left">
          <div className="dg-hero-title-wrap">
            <h1 className="dg-hero-heading" data-aos="fade-down">
              Custom Web Solutions Tailored to Your Business
            </h1>
          </div>
          <div className="dg-hero-body-wrap">
            <p className="dg-hero-desc" data-aos="fade-right">
              Increase your brand with our custom web development solutions.
              We create dynamic, SEO optimized websites — corporate sites,
              e-commerce, and apps — blending design, usability, and
              performance to draw traffic and convert.
            </p>
            <a href="#contact" className="dg-hero-cta" data-aos="fade-up">
              Start Your Website Project Today <span className="arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="dg-hero-right customweb-right" style={{ overflow: "visible" }}>
          <img 
            src={cl} 
            alt="Custom Web 3D" 
            style={{
              position: "absolute",
              width: "448px",
              height: "560px",
              top: "0px",
              left: "-1px",
              maxWidth: "none",
              zIndex: 10
            }} 
          />
        </div>
      </section>

      <Cmsdev />

      {/* 7th Section */}
      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">Your Growth, Our Priority</h2>
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
      <FaqSection faqs={customwebFaqs} />
      <NewCon />
    </>
  );
};

export default CustomWeb;