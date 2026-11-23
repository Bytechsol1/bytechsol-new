import {
  ArrowDown,
  ArrowRight,
  Building2,
  ContactRound,
  House,
  ListChecks,
  Network,
  PhoneCall,
  Users,
} from "lucide-react";
import "./IndustryWorkflowVisuals.css";

export function BusinessRoutingVisual() {
  return (
    <figure className="vu-routing-visual">
      <div className="vu-routing-intro">
        <PhoneCall size={24} aria-hidden="true" />
        <h3>Inbound and IVR</h3>
      </div>
      <div className="vu-routing-map">
        <span className="vu-routing-origin">Incoming customer call</span>
        <ArrowDown size={19} aria-hidden="true" />
        <span className="vu-routing-center">IVR & routing</span>
        <div className="vu-routing-branches">
          <div>
            <Users size={22} aria-hidden="true" />
            <strong>Available staff</strong>
            <span>Answer the inquiry</span>
          </div>
          <div>
            <PhoneCall size={22} aria-hidden="true" />
            <strong>Missed call</strong>
            <span>Coordinate a callback</span>
          </div>
        </div>
        <span className="vu-routing-outcome">
          <ListChecks size={17} aria-hidden="true" />
          Customer booking & follow-up
        </span>
      </div>
      <figcaption>Illustrative routing workflow · enabled modules vary by account</figcaption>
    </figure>
  );
}

export function EnterpriseStructureVisual() {
  return (
    <figure className="vu-structure-visual">
      <div className="vu-structure-title">
        <h3>Enterprise controls</h3>
      </div>
      <div className="vu-structure-map">
        <div className="vu-structure-core">
          <Building2 size={26} aria-hidden="true" />
          <strong>Shared calling workspace</strong>
        </div>
        <div className="vu-structure-branches">
          <div>
            <Users size={23} aria-hidden="true" />
            <strong>Teams</strong>
            <span>Roles & permissions</span>
          </div>
          <div>
            <PhoneCall size={23} aria-hidden="true" />
            <strong>Calling</strong>
            <span>Numbers & seats</span>
          </div>
          <div>
            <Network size={23} aria-hidden="true" />
            <strong>Visibility</strong>
            <span>Activity & reporting</span>
          </div>
        </div>
      </div>
      <figcaption>Illustrative account structure · confirm enterprise plan options</figcaption>
    </figure>
  );
}

export function PropertyJourneyVisual() {
  return (
    <figure className="vu-property-journey">
      <div className="vu-property-journey-title">
        <House size={26} aria-hidden="true" />
        <h3>Real estate</h3>
      </div>
      <ol>
        <li>
          <span>
            <ContactRound size={21} aria-hidden="true" />
          </span>
          <div>
            <strong>Receive the inquiry</strong>
            <p>Capture interest and assign the lead.</p>
          </div>
        </li>
        <li>
          <span>
            <PhoneCall size={21} aria-hidden="true" />
          </span>
          <div>
            <strong>Start the conversation</strong>
            <p>Understand requirements and record the next action.</p>
          </div>
        </li>
        <li>
          <span>
            <House size={21} aria-hidden="true" />
          </span>
          <div>
            <strong>Coordinate a viewing</strong>
            <p>Arrange the appointment and update the CRM.</p>
          </div>
        </li>
      </ol>
      <figcaption>
        Illustrative lead journey · CRM and calendar connections subject to availability
      </figcaption>
    </figure>
  );
}

export function SaaSLeadVisual() {
  return (
    <figure className="vu-saas-lead-visual">
      <div className="vu-saas-lead-title">
        <span>PRODUCT INTEREST → SALES CONTEXT</span>
        <h3>
          AI Agent Caller
          <br />
          <em>Early access</em>
        </h3>
      </div>
      <div className="vu-saas-lead-map">
        <div className="vu-saas-lead-input">
          <span>Trial registration</span>
          <span>Demo inquiry</span>
        </div>
        <ArrowDown size={22} aria-hidden="true" />
        <div className="vu-saas-lead-core">
          <ContactRound size={25} aria-hidden="true" />
          <strong>Contact context</strong>
          <span>Supported CRM synchronization</span>
        </div>
        <div className="vu-saas-lead-output">
          <span>Sales conversation</span>
          <ArrowRight size={18} aria-hidden="true" />
          <span>Book a demo</span>
        </div>
      </div>
      <figcaption>
        Illustrative follow-up workflow · account configuration determines availability
      </figcaption>
    </figure>
  );
}
