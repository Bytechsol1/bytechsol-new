import React from "react";
import { useState } from "react";
import "../../assets/components-css/About.css";
import co from "../../assets/images/comp.png";
import bk from "../../assets/images/blacky.png";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import NewCon from "../../shareable/NewCon";
import TrustedBySection from "../../shareable/trust500";
import hm1 from "../../assets/images/homeimg1.png"
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg"



const accordionItems = [
  {
    title: " Built for Speed & Scale",
    description: "Whether it is a quick MVP release or an enterprise-level system, we design solutions at a startup pace that can scale along with your business.",
  },
  {
    title: "Deep Tech Expertise, Zero Fluff",
    description: "Whether it's the development of AI/ML, SaaS platforms, or powerful ERP infrastructure, our skilled team comes up with solutions that address real-world business challenges.",
  },
  {
    title: "Direct Access to Specialists",
    description: "No account managers or layers. You will be working alongside the lead developers, designers, and strategy partners who are in-depth with your product.",
  },
  {
    title: "Smart Design, Real Results",
    description: "We combine beautiful interfaces and a smooth UX, so that every screen is user-friendly, conversion-friendly, and brand-supporting.",
  },
  {
    title: "Flexible Partnership Models",
    description: "Need a full team, a tech extension, or one-off support? We provide a variety of engagement opportunities that fit your objectives and budget.",
  },
];


const About: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
      {/* 1st Section */}
      <section
        className="Designed-section"
        style={{ backgroundColor: "#fff", backgroundImage: `url(${hm1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="overlay d-none d-md-block"></div>
          <div className="content">
            <h1 className="head"data-aos="fade-right">
              We Don’t Just Build <span className="gradient">Software </span>{" "}
              <br />
              We Build What <span className="gradient">Matters</span>.
            </h1>
            <p className="text-black"data-aos="fade-up">
              We make digital, heartfelt, and purposeful solutions at Bytechsol.
              Whether in small companies or large enterprises, we make
              businesses successful through intelligent, expandable, and
              well-designed technology. Driven by creativity, backed by
              strategy. We’re here to make your next big idea happen.
            </p>
          </div>
        </div>
      </section>

      <TrustedBySection />
      {/* 2rd Section */}
      <section className="metrics-section">
        <div className="container">
        <p className="metrics-heading"data-aos="fade-down">
          Our Mission: Building{" "}
          <span className="gradient-text">Digital Solutions</span> <br />
          That Drive <span className="gradient-text">Growth</span>
        </p>

        <p className="metrics-para1"data-aos="fade-up">
          We are on a mission at Bytechsol to enable businesses by creating
          enhanced digital experiences on demand. All our pixels, all our lines
          of code, and all our strategies are designed to solve business
          problems in the real world and to drive growth.
        </p>

        <div className="metrics-grid">
          <div className="card1 "data-aos="fade-down">
            <p className="metric-number1">01/</p>
            <h2 className="metric-value1">
              Designing Impactful Digital Experiences
            </h2>
            <p className="metric-description1">
              We craft user-focused websites, UI/UX designs, and CMS platforms
              that are not just beautiful — they’re built to convert and engage.
            </p>
          </div>

          <div className="car2"data-aos="fade-down">
            <p className="metric-number2">02/</p>
            <h2 className="metric-value2">
              Engineering Scalable Custom Solutions
            </h2>
            <p className="metric-description2">
              Whether it is a powerful piece of software or a complex web
              application, we create custom web products that grow with your
              business, effectively and safely.
            </p>
          </div>

          <div className="cam3"data-aos="fade-down">
            <p className="metric-number3">03/</p>
            <h2 className="metric-value3">
              Driving Brands with Strategy + Tech
            </h2>
            <p className="metric-description3">
              Our team blends brand strategy with digital tools — SEO, SMM, and
              eCommerce platforms like Shopify — to make your brand stand out
              and sell more.
            </p>
          </div>

          <div className="css4"data-aos="fade-up">
            <p className="metric-number4">04/</p>
            <h2 className="metric-value4">
              Leveraging AI, ERP, and Odoo to Automate Success
            </h2>
            <p className="metric-description4">
              We incorporate customization of AI/ML, ERP implementation, and
              Odoo systems to ensure entry-point smooth procedures, approved
              decision-making and productivity.
            </p>
          </div>

          <div className="csm5"data-aos="fade-up">
            <p className="metric-number5">05/</p>
            <h2 className="metric-value5">Your Long-Term Tech Partner</h2>
            <p className="metric-description5">
              We’re not just vendors. We’re strategic partners committed to
              delivering full-cycle digital transformation — from idea to
              execution and beyond.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* 3th Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-content">
            <h1 className="vision-heading"data-aos="fade-down">
              From <span className="gradient">one vision </span>to becoming a
              global tech partner, we help businesses{" "}
              <span className="gradient">scale smarter</span>.
            </h1>

            <div className="vision-grid">
              <div className="vision-image"data-aos="fade-right">
                <img src={co} alt="Vision Preview" />
              </div>
              <div className="vision-text"data-aos="fade-left">
                <p>
                  Bytechsol did not turn out to be the best software agency in
                  one day. Where it all began is a small team with huge
                  ambitions and a dedication to creating smarter digital
                  solutions and not simply prettier websites.
                </p>
                <p>
                  That side hustle eventually led to a complete digital
                  powerhouse. Whether it was working with startups to create
                  their initial MVPs or building enterprise systems at scale, we
                  have created custom web solutions, AI products, ERP solutions,
                  and even executed SEO to move the needle.
                </p>
                <p>
                  Bytechsol has served clients in 15+ countries today. Our
                  products touch thousands of users and drive productive
                  business in a hurry. Regardless of the project (web design,
                  software development, or machine learning integrations), we
                  develop as we did on day one: strategic, scalable, and
                  user-first.
                </p>
                <p>
                  But honestly? We still build like it’s day one, fast, honest,
                  human. Behind every screen is someone betting it all on an
                  idea.
                </p>
                <a href="#" className="vision-btn">
                  Shape your vision <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4th Section */}
     <section className="webdesign-section container-fluid py-5">
        <div className="container">
           <h1 className="fw-bold mt-5"data-aos="fade-down">
          We're not just another agency. We're your{" "}
          <span className="gradient-text">digital growth partner</span>.
        </h1>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6"data-aos="fade-right">
              <h2 className="mb-4 fw-bold fs-3 fs-md-2 fs-lg-1 text-truncate w-100">
                Website Maintenance & Support
              </h2>

              <h3 className="fw-bold fs-5 fs-md-4 text-truncate w-100">
                Your Tech Dream Team in Disguise
              </h3>

              <p className="mb-4 fs-6">
                Not your average agency. We embed into your mission, move at
                your speed, and solve problems like it’s our product on the
                line.
              </p>


            <div className="webdesign-accordion mt-4">
              {accordionItems.map((item, index) => (
                <div
                  className="webdesign-accordion-item"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header">
                    <span className="webdesign-accordion-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title">
                      {item.title}
                    </span>
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon ${activeIndex === index ? "rotated" : ""}`}
/>
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0">
            <img
              src={bk}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>
      <Testimonial />
      {/* 5th Section */}
      <section className="belief-behind">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 mb-4"data-aos="fade-right">
              <h1 className="belief-heading fw-bold">
                The Principles Powering Our Projects
              </h1>
              <p>
                From first brainstorm to final build, these values guide every
                decision.
              </p>
              <h1 className="fw-bold">
                <span className="gradient-text">Core Beliefs</span>
              </h1>
            </div>
            <div className="col-lg-6"data-aos="fade-left">
              <div className="belief-item">
                <h2>01 Empathy at the Core</h2>
                <p>
                  We listen first before creating plans or prototyping; we
                  listen to your story and your goals, and to users. All of our
                  custom software solutions start with empathetic knowledge of
                  what an actual human needs; they are not based on assumptions.
                </p>
              </div>

              <div className="belief-item">
                <h2>02 Simplicity that Speaks</h2>
                <p>
                  Complicated does not imply superior. We are user-centered
                  design thinkers who believe in design that is intuitive,
                  accessible, and elegant because the best of digital
                  experiences have an effortless feel to them.
                </p>
              </div>

              <div className="belief-item">
                <h2>03 Speed with Purpose</h2>
                <p>
                  We act swiftly-not rashly. Be it lean MVPs, web development at
                  scale, we will work with purpose, pivot when necessary, and
                  stay focused on driving your business success.
                </p>
              </div>

              <div className="belief-item">
                <h2>04 Designed to Deliver Results</h2>
                <p>
                  We do not make design awards, we make you win customers. Our
                  focus is to work in terms of impact: conversions, retention,
                  performance, and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
      <NewCon />
    </>
  );
};

export default About;
