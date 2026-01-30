import "../../assets/components-css/Services.css";
// import br from "../../assets/images/brand.png";/
import TrustedBySection from "../../shareable/trust500";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import NewCon from "../../shareable/NewCon";
import ServicesSection from "./subservice/ServiceSections";
import ic from "../../assets/images/icesimg.png";
// import sbg from "../../assets/images/servbg.png"; 
import SolarSystem from "./SolarSystem";
import { Helmet } from "react-helmet";
import { servicesPageFaqs } from "../../shareable/faqData";



const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | BytechSol</title>
        <meta
          name="description"
          content="Explore BytechSol’s professional web development, AI, ERP, and digital services designed to grow your business."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bytechsol.com/services/" />

        {/* Breadcrumb schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bytechsol.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://bytechsol.com/services/"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* 1st section */}
      <section
        className="our-services-section"
      // style={{ backgroundImage: `url(${sbg})` }} // Removed background image as per user request
      >
        <div className="container" style={{ position: 'relative' }}>
          <div className="services-heading-wrapper">
            <h3 className="services-small">OUR </h3>
            <h1 className="services-big">SERV</h1>
            <p className="services-description d-none d-md-block">
              At Bytechsol, we create beautiful websites, interactive eCommerce
              applications, intelligent ERP platforms, AI-driven applications,
              and tailored software to suit the needs of every company, startup,
              creative, and individual user.
            </p>
            <div className="col-lg-5 text-center">
              <div className="services-image">
                <img
                  src={ic}
                  alt="UI/UX Illustration"
                  className="img-fluid unique-service-img"
                />
              </div>
            </div>
          </div>
          {/* Solar System positioned top right */}
          <div style={{ position: 'absolute', top: '0', right: '0', zIndex: 1 }} className="d-none d-lg-block">
            <SolarSystem />
          </div>
        </div>
      </section>

      <TrustedBySection />
      <ServicesSection />

      <Testimonial />
      <FaqSection faqs={servicesPageFaqs} />
      <NewCon />
    </>
  );
};

export default Services;
