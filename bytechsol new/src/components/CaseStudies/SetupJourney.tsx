import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Globe2, Link2, GitMerge, Users, PhoneCall, RotateCcw } from "lucide-react";
import { voxiqDocumentContent } from "../../data/voxiqDocumentContent";
import "./SetupJourney.css";
import SetupProductShowcase from "./SetupProductShowcase";

const icons = [Globe2, Link2, GitMerge, Users, PhoneCall];

export default function SetupJourney() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = useReducedMotion();
  const steps = voxiqDocumentContent.setup;
  const step = steps[selected];
  const Icon = icons[selected];

  return (
    <div className="sj-journey">
      <SetupProductShowcase selected={selected} onSelect={setSelected} />
      <div className="sj-steps" role="tablist" aria-label="Voxxiq setup steps">
        {steps.map((item, index) => {
          const StepIcon = icons[index];
          return (
            <button
              type="button" role="tab" key={item.title}
              ref={(element) => { buttons.current[index] = element; }}
              id={`${id}-step-${index}`} aria-controls={`${id}-panel`}
              aria-selected={selected === index} tabIndex={selected === index ? 0 : -1}
              data-passed={index < selected}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                let next = event.key === "ArrowLeft" ? index - 1 : index + 1;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = steps.length - 1;
                next = (next + steps.length) % steps.length;
                setSelected(next);
                buttons.current[next]?.focus();
              }}
            >
              <span className="sj-step-marker">{index < selected ? <Check size={21} aria-hidden="true" /> : <StepIcon size={21} aria-hidden="true" />}</span>
              <span className="sj-step-label"><span>Step {String(index + 1).padStart(2, "0")}</span>{item.title}</span>
            </button>
          );
        })}
      </div>
      <div className="sj-stage" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-step-${selected}`}>
        <div className="sj-detail">
          <div className="sj-detail-top"><span><Icon size={19} aria-hidden="true" />Setup journey</span><span>{String(selected + 1).padStart(2, "0")} / 05</span></div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={step.title} initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="sj-controls">
            <button type="button" className="sj-previous" disabled={selected === 0} onClick={() => setSelected(selected - 1)} aria-label="Previous setup step"><ArrowLeft size={20} /></button>
            <button type="button" className="sj-next" onClick={() => setSelected((selected + 1) % steps.length)}>
              {selected === steps.length - 1 ? "Explore again" : "Next step"}
              {selected === steps.length - 1 ? <RotateCcw size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
            </button>
          </div>
          <div className="sj-progress" aria-hidden="true"><span style={{ width: `${((selected + 1) / steps.length) * 100}%` }} /></div>
        </div>

      </div>
    </div>
  );
}
