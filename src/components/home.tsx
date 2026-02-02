import React, { useState } from "react";
import AnimatedText from "../shareable/AnimatedText";
import { Target, Users, ShieldCheck } from "lucide-react";
// import am from "../assets/images/aiml-home.svg";
import "../assets/components-css/home.css";
import Clutch from "../assets/images/clutch.png";
import jen from "../assets/images/susie.jpg";
import kr from "../assets/images/cody.jpg";
import Top1 from "../assets/images/top1.png";
import Top2 from "../assets/images/top2.png";
import Top3 from "../assets/images/top3.png";
import hm1 from "../assets/images/home1img.png";
import Bottom1 from "../assets/images/bottom1.png";
import Bottom2 from "../assets/images/bottom2.png";
import Bottom3 from "../assets/images/bottom3.png";
import hm2 from "../assets/images/home2img.png";
// import Arrow from "../assets/images/arrow.svg";
// import AwardBg from "../assets/images/award-bg.jpg"; // Removed
// import bgImage from "../assets/images/bgimg.jpg";
import Testimonial from "../shareable/testimonial";
import FaqSection from "../shareable/faq";
// import wb2 from "../assets/images/web1img.jpg";
// import bd2 from "../assets/images/brandim.jpg";
// import o1 from "../assets/images/odoo3.png";
import bh from "../assets/images/behanceimg.png";
import tr from "../assets/images/trustimg.png";
import up from "../assets/images/upworkimg.png";
import ScrollCards from "./ScrollCards";
// import { Link } from "react-router-dom";
import NewCon from "../shareable/NewCon";
import { Helmet } from "react-helmet";
import { homePageFaqs } from "../shareable/faqData";
import StrategyModal from "../shareable/StrategyModal";
import MagneticDots from "../shareable/MagneticDots";

const awards = [
  {
    text: "Behance",
    description: "2x Interaction Design awards",
    img: bh,
    trans: "fade-up",
    link: "https://www.behance.net/bytechsol",
    color: "#000000", // Behance Black (User Request)
    imgClass: "img-white-bg"
  },
  {
    text: "Trust Pilot",
    description:
      "Trusted by global clients, BytechSol delivers award-winning digital solutions.",
    img: tr,
    trans: "fade-up",
    link: "https://www.trustpilot.com/review/bytechsol.com",
    color: "#00b67a", // Trustpilot Green
    imgClass: "img-white-bg"
  },
  {
    text: "Clutch",
    description: "Top B2B Service Provider and Development Agency",
    img: Clutch,
    trans: "fade-up",
    color: "#16313a", // Clutch Dark Blue
    imgClass: "img-white-bg"
  },
  {
    text: "Upwork",
    description: "Top Rate Plus Development Agency",
    img: up,
    trans: "fade-up",
    link: "https://www.upwork.com/freelancers/hazratb11?mp_source=share",
    color: "#14a800", // Upwork Green
    imgClass: "img-transparent"
  },
];

// const services = [
//   {
//     id: 1,
//     title: "Odoo",
//     image: o1,
//     path: "/services/odoo-services/",
//   },
//   { id: 2, title: "AI / ML", image: am, path: "/services/ai-ml/" },
//   {
//     id: 3,
//     title: "Web development",
//     image: wb2,
//     path: "/services/website-design-and-development/",
//   },
//   { id: 4, title: "Marketing", image: bd2, path: "/services/brand-building/" },
// ];

const topImages = [Top1, Top2, Top3, hm1];
const bottomImages = [Bottom1, Bottom2, Bottom3, hm2];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"strategy" | "quote">("strategy");

  const openModal = (type: "strategy" | "quote") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>BytechSol | Innovative Web & AI Solutions for Modern Businesses</title>
        <meta
          name="description"
          content="BytechSol builds powerful web, mobile, ERP, and AI-driven digital solutions to help startups and enterprises scale efficiently."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bytechsol.com/" />
      </Helmet>

      {/* Hero Section */}
      <main>
        <section className="hero-section" style={{ position: "relative" }}>
          <MagneticDots variant="logo" />
          <div className="container-fluid px-md-5" style={{ position: "relative", zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 data-aos="fade-right">
                  Global Software Agency <br />
                  & Digital Partner for <br />
                  <AnimatedText />
                </h1>
                <div
                  className="cta-buttons mt-4 d-flex gap-3 flex-wrap"
                  data-aos="fade-up"
                >
                  <button
                    onClick={() => openModal("strategy")}
                    className="btn btn-black custom-cta"
                    style={{ border: "none" }}
                  >
                    Book a strategy call{" "}
                    <i className="bi bi-arrow-up-right arrow-icon"></i>
                  </button>
                  <button
                    onClick={() => openModal("quote")}
                    className="btn btn-outline custom-cta d-none d-lg-inline-block"
                  >
                    Get a custom quote
                  </button>
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
                          src={kr}
                          alt="Dr. Cody Chalker, Ph.D"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Dr. Cody Chalker, Ph.D</strong>
                          <br />
                          CEO, Babylon LLC
                          <br />
                        </div>
                      </div>
                      <div
                        className="tooltip-wrapper"
                        style={{ left: "22px", zIndex: 1 }}
                      >
                        <img
                          src={jen}
                          alt="Susie Wang"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Susie Wang</strong>
                          <br />
                          COO and Founder, Purity Cosmetics
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

      {/* <section className="services-section py-5 mb-5"> */}
      {/* <div className="service-vertical ">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </div> */}

      {/* <div className="container">
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

              <img
                src={service.image}
                alt={service.title}
                className={`service-image ${activeIndex === index ? "show" : ""
                  }`}
                loading="lazy"
              />
            </div>
          ))}
        </div> */}
      {/* </section> */}



      {/* Scroll Cards */}
      <ScrollCards />

      {/* Growth Section */}
      <section className="group7-container">
        {/* <img className="group7-bg" src={bgImage} alt="Background" /> */}
        <div className="group7-content">
          <h2 className="group7-main-title" >
            Your Growth, Our Priority
          </h2>
          <div className="group7-columns">
            {[
              {
                title: "Focused on What Matters",
                desc: "We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.",
                Icon: Target,
              },
              {
                title: "A Team by Your Side",
                desc: "Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).",
                Icon: Users,
              },
              {
                title: "Quality You Can Rely On",
                desc: "We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.",
                Icon: ShieldCheck,
              },
            ].map((col, idx) => (
              <div className="group7-column" key={idx} data-aos="fade-up">
                <col.Icon className="group7-icon" size={48} color="#fff" strokeWidth={1.5} />
                <h3 className="group7-heading">{col.title}</h3>
                <p className="group7-description">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section
        className="awards-section"
        style={{ position: "relative" }} // Ensure relative positioning for absolute child
      >
        <MagneticDots />
        <div className="overlay1" style={{ position: "relative", zIndex: 1 }}>
          <div className="awards-heading-container">
            <div className="container text-center">
              <h2 className="awards-heading" data-aos="fade-up">
                Our Awards &
              </h2>
              <br />
              <h2 className="awards-heading2" data-aos="fade-up">
                Achievements
              </h2>
            </div>
          </div>

          {/* Unified Grid for all screens */}
          <div className="container">
            <div className="row justify-content-center">
              {awards.map((item, idx) => {
                const CardContent = (
                  <div
                    className="award-card text-start"
                    style={
                      {
                        "--hover-color": item.color || "#000",
                      } as React.CSSProperties
                    }
                  >
                    <img
                      src={item.img}
                      alt={`award-${idx}`}
                      className={`award-img img-fluid ${item.imgClass || ""}`}
                    />
                    <p className="award-text">{item.text}</p>
                    <p className="award-desc">{item.description}</p>
                  </div>
                );

                return (
                  <div
                    className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4 mb-lg-0"
                    key={idx}
                    data-aos={item.trans}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="award-card-wrapper"
                        style={{ textDecoration: "none", color: "inherit", display: 'block', width: '100%' }}
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <div className="award-card-wrapper" style={{ width: '100%' }}>
                        {CardContent}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Shared Sections */}
      <Testimonial />
      <FaqSection faqs={homePageFaqs} />

      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />

      <NewCon />
    </>
  );
};

export default Home;
