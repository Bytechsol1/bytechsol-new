import { ArrowUpRight } from "lucide-react";
import Reveal from "./CaseStudyReveal";
import CaseStudyPhonePreview from "./CaseStudyPhonePreview";
import OutcomeExplorer from "./OutcomeExplorer";
import { voxiqPremiumContent as content } from "../../data/voxiqPremiumContent";

export function ProjectOverview() {
  return (
    <section className="vn-overview" id="project-overview" aria-labelledby="vn-overview-title">
      <div className="vx-container vn-overview-grid">
        <div className="vn-overview-editorial">
          <Reveal className="vn-overview-copy">
            <h2 id="vn-overview-title">Executive summary</h2>
            <div className="vn-overview-introduction">
              <p>{content.overview.description}</p>
              <p className="vn-objective">{content.overview.objective}</p>
            </div>
          </Reveal>
          <Reveal className="vn-project-details">
            <dl>
              <div>
                <dt>Project</dt>
                <dd>Voxxiq</dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>{content.hero.industry}</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Browser-based SaaS</dd>
              </div>
              <div>
                <dt>Product category</dt>
                <dd>{content.hero.category}</dd>
              </div>
              <div>
                <dt>Live product</dt>
                <dd>
                  <a href={content.website} target="_blank" rel="noopener noreferrer">
                    Explore Voxxiq <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
        <Reveal className="vn-overview-phone">
          <CaseStudyPhonePreview />
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectOutcomes() {
  return (
    <section className="vn-outcome" aria-labelledby="vn-outcome-title">
      <div className="vx-container">
        <Reveal>
          <h2 id="vn-outcome-title">Outcomes Voxxiq reports</h2>
        </Reveal>
        {content.metrics.length > 0 ? (
          <div className="vn-verified-metrics">
            {content.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <OutcomeExplorer />
        )}
      </div>
    </section>
  );
}
