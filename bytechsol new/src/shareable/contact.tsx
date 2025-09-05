import React, { useEffect, useMemo, useRef, useState } from "react";
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

const REQUIRED_TAGS = false; // flip to true if at least 1 tag must be selected

const nameRegex = /^[A-Za-zÀ-ÿ' -]+$/; // letters, accents, apostrophes, spaces, hyphens
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // pragmatic email check (kept simple)
const budgetSanitize = (v: string) => v.replace(/[^\d.,]/g, ""); // keep digits, comma, dot

function validate(values: FormData): Errors {
  const errors: Errors = {};

  // Full name
  const name = values.fullname.trim();
  if (!name) errors.fullname = "Full name is required.";
  else if (name.length < 2) errors.fullname = "Please enter at least 2 characters.";
  else if (!nameRegex.test(name)) errors.fullname = "Only letters, spaces, hyphens, and ' are allowed.";

  // Email
  const email = values.email.trim();
  if (!email) errors.email = "Email is required.";
  else if (!emailRegex.test(email)) errors.email = "Enter a valid email address.";

  // Budget (allow “$5,000” or “5000” or “5,000.00”)
  const cleaned = budgetSanitize(values.budget);
  const numeric = Number(cleaned.replace(/,/g, ""));
  if (!cleaned) errors.budget = "Project budget is required.";
  else if (Number.isNaN(numeric)) errors.budget = "Budget must be a number.";
  else if (numeric <= 0) errors.budget = "Budget must be greater than 0.";

  // Referral
  const referral = values.referral.trim();
  if (!referral) errors.referral = "This field is required.";
  else if (referral.length < 3) errors.referral = "Please add a bit more detail.";

  // Message
  const message = values.message.trim();
  if (!message) errors.message = "Please tell us about your project.";
  else if (message.length < 10) errors.message = "Message should be at least 10 characters.";

  // Tags (optional)
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

  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [success, setSuccess] = useState(false);

  // compute errors whenever data changes
  const errors = useMemo(() => validate(formData), [formData]);
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const firstInvalidRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // For TS safety
    if (!["fullname", "email", "budget", "referral", "message"].includes(name)) return;

    // Restrict numbers in full name (soft validation already happens in validate)
    if (name === "fullname" && /\d/.test(value)) return;

    // Light sanitization for budget while typing (keep user-friendly)
    const nextValue = name === "budget" ? value.replace(/[^\d.,$ ]/g, "") : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // mark everything as touched to show errors, if any
    setTouched({
      fullname: true,
      email: true,
      budget: true,
      referral: true,
      message: true,
      selectedTags: true,
    });

    if (!isValid) {
      // focus the first invalid field
      const order: (keyof FormData)[] = ["fullname", "email", "budget", "referral", "message"];
      const firstInvalidKey = order.find((k) => errors[k]);
      if (firstInvalidKey) {
        const el = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="${firstInvalidKey}"]`
        );
        if (el) el.focus();
      }
      return;
    }

    const output = {
      fullName: formData.fullname.trim(),
      emailAddress: formData.email.trim(),
      projectBudget: Number(budgetSanitize(formData.budget).replace(/,/g, "")),
      referralSource: formData.referral.trim(),
      message: formData.message.trim(),
      services: formData.selectedTags.length ? formData.selectedTags : ["None"],
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
          <h2 className="contact8-title">
            Have a Project? <br /> Let’s talk!
          </h2>
          <ul className="contact8-list">
            <li>
              <img src={tick} alt="✓" /> <span>NDA? Absolutely just ask.</span>
            </li>
            <li>
              <img src={tick} alt="✓" /> <span>We’ll respond in 24 hours — fast & focused.</span>
            </li>
            <li>
              <img src={tick} alt="✓" /> <span>Work with senior UX experts, not juniors.</span>
            </li>
          </ul>
        </div>

        <form className="contact8-form" onSubmit={handleSubmit} noValidate>
          <div className="contact8-row">
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
                className={touched.fullname && errors.fullname ? "invalid" : ""}
                required
              />
              {touched.fullname && errors.fullname && (
                <div id="fullname-error" className="contact8-error">
                  {errors.fullname}
                </div>
              )}
            </div>

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
                className={touched.email && errors.email ? "invalid" : ""}
                required
              />
              {touched.email && errors.email && (
                <div id="email-error" className="contact8-error">
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="contact8-row">
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
                className={touched.budget && errors.budget ? "invalid" : ""}
                required
              />
              {touched.budget && errors.budget && (
                <div id="budget-error" className="contact8-error">
                  {errors.budget}
                </div>
              )}
            </div>

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
                className={touched.referral && errors.referral ? "invalid" : ""}
                required
              />
              {touched.referral && errors.referral && (
                <div id="referral-error" className="contact8-error">
                  {errors.referral}
                </div>
              )}
            </div>
          </div>

          <div className="contact8-field">
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your product and goals."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!(touched.message && errors.message)}
              aria-describedby="message-error"
              className={touched.message && errors.message ? "invalid" : ""}
              required
            />
            {touched.message && errors.message && (
              <div id="message-error" className="contact8-error">
                {errors.message}
              </div>
            )}
          </div>

          <div className="contact8-subtitle">How can we help you?</div>
          <div
            className="contact8-tags"
            role="group"
            aria-labelledby="services-label"
            aria-describedby={touched.selectedTags && errors.selectedTags ? "tags-error" : undefined}
          >
          
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className={`contact8-tag ${formData.selectedTags.includes(tag) ? "selected" : ""}`}
                onClick={() => toggleTag(tag)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleTag(tag)}
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

          <button type="submit" className="contact8-submit" disabled={!isValid}>
            Send message
          </button>

          {success && <div className="contact8-success">✅ Submitted successfully!</div>}

          <div className="contact8-alt">
            <span>Prefer email?</span>
            <a href="mailto:bytechsol@gmail.com"></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
