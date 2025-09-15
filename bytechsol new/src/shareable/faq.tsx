import React, { useMemo, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Faq = {
  id: number;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  { id: 1, question: "What services does Bytechsol offer?", answer: "Bytechsol is a full-service software agency offering custom web development, mobile app development, AI/ML solutions, ERP implementation, Odoo customization, CMS development, UI/UX design, and digital marketing services, including SEO and SMM." },
  { id: 2, question: "Do you build custom software solutions for startups and enterprises?", answer: "Yes! We help startups establish their business ideas or customize enterprise software in large organizations based on the needs of every business, from MVPs to complex enterprise systems." },
  { id: 3, question: "What technologies do you use?", answer: "We work with a wide range of modern technologies, including JavaScript frameworks (React, Vue), Python, Django, Odoo, Shopify, and AI/ML solutions, so any project will be scalable and future-proof." },
  { id: 4, question: "How does Bytechsol handle ERP implementation and Odoo services?", answer: "Our team of ERP specialists offers complete implementation, migration, and consultation of Odoo. We support companies to simplify their processes, automate their processes, and tailor Odoo to meet business requirements." },
  { id: 5, question: "Can you integrate AI into my website or software product?", answer: "Yes, we develop AI-based chatbots, voice assistants, and other individually developed solutions with the integration of the latest AI/LLM technology to automate customer support services, enhance user experience, and boost productivity across all digital touchpoints." },
  { id: 6, question: "How long does a typical project take?", answer: "Timelines are dependent on scope, but we operate in iterative agile sprints to make delivery quick. Depending on the complexity, it would take me 2 weeks to 4 weeks to develop a simple site and approximately 2 months to 3 months on a very complicated site. We make it clear beforehand so as to have a clear project roadmap." },
  { id: 7, question: "Do you offer post-launch support and maintenance?", answer: "Yes. We also provide maintenance, features, and technical support to ensure that your product keeps functioning smoothly and in keeping with your requirements." },
  { id: 8, question: "How do I get started with Bytechsol?", answer: "Simple! Just schedule a free consultation or fill out our contact form. We will talk about your idea, goals, and schedule- then we will give you our advice on what to do next to get your project alive." },
  { id: 9, question: "Why should I choose Bytechsol over other software agencies?", answer: "We don’t just deliver code — we deliver outcomes. Bytechsol is the next generation in digital products: a blending of business strategy, next-generation technology, and user-centred style to create the failure-proof digital products that grow, scale, and grow with your business." },
  { id: 10, question: "Does Bytechsol offer 24/7 support?", answer: "Bytechsol provides 24-hour and all-day support and help, and you never find yourself alone. Reporting an urgent bug, making a change at the last minute, the help is always close at hand with our team, regardless of time zone." },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // store refs for each panel by index
  const panelRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const items = useMemo(() => faqs, []);

  return (
    <section className="faq-wrapper">
      <div className="faq-container">
        <p className="faq-label">(FAQs)</p>
        <h2 className="faq-heading">Frequently asked questions</h2>

        <div className="faq-list" role="list">
          {items.map((item, index) => {
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
                  <FiChevronDown
                    aria-hidden="true"
                    className={`faq-icon ${isOpen ? "rotated" : ""}`}
                  />
                </button>

                {/* Keep panel mounted, animate max-height & opacity */}
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
