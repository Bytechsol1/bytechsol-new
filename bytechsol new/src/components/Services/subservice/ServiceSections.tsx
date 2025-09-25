
  import ecb from "../../../assets/images/webecommerce-bg.webp";
  import web from "../../../assets/images/najeeb.png";
  import React, { useState } from "react";
  import "../../../assets/components-css/ServiceSection.css"

  const services = [
    {
      id: 1,
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
    },
    {
      id: 2,
      name: "Custom Web Solution",
      heading: "Custom Web Solution",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: web,
      bgImage: ecb,
    },
    {
      id: 3,
      name: "Web App & Software Development",
      heading: "Web App & Software Development",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: ecb,
      bgImage: web,
    },
    {
      id: 4,
      name: "E Commerce Solutions",
      heading: "E Commerce Solutions",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: web,
      bgImage: ecb,
    },
    {
      id: 5,
      name: "Brand Building",
      heading: "Brand Building",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: ecb,
      bgImage: web,
    },
    {
      id: 6,
      name: "AI ML Services",
      heading: "AI ML Services",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: web,
      bgImage: ecb,
    },
    {
      id: 7,
      name: "SEO Services",
      heading: "SEO Services",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: ecb,
      bgImage: web,
    },
    {
      id: 8,
      name: "ERP Services",
      heading: "ERP Services",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: web,
      bgImage: ecb,
    },
    {
      id: 9,
      name: "Odoo Services",
      heading: "Odoo Services",
      description:
        "Building scalable, innovative products tailored to your business goals...",
      bullets: ["MVP Development", "Agile Iterations", "User-Centric Design"],
      image: ecb,
      bgImage: web,
    },
  ];

  const ServicesSection: React.FC = () => {
    const [activeService, setActiveService] = useState(services[0]);

    return (
      <section className="services-layout">
        <div className="service-parent">
          {/* Left Tabs */}
          <div className="service-div1">
            <div className="services-left">
              <div className="list">
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
          </div>

          {/* Middle Image with fade */}
          <div className="service-div2">
            <img
              key={activeService.id}
              src={activeService.image}
              alt={activeService.name}
              className="services-image fade-in"
            />
          </div>

          {/* Right Content with fade */}
          <div className="service-div3">
            <div
              key={activeService.id}
              className="services-right fade-in"
              style={{ backgroundImage: `url(${activeService.bgImage})` }}
            >
              <div className="services-overlay">
                <div className="content">
                  <h2>{activeService.heading}</h2>
                  <p>{activeService.description}</p>
                  <ul>
                    {activeService.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ServicesSection;
