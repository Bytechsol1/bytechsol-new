import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Testimonial from "../../../shareable/testimonial";
import lig from "../../../assets/images/light.png";
import "../../../assets/components-css/development.css";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import mb from "../../../assets/images/mb1.png";
import wf from "../../../assets/images/wfir1.png";
import wj from "../../../assets/images/wjourn2.png";
import wfu from "../../../assets/images/wfut3.png";
import wt from "../../../assets/images/wtrans4.png";
import ww from "../../../assets/images/wswy5.png";
import wh from "../../../assets/images/whear6.png";
import wb from "../../../assets/images/web.png";
import ld from "../../../assets/images/landesg.jpg";
import cr from "../../../assets/images/creatim.jpg";
import br from "../../../assets/images/braim.png";
import arrow from "../../../assets/images/arrow.svg"


const accordionItemsUI = [
  {
    title: "No more design guesswork",
    description:
      "Your customers must get your product at a glance. You can count on our unique User Interface / User experience development process that will lead to your page telling more about your value, the result of the natural navigation, and a captivating layout that will make people spend more time on your page and convert more quickly.",
  },
  {
    title: " Launch without delays",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Interfaces that speak your brand",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Mobile-first, responsive designs",
    description: "From landing pages to full sites...",
  },
  {
    title: "Tested for usability & performance",
    description: "Professional B2B interfaces...",
  },
];
const accordionItemscms = [
  {
    title: "No more complex content updates",
    description:
      "Say goodbye to complicated backends. Our custom-made CMS development will make sure that your pages, blogs, and media are easy to handle via a user-friendly dashboard with a few clicks.",
  },
  {
    title: "Launch without technical roadblocks",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Tailored to your business needs",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "SEO-friendly architecture",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Secure, scalable, and future-ready",
    description: "End-to-end product UI/UX design...",
  },
];

const accordionItemsmain = [
  {
    title: "Regular updates and performance checks",
    description:
      "We design conversion-optimized landing pages that contain strong CTAs, compelling designs, and well-optimized design features that would prompt the user to take an action- such as making a purchase, signing up, or filling out a form.",
  },
  {
    title: "Security monitoring and backups",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Bug fixes and troubleshooting",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Content updates and enhancements",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "24/7 technical support",
    description: "End-to-end product UI/UX design...",
  },
];
const accordionItemsresp = [
  {
    title: " Mobile-friendly redesign",
    description:
      "We make your site easy to look at and navigate on both phones and tablets, as well as desktops, and everyone will watch it without any problem.",
  },
  {
    title: " Modern UI/UX upgradesMobile-first and responsive layouts",
    description: "SaaS platforms built to scale...",
  },
  {
    title: " Performance and speed optimizatio04. SEO-friendly structure",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "SEO-friendly structure",
    description: "From landing pages to full sites...",
  },
  {
    title: "Conversion-focused enhancements",
    description: "Professional B2B interfaces...",
  },
];

const industryData = [
  {
    title: "We Listen First",
    description:
      "Before we talk tech, we talk to you. Your goals, your audience, your challenges — we want to hear it all.",
    image: wf,
    dataAos: "fade-right",
  },
  {
    title: "We Map The Journey",
    description:
      "We are not talking tech, we are talking to you. What you want to achieve, who you want to address, and what your issues are, we want to know it all.",
    image: wj,
    dataAos: "fade-down",
  },
  {
    title: "We build For The Future",
    description:
      "Fast. Secure. Scalable. Our tools are the right tools to ensure the solution grows according to your growth.",
    image: wfu,
    dataAos: "fade-left",
  },
  {
    title: "We Create Digital Transformation",
    description:
      "Taking your ideas and turning them into effective digital solutions is what we do best; bring together creativity and technology to achieve designs that are easy to understand, grow to scale, and are resilient enough to last.",
    image: wt,
    dataAos: "fade-right",
  },
  {
    title: "We Stay With You",
    description:
      "There is no goodbye on launch day. We stay because we want to keep things flowing, to keep it moving, and to keep you winning online.",
    image: ww,
    dataAos: "fade-up",
  },
  {
    title: "We Design With Heart",
    description:
      "Not only does it have to look good, but it has to be something that leaves people stopping, smiling, and staying.",
    image: wh,
    dataAos: "fade-left",
  },
];

const Development: React.FC = () => {
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
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7">
              <div className="dg-products-content text-start">
                <h1 className="dg-products-heading"data-aos="fade-down">
                  Website Design & <br /> Development
                </h1>
                <p className="dg-products-description"data-aos="fade-right">
                  Bytechsol is an organization that provides professional web
                  development and web design services optimized for search
                  engines, mobile-friendliness, and responsiveness. We design
                  e-commerce stores, business websites, and landing pages to
                  generate traffic, interest, and convert the viewers into loyal
                  customers.
                </p>
                <div className="dg-products-buttons"data-aos="fade-up">
                  <a href="#contact" className="dg-button dg-button-primary">
                    Start your website project today{" "}
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-lg-5 text-center">
              <div className="dg-products-image"data-aos="fade-left">
                <img src={lig} alt="UI/UX Illustration" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* 2nd section --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="ui-ux-design">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={mb}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">UI/UX Design</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              Our UI/UX design services enable brands to develop user-centered,
              aesthetically diverse, and results-driven digital experiences. We
              create custom interfaces, including design and functionality,
              together with your brand value, to make every experience feel
              seamless, interesting, and performance-driven.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
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
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
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
        </div>
      </section>
      {/* 3rd section----- */}
      <section className="webdesign-section container-fluid py-5" id="cms-design-development">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">CMS Design & Development</h2>
            <p className="webdesign-desc"data-aos="fade-down">
              We aim to support businesses and individuals with their websites
              so they can handle business easily and provide custom, scalable,
              and SEO-friendly content management. We design simple-to-use CMS
              structures that suit your requirements, allowing easy editing,
              publishing, and management of your material without the help of
              developers.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemscms.map((item, index) => (
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
              src={wb}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 4th section --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="landing-page-design">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={ld}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Landing Page Design</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              We offer landing page design services, where we work on highly
              converting pages that are visually appealing and mobile-friendly
              to make them attractive and compel action. We incorporate both UI/
              UX best practices and strong copy to get your landing page
              providing measurable outcomes.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemsmain.map((item, index) => (
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
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
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
        </div>
      </section>
      {/* 4th section----- */}
      <section className="webdesign-section container-fluid py-5" id="website-maintenance-support">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">Website Maintenance & Support</h2>
            <p className="webdesign-desc"data-aos="fade-down">
              Our maintenance and support services for our websites keep your
              site safe and well updated, and on a continual performance level.
              Whether it be about simple updates or emergency patches, we ensure
              that your online presence is well tended to, leaving you to attend
              to the development of your business.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemscms.map((item, index) => (
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
              src={cr}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>
      {/* 5th section --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="responsive-website-redesign">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={br}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Responsive Website Redesign</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              Our mobile-friendly and responsive website redesign solutions
              update long-out-of-date websites to sleek, mobile-friendly
              websites with a visual appeal. Our mission is to make your site
              perform at its best, with an extra focus on the user experience
              alongside their devices, increasing performance, functions, and
              web visibility.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemsresp.map((item, index) => (
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
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
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
        </div>
      </section>
      {/* 10th section */}
      <section className="industry-section">
        <div className="container">
        <div className="industry-header">
          <h2 className="industry-title"data-aos="fade-down">
            Turning Your Ideas Into Something Real
          </h2>
          <p className="par12"data-aos="fade-up">
            All great digital initiatives begin with a spark, a concept, a
            challenge, or perhaps a spark of a what-if thought. We are <br />{" "}
            not the traditional web designers that build websites or
            applications… we help you create your vision in a way that <br />
            feels natural to you and memorable to your users.
          </p>
        </div>
        </div>
        <div className="industry-flex-grid">
          {industryData.map((item, index) => (
            <div
              key={index}
              data-aos={item.dataAos}
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

      <Testimonial />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Development;
