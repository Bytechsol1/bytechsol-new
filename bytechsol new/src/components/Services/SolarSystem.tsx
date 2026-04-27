import React from "react";
import "../../assets/components-css/SolarSystem.css";
// Icons
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3, FaFigma, FaPython } from "react-icons/fa";
import { SiOdoo, SiTypescript } from "react-icons/si";
// Logo
import logo from "../../assets/images/logo.svg";

const SolarSystem: React.FC = () => {
    return (
        <div className="solar-container">
            {/* Sun / Center */}
            <div className="solar-sun">
                <img src={logo} alt="BytechSol Logo" />
            </div>

            {/* Orbit 1 (Inner) */}
            <div className="solar-orbit orbit-1">
                {/* 1. React (Top) */}
                <div className="solar-planet" style={{ top: "-25px", left: "50%", marginLeft: "-25px" }}>
                    <div className="planet-icon"><FaReact color="#61DAFB" /></div>
                </div>
                {/* 2. JS (Right) */}
                <div className="solar-planet" style={{ top: "50%", right: "-25px", marginTop: "-25px" }}>
                    <div className="planet-icon"><FaJs color="#F7DF1E" /></div>
                </div>
                {/* 3. Node (Bottom) */}
                <div className="solar-planet" style={{ bottom: "-25px", left: "50%", marginLeft: "-25px" }}>
                    <div className="planet-icon"><FaNodeJs color="#339933" /></div>
                </div>
                {/* 4. TS (Left) */}
                <div className="solar-planet" style={{ top: "50%", left: "-25px", marginTop: "-25px" }}>
                    <div className="planet-icon"><SiTypescript color="#3178C6" /></div>
                </div>
            </div>

            {/* Orbit 2 (Outer) */}
            <div className="solar-orbit orbit-2">
                {/* 1. Python (Top) */}
                <div className="solar-planet" style={{ top: "-25px", left: "50%", marginLeft: "-25px" }}>
                    <div className="planet-icon"><FaPython color="#3776AB" /></div>
                </div>
                {/* 2. CSS (Top Right - approx 18 deg) */}
                <div className="solar-planet" style={{ top: "28.4%", left: "91.5%" }}>
                    <div className="planet-icon"><FaCss3 color="#1572B6" /></div>
                </div>
                {/* 3. Figma (Bottom Right - approx 54 deg down) */}
                <div className="solar-planet" style={{ top: "84%", left: "73%" }}>
                    <div className="planet-icon"><FaFigma color="#F24E1E" /></div>
                </div>
                {/* 4. Odoo (Bottom Left - approx 126 deg) */}
                <div className="solar-planet" style={{ top: "84%", left: "14.5%" }}>
                    <div className="planet-icon"><SiOdoo color="#714B67" /></div>
                </div>
                {/* 5. HTML (Top Left - approx 198 deg) */}
                <div className="solar-planet" style={{ top: "28.4%", left: "-3.6%" }}>
                    <div className="planet-icon"><FaHtml5 color="#E34F26" /></div>
                </div>
            </div>
        </div>
    );
};

export default SolarSystem;
