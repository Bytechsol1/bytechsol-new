import "../assets/components-css/home.css";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import odooHomeStatic from "../assets/images/odoonew.png";
import aiMlHomeImage from "../assets/images/aimln.png";
import webDevImage from "../assets/images/webdevn1.png";
import webDesignImage from "../assets/images/webdesn1.png";
import arr from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    label: "Odoo Services",
    color: "card-gradient-1",
    image: odooHomeStatic,
    title: ["Odoo Services"],
    items: [
      "We offer Odoo migration, customization, and consultancy services to streamline your business operations. Our professional Odoo developers provide easy transitions, technical efforts, and integrations that are SEO friendly to provide large-scale efficiency.",
    ],
    bullets: [
      "Odoo Migration & Customization",
      "Odoo Techno-Functional Consultancy",
      "Odoo Module Development",
      "Odoo Integration Services",
      "Odoo Maintenance & Support",
    ],
    link: "/services/odoo-services/",
  },
  {
    label: "AI / ML Services",
    color: "card-gradient-2",
    image: aiMlHomeImage,
    title: ["AI / ML Services"],
    items: [
      "We provide world-edge artificial intelligence and machine learning technologies such as chatbots, NLP models, and predictive analytics. Our artificial intelligence development services ensure automation of the processes, improved customer experience, as well as a way to promote data-driven business development.",
    ],
    bullets: [
      "AI / ML / LLM / NLP Solutions",
      "AI Chatbots & Voice Assistants",
    ],
    link: "/services/ai-ml/",
  },
  {
    label: "Web App & Software Development",
    color: "card-gradient-3",
    image: webDevImage,
    title: ["Web App & Software Development"],
    items: [
      "Our specialization lies in secure, scalable software solutions and the development of websites. Our development cycle guarantees performance speed, a friendly user interface, and leverages an SEO-friendly structure that generates business growth and customer satisfaction.",
    ],
    bullets: [
      "Web App Development",
      "SaaS Application Development",
      "Software Development",
      "Enterprise Application Development",
      "Progressive Web Apps (PWA)",
    ],
    link: "/services/web-app/",
  },
  {
    label: "Web Design & Development",
    color: "card-gradient-4",
    image: webDesignImage,
    title: ["Website Design & Development"],
    items: [
      "We design eye-catching, easy-to-use, and mobile-friendly websites that combine your business objectives with your brand identity.Whether you need a new website or improvements to your current one, we offer essential services to enhance the performance,responsiveness, and increase your company with maximum visibilityand customer response.",
    ],
    bullets: [
      "UI / UX Design",
      "CMS Design & Development",
      "Landing Page Design",
      "Website Maintenance & Support",
      "Responsive Website Redesign",
    ],
    link: "/services/website-design-and-development/",
  },
];

const ScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cardsEls = gsap.utils.toArray<HTMLElement>(".card-row");
      const container = containerRef.current;
      if (!container) return;

      // set z-index so later cards appear on top
      cardsEls.forEach((card, i) => {
        card.style.zIndex = `${i + 1}`;
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${(cardsEls.length - 1) * window.innerHeight}`, // exclude first card
          scrub: true,
          pin: container,
          pinSpacing: true,
          invalidateOnRefresh: true, // Handle resizes better
        },
      });

      // skip animating the first card → keep it fixed
      cardsEls.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card,
          { y: window.innerHeight },
          { y: 0, duration: 0.8 },
          i - 1 // stagger
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Force refresh after mount to account for layout shifts from images above
  React.useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000); // Wait 1s for all assets/layout to settle
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Heading outside the pinned animation */}
      {/* <div className="container">
        <div className="group5-content py-5">
          <div className="group5-text-block text-center text-md-start">
            <span className="group5-tag d-block mb-2" data-aos="fade-down">
              (Why Choose bytechsol)
            </span>
            <h2 className="group5-heading mb-3 fs-3 fw-bold" data-aos="fade-up">
              Built by Humans. Backed by Tech. Driven by Purpose.
            </h2>
            <p className="group5-para fs-3" data-aos="fade-up">
              We’re not just here to code — we’re here to understand your
              vision, solve real problems, and grow with you. At Bytechsol, your
              goals become our mission.
            </p>
          </div>
        </div>
      </div> */}

      {/* Only cards are pinned & animated */}
      <section
        className="performance-section"
        style={{ height: "85vh" }}
        ref={containerRef}
      >
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className={`card-row ${card.color}`}>
              <div className="card-text">
                {card.link ? (
                  <Link to={card.link} className="card-heading-link">
                    <h2>
                      {card.title[0]}
                      <img src={arr} alt="arrow" className="card-arrow" />
                    </h2>
                  </Link>
                ) : (
                  <h2>{card.title[0]}</h2>
                )}
                <p>{card.items[0]}</p>
                {/* Render Bullets if available */}
                {card.bullets && (
                  <ul className="card-bullets">
                    {card.bullets.map((b, i) => {
                      const sectionId = b
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "");
                      return (
                        <li key={i} className="bullet-item">
                          <HashLink
                            smooth
                            to={`${card.link}#${sectionId}`}
                            className="bullet-link2"
                          >
                            {b}
                          </HashLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <div className="card-image-container">
                {card.video ? (
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="card-media"
                    aria-label={card.label}
                  />
                ) : (
                  <img src={card.image} alt={card.label} className="card-media" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ScrollCards;
