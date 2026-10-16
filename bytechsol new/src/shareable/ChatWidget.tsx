import { useEffect, useRef, useState } from "react";
import { Bot, CheckCircle, RotateCcw, Send, X } from "lucide-react";
import "../assets/components-css/ChatWidget.css";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  chips?: string[];
};

const QUICK_ACTIONS = [
  "What services do you offer?",
  "I need a website",
  "Tell me about Odoo",
  "Get a project quote",
];

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  text: "Hi! I’m Bytechsol AI. Tell me about your project, ask about our services, or request a quote.",
  sender: "bot",
  chips: QUICK_ACTIONS,
};

const STORAGE_KEY = "bytechsol-chat-v1";
const MAX_INPUT_LENGTH = 1000;

function createMessage(text: string, sender: Message["sender"], chips?: string[]): Message {
  return {
    id: `${sender}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text,
    sender,
    chips,
  };
}

function renderMessageText(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)\]}>;,]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g);

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer">{part}</a>;
    }
    if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return <a key={`${part}-${index}`} href={`mailto:${part}`}>{part}</a>;
    }
    return part;
  });
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)));
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isTyping]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      abortRef.current?.abort();
    };
  }, []);

  const resetChat = () => {
    abortRef.current?.abort();
    setMessages([INITIAL_MESSAGE]);
    setInputText("");
    setError("");
    setIsTyping(false);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const sendMessage = async (text: string) => {
    const value = text.trim().slice(0, MAX_INPUT_LENGTH);
    if (!value || isTyping) return;

    const userMessage = createMessage(value, "user");
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputText("");
    setError("");
    setIsTyping(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.slice(-12).map((message) => ({
            role: message.sender === "user" ? "user" : "assistant",
            content: message.text,
          })),
        }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The assistant is unavailable right now.");
      setMessages((previous) => [...previous, createMessage(data.reply, "bot")]);
    } catch (requestError) {
      if (requestError instanceof DOMException && requestError.name === "AbortError") return;
      setError(requestError instanceof Error ? requestError.message : "Something went wrong. Please try again.");
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      setIsTyping(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`bs-chat-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chat" : "Chat with Bytechsol AI"}
        aria-expanded={isOpen}
        aria-controls="bytechsol-chat"
      >
        {isOpen ? <X size={22} /> : <img src="/bot-icon.svg" alt="" width="110" height="110" />}
      </button>

      <section
        id="bytechsol-chat"
        className={`bs-chat-container ${isOpen ? "open" : "closed"}`}
        role="dialog"
        aria-modal="false"
        aria-label="Bytechsol AI assistant"
        aria-hidden={!isOpen}
      >
        <header className="bs-chat-header">
          <div className="bs-chat-avatar"><Bot size={16} /></div>
          <div className="bs-chat-title-wrap">
            <p className="bs-chat-title">Bytechsol AI <CheckCircle size={12} /></p>
            <p className="bs-chat-subtitle">Online assistant</p>
          </div>
          <button type="button" className="bs-chat-header-action" onClick={resetChat} aria-label="Start a new chat" title="New chat">
            <RotateCcw size={15} />
          </button>
          <button type="button" className="bs-chat-header-action" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <X size={16} />
          </button>
        </header>

        <div className="bs-chat-messages" role="log" aria-live="polite" aria-relevant="additions">
          {messages.map((message) => (
            <div key={message.id} className={`bs-msg-row ${message.sender}`}>
              <div className="bs-msg-bubble">{renderMessageText(message.text)}</div>
              {message.sender === "bot" && message.chips && (
                <div className="bs-chat-chips">
                  {message.chips.map((chip) => (
                    <button key={`${message.id}-${chip}`} type="button" className="bs-chip" onClick={() => sendMessage(chip)} disabled={isTyping}>
                      {chip}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isTyping && <div className="bs-msg-row bot"><div className="bs-msg-bubble bs-typing"><span /><span /><span /></div></div>}
          {error && <div className="bs-chat-error" role="alert">{error}</div>}
          <div ref={endRef} />
        </div>

        <form className="bs-chat-input-wrap" onSubmit={(event) => { event.preventDefault(); sendMessage(inputText); }}>
          <label className="bs-sr-only" htmlFor="bs-chat-input">Message Bytechsol AI</label>
          <input
            ref={inputRef}
            id="bs-chat-input"
            className="bs-chat-input"
            type="text"
            placeholder="Ask about your project..."
            value={inputText}
            maxLength={MAX_INPUT_LENGTH}
            onChange={(event) => setInputText(event.target.value)}
            disabled={isTyping}
            autoComplete="off"
          />
          <button type="submit" className="bs-chat-send" aria-label="Send message" disabled={isTyping || !inputText.trim()}>
            <Send size={18} />
          </button>
        </form>
        <p className="bs-chat-disclaimer">AI can make mistakes. Don’t share sensitive information.</p>
      </section>
    </>
  );
}
