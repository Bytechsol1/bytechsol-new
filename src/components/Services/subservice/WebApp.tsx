import "../../../assets/components-css/Services.css";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import wa from "../../../assets/images/webapp-3d-iso.png"
import NewCon from "../../../shareable/NewCon";
import bl from "../../../assets/images/blacklp.png"
import pl from "../../../assets/images/planlp.png"
import fw from "../../../assets/images/findwk.png"
import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { Web } from "./New";
import { Helmet } from "react-helmet";
import { webappFaqs } from "../../../shareable/faqData";



gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    color: "f-bg",
    image: bl,
    title: ["Smarter Web & Software."],
    items: [
      "Create apps that are secure and scaling. We provide performance, reliability, and smooth user experiences, whether it is custom web solutions or enterprise systems.",
    ],
  },
  {
    color: "s-bg",
    image: bl,
    title: [
      "Web Apps Built for Growth",
    ],
    items: [
      "  Our lightning-fast, high-performing applications simplify workflows and increase productivity securely, scalably, and future-ready.",
    ],
  },
  {
    color: "t-bg",
    image: pl,
    title: [
      "Custom Software, Real Results",
    ],
    items: [
      "                  Turn ideas into powerful web and software solutions. We make our applications scale and change so that you stay ahead of the curve.",
    ],
  },
  {
    color: "forth-bg",
    image: fw,
    title: [
      "Web Solutions That Work for You",
    ],
    items: [
      "      We build applications that are user-friendly, secure, and capable of providing the desired performance at any scale.",
    ],
  },

];


const Webapp: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500);
      }
    }
  }, [location]);


  const containerRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cardsEls = gsap.utils.toArray<HTMLElement>(".card-row");
      const container = containerRef.current;
      if (!container) return;

      // Ensure each new card comes above the last
      cardsEls.forEach((card, i) => {
        card.style.zIndex = `${i + 1}`;
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${(cardsEls.length - 1) * window.innerHeight}`, // skip first
          scrub: true,
          pin: container,
          pinSpacing: true,
        },
      });

      // ✅ Skip first card (keep it fixed)
      cardsEls.forEach((card, i) => {
        if (i === 0) return; // leave first card in place
        tl.fromTo(
          card,
          { y: window.innerHeight },
          { y: 0, duration: 0.8 },
          i - 1 // position in timeline (shifted since we skip index 0)
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <>
      <Helmet>
        <title>Web App Development | BytechSol</title>
        <meta
          name="description"
          content="From SaaS platforms to interactive dashboards — BytechSol builds secure and high-performance web applications that drive business results."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bytechsol.com/services/web-app/" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="dg-products-section"
        style={{ background: "#0F0C29", color: "#fff" }}
      >
        <div className="dg-products-container">
          <div className="dg-products-content text-start">
            <h1 className="dg-products-heading" data-aos="fade-right">
              Building Powerful Web Apps & Software for the Digital Era
            </h1>
            <p className="dg-products-description" data-aos="fade-up">
              Transform your business with our web app and software development services. We develop scalable, secure, and usable applications, such as bespoke web applications and enterprise software, and deliver new solutions that enhance performance, expansion, and easy user experiences.
            </p>
            <div className="dg-products-buttons" data-aos="fade-left">
              <a href="#contact" className="dg-button dg-button-primary">
                Build your Web App <span className="arrow">→</span>
              </a>
            </div>
          </div>
          <div className="dg-products-image" data-aos="fade-left">
            <img src={wa} alt="Web App 3D" className="floating-3d img-fluid" />
          </div>
        </div>
      </section>

      <Web />

      {/* 3rd section--- */}


      <section className="performance-section service-page-cards" style={{ height: "85vh" }} ref={containerRef}>
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className={`card-row ${card.color}`}>
              <div className="card-text">
                <h2 >{card.title[0]}</h2>
                <p >{card.items[0]}</p>
              </div>
              <div className="card-img">
                <img src={card.image} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonial />
      <FaqSection faqs={webappFaqs} />
      <NewCon />
    </>
  );
};

export default Webapp;