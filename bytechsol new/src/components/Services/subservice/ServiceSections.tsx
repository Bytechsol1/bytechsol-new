import ecb from "../../../assets/images/webecommerce-bg.webp";
import web from "../../../assets/images/najeeb.png";
import React, { useState } from "react";
import "../../../assets/components-css/ServiceSection.css";
import arr from "../../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import CircularText from "../../../shareable/CircularText";
import cmsbg from "../../../assets/images/ui ux 3.png"
import ecm from "../../../assets/images/ecomser.png"
import ecmbg from "../../../assets/images/ecombg.png"
import br from "../../../assets/images/brbui.png"
import brbg from "../../../assets/images/bb-bg.png"
import erp from "../../../assets/images/erpimg.png"
import erpbg from "../../../assets/images/erpbg.png"
import aml from "../../../assets/images/aimlimg.png"
import amlbg from "../../../assets/images/aibg.png"
import odo from "../../../assets/images/odoo.png"
import odobg from "../../../assets/images/odoobg.png"
import seo from "../../../assets/images/seoimg.png"
import seobg from "../../../assets/images/seobg.png"
import wb from "../../../assets/images/webapp.png"
import webbg from "../../../assets/images/webbg.png"
import cmsser from "../../..//assets/images/cms-ser.png"
import { HashLink } from "react-router-hash-link";



const services = [
    {
  id: 1,
  name: "Odoo Services",
  heading: "Odoo Services",
  description:
    "We offer Odoo migration, customization, and consultancy services to streamline your business operations. Our professional Odoo developers provide easy transitions, technical efforts, and integrations that are SEO friendly to provide large-scale efficiency.",
  bullets: [
    "Odoo Migration & Customization",
    "Odoo Techno-Functional Consultancy",
    "Odoo Module Development",
    "Odoo Integration Services",
  ],
  image: odo,
  bgImage: odobg,
  pagepath : "/services/odoo-services"
},

  {
    id: 2,
    name: "Custom Web Solution",
    heading: "Custom Web Solution",
    description:
      "We use our custom web development services, which can fit your business requirements. We offer custom CMS systems as well as advanced integrations and SEO optimized web solutions that optimize performance and increase your online exposure.",
    bullets: [
      "Custom Web Solutions",
      "Custom CMS Development",
      "API Development & Integration",
      "Third-Party Service Integration",
      "Custom Plugin & Module Development",
    ],
    image: cmsser,
    bgImage: cmsbg,
    pagepath : "/services/custom-web"
  },
  {
    id: 3,
    name: "Web App & Software Development",
    heading: "Web App & Software Development",
    description:
      "Our specialization lies in secure, scalable software solutions and the development of websites. Our development cycle guarantees performance speed, a friendly user interface, and leverages an SEO-friendly structure that generates business growth and customer satisfaction.",
    bullets: [
      "Web App Development",
      "Software Development",
      "Progressive Web Apps (PWA)",
      "SaaS Application Development",
      "Enterprise Application Development",
    ],
    image: wb,
    bgImage: webbg,
    pagepath : "/services/web-app"
  },
  {
    id: 4,
    name: "E-Commerce Solutions",
    heading: "E-Commerce Solutions",
    description:
      "Our e-commerce development services enable an enterprise to sell online. Our online stores are SEO friendly, have a secure payment method, an airtight responsive design, and have a smooth user experience to guarantee more conversions and a delightful shopping experience.",
    bullets: [
      "E-Commerce Store Setup",
      "Shopify Store Setup",
      "WooCommerce Development",
      "Payment Gateway Integration",
      "Marketplace Development",
    ],
    image: ecm,
    bgImage: ecmbg,
    pagepath : "/services/E-Commerce-solutions"
  },
  {
    id: 5,
    name: "Brand Building",
    heading: "Brand Building",
    description:
      "We assist companies in enhancing their brand with brand-building services. Whether it is losing out in logo design or a well-planned brand strategy, we bring with us effective brand identities that are SEO-optimized, resonate with your audience, and place you above the competition.",
    bullets: [
      "Brand Strategy & Consulting",
      "Logo Design & Visual Identity",
      "Social Media Branding",
    ],
    image: br,
    bgImage: brbg,
    pagepath : "/services/brand-building"
  },
  {
    id: 6,
    name: "SEO Services",
    heading: "SEO Services",
    description:
      "Our professional search engine optimization services enhance your search engine ranking with Google, targeted traffic, and more conversions. Our expertise lies in on-page SEO, off-page optimization, and technical SEO that will position your business to own search results.",
    bullets: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO Audit",
      "Local SEO Optimization",
      "SEO Content Writing",
    ],
    image: seo,
    bgImage: seobg,
    pagepath : "/services/seo-service"
  },
  {
    id: 7,
    name: "AI / ML Services",
    heading: "AI / ML Services",
    description:
      "We provide world-edge artificial intelligence and machine learning technologies such as chatbots, NLP models, and predictive analytics. Our artificial intelligence development services ensure automation of the processes, improved customer experience, as well as a way to promote data-driven business development.",
    bullets: ["AI/ML / LLM / NLP Solutions", "AI Chatbots & Voice Assistants"],
    image: aml,
    bgImage: amlbg,
    pagepath : "/services/Ai-Ml"
  },
  {
    id: 8,
    name: "ERP Services",
    heading: "ERP Services",
    description:
      "Our tailor-made ERP development solutions make processes more efficient, help to manage data centrally, and optimize work. ERP systems that we design are specific to your processes to make improved decisions and achieve greater productivity.",
    bullets: [
      "Custom ERP Implementation & Development",
      "ERP Integration with Existing Systems",
      "ERP Maintenance & Support",
    ],
    image: erp,
    bgImage: erpbg,
    pagepath : "/services/ERP-service"
},
  {
    id: 9,
    name: "Website Design & Development",
    heading: "Website Design & Development",
    description:
      "We design eye-catching, easy-to-use, and mobile-friendly websites that combine your business objectives with your brand identity.Whether you need a new website or improvements to your current one, we offer essential services to enhance the performance,responsiveness, and increase your company with maximum visibilityand customer response.",
    bullets: [
      "UI / UX Design",
      "CMS Design & Development",
      "Landing Page Design",
      "Website Maintenance & Support",
      "Responsive Website Redesign",
    ],
    image: web,
    bgImage: ecb,
    pagepath : "/services/website-design-and-development"
  },
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="services-layout">
      <div className="container-fluid">
        <div className="row">
          {/* Left Tabs */}
<div className="col-lg-3 col-md-12 service-div1">
  <div className="services-left">
    {services.map((s) => (
      <div
        key={s.id}
        className={`services-tab ${
          activeService.id === s.id ? "active" : ""
        }`}
        onClick={() => setActiveService(s)}
      >
        {s.name}
      </div>
    ))}
  </div>
</div>

{/* Middle Image (hidden on mobile via CSS) */}
<div className="col-lg-4 col-md-12 service-div2">
  <img
    key={activeService.id}
    src={activeService.image}
    alt={activeService.name}
    className="services-image fade-in img-fluid"
  />
</div>

{/* Right Content */}
<div className="col-lg-5 col-md-12 service-div3">
  <div
    key={activeService.id}
    className="services-right fade-in"
    style={{ backgroundImage: `url(${activeService.bgImage})` }}
  >
    <div className="services-overlay">
      <div className="services-content">
        <Link className="custom-link" to={activeService.pagepath}>    
        <h2 className="ser-new-heading fw-bold">{activeService.heading} <img src={arr} alt="link" className="arr2"/></h2></Link>
        <p className="mb-3">{activeService.description}</p>
<ul className="mb-0">
  {activeService.bullets.map((b, i) => {
    // create safe id from bullet text (slugify)
    const sectionId = b
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")   // replace spaces/specials with "-"
      .replace(/(^-|-$)/g, "");     // trim dashes

    return (
<li className="ul" key={i}>
  <HashLink
    smooth
    to={`${activeService.pagepath}#${sectionId}`}
    className="bullet-link custom-link2"
  >
    {b}
  </HashLink>
</li>
    );
  })}
  
</ul>
<CircularText/>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
