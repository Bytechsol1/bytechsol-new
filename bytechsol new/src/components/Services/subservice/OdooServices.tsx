import "../../../assets/components-css/OdooServices.css";
import TrustedBySection from "../../../shareable/trust500";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import et from "../../../assets/images/ideat.png";
import lw from "../../../assets/images/lwork.png";
import sp from "../../../assets/images/simplicity.png";
import ma from "../../../assets/images/mobapps.png";
import cp from "../../../assets/images/odooimg.png";
import mi from "../../../assets/images/migra.png";
import tc from "../../../assets/images/tecno.png";
import md from "../../../assets/images/module.png";
import ig from "../../../assets/images/integra.png";
import  { useRef,  useState,useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../../../assets/images/arrow.svg"


gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    color: "f-bg",
    image: et,
    title: ["ERP Without Limits"],
    items: [
      "Odoo isn’t just software, it’s a growth engine. Our fully customizable ERP solutions break the barriers, streamline all processes, and expand as your business expands. Everything is constructed around the way in which you work rather than vice versa, between planning and implementation.",
    ],
  },
  {
    color: "s-bg",
    image: lw,
    title: ["From Chaos to Clicks"],
    items: [
      "Migration and customization do not need to be messy. We transfer your data, modernize your system,  and develop bespoke workflows without raising an eyelid. Individual modules, individual dashboards, and individual features are all optimized to ensure that your teams are moving at a greater pace and your information is flowing more cleanly.",
    ],
  },
  {
    color: "t-bg",
    image: sp,
    title: ["Brains + Code = Magic"],
    items: [
      "Our technology-functional consultants transform complicated issues into scaled-down systems. We architect and map your processes, build resilient ararchitectu sd train your teams to unlock the full potential of Odoo - so each click has a tangible effect on the business.",
    ],
  },
  {
    color: "forth-bg",
    image: ma,
    title: ["Plug In. Power Up."],
    items: [
      "Integrate Odoo with everything — apps, payment gateways, e-commerce, IoT, or cloud. We communicate your systems with each other, share the data in real time, and become a powerhouse. The result? Fewer silos, smarter decisions, and serious speed.",
    ],
  },
];


const accordionItemswebdev = [
  {
    title: "Legacy System Migration",
    description:
      "We import data from old systems to Odoo accurately and safely. Minimal downtime, easy transition, and full data integrity are guaranteed by our process to ensure that your business operations are not interrupted in the process of the shift.",
  },
  {
    title: "  Version Upgrades",
    description:
      " Our specialists upgrade Odoo to the new version, saving your data and settings. We promise compatibility, improved performance, and availability of new features without interfering with business processes.",
  },
  {
    title: " Custom Module Development",
    description:
      "We create custom Odoo modules to add functionality to your specific business processes. HR to inventory, we have customization that makes Odoo fit well with your needs.",
  },
  {
    title: " Workflow Customization",
    description:
      "Odoo workflows are optimized through customized automation, approvals, and processes. This will be to make sure that the platform fits your operations, increases efficiency, and improves user experience across departments.",
  },
  {
    title: "Data Security & Compliance",
    description:
      "Migration and customization are the services that observe data protection. We adhere to strong compliance standards and best practices in every aspect of your sensitive data, and it is safe during the processes of migration and system tweaking.",
  },
];

const accordionItemssoft = [
  {
    title: " Business Process Analysis",
    description:
      " We review your current workflows to see the gaps and opportunities. Our specialists align Odoo capabilities to your business objectives,  resulting in a system that eases operations and brings growth.",
  },
  {
    title: "Technical Architecture Design",
    description:
      "  We create scalable and secure Odoo architectures to match your needs. Whether through performing optimization on the database, our consultancy guarantees you a system that is future-ready and capable of expanding with your business.",
  },
  {
    title: " Functional Mapping & Customization",
    description:
      "  Our consultants draw Odoo modules to your own processes, and suggest customizations where appropriate. This ensures that your system is like a glove, and it adds productivity without unneeded complexity.",
  },
  {
    title: "User Training & Adoption",
    description:
      "We also offer practical training programs so that your team will know the technical and functional side of Odoo. This increases the adoption rates and puts users in a position to leverage the full capacity of the system.",
  },
  {
    title: "Continuous Improvement Strategy",
    description:
      "  Our consultancy doesn’t stop at implementation. We offer continued support and optimization plans to ensure that your Odoo system is up-to-date with changing business demands and best practices in the industry.",
  },
];

const accordionItemspwa = [
  {
    title: " Custom Module Design",
    description:
      "Odoo modules are designed manually by us to suit your needs. Every module is designed to maximize performance, simplify processes, and provide a smooth user experience.",
  },
  {
    title: "Industry-Specific Solutions",
    description:
      " We create modules specific to various industries such as manufacturing, retail, healthcare, or services,e, so that your Odoo system can be applied in your sector to your specific problems and processes.",
  },
  {
    title: "Module Integration",
    description:
      "We make sure that any new modules we have developed perfectly fit into your existing Odoo system. This forms a cohesive ecosystem in which all processes are interrelated to improve efficiency and data transfer among the departments.",
  },
  {
    title: " Scalability & Flexibility",
    description:
      " Our modules are designed with scalability in mind. These modules may be extended or tailored to your specific needs as your business expands, and long-term usability and flexibility.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      " Each module is highly tested before deployment. From functionality tests to performance tests and security tests, we ensure that your custom modules work well and dependably in actual field settings.",
  },
];

const accordionItemsaas = [
  {
    title: "  Third-Party App Integration",
    description:
      "We combine Odoo with key business solutions such as CRM, HR, e-commerce, nd project management solutions to create a single platform that helps improve collaboration and streamline operations across your organization.",
  },
  {
    title: "  Payment Gateway Integration",
    description:
      " Odoo is linked to online payment gateways by our team, which allows making transactions online without certain difficulties. The integration improves customer experience and provides safety and compliance in financial operations.",
  },
  {
    title: "API Development & Integration",
    description:
      "We create and integrate bespoke APIs to interface with Odoo and third-party applications. This guarantees real-time synchronization, efficient data interchange, and the ability to be adaptive when your business processes change.",
  },
  {
    title: " E-commerce & Marketplace Integration",
    description:
      "With Shopify and Magento, and Amazon or eBay, we integrate Odoo with major e-commerce platforms and marketplaces, so as to coordinate sales, inventory, and customer data efficiently.",
  },
  {
    title: "Cloud & IoT Integration",
    description:
      "Our integration solutions enhance the capabilities of Odoo with cloud solutions and IoT technologies to provide real-time monitoring, automation, and analytics to improve decision-making and operational efficiency.",
  },
];

const accordionItemsenter = [
  {
    title: "  Bug Fixing & Error Resolution",
    description:
      " We offer timely bug fixing and nderror-solvingg services to remove interference in your Odoo system. Our anticipatory measures will guarantee a seamless flow of work and continuous business running.",
  },
  {
    title: "Performance Monitoring & Optimization",
    description:
      "Our specialists constantly observe the functioning of the systems and optimize settings. This will make sure it is faster, there is less downtime, and it has better efficiency in your Odoo environment.",
  },
  {
    title: " Version Upgrades & Patches",
    description:
      "Stay updated with the latest Odoo features. We update to the new versions and security patches to improve the performance, functionality addition and security of your system against vulnerabilities.",
  },
  {
    title: " Data Backup & Recovery",
    description:
      "We use safe backup and disaster recovery measures to safeguard your business's important data. We have fast recovery and the least amount of downtime in case of a sudden breakdown.",
  },
  {
    title: "24/7 Technical Support",
    description:
      "Our dedicated support staff is oon call24/7 to help solve technical problems, respond to inquiries, and make sure your Odoo system operates smoothly- so your business does not slow.",
  },
];

const CustomSoftwareDev = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const cardsEls = gsap.utils.toArray<HTMLElement>(".card-row");
    const container = containerRef.current;
    if (!container) return;

    cardsEls.forEach((card, i) => {
      card.style.zIndex = `${i + 1}`;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${(cardsEls.length - 1) * window.innerHeight}`, 
        scrub: true,
        pin: container,
        pinSpacing: true,
      },
    });

    
    cardsEls.forEach((card, i) => {
      if (i === 0) return; 
      tl.fromTo(
        card,
        { y: window.innerHeight },
        { y: 0, duration: 0.8 },
        i - 1 
      );
    });
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <>
      {/* 1st Section */}
      <section
        className="dg-products-section"
        style={{
          backgroundColor: "#203A43",
        }}
      >
        <div className="container">
          <div className="dg-products-container">
            {/* Left: Text */}
            <div className="dg-products-content">
              <h1 className="dg-products-heading text-start"data-aos="fade-left">
                Unlock Business <br /> Potential with Tailored <br /> Odoo
                Solutions
              </h1>
              <p className="dg-products-description text-start"data-aos="fade-right">
                Our Odoo services support businesses in streamlining workflows,
                enhancing efficiency, and experiencing scalable growth with a
                completely customized ERP platform. Since implementation and
                integration to support and upgrades, we provide end-to-end Odoo
                solutions based on your business requirements.
              </p>
            </div>

            {/* Right: Image */}
            <div className="dg-odoo-image d-none d-md-block"data-aos="fade-right">
              <img src={cp} alt="UI/UX Illustration" />
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />

      {/* 1st card */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={mi}
              alt="CMS Development"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">
              Odoo Migration & Customization
            </h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              We provide seamless Odoo migration services to ensure a smooth
              transition from legacy systems or older versions. Customization:
              Odoo can be modeled to support your specific workflows, which
              increases usability, improves performance, and makes the platform
              the best fit as per business objectives.
            </p>
            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemswebdev.map((item, index) => (
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
      <section className="webdesign-section container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">
              Odoo Techno-Functional Consultancy
            </h2>
            <p className="webdesign-desc"data-aos="fade-down">
              We are a techno-functional consultancy that fills the gap between
              the requirements of the business and the technical application. We
              also offer complete solutions, integrating Odoo capabilities with
              your operations, and will achieve a smooth integration,
              customization, and usability in order to make your business as
              efficient as possible.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemssoft.map((item, index) => (
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
              src={tc}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 3rd card --------------*/}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={md}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Odoo Module Development</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              We create custom Odoo modules depending on your specific business
              requirements. Our solutions are an addition to the functionality
              of Odoo, which has given you the power of scalability, efficiency,
              and the ability to perfectly meet your operational processes.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemspwa.map((item, index) => (
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
      <section className="webdesign-section container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">Odoo Integration Services</h2>
            <p className="webdesign-desc"data-aos="fade-down">
              We also offer a smooth Odoo integration service that interconnects
              your ERP with third-party applications, tools, and platforms. Our
              solutions are designed to provide the efficient flow of data,
              enhance efficiency, and centralized control- welcoming your
              business to operate smarter, faster, and more efficiently.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemsaas.map((item, index) => (
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
              src={ig}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>
      {/* 5th card --------------*/}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={md}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Odoo Maintenance & Support</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              All of our Odoo support and maintenance services assure that your
              ERP system is operating properly, safely, and without failure. We
              will offer continuous support, be it in terms of bug fixes,
              performance monitoring, to ensure that your business activity
              remains efficient, scalable, and future-ready.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemsenter.map((item, index) => (
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

      {/* 4th section */}

      <section
        className="performance-section"
        style={{ height: "100vh" }}
        ref={containerRef}  
      >
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className={`card-row ${card.color}`}>
              <div className="card-text">
                <h2>{card.title[0]}</h2>
                <p>{card.items[0]}</p>
              </div>
              <div className="card-img">
                <img src={card.image} />
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

export default CustomSoftwareDev;
