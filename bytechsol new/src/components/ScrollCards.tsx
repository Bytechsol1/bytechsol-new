import "../assets/components-css/home.css";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cr1 from "../assets/images/1card.svg";
import cr2 from "../assets/images/2card.svg";
import cr3 from "../assets/images/3card.svg";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    label: "We Deliver What We Promise",
    color: "design",
    image: cr1,
    title: ["You won’t need to chase us for updates."],
    items: [
      "At Bytechsol, clear timelines and open communication are our foundation. We treat your project like it’s our own — staying flexible when you need to pivot and focused when it’s time to ship. Fast, reliable, and stress-free delivery — just how it should be.",
    ],
  },
  {
    label: "We Think Beyond Just Code",
    color: "build",
    image: cr2,
    title: [
      "Tech is easy — understanding your business is where the magic happens.",
    ],
    items: [
      "We dive deep into your goals to craft solutions that make sense for you, not just the market. From strategy to design to launch, we’re with you at every step — like a tech partner who listens (and delivers).",
    ],
  },
  {
    label: "We Build for the Long Run",
    color: "grow",
    image: cr3,
    title: ["No shortcuts. No quick fixes. Just solid, scalable solutions."],
    items: [
      "We don’t believe in one-size-fits-all. Whatever your needs: AI, web applications, or custom software — we develop tools that can scale with you. Smart, scalable, and built to last — so you don’t have to rebuild six months later.",
    ],
  },
];

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop && location.pathname === "/") {
      const ctx = gsap.context(() => {
        const cardsEls = gsap.utils.toArray<HTMLElement>(".choose-card");
        const container = containerRef.current;
        if (!container) return;

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
            markers: false,
          },
        });

        cardsEls.forEach((card, i) => {
          tl.fromTo(
            card,
            { y: window.innerHeight },
            { y: 0, duration: 1 },
            i
          );
        });
      }, containerRef);

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
      };
    }
  }, [isDesktop, location.pathname]);

  return (
    <>
        <div className="container">
          <div className="group5-content py-5">
          <div className="group5-text-block text-center text-md-start">
            <span className="group5-tag d-block mb-2">(Why Choose bytechsol)</span>
            <h2 className="group5-heading mb-3 fs-3 fw-bold">
              Built by Humans. Backed by Tech. Driven by Purpose.
            </h2>
           <p className="group5-para fs-3"> We’re not just here to code — we’re here to understand your vision, solve real problems, and grow with you. At Bytechsol, your goals become our mission. </p>
          </div>
          </div>
</div>
<section className="scroll-section" ref={containerRef}>
      <div className="container">
        <div className="group5-content">
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
                <div className="card-image-wrapper">
                  <img src={card.image} alt={card.label} className="card-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
            </>
  );
};

export default ScrollCards;
