import React, { useState } from "react";
import cl1 from "../assets/images/clutch1.png";
import cl2 from "../assets/images/cluthch2.png";
import up3 from "../assets/images/upsell3.png";
import "../assets/components-css/NewCon.css"
import demo from "../assets/images/odoo.png"
import CircularText from "./CircularText";

const NewCon = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(" Enquiry submitted!");
    setFormData({ fullname: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact8-wrapper">
      <div className="contact8-content">
        {/* Left Content */}
        <div className="contact8-left">
          <h2 className="contact8-title">
            Let&apos;s Build Your <br /> Digital Future
          </h2>
          <p className="para01" style={{width:"90%"}}>
            Ready to accelerate your business with intelligent digital solutions
            that drive results? At Bytechsol, we turn complex
            ideas into user-focused platforms built to scale and succeed.
          </p>

          <div className="contact8-tags">
            <a href="#transform" className="btn-white-blue">
              Start Your Transformation
            </a>
            <a href="#contact" className="btn-white-black">
              Get in Touch
            </a>
          </div>

          {/* Logos */}
          <div className="contact8-logos">
            <img src={cl1} alt="Clutch Award 1" />
            <img src={cl2} alt="Clutch Award 2" />
            <img src={up3} alt="Upwork Award" />
          </div>
        </div>

        {/* Right Form */}
        <div className="contact8-form">
          <div className="contact8-deco">
            <CircularText/>
          </div>


          {/* <CircularText/> */}
          <form onSubmit={handleSubmit}>
            <div className="contact8-row">
              <div className="contact8-field">
                <h6 className="contact8-subtitle">Name</h6>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact8-field">
                <h6 className="contact8-subtitle">Email</h6>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact8-field">
              <h6 className="contact8-subtitle">Subject</h6>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select One</option>
                <option value="Web App">Web App</option>
                <option value="SEO Service">SEO Service</option>
                <option value="Brand Building">Brand Building</option>
                <option value="ERP Service">ERP Service</option>
                <option value="Website">Website Design & Development</option>
                <option value="E-Commerce">E-Commerce Solutions</option>
                <option value="Odoo">Odoo Services</option>
                <option value="AI/ML">AI / ML</option>
                <option value="Custom Web">Custom Web</option>
              </select>
            </div>

            <div className="contact8-field">
              <h6 className="contact8-subtitle">Message</h6>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact8-submit">
              Submit Enquiry
            </button>
            <div className="contact8-alt mt-3" data-aos="fade-up" data-aos-offset="30">
            <span>Prefer email?</span>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewCon;
