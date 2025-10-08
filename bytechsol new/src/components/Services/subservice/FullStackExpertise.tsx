import  { useEffect } from "react";
import "../../../assets/components-css/FullStackExpertise.css";
import se from "../../../assets/images/seonew.png"
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import { useLocation } from "react-router-dom";
import { Onseo } from "./New";


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



const ContactUs = () => {


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
  className="dg-products-section"
  style={{
    background: "#004E92",
  }}
>
  <div className="container">
  <div className="dg-products-container">
    {/* Left: Text */}
    <div className="dg-products-content">
      <h1 className="dg-products-heading text-start"data-aos="fade-down">
  Drive Traffic, Boost Rankings, Grow Smarter with SEO
</h1>

<p className="dg-products-description text-start"data-aos="fade-right">
  Increase your online presence through our customised SEO plans. Raising businesses to the top of the search engines, bringing the right leads on board, and expanding businesses in an environmentally friendly fashion are some of the ways we achieve this by using the techniques of keyword optimization, technical optimization, and content-driven optimization
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
      <img src={se} alt="UI/UX Illustration" />
    </div>
  </div>
  </div>
</section>

     <Onseo/>

     
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
      <NewCon />
    </>
  );
};

export default ContactUs;