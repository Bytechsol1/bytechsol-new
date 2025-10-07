import React from "react";
import "../assets/components-css/CircularText.css";
import centerImg from "../assets/images/lg.svg";

const CircularText: React.FC = () => {
  const text = "TALK TO US * TALK TO US *";
  const letters = text.split("");
  const angleStep = 360 / letters.length;

  return (
    <>
      <div className="circle">
        {letters.map((letter, i) => (
          <span key={i} style={{ ["--i" as any]: `${i * angleStep}deg` }}>
            {letter}
          </span>
        ))}
        <div className="circle-center">
          <img src={centerImg} alt="center" />
        </div>
      </div>
    </>
  );
};

export default CircularText;
