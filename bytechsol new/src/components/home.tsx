import React, { useState } from "react";
// import React from "react";
import AnimatedText from "../shareable/AnimatedText";
import "../assets/components-css/home.css";
import Clutch from "../assets/images/clutch.png";
import Yasir from "../assets/images/yasir.jpg";
import Salik from "../assets/images/salik.png";
import Top1 from "../assets/images/salik.png";
import Top2 from "../assets/images/salik.png";
import Top3 from "../assets/images/salik.png";
import Top4 from "../assets/images/salik.png";
import Bottom1 from "../assets/images/yasir.jpg";
import Bottom2 from "../assets/images/yasir.jpg";
import Bottom3 from "../assets/images/yasir.jpg";
import Bottom4 from "../assets/images/yasir.jpg";
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



const cards = [
  {
    label: "DESIGN",
    color: "design",
    title: ["We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action."],
    items: ["Strategy", "Web Design", "User Experience Design", "Accessible Interfaces"],
     
},
  {
    label: "BUILD",
    color: "build",
    title: ["We develop high-performing, scalable solutions that work seamlessly for your goals and your customers."],
    items: ["Custom Web Development", "CRM/CMS Integration", "Shopify Development", "Scalable Infrastructure"],
  },
  {
    label: "GROW",
    color: "grow",
    title: ["We help you attract, engage, and convert customers with data-driven marketing that delivers results."],
    items: ["Paid Campaign Strategy", "Content Optimization", "Conversion Marketing", "Email Campaigns"],
  },
];


const awards = [
  { text: "500+ Happy clients", img: Award1 },
  { text: "10+ Design awards", img: Award2 },
  { text: "$600 M+ funding", img: Award3 },
  { text: "×5 Growth of brand", img: Award4 },
];

const services = [
  { id: 1, title: "UI UX Design", image: Img1 },
  { id: 2, title: "Branding", image: Img2 },
  { id: 3, title: "Marketing", image: Img3 },
  { id: 4, title: "Website", image: Img4 },
];

const topImages = [Top1, Top2, Top3, Top4];
const bottomImages = [Bottom1, Bottom2, Bottom3, Bottom4];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* 1st section  */}
      <main>
        <section className="hero-section ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>
                  Global UI UX design agency digital partner for{" "}
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
                  We deliver globally UI, UX & web design smoothly, without
                  delay, saving your time and money with an efficient process.
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
                      Loved by 500+ Founders
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

      {/* 2nd section  */}
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

      {/* 3rd section  */}
      <section className="who-we-are-section py-5">
        <div className="container">
          <p className="subheading">(WHO WE ARE)</p>
          <p className="description">
            lumix® is a sleek, minimalistic Webflow template designed
            specifically for agencies and creators. At lumix, we prioritize
            clean typography and bold design.
          </p>
        </div>
      </section>

      {/* 4th section  */}
      <section className="services-section py-5">
        <div className="container">
          <p className="ser-subheading">(SERVICES)</p>
          {services.map((service, index) => (
            <div
              className={`service-row ${activeIndex === index ? "active" : ""}`}
              key={service.id}
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

      {/* 5th section  */}
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

    {/* 6th section  */}
          <section className="who-we-are-section py-5">
        <div className="container">
          <p className="subheading">(WHY CHOOSE BYTECHSOL)</p>
          <h1 className="description" style={{fontSize: "45px"}}>Helping you transform your business</h1>
          <p className="description" style={{fontSize: "25px", fontWeight: "200" }}>
                Bold ideas. Smarter strategies. Game-changing results. Let’s elevate your brand and
                unlock its full potential.
          </p>
        </div>
      </section>

<section className="scroll-section">
  <div className="card-container">
    {cards.map((card, index) => (
      <div key={index} className={`choose-card ${card.color}`}>
        <div className={`badge ${card.color}`}>{card.label}</div>

        <p className="card-title-text">{card.title[0]}</p>

        <ul>
          {card.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

    {/* 7th section  */}
    <section className="group7-container">
      <img className="group7-bg" src={bgImage} alt="Background" />
      <div className="group7-content">
        <h2 className="group7-main-title">A dedicated team of professionals</h2>

        <div className="group7-columns">
          <div className="group7-column">
            <img src={icon} alt="Icon" className="group7-icon" />
            <h3 className="group7-heading">We're about results</h3>
            <p className="group7-description">
              We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.
            </p>
          </div>

          <div className="group7-column">
            <img src={icon} alt="Icon" className="group7-icon" />
            <h3 className="group7-heading">Experienced Team</h3>
            <p className="group7-description">
              In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)
            </p>
          </div>

          <div className="group7-column">
            <img src={icon} alt="Icon" className="group7-icon" />
            <h3 className="group7-heading">Quality Assurance</h3>
            <p className="group7-description">
              We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default HeroSection;
