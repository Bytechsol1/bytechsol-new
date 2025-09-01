import React, { useState } from "react";
import "../../../assets/components-css/webecom.css";
import { FiChevronDown } from "react-icons/fi";
import w1 from "../../../assets/images/wecom.jpg";
import ec from "../../../assets/images/1ecom.png"
import TrustedBySection from "../../../shareable/trust500";
import lo from "../../../assets/images/70load.png"
import cm from "../../../assets/images/cmsplat.png"
import es from "../../../assets/images/esol.png"
import cl from "../../../assets/images/cloud.jpg"
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";


const accordionItemsUI = [
  { title: "UI UX Design", description: "We create user-centric websites..." },
  { title: "UX Audit", description: "SaaS platforms built to scale..." },
  { title: "Design System", description: "End-to-end product UI/UX design..." },
  { title: "UI UX Consulting", description: "From landing pages to full sites..." },
  { title: "UX Research", description: "Professional B2B interfaces..." },
  { title: "Usability Testing", description: "High-converting landing pages..." },
  { title: "Wireframe & Prototyping", description: "Beautiful stores with seamless UX..." },
];

const Webecom: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* 1st section */}
      <section
  className="webecom-section"
  style={{
    backgroundImage: `url(${w1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "100px 20px",
    color: "#fff",
  }}
>
  <div className="webecom-content">
    <h1 className="webecom-heading">
      Web & E-Commerce <br /> Development
    </h1>
    <p className="webecom-description">
      Launch high-performing websites and stores designed for speed,<br />
      security, and growth. From CMS platforms to custom E-Commerce <br />
      builds, we handle everything end-to-end.
    </p>

    <div className="webecom-buttons">
      <a href="#contact" className="webecom-btn webecom-btn-primary">
        Consult an Expert
      </a>
      <a href="#portfolio" className="webecom-btn webecom-btn-outline">
        View Our Work
      </a>
    </div>
  </div>
</section>


      <TrustedBySection />

      {/* 2nd section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Image */}
          
          <div className="col-lg-6  px-4 mb-5 mb-lg-0">
            <h2 className="webdesign-heading1 text-center" >Web & E-commerce </h2>
            <h2 className="webdesign-heading1 text-center" >Development</h2>
            <div className="text-center">
            <img
              src={ec}
              alt="Web design preview"
              className="webdesign-img1 img-fluid" style={{height:"378px", width: "427px"}}
            />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <p className="webdesign-desc1">
              How your app works is an equally important part of the design as how it looks. Every time someone uses the app, every interaction with the screen can shape their actions. For this reason, our team pays close attention to simplicity, ease of use and attracting conversions. 
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

      {/* 3rd section--- */}
      <section className="performance-section">
      {/* First Card - 70% Faster Loading */}
      <div className="card-row purple-bg">
        <div className="card-text">
          <h2>70% Faster Loading</h2>
          <p>
            Speed isn’t a luxury—it’s the expectation. We optimize your website performance
            to load lightning-fast across all devices. From code to server to content, we
            fine-tune every layer so you never lose a customer to slow loading again.
          </p>
        </div>
        <div className="card-img">
          <img src={lo} alt="70% Faster Loading Illustration" />
        </div>
      </div>

      {/* Second Card - CMS Platforms */}
      <div className="card-row white-bg">
        <div className="card-text">
          <h2>CMS Platforms</h2>
          <p>
            The right content system empowers your team and scales with your needs. Whether
            you prefer the flexibility of WordPress or the speed and control of headless CMS,
            we architect solutions that are secure, scalable, and built for growth.
          </p>
        </div>
        <div className="card-img">
          <img src={cm} alt="CMS Platforms Screenshot" />
        </div>
      </div>
      {/* 3rd  card--- */}
     <div className="ecomsolutions-row white-bg">
  <div className="ecomsolutions-text">
    <h2>E-Commerce Solutions</h2>
    <p>
      From idea to checkout, we craft eCommerce experiences that convert. Whether you're launching
      a niche store or scaling a product empire, we build secure, user-friendly platforms that drive
      sales, simplify management, and wow your customers.
    </p>
  </div>
  <div className="ecomsolutions-img">
    <img src={es} alt="E-Commerce Solutions Screenshot" />
  </div>
</div>
   {/* 4th card---- */}
   <div className="clouddevops-section white-bg">
  <div className="clouddevops-content">
    <h2 className="clouddevops-heading">Cloud & DevOps Integration</h2>
    <p className="clouddevops-description">
      Your backend should never slow you down. We integrate DevOps and cloud technologies to streamline deployments, boost uptime, and enable rapid scaling. From CI/CD pipelines to cloud-native architecture, we build resilient systems that move at your pace.
    </p>
  </div>
  <div className="clouddevops-image-wrapper">
    <img src={cl} alt="Cloud and DevOps Integration Screenshot" className="clouddevops-image" />
  </div>
</div>
    </section>

              <Testimonial/>
              <FaqSection/>
              <ContactSection/>
    </>
  );
};

export default Webecom;
