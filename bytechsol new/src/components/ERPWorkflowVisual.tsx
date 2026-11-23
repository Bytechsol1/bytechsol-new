import type { CSSProperties } from "react";
import { Activity, Building2, Database, GraduationCap, Layers3, Link2, Plane, ShoppingCart, TrendingUp, Truck, Users } from "lucide-react";
import logo from "../assets/images/logo.svg";
import wordmark from "../assets/images/Logotext.svg";
import "../assets/components-css/erp-workflow-visual.css";

const workflows = [
  { title: "Health Systems", detail: "Care, billing & supplies", Icon: Activity },
  { title: "Commerce Ops", detail: "Orders, payments & stock", Icon: ShoppingCart },
  { title: "Sales Growth", detail: "Leads to lasting relationships", Icon: TrendingUp },
  { title: "Supply Chain", detail: "Purchasing to delivery", Icon: Truck },
  { title: "Travel Operations", detail: "Bookings & partner coordination", Icon: Plane },
  { title: "Learning Flows", detail: "Courses, learners & enrollment", Icon: GraduationCap },
  { title: "Real Estate Projects", detail: "Properties, budgets & projects", Icon: Building2 },
  { title: "Non-Profit Teams", detail: "Donors, programs & reporting", Icon: Users },
];

export default function ERPWorkflowVisual() {
  return (
    <figure className="erp-workflow-visual" aria-labelledby="erp-workflow-visual-title">
      <div className="erp-wv-brandbar">
        <div className="erp-wv-brand"><img src={logo} width="21" height="32" alt="" /><img src={wordmark} width="114" height="22" alt="BytechSol" /></div>
        <span className="erp-wv-multiply" aria-hidden="true">×</span>
        <span className="erp-wv-odoo">odoo</span>
      </div>
      <div className="erp-wv-body">
        <div className="erp-wv-captionline"><span>CONNECTED BUSINESS OPERATIONS</span><Layers3 size={16} strokeWidth={1.6} aria-hidden="true" /></div>
        <div className="erp-wv-control">
          <span className="erp-wv-control-icon"><Database size={25} strokeWidth={1.5} aria-hidden="true" /></span>
          <div><h3 id="erp-workflow-visual-title">ERP Control Layer</h3><p>One shared system for every team.</p></div>
        </div>
        <div className="erp-wv-grid" aria-label="Eight connected industry workflows">
          {workflows.map(({ title, detail, Icon }, index) => <div key={title} className="erp-wv-card" style={{ "--erp-wv-row": index % 4 + 1, "--erp-wv-column": index < 4 ? 1 : 3 } as CSSProperties}>
            <span className="erp-wv-card-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
            <div><h4>{title}</h4><p>{detail}</p></div>
          </div>)}
          {[1, 2, 3, 4].map((row) => <div key={row} className={`erp-wv-junction erp-wv-junction-${row}`} style={{ gridRow: row }} aria-hidden="true"><span /></div>)}
        </div>
        <figcaption className="erp-wv-footer"><Link2 size={16} aria-hidden="true" /><span>Shared data. Connected teams.</span><span className="erp-wv-count">8 workflows</span></figcaption>
      </div>
    </figure>
  );
}
