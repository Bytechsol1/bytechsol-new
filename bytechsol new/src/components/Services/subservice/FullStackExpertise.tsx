import  { useEffect, useState } from "react";
import "../../../assets/components-css/FullStackExpertise.css";
import se from "../../../assets/images/seonew.png"
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import NewCon from "../../../shareable/NewCon";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import os from "../../../assets/images/onseo.png"
import fs from "../../../assets/images/offseo.png"
import ts from "../../../assets/images/techseo.png"
import arrow from "../../../assets/images/arrow.svg"
import { useLocation } from "react-router-dom";


const industryData = [
  {
    title: "Finance & Fintech",
    description:
      "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image: fin,
    dataAos: "fade-right",
  },
  {
    title: "E-Commerce & DTC",
    description:
      "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image: ec,
    dataAos: "fade-down",
  },
  {
    title: "SaaS & B2B Platforms",
    description:
      "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image: pl,
    dataAos: "fade-left",
  },
  {
    title: "Web3, AI & Emerging Tech",
    description:
      "Complex tech doesn’t have to feel complex. We simplify the experience so users understand, explore, and adopt with confidence.",
    image: we,
    dataAos: "fade-right",
  },
  {
    title: "Edtech & Healthtech",
    description:
      "Our platforms allow patients, students, and administrators to use them at any time, from any device.",
    image: ed,
    dataAos: "fade-up",
  },
  {
    title: "Hospitality & Legal Services",
    description:
      "Our approach to design lets users focus on their activities, so services are easy and dependable to use.",
    image: sv,
    dataAos: "fade-left",
  },
];

const accordionItemswebdev = [
  { title: "Title Tags & Meta Descriptions", description: "We craft keyword-rich titles and meta descriptions that are optimized to maximize the number of clicks as well as enhance visibility within the search engines. All the elements are meant to appeal to the users and represent your content properly." },
  { title: "  Header Tags & Content Structure", description: " To make it easy to read and optimized to get more views, our professionals set the content using H1, H2, and H3 tags. Hierarchy is good to enhance readability, user experience, and search engine indexing." },
  { title: " Image Optimization", description: "We perform optimization in the images using alt tags, file names, and compression. This enhances page load time, usability, and ranking opportunities, and visuals should boost user experience." },
  { title: " Internal Linking Strategy", description: "When we develop a smart internal linking structure, we optimize navigation, allocate link equity, and direct search engines to your most valuable pages." },
  { title: "URL Optimization", description: "We generate clean, keyword-rich, SEO-friendly URLs that increase ranking in search and boost user confidence, and ensure that your content is easily shared and accessed." },
];

const accordionItemssoft = [
  { title: "  Backlink Audit & Cleanup", description: " We review your backlink profile and find the harmful or spammy links that can damage rankings. We clean up to get rid of the toxic links and save the authority of your site, and secure a healthier future growth." },
  { title: "High-Quality Link Building", description: "   We achieve backlinks with reputable websites, which are related to industries, by utilizing ethical outreach and content promotion. These good links increase domain authority, visibility, and position on search engines." },
  { title: "  Guest Posting & Outreach", description: " We cooperate with such well-known blogs and publications to post strategic guest posts. This increases brand visibility, gets backlinks, and makes your business a reputable thought leader in your industry." },
  { title: "Social Signals & Mentions", description: "We use social media and other online references to enhance your brand. Favourable indicators and mentions on social media and trusted sources are a boost to greater authority and indirect SEO advantages." },
  { title: "Competitor Link Analysis", description: "   We provide you with competitor backlink strategies by studying the valuable opportunities of your webpage. Through our analysis, we can determine the gaps, repeat effective strategies, and come up with a more effective off-page SEO strategy that achieves more than the competition." },
];

const accordionItemspwa = [
  { title: " Website Speed Optimization", description: "We also optimize scaled-back page loading times through file compression and script optimization, and caching. Quicker websites will lower the bounce rates and enhance user experience, as well as satisfy search engine ranking criteria that will favor speed and responsiveness." },
  { title: "Mobile Responsiveness", description: "Our team makes sure that your site is completely mobile-friendly and provides a smooth cross-platform navigation. The responsive design is not only easily usable but also in line with the mobile-first indexing of Google as a better way of ranking." },
  { title: " Crawlability & Indexing", description: "We optimize robots.txt, XML sitemaps, and site architecture so that search engines crawl and index your content without difficulty. This will ensure that your most crucial pages get the first priority and will be located in a short time." },
  { title: " HTTPS & Security Enhancements", description: " Security is a ranking factor. We have also installed the use of SSL certificates and safe protocols that safeguard the data of users whilst enhancing trust and credibility in the eyes of both search engines and visitors." },
  { title: " Fixing Errors & Redirects", description: " We identify and fix 404 errors, broken links, and redirects. In keeping the site structure clean, we avoid ranking drops and provide the user and the search engine with a smooth, continuous experience." },
];



const ContactUs = () => {
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
    background: "#004E92",
  }}
>
  <div className="container">
  <div className="dg-products-container">
    {/* Left: Text */}
    <div className="dg-products-content">
      <h1 className="dg-products-heading text-start"data-aos="fade-down">
  Drive Traffic, Boost <br /> Rankings, Grow <br /> Smarter with SEO
</h1>

<p className="dg-products-description text-start"data-aos="fade-right">
  Increase your online presence through our customised SEO plans. Raising businesses to the top of the search engines, bringing the right leads on board, and expanding businesses in an environmentally friendly fashion are some of the ways we achieve this by using the techniques of keyword optimization, technical optimization, and content-driven optimization
</p>

<div className="dg-products-buttons">
  <a 
    href="#contact" 
    className="dg-button dg-button-primary d-none d-md-inline-block"data-aos="fade-up"
  >
    Start your website project today <span className="arrow">→</span>
  </a>

  {/* Mobile button (unique inline style) */}
  <a 
    href="#contact" 
    className="d-inline-block d-md-none"
    style={{
      width: "93%",
      padding: "12px 20px",
      borderRadius: "50px",
      backgroundColor: "#289ED8",
      color: "#fff",
      textDecoration: "none",
    }}
  >
Start your website project today <span className="arrow">→</span>
  </a>
</div>

    

    </div>

    {/* Right: Image */}
    <div className="dg-products-image"data-aos="fade-left">
      <img src={se} alt="UI/UX Illustration" />
    </div>
  </div>
  </div>
</section>

     

    {/* 1st card */}
      <section className="webdesign-section1 container-fluid py-5" id="on-page-seo">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img src={os} alt="CMS Development" className="webdesign-img1 img-fluid"data-aos="fade-right" />

          </div>
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">On-Page SEO</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              On-page SEO makes your webpage fully search engine and user-friendly. From content to technical, we will make every part of your site better to increase visibility, engagement, and ranking performance to achieve measurable results and sustainable growth.
            </p>
            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemswebdev.map((item, index) => (
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
                    <p className="webdesign-accordion-desc1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
               {/* 2nd card------- */}
    <section className="webdesign-section container-fluid py-5" id="off-page-seo">
      <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading"data-aos="fade-down">Off-Page SEO</h2>
          <p className="webdesign-desc"data-aos="fade-down">
         Off-page SEO empowers your website with authority and credibility via high-quality backlinks, brand mentions, and reputation building on the Internet. We adopt ethical link construction and outreach measures that enhance ranking, visibility, and earn trust in your industry.
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
            src={fs}
            alt="Web design preview"
            className="webdesign-img img-fluid"data-aos="fade-left"
          />
        </div>
      </div>
      </div>
    </section>

  {/* 3rd card --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="technical-seo-audit">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={ts}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5" >
            <h2 className="webdesign-heading1"data-aos="fade-down">Technical SEO</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
         Technical SEO provides the base to achieve higher rankings that guarantee that your website is fast, secure, and crawlable. We deal with back-end problems that have a negative impact on your search performance, enhancing accessibility, indexing, and user experience in order to get your site competitive.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemspwa.map((item, index) => (
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
     
       {/* 5th section------------- */}
     <section className="industry-section">
      <div className="container">
  <div className="industry-header">
    <h2 className="industry-title"data-aos="fade-down">Turning Your Ideas Into Something Real</h2>
   <p className="ms-2 fs-6"data-aos="fade-up">
  All great digital initiatives begin with a spark, a concept, a challenge, or perhaps a spark of a what-if thought. 
  We are <br /> not the traditional web designers that build websites or applications… 
  we help you create your vision in a way that <br /> feels natural to you and memorable to your users.
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
      <FaqSection />
      <NewCon />
    </>
  );
};

export default ContactUs;
