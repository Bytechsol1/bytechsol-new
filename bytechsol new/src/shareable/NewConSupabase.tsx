import React, { useState } from "react";
import cl1 from "../assets/images/clutch1.png";
import cl2 from "../assets/images/cluthch2.png";
import up3 from "../assets/images/upsell3.png";
import "../assets/components-css/NewCon.css";
import { createContactEnquiry } from "../lib/supabase";
import CircularText from "./CircularText";

const NewConSupabase = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const validate = () => {
    const newErrors = { fullname: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required.";
      isValid = false;
    } else if (formData.fullname.trim().length < 3) {
      newErrors.fullname = "Name must be at least 3 characters.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject.";
      isValid = false;
    }

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
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validate()) return;

    try {
      setIsSubmitting(true);
      await createContactEnquiry({
        full_name: formData.fullname.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });
      setFormData({ fullname: "", email: "", subject: "", message: "" });
      setSubmitMessage({
        type: "success",
        text: "Enquiry submitted successfully.",
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting your enquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact8-wrapper">
      <div className="contact8-content">
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

            <button
              type="submit"
              className="contact8-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            {submitMessage && (
              <small
                className={`mt-3 d-block ${
                  submitMessage.type === "error" ? "text-danger" : "text-success"
                }`}
              >
                {submitMessage.text}
              </small>
            )}

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

export default NewConSupabase;
