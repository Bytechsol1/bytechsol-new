import React, { useState } from "react";
import AnimatedText from "../shareable/AnimatedText";
import am from "../assets/images/aimlimg.jpg";
import "../assets/components-css/home.css";
import Clutch from "../assets/images/clutch.png";
import Yasir from "../assets/images/yasir.jpg";
import Salik from "../assets/images/salik.png";
import Top1 from "../assets/images/top1.png";
import Top2 from "../assets/images/top2.png";
import Top3 from "../assets/images/top3.png";
import hm1 from "../assets/images/home1img.png";
import Bottom1 from "../assets/images/bottom1.png";
import Bottom2 from "../assets/images/bottom2.png";
import Bottom3 from "../assets/images/bottom3.png";
import hm2 from "../assets/images/home2img.png";
import Arrow from "../assets/images/arrow.svg";
import AwardBg from "../assets/images/award-bg.jpg";
import bgImage from "../assets/images/bgimg.jpg";
import icon from "../assets/images/tick.svg";
import Testimonial from "../shareable/testimonial";
import FaqSection from "../shareable/faq";
import wb2 from "../assets/images/web1img.jpg";
import bd2 from "../assets/images/brandim.jpg";
import o1 from "../assets/images/odoo3.png";
import bh from "../assets/images/behanceimg.png";
import tr from "../assets/images/trustimg.png";
import up from "../assets/images/upworkimg.png";

import ScrollCards from "./ScrollCards";
import { Link } from "react-router-dom";
import NewCon from "../shareable/NewCon";

const awards = [
  {
    text: "Behance",
    description: "2x Interaction Design awards",
    img: bh,
    trans: "fade-up",
  },
  {
    text: "Trust Pilot",
    description:
      "Trusted by global clients, BytechSol delivers award-winning digital solutions.",
    img: tr,
    trans: "fade-up",
  },
  {
    text: "Clutch",
    description: "Top B2B Service Provider and UX Design Agency",
    img: Clutch,
    trans: "fade-up",
  },
  {
    text: "Upwork",
    description: "Top Rated Design Agency",
    img: up,
    trans: "fade-up",
  },
];

const services = [
  {
    id: 1,
    title: "Web development",
    image: wb2,
    path: "/services/website-design-and-development",
  },
  { id: 2, title: "Marketing", image: bd2, path: "/services/brand-building" },
  {
    id: 3,
    title: "Odoo & Custom ERPs",
    image: o1,
    path: "/services/odoo-services",
  },
  { id: 4, title: "AI / ML", image: am, path: "/services/Ai-Ml" },
];

const topImages = [Top1, Top2, Top3, hm1];
const bottomImages = [Bottom1, Bottom2, Bottom3, hm2];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 data-aos="fade-right">
                  Global Software Agency & Digital Partner for <AnimatedText />
                </h1>
                <div
                  className="cta-buttons mt-4 d-flex gap-3 flex-wrap"
                  data-aos="fade-up"
                >
                  <a href="#strategy-call" className="btn btn-black custom-cta">
                    Book a strategy call{" "}
                    <i className="bi bi-arrow-up-right arrow-icon"></i>
                  </a>
                  <a
                    href="#custom-quote"
                    className="btn btn-outline custom-cta d-none d-lg-inline-block"
                  >
                    Get a custom quote
                  </a>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-left">
                <p>
                  We craft scalable, user-focused digital solutions for startups
                  and enterprises. From concept to code, we deliver results that
                  fuel growth.
                </p>
                <div className="founders-rating d-none d-md-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="founders-stack">
                      <div
                        className="tooltip-wrapper"
                        style={{ left: 0, zIndex: 2 }}
                      >
                        <img
                          src={Yasir}
                          alt="Yasir Irfan"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Yasir Irfan</strong>
                          <br />
                          Founder & CEO @BTS
                          <br />
                        </div>
                      </div>
                      <div
                        className="tooltip-wrapper"
                        style={{ left: "22px", zIndex: 1 }}
                      >
                        <img
                          src={Salik}
                          alt="Hazrat Bilal"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Hazrat Bilal</strong>
                          <br />
                          Co-Founder of BTS
                          <br />
                        </div>
                      </div>
                    </div>
                    <span className="ms-3" style={{ lineHeight: "15px" }}>
                      Trusted by forward-thinking founders and businesses
                      worldwide.
                    </span>
                  </div>
                  <img src={Clutch} alt="Clutch" className="clutch-logo" />
                  <div className="review-meta">
                    <span className="stars">★★★★★</span>
                    <span className="reviews">11 REVIEWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scrolling Images */}
      <section className="scrolling-images-section py-5">
        {/* First row - always visible */}
        <div className="scroll-row scroll-row-1">
          <div className="scroll-track">
            {[...topImages, ...topImages].map((img, index) => (
              <img
                key={`top-${index}`}
                src={img}
                alt={`Top image ${index}`}
                className="scroll-image"
              />
            ))}
          </div>
        </div>

        {/* Second row - hidden on mobile */}
        <div className="scroll-row scroll-row-2 mt-5 d-none d-md-block">
          <div className="scroll-track reverse">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <img
                key={`bottom-${index}`}
                src={img}
                alt={`Bottom image ${index}`}
                className="scroll-image"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="who-we-are-section py-5">
        <div className="container">
          <p className="subheading" data-aos="fade-down">
            (WHO WE ARE)
          </p>
          <p className="description" data-aos="fade-up">
            Bytechsol is a{" "}
            <span className="gradient-text">software agency</span> built for
            modern businesses. We specialize in web development, mobile apps,
            and custom software, designed to help companies thrive in a
            fast-paced digital world. At Bytechsol, we blend innovation with
            simplicity to deliver reliable, performance-driven products.
          </p>
        </div>
      </section>

      {/* Services */}
      {/* <section className="services-section py-5 mb-5">
      <div className="container">
        <p className="ser-subheading text-center text-md-start" data-aos="fade-down">(SERVICES)</p>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-row ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <span className="service-index" data-aos="fade-right">0{service.id}</span>
<Link to={service.path} className="service-link">
  <h2 className="service-title" data-aos="fade-up">{service.title}</h2>
</Link>
            <img src={Arrow} alt="Arrow" className="service-arrow-img"data-aos="fade-left" />

            <img
              src={service.image}
              alt={service.title}
              className={`service-image ${activeIndex === index ? "show" : ""}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section> */}
      <section className="services-section py-5 mb-5">
        <div className="service-vertical " >
          <span
          data-aos="fade-down"
  
          >
            S
          </span>
          <span
          data-aos="fade-down"

          >
            E
          </span>
          <span
                    data-aos="fade-down"

          >
            R
          </span>
          <span
                    data-aos="fade-down"

          >
            V
          </span>
          <span
                      data-aos="fade-down"

          >
            I
          </span>
          <span
                      data-aos="fade-down"

          >
            C
          </span>
          <span
          data-aos="fade-down"

          >
            E
          </span>
          <span
          data-aos="fade-down"

          >
            S
          </span>
        </div>

        <div className="container">
          <p
            className="ser-subheading text-center text-md-start"
            data-aos="fade-down"
          >
            (SERVICES)
          </p>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-row ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span className="service-index" data-aos="fade-right">
                0{service.id}
              </span>
              <Link to={service.path} className="service-link">
                <h2 className="service-title" data-aos="fade-right">
                  {service.title}
                </h2>
              </Link>
              <img
                src={Arrow}
                alt="Arrow"
                className="service-arrow-img"
                data-aos="fade-left"
              />

              {/* Image pinned at bottom */}
              <img
                src={service.image}
                alt={service.title}
                className={`service-image ${
                  activeIndex === index ? "show" : ""
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section
        className="awards-section"
        style={{ backgroundImage: `url(${AwardBg})` }}
      >
        <div className="overlay1">
          <div className="awards-heading-container">
            <div className="container text-center">
              <h2 className="awards-heading" data-aos="fade-right">
                Our Awards &
              </h2>
              <br />
              <h2 className="awards-heading2" data-aos="fade-left">
                Achievements
              </h2>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="container d-none d-lg-block">
            <div className="row justify-content-center">
              {awards.map((item, idx) => (
                <div
                  className="col-lg-3 d-flex justify-content-center"
                  key={idx}
                  data-aos={item.trans}
                >
                  <div className="award-card text-start">
                    <img
                      src={item.img}
                      alt={`award-${idx}`}
                      className="award-img img-fluid"
                    />
                    <p className="award-text">{item.text}</p>
                    <p className="award-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Scroll */}
          <div className="scrolling-images-section d-lg-none">
            <div className="slide-awd">
              <div className="awards-vertical-scroll">
                {[...awards, ...awards].map((item, idx) => (
                  <div className="award-card text-start mb-4" key={idx}>
                    <img
                      src={item.img}
                      alt={`award-${idx}`}
                      className="award-img img-fluid"
                    />
                    <p className="award-text">{item.text}</p>
                    <p className="award-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Cards */}
      <ScrollCards />

      {/* Growth Section */}
      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title" data-aos="fade-down">
            Your Growth, Our Priority
          </h2>
          <div className="group7-columns">
            {[
              {
                title: "Focused on What Matters",
                desc: "We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.",
              },
              {
                title: "A Team by Your Side",
                desc: "Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).",
              },
              {
                title: "Quality You Can Rely On",
                desc: "We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.",
              },
            ].map((col, idx) => (
              <div className="group7-column" key={idx} data-aos="fade-up">
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">{col.title}</h3>
                <p className="group7-description">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Sections */}
      <Testimonial />
      <FaqSection />

      <NewCon />
    </>
  );
};

export default Home;
