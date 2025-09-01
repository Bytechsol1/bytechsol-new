import React from "react";
import com from "../assets/images/comma.png";
import cut from "../assets/images/cut.png";

const Testimonial = () => {
  return (
    <section className="group5-wrapper py-5">
      <div className="container">
        <div className="group5-content">
          <div className="group5-text-block text-center text-md-start">
            <span className="group5-tag d-block mb-2">(Testimonials)</span>
            <h2 className="group5-heading mb-3">See why our clients love us</h2>

            <img src={com} alt="Quotation mark" className="group5-vector mb-3" />

            <p className="group5-quote">
             The custom software your team developed has streamlined our internal operations like never before. It was built exactly to our specs, with performance and scalability in mind. Truly a game-changer for our workflow.
            </p>

            <div className="group5-author-block d-flex align-items-center gap-3 mt-4">
              <img src={cut} alt="Samantha" className="group5-avatar rounded-circle" />
              <div>
                <div className="group5-author-name fw-bold">Olivia Morgan</div>
                <div className="group5-author-role text-muted">
                  Operations Head, TechNexus (UK)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
