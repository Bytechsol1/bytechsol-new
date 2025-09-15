import React from "react";
import "../../assets/components-css/About.css";
import co from "../../assets/images/comp.png";
import bk from "../../assets/images/blacky.png";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import ContactSection from "../../shareable/contact";
import TrustedBySection from "../../shareable/trust500";
import hm1 from "../../assets/images/homeimg1.png"

const accordionData = [
  {
    id: "1",
    title: " Built for Speed & Scale",
    content:
      "Whether it is a quick MVP release or an enterprise-level system, we design solutions at a startup pace that can scale along with your business.",
  },
  {
    id: "2",
    title: "Deep Tech Expertise, Zero Fluff",
    content:
      "Whether it's the development of AI/ML, SaaS platforms, or powerful ERP infrastructure, our skilled team comes up with solutions that address real-world business challenges.",
  },
  {
    id: "3",
    title: "Direct Access to Specialists",
    content:
      "No account managers or layers. You will be working alongside the lead developers, designers, and strategy partners who are in-depth with your product.",
  },
  {
    id: "4",
    title: "Smart Design, Real Results",
    content:
      "We combine beautiful interfaces and a smooth UX, so that every screen is user-friendly, conversion-friendly, and brand-supporting.",
  },
  {
    id: "5",
    title: "Flexible Partnership Models",
    content:
      "Need a full team, a tech extension, or one-off support? We provide a variety of engagement opportunities that fit your objectives and budget.",
  },
];

const About: React.FC = () => {
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
            <h1 className="head">
              We Don’t Just Build <span className="gradient">Software </span>{" "}
              <br />
              We Build What <span className="gradient">Matters</span>.
            </h1>
            <p className="text-black ">
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
        <p className="metrics-heading">
          Our Mission: Building{" "}
          <span className="gradient-text">Digital Solutions</span> <br />
          That Drive <span className="gradient-text">Growth</span>
        </p>

        <p className="metrics-para1">
          We are on a mission at Bytechsol to enable businesses by creating
          enhanced digital experiences on demand. All our pixels, all our lines
          of code, and all our strategies are designed to solve business
          problems in the real world and to drive growth.
        </p>

        <div className="metrics-grid ">
          <div className="card1 ">
            <p className="metric-number1">01/</p>
            <h2 className="metric-value1">
              Designing Impactful Digital Experiences
            </h2>
            <p className="metric-description1">
              We craft user-focused websites, UI/UX designs, and CMS platforms
              that are not just beautiful — they’re built to convert and engage.
            </p>
          </div>

          <div className="car2">
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

          <div className="cam3">
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

          <div className="css4">
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

          <div className="csm5">
            <p className="metric-number5">05/</p>
            <h2 className="metric-value5">Your Long-Term Tech Partner</h2>
            <p className="metric-description5">
              We’re not just vendors. We’re strategic partners committed to
              delivering full-cycle digital transformation — from idea to
              execution and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* 3th Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-content">
            <h1 className="vision-heading">
              From <span className="gradient">one vision </span>to becoming a
              global tech partner, we help businesses{" "}
              <span className="gradient">scale smarter</span>.
            </h1>

            <div className="vision-grid">
              <div className="vision-image">
                <img src={co} alt="Vision Preview" />
              </div>
              <div className="vision-text">
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
        <h1 className="fw-bold mt-5">
          We're not just another agency. We're your{" "}
          <span className="gradient-text">digital growth partner</span>.
        </h1>
      </section>
      {/* 4th Section */}
      <section className="why-bytechsol-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={bk}
                alt="Bytechsol Team"
                className="img-fluid custom-image"
              />
            </div>
            <div className="col-lg-6">
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

              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2
                      className="accordion-header"
                      id={`flush-heading-${index}`}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse-${index}`}
                      >
                        <span className="service-index2">0{index + 1}</span>
                        &nbsp;
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse-${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading-${index}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      {/* 5th Section */}
      <section className="belief-behind">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 mb-4">
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
            <div className="col-lg-6">
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
      <ContactSection />
    </>
  );
};

export default About;
