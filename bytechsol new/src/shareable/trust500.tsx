import React from "react";
import opa from "../assets/images/oppa.jpg";
import lad from "../assets/images/lade.png";
import mm from "../assets/images/mmo.png";
import ne from "../assets/images/neo.png"

const topImages = [opa, lad, mm, ne];

const TrustedBySection = () => {
  return (
    <section className="trust-500">
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
