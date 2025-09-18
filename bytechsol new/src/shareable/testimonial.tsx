import  { useState, useEffect } from "react";
import com from "../assets/images/comma.png";
import cut from "../assets/images/cut.png";

const testimonials = [
  {
    text: "The custom software your team developed has streamlined our internal operations like never before. It was built exactly to our specs, with performance and scalability in mind. Truly a game-changer for our workflow.",
    author: "Olivia Morgan",
    role: "Operations Head, TechNexus (UK)",
    avatar: cut,
  },
  {
    text: "Working with your team was a delight. The project was delivered on time and exceeded our expectations. Support has also been fantastic.",
    author: "Liam Carter",
    role: "CTO, FinEdge (USA)",
    avatar: cut,
  },
  {
    text: "Your solutions are top-notch. Our customer engagement has doubled since implementing the new platform. Highly recommended!",
    author: "Sophia Turner",
    role: "Marketing Director, NovaSoft (Canada)",
    avatar: cut,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="group5-wrapper py-5">
      <div className="container">
        <div className="group5-content">
          <div className="group5-text-block text-center text-md-start">
            <span className="group5-tag d-block mb-2">(Testimonials)</span>
            <h2 className="group5-heading mb-3">See why our clients love us</h2>

            <img
              src={com}
              alt="Quotation mark"
              className="group5-vector mb-3"
            />

            <p className="group5-quote">{current.text}</p>

            <div className="group5-author-block d-flex align-items-center gap-3 mt-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
