import React from "react";
import purity from "../assets/images/purity-logo.png";
import babylon from "../assets/images/babylon-logo.png";
import cisco from "../assets/images/cisco.svg";
import akamai from "../assets/images/akamai.svg";
import sap from "../assets/images/sap.svg";
import microsoft from "../assets/images/microsoft.svg";
import oracle from "../assets/images/oracle.svg";
import hp from "../assets/images/hp.svg";

// Using reliable public URLs for the logos
const logos = [
  {
    name: "Babylon LLC",
    src: babylon,
    height: "80px", // Increased from 60px
  },
  {
    name: "100% Pure",
    src: purity,
  },
  {
    name: "Cisco",
    src: cisco,
  },
  {
    name: "Akamai",
    src: akamai,
  },
  {
    name: "SAP",
    src: sap,
  },
  {
    name: "Microsoft",
    src: microsoft,
  },
  {
    name: "Oracle",
    src: oracle,
    height: "35px", // Increased from 22px
  },
  {
    name: "HP",
    src: hp,
  },
];

const TrustedBySection = () => {
  return (
    <section
      className="trust-500 py-3"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
        overflow: "hidden" // Ensure no scrollbars
      }}
    >
      <section className="scrolling-images-section1 py-2">
        <div className="scroll-row2">
          <div className="scroll-track3" style={{ display: "flex", alignItems: "center" }}>
            {/* Duplicate the array to create seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <img
                key={`logo-${index}`}
                src={logo.src}
                alt={`${logo.name} Logo`}
                style={{
                  height: logo.height || "55px", // Increased default height
                  width: "auto",
                  objectFit: "contain",
                  margin: "0 40px", // Adjusted spacing
                  filter: "none",
                  opacity: 1,
                  background: "transparent",
                  boxShadow: "none",
                  borderRadius: "0",
                  border: "none",
                  display: "block"
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TrustedBySection;
