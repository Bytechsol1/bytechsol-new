import React from "react";
import purity from "../assets/images/purity-logo.png";
import babylon from "../assets/images/babylon-logo.png";

import oracle from "../assets/images/oracle.svg";
import voxiq from "../assets/images/voxiq-darker.png";
import loop from "../assets/images/loop.svg";
import skynode from "../assets/images/skynode-light-bg.svg";
import racerbio from "../assets/images/racerbio.png";
import expeditedtransport from "../assets/images/expeditedtransport.png";
import expeditedtransport3 from "../assets/images/expeditedtransport3.png";
// Using reliable public URLs for the logos
const logos = [
  {
    name: "Babylon LLC",
    src: babylon,
  },
  {
    name: "100% Pure",
    src: purity,
  },
  {
    name: "Oracle",
    src: oracle,
  },
  {
    name: "Racerbio",
    src: racerbio,
  },
  {
    name: "Expedited Transport 1",
    src: expeditedtransport,
  },

  {
    name: "Expedited Transport 3",
    src: expeditedtransport3,
  },
  {
    name: "Voxiq",
    src: voxiq,
  },
  {
    name: "Loop",
    src: loop,
  },
  {
    name: "SkyNode",
    src: skynode,
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
                  height: "45px", // Standard fixed height for all
                  width: "auto",
                  maxWidth: "180px", // Prevent extremely wide logos from taking over
                  objectFit: "contain",
                  margin: "0 40px",
                  imageRendering: "-webkit-optimize-contrast", // Prevent pixelation
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
