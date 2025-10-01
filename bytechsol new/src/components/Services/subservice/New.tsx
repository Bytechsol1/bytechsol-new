import React, { useState } from "react";
import "../../../App.css";
import fin from "../../../assets/images/fintech.png"
import ec from "../../../assets/images/ecom.png"
import pl from "../../../assets/images/plat.png"
import we from "../../../assets/images/web3.png"
import ed from "../../../assets/images/edtech.png"
// import sv from "../../../assets/images/services.png"
// import os from "../../../assets/images/onseo.png"
import { motion, AnimatePresence } from "framer-motion";

const items = [
     {
    id: 0,
    title: "UI/UX Design",
    description:
      "Our UI/UX design services enable brands to develop user-centered, aesthetically diverse, and results-driven digital experiences. We create custom interfaces, including design and functionality, together with your brand value, to make every experience feel seamless, interesting, and performance-driven.",
    image: fin, 
  },
  {
    id: 1,
    title: "No more design guesswork",
    subtitle: "Process Automation & Digital Transformation within SLB’s Ecosyst",
    description:
      "Your customers must get your product at a glance. You can count on our unique User Interface / User experience development process that will lead to your page telling more about your value, the result of the natural navigation, and a captivating layout that will make people spend more time on your page and convert more quickly.",
    image: fin, 
  },
  {
    id: 2,
    title: "Launch without delays",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We offer timely user interface designs at the required quality. The organised workflow, like wireframes and prototypes, enables efficiency and helps you launch within the shortest time with a design that is ready to deliver.",
    image: ec
  },
  {
    id: 3,
    title: "Interfaces that speak your brand",
    subtitle: "Retail Digital Experience",
    description:
      "Each and every product is different; this is why we design custom UI by your brand voice. Whether it is a color palette or typography, we make sure that everything conveys your personality along with boosting usability.",
    image:  pl 
},
  {
    id: 4,
    title: "Mobile-first, responsive designs",
    subtitle: "Consumer Goods Automation",
    description:
      "Our approach to design utilises mobile-first concepts so that your web presence is flawless across mobile phones and tablets. Our responsive design practice raises accessibility, increases user interaction, and augments the results of SEO.",
    image: we
  },
  {
    id: 5,
    title: "Tested for usability & performance",
    subtitle: "Insurance Tech",
    description:
      "We also conduct usability tests before handoff to make sure that your user experience design will be error-free when working in that actual situation. We encode everything with the specifics of speed, access, and conversion in mind.",
    image: ed
  },
  // {
  //   id: 6,
  //   title: "AnyRoad",
  //   subtitle: "Experience Management",
  //   description:
  //     "Helping AnyRoad scale their platform and analytics dashboards for experiential marketing.",
  //   image: sv
  // },
  // {
  //   id: 7,
  //   title: "Brighton Park",
  //   subtitle: "Investment & Analytics",
  //   description:
  //     "Supporting data-driven investment strategies with predictive insights and automation.",
  //   image: os,
  // },
];

const New: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0);
const [fade, setFade] = useState<boolean>(false);

const handleClick = (id: number) => {
  if (id === activeId) return;
  setFade(true); 
  setTimeout(() => {
    setActiveId(id); 
    setFade(false); 
  }, 300); 
};

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div className="container">
      <div className="timeline-container">
        {/* Left Timeline */}
        <div className="timeline-left">
          <ul>
            <h3 className="heads">UI/UX Design</h3>
            {items
              .filter((item) => item.id !== 0) 
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
