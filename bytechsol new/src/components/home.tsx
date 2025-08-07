import React, { useState } from "react";
import AnimatedText from "../shareable/AnimatedText";
import "../assets/components-css/home.css";
import Clutch from "../assets/images/clutch.png";
import Yasir from "../assets/images/yasir.jpg";
import Salik from "../assets/images/salik.png";
import Top1 from "../assets/images/top1.png";
import Top2 from "../assets/images/top2.png";
import Top3 from "../assets/images/top3.png";
import Top4 from "../assets/images/top4.png";
import Bottom1 from "../assets/images/bottom1.png";
import Bottom2 from "../assets/images/bottom2.png";
import Bottom3 from "../assets/images/bottom3.png";
import Bottom4 from "../assets/images/bottom4.png";
import Img1 from "../assets/images/salik.png";
import Img2 from "../assets/images/yasir.jpg";
import Img3 from "../assets/images/salik.png";
import Img4 from "../assets/images/yasir.jpg";
import Arrow from "../assets/images/arrow.svg";
import AwardBg from "../assets/images/award-bg.jpg";
import Award1 from "../assets/images/salik.png";
import Award2 from "../assets/images/yasir.jpg";
import Award3 from "../assets/images/salik.png";
import Award4 from "../assets/images/yasir.jpg";
import bgImage from "../assets/images/bgimg.jpg";
import icon from "../assets/images/tick.svg";
import bg from "../assets/images/frm-img.png";
import tick from "../assets/images/contact tick.png";
import com from "../assets/images/comma.png";
import cut from "../assets/images/cut.png";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "We specialize in user research, wireframing, prototyping, and visual design...",
  },
  {
    id: 2,
    question: "How do you hand off designs to developers?",
    answer:
      "We provide detailed specs, assets, and collaborate closely with developers.",
  },
  {
    id: 3,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Project timelines vary based on scope. A typical UI/UX design project can take anywhere from 2–6 weeks.",
  },
  {
    id: 4,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Project timelines vary based on scope. A typical UI/UX design project can take anywhere from 2–6 weeks.",
  },
  {
    id: 5,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Project timelines vary based on scope. A typical UI/UX design project can take anywhere from 2–6 weeks.",
  },
  {
    id: 6,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Project timelines vary based on scope. A typical UI/UX design project can take anywhere from 2–6 weeks.",
  },
  {
    id: 7,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Project timelines vary based on scope. A typical UI/UX design project can take anywhere from 2–6 weeks.",
  },
  {
    id: 8,
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Project timelines vary based on scope. A typical UI/UX design project can take anywhere from 2–6 weeks.",
  },
];

const cards = [
  {
    label: "DESIGN",
    color: "design",
    title: [
      "We create stunning, user-friendly websites that engage visitors, build trust, and turn interest into action.",
    ],
    items: [
      "Strategy",
      "Web Design",
      "User Experience Design",
      "Accessible Interfaces",
    ],
  },
  {
    label: "BUILD",
    color: "build",
    title: [
      "We develop high-performing, scalable solutions that work seamlessly for your goals and your customers.",
    ],
    items: [
      "Custom Web Development",
      "CRM/CMS Integration",
      "Shopify Development",
      "Scalable Infrastructure",
    ],
  },
  {
    label: "GROW",
    color: "grow",
    title: [
      "We help you attract, engage, and convert customers with data-driven marketing that delivers results.",
    ],
    items: [
      "Paid Campaign Strategy",
      "Content Optimization",
      "Conversion Marketing",
      "Email Campaigns",
    ],
  },
];

const awards = [
  { text: "500+ Happy clients", img: Award1 },
  { text: "10+ Design awards", img: Award2 },
  { text: "$600 M+ funding", img: Award3 },
  { text: "×5 Growth of brand", img: Award4 },
];

const services = [
  { id: 1, title: "UI UX Design", image: Img1 },
  { id: 2, title: "Branding", image: Img2 },
  { id: 3, title: "Marketing", image: Img3 },
  { id: 4, title: "Website", image: Img4 },
];

const topImages = [Top1, Top2, Top3, Top4];
const bottomImages = [Bottom1, Bottom2, Bottom3, Bottom4];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    budget: "",
    referral: "",
    message: "",
    selectedTags: [] as string[],
  });

  const [success, setSuccess] = useState(false);

  const serviceTags = [
    "UI/UX Design",
    "SaaS Design",
    "Branding",
    "CRO",
    "Mobile App",
    "Development",
    "MVP Development",
    "Web Design",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Restrict numbers in full name
    if (name === "fullname" && /\d/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleTag = (tag: string) => {
    setFormData((prev) => {
      const tags = prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag];

      return { ...prev, selectedTags: tags };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullname, email, budget, referral, message, selectedTags } =
      formData;

    if (!fullname || !email || !budget || !referral || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const output = {
      fullName: fullname,
      emailAddress: email,
      projectBudget: budget,
      referralSource: referral,
      message: message,
      services: selectedTags.length ? selectedTags : ["None"],
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
    <>
      {/* 1st Section */}
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>
                  Global UI UX design agency digital partner for{" "}
                  <AnimatedText />
                </h1>
                <div className="cta-buttons mt-4 d-flex gap-3 flex-wrap">
                  <a href="#strategy-call" className="btn btn-black custom-cta">
                    Book a strategy call{" "}
                    <i className="bi bi-arrow-up-right arrow-icon"></i>
                  </a>
                  <a
                    href="#custom-quote"
                    className="btn btn-outline custom-cta"
                  >
                    Get a custom quote
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <p>
                  We deliver globally UI, UX & web design smoothly, without
                  delay, saving your time and money with an efficient process.
                </p>
                <div className="founders-rating">
                  <div className="d-flex align-items-center">
                    <div className="founders-stack">
                      <div
                        className="tooltip-wrapper"
                        style={{ left: 0, zIndex: 2 }}
                      >
                        <img
                          src={Yasir}
                          alt="Yasir Irfan"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Yasir Irfan</strong>
                          <br />
                          Founder & CEO @BTS
                          <br />
                          <a
                            href="https://www.linkedin.com/in/yasir-irfan-b988721b7/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                      <div
                        className="tooltip-wrapper"
                        style={{ left: "22px", zIndex: 1 }}
                      >
                        <img
                          src={Salik}
                          alt="Salik Husnaq"
                          className="founder-img"
                        />
                        <div className="custom-tooltip">
                          <strong>Salik Husnaq</strong>
                          <br />
                          Co-Founder @Somewhere
                          <br />
                          <a
                            href="https://www.linkedin.com/in/salik-husnaq/?originalSubdomain=pk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                    <span className="ms-3" style={{ lineHeight: "15px" }}>
                      Loved by 500+ Founders
                    </span>
                  </div>
                  <img src={Clutch} alt="Clutch" className="clutch-logo" />
                  <div className="review-meta">
                    <span className="stars">★★★★★</span>
                    <span className="reviews">11 REVIEWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 2nd Section */}
      <section className="scrolling-images-section py-5">
        <div className="scroll-row scroll-row-1">
          <div className="scroll-track">
            {[...topImages, ...topImages].map((img, index) => (
              <img
                key={`top-${index}`}
                src={img}
                alt={`Top image ${index}`}
                className="scroll-image"
              />
            ))}
          </div>
        </div>
        <div className="scroll-row scroll-row-2 mt-5">
          <div className="scroll-track reverse">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <img
                key={`bottom-${index}`}
                src={img}
                alt={`Bottom image ${index}`}
                className="scroll-image"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3rd Section */}
      <section className="who-we-are-section py-5">
        <div className="container">
          <p className="subheading">(WHO WE ARE)</p>
          <p className="description">
            lumix® is a sleek, minimalistic Webflow template designed
            specifically for agencies and creators. At lumix, we prioritize
            clean typography and bold design.
          </p>
        </div>
      </section>

      {/* 4th Section */}
      <section className="services-section py-5">
        <div className="container">
          <p className="ser-subheading">(SERVICES)</p>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-row ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span className="service-index">0{service.id}</span>
              <h2 className="service-title">{service.title}</h2>
              <img src={Arrow} alt="Arrow" className="service-arrow-img" />
              {activeIndex === index && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5th Section */}
      <section
        className="awards-section"
        style={{ backgroundImage: `url(${AwardBg})` }}
      >
        <div className="overlay">
          <div className="awards-heading-container">
            <h2 className="awards-heading">our awards &</h2>
            <br />
            <h2 className="awards-heading2">achievements</h2>
          </div>
          <div className="awards-grid">
            {awards.map((item, idx) => (
              <div className="award-card" key={idx}>
                <img
                  src={item.img}
                  alt={`award-${idx}`}
                  className="award-img"
                />
                <p className="award-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th Section */}
      <section className="who-we-are-section py-5">
        <div className="container">
          <p className="subheading">(WHY CHOOSE BYTECHSOL)</p>
          <h1 className="description" style={{ fontSize: "45px" }}>
            Helping you transform your business
          </h1>
          <p
            className="description"
            style={{ fontSize: "25px", fontWeight: "200" }}
          >
            Bold ideas. Smarter strategies. Game-changing results. Let’s elevate
            your brand and unlock its full potential.
          </p>
        </div>
      </section>

      <section className="scroll-section">
        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className={`choose-card ${card.color}`}>
              <div className={`badge ${card.color}`}>{card.label}</div>
              <p className="card-title-text">{card.title[0]}</p>
              <ul>
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7th Section */}
      <section className="group7-container">
        <img className="group7-bg" src={bgImage} alt="Background" />
        <div className="group7-content">
          <h2 className="group7-main-title">
            A dedicated team of professionals
          </h2>
          <div className="group7-columns">
            {[...Array(3)].map((_, idx) => (
              <div className="group7-column" key={idx}>
                <img src={icon} alt="Icon" className="group7-icon" />
                <h3 className="group7-heading">
                  {
                    [
                      "We're about results",
                      "Experienced Team",
                      "Quality Assurance",
                    ][idx]
                  }
                </h3>
                <p className="group7-description">
                  {
                    [
                      "We deliver results-driven websites that align with your organisation's specific needs and strategic objectives.",
                      "In-house team of 19+ talented UX/UI Designers, Strategists, Developers, and Digital Marketers. (No outsourcing!)",
                      "We take immense pride in our work, ensuring the highest quality product and best practices in everything we do.",
                    ][idx]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8th testimonial section */}
      <div className="group5-wrapper">
        <div className="group5-content">
          <div className="group5-text-block">
            <span className="group5-tag">(Testimonials)</span>
            <h2 className="group5-heading">See why our clients love us</h2>
            <p className="group5-quote">
              "We've worked with several design agencies in the past, but none
              have matched the level of professionalism and expertise that we
              found at Bloomr. Highly recommended!"
            </p>
            <div className="group5-author-block">
              <img src={cut} alt="Samantha" className="group5-avatar" />
              <div>
                <div className="group5-author-name">Samantha</div>
                <div className="group5-author-role">
                  Co-Founder at KYU House
                </div>
              </div>
            </div>
          </div>
          <img src={com} alt="" className="group5-vector" />
        </div>
      </div>

      {/* 9th faq section  */}
      <section className="faq-wrapper">
        <div className="faq-container">
          <p className="faq-label">(FAQs)</p>
          <h2 className="faq-heading">Frequently asked questions</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                key={item.id}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="faq-question-row">
                  <span className="faq-question">{item.question}</span>
                  <FiChevronDown
                    className={`faq-icon ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact8-wrapper">
        <div className="contact8-bg">
          <img
            src={bg}
            alt="Decorative background"
            className="contact8-bg-img"
          />
        </div>
        <div className="container contact8-content">
          <div className="contact8-left">
            <h2 className="contact8-title">
              Have a Project? <br /> Let’s talk!
            </h2>
            <ul className="contact8-list">
              <li>
                <img src={tick} alt="✓" />{" "}
                <span>NDA? Absolutely just ask.</span>
              </li>
              <li>
                <img src={tick} alt="✓" />{" "}
                <span>We’ll respond in 24 hours — fast & focused.</span>
              </li>
              <li>
                <img src={tick} alt="✓" />{" "}
                <span>Work with senior UX experts, not juniors.</span>
              </li>
            </ul>
          </div>

          <form className="contact8-form" onSubmit={handleSubmit}>
            <div className="contact8-row">
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact8-row">
              <input
                type="text"
                name="budget"
                placeholder="Project budget"
                value={formData.budget}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="referral"
                placeholder="How did you hear about us?"
                value={formData.referral}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your product and goals."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="contact8-subtitle">How can we help you?</div>
            <div className="contact8-tags">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className={`contact8-tag ${
                    formData.selectedTags.includes(tag) ? "selected" : ""
                  }`}
                  onClick={() => toggleTag(tag)}
                  style={{ cursor: "pointer" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <button type="submit" className="contact8-submit">
              Send message
            </button>

            {success && (
              <div className="contact8-success">✅ Submitted successfully!</div>
            )}

            <div className="contact8-alt">
              <span>Prefer email?</span>
              <a href="mailto:bytechsol@gmail.com">bytechsol@gmail.com</a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
