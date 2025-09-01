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
         Let’s Build Something <br />Great Together
        </h1>
       <p className="techsol-path-text mt-3 fs-5">
  This is how the path is going to be— easy, flexible, <br /> and customized to your needs.
</p>

      </div>
      <div className="col-lg-6">
        <div className="belief-item">
          <h2>01 Send us message  </h2>
          <p>
            You send us a message with your idea, challenge, or question. We appreciate you taking the first step — it means a lot.
          </p>
        </div>

        <div className="belief-item">
          <h2>02 We Respond Quickly</h2>
          <p>
           You won’t be waiting long. We usually reply within a few hours with a thoughtful, helpful response from someone who understands what you need.
          </p>
        </div>

        <div className="belief-item">
          <h2>03 We Talk It Through</h2>
          <p>
           We’ll set up a short call to understand your goals, timeline, and vision. Then we’ll share a clear proposal with next steps — no confusion, no jargon.
          </p>
        </div>

        <div className="belief-item">
          <h2>04 We Start Building</h2>
          <p>
           Once you're ready, we begin. We collaborate with you throughout the process of strategy to launch in order to make something meaningful, useful, and long-lasting.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* 4th section-------- */}
 <section className="map-section">
  <h1 className="headquarters-title">
    Our Headquarters centrally based <br /> in Pakistan &amp; USA
  </h1>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.389350522085!2d67.1344988282132!3d24.921880055147568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3390010ec8ea1%3A0x2df63119890b987!2sAlfajar%20Automobiles!5e0!3m2!1sen!2s!4v1755890247488!5m2!1sen!2s"
    width="100%"
    height="550"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>


    <FaqSection/>
    <ContactSection/>
    </>
  );
};

export default ContactUs;
