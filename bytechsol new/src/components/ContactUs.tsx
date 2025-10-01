import "../assets/components-css/ContactUs.css";
import ContactSection from "../shareable/contact";
import FaqSection from "../shareable/faq";
import WorldMap from "../shareable/WorldMap";
import Testimonial from "../shareable/testimonial";

const ContactUs = () => {
  return (
    <>
      <ContactSection />

      {/* 3rd section --------------- */}
      <section className="belief-behind">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 mb-4"data-aos="fade-right">
              <h1 className="belief-heading fw-bold">
                Let’s Build Something <br />
                Great Together
              </h1>
              <p className="techsol-path-text mt-3 fs-5">
                This is how the path is going to be— easy, flexible, <br /> and
                customized to your needs.
              </p>
            </div>
            <div className="col-lg-6"data-aos="fade-left">
              <div className="belief-item">
                <h2>01 Send us message </h2>
                <p>
                  You send us a message with your idea, challenge, or question.
                  We appreciate you taking the first step — it means a lot.
                </p>
              </div>

              <div className="belief-item">
                <h2>02 We Respond Quickly</h2>
                <p>
                  You won’t be waiting long. We usually reply within a few hours
                  with a thoughtful, helpful response from someone who
                  understands what you need.
                </p>
              </div>

              <div className="belief-item">
                <h2>03 We Talk It Through</h2>
                <p>
                  We’ll set up a short call to understand your goals, timeline,
                  and vision. Then we’ll share a clear proposal with next steps
                  — no confusion, no jargon.
                </p>
              </div>

              <div className="belief-item">
                <h2>04 We Start Building</h2>
                <p>
                  Once you're ready, we begin. We collaborate with you
                  throughout the process of strategy to launch in order to make
                  something meaningful, useful, and long-lasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorldMap />
      <Testimonial />
      <FaqSection />
    </>
  );
};

export default ContactUs;
