import { useState } from "react";
import "../../assets/components-css/Services.css";
import lig from "../../assets/images/light.png";
// import opa from "../../assets/images/oppa.jpg";
// import lad from "../../assets/images/lade.png";
// import mm from "../../assets/images/mmo.png";
// import ne from "../../assets/images/neo.png";
// import mo from "../../assets/images/ux.jpg";
// import md from "../../assets/images/mobile.jpg"
// import we from "../../assets/images/web.png"
import br from "../../assets/images/brand.png"
import dv from "../../assets/images/develop.png"
import TrustedBySection from "../../shareable/trust500";
// import { ArrowUpRight } from "lucide-react";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import ContactSection from "../../shareable/contact";
import wb from "../../assets/images/web.png"; 
// import laptopImg from "../../assets/images/web.png"
import ux from "../../assets/images/ux.jpg"
import { FiChevronDown } from "react-icons/fi";
import startupIcon from "../../assets/images/rocket.png";
import productIcon from "../../assets/images/shop.png";
import founderIcon from "../../assets/images/mobile-card.png";
import fin from "../../assets/images/fintech.png"
import ec from "../../assets/images/ecom.png"
import pl from "../../assets/images/plat.png"
import we from "../../assets/images/web3.png"
import ed from "../../assets/images/edtech.png"
import sv from "../../assets/images/services.png"


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


const supportItems = [
  {
    icon: startupIcon,
    title: "For Startups",
    description:
      "We assist early-stage teams in turning their ideas into MVPs more quickly. Get actual user input, win over investors, and release your app stress-free.",
    bullets: ["Launch MVPs fast", "Validate with users", "Build investor decks"],
  },
  {
    icon: productIcon,
    title: "For Product Teams",
    description:
      "We become a part of your internal process, handling the main tasks for you. Rely on us for UX support, design systems, and an easy transition of your project.",
    bullets: ["Full-cycle UX/UI", "Design systems", "Cross-platform support"],
  },
  {
    icon: founderIcon,
    title: "For Founders",
    description:
      "Design that helps you reach your targets. We care about how things work, how they look, and how they help, using hard information, not guesswork.",
    bullets: ["Growth-focused UX", "Landing page design", "A/B testing assets"],
  },
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

const accordionItems = [
  { title: "Web Design", description: "We create user-centric websites..." },
  { title: "SAAS Design", description: "SaaS platforms built to scale..." },
  { title: "Product Design", description: "End-to-end product UI/UX design..." },
  { title: "Website Design", description: "From landing pages to full sites..." },
  { title: "B2B Website Design", description: "Professional B2B interfaces..." },
  { title: "Landing Page Design", description: "High-converting landing pages..." },
  { title: "Ecommerce Design", description: "Beautiful stores with seamless UX..." },
  { title: "Startup Web Design", description: "Agile design systems for startups..." },
];

const accordionItemsapp = [
  { title: "Mobile App Design", description: "We create user-centric websites..." },
  { title: "Design Systems", description: "SaaS platforms built to scale..." },
  { title: "Product Design", description: "End-to-end product UI/UX design..." },
  { title: "IOS App Design", description: "From landing pages to full sites..." },
  { title: "Android App Design", description: "Professional B2B interfaces..." },
  { title: "App  Redesign", description: "High-converting landing pages..." },
  { title: "UX design", description: "Beautiful stores with seamless UX..." },
  { title: "Usability Testing", description: "Agile design systems for startups..." },
];

const accordionItemsbrand = [
  { title: "Branding & Identity", description: "We create user-centric websites..." },
  { title: "Corporate Identity Design", description: "SaaS platforms built to scale..." },
  { title: "Brand Strategy", description: "End-to-end product UI/UX design..." },
  { title: "Motion Graphics design", description: "From landing pages to full sites..." },
  { title: "Graphics Design ", description: "Professional B2B interfaces..." },
  { title: "Startup Branding", description: "High-converting landing pages..." },
  { title: "Logo Design", description: "Beautiful stores with seamless UX..." },
];


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



const Services: React.FC = () => {

      const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
      const toggleAccordion = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
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

        {/* 1st section */}
  <section className="webdesign-section1 container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
          <img
            src={ux}
            alt="Web design preview"
            className="webdesign-img1 img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading1">UI/UX Design</h2>
          <p className="webdesign-desc1">
            Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.
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
    {/* // ......................................2nd */}
    <section className="webdesign-section container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading">Web Design</h2>
          <p className="webdesign-desc">
            You don’t just need a website, you need a sales machine. Our web
            design is user-friendly, fully responsive, and supports SEO. With
            each scroll, you can expect more clicks, longer time spent on your
            website, and more conversions.
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
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <FiChevronDown
                    className={`webdesign-icon ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="webdesign-accordion-desc">{item.description}</p>
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
            className="webdesign-img img-fluid"
          />
        </div>
      </div>
    </section>

{/* 3rd section------------------- */}
  <section className="webdesign-section1 container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
          <img
            src={ux}
            alt="Web design preview"
            className="webdesign-img1 img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading1">Mobile App  Design</h2>
          <p className="webdesign-desc1">
            Make your app feel effortless from the first tap. We produce a neat and functional app that leads users through each action, improving their confidence and daily usage.
          </p>

          <div className="webdesign-accordion1 mt-4">
            {accordionItemsapp.map((item, index) => (
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
   {/* 4th section----- */}
    <section className="webdesign-section container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading">Branding & Identity</h2>
          <p className="webdesign-desc">
            Turn first impressions into a lasting impact. We make sure your audience can instantly relate to your brand, wherever they find it. From logo to tone, all the details are carefully unified to help inspire trust and recognition.
          </p>

          <div className="webdesign-accordion mt-4">
            {accordionItemsbrand.map((item, index) => (
              <div
                className="webdesign-accordion-item"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="webdesign-accordion-header">
                  <span className="webdesign-accordion-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <FiChevronDown
                    className={`webdesign-icon ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="webdesign-accordion-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0">
          <img
            src={br}
            alt="Web design preview"
            className="webdesign-img img-fluid"
          />
        </div>
      </div>
    </section>

     {/* 5th section */}
  <section className="webdesign-section1 container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
          <img
            src={dv}
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

    {/* 6th section */}
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

    {/* 7th Section who we */}
    <section className="design-support-wrapper">
      <div className="container">
        <h2 className="design-support-heading">
          Who we design for and how <br /> we support them
        </h2>

        <div className="row gy-4">
          {supportItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="design-support-card">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="design-support-icon"
                />
                <h3 className="design-support-title">{item.title}</h3>
                <p className="design-support-description">{item.description}</p>
                <ul className="design-support-list">
                  {item.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <Testimonial />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Services;
