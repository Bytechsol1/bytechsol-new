import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Image as ImageIcon, Plus } from "lucide-react";
import { voxxiqCaseStudy as defaultContent } from "../../data/voxxiqCaseStudy";
import type {
  CaseStudyAction,
  CaseStudyImage,
  CopyBlock,
  DetailBlock,
} from "../../data/voxxiqCaseStudy";
import "./VoxxiqCaseStudy.css";

const preview = import.meta.env.DEV;
function Field({
  value,
  name,
  kind = "body",
}: {
  value: string;
  name: string;
  kind?: "eyebrow" | "title" | "highlight" | "body";
}) {
  if (value) return <span className={`vcs-copy vcs-copy--${kind}`}>{value}</span>;
  return preview ? (
    <span
      className={`vcs-placeholder vcs-placeholder--${kind}`}
      aria-label={`${name}: awaiting content`}
    >
      <span className="vcs-field-name">{name}</span>
      <span className="vcs-line" />
      {kind === "body" && <span className="vcs-line" />}
    </span>
  ) : null;
}
function Heading({
  block,
  name,
  hero = false,
}: {
  block: CopyBlock;
  name: string;
  hero?: boolean;
}) {
  const Title = hero ? "h1" : "h2";
  return (
    <div className="vcs-heading">
      <Field value={block.eyebrow} name={`${name}.eyebrow`} kind="eyebrow" />
      {(preview || block.title || block.highlightedText) && (
        <Title>
          <Field value={block.title} name={`${name}.title`} kind="title" />
          <Field value={block.highlightedText} name={`${name}.highlightedText`} kind="highlight" />
        </Title>
      )}
      <Field value={block.description} name={`${name}.description`} />
    </div>
  );
}
function Visual({ image, name }: { image: CaseStudyImage; name: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="vcs-visual">
      {image?.src && image.alt && !failed ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="vcs-image-empty" aria-hidden="true">
          <span className="vcs-image-cross">
            <ImageIcon size={26} strokeWidth={1} />
          </span>
          {preview && (
            <span className="vcs-image-label">
              {name}
              <small>Product image placeholder</small>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
function Actions({ primary, secondary }: { primary: CaseStudyAction; secondary: CaseStudyAction }) {
  return (
    <div className="vcs-actions">
      {[primary, secondary].map((action, i) => {
        const valid = action?.label.trim() && /^(\/(?!\/)|https:\/\/)/.test(action.href);
        if (!valid || !action)
          return preview ? (
            <span
              key={i}
              className={`vcs-button vcs-button--${i ? "secondary" : "primary"} vcs-button-slot`}
            >
              {i ? "Secondary CTA" : "Primary CTA"}
              <ArrowUpRight size={18} />
            </span>
          ) : null;
        const props = {
          className: `vcs-button vcs-button--${i ? "secondary" : "primary"}${action.href.startsWith("https://") ? " vcs-button--website" : ""}${action.hoverEffect === "circle" ? " vcs-button--circle" : ""}`,
          children: (
            <span className="btn-label">
              {action.label}
              <ArrowUpRight size={18} />
            </span>
          ),
        };
        return action.href.startsWith("/") ? (
          <Link key={i} to={action.href} {...props} />
        ) : (
          <a key={i} href={action.href} target="_blank" rel="noopener noreferrer" {...props} />
        );
      })}
    </div>
  );
}
function Details({
  items,
  name,
  numbered = false,
}: {
  items: DetailBlock[];
  name: string;
  numbered?: boolean;
}) {
  return (
    <div className={`vcs-details ${numbered ? "vcs-details--numbered" : ""}`}>
      {items.map(
        (item, i) =>
          (preview || item.title || item.description) && (
            <article key={i} className="vcs-detail">
              {numbered ? (
                <span className="vcs-number">{String(i + 1).padStart(2, "0")}</span>
              ) : (
                <span className="vcs-icon" aria-hidden="true">
                  <Plus size={22} strokeWidth={1} />
                </span>
              )}
              <h3>
                <Field value={item.title} name={`${name}.${i + 1}.title`} kind="title" />
              </h3>
              <Field value={item.description} name={`${name}.${i + 1}.description`} />
            </article>
          ),
      )}
    </div>
  );
}
export default function VoxxiqCaseStudy({
  content = defaultContent,
}: {
  content?: typeof defaultContent;
}) {
  return (
    <main className={`vcs ${preview ? "vcs--preview" : ""}`}>
      {content.sampleContent && (
        <aside className="vcs-preview-note vcs-sample-note">
          <strong>Sample content</strong> Illustrative copy for design review. Project details and
          outcomes are not verified.
        </aside>
      )}
      {preview && !content.sampleContent && (
        <aside className="vcs-preview-note">
          <span /> CONTENT PREVIEW <span className="vcs-preview-divider">/</span> Empty fields are
          shown as layout placeholders
        </aside>
      )}
      <div className="vcs-wrap">
        <Link to="/portfolio/" className="vcs-back-link">
          &larr; Back to Portfolio
        </Link>
      </div>
      <section className="vcs-section vcs-hero" aria-label="Case study introduction">
        <div className="vcs-wrap vcs-two">
          <div>
            <Heading block={content.hero} name="hero" hero />
            <Actions primary={content.hero.primaryCTA} secondary={content.hero.secondaryCTA} />
          </div>
          <div className="vcs-composition">
            <span className="vcs-orbit" aria-hidden="true" />
            <div className="vcs-main-frame">
              <Visual image={content.hero.images[0]} name="hero.mainImage" />
            </div>
            <div className="vcs-float vcs-float--one">
              <Visual image={content.hero.images[1]} name="hero.detailImage" />
            </div>
            <div className="vcs-float vcs-float--two">
              <Visual image={content.hero.images[2]} name="hero.secondaryImage" />
            </div>
          </div>
        </div>
      </section>
      <section className="vcs-section vcs-overview-section" aria-label="Project overview">
        <div className="vcs-wrap">
          <div className="vcs-overview">
            <div className="vcs-overview-story">
              <Heading block={content.overview} name="overview" />
              <div className="vcs-overview-notes">
                {(preview || content.overview.objective) && (
                  <div className="vcs-overview-note">
                    <span className="vcs-overview-index" aria-hidden="true">
                      01
                    </span>
                    <div>
                      <h3>The objective</h3>
                      <Field value={content.overview.objective} name="overview.objective" />
                    </div>
                  </div>
                )}
                {(preview || content.overview.additionalDescription) && (
                  <div className="vcs-overview-note">
                    <span className="vcs-overview-index" aria-hidden="true">
                      02
                    </span>
                    <div>
                      <h3>The direction</h3>
                      <Field
                        value={content.overview.additionalDescription}
                        name="overview.additionalDescription"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {(preview || content.overview.metadata.some((item) => item.value)) && (
              <aside className="vcs-project-summary" aria-label="Project details">
                <div className="vcs-project-summary-header">
                  <div>
                    <span className="vcs-summary-eyebrow">Project at a glance</span>
                    <p>
                      {content.overview.metadata.find((item) => item.label === "Project Name")
                        ?.value || content.hero.title}
                    </p>
                  </div>
                  <span className="vcs-summary-mark" aria-hidden="true">
                    <ArrowUpRight size={26} strokeWidth={1.5} />
                  </span>
                </div>
                <dl className="vcs-metadata">
                  {content.overview.metadata.map(
                    (item) =>
                      item.label !== "Project Name" &&
                      (preview || item.value) && (
                        <div key={item.label}>
                          <dt>{item.label}</dt>
                          <dd>
                            <Field value={item.value} name={item.label} />
                          </dd>
                        </div>
                      ),
                  )}
                </dl>
                <div className="vcs-summary-footer">
                  <span aria-hidden="true" /> A BytechSol project
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
      <section className="vcs-section vcs-challenge" aria-label="The challenge">
        <div className="vcs-wrap">
          <Heading block={content.challenge} name="challenge" />
          <Details items={content.challenge.items} name="challenge" numbered />
        </div>
      </section>
      <section className="vcs-solution" aria-label="Our approach and solution">
        <div className="vcs-solution-copy">
          <Heading block={content.solution} name="solution" />
          <ul className="vcs-features">
            {content.solution.features.map(
              (item, i) =>
                (preview || item.title || item.description) && (
                  <li key={i}>
                    <span aria-hidden="true">
                      <ArrowUpRight size={24} />
                    </span>
                    <div>
                      <Field
                        value={item.title}
                        name={`solution.features.${i + 1}.title`}
                        kind="title"
                      />
                      <Field
                        value={item.description}
                        name={`solution.features.${i + 1}.description`}
                      />
                    </div>
                  </li>
                ),
            )}
          </ul>
          <Field value={content.solution.supportingContent} name="solution.supportingContent" />
        </div>
        <div className="vcs-solution-art">
          {content.solution.images.map((image, i) => (
            <div key={i} className={`vcs-solution-frame vcs-solution-frame--${i}`}>
              <Visual image={image} name={`solution.image.${i + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <div className="vcs-showcases">
        {content.showcase.map((block, i) => (
          <section
            key={i}
            className={`vcs-section vcs-showcase vcs-showcase--${i % 2}`}
            aria-label={`Product showcase ${i + 1}`}
          >
            <div className="vcs-wrap vcs-two">
              <div>
                <span className="vcs-showcase-number" aria-hidden="true">
                  0{i + 1}
                  <span aria-hidden="true">
                    <ArrowUpRight size={32} />
                  </span>
                </span>
                <Heading block={block} name={`showcase.${i + 1}`} />
              </div>
              <Visual image={block.image} name={`showcase.${i + 1}.image`} />
            </div>
          </section>
        ))}
      </div>
      <section className="vcs-section vcs-soft" aria-label="Core capabilities">
        <div className="vcs-wrap">
          <Heading block={content.capabilities} name="capabilities" />
          <Details items={content.capabilities.items} name="capabilities" />
        </div>
      </section>
      <section className="vcs-section" aria-label="Technologies and contribution">
        <div className="vcs-wrap">
          <Heading block={content.engineering} name="engineering" />
          <div className="vcs-technologies">
            {content.engineering.technologies.length
              ? content.engineering.technologies.map((tech, i) =>
                  tech.image ? (
                    <Visual key={i} image={tech.image} name={tech.name} />
                  ) : (
                    <div className="vcs-tech-slot vcs-tech-name" key={i}>
                      <Plus size={20} strokeWidth={1} aria-hidden="true" />
                      <span>{tech.name}</span>
                    </div>
                  ),
                )
              : preview &&
                Array.from({ length: 6 }, (_, i) => (
                  <div className="vcs-tech-slot" key={i}>
                    <Plus size={20} strokeWidth={1} />
                    <span>Technology {i + 1}</span>
                  </div>
                ))}
          </div>
          <Details items={content.engineering.contributions} name="contributions" />
        </div>
      </section>
      <section className="vcs-section vcs-outcome" aria-label="Project outcome">
        <div className="vcs-wrap">
          <Heading block={content.outcome} name="outcome" />
          <Details items={content.outcome.items} name="outcome" />
        </div>
      </section>
      <section className="vcs-final" aria-label="Next steps">
        <div className="vcs-wrap vcs-two">
          <div>
            <Heading block={content.finalCTA} name="finalCTA" />
            <Actions
              primary={content.finalCTA.primaryCTA}
              secondary={content.finalCTA.secondaryCTA}
            />
          </div>
          <Visual image={content.finalCTA.image} name="finalCTA.image" />
        </div>
      </section>
    </main>
  );
}
