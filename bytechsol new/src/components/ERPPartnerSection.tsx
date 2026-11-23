import React from "react";
import { ArrowRight } from "lucide-react";
import odooPartnerLogo from "../assets/images/odoo-learning-partner.svg";
import bytechsolLogo from "../assets/images/logo.svg";
import "../assets/components-css/erp-solar.css";
import ERPWorkflowVisual from "./ERPWorkflowVisual";

const proofItems = [
  { value: "8", label: "Industry Workflows" },
  { value: "ERP", label: "Operations Driven" },
  { value: "24/7", label: "Support Mindset" },
];

const ERPPartnerSection: React.FC = () => (
  <section className="erp-section-shell">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="erp-command-layout">
        <ERPWorkflowVisual />

        <div className="erp-command-copy">
          <div className="erp-brand-row">
            <div className="erp-brand-chip">
              <img src={bytechsolLogo} alt="BytechSol" className="erp-brand-logo" />
            </div>
            <span className="erp-brand-divider">x</span>
            <img src={odooPartnerLogo} alt="Odoo Learning Partner" className="erp-odoo-logo" />
          </div>

          <div className="erp-section-eyebrow">Trusted Odoo Delivery Partner</div>

          <h2 className="erp-section-headline">
            A Partner For Global Enterprise Success: Optimized Solutions for
            Your Business.
          </h2>

          <p className="erp-section-body">
            We are certified partners who help businesses streamline operations
            and improve efficiency by customizing and deploying advanced ERP
            applications. Our expertise covers deep optimization across various
            industries to meet your exact needs.
          </p>

          <div className="erp-proof-grid">
            {proofItems.map((item) => (
              <div key={item.label} className="erp-proof-card">
                <span className="erp-proof-value">{item.value}</span>
                <span className="erp-proof-label">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="erp-cta-row">
            <span className="erp-section-cta">CONSULT US TODAY!</span>
            <div className="erp-cta-arrow">
              <ArrowRight size={15} color="#27AAE1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ERPPartnerSection;
