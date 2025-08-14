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
              SELF-DEVELOPMENT, PROGRESSION, A COHESIVE WORK ENVIRONMENT AND AN
              ESTEEMED ORGANIZATIONAL CULTURE!
            </strong>
          </p>
          <p className="jn1 fs-3 fw-light m-6">
            Join the global salsoft team and help redefine innovation and
            digitization.
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
  <h1 className="careers-intro-title">Working with us isn’t a job</h1>

  <p className="careers-intro-text">
    It's the transition towards a rewarding career with unlimited possibilities for growth.
    Surround yourself with dedicated and motivated people like yourself who work together
    not just as colleagues and a team, but as a family - as the Bytechsol family.
  </p>

  <p className="careers-intro-text careers-intro-cta">
    Browse through our current openings and get in touch now. If you don't find any listed
    opening relevant to your profile, feel free to reach out anyway, and tell us why you
    might be a good fit.
  </p>

  {/* Form Section */}
  <form className="application-form">
    {/* Row 1 */}
    <div className="form-row">
      <input
        className="application-input"
        placeholder="Full name"
        required
        type="text"
        name="fullname"
      />
      <input
        className="application-input"
        placeholder="Father name"
        required
        type="text"
        name="fathername"
      />
      <input
        className="application-input"
        placeholder="Last name"
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
