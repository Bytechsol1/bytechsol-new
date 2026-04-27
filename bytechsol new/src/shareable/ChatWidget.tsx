import { useEffect, useRef, useState } from "react";
import { Bot, CheckCircle, Send, X } from "lucide-react";
import "../assets/components-css/ChatWidget.css";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  chips?: string[];
};

const QUICK_ACTIONS = [
  "Web Development",
  "E-Commerce",
  "Odoo Services",
  "AI & Chatbots",
  "Get a Quote",
];

const INITIAL_MESSAGE: Message = {
  id: "init-1",
  text: "Hello! I am Bytechsol AI. How can I help you today?",
  sender: "bot",
  timestamp: new Date(),
  chips: QUICK_ACTIONS,
};

const KNOWLEDGE_BASE = [
  {
    question: "what services do you offer",
    answer:
      "We provide web development, e-commerce, ERP/Odoo services, AI chatbot development, SEO, and branding.",
  },
  {
    question: "do you build custom websites",
    answer: "Yes, we build custom websites based on your business goals and brand.",
  },
  {
    question: "do you provide odoo services",
    answer:
      "Yes, we provide Odoo implementation, customization, migration, and support.",
  },
  {
    question: "do you build ai chatbots",
    answer:
      "Yes, we build AI chatbots for websites, support workflows, and lead qualification.",
  },
  {
    question: "how can i contact you",
    answer: "You can contact us at contact@bytechsol.com.",
  },
  {
    question: "how do i get a quote",
    answer:
      "Share your requirements, timeline, and budget at contact@bytechsol.com and we will send a proposal.",
  },
];

const MENU_RESPONSES: Record<string, { text: string; chips?: string[] }> = {
  "web development": {
    text: "We build fast and scalable websites, dashboards, and custom web apps.",
    chips: ["Get a Quote", "Back to Menu"],
  },
  "e-commerce": {
    text: "We build Shopify, WooCommerce, and custom e-commerce solutions.",
    chips: ["Get a Quote", "Back to Menu"],
  },
  "odoo services": {
    text: "We provide Odoo setup, module customization, integrations, and training.",
    chips: ["Get a Quote", "Back to Menu"],
  },
  "ai & chatbots": {
    text: "We develop AI chatbots and automation flows tailored to your business.",
    chips: ["Get a Quote", "Back to Menu"],
  },
  "get a quote": {
    text: "Please send your project details to contact@bytechsol.com and our team will respond quickly.",
  },
  "back to menu": {
    text: "Sure, here is the main menu:",
    chips: QUICK_ACTIONS,
  },
};

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();

const getBotResponse = (input: string): { text: string; chips?: string[] } => {
  const normalizedInput = normalize(input);

  if (MENU_RESPONSES[normalizedInput]) {
    return MENU_RESPONSES[normalizedInput];
  }

  const exact = KNOWLEDGE_BASE.find(
    (entry) => normalize(entry.question) === normalizedInput,
  );
  if (exact) {
    return { text: exact.answer };
  }

  const partial = KNOWLEDGE_BASE.find((entry) =>
    normalize(entry.question).includes(normalizedInput),
  );
  if (partial) {
    return { text: partial.answer };
  }

  if (normalizedInput === "menu" || normalizedInput === "options") {
    return {
      text: "Here is the main menu:",
      chips: QUICK_ACTIONS,
    };
  }

  return {
    text: "I can help with services, pricing, and project planning. Please ask in another way or choose an option below.",
    chips: QUICK_ACTIONS,
  };
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, isTyping]);

  const sendMessage = (text: string) => {
    const value = text.trim();
    if (!value) return;

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      text: value,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((previous) => [...previous, userMessage]);
    setInputText("");
    setIsTyping(true);

    window.setTimeout(() => {
      const response = getBotResponse(value);
      const botMessage: Message = {
        id: `${Date.now()}-bot`,
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        chips: response.chips,
      };
      setMessages((previous) => [...previous, botMessage]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        type="button"
        className={`bs-chat-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <img src="/bot-icon.svg" alt="Chat with us" width="110" height="110" />
        )}
      </button>

      <section className={`bs-chat-container ${isOpen ? "open" : "closed"}`}>
        <header className="bs-chat-header">
          <div className="bs-chat-avatar">
            <Bot size={16} />
          </div>
          <div className="bs-chat-title-wrap">
            <p className="bs-chat-title">
              Bytechsol AI
              <CheckCircle size={12} />
            </p>
            <p className="bs-chat-subtitle">24/7 assistant</p>
          </div>
          <button
            type="button"
            className="bs-chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </header>

        <div className="bs-chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`bs-msg-row ${message.sender}`}>
              <div className="bs-msg-bubble">{message.text}</div>
              {message.sender === "bot" && message.chips && (
                <div className="bs-chat-chips">
                  {message.chips.map((chip) => (
                    <button
                      key={`${message.id}-${chip}`}
                      type="button"
                      className="bs-chip"
                      onClick={() => sendMessage(chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="bs-msg-row bot">
              <div className="bs-msg-bubble">Typing...</div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form
          className="bs-chat-input-wrap"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(inputText);
          }}
        >
          <input
            className="bs-chat-input"
            type="text"
            placeholder="Ask me anything..."
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button type="submit" className="bs-chat-send" aria-label="Send">
            <Send size={18} />
          </button>
        </form>
      </section>
    </>
  );
}
