import { useState } from "react";
import { ArrowRight, Check, ContactRound, ListChecks, PhoneCall } from "lucide-react";
import "./VoxiqWorkflowStudy.css";

const stages = [
  {
    label: "Before the call",
    title: "Start with context.",
    description:
      "Bring contact details and campaign context into view before the next conversation. Organize outreach around the people your team needs to reach.",
    icon: ContactRound,
    focus: "Contact context",
    detail: "Contacts, campaigns, and the next person to reach.",
    steps: ["Import contacts", "Organize a campaign", "Review the contact"],
  },
  {
    label: "In the conversation",
    title: "Keep the conversation close.",
    description:
      "Use the calling workspace with customer information close at hand. Available dialing and recording tools support the workflow configured for your account.",
    icon: PhoneCall,
    focus: "The calling workspace",
    detail: "The conversation, supported by customer context.",
    steps: ["Review the context", "Connect the call", "Capture the outcome"],
  },
  {
    label: "The next action",
    title: "Carry the context forward.",
    description:
      "Record the outcome, coordinate the next follow-up, and review activity. Supported CRM connections can carry contact updates into the wider sales workflow.",
    icon: ListChecks,
    focus: "A clear next step",
    detail: "Call outcomes, follow-ups, and activity visibility.",
    steps: ["Log the outcome", "Plan the follow-up", "Review activity"],
  },
];

export default function VoxiqWorkflowStudy() {
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];
  const Icon = stage.icon;

  return (
    <div className="vn-workflow-study">
      <div className="vn-workflow-selector" aria-label="Explore the communication workflow">
        {stages.map((item, index) => (
          <button
            type="button"
            key={item.label}
            aria-pressed={selected === index}
            aria-controls="vn-workflow-preview"
            onClick={() => setSelected(index)}
          >
            <span>{item.label}</span>
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        ))}
        <div className="vn-workflow-explanation" aria-live="polite">
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </div>
      </div>
      <div className="vn-workflow-canvas">
        <div className="vn-workflow-guide" aria-hidden="true" />
        <div id="vn-workflow-preview" className="vn-workflow-preview" data-phase={selected}>
          <div className="vn-workflow-preview-top">
            <span>Voxxiq</span>
            <span>Workflow study</span>
          </div>
          <div className="vn-workflow-focus" aria-live="polite">
            <span className="vn-workflow-focus-icon">
              <Icon size={30} aria-hidden="true" />
            </span>
            <h4>{stage.focus}</h4>
            <p>{stage.detail}</p>
            <div className="vn-workflow-wave" aria-hidden="true">
              {[12, 24, 18, 34, 47, 29, 40, 22, 46, 34, 50, 23, 38, 18, 28, 42, 24, 14].map(
                (height, index) => (
                  <i key={index} style={{ height }} />
                ),
              )}
            </div>
          </div>
          <ol className="vn-workflow-checklist">
            {stage.steps.map((step) => (
              <li key={step}>
                <Check size={14} aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <span className="vn-workflow-caption">
          Illustrative interface · account setup determines availability
        </span>
      </div>
    </div>
  );
}
