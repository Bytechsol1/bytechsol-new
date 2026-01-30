import { useMemo, useRef, useState } from "react";
import arrow from "../assets/images/arrow.svg";

// Define FAQ type
type Faq = {
  id: number;
  question: string;
  answer: string;
};

interface FaqSectionProps {
  faqs: Faq[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // store refs for each panel by index
  const panelRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-wrapper">
      <div className="faq-container">
        <p className="faq-label" data-aos="fade-down"></p>
        <h2 className="faq-heading" data-aos="fade-up">
          Frequently asked questions
        </h2>

        <div className="faq-list" role="list" data-aos="fade-right">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;
            const maxHeight =
              isOpen && panelRefs.current[index]
                ? `${panelRefs.current[index]!.scrollHeight}px`
                : "0px";

            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "active" : ""}`}
                role="listitem"
              >
                <button
                  id={buttonId}
                  className="faq-question-row"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  type="button"
                >
                  <span className="faq-question">{item.question}</span>
                  <img
                    src={arrow}
                    alt="arrow"
                    className={`webdesign-icon1 ${isOpen ? "rotated" : ""}`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-panel"
                  style={{ maxHeight }}
                >
                  <div
                    className="faq-answer"
                    ref={(el) => {
                      panelRefs.current[index] = el;
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
