import React from "react";
import t1 from "../assets/images/tss1.png"
import t2 from "../assets/images/tss2.png"
import op from "../assets/images/oppa.jpg"

const topImages = [t1, t2, op];

const TrustedBySection = () => {
  return (
    <section className="trust-500 py-5" style={{backgroundColor:"#f9f9f9"}}>
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
