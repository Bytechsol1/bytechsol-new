import React, { useState } from 'react';
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
import Img1 from '../assets/images/salik.png';
import Img2 from '../assets/images/yasir.jpg';
import Img3 from '../assets/images/salik.png';
import Img4 from '../assets/images/yasir.jpg';
import Arrow from '../assets/images/arrow.svg'; // adjust path if needed


const services = [
  { id: 1, title: 'UI UX Design', image: Img1 },
  { id: 2, title: 'Branding', image: Img2 },
  { id: 3, title: 'Website', image: Img3 },
  { id: 4, title: 'E-commerce', image: Img4 },
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
          lumix® is a sleek, minimalistic Webflow template designed specifically for agencies
          and creators. At lumix, we prioritize clean typography and bold design.
        </p>
      </div>
    </section>

    {/* 4th section  */}
            <section className="services-section py-5">
      <div className="container">
        {services.map((service, index) => (
          <div
            className={`service-row ${activeIndex === index ? 'active' : ''}`}
            key={service.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <span className="service-index">0{service.id}</span>
            <h2 className="service-title">{service.title}</h2>
            <img src={Arrow} alt="Arrow" className="service-arrow-img" />
            {activeIndex === index && (
              <img src={service.image} alt={service.title} className="service-image" />
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default HeroSection;
