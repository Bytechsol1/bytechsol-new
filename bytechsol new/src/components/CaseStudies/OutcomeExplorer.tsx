import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, PhoneCall, Radio, Clock3, CheckCheck, GitBranch } from "lucide-react";
import OutcomeShowcase from "./OutcomeShowcase";
import "./OutcomeExplorer.css";

const measures = [
  {
    name: "Call volume", icon: PhoneCall,
    title: "Understand the activity behind every conversation.",
    description: "Call volume tracks calling activity. It provides the starting point for reviewing how much outbound work a team carries out.",
    insight: "Read activity alongside connection and outcome measures to understand the wider picture.",
    flow: ["Calls placed", "Call history", "Calling activity"],
  },
  {
    name: "Connect rate", icon: Radio,
    title: "Look beyond dialing to actual connections.",
    description: "Connect rate compares connected calls with call attempts. It helps put calling volume into the context of conversations reached.",
    insight: "More attempts and more connections describe different parts of the calling workflow.",
    flow: ["Call attempts", "Connected calls", "Connection visibility"],
  },
  {
    name: "Average talk time", icon: Clock3,
    title: "Give conversations their own perspective.",
    description: "Average talk time describes time spent in connected conversations. Read it alongside call context and recorded outcomes.",
    insight: "Conversation length adds context. The recorded outcome explains what happened next.",
    flow: ["Connected calls", "Conversation duration", "Average talk time"],
  },
  {
    name: "Outcome rate", icon: CheckCheck,
    title: "Connect the conversation to its next step.",
    description: "Outcome rate puts recorded call outcomes into perspective. Consistent outcome recording makes this measure easier to interpret.",
    insight: "Review the outcome being measured before comparing activity across campaigns.",
    flow: ["Completed calls", "Recorded outcomes", "Outcome review"],
  },
  {
    name: "Pipeline created", icon: GitBranch,
    title: "Follow the story beyond the call.",
    description: "Pipeline created looks at sales opportunities associated with outreach. CRM context connects the conversation with follow-up activity.",
    insight: "Review pipeline alongside calling activity to understand the relationship between outreach and opportunities.",
    flow: ["Sales conversations", "CRM follow-up", "Sales opportunities"],
  },
];

export default function OutcomeExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const measure = measures[selected];

  return (
    <div className="vo-explorer">
      <div className="vo-tabs" role="tablist" aria-label="Explore the core outcome measures">
        {measures.map((item, index) => {
          const TabIcon = item.icon;
          return (
            <button
              key={item.name}
              ref={(element) => { tabs.current[index] = element; }}
              type="button" role="tab"
              id={`${id}-tab-${index}`}
              aria-selected={selected === index}
              aria-controls={`${id}-panel`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
                if (!keys.includes(event.key)) return;
                event.preventDefault();
                let next = event.key === "ArrowLeft" ? index - 1 : index + 1;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = measures.length - 1;
                next = (next + measures.length) % measures.length;
                setSelected(next);
                tabs.current[next]?.focus();
              }}
            >
              <TabIcon size={17} aria-hidden="true" />{item.name}
              {selected === index && <motion.span className="vo-tab-line" layoutId={`${id}-underline`} transition={{ duration: reducedMotion ? 0 : 0.25 }} />}
            </button>
          );
        })}
      </div>
      <div className="vo-panel vo-panel--gallery">
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="vo-panel-content" key={measure.name}
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }} exit={{ opacity: reducedMotion ? 1 : 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
          >
            <div className="vo-copy">
              <span className="vo-measure-name">{measure.name}</span>
              <h3>{measure.title}</h3>
              <p>{measure.description}</p>
              <div className="vo-insight"><ArrowUpRight size={20} aria-hidden="true" /><p>{measure.insight}</p></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <OutcomeShowcase />
      </div>
    </div>
  );
}
