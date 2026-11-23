import { ChevronDown, ArrowUpRight } from "lucide-react";
import SetupJourney from "./SetupJourney";
import Reveal from "./CaseStudyReveal";
import { voxiqDocumentContent as document } from "../../data/voxiqDocumentContent";
import "./VoxiqDocumentSections.css";

export function VoxiqPlatformModules() {
  return (
    <section className="vd-modules" aria-labelledby="vd-modules-title">
      <div className="vx-container">
        <Reveal className="vd-section-heading">
          <div>
            <h2 id="vd-modules-title">The Voxxiq platform</h2>
          </div>
          <p>
            Calling, routing, messaging, and visibility share the same working context. Explore the
            modules described in the source document.
          </p>
        </Reveal>
        <div className="vd-module-list">
          {document.modules.map((module, index) => (
            <details key={module.title} className="vd-module">
              <summary>
                <span className="vd-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{module.title}</h3>
                <span className="vd-module-category">{module.category}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{module.description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VoxiqSetup() {
  return (
    <section className="vd-setup" aria-labelledby="vd-setup-title">
      <div className="vx-container">
        <Reveal className="vd-section-heading">
          <div>
            <h2 id="vd-setup-title">How it works</h2>
          </div>
          <p>
            A five-step setup connects the workspace, the customer record, and the people making the
            calls.
          </p>
        </Reveal>
        <SetupJourney />
      </div>
    </section>
  );
}

export function VoxiqPricing() {
  return (
    <section className="vd-pricing" aria-labelledby="vd-pricing-title">
      <div className="vx-container">
        <Reveal className="vd-section-heading">
          <div>
            <h2 id="vd-pricing-title">Pricing and packaging</h2>
          </div>
          <p>
            Explore the calling plans and SMS package, directly from Voxxiq.
          </p>
        </Reveal>
        <div className="vd-pricing-studio">
          <div className="vd-pricing-toolbar">
            <div className="vd-billing-switch" aria-label="Annual pricing preview">
              <span>Monthly</span>
              <span className="is-selected">Annual</span>
            </div>
          </div>
          <div className="vd-pricing-scroll" tabIndex={0} role="region" aria-label="Annual pricing screenshot. Scroll to explore all plans and features.">
            <img src="/media/voxxiq-pricing-annual.webp" width="2432" height="2800"
              loading="lazy" alt="Voxxiq annual pricing comparison: Calls Starter, Calls Growth, Calls Scale, and SMS. Full details available on the live pricing page." />
          </div>
          <div className="vd-pricing-studio-foot">
            <span>Scroll to explore the plan comparison</span>
          </div>
        </div>
        <div className="vd-pricing-live">
          <a href="https://voxxiq.com/pricing" target="_blank" rel="noopener noreferrer">
            Explore live pricing <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
