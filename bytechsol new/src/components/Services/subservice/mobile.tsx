import React, { useState } from "react";
import Testimonial from "../../../shareable/testimonial";
import lig from "../../../assets/images/light.png";
import "../../../assets/components-css/mobile.css";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import TrustedBySection from "../../../shareable/trust500";
import mb from "../../../assets/images/mb1.png"
import { FiChevronDown } from "react-icons/fi";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import ui from "../../../assets/images/mbui.jpg"




const accordionItemsdev = [
  { title: "Build Product (MVP)", description: "We create user-centric websites..." },
  { title: "Webflow", description: "SaaS platforms built to scale..." },
  { title: "Conversion Rate Optimization Services", description: "End-to-end product UI/UX design..." },
  { title: "Shopify Development", description: "From landing pages to full sites..." },
  { title: "A/B Testing Development and QA", description: "Professional B2B interfaces..." },
  { title: "WordPress Development", description: "High-converting landing pages..." },
  { title: "AI Based Application Development", description: "Beautiful stores with seamless UX..." },
  { title: "Web App Development", description: "Agile design systems for startups..." },
  { title: "Mobile App Development", description: "Agile design systems for startups..." },
];

const accordionItemsUI = [
  { title: "UI UX Design", description: "We create user-centric websites..." },
  { title: "UX Audit", description: "SaaS platforms built to scale..." },
  { title: "Design System", description: "End-to-end product UI/UX design..." },
  { title: "UI UX Consulting", description: "From landing pages to full sites..." },
  { title: "UX Research", description: "Professional B2B interfaces..." },
  { title: "Usability Testing", description: "High-converting landing pages..." },
  { title: "Wireframe & Prototyping", description: "Beautiful stores with seamless UX..." },
];

const industryData = [
  {
    title: "Finance & Fintech",
    description:
      "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image: fin
  },
  {
    title: "E-Commerce & DTC",
    description:
      "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image: ec
  },
  {
    title: "SaaS & B2B Platforms",
    description:
      "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image: pl
  },
  {
    title: "Web3, AI & Emerging Tech",
    description:
      "Complex tech doesn’t have to feel complex. We simplify the experience so users understand, explore, and adopt with confidence.",
    image: we
  },
  {
    title: "Edtech & Healthtech",
    description:
      "Our platforms allow patients, students, and administrators to use them at any time, from any device.",
    image: ed
  },
  {
    title: "Hospitality & Legal Services",
    description:
      "Our approach to design lets users focus on their activities, so services are easy and dependable to use.",
    image: sv
  },
];


const Mobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* 1st Section */}
      <section
        className="dg-products-section"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className="dg-products-content">
          <h1 className="dg-products-heading">
            Mobile App UI UX <br /> design services
          </h1>
          <p className="dg-products-description">
            You’re not just building an app, you’re shaping how people live, <br />
            work, and connect. At Wavespace, we design mobile app that <br />
            feel intuitive from the first tap, convert faster, and keep users <br />
            coming back for more.
          </p>
          <div className="dg-products-buttons">
            <a href="#contact" className="dg-button dg-button-primary">
              Consult an expert
            </a>
            <a href="#portfolio" className="dg-button dg-button-outline">
              See our works
            </a>
          </div>
        </div>
        <div className="dg-products-image">
          <img src={lig} alt="UI/UX Illustration" />
        </div>
      </section>

      <TrustedBySection />

      {/* 2nd section --------------*/}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={mb}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1">Mobile app design that moves metrics</h2>
            <p className="webdesign-desc1">
             How your app works is an equally important part of the design as how it looks. Every time someone uses the app, every interaction with the screen can shape their actions. For this reason, our team pays close attention to simplicity, ease of use and attracting conversions. We contribute to boosting product growth by enhancing the key metrics.
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemsUI.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">
                      {item.title}
                    </span>
                    <FiChevronDown
                      className={`webdesign-icon1 ${
                        activeIndex === index ? "rotated" : ""
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3rd section ------------- */}
      
    <section className="industry-section">
  <div className="industry-header">
    <h2 className="industry-title">Industry expertise across globally</h2>
    <a href="#contact" className="industry-button">
      Consult an expert <span>&rarr;</span>
    </a>
  </div>

  <div className="industry-flex-grid">
    {industryData.map((item, index) => (
      <div
        key={index}
        className={`industry-flex-card card-${index}`}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="industry-masonry-overlay">
          <h3 className="industry-card-title">{item.title}</h3>
          <p className="industry-card-desc">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

         {/* 4th section---------- */}
         <section className="webdesign-section1 container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
          <img
            src={ui}
            alt="Web design preview"
            className="webdesign-img1 img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading1">Design & Development</h2>
          <p className="webdesign-desc1">
            Skip the handoff headaches. We ensure that our digital products are visually appealing and are built to meet growing demand. One expert team, one process, zero delays.
          </p>

          <div className="webdesign-accordion1 mt-4">
            {accordionItemsdev.map((item, index) => (
              <div
                className="webdesign-accordion-item1"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="webdesign-accordion-header1">
                  <span className="webdesign-accordion-index1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="webdesign-accordion-title1">{item.title}</span>
                  <FiChevronDown
                    className={`webdesign-icon1 ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="webdesign-accordion-desc1">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <Testimonial />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Mobile;