import React, { useState } from "react";
import "../../../App.css";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
import sv from "../../../assets/images/services.png"
import os from "../../../assets/images/onseo.png"
import { motion, AnimatePresence } from "framer-motion";

const items = [
     {
    id: 0,
    title: "Web App Development",
    description:
      "Our web app services provide high-performing, reliable, and scalable applications that meet your business objectives. We specialise in developing apps that streamline workflows, improve customer experiences, and enable business development in industries throughout the planning process to deployment.",
    image: fin, // replace with actual path
  },
  {
    id: 1,
    title: "SLB",
    subtitle: "Process Automation & Digital Transformation within SLB’s Ecosyst",
    description:
      "Schlumberger partnered with Folio3 to implement AI-driven time series forecasting, enhancing revenue predictions across categories. This MLOps solution helped optimize pricing strategies and improve market trend analysis.",
    image: fin, // replace with actual path
  },
  {
    id: 2,
    title: "HipLink",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "HipLink leveraged Folio3’s expertise to streamline communication workflows and integrate with enterprise systems.",
    image: ec
  },
  {
    id: 3,
    title: "Barnes & Noble",
    subtitle: "Retail Digital Experience",
    description:
      "Modernizing retail systems and customer engagement through scalable e-commerce integrations.",
    image:  pl 
},
  {
    id: 4,
    title: "Colgate",
    subtitle: "Consumer Goods Automation",
    description:
      "Colgate optimized supply chain and manufacturing systems with AI and automation solutions.",
    image: we
  },
  {
    id: 5,
    title: "SquareTrade",
    subtitle: "Insurance Tech",
    description:
      "Building resilient claim management systems and predictive analytics for warranty services.",
    image: ed
  },
  {
    id: 6,
    title: "AnyRoad",
    subtitle: "Experience Management",
    description:
      "Helping AnyRoad scale their platform and analytics dashboards for experiential marketing.",
    image: sv
  },
  {
    id: 7,
    title: "Brighton Park",
    subtitle: "Investment & Analytics",
    description:
      "Supporting data-driven investment strategies with predictive insights and automation.",
    image: os,
  },
];

const New: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0);
const [fade, setFade] = useState<boolean>(false);

const handleClick = (id: number) => {
  if (id === activeId) return;
  setFade(true); // start fade-out
  setTimeout(() => {
    setActiveId(id); // change content
    setFade(false);  // fade-in
  }, 300); // duration matches CSS transition
};

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div className="container">
      <div className="timeline-container">
        {/* Left Timeline */}
        <div className="timeline-left">
          <ul>
            <h3 className="heads">Web App Development</h3>
            {items
              .filter((item) => item.id !== 0) // don't show "Web App Development" in the list
              .map((item) => (
                <li
  key={item.id}
  className={item.id === activeId ? "active" : ""}
  onClick={() => handleClick(item.id)}
>
  {item.title}
</li>

              ))}
          </ul>
          <button className="discover-btn">Discover More</button>
        </div>

        {/* Center Image */}
        <div className="timeline-center">
            <AnimatePresence mode="wait">
    <motion.div
      key={activeItem?.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
    >
                <img src={activeItem?.image} alt={activeItem?.title} />

    </motion.div>
  </AnimatePresence>
        </div>

        {/* Right Content */}
      <div className="timeline-right">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeItem?.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{activeItem?.title}</h2>
      <p>{activeItem?.description}</p>
      <button className="readmore-btn">Read More</button>
    </motion.div>
  </AnimatePresence>
</div>


      </div>
    </div>
  );
};


export default New;
