import React, { useEffect, useState } from "react";
import Testimonial from "../../../shareable/testimonial";
import "../../../assets/components-css/development.css";
import cl from "../../../assets/images/cwimg.png";
import FaqSection from "../../../shareable/faq";
import cm from "../../../assets/images/cms.png";
import cw from "../../../assets/images/cwapp.png";
import pl from "../../../assets/images/plugimg.png";
import ap from "../../../assets/images/apimg.png";
import sv from "../../../assets/images/servimg.png";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import ContactSection from "../../../shareable/contact";
import arrow from "../../../assets/images/arrow.svg"
import { useLocation } from "react-router-dom";


// Accordion Data
const accordionItemscms = [
  {
    title: "User-Friendly Dashboards",
    description:
      "We can have user-friendly content management in our dashboards, and this is why they can be used by non-technical users as well. It is easy to navigate, and the drag and drop features that enable you to edit pages, blogs, and media can be easily done, but give you full control of the layout and structure of your site, as well as the process of publishing it.",
  },
  {
    title: "Multi-User Access Control",
    description:
      " Our CMS solutions have per-user permission authentication, so that different team members are able to participate in the process without jeopardizing data or design integrity. The right privileges ensure that there is a smooth workflow management with secure content publishing across your company; editors have appropriate access, and to an extent, administrators as well.",
  },
  {
    title: " Seamless Third-Party Integrations",
    description:
      "We combine your CMS with CRMs, eCommerce platforms, and analytics software to make them as useful as possible. This will enable your website to integrate with business software, enabling seamless workflow, better customer experience, and keeping the system efficient.",
  },
  {
    title: "Scalable & Secure Solutions",
    description:
      "Our CMS platforms are designed to allow the growth of your business. Regardless of your requirements, whether it is more features, storage, or additional plugins, we can ensure your system can evolve without any issues,e s keeping it safe and secure with the latest updates, patches, and data protection.",
  },
  {
    title: "Optimized for Performance",
    description:
      "We do not just create CMS solutions; we optimize them, making them fast, SEO friendly, and long-lasting. With clean code and fast-loading pages, our content management system will increase your position in search engines and give visitors a good impression.",
  },
];

const accordionItemsdev = [
  {
    title: "Tailored Business Solutions",
    description:
      "Your business is unique, and our custom web applications are designed to address your unique challenges. Whether it be workflow automation, data management, or customer interaction, we develop solutions that have been integrated into your business ecosystem more effectively, enhancing efficiency and cutting the cost of operations.",
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "We make sure that your web applications perform optimally across your desktop, tablets, and mobile devices. This approach to the development, responsive/adaptive, will ensure accessibility, consistency, and an easy process for all its users, regardless of the platform and browser that they might be using.",
  },
  {
    title: "Advanced Security Features",
    description:
      "The center of our web application development is security. We use encryption, firewalls, role-based access, and frequent vulnerability checks to protect any sensitive business and customer information, and the above practices are strictly conformed to the newest industry practices and standards.",
  },
  {
    title: "Scalable Architecture",
    description:
      " We develop applications in anticipation of future expansion. Regardless of whether you anticipate more users, larger data volumes, or greater functionality, we develop solutions to reach scale without compromising the speed, stability, and performance of your business.",
  },
  {
    title: "Integration with Business Tools",
    description:
      " We integrate your web applications with third-party tools, including CRM, ERP, payment gateways, and marketing tools. This allows easy data flow, a reduction in manual data manipulation, and makes your team handle business processes effectively using one central system.",
  },
];

const accordionItemsapi = [
  {
    title: "Custom API Development",
    description:
      "We plan and create custom APIs tailored to specific needs. Be it on mobile applications, SaaS solutions, or enterprise software, our APIs are safe, extensible, and high-performance, ensuring that your systems interrelate seamlessly and so allowing you to innovate at a rapid pace and scale your business.",
  },
  {
    title: " Third-Party API Integration",
    description:
      "Be it its payment gateways, CRM, marketing tools, and cloud services, we can integrate any third-party API within your existing applications. This guarantees the interconnection of your systems, automation, and optimization, which eliminates manual compensations and increases productivity in the various departments.",
  },
  {
    title: "Secure Data Transfer",
    description:
      "The security of data is given high priority in our API development. We also have in place encryption, authentication, and authorization protocols to seal sensitive data when they are transferred, ensuring that we adhere to industry standards and that your business does not feel the trauma of a possible breach.",
  },
  {
    title: "Scalable and Flexible Architecture",
    description:
      " Our APIs are designed with a view to scaling up as your company scales. They are scalable and with modular architectures, they accommodate future improvement, greater workloads, and other integrations without unnecessary deficiency in performance, putting you at long-term flexibility and merit.",
  },
  {
    title: "Continuous Monitoring & Support",
    description:
      "We offer monitoring, updates, and problem solutions to your APIs so that they work non-stop. Our proactive maintenance and 24/7 support ensure that your integrations are always reliable, efficient, and cost-effective based on your business and technology needs.",
  },
];

const accordionItemsinteg = [
  {
    title: "CRM Integration",
    description:
      "We incorporate trending CRMs such as Salesforce, HubSpot, or Zoho in your web and mobile applications, making customer data management convenient. This enables your team to monitor leads, automate approaches, and enhance customer relations with centralized and real-time data.",
  },
  {
    title: "  Payment Gateway Integration",
    description:
      " Our team integrates safe and secure payment gateways such as PayPal, Stripe, and Square into your eCommerce. Multi-currency support and encrypted transactions make online payment a simple hassle hassle-free task for your customers and secure finances for your business.",
  },
  {
    title: "Marketing & Analytics Tools",
    description:
      "We incorporate Google Analytics and Mailchimp to combine marketing and analytics platforms that generate informative data about customer behavior and campaign effectiveness. This will enable you to support your decisions with data and track ROI, and refine strategies to grow better.",
  },
  {
    title: "Cloud & SaaS Integration",
    description:
      " We bridge the gap between cloud services and SaaS applications and enable your systems to interact harmoniously. Either Google Workspace, Slack, or Dropbox, our integrations enhance collaboration, data sharing, and productivity among teams and eliminate manual tasks.",
  },
  {
    title: "Social Media & Communication Tools",
    description:
      " We link communication tools and social media apps, such as WhatsApp API, Facebook Messenger, and Slack, so that a business is able to interact with its audience on a higher level. This will safeguard better customer engagement, speedier inquiry handling, and a much consolidated brand presence over the online platforms.",
  },
];

const accordionItemsplug = [
  {
    title: " WordPress Plugin Development",
    description:
      "We develop custom WordPress plugins that provide additional functionality to websites, including complex contact forms and booking systems, as well as eCommerce extensions. Our plugins are lightweight, secure, and optimized to be non-performance-impacting, which is why they don't make your sites slow..",
  },
  {
    title: "CMS Module Development",
    description:
      " Our developers create custom modules on CMS systems such as Drupal, Joomla, and Magento. These modules make your site more flexible, allowing more functionality like advanced searching, content filtering, or user dashboards customized to your business needs.",
  },
  {
    title: "eCommerce Plugin Solutions",
    description:
      " We create and customize unique plugins to be used by e-commerce platforms such as WooCommerce, Shopify, and Magento. Our products and solutions provide custom checkouts, dynamic product filters, and more to optimise customer journeys, increase conversions, and manage stores more efficiently, allowing business growth.",
  },
  {
    title: "API-Ready Extensions",
    description:
      "Our programmers can produce API compatible extensions and modules that enable your site to communicate with third-party applications seamlessly. These extensions enhance scalability, automate the processes, and make it smooth to share data in your digital ecosystem.",
  },
  {
    title: "Performance & Security Enhancements",
    description:
      "We also develop a plugin that will concentrate on performance optimization, caching, and security enhancements. These will ensure your site loads quicker, is stable with high traffic, is secure against vulnerabilities, and ensures your users have the best experience possible.",
  },
];

const CustomWeb: React.FC = () => {
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
        style={{
          background: "#2B3990 ",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7">
              <div className="dg-products-content text-start">
                <h1 className="dg-products-heading"data-aos="fade-down">
                  Custom Web Solutions <br /> Tailored to Your Business
                </h1>
                <p className="dg-products-description"data-aos="fade-up">
                  Increase your brand with our custom web development solutions.
                  We create dynamic, SEO optimized websites — corporate sites,
                  e-commerce, and apps — blending design, usability, and
                  performance to draw traffic and convert.
                </p>
                <div className="dg-products-buttons"data-aos="fade-left">
                  <a href="#contact" className="dg-button dg-button-primary">
                    Start your website project today{" "}
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-lg-5 text-center">
              <div className="dg-products-image">
                <img src={cl} alt="UI/UX Illustration" className="img-fluid"data-aos="fade-left" />
              </div>
            </div>
          </div>
        </div>
      </section>
   

      {/* 1st card---------- */}

      <section className="webdesign-section1 container-fluid py-5" id="custom-cms-development">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={cm}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Custom CMS Development</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              Our custom CMS solutions offer your business the ability to manage
              all your content, along with additional scalability, performance,
              and usability. They are also dynamic, safe, and search
              engine-friendly interfaces that can be easily manipulated and
              maintained by anyone without needing to call in technical
              personnel frequently.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemscms.map((item, index) => (
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
      {/* 2nd card------- */}
      <section className="webdesign-section container-fluid py-5" id="custom-web-solutions">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">
              Custom Web Application Development
            </h2>
            <p className="webdesign-desc"data-aos="fade-down">
              With our custom web application development solutions, companies
              and individuals can design unique applications that make
              operations smooth, bolster relationships with customers, and spur
              growth. We build scalable, secure, and user-friendly web
              applications that will meet your business objectives and assure
              ease of use, scalability, and high performance of the applications
              to support functionality across all platforms and devices.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemsdev.map((item, index) => (
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
              src={cw}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 3rd card --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="api-development-integration">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={ap}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">
              Custom API Development & Integration
            </h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              We specialize in custom API development and integration services
              that can help businesses build bridges between the application,
              the platform, and software designed to communicate and share data
              effectively. We develop safe, scalable, and stable APIs that
              exactly meet your expectations, and their integration can be done
              without any difficulties in the system.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemsapi.map((item, index) => (
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
      {/* 4th card----- */}
      <section className="webdesign-section container-fluid py-5" id="third-party-service-integration">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">
              Third-Party Service Integration
            </h2>
            <p className="webdesign-desc"data-aos="fade-down">
              Our third-party service integration solutions assist businesses in
              joining key tools, platforms, and applications into their digital
              ecology. Our software is able to work with CRMs, payment gateways,
              and streamline communication between the systems, resulting in
              increased automation, efficiency, and scaling of the systems and a
              pleasant user experience.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemsinteg.map((item, index) => (
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
              src={sv}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>
      {/* 5th card --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="custom-plugin-module-development">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={pl}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">
              Custom Plugin & Module Development
            </h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              Our custom plugin and module development services add extended
              functionality to your site and applications with custom solutions
              that suit the specific needs of your business. Be it robust
              functions, efficient integrations, or elite-performance features,
              we tailor our scalable and secure or easy-to-manage modules and
              plug-ins that work according to your digital strategies.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemsplug.map((item, index) => (
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
      {/* 7th Section */}
      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">Your Growth, Our Priority</h2>
          <div className="group7-columns">
            {[...Array(3)].map((_, idx) => (
              <div className="group7-column" key={idx}>
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">
                  {
                    [
                      "Focused on What Matters",
                      "A Team by Your Side",
                      "Quality You Can Rely On",
                    ][idx]
                  }
                </h3>
                <p className="group7-description">
                  {
                    [
                      "We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.",
                      "Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).",
                      "We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.",
                    ][idx]
                  }
                </p>
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

export default CustomWeb;
