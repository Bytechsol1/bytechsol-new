import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "../../../assets/components-css/ProductDesign.css";
import TrustedBySection from "../../../shareable/trust500";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import lig from "../../../assets/images/light.png";
import u1 from "../../../assets/images/uxphn.jpg";
import et from "../../../assets/images/ideat.png";
import lw from "../../../assets/images/lwork.png";
import sp from "../../../assets/images/simplicity.png";
import ma from "../../../assets/images/mobapps.png";
import lb from "../../../assets/images/label.png";
import kl from "../../../assets/images/kalu.png";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import bk from "../../../assets/images/blacky.png"



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
  { title: "Jumping Into UI Too Fast", description: "We create user-centric websites..." },
  { title: "Designing around features, not users", description: "SaaS platforms built to scale..." },
  { title: "Adding too much, too early", description: "End-to-end product UI/UX design..." },
  { title: "Overlooking onboarding design", description: "From landing pages to full sites..." },
  { title: "Handoff chaos to developers", description: "Professional B2B interfaces..." },
];

const ProductDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* 1st Section */}
      <section className="dg-products-section">
        <div className="dg-products-content">
          <h1 className="dg-products-heading">
            Digital product & <br /> UI UX design <br />
            services
          </h1>
          <p className="dg-products-description">
            Are you struggling to turn your ideas into something users love? <br />
            Wavespace designs digital products for the US, UK, Europe, and <br />
            Central Asia that are clean, fast, and ready to develop, built with <br />
            smart UX and clean UI.
          </p>
          <div className="dg-products-buttons">
            <a href="#contact" className="dg-button dg-button-primary">Get in Touch</a>
            <a href="#portfolio" className="dg-button dg-button-outline">View Portfolio</a>
          </div>
        </div>
        <div className="dg-products-image">
          <img src={lig} alt="UI/UX Illustration" />
        </div>
      </section>

      <TrustedBySection />

      {/* Accordion Section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={u1}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1">Common product design mistakes (how we fix)</h2>
            <p className="webdesign-desc1">
              No one sets out to design a product that feels confusing or cluttered. But without the right process, even the best ideas can fall short. Here’s what usually goes wrong, and how your product avoids it when the design is done right.
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

      {/* 3rd section */}
      <div className="productdesign-service-header">
        <h1 className="productdesign-service-title">
          What’s included in our product <br /> design services
        </h1>
        <a href="#contact" className="productdesign-service-btn">
          Build Your Product
        </a>
      </div>

      {/* 4th section */}
      <section className="performance-section">
        {/* First Card */}
        <div className="card-row purple-bg">
          <div className="card-text">
            <h2>70% Faster Loading</h2>
            <p>
              Speed isn’t a luxury—it’s the expectation. We optimize your website performance
              to load lightning-fast across all devices. From code to server to content, we
              fine-tune every layer so you never lose a customer to slow loading again.
            </p>
          </div>
          <div className="card-img">
            <img src={et} alt="70% Faster Loading Illustration" />
          </div>
        </div>

        {/* Second Card */}
        <div className="card-row white-bg">
          <div className="card-text">
            <h2>CMS Platforms</h2>
            <p>
              The right content system empowers your team and scales with your needs. Whether
              you prefer the flexibility of WordPress or the speed and control of headless CMS,
              we architect solutions that are secure, scalable, and built for growth.
            </p>
          </div>
          <div className="card-img">
            <img src={lw} alt="CMS Platforms Screenshot" />
          </div>
        </div>

        {/* Third Card */}
        <div className="ecomsolutions-row white-bg">
          <div className="ecomsolutions-text">
            <h2>E-Commerce Solutions</h2>
            <p>
              From idea to checkout, we craft eCommerce experiences that convert. Whether you're launching
              a niche store or scaling a product empire, we build secure, user-friendly platforms that drive
              sales, simplify management, and wow your customers.
            </p>
          </div>
          <div className="ecomsolutions-img">
            <img src={sp} alt="E-Commerce Solutions Screenshot" />
          </div>
        </div>

        {/* Fourth Card */}
        <div className="clouddevops-section white-bg">
          <div className="clouddevops-content">
            <h2 className="clouddevops-heading">Cloud & DevOps Integration</h2>
            <p className="clouddevops-description">
              Your backend should never slow you down. We integrate DevOps and cloud technologies to streamline deployments, boost uptime, and enable rapid scaling. From CI/CD pipelines to cloud-native architecture, we build resilient systems that move at your pace.
            </p>
          </div>
          <div className="clouddevops-image-wrapper">
            <img src={ma} alt="Cloud and DevOps Integration Screenshot" className="clouddevops-image" />
          </div>
        </div>

        {/* Fifth Card */}
        <div className="ecomsolutions-row white-bg" style={{backgroundColor:"#6E14CF", color:"#fff"}}>
          <div className="ecomsolutions-text">
            <h2>Design System</h2>
            <p>
              Consistency wins trust. We build scalable UI kits, component libraries, and design tokens that help you move faster and make every screen feel connected.
            </p>
          </div>
          <div className="ecomsolutions-img">
            <img src={lb} alt="E-Commerce Solutions Screenshot" />
          </div>
        </div>

        {/* Sixth Card */}
        <div className="ecomsolutions-row white-bg " style={{backgroundColor:"#000", color:"#fff"}}>
          <div className="ecomsolutions-text">
            <h2>UI/ UX Design</h2>
            <p>
              We design apps and platforms people love to use. Whether it’s onboarding, settings, or checkout, every click is planned, tested, and built to work.   
            </p>
          </div>
          <div className="ecomsolutions-img">
            <img src={kl} alt="E-Commerce Solutions Screenshot" />
          </div>
        </div>
      </section>
      {/* 5th section------------- */}
     <section className="industry-section">
  <div className="industry-header">
    <h2 className="industry-title">Our product design for every industry </h2>
    <a href="#contact" className="industry-button">
      Let’s Design A product <span>&rarr;</span>
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
    {/* 6th section------------- */}
    <section className="webdesign-section1 container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
          <img
            src={bk}
            alt="Web design preview"
            className="webdesign-img1 img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading1">The impact of great SaaS design on your growth</h2>
          <p className="webdesign-desc1">
            The success of your product is powered by good design which is usually hidden. A website is valuable when it’s attractive, works effectively, feels good and lets users find their next steps quickly. Great design in SaaS products keeps customers around, helps them get started and makes every action more comfortable to do.
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

export default ProductDesign;
