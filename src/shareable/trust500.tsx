import React from "react";
import gg from "../assets/images/google.webp";
import mc from "../assets/images/micro.png";
import aws from "../assets/images/aws-logo.png";
import purity from "../assets/images/purity-logo.png";
import babylon from "../assets/images/babylon-logo.png";
import racerbio from "../assets/images/racerbio.svg";

const topImages = [aws, gg, mc, purity, babylon, racerbio];

const TrustedBySection = () => {
  return (
    <section className="trust-500 py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <p className="trust-title">Trusted by 500+ global companies</p>

      <section className="scrolling-images-section1 py-5">
        <div className="scroll-row2">
          <div className="scroll-track3">
            {[...topImages, ...topImages].map((img, index) => (
              <img
                key={`top-${index}`}
                src={img}
                alt={`Logo ${index + 1}`}
                className="scroll-image4"
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TrustedBySection;
