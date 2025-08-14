import React from "react";
import "../assets/components-css/ContactUs.css"
import ContactSection from "../shareable/contact";
import TrustedBySection from "../shareable/trust500";
import FaqSection from "../shareable/faq";

const ContactUs = () => {
  return (
    <>
    <ContactSection/>
    <TrustedBySection/>
    {/* 3rd section --------------- */}
    <section className="belief-behind">
  <div className="container">
    <div className="row align-items-start">
      <div className="col-lg-6 mb-4">
        <h1 className="belief-heading fw-bold">
          What to expect. <br /> Fourth base on a <br /> first date?
        </h1>
      </div>
      <div className="col-lg-6">
        <div className="belief-item">
          <h2>01 Send us message </h2>
          <p>
            This is like our first date, and we appreciate you are taking first step.
          </p>
        </div>

        <div className="belief-item">
          <h2>02 We wil get back to you soon</h2>
          <p>
           We have elves helping out with correspondence, so we usually respond to inquiries very fast. Unless, you know, the elves are busy.
          </p>
        </div>

        <div className="belief-item">
          <h2>03 Meet and proposal</h2>
          <p>
            We meet. We scope. We issue a proposal. We negotiate. We discuss. We agree. We start. Simple.
          </p>
        </div>

        <div className="belief-item">
          <h2>04 Let’s collaborate</h2>
          <p>
            “I think this is the beginning of a beautiful friendship”. We, too, believe the best yet to come.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* 4th section-------- */}
    <section className="map-section">
  <h1 className="headquarters-title">
    Our Headquarters centrally based <br />in Pakistan &amp; USA
  </h1>
</section>

    <FaqSection/>
    <ContactSection/>
    </>
  );
};

export default ContactUs;
