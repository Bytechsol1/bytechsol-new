import  { useEffect, useState } from "react";
import "../../../assets/components-css/Aiml.css"; 
import ai from "../../../assets/images/aiml.svg";
import bgImage from "../../../assets/images/bgimg.jpg";
import icon from "../../../assets/images/tick.svg";
import v1 from "../../../assets/images/visual1.jpg";
import sv from "../../../assets/images/servimg.png";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import arrow from "../../../assets/images/arrow.svg"
import { useLocation } from "react-router-dom";


const accordionItemssoft = [
  {
    title: "AI Chatbots",
    description:
      "We create smart chatbots that will automate the interaction with customers, offer real-time assistance, and shorten response time. NLP and LLMs are used to train our chatbots to comprehend queries and provide correct answers to satisfy customers on various platforms.",
  },
  {
    title: "Voice Assistants",
    description:
      "Our voice-based AI-powered assistants are hands-free and conversational to businesses and end users. They are intended to be accessible with the help of high-quality speech recognition and NLP to simplify performance and provide fluid interactions, contributing to better customer engagement and productivity.",
  },
  {
    title: "Machine Learning Models",
    description:
      "We create and train machine learning processes, which fit your business requirements, from predictive analytics to recommendation systems. Our models are built using the power of data to make more effective decisions, automate, and provide quantifiable business value.",
  },
  {
    title: " Natural Language Processing (NLP)",
    description:
      "The NLP solutions process and analyze text and speech to pull out meaning, sentiment, and context. We give businesses the means to enhance communication, analytics, and user experiences through language translation, text classification, and more.",
  },
  {
    title: "Large Language Models (LLMs)",
    description:
      "We use the state-of-the-art LLMs to improve automation, content generation, and conversational AI. These are industry-specific models that have been optimized to perform precise, context-sensitive results, and the models eliminate manual effort and still deliver quality and reliability.",
  },
];

const accordionItemshard = [
    {
    title: "Intelligent Chatbots",
    description:
      " Our chatbots can answer customer questions in real time and respond correctly day and night. They decrease waiting time and automate the support, which leads to increased satisfaction and reduced costs of operations.",
  },
  {
    title: "Multilingual Capabilities",
    description:
      "We create bots that will listen and speak in multiple languages, which will break the language barrier and allow companies to work with international audiences.",
  },
  {
    title: "Voice-Enabled Experiences",
    description:
      "Our AI voice assistants are hands-free interfaces that enable people to achieve tasks, obtain information, and manage systems through simple voice commands.",
  },
  {
    title: "Platform Integration",
    description:
      " We combine chatbots and voice assistants with websites, apps, CRMs, and messaging platforms, and the communication between the customer touchpoints is smooth.",
  },
  {
    title: " Personalized Interactions",
    description:
      " Machine learning means that our assistants learn our preferences and provide personalized conversations based on customer contexts and enhancing interactions and customer relationships.",
  },
];

const AimlSection = () => {
  
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
  setActiveIndex(activeIndex === index ? null : index);
};

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



      {/* 1st Card */}
      <section className="webdesign-section container-fluid py-5" id="ai-ml-llm-nlp-solutions">
       <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading"data-aos="fade-down">AI / ML / LLM / NLP Solutions</h2>
            <p className="webdesign-desc"data-aos="fade-down">
              We also offer strong AI-powered solutions, which combine machine learning, large language model sand natural language processing. Our technologies empower companies to standardize processes, invest in individualized experiences, and discover actionable information that drives innovation, efficiency, and competitive edge.
            </p>

            <div className="webdesign-accordion mt-4"data-aos="fade-right">
              {accordionItemssoft.map((item, index) => (
                <div
                  className="webdesign-accordion-item"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header">
                    <span className="webdesign-accordion-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title">
                      {item.title}
                    </span>
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon ${activeIndex === index ? "rotated" : ""}`}
/>
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center px-4 mt-5 mt-lg-0">
            <img
              src={sv}
              alt="Web design preview"
              className="webdesign-img img-fluid"data-aos="fade-left"
            />
          </div>
        </div>
        </div>
      </section>

      {/* 2nd Card */}
     
      <section className="webdesign-section1 container-fluid py-5" id="ai-chatbots-voice-assistants">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={v1}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">
              AI Chatbots & Voice Assistants
            </h2>
            <p className="webdesign-desc"data-aos="fade-down">
              We develop AI-assisted chatbots and voice assistants that provide human-like, smooth interactions. They are made out of NLP and advanced AI models that enable these to automate customer support, enhance engagement, and offer personalized experiences on web, mobile, and voice-enabled platforms.
            </p>


            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemshard.map((item, index) => (
                <div
                  className="webdesign-accordion-item1"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="webdesign-accordion-header1">
                    <span className="webdesign-accordion-index1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="webdesign-accordion-title1">
                      {item.title}
                    </span>
                    <img
  src={arrow}
  alt="arrow"
  className={`webdesign-icon1 ${activeIndex === index ? "rotated" : ""}`}
/>
                  </div>
                  {activeIndex === index && (
                    <p className="webdesign-accordion-desc1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

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
