import  { useEffect } from "react";
import "../../../assets/components-css/Aiml.css"; 
import ai from "../../../assets/images/aiml.svg";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import { useLocation } from "react-router-dom";
import { Llm } from "./New";



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
      {/* 1st Section */}
      <section
        className="dg-products-section"
        style={{
          background: "linear-gradient(180deg, #575E7C 0%, #2D3536 100%)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="dg-products-container">
            {/* Left: Text */}
            <div className="dg-products-content">
              <h1 className="dg-products-heading text-start"data-aos="fade-down">
  AI & ML Solutions That 
  <br className="d-none d-md-block" /> 
  Redefine Possibilities
</h1>

              <p className="dg-products-description text-start"data-aos="fade-right">
                Our AI and ML solutions will enable businesses to realize the
                strength of data and intelligent automation. Predictive
                analytics, natural language processing, or any other solution,
                we can design to help your business run efficiently and make
                better decisions, and open up new avenues of growth.
              </p>
            </div>

            {/* Right: Image */}
            <div className="dg-products-image">
              <img src={ai} alt="AI/ML Illustration" data-aos="fade-left"/>
            </div>
          </div>
        </div>
      </section>

        <Llm/>

      
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
        <FaqSection />
        <NewCon />
    </>
  );
};

export default AimlSection;