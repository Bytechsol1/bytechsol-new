import "../../assets/components-css/Services.css";
import TrustedBySection from "../../shareable/trust500";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import ContactSection from "../../shareable/contact";
import ServicesSection from "./subservice/ServiceSections";
import ic from "../../assets/images/icesimg.png";

const Services: React.FC = () => {
  return (
    <>
      {/* 1st section */}
      <section className="our-services-section">
        <div className="container">
          <div className="services-heading-wrapper">
            <h3 className="services-small">OUR </h3>
            <h1 className="services-big">SERV</h1>
            <p className="services-description">
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
        </div>
      </section>

      <TrustedBySection />
      <ServicesSection />

      <Testimonial />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Services;
