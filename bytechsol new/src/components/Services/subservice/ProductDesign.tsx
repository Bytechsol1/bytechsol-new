import "../../../assets/components-css/ProductDesign.css";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import y1 from "../../../assets/images/yel1.png"
import et from "../../../assets/images/ideat.png";
import lw from "../../../assets/images/lwork.png";
import sp from "../../../assets/images/simplicity.png";
import ma from "../../../assets/images/mobapps.png";
import lp2 from "../../../assets/images/lapto2.jpg"
import v1 from "../../../assets/images/visual1.jpg"
import sc from "../../../assets/images/social.png"
import  { useRef,  useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../../../assets/images/arrow.svg"
import { Consult } from "./New";


gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    color: "f-bg",
    image: et,
    title: ["Brands Built to Last"],
    items: [
      "We develop brand names that gain social credibility, ignite awareness, and develop over time. We mix strategy, design, and messaging to make sure your brand connects and stands out.",
    ],
  },
  {
    color: "s-bg",
    image: lw,
    title: ["Strategy That Speaks"],
    items: [
      "More than research - we find out what is special in your business and create a clear market image. The result? A brand with purpose, direction, and competitive strength.",
    ],
  },
  {
    color: "t-bg",
    image: sp,
    title: ["Design With Meaning"],
    items: [
      "Logos, colors, and pictures that are created to do more than just look good; they are created to tell your story, they are consistent throughout, and they leave a lasting impression.",
    ],
  },
  {
    color: "forth-bg",
    image: ma,
    title: ["Social Presence With Power"],
    items: [
      "We make your social channels brand ambassadors consistent, engaging, and real, building better relationships with each post or interaction.",
    ],
  },
];


const ProductDesign = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};
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


  return (
    <>
        {/* 1st section */}
        <section className="hero-section" style={{backgroundColor: "#002F7A"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 ">
                <h1 className="text-white"data-aos="fade-right">
                   Crafting Brands <br /> That Inspire
                </h1>
                <p className="text-white fs-5"data-aos="fade-down">We help businesses create powerful brand identities that build trust, recognition, and lasting customer connections. From strategy and visuals to messaging and digital presence, our brand building services ensure your business stands out and resonates with the right audience.</p>
                
              </div>
              <div className="col-md-4 d-none d-md-block">
  <img src={y1} alt="Brand Branding" className="img-fluid" data-aos="fade-left"/>
</div>

            </div>
          </div>
        </section>


      <Consult/>

      {/* 3rd section */}
      <div className="productdesign-service-header">
        <h1 className="productdesign-service-title"data-aos="fade-left">
          What’s included in our product <br /> design services
        </h1>
        <a href="#contact" className="productdesign-service-btn"data-aos="fade-right">
          Build Your Product
        </a>
      </div>

  
      <section
        className="performance-section"
        style={{ height: "100vh" }}
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
      <FaqSection />
      <NewCon />
    </>
  );
};

export default ProductDesign;
