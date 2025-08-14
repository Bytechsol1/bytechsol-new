import React, { useState } from "react";
import AnimatedText from "../shareable/AnimatedText";
import "../assets/components-css/home.css";
import Clutch from "../assets/images/clutch.png";
import Yasir from "../assets/images/yasir.jpg";
import Salik from "../assets/images/salik.png";
import Top1 from "../assets/images/top1.png";
import Top2 from "../assets/images/top2.png";
import Top3 from "../assets/images/top3.png";
import Top4 from "../assets/images/top4.png";
import Bottom1 from "../assets/images/bottom1.png";
import Bottom2 from "../assets/images/bottom2.png";
import Bottom3 from "../assets/images/bottom3.png";
import Bottom4 from "../assets/images/bottom4.png";
import Img1 from "../assets/images/salik.png";
import Img2 from "../assets/images/yasir.jpg";
import Img3 from "../assets/images/salik.png";
import Img4 from "../assets/images/yasir.jpg";
import Arrow from "../assets/images/arrow.svg";
import AwardBg from "../assets/images/award-bg.jpg";
import Award1 from "../assets/images/salik.png";
import Award2 from "../assets/images/yasir.jpg";
import Award3 from "../assets/images/salik.png";
import Award4 from "../assets/images/yasir.jpg";
import bgImage from "../assets/images/bgimg.jpg";
import icon from "../assets/images/tick.svg";
import Testimonial from "../shareable/testimonial";
import FaqSection from "../shareable/faq";
import ContactSection from "../shareable/contact";
import cr1 from "../assets/images/1card.svg";
import cr2 from "../assets/images/2card.svg";
import cr3 from "../assets/images/3card.svg";

const cards = [
  {
    label: "DESIGN",
    color: "design",
    image: cr1,
    title: [
      "We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action.",
    ],
    items: [
      "Strategy",
      "Web Design",
      "User Experience Design",
      "Accessible Interfaces",
    ],
  },
  {
    label: "BUILD",
    color: "build",
    image: cr2,
    title: [
      "We develop high-performing, scalable solutions that work seamlessly for your goals and your customers.",
    ],
    items: [
      "Custom Web Development",
      "CRM/CMS Integration",
      "Shopify Development",
      "Scalable Infrastructure",
    ],
  },
  {
    label: "GROW",
    color: "grow",
    image: cr3,
    title: [
      "We help you attract, engage, and convert customers with data-driven marketing that delivers results.",
    ],
    items: [
      "Paid Campaign Strategy",
      "Content Optimization",
      "Conversion Marketing",
      "Email Campaigns",
    ],
  },
];


const awards = [
  { text: "500+ Happy clients", img: Award1 },
  { text: "10+ Design awards", img: Award2 },
  { text: "$600 M+ funding", img: Award3 },
  { text: "×5 Growth of brand", img: Award4 },
];

const services = [
  { id: 1, title: "Web Development", image: Img1 },
  { id: 2, title: "UI UX Design", image: Img2 },
  { id: 3, title: "Odoo & Custom ERPs", image: Img3 },
  { id: 4, title: "AI ML  ", image: Img4 },
];

const topImages = [Top1, Top2, Top3, Top4];
const bottomImages = [Bottom1, Bottom2, Bottom3, Bottom4];

const serviceTags = [
  "UI/UX Design",
  "SaaS Design",
  "Branding",
  "CRO",
  "Mobile App",
  "Development",
  "MVP Development",
  "Web Design",
];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* 1st Section */}
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>
                 Global Software Agency & Digital Partner for{" "}
                  <AnimatedText />
                </h1>
                <div className="cta-buttons mt-4 d-flex gap-3 flex-wrap">
                  <a href="#strategy-call" className="btn btn-black custom-cta">
                    Book a strategy call{" "}
                    <i className="bi bi-arrow-up-right arrow-icon"></i>
                  </a>
                  <a
                    href="#custom-quote"
                    className="btn btn-outline custom-cta"
                  >
                    Get a custom quote
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <p>
                  We craft scalable, user-focused digital solutions for startups and enterprises. From concept to code — we deliver results that fuel growth.
                </p>
                <div className="founders-rating">
                  <div className="d-flex align-items-center">
                    <div className="founders-stack">
                      <div
                        className="tooltip-wrapper"
                        style={{ left: 0, zIndex: 2 }}
                      >
                        <img
                          src={Yasir}
                          alt="Yasir Irfan"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Yasir Irfan</strong>
                          <br />
                          Founder & CEO @BTS
                          <br />
                          <a
                            href="https://www.linkedin.com/in/yasir-irfan-b988721b7/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                      <div
                        className="tooltip-wrapper"
                        style={{ left: "22px", zIndex: 1 }}
                      >
                        <img
                          src={Salik}
                          alt="Salik Husnaq"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Salik Husnaq</strong>
                          <br />
                          Co-Founder @Somewhere
                          <br />
                          <a
                            href="https://www.linkedin.com/in/salik-husnaq/?originalSubdomain=pk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                    <span className="ms-3" style={{ lineHeight: "15px" }}>
                      Trusted by forward-thinking founders and businesses worldwide.
                    </span>
                  </div>
                  <img src={Clutch} alt="Clutch" className="clutch-logo" />
                  <div className="review-meta">
                    <span className="stars">★★★★★</span>
                    <span className="reviews">11 REVIEWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 2nd Section */}
      <section className="scrolling-images-section py-5">
        <div className="scroll-row scroll-row-1">
          <div className="scroll-track">
            {[...topImages, ...topImages].map((img, index) => (
              <img
                key={`top-${index}`}
                src={img}
                alt={`Top image ${index}`}
                className="scroll-image"
              />
            ))}
          </div>
        </div>
        <div className="scroll-row scroll-row-2 mt-5">
          <div className="scroll-track reverse">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <img
                key={`bottom-${index}`}
                src={img}
                alt={`Bottom image ${index}`}
                className="scroll-image"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="who-we-are-section py-5">
        <div className="container">
          <p className="subheading">(WHO WE ARE)</p>
          <p className="description">
            Bytechsol is a software agency built for modern businesses. We specialize in web development, mobile apps, and custom software, designed to help companies thrive in a fast-paced digital world. At Bytechsol, we blend innovation with simplicity to deliver reliable, performance-driven products.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="services-section py-5">
        <div className="container">
          <p className="ser-subheading">(SERVICES)</p>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-row ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span className="service-index">0{service.id}</span>
              <h2 className="service-title">{service.title}</h2>
              <img src={Arrow} alt="Arrow" className="service-arrow-img" />
              {activeIndex === index && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5th Section */}
      <section
        className="awards-section"
        style={{ backgroundImage: `url(${AwardBg})` }}
      >
        <div className="overlay">
          <div className="awards-heading-container">
            <h2 className="awards-heading">our awards &</h2>
            <br />
            <h2 className="awards-heading2">achievements</h2>
          </div>
          <div className="awards-grid">
            {awards.map((item, idx) => (
              <div className="award-card" key={idx}>
                <img
                  src={item.img}
                  alt={`award-${idx}`}
                  className="award-img"
                />
                <p className="award-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th Section */}
     <section className="scroll-section">
  <div className="card-container">
    {cards.map((card, index) => (
      <div key={index} className={`choose-card ${card.color}`}>
        <div className={`badge ${card.color}`}>{card.label}</div>
        
        {/* Image block */}
        <p className="card-title-text">{card.title[0]}</p>
        <ul>
          {card.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="card-image-wrapper">
          <img src={card.image} alt={card.label} className="card-image" />
        </div>
      </div>
    ))}
  </div>
</section>


      {/* 7th Section */}
      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">
            A dedicated team of professionals
          </h2>
          <div className="group7-columns">
            {[...Array(3)].map((_, idx) => (
              <div className="group7-column" key={idx}>
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">
                  {
                    [
                      "We're about results",
                      "Experienced Team",
                      "Quality Assurance",
                    ][idx]
                  }
                </h3>
                <p className="group7-description">
                  {
                    [
                      "We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.",
                      "In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)",
                      "We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.",
                    ][idx]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial/>
      <FaqSection/>
      <ContactSection/>
          </>
  );
};

export default HeroSection;
