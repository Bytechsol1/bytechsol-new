import "../assets/components-css/home.css";
import "../assets/components-css/WebApp.css"
// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import cr1 from "../assets/images/1card.svg";
// import cr2 from "../assets/images/2card.svg";
// import cr3 from "../assets/images/3card.svg";
// import { useLocation } from "react-router-dom";
import bl from "../assets/images/blacklp.png"
import pl from "../assets/images/planlp.png"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const cards = [
  {
    color: "purple-bg",
    image: bl,
    title: ["Smarter Web & Software."],
    items: [
      "Create apps that are secure and scaling. We provide performance, reliability, and smooth user experiences, whether it is custom web solutions or enterprise systems.",
    ],
  },
  {
    color: "olive-bg",
    image: pl,
    title: [
      "Web Apps Built for Growth",
    ],
    items: [
      "            Our lightning-fast, high-performing applications simplify workflows and increase productivity securely, scalably, and future-ready.",
    ],
  },
    {
    color: "purple-bg",
    image: pl,
    title: [
      "Web Apps Built for Growth",
    ],
    items: [
      "            Our lightning-fast, high-performing applications simplify workflows and increase productivity securely, scalably, and future-ready.",
    ],
  },
  
];

const Practice: React.FC = () => {


const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardsEls = gsap.utils.toArray<HTMLElement>(".card-row");
      const container = containerRef.current;
      if (!container) return;

      // set z-index so new card is always above
      cardsEls.forEach((card, i) => {
        card.style.zIndex = `${i + 1}`;
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${cardsEls.length * window.innerHeight}`,
          scrub: true,
          pin: container,
          pinSpacing: true,
        },
      });

      cardsEls.forEach((card, i) => {
        tl.fromTo(
          card,
          { y: window.innerHeight, opacity: 1 },
          { y: 0, opacity: 1, duration: 1 },
          i
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
 
        <section className="performance-section" style={{ height: "120vh"}} ref={containerRef}>
            <div className="card-container">
            {cards.map((card, index) => (
              <div key={index} className={`card-row ${card.color}`}>
                <div className="card-text">
                <h2 >{card.title[0]}</h2>
                <p >{card.items[0]}</p>
            </div>
                <div className="card-img">
                  <img src={card.image}  />
                </div>
              </div>
            ))}
            </div>
            </section>
  );
};

export default Practice;
