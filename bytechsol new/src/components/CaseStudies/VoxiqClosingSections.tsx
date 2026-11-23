import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./CaseStudyReveal";
import loopImage from "../../assets/images/loop-hover.png";
import skynodeImage from "../../assets/images/skynode-hover.png";
import babylonImage from "../../assets/images/babylon-hover.png";
import { externalProjectWebsites } from "../../data/portfolioDestinations";

const questions = [
  {
    question: "What is Voxxiq?",
    answer:
      "Voxxiq is a browser-based calling and multichannel outreach platform. The source describes power dialing, inbound routing, messaging, recording, coaching, and analytics around one shared workflow.",
  },
  {
    question: "Which CRM connections are described?",
    answer:
      "The document lists native GoHighLevel synchronization, Pipedrive, Zapier, and a REST API for custom connections. Confirm the setup and availability of each integration with Voxxiq.",
  },
  {
    question: "Is the AI Agent Caller available to every account?",
    answer:
      "The source labels AI Agent Caller as early access. Access, release status, and pricing need confirmation. AI call insights in a calling plan are a separate capability.",
  },
  {
    question: "Are these real customer case studies?",
    answer:
      "The nine industry examples are illustrative scenarios from the document. They explain how published capabilities could fit a typical team. Independently verified customer results were not supplied.",
  },
  {
    question: "Are SMS and WhatsApp included in every plan?",
    answer:
      "The source lists SMS as a separately priced add-on. WhatsApp plan inclusion and AI Agent Caller pricing are unresolved. Confirm current plan details before choosing a package.",
  },
  {
    question: "Does the team need a separate softphone?",
    answer:
      "The document describes calling in Chrome using WebRTC, with account creation, CRM connection, field mapping, rep invitations, and dialer setup as the five launch steps.",
  },
];

export function VoxiqQuestions() {
  return (
    <section className="vr-questions" aria-labelledby="vr-questions-title">
      <div className="vx-container">
        <Reveal className="vr-section-heading">
          <h2 id="vr-questions-title">
            A few details.
            <br />
            <em>Before the next step.</em>
          </h2>
          <p>Answers drawn from the Voxxiq case study document.</p>
        </Reveal>
        <div className="vr-question-list">
          {questions.map(({ question, answer }) => (
            <details key={question} name="voxiq-case-study-faq">
              <summary>
                {question}
                <Plus size={21} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const relatedProjects = [
  { name: "Loop", slug: "loop", image: loopImage },
  { name: "Skynode", slug: "skynode", image: skynodeImage },
  { name: "Babylon OS", slug: "babylon-os", image: babylonImage },
];

export function VoxiqRelatedProjects() {
  return (
    <section className="vr-related" aria-labelledby="vr-related-title">
      <div className="vx-container">
        <Reveal className="vr-related-heading">
          <div>
            <h2 id="vr-related-title">
              More from <em>BytechSol.</em>
            </h2>
          </div>
          <Link to="/portfolio/">
            View portfolio <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="vr-related-grid">
          {relatedProjects.map((project) => (
            <a
              key={project.slug}
              href={externalProjectWebsites[project.slug]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.name + " website preview"}
                  loading="lazy"
                  width={1024}
                  height={600}
                />
              </div>
              <h3>
                {project.name}
                <ArrowUpRight size={22} aria-hidden="true" />
              </h3>
              <span>Explore live project</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
