import React, { useMemo, useRef, useState } from "react";
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

type FormData = {
  fullname: string;
  email: string;
  budget: string;
  referral: string;
  message: string;
  selectedTags: string[];
};

type Errors = Partial<Record<keyof FormData, string>>;

const REQUIRED_TAGS = false;

const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const budgetSanitize = (v: string) => v.replace(/[^\d.,]/g, "");

function validate(values: FormData): Errors {
  const errors: Errors = {};

  const name = values.fullname.trim();
  if (!name) errors.fullname = "Full name is required.";
  else if (name.length < 2) errors.fullname = "Please enter at least 2 characters.";
  else if (!nameRegex.test(name))
    errors.fullname = "Only letters, spaces, hyphens, and ' are allowed.";

  const email = values.email.trim();
  if (!email) errors.email = "Email is required.";
  else if (!emailRegex.test(email)) errors.email = "Enter a valid email address.";

  const cleaned = budgetSanitize(values.budget);
  const numeric = Number(cleaned.replace(/,/g, ""));
  if (!cleaned) errors.budget = "Project budget is required.";
  else if (Number.isNaN(numeric)) errors.budget = "Budget must be a number.";
  else if (numeric <= 0) errors.budget = "Budget must be greater than 0.";

  const referral = values.referral.trim();
  if (!referral) errors.referral = "This field is required.";
  else if (referral.length < 3) errors.referral = "Please add a bit more detail.";

  const message = values.message.trim();
  if (!message) errors.message = "Please tell us about your project.";
  else if (message.length < 10)
    errors.message = "Message should be at least 10 characters.";

  if (REQUIRED_TAGS && values.selectedTags.length === 0) {
    errors.selectedTags = "Pick at least one service.";
  }

  return errors;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    budget: "",
    referral: "",
    message: "",
    selectedTags: [],
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => validate(formData), [formData]);
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (!["fullname", "email", "budget", "referral", "message"].includes(name))
      return;

    if (name === "fullname" && /\d/.test(value)) return;

    const nextValue =
      name === "budget" ? value.replace(/[^\d.,$ ]/g, "") : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const toggleTag = (tag: string) => {
    setFormData((prev) => {
      const tags = prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag];
      return { ...prev, selectedTags: tags };
    });
    setTouched((t) => ({ ...t, selectedTags: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      fullname: true,
      email: true,
      budget: true,
      referral: true,
      message: true,
      selectedTags: true,
    });

    if (!isValid) {
      const order: (keyof FormData)[] = [
        "fullname",
        "email",
        "budget",
        "referral",
        "message",
      ];
      const firstInvalidKey = order.find((k) => errors[k]);
      if (firstInvalidKey) {
        const el = document.querySelector<
          HTMLInputElement | HTMLTextAreaElement
        >(`[name="${firstInvalidKey}"]`);
        if (el) el.focus();
      }
      return;
    }

    const output = {
      fullName: formData.fullname.trim(),
      emailAddress: formData.email.trim(),
      projectBudget: Number(
        budgetSanitize(formData.budget).replace(/,/g, "")
      ),
      referralSource: formData.referral.trim(),
      message: formData.message.trim(),
      services: formData.selectedTags.length
        ? formData.selectedTags
        : ["None"],
    };

    console.log("Submitted Form:", output);

    setSuccess(true);
    setFormData({
      fullname: "",
      email: "",
      budget: "",
      referral: "",
      message: "",
      selectedTags: [],
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="contact8-wrapper">
      <div className="contact8-bg">
        <img src={bg} alt="Decorative background" className="contact8-bg-img" />
      </div>

      <div className="container contact8-content">
        <div className="contact8-left">
          <h2 className="contact8-title">Let’s Build Your Digital Future</h2>
          <div className="container">
            <h3 className="bytech02">
              With ByTechsol – Where Ideas Become Impacts
            </h3>
            <p className="bypara01">
              Ready to accelerate your business with intelligent digital
              solutions that drive results? <br /> At ByTechsol, we turn complex
              ideas into user-focused platforms built to scale and succeed.
            </p>
          </div>
          <ul className="contact8-list">
            <li>
              <img src={tick} alt="✓" />{" "}
              <span>Tailored Software – Fits like a glove to your objectives.</span>
            </li>
            <li>
              <img src={tick} alt="✓" />{" "}
              <span>Speed Optimized – Built for performance.</span>
            </li>
            <li>
              <img src={tick} alt="✓" />{" "}
              <span>Tech-Driven – Latest frameworks & tools.</span>
            </li>
          </ul>
          <a href="#contact" className="btn-white-blue">
            Start Your Transformation
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact8-form" onSubmit={handleSubmit} noValidate>
          {/* First row */}
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="contact8-field">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!(touched.fullname && errors.fullname)}
                  aria-describedby="fullname-error"
                  className={`form-control ${
                    touched.fullname && errors.fullname ? "is-invalid" : ""
                  }`}
                  required
                />
                {touched.fullname && errors.fullname && (
                  <div id="fullname-error" className="contact8-error">
                    {errors.fullname}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="contact8-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby="email-error"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                  required
                />
                {touched.email && errors.email && (
                  <div id="email-error" className="contact8-error">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="row g-3 mt-2">
            <div className="col-12 col-md-6">
              <div className="contact8-field">
                <input
                  type="text"
                  name="budget"
                  placeholder="Project budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputMode="decimal"
                  aria-invalid={!!(touched.budget && errors.budget)}
                  aria-describedby="budget-error"
                  className={`form-control ${
                    touched.budget && errors.budget ? "is-invalid" : ""
                  }`}
                  required
                />
                {touched.budget && errors.budget && (
                  <div id="budget-error" className="contact8-error">
                    {errors.budget}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="contact8-field">
                <input
                  type="text"
                  name="referral"
                  placeholder="How did you hear about us?"
                  value={formData.referral}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!(touched.referral && errors.referral)}
                  aria-describedby="referral-error"
                  className={`form-control ${
                    touched.referral && errors.referral ? "is-invalid" : ""
                  }`}
                  required
                />
                {touched.referral && errors.referral && (
                  <div id="referral-error" className="contact8-error">
                    {errors.referral}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-3 contact8-field">
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your product and goals."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!(touched.message && errors.message)}
              aria-describedby="message-error"
              className={`form-control ${
                touched.message && errors.message ? "is-invalid" : ""
              }`}
              required
            />
            {touched.message && errors.message && (
              <div id="message-error" className="contact8-error">
                {errors.message}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="contact8-subtitle mt-3">How can we help you?</div>
          <div
            className="contact8-tags d-flex flex-wrap gap-2"
            role="group"
            aria-labelledby="services-label"
            aria-describedby={
              touched.selectedTags && errors.selectedTags ? "tags-error" : undefined
            }
          >
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className={`contact8-tag ${
                  formData.selectedTags.includes(tag) ? "selected" : ""
                }`}
                onClick={() => toggleTag(tag)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && toggleTag(tag)
                }
                tabIndex={0}
                role="checkbox"
                aria-checked={formData.selectedTags.includes(tag)}
                style={{ cursor: "pointer" }}
              >
                {tag}
              </span>
            ))}
          </div>
          {touched.selectedTags && errors.selectedTags && (
            <div id="tags-error" className="contact8-error">
              {errors.selectedTags}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!isValid}
          >
            Send message
          </button>

          {success && (
            <div className="contact8-success mt-2">
              ✅ Submitted successfully!
            </div>
          )}

          <div className="contact8-alt mt-3">
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
    </section>
  );
};

export default ContactSection;
