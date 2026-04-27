import React from "react";
import {
  Heart,
  TrendingUp,
  ShoppingCart,
  Truck,
  GraduationCap,
  Building2,
  Plane,
  Users,
  ArrowRight,
} from "lucide-react";
import odooPartnerLogo from "../assets/images/odoo-learning-partner.svg";
import bytechsolLogo from "../assets/images/logo.svg";
import "../assets/components-css/erp-solar.css";

const proofItems = [
  { value: "8", label: "Industry Workflows" },
  { value: "ERP", label: "Operations Driven" },
  { value: "24/7", label: "Support Mindset" },
];

const commandNodes = [
  { label: ["Health", "Systems"], Icon: Heart, cls: "erp-node-card erp-p-teal erp-node-top-left", iconColor: "#99f6e4" },
  { label: ["Commerce", "Ops"], Icon: ShoppingCart, cls: "erp-node-card erp-p-orange erp-node-top-center", iconColor: "#fde68a" },
  { label: ["Sales", "Growth"], Icon: TrendingUp, cls: "erp-node-card erp-p-green erp-node-top-right", iconColor: "#bbf7d0" },
  { label: ["Supply", "Chain"], Icon: Truck, cls: "erp-node-card erp-p-amber erp-node-right", iconColor: "#fde68a" },
  { label: ["Travel", "Operations"], Icon: Plane, cls: "erp-node-card erp-p-purple erp-node-bottom-right", iconColor: "#e9d5ff" },
  { label: ["Learning", "Flows"], Icon: GraduationCap, cls: "erp-node-card erp-p-blue erp-node-bottom-center", iconColor: "#bfdbfe" },
  { label: ["Real Estate", "Projects"], Icon: Building2, cls: "erp-node-card erp-p-slate erp-node-bottom-left", iconColor: "#e2e8f0" },
  { label: ["Non-Profit", "Teams"], Icon: Users, cls: "erp-node-card erp-p-indigo erp-node-left", iconColor: "#c7d2fe" },
];

const ERPPartnerSection: React.FC = () => (
  <section className="erp-section-shell">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="erp-command-layout">
        <div className="erp-command-stage">
          <div className="erp-stage-grid" />
          <div className="erp-stage-glow erp-stage-glow-a" />
          <div className="erp-stage-glow erp-stage-glow-b" />
          <div className="erp-stage-connector erp-stage-connector-a" />
          <div className="erp-stage-connector erp-stage-connector-b" />
          <div className="erp-stage-connector erp-stage-connector-c" />

          <div className="erp-command-core">
            <div className="erp-command-core-ring" />
            <div className="erp-command-core-panel">
              <div className="erp-command-core-logo">
                <img src={bytechsolLogo} alt="BytechSol" />
              </div>
              <span className="erp-command-core-kicker">BytechSol x Odoo</span>
              <h3 className="erp-command-core-title">ERP Control Layer</h3>
              <p className="erp-command-core-text">
                Connected workflows for departments, vendors, customers, and reporting.
              </p>
            </div>
          </div>

          {commandNodes.map((node, index) => (
            <div key={index} className={node.cls}>
              <div className="erp-node-badge">
                <node.Icon size={16} color={node.iconColor} strokeWidth={1.9} />
              </div>
              <div className="erp-node-copy">
                {node.label.map((line, lineIndex) => (
                  <p key={lineIndex} className="erp-node-label">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

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
