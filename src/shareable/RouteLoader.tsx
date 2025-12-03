import React from "react";

export const RouteLoader: React.FC = () => (
  <div style={{ display: "grid", placeItems: "center", minHeight: "40vh" }}>
    <div className="spinner-border" role="status" aria-label="Loading">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
