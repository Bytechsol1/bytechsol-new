import { useEffect } from "react";
import "../../../assets/components-css/Services.css";
import ai from "../../../assets/images/aimlnew.png";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import { useLocation } from "react-router-dom";
import { Llm } from "./New";
import { Helmet } from "react-helmet";
import { aimlFaqs } from "../../../shareable/faqData";



const AimlSection = () => {


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);


  return (
    <>
      <Helmet>
        <title>AI & Machine Learning Solutions | BytechSol</title>
        <meta
          name="description"
          content="Innovate with BytechSol’s AI and ML solutions — intelligent automation, predictive analytics, and custom algorithms for smarter business decisions."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bytechsol.com/services/ai-ml/" />
      </Helmet>

      {/* Hero */}
      <section className="dg-hero-section">
        <div className="dg-hero-left">
          <div className="dg-hero-title-wrap">
            <h1 className="dg-hero-heading" data-aos="fade-down">
              AI &amp; ML Solutions That Redefine Possibilities
            </h1>
          </div>
          <div className="dg-hero-body-wrap">
            <p className="dg-hero-desc" data-aos="fade-right">
              Our AI and ML solutions will enable businesses to realize the
              strength of data and intelligent automation. Predictive analytics,
              natural language processing, or any other solution, we can design
              to help your business run efficiently and make better decisions,
              and open up new avenues of growth.
            </p>
            <a href="#contact" className="dg-hero-cta" data-aos="fade-up">
              Start Your Website Project Today <span className="arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="dg-hero-right aiml-right" style={{ overflow: "visible" }}>
          <img 
            src={ai} 
            alt="AI/ML 3D" 
            style={{
              position: "absolute",
              width: "540px",
              height: "560px",
              top: "0px",
              left: "0px",
              maxWidth: "none",
              zIndex: 10
            }} 
          />
        </div>
      </section>

      <Llm />


      {/* 2nd Section */}
      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">Your Growth, Our Priority</h2>
          <div className="group7-columns">
            {[...Array(3)].map((_, idx) => (
              <div className="group7-column" key={idx}>
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">
                  {[
                    "Focused on What Matters",
                    "A Team by Your Side",
                    "Quality You Can Rely On",
                  ][idx]}
                </h3>
                <p className="group7-description">
                  {[
                    "We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.",
                    "Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).",
                    "We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.",
                  ][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />
      <FaqSection faqs={aimlFaqs} />
      <NewCon />
    </>
  );
};

export default AimlSection;