import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "../../../assets/components-css/ProductDesign.css";
import TrustedBySection from "../../../shareable/trust500";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import et from "../../../assets/images/ideat.png";
import lw from "../../../assets/images/lwork.png";
import sp from "../../../assets/images/simplicity.png";
import ma from "../../../assets/images/mobapps.png";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import al from "../../../assets/images/applap.png"
import cp from "../../../assets/images/cdlap.png"
import cs from "../../../assets/images/csol.png"



const accordionItemsdev = [
  { title: "Build Product (MVP)", description: "We create user-centric websites..." },
  { title: "Webflow", description: "SaaS platforms built to scale..." },
  { title: "Conversion Rate Optimization Services", description: "End-to-end product UI/UX design..." },
  { title: "Shopify Development", description: "From landing pages to full sites..." },
  { title: "A/B Testing Development and QA", description: "Professional B2B interfaces..." },
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


const accordionItemsUX = [
  { title: "Fast design that grows with your product", description: "We create user-centric websites..." },
  { title: "Easy-to-use experiences for real users", description: "SaaS platforms built to scale..." },
  { title: "More signups, upgrades, and use", description: "End-to-end product UI/UX design..." },
  { title: "We think beyond UI, we solve problems", description: "From landing pages to full sites..." },
  { title: "Everything is handed off, ready to build", description: "Professional B2B interfaces..." },
  { title: "Role-Based Access Control & User Permissions", description: "SaaS platforms built to scale..." },
  { title: "More signups, upgrades, and use", description: "End-to-end product UI/UX design..." },
  { title: "Scalable Backend APIs (REST / GraphQL)", description: "From landing pages to full sites..." },
  { title: "Integration with third-party services (e.g., payment, inventory, analytics)", description: "Professional B2B interfaces..." },
  { title: "QA Testing, UAT Support & Maintenance Plans", description: "Professional B2B interfaces..." },
];


const CustomSoftwareDev = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* 1st Section */}
      <section className="dg-products-section" style={{backgroundColor:"#000"}}>
        <div className="dg-products-content">
          <h1 className="dg-products-heading">
           Custom Software <br />Solutions
          </h1>
          <p className="dg-products-description">
            Build a product that’s not just usable, but unforgettable. We <br />help SaaS companies turn ideas into intuitive, scalable design <br /> systems that make adoption easier, faster, and far more <br /> valuable.
          </p>
          <div className="dg-products-buttons">
            <a href="#contact" className="dg-button dg-button-primary">Consult an expert</a>
            <a href="#portfolio" className="dg-button dg-button-outline">See our works</a>
          </div>
          <div className="dg-products-image" style={{height:"100px", width:"100%",marginTop:"120px"}}>
          <img src={cp} alt="UI/UX Illustration" />
        </div>
        </div>
      </section>

      <TrustedBySection />

      {/* Accordion Section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
             <h2 className="webdesign-heading1 " >Custom Software  <br />Solution</h2>
            <img
              src={cs}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"style={{height:"550px"}}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <p className="webdesign-desc1">
              Because simple, thoughtful design can make your product work better, faster, and feel easier, right from the start. We ensure that your product design makes it better and smoother for the entire user. Enhancing the usability of your product is a hallmark of our expertise. 
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemsUX.map((item, index) => (
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
                      className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
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

      {/* 4th section */}
      <section className="performance-section">
        {/* First Card */}
        <div className="card-row purple-bg">
          <div className="card-text">
            <h2>SaaS UX/UI Design</h2>
            <p>
              Develop user interfaces that look sensible, operate quickly, and are a breeze to navigate. People won’t have to wade through any manual to use your dashboards or settings. You get clarity, speed, and usability that keep users coming back.
            </p>
          </div>
          <div className="card-img">
            <img src={et} alt="70% Faster Loading Illustration" />
          </div>
        </div>

        {/* Second Card */}
        <div className="card-row white-bg">
          <div className="card-text">
            <h2>SaaS Landing Page Design</h2>
            <p>
              Create webpages that are ready for search engines and explain what your team is all about so visitors want to use your services. Designed to support your growth goals and drive real signups, not just traffic.
            </p>
          </div>
          <div className="card-img">
            <img src={lw} alt="CMS Platforms Screenshot" />
          </div>
        </div>

        {/* Third Card */}
        <div className="ecomsolutions-row white-bg">
          <div className="ecomsolutions-text">
            <h2>SaaS Responsive Web Development</h2>
            <p>
              We turn rough ideas into functional UX concepts. From onboarding to dashboards, we design smart, user-centered flows that support real-world use.
            </p>
          </div>
          <div className="ecomsolutions-img">
            <img src={sp} alt="E-Commerce Solutions Screenshot" />
          </div>
        </div>

        {/* Fourth Card */}
        <div className="clouddevops-section white-bg">
          <div className="clouddevops-content">
            <h2 className="clouddevops-heading">#FF531A</h2>
            <p className="clouddevops-description">
              Design a unique style that explains what your product is about and how your team should work together. You’ll get more done, quicker and in a properly scaled way, using design rules that can be reused.
            </p>
          </div>
          <div className="clouddevops-image-wrapper">
            <img src={ma} alt="Cloud and DevOps Integration Screenshot" className="clouddevops-image" />
          </div>
        </div>
      </section>

      <Testimonial />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default CustomSoftwareDev;
