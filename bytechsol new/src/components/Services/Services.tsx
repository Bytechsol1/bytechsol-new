import { useState } from "react";
import "../../assets/components-css/Services.css";
import lig from "../../assets/images/light.png";
import br from "../../assets/images/brand.png";
import TrustedBySection from "../../shareable/trust500";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import ContactSection from "../../shareable/contact";
import wb from "../../assets/images/web.png";
import ux from "../../assets/images/ux.jpg";
import startupIcon from "../../assets/images/rocket.png";
import productIcon from "../../assets/images/shop.png";
import founderIcon from "../../assets/images/mobile-card.png";
import wf from "../../assets/images/wfir1.png";
import wj from "../../assets/images/wjourn2.png";
import wfu from "../../assets/images/wfut3.png";
import wt from "../../assets/images/wtrans4.png";
import ww from "../../assets/images/wswy5.png";
import wh from "../../assets/images/whear6.png";
import wd from "../../assets/images/aml.jpg";
import co from "../../assets/images/comsol.png";
import bi from "../../assets/images/braim.png";
import oi from "../../assets/images/odoi.jpg";
import er from "../../assets/images/erpi.jpg";
import arrow from "../../assets/images/arrow.svg"
import { Link } from "react-router-dom";
import arr from "../../assets/images/arrow.svg";
import ServicesSection from "./subservice/ServiceSections";
import ic from "../../assets/images/icesimg.png"

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

const supportItems = [
  {
    icon: startupIcon,
    title: "For Startups",
    description:
      "We assist early-stage teams in turning their ideas into MVPs more quickly. Get actual user input, win over investors, and release your app stress-free.",
    bullets: [
      "Launch MVPs fast",
      "Validate with users",
      "Build investor decks",
    ],
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
  {
    title: "Website Design & Development",
    description: "We create user-centric websites...",
  },
  { title: "UI/UX Design", description: "SaaS platforms built to scale..." },
  {
    title: "CMS Design & Development",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Landing Page Design",
    description: "From landing pages to full sites...",
  },
  {
    title: "Website Maintenance & Support",
    description: "Professional B2B interfaces...",
  },
  {
    title: "Responsive Website Redesign",
    description: "High-converting landing pages...",
  },
];

const accordionItems = [
  {
    title: "Custom Web Solutions",
    description: "We create user-centric websites...",
  },
  {
    title: "Custom CMS Development",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "API Development & Integration",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Third-Party Service Integration",
    description: "From landing pages to full sites...",
  },
  {
    title: "Custom Plugin & Module Development",
    description: "Professional B2B interfaces...",
  },
];

const accordionItemsapp = [
  {
    title: "Web App Development",
    description: "We create user-centric websites...",
  },
  {
    title: "Software Development",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Progressive Web Apps (PWA)",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "SaaS Application Development",
    description: "From landing pages to full sites...",
  },
  {
    title: "Enterprise Application Development",
    description: "Professional B2B interfaces...",
  },
];

const accordionItemsbrand = [
  {
    title: "E-Commerce Store Setup",
    description: "We create user-centric websites...",
  },
  {
    title: "Shopify Store Setup",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "WooCommerce Development",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Payment Gateway Integration",
    description: "From landing pages to full sites...",
  },
  {
    title: "Marketplace Development ",
    description: "Professional B2B interfaces...",
  },
];

const accordionItemsdev = [
  {
    title: "Brand Strategy & Consulting",
    description:
      "We make your site easy to look at and navigate on both phones and tablets, as well as desktops, and everyone will watch it without any problem.",
  },
  {
    title: "Logo Design & Visual Identity",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Social Media Branding",
    description: "End-to-end product UI/UX design...",
  },
  ,
];
const accordionItemsseo = [
  {
    title: "On-Page SEO",
    description:
      "We make your site easy to look at and navigate on both phones and tablets, as well as desktops, and everyone will watch it without any problem.",
  },
  { title: "Off-Page SEO", description: "SaaS platforms built to scale..." },
  {
    title: "Technical SEO Audit",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "Local SEO Optimization",
    description: "End-to-end product UI/UX design...",
  },
  {
    title: "SEO Content Writing",
    description: "End-to-end product UI/UX design...",
  },
];
const accordionItemsai = [
  {
    title: "AI/ML / LLM / NLP Solutions",
    description:
      "We design conversion-optimized landing pages that contain strong CTAs, compelling designs, and well-optimized design features that would prompt the user to take an action- such as making a purchase, signing up, or filling out a form.",
  },
  {
    title: "AI Chatbots & Voice Assistants",
    description: "SaaS platforms built to scale...",
  },
];
const accordionItemserp = [
  {
    title: "Custom ERP Implementation & Development",
    description:
      "We make your site easy to look at and navigate on both phones and tablets, as well as desktops, and everyone will watch it without any problem.",
  },
  {
    title: "ERP Integration with Existing Systems",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "ERP Maintenance & Support",
    description: "End-to-end product UI/UX design...",
  },
];
const accordionItemsodo = [
  {
    title: "Odoo Migration & Customization",
    description:
      "We make your site easy to look at and navigate on both phones and tablets, as well as desktops, and everyone will watch it without any problem.",
  },
  {
    title: "Odoo Techno-Functional Consultancy",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Odoo Module Development",
    description: "SaaS platforms built to scale...",
  },
  {
    title: "Odoo Integration Services",
    description: "SaaS platforms built to scale...",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {/* 1st Section
      <section className="dg-products-section py-5">
        <div className="container">
          <div className="row align-items-center">
            Left content
            <div className="col-lg-7">
              <div className="dg-products-content text-start">
                <h1 className="dg-products-heading" data-aos="fade-right">
                  Bringing Every <span className="highlight">Vision</span> to
                  Life, Digitally
                </h1>
                <p className="dg-products-description"  data-aos="fade-up">
                  At Bytechsol, we create beautiful websites, interactive
                  eCommerce applications, intelligent ERP platforms, AI-driven
                  applications, and tailored software to suit the needs of every
                  company, startup, creative, and individual user. Looking to
                  expand your brand or scale a personal project, build your
                  presence, or bring a new brand to life? We bring together
                  technology, creativity, and strategy to help your ideas
                  translate into meaningful digital experiences.
                </p>
                <div className="dg-products-buttons"  data-aos="fade-right">
                  <a href="#contact" className="dg-button dg-button-primary">
                    Start your website project today{" "}
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            Right image
            <div className="col-lg-5 text-center">
              <div className="dg-products-image" data-aos="fade-left">
                <img src={lig} alt="UI/UX Illustration" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

         {/* 1st section */}
<section className="our-services-section">
  <div className="container">
    <div className="services-heading-wrapper">
      <h3 className="services-small">OUR </h3>
      <h1 className="services-big">SERV</h1>
      <p className="services-description">
        At Bytechsol, we create beautiful websites, interactive eCommerce
        applications, intelligent ERP platforms, AI-driven applications, and
        tailored software to suit the needs of every company, startup, creative,
        and individual user.
      </p>
            <div className="col-lg-5 text-center">
        <div className="services-image">
          <img
            src={ic}
            alt="UI/UX Illustration"
            className="img-fluid unique-service-img"
          />
        </div>
      </div>
    </div>
  </div>
  
</section>


      <TrustedBySection />
      <ServicesSection/>

      {/* 1st section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0"data-aos="fade-left">
            <img
              src={ux}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className=" col-lg-6 px-5"data-aos="fade-left"><Link to="/services/website-design-and-development">
            <h2 className="webdesign-heading1" >Website Design & Development <img src={arr} alt="link" className="arr"/></h2> </Link>
            <p className="webdesign-desc1">
              We design eye-catching, easy-to-use, and mobile-friendly websites
              that combine your business objectives with your brand identity.
              Whether you need a new website or improvements to your current
              one, we offer essential services to enhance the performance,
              responsiveness, and increase your company with maximum visibility
              and customer response.
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
      {/* // ......................................2nd */}
      <section className="webdesign-section container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5"data-aos="fade-right"><Link to="/services/custom-web">
            <h2 className="webdesign-heading">Custom Web Solutions <img src={arr} alt="link" className="arr"  /></h2> </Link>
            <p className="webdesign-desc">
              We use our custom web development services, which can fit your
              business requirements. We offer custom CMS systems as well as
              advanced integrations and SEO optimized web solutions that
              optimize performance and increase your online exposure.
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
          <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0"data-aos="fade-right">
            <img
              src={wb}
              alt="Web design preview"
              className="webdesign-img img-fluid"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 3rd section------------------- */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0"data-aos="fade-left">
            <img
              src={wd}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5"data-aos="fade-left"><Link to="/services/web-app">
            <h2 className="webdesign-heading1">
              Web App & Software Development <img src={arr} alt="link" className="arr"  />
            </h2></Link>
            <p className="webdesign-desc1">
              Our specialization lies in secure, scalable software solutions and
              the development of websites. Our development cycle guarantees
              performance speed, a friendly user interface, and leverages an
              SEO-friendly structure that generates business growth and customer
              satisfaction.
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
      <section className="webdesign-section container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5"data-aos="fade-right"><Link to="/services/E-Commerce-solutions">
            <h2 className="webdesign-heading">E-Commerce Solutions <img src={arr} alt="link" className="arr"  /></h2 >
            </Link>
            <p className="webdesign-desc">
              Our e-commerce development services enable an enterprise to sell
              online. Our online stores are SEO friendly, have a secure payment
              method, an airtight responsive design, and have a smooth user
              experience to guarantee more conversions and a delightful shopping
              experience.
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
          <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0"data-aos="fade-right">
            <img
              src={co}
              alt="Web design preview"
              className="webdesign-img img-fluid"
            />
          </div>
          </div>
        </div>
      </section>

      {/* 5th section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0"data-aos="fade-left">
            <img
              src={bi}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5"data-aos="fade-left"><Link to="/services/brand-building">
            <h2 className="webdesign-heading1">Brand Building <img src={arr} alt="link" className="arr"  /></h2> </Link>
            <p className="webdesign-desc1">
              We assist companies in enhancing their brand with brand-building
              services. Whether it is losing out in logo design or a
              well-planned brand strategy, we bring with us effective brand
              identities that are SEO-optimized, resonate with your audience,
              and place you above the competition.
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
                    <span className="webdesign-accordion-title1">
                      {item?.title}
                    </span>
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
/>
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">
                      {item?.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* 6th section----- */}
      <section className="webdesign-section container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5"data-aos="fade-right"><Link to="/services/seo-service">
            <h2 className="webdesign-heading">SEO Services<img src={arr} alt="link" className="arr"  /></h2></Link>
            <p className="webdesign-desc">
              Our professional search engine optimization services enhance your
              search engine ranking with Google, targeted traffic, and more
              conversions. Our expertise lies in on-page SEO, off-page
              optimization, and technical SEO that will position your business
              to own search results.
            </p>

            <div className="webdesign-accordion mt-4">
              {accordionItemsseo.map((item, index) => (
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
          <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0"data-aos="fade-right">
            <img
              src={br}
              alt="Web design preview"
              className="webdesign-img img-fluid"
            />
          </div>
          </div>
        </div>
      </section>
      {/* 7th section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0"data-aos="fade-left">
            <img
              src={wd}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5"data-aos="fade-left"><Link to="/services/Ai-Ml">
            <h2 className="webdesign-heading1">AI & ML Solutions<img src={arr} alt="link" className="arr"  /></h2> </Link>
            <p className="webdesign-desc1">
              We provide world-edge artificial intelligence and machine learning
              technologies such as chatbots, NLP models, and predictive
              analytics. Our artificial intelligence development services ensure
              automation of the processes, improved customer experience, as well
              as a way to promote data-driven business development.
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemsai.map((item, index) => (
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
      {/* 8th section----- */}
      <section className="webdesign-section container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5"data-aos="fade-right"><Link to="/services/ERP-service">
            <h2 className="webdesign-heading">ERP Services<img src={arr} alt="link" className="arr"  /></h2> </Link>
            <p className="webdesign-desc">
              Our tailor-made ERP development solutions make processes more
              efficient, help to manage data centrally, and optimize work. ERP
              systems that we design are specific to your processes to make
              improved decisions and achieve greater productivity.
            </p>

            <div className="webdesign-accordion mt-4">
              {accordionItemserp.map((item, index) => (
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
          <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0"data-aos="fade-right">
            <img
              src={er}
              alt="Web design preview"
              className="webdesign-img img-fluid"
            />
          </div>
          </div>
        </div>
      </section>
      {/* 9th section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0"data-aos="fade-left">
            <img
              src={oi}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5"data-aos="fade-left"><Link to="/services/odoo-services">
            <h2 className="webdesign-heading1">Odoo Services<img src={arr} alt="link" className="arr"  /></h2>   </Link>
            <p className="webdesign-desc1">
              We offer Odoo migration, customization, and consultancy services
              to streamline your business operations. Our professional Odoo
              developers provide easy transitions, technical efforts, and
              integrations that are SEO friendly to provide large-scale
              efficiency.
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemsodo.map((item, index) => (
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

      {/* 11th Section who we */}
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
                  <p className="design-support-description">
                    {item.description}
                  </p>
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
