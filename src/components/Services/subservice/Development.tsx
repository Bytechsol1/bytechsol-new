import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Testimonial from "../../../shareable/testimonial";
import lig from "../../../assets/images/webdev-3d-v2.png";
import "../../../assets/components-css/Services.css";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import wf from "../../../assets/images/wfir1.png";
import wj from "../../../assets/images/wjourn2.png";
import wfu from "../../../assets/images/wfut3.png";
import wt from "../../../assets/images/wtrans4.png";
import ww from "../../../assets/images/wswy5.png";
import wh from "../../../assets/images/whear6.png";
import New from "./New";
import { Helmet } from "react-helmet";
import { webdesignFaqs } from "../../../shareable/faqData";

// Fallback data in case CMS is empty or loading failed
const defaultIndustryData = [
  {
    title: "We Listen First",
    description: "Before we talk tech, we talk to you. Your goals, your audience, your challenges — we want to hear it all.",
    image: wf,
    dataAos: "fade-right",
  },
  {
    title: "We Map The Journey",
    description: "We are not talking tech, we are talking to you. What you want to achieve, who you want to address, and what your issues are, we want to know it all.",
    image: wj,
    dataAos: "fade-down",
  },
  {
    title: "We build For The Future",
    description: "Fast. Secure. Scalable. Our tools are the right tools to ensure the solution grows according to your growth.",
    image: wfu,
    dataAos: "fade-left",
  },
  {
    title: "We Create Digital Transformation",
    description: "Taking your ideas and turning them into effective digital solutions is what we do best; bring together creativity and technology to achieve designs that are easy to understand, grow to scale, and are resilient enough to last.",
    image: wt,
    dataAos: "fade-right",
  },
  {
    title: "We Stay With You",
    description: "There is no goodbye on launch day. We stay because we want to keep things flowing, to keep it moving, and to keep you winning online.",
    image: ww,
    dataAos: "fade-up",
  },
  {
    title: "We Design With Heart",
    description: "Not only does it have to look good, but it has to be something that leaves people stopping, smiling, and staying.",
    image: wh,
    dataAos: "fade-left",
  },
];

const Development: React.FC = () => {
  const [cmsData, setCmsData] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    // Fetch CMS data
    fetch('/api/cms/site')
      .then(res => res.json())
      .then(data => {
        if (data?.pages?.development) {
          setCmsData(data.pages.development);
        }
      })
      .catch(err => console.error("CMS Fetch Error:", err));

    // Scroll handling
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Helper to get section content securely
  const getSection = (id: string) => cmsData?.sections?.find((s: any) => s.id === id)?.content || {};

  const heroContent = getSection('hero');
  const introContent = getSection('intro');
  const featuresContent = getSection('features');

  // Use CMS items if available, otherwise default
  const displayedIndustryData = featuresContent?.items?.map((item: any, i: number) => ({
    ...item,
    // Map back to local images if URL matches or if using relative paths from CMS
    // For now we assume CMS provides valid paths or we fallback to locals
    // Re-add AOS animation which might not be in CMS
    dataAos: ["fade-right", "fade-down", "fade-left"][i % 3]
  })) || defaultIndustryData;

  return (
    <>
      <Helmet>
        <title>Website Design & Development | BytechSol</title>
        <meta
          name="description"
          content="Get high-performance, visually stunning websites tailored to your business goals with BytechSol’s expert design and development team."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bytechsol.com/services/website-design-and-development/"
        />
      </Helmet>





      {/* 1st Section - Hero */}
      <section
        className="dg-products-section"
        style={{ background: "#0F0C29", color: "#fff" }}
      >
        <div className="dg-products-container">
          {/* Left content */}
          <div className="dg-products-content text-start">
            <h1 className="dg-products-heading" data-aos="fade-down">
              {heroContent.title || <>Website Design & <br /> Development</>}
            </h1>
            <p className="dg-products-description" data-aos="fade-right">
              {heroContent.description || "Bytechsol is an organization that provides professional web development and web design services optimized for search engines, mobile-friendliness, and responsiveness. We design e-commerce stores, business websites, and landing pages to generate traffic, interest, and convert the viewers into loyal customers."}
            </p>
            <div className="dg-products-buttons" data-aos="fade-up">
              <a href={heroContent.buttonLink || "#contact"} className="dg-button dg-button-primary">
                {heroContent.buttonText || "Start your website project today"} <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Right image - Fixed Path & Removed AOS */}
          <div className="dg-products-image">
            <img
              src="/webdev-3d-v2.png"
              alt="Web Dev 3D"
              className="floating-3d img-fluid"
              onError={(e) => {
                e.currentTarget.src = lig; // Fallback to import if public fails
              }}
            />
          </div>
        </div>
      </section>

      {/* ... (rest of component) */}

      <New />

      {/* 10th section - Intro & Features */}
      <section className="industry-section">
        <div className="container">
          <div className="industry-header">
            <h2 className="industry-title" data-aos="fade-down">
              {introContent.title || "Turning Your Ideas Into Something Real"}
            </h2>
            <p className="par12" data-aos="fade-up">
              {introContent.paragraph || <>All great digital initiatives begin with a spark, a concept, a challenge, or perhaps a spark of a what-if thought. We are not the traditional web designers that build websites or applications… we help you create your vision in a way that feels natural to you and memorable to your users.</>}
            </p>
          </div>
        </div>
        <div className="industry-flex-grid">
          {displayedIndustryData.map((item: any, index: number) => (
            <div
              key={index}
              data-aos={item.dataAos}
              className={`industry-flex-card card-${index}`}
              style={{ backgroundImage: `url(${item.image || wf})` }} // fallback for safety
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
      <FaqSection faqs={webdesignFaqs} />
      <NewCon />
    </>
  );
};

export default Development;