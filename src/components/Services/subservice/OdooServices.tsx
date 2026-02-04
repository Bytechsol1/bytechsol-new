import "../../../assets/components-css/Services.css";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import et from "../../../assets/images/ideat.png";
import lw from "../../../assets/images/lwork.png";
import sp from "../../../assets/images/simplicity.png";
import ma from "../../../assets/images/mobapps.png";
import cp from "../../../assets/images/odoo-3d-final.png";
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Customization } from "./New";
import { Helmet } from "react-helmet";
import { odooFaqs } from "../../../shareable/faqData";



gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    color: "f-bg",
    image: et,
    title: ["ERP Without Limits"],
    items: [
      "Odoo isn’t just software, it’s a growth engine. Our fully customizable ERP solutions break the barriers, streamline all processes, and expand as your business expands. Everything is constructed around the way in which you work rather than vice versa, between planning and implementation.",
    ],
  },
  {
    color: "s-bg",
    image: lw,
    title: ["From Chaos to Clicks"],
    items: [
      "Migration and customization do not need to be messy. We transfer your data, modernize your system,  and develop bespoke workflows without raising an eyelid. Individual modules, individual dashboards, and individual features are all optimized to ensure that your teams are moving at a greater pace and your information is flowing more cleanly.",
    ],
  },
  {
    color: "t-bg",
    image: sp,
    title: ["Brains + Code = Magic"],
    items: [
      "Our technology-functional consultants transform complicated issues into scaled-down systems. We architect and map your processes, build resilient ararchitectu sd train your teams to unlock the full potential of Odoo - so each click has a tangible effect on the business.",
    ],
  },
  {
    color: "forth-bg",
    image: ma,
    title: ["Plug In. Power Up."],
    items: [
      "Integrate Odoo with everything — apps, payment gateways, e-commerce, IoT, or cloud. We communicate your systems with each other, share the data in real time, and become a powerhouse. The result? Fewer silos, smarter decisions, and serious speed.",
    ],
  },
];



const CustomSoftwareDev = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cardsEls = gsap.utils.toArray<HTMLElement>(".card-row");
      const container = containerRef.current;
      if (!container) return;

      cardsEls.forEach((card, i) => {
        card.style.zIndex = `${i + 1}`;
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${(cardsEls.length - 1) * window.innerHeight}`,
          scrub: true,
          pin: container,
          pinSpacing: true,
        },
      });


      cardsEls.forEach((card, i) => {
        if (i === 0) return;
        tl.fromTo(
          card,
          { y: window.innerHeight },
          { y: 0, duration: 0.8 },
          i - 1
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500); // wait a bit for GSAP layout to settle
      }
    }
  }, [location]);


  return (
    <>
      <Helmet>
        <title>Odoo ERP Services | BytechSol</title>
        <meta
          name="description"
          content="Get expert Odoo ERP implementation, customization, and support from BytechSol to streamline your business workflows and reporting."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bytechsol.com/services/odoo-services/"
        />
      </Helmet>

      {/* 1st Section - Hero */}
      <section
        className="dg-products-section"
        style={{
          background: "#0F0C29",
          color: "#fff",
        }}
      >
        <div className="dg-products-container">
          {/* Left: Text */}
          <div className="dg-products-content">
            <h1 className="dg-products-heading text-start" data-aos="fade-left">
              Unlock Business <br /> Potential with Tailored <br /> Odoo
              Solutions
            </h1>
            <p className="dg-products-description text-start" data-aos="fade-right">
              Our Odoo services support businesses in streamlining workflows,
              enhancing efficiency, and experiencing scalable growth with a
              completely customized ERP platform. Since implementation and
              integration to support and upgrades, we provide end-to-end Odoo
              solutions based on your business requirements.
            </p>
          </div>

          {/* Right: Image with 3D Mouse Tilt */}
          <motion.div
            className="dg-products-image"
            data-aos="fade-left"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ perspective: 1000 }}
          >
            <motion.img
              src={cp}
              alt="Odoo 3D"
              className="img-fluid"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseMove={(e) => {
                const { clientX, clientY, currentTarget } = e;
                const { left, top, width, height } = currentTarget.getBoundingClientRect();
                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;
                currentTarget.style.transform = `perspective(1000px) rotate(-45deg) rotateY(${x * 40}deg) rotateX(${-y * 40}deg) scale(1.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotate(-45deg) rotateY(0deg) rotateX(0deg) scale(1)";
              }}
              style={{
                transform: "perspective(1000px) rotate(-45deg)",
                transition: "transform 0.1s ease-out",
                filter: "drop-shadow(0 0 30px rgba(100, 0, 255, 0.4))",
                cursor: "pointer",
                maxWidth: "600px",
                width: "100%",
                // mixBlendMode: "screen" // Removed as image is now transparent
              }}
            />
          </motion.div>
        </div>
      </section>

      <Customization />



      {/* 4th section */}

      <section
        className="performance-section"
        style={{ height: "85vh" }}
        ref={containerRef}
      >
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className={`card-row ${card.color}`}>
              <div className="card-text">
                <h2>{card.title[0]}</h2>
                <p>{card.items[0]}</p>
              </div>
              <div className="card-img">
                <img src={card.image} />
              </div>
            </div>
          ))}
        </div>
      </section>


      <Testimonial />
      <FaqSection faqs={odooFaqs} />
      <NewCon />
    </>
  );
};

export default CustomSoftwareDev;