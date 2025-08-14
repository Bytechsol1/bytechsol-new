import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; 
import "../../../assets/components-css/FullStackExpertise.css";
import TrustedBySection from "../../../shareable/trust500";
import tc from "../../../assets/images/techexp.svg";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
import tp from "../../../assets/images/tecp.png";
import up from "../../../assets/images/uptime.png"
import lp1 from "../../../assets/images/lap1.png"
import lp2 from "../../../assets/images/lap2.png"
import lp3 from "../../../assets/images/lap3.png"




const accordionItemstp = [
  { title: "Frontend Development (React, Vue, Next.js with Tailwind or Bootstrap", description: "We create user-centric websites..." },
  { title: "Backend Development (Node.js, Laravel, Django, Express)", description: "SaaS platforms built to scale..." },
  { title: "Secure APIs (REST, GraphQL) and Webhooks", description: "End-to-end product UI/UX design..." },
  { title: "Database Management (PostgreSQL, MySQL, MongoDB)", description: "From landing pages to full sites..." },
  { title: "Authentication Systems (JWT, OAuth, Multi-Role)", description: "Professional B2B interfaces..." },
  { title: "CI/CD Pipelines (GitHub Actions, GitLab, Bitbucket)", description: "High-converting landing pages..." },
  { title: "Docker Containerization, Kubernetes Orchestration", description: "Beautiful stores with seamless UX..." },
  { title: "Cloud Architecture Setup (AWS EC2, S3, Lambda, Firebase)", description: "Beautiful stores with seamless UX..." },
  { title: "Logging, Monitoring & Alerts (Prometheus, Grafana, Sentry)", description: "Beautiful stores with seamless UX..." },

];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ Manage open item

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* 1st section---------------------- */}
      <section className="fullstack-section">
        <div className="fullstack-content">
          <h1 className="fullstack-heading">
            Full-Stack Tech <br /> Expertise
          </h1>
          <p className="fullstack-description">
            Our team uses the latest tech to build reliable, modern <br />
            applications from the frontend to the backend. We don’t just <br />
            follow trends—we implement what works best for you.
          </p>
          <div className="fullstack-buttons">
            <a href="#contact" className="fullstack-button fullstack-button-primary">
              Consult an expert
            </a>
            <a href="#portfolio" className="fullstack-button fullstack-button-outline">
              See our works
            </a>
          </div>
        </div>
        <div className="fullstack-image">
          <img src={tc} alt="Full Stack Illustration" />
        </div>
      </section>

      <TrustedBySection />

      {/* 2nd section------------ */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 px-4 mb-5 mb-lg-0">
            <h2 className="webdesign-heading1 text-center">Full-Stack Tech </h2>
            <h2 className="webdesign-heading1 text-center">Expertise</h2>
            <div className="text-center">
              <img
                src={tp}
                alt="Web design preview"
                className="webdesign-img1 img-fluid"
                style={{ height: "378px", width: "427px" }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <p className="webdesign-desc1">
              Because simple, thoughtful design can make your product work better, faster, and feel easier, right from the start. We ensure that your product design makes it better .
            </p>

            <div className="webdesign-accordion1 mt-4">
              {accordionItemstp.map((item, index) => (
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
      </section>
              {/* 3rd section------------- */}
              <section className="fullstack-performance">
  {/* First Card - 70% Faster Loading */}
  <div className="fullstack-row fullstack-bg-purple">
    <div className="fullstack-text">
      <h2>70% Faster Loading</h2>
      <p>
        Speed isn’t a luxury—it’s the expectation. We optimize your website performance
        to load lightning-fast across all devices. From code to server to content, we
        fine-tune every layer so you never lose a customer to slow loading again.
      </p>
    </div>
    <div className="fullstack-img">
      <img src={up} alt="70% Faster Loading Illustration" />
    </div>
  </div>

  {/* Second Card - CMS Platforms */}
  <div className="fullstack-row fullstack-bg-white">
    <div className="fullstack-text">
      <h2>CMS Platforms</h2>
      <p>
        The right content system empowers your team and scales with your needs. Whether
        you prefer the flexibility of WordPress or the speed and control of headless CMS,
        we architect solutions that are secure, scalable, and built for growth.
      </p>
    </div>
    <div className="fullstack-img">
      <img src={lp1} alt="CMS Platforms Screenshot" />
    </div>
  </div>

  {/* Third Card - E-Commerce Solutions */}
  <div className="fullstack-row fullstack-bg-black">
    <div className="fullstack-text">
      <h2>E-Commerce Solutions</h2>
      <p>
        From idea to checkout, we craft eCommerce experiences that convert. Whether you're launching
        a niche store or scaling a product empire, we build secure, user-friendly platforms that drive
        sales, simplify management, and wow your customers.
      </p>
    </div>
    <div className="fullstack-img">
      <img src={lp2} alt="E-Commerce Solutions Screenshot" />
    </div>
  </div>

  {/* Fourth Card - Cloud & DevOps Integration */}
  <div className="fullstack-row fullstack-bg-white">
    <div className="fullstack-text">
      <h2>Cloud & DevOps Integration</h2>
      <p>
        Your backend should never slow you down. We integrate DevOps and cloud technologies
        to streamline deployments, boost uptime, and enable rapid scaling. From CI/CD pipelines
        to cloud-native architecture, we build resilient systems that move at your pace.
      </p>
    </div>
    <div className="fullstack-img">
      <img src={lp3} alt="Cloud and DevOps Integration Screenshot" />
    </div>
  </div>
</section>


      <Testimonial />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default ContactUs;
