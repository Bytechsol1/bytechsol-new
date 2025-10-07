import React, { useEffect, useState } from "react";
import Testimonial from "../../../shareable/testimonial";
import "../../../assets/components-css/development.css";
import cl from "../../../assets/images/cwimg.png";
import FaqSection from "../../../shareable/faq";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import NewCon from "../../../shareable/NewCon";
import { useLocation } from "react-router-dom";
import { Cmsdev } from "./New";



const CustomWeb: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
      {/* 1st Section */}
      <section
        className="dg-products-section py-5"
        style={{
          background: "#2B3990 ",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7">
              <div className="dg-products-content text-start">
                <h1 className="dg-products-heading"data-aos="fade-down">
                  Custom Web Solutions <br /> Tailored to Your Business
                </h1>
                <p className="dg-products-description"data-aos="fade-up">
                  Increase your brand with our custom web development solutions.
                  We create dynamic, SEO optimized websites — corporate sites,
                  e-commerce, and apps — blending design, usability, and
                  performance to draw traffic and convert.
                </p>
                <div className="dg-products-buttons"data-aos="fade-left">
                  <a href="#contact" className="dg-button dg-button-primary">
                    Start your website project today{" "}
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-lg-5 text-center">
              <div className="dg-products-image">
                <img src={cl} alt="UI/UX Illustration" className="img-fluid"data-aos="fade-left" />
              </div>
            </div>
          </div>
        </div>
      </section>
   
        <Cmsdev/>

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
      <FaqSection />
      <NewCon />
    </>
  );
};

export default CustomWeb;