import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Testimonial from "../../../shareable/testimonial";
import lig from "../../../assets/images/light.png";
import "../../../assets/components-css/development.css";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import wf from "../../../assets/images/wfir1.png";
import wj from "../../../assets/images/wjourn2.png";
import wfu from "../../../assets/images/wfut3.png";
import wt from "../../../assets/images/wtrans4.png";
import ww from "../../../assets/images/wswy5.png";
import wh from "../../../assets/images/whear6.png";
import New from "./New";
import { Helmet } from "react-helmet";
import { webdesignFaqs } from "../../../shareable/faqData";




const industryData = [
  {
    title: "We Listen First",
    description:
      "Before we talk tech, we talk to you. Your goals, your audience, your challenges — we want to hear it all.",
    image: wf,
    dataAos: "fade-right",
  },
  {
    title: "We Map The Journey",
    description:
      "We are not talking tech, we are talking to you. What you want to achieve, who you want to address, and what your issues are, we want to know it all.",
    image: wj,
    dataAos: "fade-down",
  },
  {
    title: "We build For The Future",
    description:
      "Fast. Secure. Scalable. Our tools are the right tools to ensure the solution grows according to your growth.",
    image: wfu,
    dataAos: "fade-left",
  },
  {
    title: "We Create Digital Transformation",
    description:
      "Taking your ideas and turning them into effective digital solutions is what we do best; bring together creativity and technology to achieve designs that are easy to understand, grow to scale, and are resilient enough to last.",
    image: wt,
    dataAos: "fade-right",
  },
  {
    title: "We Stay With You",
    description:
      "There is no goodbye on launch day. We stay because we want to keep things flowing, to keep it moving, and to keep you winning online.",
    image: ww,
    dataAos: "fade-up",
  },
  {
    title: "We Design With Heart",
    description:
      "Not only does it have to look good, but it has to be something that leaves people stopping, smiling, and staying.",
    image: wh,
    dataAos: "fade-left",
  },
];

const Development: React.FC = () => {


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
  <title>Website Design & Development | BytechSol</title>
  <meta
    name="description"
    content="Get high-performance, visually stunning websites tailored to your business goals with BytechSol’s expert design and development team."
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://bytechsol.com/services/website-design-and-development"
  />
</Helmet>

      {/* 1st Section */}
      <section
        className="dg-products-section py-5"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7">
              <div className="dg-products-content text-start">
                <h1 className="dg-products-heading"data-aos="fade-down">
                  Website Design & <br /> Development
                </h1>
                <p className="dg-products-description"data-aos="fade-right">
                  Bytechsol is an organization that provides professional web
                  development and web design services optimized for search
                  engines, mobile-friendliness, and responsiveness. We design
                  e-commerce stores, business websites, and landing pages to
                  generate traffic, interest, and convert the viewers into loyal
                  customers.
                </p>
                <div className="dg-products-buttons"data-aos="fade-up">
                  <a href="#contact" className="dg-button dg-button-primary">
                    Start your website project today{" "}
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-lg-5 text-center">
              <div className="dg-products-image"data-aos="fade-left">
                <img src={lig} alt="UI/UX Illustration" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <New/>
      
      {/* 10th section */}
      <section className="industry-section">
        <div className="container">
        <div className="industry-header">
          <h2 className="industry-title"data-aos="fade-down">
            Turning Your Ideas Into Something Real
          </h2>
          <p className="par12"data-aos="fade-up">
            All great digital initiatives begin with a spark, a concept, a
            challenge, or perhaps a spark of a what-if thought. We are <br />{" "}
            not the traditional web designers that build websites or
            applications… we help you create your vision in a way that <br />
            feels natural to you and memorable to your users.
          </p>
        </div>
        </div>
        <div className="industry-flex-grid">
          {industryData.map((item, index) => (
            <div
              key={index}
              data-aos={item.dataAos}
              className={`industry-flex-card card-${index}`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="industry-masonry-overlay">
                <h3 className="industry-card-title">{item.title}</h3>
                <p className="industry-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonial />
      <FaqSection  faqs={webdesignFaqs}/>
      <NewCon />
    </>
  );
};

export default Development;