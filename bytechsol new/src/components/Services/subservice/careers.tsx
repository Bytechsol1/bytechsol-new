import React from "react";
import "../../../assets/components-css/careers.css";
import TrustedBySection from "../../../shareable/trust500";
import wh from "../../../assets/images/whit.png";
import pi from "../../../assets/images/pink.png";
import pp from "../../../assets/images/pps.png";
import lg from "../../../assets/images/light1.png";
import wk from "../../../assets/images/work.png";

const Careers = () => {
  return (
    <>
      {/* 1st Section */}
      <section className="careers-section">
        <div className="careers-header">
          <h2>Careers</h2>
          <p className="careers-subtitle">
            <strong>
             Growth, Innovation, Collaboration, and a Culture That Inspires!
            </strong>
          </p>
          <p className="jn1 fs-2 fw-light m-6">
            Join the Bytechsol team and help shape the future of technology with creativity, passion, and purpose.
          </p>
        </div>
      </section>

      {/* Image Row */}
      <div className="career-parent">
        <div className="career-div1">
          <img src={wk} alt="Work" height={200} />
        </div>
        <div className="career-div2">
          <img src={lg} alt="Light" height={200} />
        </div>
        <div className="career-div3">
          <img src={wh} alt="White" height={200} />
        </div>
        <div className="career-div4">
          <img src={pi} alt="Pink" height={200} />
        </div>
        <div className="career-div5">
          <img src={pp} alt="PPS" height={200} />
        </div>
      </div>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* 2nd section */}
     <section className="work-job careers-intro">
  <h1 className="careers-intro-title">Grow With Us, Not Just Work With Us</h1>

  <p className="careers-intro-text">
    At Bytechsol, we believe a career should be more than a paycheck — it should inspire you, challenge you, and help you become the best version of yourself. Here, you’ll be surrounded by people who celebrate your wins, support your ideas, and work together like a true family.
  </p>

  <p className="careers-intro-text careers-intro-cta">
    Explore our current opportunities and discover where you can fit in. Even if you don’t find the perfect role listed, we’d still love to hear from you, because great people make great teams, and we’re always excited to welcome new talent.
  </p>

  {/* Form Section */}
  <form className="application-form">
    {/* Row 1 */}
    <div className="form-row">
      <input
        className="application-input"
        placeholder="First Name"
        required
        type="text"
        name="fullname"
      />
      <input
        className="application-input"
        placeholder="Last Name"
        required
        type="text"
        name="fathername"
      />
      <input
        className="application-input"
        placeholder="Father Name"
        required
        type="text"
        name="lastname"
      />
    </div>

    {/* Row 2 */}
    <div className="form-row">
      <input
        className="application-input"
        placeholder="Mobile no."
        required
        type="tel"
        name="mobile"
      />
      <input
        className="application-input"
        placeholder="CV"
        required
        type="url"
        name="cvLink"
      />
      <input
        className="application-input"
        placeholder="Profile picture"
        required
        type="url"
        name="profilePictureLink"
      />
    </div>

    {/* Row 3 - Textareas */}
    <div className="form-row">
      <textarea
        className="application-textarea"
        name="address"
        rows={4}
        placeholder="Complete Address"
        required
      ></textarea>
      <textarea
        className="application-textarea"
        name="about"
        rows={4}
        placeholder="Tell us about yourself"
        required
      ></textarea>
    </div>

    {/* Row 4 - Button & Email */}
    <div className="form-footer">
      <button type="submit" className="application-submit-btn">
        Apply now
      </button>
      <div className="form-email">
        Prefer email?{" "}
        <br />
        <a href="mailto:hello@wavespace.agency">hello@wavespace.agency</a>
      </div>
    </div>
  </form>
</section>

    </>
  );
};

export default Careers;
