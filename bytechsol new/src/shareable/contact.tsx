import React from "react";
import bg from "../assets/images/frm-img.png";
import tick from "../assets/images/contact tick.png";

const serviceTags = [
  "UI/UX Design",
   "Branding",
  "SaaS Design",
  "CRO",
  "Mobile App",
  "Development",
  "Mobile App",
  "MVP Development",
  "Web Design",

]; 

const ContactSection = () => {
  return (
    <section className="contact8-wrapper">
      {/* Background Image */}
      <div className="contact8-bg">
        <img src={bg} alt="Decorative background" className="contact8-bg-img" />
      </div>

      {/* Main Content */}
      <div className="container contact8-content d-lg-flex justify-content-between">
        {/* Left Text Block */}
        <div className="contact8-left">
          <h2 className="contact8-title">
           Let’s Build Your Digital Future
          </h2>
          <h3 className="techsol-heading mb-3 fs-5 fw-3">With ByTechsol – Where Ideas Become Impact</h3>
          <p className="techsol-text lh-lg">Ready to accelerate your business with intelligent digital solutions that drive results? At ByTechsol, we turn complex ideas into user-focused platforms built to scale and succeed.</p>
          <ul className="contact8-list">
            <li>
              <img src={tick} alt="Check icon" />
              <span>Tailored Software – Fits like a glove to your objectives.</span>
            </li>
            <li>
              <img src={tick} alt="Check icon" />
              <span>Speed Optimized – Built for performance.</span>
            </li>
            <li>
              <img src={tick} alt="Check icon" />
              <span>Tech-Driven – Latest frameworks & tools.</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact8-form">
          <div className="contact8-row">
            <input type="text" name="Email" placeholder="Email" required />
            <input type="email" name="Full name" placeholder="Full name" required />
          </div>

          <div className="contact8-row">
            <input type="text" name="budget" placeholder="Project budget" />
            <input type="text" name="referral" placeholder="How did you hear about us?" />
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your product and goals."
          />

          <div className="contact8-subtitle">How can we help you?</div>

          <div className="contact8-tags">
            {serviceTags.map((tag) => (
              <span className="contact8-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <button type="submit" className="contact8-submit">
            Send message
          </button>

          <div className="contact8-alt">
            <span>Prefer email? </span>
            <a href="mailto:hello@wavespace.agency">hello@wavespace.agency</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
