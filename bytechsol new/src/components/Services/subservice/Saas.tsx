import  { useState } from "react";
import "../../../assets/components-css/ProductDesign.css";
import er from "../../../assets/images/erp01.svg"
import TrustedBySection from "../../../shareable/trust500";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import lp from "../../../assets/images/laptop-image.png"
import am from "../../../assets/images/aml.jpg"
import cs from "../../../assets/images/cuseomiza.png"
import ip from "../../../assets/images/imple.png"
import sp from "../../../assets/images/support.png"
import arrow from "../../../assets/images/arrow.svg"



const industryData = [
  {
    title: "Finance & Fintech",
    description:
      "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image: fin,
    dataAos: "fade-right",
  },
  {
    title: "E-Commerce & DTC",
    description:
      "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image: ec,
    dataAos: "fade-down",
  },
  {
    title: "SaaS & B2B Platforms",
    description:
      "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image: pl,
    dataAos: "fade-left",
  },
  {
    title: "Web3, AI & Emerging Tech",
    description:
      "Complex tech doesn’t have to feel complex. We simplify the experience so users understand, explore, and adopt with confidence.",
    image: we,
    dataAos: "fade-right",
  },
  {
    title: "Edtech & Healthtech",
    description:
      "Our platforms allow patients, students, and administrators to use them at any time, from any device.",
    image: ed,
    dataAos: "fade-up",
  },
  {
    title: "Hospitality & Legal Services",
    description:
      "Our approach to design lets users focus on their activities, so services are easy and dependable to use.",
    image: sv,
    dataAos: "fade-left",
  },
];


const accordionItemswebdev = [
  { title: "Requirement Analysis & Planning", description: "We review business processes, issues, and business goals and create an ERP system that meets your specific requirements. This means fewer adoption hassles, less risk, and optimal ROI on your investment." },
  { title: "  Custom ERP Development", description: " Our team builds scalable, feature-rich ERP systems based on your processes. Your ERP can be tailored to your operations with bespoke modules and features rather than requiring you to change your operations to suit the system." },
  { title: "Seamless Integration", description: "We combine ERP solutions with the already implemented software, e.g., CRM, HR, or other accounting software. This provides an integrated digital environment that breaks the silos and enhances cross-departmental collaboration." },
  { title: " Data Migration & Security", description: "Our experts complete an orderly migration of business information to the new ERP without disturbances. To facilitate a smooth transition, we value the importance of data integrity, compliance, and security." },
  { title: "Testing & Deployment", description: "Before ERP systems are deployed, we test them rigorously based on performance, security, and usability. This provides a stable, bug-free solution that your teams can be sure to adopt and use right away." },
];

const accordionItemssoft = [
  { title: "  End-to-End System Connectivity", description: " We combine the ERP solutions in the fields of finance, human resources, sales, and supply chain, and guarantee the consistency of the data and the smooth running of the processes. This interdependence gets rid of duplication and allows the integration of a single workflow." },
  { title: "API Development & Integration", description: "  Our experts develop and develop APIs that enable your ERP to interact easily with other applications. This is to provide flexibility, scalability, and reliable system interactions." },
  { title: "  Real-Time Data Synchronization", description: "  We facilitate real-time data transfer among ERP and related systems. Up-to-date information that is accurate enables the teams to make decisions smartly and act faster." },
  { title: "Cloud & Hybrid Integration", description: "Our team eases the integration of ERP into cloud and hybrid environments, providing secure, scalable, and future-proof operations that grow with business expansion and changes in technologies." },
  { title: "Legacy System Integration", description: "  We bridge the gap between ERP systems and legacy applications, allowing older systems to operate in your current digital environment. This reduces the disturbances and maximizes the investments that are already in place." },
];

const accordionItemspwa = [
  { title: " CRM & Sales Integration", description: "We combine the ERP with CRM applications to simplify the process of customer data, sales pipelines, and performance monitoring. This enhances customer experiences, leads management, and visibility of sales teams can be up to date on the operations of the business." },
  { title: "Accounting & Finance Systems", description: "Our financial reporting is automated with the integration of our ERP solutions with accounting software to manage transactions and compliance. Integration saves on manual labor and gives you the right real-time information on your financial status." },
  { title: "HR & Payroll Systems", description: "We link ERP to HR and payroll applications to promote the ease of managing employees and processing payroll. This will guarantee proper management of the workforce and employee satisfaction due to smooth operations." },
  { title: " Supply Chain & Inventory Management", description: " Combining ERP with supply chain and inventory applications helps us improve demand forecasting, inventory management, and logistics. Companies are able to achieve end-to-end visibility, which minimizes the cost and enhances the efficiency of operations." },
  { title: "Third-Party Application Integration", description: " We integrate the ERP with third-party,, ms including e-commerce, analytics, or project management systems. This brings about a cohesive environment in which the flow of data is free to enhance cooperation, productivity, and decision-making." },
];

const accordionItemsaas = [
  { title: "  Custom Workflow Design", description: " We create ERP workflows specific to your processes that streamline operations. Customization removes redundant procedures, lessens manual labor, and enhances total productivity." },
  { title: "   Industry-Specific Modules", description: " Our modules are industry-specific, designed to meet your industry requirements, that is, manufacturing, retail, healthcare, or finance. These bespoke modules provide a solution to niche problems." },
  { title: " Feature Enhancements", description: "We upgrade the current ERP features or introduce new features in order to make the most of it. This keeps your system updated with business needs and competitive." },
  { title: " User Interface Customization", description: "We design user-friendly dashboards and interfaces that are user-friendly to your teams. This enhances usability, accessibility, and general ERP adoption within departments." },
  { title: "Reporting & Analytics Modules", description: "We develop high-level reporting and analytics applications according to your KPI. Real-time insights can provide decision-makers with insights to monitor performance, streamline operations, and promote growth." },
];

const accordionItemsenter = [
  { title: "  System Monitoring & Performance", description: " The ongoing performance monitoring of the ERP helps to identify and eliminate the problem at an early stage. This guarantees a high uptime, dependability of the operations, and a smooth experience for your teams." },
  { title: " Bug Fixes & Troubleshooting", description: "Technical glitches, errors, and performance issues are resolved by our support team very quickly. Quick solutions reduce downtime and ensure business continuity." },
  { title: " Regular Updates & Upgrades", description: "We maintain your ERP at the most recent features, patches, and security upgrades. This improves the stability and functionality of systems and conformance to changing industry standards." },
  { title: " User Training & Support", description: "Our experts provide training and ongoing support for ERP users. This gives employees the power to take full advantage of system features and enhances adoption throughout the organization." },
  { title: "Scalability & Enhancements", description: "We tailor and upgrade ERP modules as your business grows to fit new needs. This makes sure your ERP goes with your operations and continues to deliver value." },
];

const SaasDesign = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  return (
    <>
      {/* 1st Section */}

 <section
        className="dg-products-section"
        style={{
          background: "#0F0C29",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="dg-products-container">
            {/* Left: Text */}
            <div className="dg-products-content">
              <h1 className="dg-products-heading text-start"data-aos="fade-right">
                ERP Solutions That <br /> Power Smarter <br /> Businesses
              </h1>
              <p className="dg-products-description text-start"data-aos="fade-down">
                Our ERP services can simplify the business processes by consolidating
        finance, human resources, supply chain, sales, etc., into one system.
        Our personalized ERP systems enable greater productivity, more effective
        collaboration, and smarter decision-making and growth-sustainable
        insights.
              </p>
              <div className="dg-products-buttons">
  <a 
    href="#contact" 
    className="dg-button dg-button-primary d-none d-md-inline-block"data-aos="fade-up"
  >
    Start your website project today <span className="arrow">→</span>
  </a>

  {/* Mobile button (unique inline style) */}
  <a 
    href="#contact" 
    className="d-inline-block d-md-none"
    style={{
      width: "93%",
      padding: "12px 20px",
      borderRadius: "50px",
      backgroundColor: "#289ED8",
      color: "#fff",
      textDecoration: "none",
    }}
  >
Start your website project today <span className="arrow">→</span>
  </a>
</div>
 </div>
 
            {/* Right: Image */}
            <div className="dg-products-image"data-aos="fade-left">
              <img src={er} alt="ERP " />
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
            <img src={ip} alt="CMS Development" className="webdesign-img1 img-fluid"data-aos="fade-right" />

          </div>
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Custom ERP Implementation & Development</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              We offer customized ERP implementation and development services that are aligned with your needs. Planning for deployment, our professionals are capable of delivering an integrated system, flawless operation, and scalable ERP systems that are able to propel efficiency, teamwork, and success in the long term.
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
                    <p className="webdesign-accordion-desc1">{item.description}</p>
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
          <h2 className="webdesign-heading"data-aos="fade-down">ERP Integration Services</h2>
          <p className="webdesign-desc"data-aos="fade-down">
         ERP integration services bridge your enterprise system to your key business applications to facilitate seamless operations, a steady flow of data, and enhance teamwork. We eradicate silos, increase visibility, and build a single ecosystem that fosters smarter decisions and workflows.
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
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon ${activeIndex === index ? "rotated" : ""}`}
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
            src={lp}
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
              src={am}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">ERP Customization & Module Development</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
          We customize ERP to meet your business requirements. Our solutions provide increased functionality, efficiencies, and fitment of your ERP to your industry and business objectives, whether it be custom workflows or specialized modules.
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
          <h2 className="webdesign-heading"data-aos="fade-down">ERP Maintenance & Support</h2>
          <p className="webdesign-desc"data-aos="fade-down">
          Our ERP services and support services will keep your system safe, efficient, and relevant. Troubleshooting and upgrades are just the tip of the iceberg as we maintain your ERP on track to allow your business to grow.
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
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon ${activeIndex === index ? "rotated" : ""}`}
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
            src={cs}
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
              src={sp}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Odoo Maintenance & Support</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
          All of our Odoo support and maintenance services assure that your ERP system is operating properly, safely, and without failure. We will offer continuous support, be it in terms of bug fixes, performance monitoring, to ensure that your business activity remains efficient, scalable, and future-ready.
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


      
      {/* 5th section------------- */}
     <section className="industry-section">
      <div className="container">
  <div className="industry-header">
    <h2 className="industry-title"data-aos="fade-down">Turning Your Ideas Into Something Real</h2>
   <p className="ms-2 fs-6"data-aos="fade-up">
  All great digital initiatives begin with a spark, a concept, a challenge, or perhaps a spark of a what-if thought. 
  We are <br /> not the traditional web designers that build websites or applications… 
  we help you create your vision in a way that <br /> feels natural to you and memorable to your users.
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

export default SaasDesign;
