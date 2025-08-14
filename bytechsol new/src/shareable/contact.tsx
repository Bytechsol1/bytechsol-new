import React from "react";
import bg from "../assets/images/frm-img.png";
import tick from "../assets/images/contact tick.png";

const serviceTags = [
  "UI/UX Design",
  "Website Design",
  "Mobile App",
  "Branding",
  "SaaS Design",
]; // replace or modify as needed

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
            Have a Project? <br /> Let’s talk!
          </h2>
          <ul className="contact8-list">
            <li>
              <img src={tick} alt="Check icon" />
              <span>NDA? Absolutely just ask.</span>
            </li>
            <li>
              <img src={tick} alt="Check icon" />
              <span>We’ll respond in 24 hours — fast & focused.</span>
            </li>
            <li>
              <img src={tick} alt="Check icon" />
              <span>Work with senior UX experts, not juniors.</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact8-form">
          <div className="contact8-row">
            <input type="text" name="fullname" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email" required />
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
