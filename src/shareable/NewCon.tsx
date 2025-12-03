import React, { useState } from "react";
import cl1 from "../assets/images/clutch1.png";
import cl2 from "../assets/images/cluthch2.png";
import up3 from "../assets/images/upsell3.png";
import "../assets/components-css/NewCon.css";
import CircularText from "./CircularText";

const NewCon = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = () => {
    let newErrors = { fullname: "", email: "", subject: "", message: "" };
    let isValid = true;

    // Name
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required.";
      isValid = false;
    } else if (formData.fullname.trim().length < 3) {
      newErrors.fullname = "Name must be at least 3 characters.";
      isValid = false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject.";
      isValid = false;
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Enquiry submitted successfully!");
      setFormData({ fullname: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section className="contact8-wrapper">
      <div className="contact8-content">
        {/* Left Section */}
        <div className="contact8-left" data-aos="fade-right">
          <h2 className="contact8-title">
            Let&apos;s Build Your <br /> Digital Future
          </h2>
          <p className="para01" style={{ width: "90%" }}>
            Ready to accelerate your business with intelligent digital solutions
            that drive results? At Bytechsol, we turn complex ideas into
            user-focused platforms built to scale and succeed.
          </p>

          <div className="contact8-tags">
            <a href="#transform" className="btn-white-blue">
              Start Your Transformation
            </a>
            <a href="#contact" className="btn-white-black">
              Get in Touch
            </a>
          </div>

          <div className="contact8-logos">
            <img src={cl1} alt="Clutch Award 1" />
            <img src={cl2} alt="Clutch Award 2" />
            <img src={up3} alt="Upwork Award" />
          </div>
        </div>

        {/* Right Form */}
        <div className="contact8-form" data-aos="fade-left">
          <div className="contact8-deco">
            <CircularText />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact8-row">
              <div className="contact8-field">
                <h6 className="contact8-subtitle">Name</h6>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={errors.fullname ? "error-border" : ""}
                />
                {errors.fullname && (
                  <small className="error-text text-danger">{errors.fullname}</small>
                )}
              </div>

              <div className="contact8-field">
                <h6 className="contact8-subtitle">Email</h6>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-border" : ""}
                />
                {errors.email && (
                  <small className="error-text text-danger">{errors.email}</small>
                )}
              </div>
            </div>

            <div className="contact8-field">
              <h6 className="contact8-subtitle">Subject</h6>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "error-border" : ""}
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
                <option value="Other">Other</option>
              </select>
              {errors.subject && (
                <small className="error-text text-danger">{errors.subject}</small>
              )}
            </div>

            <div className="contact8-field">
              <h6 className="contact8-subtitle">Message</h6>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error-border" : ""}
              />
              {errors.message && (
                <small className="error-text text-danger">{errors.message}</small>
              )}
            </div>

            <button type="submit" className="contact8-submit">
              Submit Enquiry
            </button>

            <div
              className="contact8-alt mt-3"
              data-aos="fade-up"
              data-aos-offset="30"
            >
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
