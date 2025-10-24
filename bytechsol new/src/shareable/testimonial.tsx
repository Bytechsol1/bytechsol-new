import { useState, useEffect } from "react";
import com from "../assets/images/comma.png";
import jen from "../assets/images/Jennifer.jpg"
import lin from "../assets/images/lina.jpg"
import ba from "../assets/images/Bilal Asif.jpg"
import tr from "../assets/images/Thomas Reed.jpg"

const testimonials = [
  {
    text: "The custom software your team developed has streamlined our internal operations like never before. It was built exactly to our specs, with performance and scalability in mind. Truly a game-changer for our workflow.",
    author: " Bilal Asif",
    role: " Senior Developer, RizaSoft (Pakistan)",
    avatar: ba,
  },
  {
    text: "We wanted a team that did design and development in one place, and you have truly surpassed our expectations. Everything was aligned, from branding to delivery.",
    author: "Jennifer Blake",
    role: " Founder, Blakestone Creative (USA)",
    avatar: jen,
  },
  {
    text: "We migrated to the cloud and improved our deployment pipeline with your DevOps services. Downtime is now close to zero, and we can deploy updates much faster and more safely.",
    author: "Lina Romero",
    role: "CTO, NexChain (Germany)",
    avatar: lin,
  },
  {
    text: "The UI/UX work on our dashboard was flawless. Our users are finally navigating things with ease. The clean layout and user flow reflect deep thinking and solid design principles.",
    author: "Thomas Reed",
    role: "Director, OmniParts (Canada)",
    avatar: tr,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s — supports dynamic testimonial count
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="group5-wrapper py-5">
      <div className="container">
        <div className="group5-content">
          <div className="group5-text-block text-center text-md-start">
            <span className="group5-tag d-block mb-2" data-aos="fade-right">
              (Testimonials)
            </span>
            <h2 className="group5-heading mb-3" data-aos="fade-right">
              See why our clients love us
            </h2>

            <img
              src={com}
              alt="Quotation mark"
              className="group5-vector mb-3"
              data-aos="fade-right"
            />

            <p className="group5-quote" data-aos="fade-right">
              “{current.text}”
            </p>

            <div
              data-aos="fade-right"
              className="group5-author-block d-flex align-items-center gap-3 mt-4"
            >
              <img
                src={current.avatar}
                alt={current.author}
                className="group5-avatar rounded-circle"
              />
              <div>
                <div className="group5-author-name fw-bold">
                  {current.author}
                </div>
                <div className="group5-author-role text-muted">
                  {current.role}
                </div>
              </div>
            </div>

            {/* Optional: navigation dots */}
            <div className="group5-dots mt-4 d-flex justify-content-center justify-content-md-start gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`dot ${i === index ? "active" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
