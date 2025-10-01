import "../../../assets/components-css/webapp.css";
import Testimonial from "../../../shareable/testimonial";
import FaqSection from "../../../shareable/faq";
import TrustedBySection from "../../../shareable/trust500";
import wa from "../../../assets/images/webapp.svg"
import w01 from "../../../assets/images/wd01.png" 
import s02 from "../../../assets/images/sd02.png" 
import p03 from "../../../assets/images/pw03.png"
import s04 from "../../../assets/images/ss04.png"
import e05 from "../../../assets/images/ea05.png"
import ContactSection from "../../../shareable/contact";
import id from "../../../assets/images/ideat.png"
import bl from "../../../assets/images/blacklp.png"
import pl from "../../../assets/images/planlp.png"
import fw from "../../../assets/images/findwk.png"
import React, { useRef,  useState,useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../../../assets/images/arrow.svg"
import { useLocation } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    color: "f-bg",
    image: id,
    title: ["Smarter Web & Software."],
    items: [
      "Create apps that are secure and scaling. We provide performance, reliability, and smooth user experiences, whether it is custom web solutions or enterprise systems.",
    ],
  },
  {
    color: "s-bg",
    image: bl,
    title: [
      "Web Apps Built for Growth",
    ],
    items: [
      "  Our lightning-fast, high-performing applications simplify workflows and increase productivity securely, scalably, and future-ready.",
    ],
  },
    {
    color: "t-bg",
    image: pl,
    title: [
      "Custom Software, Real Results",
    ],
    items: [
      "                  Turn ideas into powerful web and software solutions. We make our applications scale and change so that you stay ahead of the curve.",
    ],
  },
      {
    color: "forth-bg",
    image: fw,
    title: [
      "Web Solutions That Work for You",
    ],
    items: [
      "      We build applications that are user-friendly, secure, and capable of providing the desired performance at any scale.",
    ],
  },
  
];




// ✅ Accordion Data (outside component)
const accordionItemswebdev = [
  { title: "Tailored Development Approach", description: "We develop web apps using a tailored approach depending on your specific objectives, intended audience, and technical needs. Ensuring that your solution is matched to your business goal this provides the highest possible impact and scalability over the long term." },
  { title: " User-Centric Design", description: "We have the end user in mind in our apps, and this is reflected in an easy-to-navigate interface, smooth interactions, and attractive interfaces. Through a focus on usability, we increase customer satisfaction and make sure that we become adopted across all devices." },
  { title: " Scalable Architecture", description: "We create web applications based on scalable, flexible frameworks that can scale as your company expands. No matter how many users you have, or how many, our architecture guarantees reliability, performance, and security at all levels" },
  { title: " Robust Security Measures", description: "In the development of our web applications, security is central to our web application development. Since our application uses encrypted data storage and secure authentication procedures in place, you and your users are assured a tranquil application environment." },
  { title: "Ongoing Support & Optimization", description: "In the development of our web applications, security is central to our web application development. Since our application uses encrypted data storage and secure authentication procedures in place, you and your users are assured a tranquil application environment." },
];

const accordionItemssoft = [
  { title: "Custom-Built Solutions", description: "We develop software that fits uniquely to your unique business needs without bringing in more complexity than is necessary, and no feature is wasted. This customized approach guarantees efficiency, relevance, and maximum return on your investment." },
  { title: "Agile Development Process", description: " Using an agile approach, we are able to maintain flexibility, speedy delivery, and smooth communication during the project. The fact that we work iteratively would enable us to implement the changes easily as they occur as time goes by, and ensure that your software stays in line with your business interests." },
  { title: "Seamless System Integration", description: " Our software is easy to integrate with your existing tools, platforms, and workflows. From CRMs to ERPs, our integration skills will see to it that there is a seamless flow of data and increased productivity without interfering with your business." },
  { title: "Performance & Scalability", description: "Our software products are also designed to be high-performing and are scalable as your business expands. We can make your system reliable and efficient, whether you are dealing with more users, more data, or more functionality." },
  { title: "Long-Term Support & Maintenance", description: " In addition to deployment, we continue to support, update, and upgrade your software to make it optimized, secure,ure, and relevant. Your solution will stay relevant to the changing market conditions and technologies because of our committed maintenance." },
];

const accordionItemspwa = [
  { title: "Cross-Platform Compatibility", description: "PWAs are cross-platform and not only work on tablets, smartphones, and desktops, but they do not need to be installed as separate native applications. This cross-platform feature saves cash and costs, and your company can reach a larger number of users with a high-performance solution." },
  { title: "Offline Functionality", description: "The highly developed caching and offline features allow your users to keep browsing your app even when affected by a lack of internet access. This guarantees continuous user experiences, and PWAs have the potential to be very reliable for businesses that have uneven connectivity among audiences." },
  { title: "App-Like Experience", description: "PWAs deliver a native app experience, sleek navigation, a user-friendly interface, and engagement. It is an interactive experience that leads to customer satisfaction, as well as the absence of downloads to app stores, which decreases friction and raises adoption rates." },
  { title: " Fast Loading Speed", description: "Performance-optimized PWAs are loaded immediately, no matter the speed of the network. Fast loading websites increase your retention levels, lower the bounce rate, and boost your search ranking- giving you increased exposure and conversion to your business." },
  { title: "Easy Installation & Updates", description: "There is no need to install the PWA for a lengthy time, unlike traditional apps, and there is no need to continuously update it manually. Users can add them to their home screens and automatically update them- so your app is always fresh, secure, and up to date." },
];

const accordionItemsaas = [
  { title: " Scalable Architecture", description: "Our SaaS systems have extensively scalable systems, which expand with your organization. Our solutions, whether used by a small number of users or thousands, will perform smoothly, without sacrificing speed or security, and will be the best fit in both startups and enterprises." },
  { title: " Multi-Tenant Solutions", description: "Multi-tenancy is implemented in our SaaS applications, which means that several users or organizations can safely share one platform. This allows being cost-effectiveness, simplified maintenance, and regular updates, but keeps all data private to individual clients." },
  { title: "Secure Cloud Deployment", description: "Our SaaS development focuses on security. In order to protect sensitive data and meet industry standards, we use powerful authentication, encrypted storage, and secure cloud infrastructure." },
  { title: "Custom Features & Integrations", description: "We build SaaS systems using custom features and integrations to your business requirements. Since API connectivity to third-party service integration, we will make sure that your solution fits perfectly into your digital ecosystem." },
  { title: "Continuous Updates & Support", description: "We provide SaaS solutions that are upgraded automatically, and we continuously provide support to keep your platform running efficiently, securely, and in line with the newest technologies, without disturbing your users." },
];

const accordionItemsenter = [
  { title: "Custom Business Solutions", description: " We develop enterprise applications that suit your special business processes. Our solutions measure productivity, bottleneck reduction, and provide your teams with the resources that they need to work effectively, whether it be resource planning, customer management, or workflow automation." },
  { title: "System Integration", description: " Our business applications can easily be consumed by the available tools, ERP, and CRM. We can also assist in breaking the silos of data, duplication, and the free flow of information within your organization by tying fragmented systems together on one platform." },
  { title: "Scalable Architecture", description: " Enterprise applications that we design have a solid, scalable architecture that ensures meeting the growing business requirements. Our apps are very high-performance, secure, and reliable, whether you are adding more users, expanding departments, or dealing with complex data." },
  { title: "Advanced Security & Compliance", description: " Enterprise applications have high priorities in security and compliance. Our effective authentication, role-based access, and encryption, as well as adherence to industry standards to protect sensitive business information, ensure compliance with the regulations." },
  { title: "Ongoing Maintenance & Support", description: "Our team creates regular monitoring and updates, and also gives technical assistance to keep your enterprise application running efficiently, securely, and in line with the changing business requirements- so that you can concentrate on strategic growth." },
];

// ✅ Final Component
const Webapp: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);


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

    // ✅ Skip first card (keep it fixed)
    cardsEls.forEach((card, i) => {
      if (i === 0) return; // leave first card in place
      tl.fromTo(
        card,
        { y: window.innerHeight },
        { y: 0, duration: 0.8 },
        i - 1 // position in timeline (shifted since we skip index 0)
      );
    });
  }, containerRef);

  return () => ctx.revert();
}, []);

  

  return (
    <>
      {/* Hero Section */}
      <section
        className="dg-products-section"
        style={{
          background: "#289DD8 ",
          color: "#fff",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="dg-products-content">
            <h1 className="dg-products-heading"data-aos="fade-right">
              Building Powerful Web Apps & Software for the Digital Era
            </h1>
            <p className="dg-products-description"data-aos="fade-up">
              Transform your business with our web app and software development services. We develop scalable, secure, and usable applications, such as bespoke web applications and enterprise software, and deliver new solutions that enhance performance, expansion, and easy user experiences.
            </p>
          </div>
          <div className="dg02-products02-image w-25 d-none d-lg-block"data-aos="fade-left">
            <img src={wa} alt="UI/UX Illustration" className="img-fluid" />
          </div>
        </div>
      </section>

      <TrustedBySection />

      {/* 1st card */}
      <section className="webdesign-section1 container-fluid py-5" id="web-app-development">
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img src={w01} alt="CMS Development" className="webdesign-img1 img-fluid" data-aos="fade-right"/>
          </div>
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Web App Development</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
              Our web app services provide high-performing, reliable, and scalable applications that meet your business objectives. We specialise in developing apps that streamline workflows, improve customer experiences, and enable business development in industries throughout the planning process to deployment.
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
    <section className="webdesign-section container-fluid py-5" id="software-development">
      <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading"data-aos="fade-down">Software Development</h2>
          <p className="webdesign-desc"data-aos="fade-down">
          Using our software development solutions, business enterprises can experience reliable, scalable, and custom software, a software that is tailor-made to ease operations and enable businesses to go forth. Be it enterprise-level systems or custom applications, we blend innovation with industry best practices to help deliver software that improves performance and helps long-lasting business success.
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
            src={s02}
            alt="Web design preview"
            className="webdesign-img img-fluid"data-aos="fade-left"
          />
        </div>
      </div>
      </div>
    </section>

  {/* 3rd card --------------*/}
      <section className="webdesign-section1 container-fluid py-5" id="progressive-web-apps-pwa">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={p03}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Progressive Web Apps (PWA)</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
          Our Progressive Web App development solution provides quick, dependable, and interactive experiences that are compatible with all devices. PWAs are superior in both web and mobile, and this makes them fast, can be accessed even when offline, and their interface resembles that of an application, making them easy to use and increasing business.
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
        {/* 4th card----- */}
    <section className="webdesign-section container-fluid py-5">
      <div className="container">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 px-5">
          <h2 className="webdesign-heading"data-aos="fade-down">SaaS Application Development</h2>
          <p className="webdesign-desc"data-aos="fade-down">
          Our SaaS application development solutions enable businesses to have scalable, secure, and easy-to-use solutions that meet their individual needs. Our cloud applications simplify workflows, improve collaboration, and ensure accessibility anywhere, regardless of the Internet connection- all of which helps businesses remain competitive in the current fast-paced digital landscape.
          </p>

          <div className="webdesign-accordion mt-4"data-aos="fade-right">
            {accordionItemsaas.map((item, index) => (
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
            src={s04}
            alt="Web design preview"
            className="webdesign-img img-fluid"data-aos="fade-left"
          />
        </div>
      </div>
      </div>
    </section>
    {/* 5th card --------------*/}
      <section className="webdesign-section1 container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 text-center px-4 mb-5 mb-lg-0">
            <img
              src={e05}
              alt="Web design preview"
              className="webdesign-img1 img-fluid"data-aos="fade-right"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 px-5">
            <h2 className="webdesign-heading1"data-aos="fade-down">Enterprise Application Development</h2>
            <p className="webdesign-desc1"data-aos="fade-down">
          Our enterprise application development solutions are powerful, scalable, and secure solutions that can optimize operations, improve effectiveness, and enable businesses to expand. Since automation of workflows to system integration, we develop custom enterprise software that may suit the needs of your organization and drive digital transformation across departments.
            </p>

            <div className="webdesign-accordion1 mt-4"data-aos="fade-left">
              {accordionItemsenter.map((item, index) => (
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
         {/* 3rd section--- */}

         
        <section className="performance-section" style={{  height: "100vh"}} ref={containerRef}>
            <div className="card-container">
            {cards.map((card, index) => (
              <div key={index} className={`card-row ${card.color}`}>
                <div className="card-text">
                <h2 >{card.title[0]}</h2>
                <p >{card.items[0]}</p>
            </div>
                <div className="card-img">
                  <img src={card.image}  />
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

export default Webapp;