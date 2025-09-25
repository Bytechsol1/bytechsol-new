import "../../../assets/components-css/ProductDesign.css";
import TrustedBySection from "../../../shareable/trust500";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import ContactSection from "../../../shareable/contact";
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



const accordionItemsUX = [
  { title: "Market Research & Analysis", description: "We do extensive competitor research, industry, and market research to identify opportunities that will form a successful strategy. This makes your brand get into the market clearly and confidently." },
  { title: "Audience Targeting & Personas", description: " We create comprehensive customer personas in terms of demographics, behavior, and psychology. This allows your brand to reach out to the appropriate audience and create campaigns that will have a strong impact.                           " },
  { title: "Value Proposition Development", description: " We assist in building a robust value proposition that expresses why customers are supposed to use your brand. This message brings out the best in you and your uniqueness, and this creates long-term loyalty and preference." },
  { title: "Brand Positioning Statement", description: "We create effective positioning statements that establish the position of your brand in the industry. This is a clear way to make internal and external audiences know your essence." },
  { title: "Competitive Differentiation", description: "We create effective positioning statements that establish the position of your brand in the industry. This is a clear way to make internal and external audiences know your essence." },
];

const accordionItemsldesig = [
  { title: " Logo Concept & Design", description: " Our team designs unique and professional logos, which reflect your brand. Every logo is designed in such a way that it is memorable, versatile, a nd timeless." },
  { title: "Color Palette & Typography", description: " We select brand colors and fonts thoughtfully to match your values. These graphic messages create awareness and uniformity both online and offline." },
  { title: " Brand Style Guidelines", description: "We prepare comprehensive brand manuals that provide consistency in design across all the channels. This will ensure your brand is always professional, regardless of the place it is posted." },
  { title: " Iconography & Graphics", description: "We design your own icons, illustrations, and graphic materials that supplement your visual storytelling. Such distinct images help to support your image and enhance brand recognition." },
  { title: "Packaging & Print Design", description: " We create innovative print materials, including packaging, stationery, and more, that give your brand image. These material resources boost the credibility and trust of the customers." },
];
const accordionItemssmb = [
  { title: " Profile Optimization & Consistency", description: "We develop and streamline social media accounts that are a consistent representation of your brand within each platform. Logos to bios and graphics, our branding would be all about professionalism, recognition, and trust- to help you shine and get the right audience.." },
  { title: "Content Strategy & Visual Identity", description: "Our content team creates strategies and content that suit your audience and industry and fit in with your brand voice. We create attention-grabbing graphics, posts, and stories that create a single visual image and spur engagement, reach, and long-term loyalty." },
  { title: " Brand Messaging & Tone of Voice", description: "Consistency in communication builds trust. We establish your own tone of voice and create brand messages that appeal to your target audience, and all captions, comments, and replies strengthen your digital presence and audience relationships." },
  { title: " Engagement & Community Building", description: "Social media branding does not just exist and look good; it is about discussions. We coordinate engagement plans that promote meaningful communication, strong communities, and brand advocacy, converting casual followers into lifelong supporters who appreciate your brand." },
  { title: " Analytics & Performance Insights", description: "The metrics of success that we trace are reach, engagement, and growth to capture key branding metrics. Using our insights-driven approach will help enhance strategies, so your social media branding is constantly improving and has the best impact on your business." },
];

const ProductDesign = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  const containerRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect is preferred for GSAP animations to run synchronously
  // after the DOM is updated, preventing animation conflicts on route changes.
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


      <TrustedBySection />

      {/* Accordion Section */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={lp2}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Brand Strategy & Consulting</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
             We help companies to develop a powerful strategy that will define what and who they are and how they should be viewed in the market.
              </p>
            <div className="webdesign-accordion1 mt-4">
              {accordionItemsUX.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"data-aos="fade-left"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">{item.title}</span>
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
/>
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>


      {/* 2nd accordion */}
       <section className="webdesign-section container-fluid py-5">
        <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading"data-aos="fade-down">Logo Design & Visual Identity </h2>
          <p className="webdesign-desc"data-aos="fade-down">
           We create special logos and visual systems that will represent your personality and create a strong impression at all customer touchpoints.
          </p>

          <div className="webdesign-accordion mt-4"data-aos="fade-right">
            {accordionItemsldesig.map((item, index) => (
              <div
                className="webdesign-accordion-item"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="webdesign-accordion-header">
                  <span className="webdesign-accordion-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="webdesign-accordion-title">{item.title}</span>
                  <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon ${activeIndex === index ? "rotated" : ""}`}
/>
                </div>
                {activeIndex === index && (
                  <p className="webdesign-accordion-desc">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0">
          <img
            src={v1}
            alt="Web design preview"
            className="webdesign-img img-fluid"data-aos="fade-left"
          />
        </div>
      </div>
      </div>
    </section>
     {/* 2nd accordion */}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={sc}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Social Media Branding</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
            Customers tend to interact with your business first through your social media. Your brand will be developed by us to be strong, consistent, and interesting on all platforms. Our tactics enhance awareness, credibility, and viewers' interest, be it through images or text.
              </p>
            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemssmb.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">{item.title}</span>
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
/>
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

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
      <ContactSection />
    </>
  );
};

export default ProductDesign;
