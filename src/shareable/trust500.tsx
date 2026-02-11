import React from "react";
import purity from "../assets/images/purity-logo.png";
import babylon from "../assets/images/babylon-logo.png";

// Using reliable public URLs for the logos
const logos = [
  {
    name: "Babylon LLC",
    src: babylon,
    height: "60px", // Custom height for Babylon
  },
  {
    name: "100% Pure",
    src: purity,
  },
  {
    name: "Cisco",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
  },
  {
    name: "Akamai",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Akamai_logo.svg/2560px-Akamai_logo.svg.png",
  },
  {
    name: "SAP",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    name: "Oracle",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    height: "22px",
  },
  {
    name: "HP",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
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
                  height: logo.height || "35px", // Use custom height or default
                  width: "auto",
                  objectFit: "contain",
                  margin: "0 50px", // Increased spacing
                  filter: "none", // No filters
                  opacity: 1,
                  background: "transparent", // Force transparent
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
