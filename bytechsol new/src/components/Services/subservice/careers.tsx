import React from "react";
import "../../../assets/components-css/careers.css";
import TrustedBySection from "../../../shareable/trust500";
import wh from "../../../assets/images/career-left1.png";
import pi from "../../../assets/images/career-right1.png";
import pp from "../../../assets/images/career-left2.png";
import lg from "../../../assets/images/career-right2.png";
import wk from "../../../assets/images/career-center.png";
import { FiPaperclip } from "react-icons/fi";

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
          <p className="join01 jn1 fs-2 fw-light  m-6">
            Join the Bytechsol team and help shape the future of technology with
            creativity, passion, and purpose.
          </p>
        </div>
      </section>
      <div className="container">
        <div className="career-parent">
          <div className="career-div1">
            <img src={wh} alt="Work" width={"100%"} height={"100%"} />
          </div>
          <div className="career-div2">
            <img src={pi} alt="Light" width={"100%"} height={"100%"} />
          </div>
          <div className="career-div3">
            <img src={pp} alt="White" width={"100%"} height={"100%"} />
          </div>
          <div className="career-div4">
            <img src={lg} alt="Pink" width={"100%"} height={"100%"} />
          </div>
          <div className="career-div5">
            <img src={wk} alt="PPS" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
      <TrustedBySection />
      {/* 2nd section */}
      <section className="work-job careers-intro">
        <h1 className="careers-intro-title">
          Grow With Us, Not Just Work With Us
        </h1>

        <p className="careers-intro-text">
          At Bytechsol, we believe a career should be more than a paycheck — it
          should inspire you, challenge you, and help you become the best
          version of yourself. Here, you’ll be surrounded by people who
          celebrate your wins, support your ideas, and work together like a true
          family.
        </p>

        <p className="careers-intro-text careers-intro-cta">
          Explore our current opportunities and discover where you can fit in.
          Even if you don’t find the perfect role listed, we’d still love to
          hear from you, because great people make great teams, and we’re always
          excited to welcome new talent.
        </p>
        <form className="application-form">
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
          <div className="form-row">
            <input
              className="application-input"
              placeholder="Mobile no."
              required
              type="tel"
              name="mobile"
            />
            <div className="upload-box">
              <input
                type="text"
                className="application-input border-0"
                placeholder="Upload CV"
                readOnly
              />
              <label className="upload-label">
                <input type="file" className="d-none" name="cvFile" />
                <FiPaperclip size={18} />
              </label>
            </div>
            <div className="upload-box">
              <input
                type="text"
                className="application-input border-0"
                placeholder="Upload Profile Picture"
                readOnly
              />
              <label className="upload-label">
                <input type="file" className="d-none" name="profilePic" />
                <FiPaperclip size={18} />
              </label>
            </div>
          </div>
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
          <div className="form-footer">
            <button type="submit" className="application-submit-btn">
              Apply now
            </button>
            <div className="form-email">
              Prefer email? <br />
             <div className="contact8-alt mt-3">
        
            <div className="form-email">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bytechsol.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    info@bytechsol.com
  </a>
</div>
  </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Careers;
