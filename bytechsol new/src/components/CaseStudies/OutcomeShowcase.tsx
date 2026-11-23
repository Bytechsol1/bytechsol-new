import homepage from "../../assets/images/voxiq-hover.png";
import analytics from "../../assets/images/voxiq-analytics.png";
import messaging from "../../assets/images/voxiq-whatsapp.png";
import calling from "../../assets/images/voxxiq-sales-team-clean.png";
import "./OutcomeShowcase.css";

const columns = [
  [{ src: homepage, label: "Sales communication" }, { src: messaging, label: "Messaging" }, { src: analytics, label: "Sales analytics" }],
  [{ src: analytics, label: "Performance visibility" }, { src: homepage, label: "Connected workspace" }, { src: calling, label: "Calling experience" }],
  [{ src: messaging, label: "Customer conversations" }, { src: calling, label: "Outbound calling" }, { src: analytics, label: "Reporting" }],
];

export default function OutcomeShowcase() {
  return (
    <div className="vo-showcase" aria-label="Moving gallery of Voxxiq website and communication visuals">
      <div className="vo-showcase-grid" aria-hidden="true" />
      <div className="vo-showcase-perspective">
        {columns.map((items, index) => (
          <div className={`vo-showcase-column vo-showcase-column--${index}`} key={index}>
            {[0, 1].map((copy) => (
              <div className="vo-showcase-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {items.map((item) => (
                  <figure className="vo-showcase-card" key={item.label}>
                    <div className="vo-showcase-browser" aria-hidden="true"><i /><i /><i /></div>
                    <img src={item.src} alt={copy === 0 ? `Voxxiq ${item.label.toLowerCase()} website visual` : ""} loading="lazy" width={600} height={320} />
                    <figcaption>{item.label}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
