import React, { useState } from "react";
import "../../../App.css";
import { motion, AnimatePresence } from "framer-motion";
import mb from "../../../assets/images/mb1.png";
import wb from "../../../assets/images/web.png";
import ld from "../../../assets/images/landesg.jpg";
import cr from "../../../assets/images/creatim.jpg";
import br from "../../../assets/images/braim.png";
import w01 from "../../../assets/images/wd01.png"
import s02 from "../../../assets/images/sd02.png" 
import p03 from "../../../assets/images/pw03.png"
import s04 from "../../../assets/images/ss04.png"
import e05 from "../../../assets/images/ea05.png"
import os from "../../../assets/images/onseo.png"
import fs from "../../../assets/images/offseo.png"
import ts from "../../../assets/images/techseo.png"
import lp2 from "../../../assets/images/lapto2.jpg"
import v1 from "../../../assets/images/visual1.jpg"
import sc from "../../../assets/images/social.png"
import sv from "../../../assets/images/servimg.png";
import ip from "../../../assets/images/imple.png"
import lp from "../../../assets/images/laptop-image.png"
import am from "../../../assets/images/aml.jpg"
import cs from "../../../assets/images/cuseomiza.png"
import sp from "../../../assets/images/support.png"
import es from "../../../assets/images/estore.png"
import sy from "../../../assets/images/shopify.png"
import wo from "../../../assets/images/woocom.png"
import py from "../../../assets/images/payment.png"
import mk from "../../../assets/images/marketplace.png"
import mi from "../../../assets/images/migra.png";
import tc from "../../../assets/images/tecno.png";
import md from "../../../assets/images/module.png";
import ig from "../../../assets/images/integra.png";
import cm from "../../../assets/images/cms.png";
import cw from "../../../assets/images/cwapp.png";
import pl from "../../../assets/images/plugimg.png";
import ap from "../../../assets/images/apimg.png";
import sd from "../../../assets/images/servimg.png";


const items = [
  {
    id: 0,
    title: "UI/UX Design",
    description:
      "Our UI/UX design services enable brands to develop user-centered, aesthetically diverse, and results-driven digital experiences. We create custom interfaces, including design and functionality, together with your brand value, to make every experience feel seamless, interesting, and performance-driven.",
    image: mb,
  },
  {
    id: 1,
    title: "No more design guesswork",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "Your customers must get your product at a glance. You can count on our unique User Interface / User experience development process that will lead to your page telling more about your value, the result of the natural navigation, and a captivating layout that will make people spend more time on your page and convert more quickly.",
    image: mb,
  },
  {
    id: 2,
    title: "Launch without delays",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We offer timely user interface designs at the required quality. The organised workflow, like wireframes and prototypes, enables efficiency and helps you launch within the shortest time with a design that is ready to deliver.",
    image: mb,
  },
  {
    id: 3,
    title: "Interfaces that speak your brand",
    subtitle: "Retail Digital Experience",
    description:
      "Each and every product is different; this is why we design custom UI by your brand voice. Whether it is a color palette or typography, we make sure that everything conveys your personality along with boosting usability.",
    image: mb,
  },
  {
    id: 4,
    title: "Mobile-first, responsive designs",
    subtitle: "Consumer Goods Automation",
    description:
      "Our approach to design utilises mobile-first concepts so that your web presence is flawless across mobile phones and tablets. Our responsive design practice raises accessibility, increases user interaction, and augments the results of SEO.",
    image: mb,
  },
  {
    id: 5,
    title: "Tested for usability & performance",
    subtitle: "Insurance Tech",
    description:
      "We also conduct usability tests before handoff to make sure that your user experience design will be error-free when working in that actual situation. We encode everything with the specifics of speed, access, and conversion in mind.",
    image: mb,
  },
];

const cms = [
  {
    id: 0,
    title: "CMS Design & Development",
    description:
      "We aim to support businesses and individuals with their websites so they can handle business easily and provide custom, scalable, and SEO-friendly content management. We design simple-to-use CMS structures that suit your requirements, allowing easy editing, publishing, and management of your material without the help of developers.",
    image: wb,
  },
  {
    id: 1,
    title: "No more complex content updates",
    description:
      "Say goodbye to complicated backends. Our custom-made CMS development will make sure that your pages, blogs, and media are easy to handle via a user-friendly dashboard with a few clicks.",
    image: wb,
  },
  {
    id: 2,
    title: "Launch without technical roadblocks",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We develop CMS websites that are launched on time with minimum revisions. We have an efficient approach that guarantees an easy change of design to complete the transformation of the CMS.",
    image: wb,
  },
  {
    id: 3,
    title: "Tailored to your business needs",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Be it a custom CMS or a WordPress, WordPress, Shopify, or a custom CMS, we build the functionality that fits your brand, work processes, and your growth objectives, and leave out the things you do not need.",
    image: wb,
  },
  {
    id: 4,
    title: "SEO-friendly architecture",
    subtitle: "Retail Digital Experience",
    description:
      "Clean URLs, optimized site architecture, and more, our CMS web development strategy considers users by ranking higher on search engines and offering them a favourable user experience.",
    image: wb,
  },
  {
    id: 5,
    title: "Secure, scalable, and future-ready",
    subtitle: "Consumer Goods Automation",
    description:
      "We design secure and scalable CMS systems that can grow larger as your business grows, keeping your business secure but ensuring that performance does not slow down as your content increases.",
    image: wb,
  },
];

const land = [
  {
    id: 0,
    title: "Landing Page Design",
    description:
      "We offer landing page design services, where we work on highly converting pages that are visually appealing and mobile-friendly to make them attractive and compel action. We incorporate both UI/ UX best practices and strong copy to get your landing page providing measurable outcomes.",
    image: ld,
  },
  {
    id: 1,
    title: "Designs that convert visitors into customers",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We design conversion-optimized landing pages that contain strong CTAs, compelling designs, and well-optimized design features that would prompt the user to take an action- such as making a purchase, signing up, or filling out a form.",
    image: ld,
  },
  {
    id: 2,
    title: "Mobile-first and responsive layouts",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "We develop CMS websites that are launched on time with minimum revisions. We have an efficient approach that guarantees an easy change of design to complete the transformation of the CMS.",
    image: ld,
  },
  {
    id: 3,
    title: "SEO and speed optimized",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "Be it a custom CMS or a WordPress, WordPress, Shopify, or a custom CMS, we build the functionality that fits your brand, work processes, and your growth objectives, and leave out the things you do not need.",
    image: ld,
  },
  {
    id: 4,
    title: "Custom branding and storytelling",
    subtitle: "Consumer Goods Automation",
    description:
      "We create landing pages that capture your brand personality and allow your offer to be so appealing that people cannot resist it, as well as have a story that speaks directly to your audience.",
    image: ld,
  },
  {
    id: 5,
    title: "A/B testing for maximum results",
    subtitle: "Insurance Tech",
    description:
      "In addition to data-driven A/B testing to optimise design, copy, and location of CTAs, ensure your landing page has the best conversion rates possible.",
    image: ld,
  },
];
const main = [
  {
    id: 0,
    title: "Website Maintenance & Support",
    description:
      "Our maintenance and support services for our websites keep your site safe and well updated, and on a continual performance level. Whether it be about simple updates or emergency patches, we ensure that your online presence is well tended to, leaving you to attend to the development of your business.",
    image: cr,
  },
  {
    id: 1,
    title: "Regular updates and performance checks",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We offer an updated schedule, optimization of speed, and technology advancements to see to it that there are no issues with your systems running smoothly and up to date with modern technologies.",
    image: cr,
  },
  {
    id: 2,
    title: "Security monitoring and backups",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "We use high-level security systems, perpetual observation, and automated backup to ensure the safety of your online resource against cyber attacks, loss of information.",
    image: cr,
  },
  {
    id: 3,
    title: "Bug fixes and troubleshooting",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "Whether a bug or a major design mistake, we promptly diagnose and correct problems to ensure an immaculate user experience.",
    image: cr,
  },
  {
    id: 4,
    title: "Content updates and enhancements",
    subtitle: "Consumer Goods Automation",
    description:
      "Through ongoing changes, we maintain your site current and updated by covering the images, text, products, and features to suit your changing business requirements.",
    image: cr,
  },
  {
    id: 5,
    title: "24/7 technical support",
    subtitle: "Insurance Tech",
    description:
      "We have a support team that works 24/7 in order to provide solutions to urgent problems so that your site is always online to serve your users.",
    image: cr,
  },
];

const redesign = [
  {
    id: 0,
    title: "Responsive Website Redesign",
    description:
      "Our mobile-friendly and responsive website redesign solutions update long-out-of-date websites to sleek, mobile-friendly websites with a visual appeal. Our mission is to make your site perform at its best, with an extra focus on the user experience alongside their devices, increasing performance, functions, and web visibility.",
    image: br,
  },
  {
    id: 1,
    title: "Mobile-friendly redesign",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We make your site easy to look at and navigate on both phones and tablets, as well as desktops, and everyone will watch it without any problem.",
    image: br,
  },
  {
    id: 2,
    title: "Modern UI/UX upgrades",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "We redesign your site in looks to give it better layouts, easy navigation, and other attractive visual elements to subcategorize things, and sway brand perception.",
    image: br,
  },
  {
    id: 3,
    title: "Performance and speed optimization",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We optimize the areas of code and the structure of your website to make it load faster, have fewer bounce rates, and general functionality.",
    image: br,
  },
  {
    id: 4,
    title: "SEO-friendly structure",
    subtitle: "Consumer Goods Automation",
    description:
      "We also use search-engine-friendly Web designs and metadata optimization in our redesign process to enhance rankings and visibility.",
    image: br,
  },
  {
    id: 5,
    title: "Conversion-focused enhancements",
    subtitle: "Insurance Tech",
    description:
      "We also complement that with light calls-to-action, optimised landing pages, and user journey enhancements to help raise conversions and propel this business forward.",
    image: br,
  },
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
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up" >
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <CMS/>
      <Landing/>
      <Brand/>
      <Redesign/>
  

    </>
  );
};

  /* 2nd-----------------------------------------------  */
const CMS: React.FC = () => {
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

  const activeItem = cms.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">CMS Design & Development</h3>
              {cms
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Landing: React.FC = () => {
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

  const activeItem = land.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Landing Page Design</h3>
              {land
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
// 4th ------------------------------------------------------
const Brand: React.FC = () => {
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

  const activeItem = main.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Website Maintenance & Support</h3>
              {main
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 5th ------------------------------------------------------
const Redesign: React.FC = () => {
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

  const activeItem = redesign.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Responsive Website Redesign</h3>
              {redesign
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};



// web app development-----------------------------------

const webapp = [
  {
    id: 0,
    title: "Web App Development",
    description:
      "Our web app services provide high-performing, reliable, and scalable applications that meet your business objectives. We specialise in developing apps that streamline workflows, improve customer experiences, and enable business development in industries throughout the planning process to deployment.",
    image: w01,
  },
  {
    id: 1,
    title: "Tailored Development Approach",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We develop web apps using a tailored approach depending on your specific objectives, intended audience, and technical needs. Ensuring that your solution is matched to your business goal this provides the highest possible impact and scalability over the long term.",
    image: w01,
  },
  {
    id: 2,
    title: "User-Centric Design",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We have the end user in mind in our apps, and this is reflected in an easy-to-navigate interface, smooth interactions, and attractive interfaces. Through a focus on usability, we increase customer satisfaction and make sure that we become adopted across all devices.",
    image: w01,
  },
  {
    id: 3,
    title: "Scalable Architecture",
    subtitle: "Retail Digital Experience",
    description:
      "We create web applications based on scalable, flexible frameworks that can scale as your company expands. No matter how many users you have, or how many, our architecture guarantees reliability, performance, and security at all levels.",
    image: w01,
  },
  {
    id: 4,
    title: "Robust Security Measures",
    subtitle: "Consumer Goods Automation",
    description:
      "In the development of our web applications, security is central to our web application development. Since our application uses encrypted data storage and secure authentication procedures in place, you and your users are assured a tranquil application environment.",
    image: w01,
  },
  {
    id: 5,
    title: "Ongoing Support & Optimization",
    subtitle: "Insurance Tech",
    description:
      "In the development of our web applications, security is central to our web application development. Since our application uses encrypted data storage and secure authentication procedures in place, you and your users are assured a tranquil application environment.",
    image: w01,
  },
];

const softdev = [
  {
    id: 0,
    title: "Software Development",
    description:
      "Using our software development solutions, business enterprises can experience reliable, scalable, and custom software, a software that is tailor-made to ease operations and enable businesses to go forth. Be it enterprise-level systems or custom applications, we blend innovation with industry best practices to help deliver software that improves performance and helps long-lasting business success.",
    image: s02,
  },
  {
    id: 1,
    title: "Custom-Built Solutions",
    description:
      "We develop software that fits uniquely to your unique business needs without bringing in more complexity than is necessary, and no feature is wasted. This customized approach guarantees efficiency, relevance, and maximum return on your investment.",
    image: s02,
  },
  {
    id: 2,
    title: "Agile Development Process",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "Using an agile approach, we are able to maintain flexibility, speedy delivery, and smooth communication during the project. The fact that we work iteratively would enable us to implement the changes easily as they occur as time goes by, and ensure that your software stays in line with your business interests.",
    image: s02,
  },
  {
    id: 3,
    title: "Seamless System Integration",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our software is easy to integrate with your existing tools, platforms, and workflows. From CRMs to ERPs, our integration skills will see to it that there is a seamless flow of data and increased productivity without interfering with your business.",
    image: s02,
  },
  {
    id: 4,
    title: "Performance & Scalability",
    subtitle: "Retail Digital Experience",
    description:
      "Our software products are also designed to be high-performing and are scalable as your business expands. We can make your system reliable and efficient, whether you are dealing with more users, more data, or more functionality.",
    image: s02,
  },
  {
    id: 5,
    title: " Long-Term Support & Maintenance",
    subtitle: "Consumer Goods Automation",
    description:
      "In addition to deployment, we continue to support, update, and upgrade your software to make it optimized, secure,ure, and relevant. Your solution will stay relevant to the changing market conditions and technologies because of our committed maintenance.",
    image: s02,
  },
];

const progapp = [
  {
    id: 0,
    title: "Progressive Web Apps (PWA)",
    description:
      "Our Progressive Web App development solution provides quick, dependable, and interactive experiences that are compatible with all devices. PWAs are superior in both web and mobile, and this makes them fast, can be accessed even when offline, and their interface resembles that of an application, making them easy to use and increasing business.",
    image: p03,
  },
  {
    id: 1,
    title: "Cross-Platform Compatibility",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "PWAs are cross-platform and not only work on tablets, smartphones, and desktops, but they do not need to be installed as separate native applications. This cross-platform feature saves cash and costs, and your company can reach a larger number of users with a high-performance solution.",
    image: p03,
  },
  {
    id: 2,
    title: "Offline Functionality",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "The highly developed caching and offline features allow your users to keep browsing your app even when affected by a lack of internet access. This guarantees continuous user experiences, and PWAs have the potential to be very reliable for businesses that have uneven connectivity among audiences.",
    image: p03,
  },
  {
    id: 3,
    title: "App-Like Experience",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "PWAs deliver a native app experience, sleek navigation, a user-friendly interface, and engagement. It is an interactive experience that leads to customer satisfaction, as well as the absence of downloads to app stores, which decreases friction and raises adoption rates.",
    image: p03,
  },
  {
    id: 4,
    title: "Fast Loading Speed",
    subtitle: "Consumer Goods Automation",
    description:
      "Performance-optimized PWAs are loaded immediately, no matter the speed of the network. Fast loading websites increase your retention levels, lower the bounce rate, and boost your search ranking- giving you increased exposure and conversion to your business.",
    image: p03,
  },
  {
    id: 5,
    title: "Easy Installation & Updates",
    subtitle: "Insurance Tech",
    description:
      "There is no need to install the PWA for a lengthy time, unlike traditional apps, and there is no need to continuously update it manually. Users can add them to their home screens and automatically update them- so your app is always fresh, secure, and up to date.",
    image: p03,
  },
];

const saasdev = [
  {
    id: 0,
    title: "SaaS Application Development",
    description:
      "Our SaaS application development solutions enable businesses to have scalable, secure, and easy-to-use solutions that meet their individual needs. Our cloud applications simplify workflows, improve collaboration, and ensure accessibility anywhere, regardless of the Internet connection- all of which helps businesses remain competitive in the current fast-paced digital landscape.",
    image: s04,
  },
  {
    id: 1,
    title: "Scalable Architecture",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "Our SaaS systems have extensively scalable systems, which expand with your organization. Our solutions, whether used by a small number of users or thousands, will perform smoothly, without sacrificing speed or security, and will be the best fit in both startups and enterprises.",
    image: s04,
  },
  {
    id: 2,
    title: "Multi-Tenant Solutions",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Multi-tenancy is implemented in our SaaS applications, which means that several users or organizations can safely share one platform. This allows being cost-effectiveness, simplified maintenance, and regular updates, but keeps all data private to individual clients.",
    image: s04,
  },
  {
    id: 3,
    title: "Secure Cloud Deployment",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "Our SaaS development focuses on security. In order to protect sensitive data and meet industry standards, we use powerful authentication, encrypted storage, and secure cloud infrastructure.",
    image: s04,
  },
  {
    id: 4,
    title: "Custom Features & Integrations",
    subtitle: "Consumer Goods Automation",
    description:
      "We build SaaS systems using custom features and integrations to your business requirements. Since API connectivity to third-party service integration, we will make sure that your solution fits perfectly into your digital ecosystem.",
    image: s04,
  },
  {
    id: 5,
    title: "Continuous Updates & Support",
    subtitle: "Insurance Tech",
    description:
      "We provide SaaS solutions that are upgraded automatically, and we continuously provide support to keep your platform running efficiently, securely, and in line with the newest technologies, without disturbing your users.",
    image: s04,
  },
];

const enterdev = [
  {
    id: 0,
    title: "Enterprise Application Development",
    description:
      "Our enterprise application development solutions are powerful, scalable, and secure solutions that can optimize operations, improve effectiveness, and enable businesses to expand. Since automation of workflows to system integration, we develop custom enterprise software that may suit the needs of your organization and drive digital transformation across departments.",
    image: e05,
  },
  {
    id: 1,
    title: "Custom Business Solutions",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We develop enterprise applications that suit your special business processes. Our solutions measure productivity, bottleneck reduction, and provide your teams with the resources that they need to work effectively, whether it be resource planning, customer management, or workflow automation.",
    image: e05,
  },
  {
    id: 2,
    title: "System Integration",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our business applications can easily be consumed by the available tools, ERP, and CRM. We can also assist in breaking the silos of data, duplication, and the free flow of information within your organization by tying fragmented systems together on one platform.",
    image: e05,
  },
  {
    id: 3,
    title: "Scalable Architecture",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "Enterprise applications that we design have a solid, scalable architecture that ensures meeting the growing business requirements. Our apps are very high-performance, secure, and reliable, whether you are adding more users, expanding departments, or dealing with complex data.",
    image: e05,
  },
  {
    id: 4,
    title: "Advanced Security & Compliance",
    subtitle: "Consumer Goods Automation",
    description:
      "Enterprise applications have high priorities in security and compliance. Our effective authentication, role-based access, and encryption, as well as adherence to industry standards to protect sensitive business information, ensure compliance with the regulations.",
    image: e05,
  },
  {
    id: 5,
    title: "Ongoing Maintenance & Support",
    subtitle: "Insurance Tech",
    description:
      "Our team creates regular monitoring and updates, and also gives technical assistance to keep your enterprise application running efficiently, securely, and in line with the changing business requirements- so that you can concentrate on strategic growth.",
    image: e05,
  },
];

export const Web: React.FC = () => {
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

  const activeItem = webapp.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Web App Development</h3>
              {webapp
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Softdev/>
      <Progapp/>
      <Saasdev/>
      <Enterdev/>

    </>
  );
};


  /* 2nd-----------------------------------------------  */
const Softdev: React.FC = () => {
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

  const activeItem = softdev.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Software Development</h3>
              {softdev
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Progapp: React.FC = () => {
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

  const activeItem = progapp.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Progressive Web Apps (PWA)</h3>
              {progapp
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
// 4th ------------------------------------------------------
const Saasdev: React.FC = () => {
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

  const activeItem = saasdev.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">SaaS Application Development</h3>
              {saasdev
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 5th ------------------------------------------------------
const Enterdev: React.FC = () => {
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

  const activeItem = enterdev.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Enterprise Application Development</h3>
              {enterdev
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};


// SEO Service-----------------------------------

const onseo = [
  {
    id: 0,
    title: "On-Page SEO",
    description:
      "On-page SEO makes your webpage fully search engine and user-friendly. From content to technical, we will make every part of your site better to increase visibility, engagement, and ranking performance to achieve measurable results and sustainable growth.",
    image: os,
  },
  {
    id: 1,
    title: "Title Tags & Meta Descriptions",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We craft keyword-rich titles and meta descriptions that are optimized to maximize the number of clicks as well as enhance visibility within the search engines. All the elements are meant to appeal to the users and represent your content properly.",
    image: os,
  },
  {
    id: 2,
    title: "Header Tags & Content Structure",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "To make it easy to read and optimized to get more views, our professionals set the content using H1, H2, and H3 tags. Hierarchy is good to enhance readability, user experience, and search engine indexing.",
    image: os,
  },
  {
    id: 3,
    title: "Image Optimization",
    subtitle: "Retail Digital Experience",
    description:
      "We perform optimization in the images using alt tags, file names, and compression. This enhances page load time, usability, and ranking opportunities, and visuals should boost user experience.",
    image: os,
  },
  {
    id: 4,
    title: "Internal Linking Strategy",
    subtitle: "Consumer Goods Automation",
    description:
      "When we develop a smart internal linking structure, we optimize navigation, allocate link equity, and direct search engines to your most valuable pages.",
    image: os,
  },
  {
    id: 5,
    title: "URL Optimization",
    subtitle: "Insurance Tech",
    description:
      "IWe generate clean, keyword-rich, SEO-friendly URLs that increase ranking in search and boost user confidence, and ensure that your content is easily shared and accessed.",
    image: os,
  },
];

const offseo = [
  {
    id: 0,
    title: "Off-Page SEO",
    description:
      "Off-page SEO empowers your website with authority and credibility via high-quality backlinks, brand mentions, and reputation building on the Internet. We adopt ethical link construction and outreach measures that enhance ranking, visibility, and earn trust in your industry.",
    image: fs,
  },
  {
    id: 1,
    title: " Backlink Audit & Cleanup",
    description:
      "We review your backlink profile and find the harmful or spammy links that can damage rankings. We clean up to get rid of the toxic links and save the authority of your site, and secure a healthier future growth.",
    image: fs,
  },
  {
    id: 2,
    title: "High-Quality Link Building",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We achieve backlinks with reputable websites, which are related to industries, by utilizing ethical outreach and content promotion. These good links increase domain authority, visibility, and position on search engines.",
    image: fs,
  },
  {
    id: 3,
    title: "Guest Posting & Outreach",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We cooperate with such well-known blogs and publications to post strategic guest posts. This increases brand visibility, gets backlinks, and makes your business a reputable thought leader in your industry.",
    image: fs,
  },
  {
    id: 4,
    title: "Social Signals & Mentions",
    subtitle: "Retail Digital Experience",
    description:
      "We use social media and other online references to enhance your brand. Favourable indicators and mentions on social media and trusted sources are a boost to greater authority and indirect SEO advantages.",
    image: fs,
  },
  {
    id: 5,
    title: " Competitor Link Analysis",
    subtitle: "Consumer Goods Automation",
    description:
      "We provide you with competitor backlink strategies by studying the valuable opportunities of your webpage. Through our analysis, we can determine the gaps, repeat effective strategies, and come up with a more effective off-page SEO strategy that achieves more than the competition.",
    image: fs,
  },
];

const techseo = [
  {
    id: 0,
    title: "Technical SEO",
    description:
      "Technical SEO provides the base to achieve higher rankings that guarantee that your website is fast, secure, and crawlable. We deal with back-end problems that have a negative impact on your search performance, enhancing accessibility, indexing, and user experience in order to get your site competitive.",
    image: ts,
  },
  {
    id: 1,
    title: "Website Speed Optimization",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We also optimize scaled-back page loading times through file compression and script optimization, and caching. Quicker websites will lower the bounce rates and enhance user experience, as well as satisfy search engine ranking criteria that will favor speed and responsiveness.",
    image: ts,
  },
  {
    id: 2,
    title: "Mobile Responsiveness",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our team makes sure that your site is completely mobile-friendly and provides a smooth cross-platform navigation. The responsive design is not only easily usable but also in line with the mobile-first indexing of Google as a better way of ranking.",
    image: ts,
  },
  {
    id: 3,
    title: "Crawlability & Indexing",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We optimize robots.txt, XML sitemaps, and site architecture so that search engines crawl and index your content without difficulty. This will ensure that your most crucial pages get the first priority and will be located in a short time.",
    image: ts,
  },
  {
    id: 4,
    title: "HTTPS & Security Enhancements",
    subtitle: "Consumer Goods Automation",
    description:
      "Security is a ranking factor. We have also installed the use of SSL certificates and safe protocols that safeguard the data of users whilst enhancing trust and credibility in the eyes of both search engines and visitors.",
    image: ts,
  },
  {
    id: 5,
    title: "Fixing Errors & Redirects",
    subtitle: "Insurance Tech",
    description:
      "We identify and fix 404 errors, broken links, and redirects. In keeping the site structure clean, we avoid ranking drops and provide the user and the search engine with a smooth, continuous experience.",
    image: ts,
  },
];

// 1st---------------------------------
export const Onseo: React.FC = () => {
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

  const activeItem = onseo.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Web App Development</h3>
              {onseo
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Offseo/>
      <Techseo/>


    </>
  );
};


  /* 2nd-----------------------------------------------  */
const Offseo: React.FC = () => {
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

  const activeItem = offseo.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Software Development</h3>
              {offseo
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Techseo: React.FC = () => {
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

  const activeItem = techseo.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Progressive Web Apps (PWA)</h3>
              {techseo
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};


// Brand Building-----------------------------------

const consult = [
  {
    id: 0,
    title: "Brand Strategy & Consulting",
    description:
      "We help companies to develop a powerful strategy that will define what and who they are and how they should be viewed in the market.",
    image: lp2,
  },
  {
    id: 1,
    title: "Market Research & Analysis",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We do extensive competitor research, industry, and market research to identify opportunities that will form a successful strategy. This makes your brand get into the market clearly and confidently.",
    image: lp2,
  },
  {
    id: 2,
    title: "Audience Targeting & Personas",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We create comprehensive customer personas in terms of demographics, behavior, and psychology. This allows your brand to reach out to the appropriate audience and create campaigns that will have a strong impact.",
    image: lp2,
  },
  {
    id: 3,
    title: "Value Proposition Development",
    subtitle: "Retail Digital Experience",
    description:
      "We assist in building a robust value proposition that expresses why customers are supposed to use your brand. This message brings out the best in you and your uniqueness, and this creates long-term loyalty and preference.",
    image: lp2,
  },
  {
    id: 4,
    title: "Brand Positioning Statement",
    subtitle: "Consumer Goods Automation",
    description:
      "We create effective positioning statements that establish the position of your brand in the industry. This is a clear way to make internal and external audiences know your essence.",
    image: lp2,
  },
  {
    id: 5,
    title: "Competitive Differentiation",
    subtitle: "Insurance Tech",
    description:
      "We recognize the exceptional strengths and bring them to the fore to provide your brand with a clear competitive advantage. Your niche makes you the choice with our strategies.",
    image: lp2,
  },
];

const logo = [
  {
    id: 0,
    title: "Logo Design & Visual Identity",
    description:
      "We create special logos and visual systems that will represent your personality and create a strong impression at all customer touchpoints.",
    image: v1,
  },
  {
    id: 1,
    title: " Logo Concept & Design",
    description:
      "Our team designs unique and professional logos, which reflect your brand. Every logo is designed in such a way that it is memorable, versatile, a nd timeless.",
    image: v1,
  },
  {
    id: 2,
    title: "Color Palette & Typography",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We select brand colors and fonts thoughtfully to match your values. These graphic messages create awareness and uniformity both online and offline.",
    image: v1,
  },
  {
    id: 3,
    title: "Brand Style Guidelines",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We prepare comprehensive brand manuals that provide consistency in design across all the channels. This will ensure your brand is always professional, regardless of the place it is posted.",
    image: v1,
  },
  {
    id: 4,
    title: "Iconography & Graphics",
    subtitle: "Retail Digital Experience",
    description:
      "We design your own icons, illustrations, and graphic materials that supplement your visual storytelling. Such distinct images help to support your image and enhance brand recognition.",
    image: v1,
  },
  {
    id: 5,
    title: " Packaging & Print Design",
    subtitle: "Consumer Goods Automation",
    description:
      " We create innovative print materials, including packaging, stationery, and more, that give your brand image. These material resources boost the credibility and trust of the customers.",
    image: v1,
  },
];

const media = [
  {
    id: 0,
    title: "Social Media Branding",
    description:
      "Customers tend to interact with your business first through your social media. Your brand will be developed by us to be strong, consistent, and interesting on all platforms. Our tactics enhance awareness, credibility, and viewers' interest, be it through images or text.",
    image: sc,
  },
  {
    id: 1,
    title: "Profile Optimization & Consistency",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We develop and streamline social media accounts that are a consistent representation of your brand within each platform. Logos to bios and graphics, our branding would be all about professionalism, recognition, and trust- to help you shine and get the right audience.",
    image: sc,
  },
  {
    id: 2,
    title: "Content Strategy & Visual Identity",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our content team creates strategies and content that suit your audience and industry and fit in with your brand voice. We create attention-grabbing graphics, posts, and stories that create a single visual image and spur engagement, reach, and long-term loyalty.",
    image: sc,
  },
  {
    id: 3,
    title: "Brand Messaging & Tone of Voice",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "Consistency in communication builds trust. We establish your own tone of voice and create brand messages that appeal to your target audience, and all captions, comments, and replies strengthen your digital presence and audience relationships.",
    image: sc,
  },
  {
    id: 4,
    title: "Engagement & Community Building",
    subtitle: "Consumer Goods Automation",
    description:
      "Social media branding does not just exist and look good; it is about discussions. We coordinate engagement plans that promote meaningful communication, strong communities, and brand advocacy, converting casual followers into lifelong supporters who appreciate your brand.",
    image: sc,
  },
  {
    id: 5,
    title: "Analytics & Performance Insights",
    subtitle: "Insurance Tech",
    description:
      "The metrics of success that we trace are reach, engagement, and growth to capture key branding metrics. Using our insights-driven approach will help enhance strategies, so your social media branding is constantly improving and has the best impact on your business.",
    image: sc,
  },
];

// 1st---------------------------------
export const Consult: React.FC = () => {
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

  const activeItem = consult.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Brand Strategy & Consulting</h3>
              {consult
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Logo/>
      <Media/>


    </>
  );
};


  /* 2nd-----------------------------------------------  */
const Logo: React.FC = () => {
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

  const activeItem = logo.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Logo Design & Visual Identity </h3>
              {logo
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Media: React.FC = () => {
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

  const activeItem = media.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Social Media Branding</h3>
              {media
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// AI / ML-----------------------------------

const llm = [
  {
    id: 0,
    title: "AI / ML / LLM / NLP Solutions",
    description:
      "We also offer strong AI-powered solutions, which combine machine learning, large language model sand natural language processing. Our technologies empower companies to standardize processes, invest in individualized experiences, and discover actionable information that drives innovation, efficiency, and competitive edge.",
    image: sv,
  },
  {
    id: 1,
    title: "AI Chatbots",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We create smart chatbots that will automate the interaction with customers, offer real-time assistance, and shorten response time. NLP and LLMs are used to train our chatbots to comprehend queries and provide correct answers to satisfy customers on various platforms.",
    image: sv,
  },
  {
    id: 2,
    title: "Voice Assistants",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our voice-based AI-powered assistants are hands-free and conversational to businesses and end users. They are intended to be accessible with the help of high-quality speech recognition and NLP to simplify performance and provide fluid interactions, contributing to better customer engagement and productivity.",
    image: sv ,
  },
  {
    id: 3,
    title: "Machine Learning Models",
    subtitle: "Retail Digital Experience",
    description:
      "We create and train machine learning processes, which fit your business requirements, from predictive analytics to recommendation systems. Our models are built using the power of data to make more effective decisions, automate, and provide quantifiable business value.",
    image: sv,
  },
  {
    id: 4,
    title: "Natural Language Processing (NLP)",
    subtitle: "Consumer Goods Automation",
    description:
      "The NLP solutions process and analyze text and speech to pull out meaning, sentiment, and context. We give businesses the means to enhance communication, analytics, and user experiences through language translation, text classification, and more.",
    image: sv,
  },
  {
    id: 5,
    title: "Large Language Models (LLMs)",
    subtitle: "Insurance Tech",
    description:
      "We use the state-of-the-art LLMs to improve automation, content generation, and conversational AI. These are industry-specific models that have been optimized to perform precise, context-sensitive results, and the models eliminate manual effort and still deliver quality and reliability.",
    image: sv,
  },
];

const chatbot = [
  {
    id: 0,
    title: "AI Chatbots & Voice Assistants",
    description:
      "We develop AI-assisted chatbots and voice assistants that provide human-like, smooth interactions. They are made out of NLP and advanced AI models that enable these to automate customer support, enhance engagement, and offer personalized experiences on web, mobile, and voice-enabled platforms.",
    image: v1,
  },
  {
    id: 1,
    title: " Intelligent Chatbots",
    description:
      "Our chatbots can answer customer questions in real time and respond correctly day and night. They decrease waiting time and automate the support, which leads to increased satisfaction and reduced costs of operations.",
    image: v1,
  },
  {
    id: 2,
    title: " Multilingual Capabilities",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We create bots that will listen and speak in multiple languages, which will break the language barrier and allow companies to work with international audiences.",
    image: v1,
  },
  {
    id: 3,
    title: "Voice-Enabled Experiences",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our AI voice assistants are hands-free interfaces that enable people to achieve tasks, obtain information, and manage systems through simple voice commands.",
    image: v1,
  },
  {
    id: 4,
    title: "Platform Integration",
    subtitle: "Retail Digital Experience",
    description:
      "We combine chatbots and voice assistants with websites, apps, CRMs, and messaging platforms, and the communication between the customer touchpoints is smooth.",
    image: v1,
  },
  {
    id: 5,
    title: " Personalized Interactions",
    subtitle: "Consumer Goods Automation",
    description:
      " Machine learning means that our assistants learn our preferences and provide personalized conversations based on customer contexts and enhancing interactions and customer relationships.",
    image: v1,
  },
];

// 1st---------------------------------
export const Llm: React.FC = () => {
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

  const activeItem = llm.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">AI / ML / LLM / NLP Solutions</h3>
              {llm
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Chatbot/>
      


    </>
  );
};


  /* 2nd-----------------------------------------------  */
const Chatbot: React.FC = () => {
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

  const activeItem = chatbot.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Logo Design & Visual Identity </h3>
              {chatbot
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// ERP Service-----------------------------------

const customerp = [
  {
    id: 0,
    title: "Custom ERP Implementation & Development",
    description:
      "We offer customized ERP implementation and development services that are aligned with your needs. Planning for deployment, our professionals are capable of delivering an integrated system, flawless operation, and scalable ERP systems that are able to propel efficiency, teamwork, and success in the long term.",
    image: ip,
  },
  {
    id: 1,
    title: "Requirement Analysis & Planning",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We review business processes, issues, and business goals and create an ERP system that meets your specific requirements. This means fewer adoption hassles, less risk, and optimal ROI on your investment.",
    image: ip,
  },
  {
    id: 2,
    title: "Custom ERP Development",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our team builds scalable, feature-rich ERP systems based on your processes. Your ERP can be tailored to your operations with bespoke modules and features rather than requiring you to change your operations to suit the system. ",
    image: ip,
  },
  {
    id: 3,
    title: "Seamless Integration",
    subtitle: "Retail Digital Experience",
    description:
      "We combine ERP solutions with the already implemented software, e.g., CRM, HR, or other accounting software. This provides an integrated digital environment that breaks the silos and enhances cross-departmental collaboration.",
    image: ip,
  },
  {
    id: 4,
    title: "Data Migration & Security",
    subtitle: "Consumer Goods Automation",
    description:
      "Our experts complete an orderly migration of business information to the new ERP without disturbances. To facilitate a smooth transition, we value the importance of data integrity, compliance, and security.",
    image: ip,
  },
  {
    id: 5,
    title: "Testing & Deployment",
    subtitle: "Insurance Tech",
    description:
      "Before ERP systems are deployed, we test them rigorously based on performance, security, and usability. This provides a stable, bug-free solution that your teams can be sure to adopt and use right away.",
    image: ip,
  },
];

const erpintegra = [
  {
    id: 0,
    title: "ERP Integration Services",
    description:
      "ERP integration services bridge your enterprise system to your key business applications to facilitate seamless operations, a steady flow of data, and enhance teamwork. We eradicate silos, increase visibility, and build a single ecosystem that fosters smarter decisions and workflows.",
    image: lp,
  },
  {
    id: 1,
    title: " End-to-End System Connectivity",
    description:
      "We combine the ERP solutions in the fields of finance, human resources, sales, and supply chain, and guarantee the consistency of the data and the smooth running of the processes. This interdependence gets rid of duplication and allows the integration of a single workflow.",
    image: lp,
  },
  {
    id: 2,
    title: "API Development & Integration",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "Our experts develop and develop APIs that enable your ERP to interact easily with other applications. This is to provide flexibility, scalability, and reliable system interactions.",
    image: lp,
  },
  {
    id: 3,
    title: "Real-Time Data Synchronization",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We facilitate real-time data transfer among ERP and related systems. Up-to-date information that is accurate enables the teams to make decisions smartly and act faster.",
    image: lp,
  },
  {
    id: 4,
    title: "Cloud & Hybrid Integration",
    subtitle: "Retail Digital Experience",
    description:
      "Our team eases the integration of ERP into cloud and hybrid environments, providing secure, scalable, and future-proof operations that grow with business expansion and changes in technologies.",
    image: lp,
  },
  {
    id: 5,
    title: " Legacy System Integration",
    subtitle: "Consumer Goods Automation",
    description:
      "We bridge the gap between ERP systems and legacy applications, allowing older systems to operate in your current digital environment. This reduces the disturbances and maximizes the investments that are already in place.",
    image: lp,
  },
];

const erpcustom = [
  {
    id: 0,
    title: "ERP Integration with Existing Systems",
    description:
      "We guarantee smooth ERP integration with your existing business applications, allowing the smooth flow of data and coordination between departments. Our integration services remove inefficiencies, harmonize processes, and increase visibility to build an interconnected ecosystem of smarter, faster decision-making.",
    image: am,
  },
  {
    id: 1,
    title: " CRM & Sales Integration",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We combine the ERP with CRM applications to simplify the process of customer data, sales pipelines, and performance monitoring. This enhances customer experiences, leads management, and visibility of sales teams can be up to date on the operations of the business.",
    image: am,
  },
  {
    id: 2,
    title: "Accounting & Finance Systems",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our financial reporting is automated with the integration of our ERP solutions with accounting software to manage transactions and compliance. Integration saves on manual labor and gives you the right real-time information on your financial status.",
    image: am,
  },
  {
    id: 3,
    title: "HR & Payroll Systems",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We link ERP to HR and payroll applications to promote the ease of managing employees and processing payroll. This will guarantee proper management of the workforce and employee satisfaction due to smooth operations.",
    image: am,
  },
  {
    id: 4,
    title: "Supply Chain & Inventory Management",
    subtitle: "Consumer Goods Automation",
    description:
      "Combining ERP with supply chain and inventory applications helps us improve demand forecasting, inventory management, and logistics. Companies are able to achieve end-to-end visibility, which minimizes the cost and enhances the efficiency of operations.",
    image: am,
  },
  {
    id: 5,
    title: "Third-Party Application Integration",
    subtitle: "Insurance Tech",
    description:
      "We integrate the ERP with third-party,, ms including e-commerce, analytics, or project management systems. This brings about a cohesive environment in which the flow of data is free to enhance cooperation, productivity, and decision-making.",
    image: am,
  },
];

const erpmain = [
  {
    id: 0,
    title: "ERP Customization & Module Development",
    description:
      "We customize ERP to meet your business requirements. Our solutions provide increased functionality, efficiencies, and fitment of your ERP to your industry and business objectives, whether it be custom workflows or specialized modules.",
    image: cs,
  },
  {
    id: 1,
    title: "Custom Workflow Design",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We create ERP workflows specific to your processes that streamline operations. Customization removes redundant procedures, lessens manual labor, and enhances total productivity.",
    image: cs,
  },
  {
    id: 2,
    title: "Industry-Specific Modules",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our modules are industry-specific, designed to meet your industry requirements, that is, manufacturing, retail, healthcare, or finance. These bespoke modules provide a solution to niche problems.",
    image: cs,
  },
  {
    id: 3,
    title: "Feature Enhancements",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      " We upgrade the current ERP features or introduce new features in order to make the most of it. This keeps your system updated with business needs and competitive.",
    image: cs,
  },
  {
    id: 4,
    title: "User Interface Customization",
    subtitle: "Consumer Goods Automation",
    description:
      "We design user-friendly dashboards and interfaces that are user-friendly to your teams. This enhances usability, accessibility, and general ERP adoption within departments.",
    image: cs,
  },
  {
    id: 5,
    title: "Reporting & Analytics Modules",
    subtitle: "Insurance Tech",
    description:
      "We develop high-level reporting and analytics applications according to your KPI. Real-time insights can provide decision-makers with insights to monitor performance, streamline operations, and promote growth.",
    image: cs,
  },
];

const odoomain = [
  {
    id: 0,
    title: "ERP Maintenance & Support",
    description:
      "Our ERP services and support services will keep your system safe, efficient, and relevant. Troubleshooting and upgrades are just the tip of the iceberg as we maintain your ERP on track to allow your business to grow.",
    image: sp,
  },
  {
    id: 1,
    title: "System Monitoring & Performance",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "The ongoing performance monitoring of the ERP helps to identify and eliminate the problem at an early stage. This guarantees a high uptime, dependability of the operations, and a smooth experience for your teams.",
    image: sp,
  },
  {
    id: 2,
    title: "Bug Fixes & Troubleshooting",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Technical glitches, errors, and performance issues are resolved by our support team very quickly. Quick solutions reduce downtime and ensure business continuity.",
    image: sp,
  },
  {
    id: 3,
    title: "Regular Updates & Upgrades",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We maintain your ERP at the most recent features, patches, and security upgrades. This improves the stability and functionality of systems and conformance to changing industry standards.",
    image: sp,
  },
  {
    id: 4,
    title: "User Training & Support",
    subtitle: "Consumer Goods Automation",
    description:
      "Our experts provide training and ongoing support for ERP users. This gives employees the power to take full advantage of system features and enhances adoption throughout the organization.",
    image: sp,
  },
  {
    id: 5,
    title: "Scalability & Enhancements",
    subtitle: "Insurance Tech",
    description:
      "We tailor and upgrade ERP modules as your business grows to fit new needs. This makes sure your ERP goes with your operations and continues to deliver value.",
    image: sp,
  },
];

export   const Customerp: React.FC = () => {
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

  const activeItem = customerp.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Custom ERP Implementation & Development</h3>
              {customerp
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Erpintegra/>
      <Erpcustom/>
      <Erpmain/>
      <Odoomain/>

    </>
  );
};


  /* 2nd-----------------------------------------------  */
const Erpintegra: React.FC = () => {
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

  const activeItem = erpintegra.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">ERP Integration Services</h3>
              {erpintegra
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Erpcustom: React.FC = () => {
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

  const activeItem = erpcustom.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">ERP Integration with Existing Systems</h3>
              {erpcustom
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
// 4th ------------------------------------------------------
const Erpmain: React.FC = () => {
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

  const activeItem = erpmain.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">ERP Customization & Module Development</h3>
              {erpmain
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 5th ------------------------------------------------------
const Odoomain: React.FC = () => {
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

  const activeItem = odoomain.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">ERP Maintenance & Support</h3>
              {odoomain
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// E-Commerce-----------------------------------

const estore = [
  {
    id: 0,
    title: "E-Commerce Store Setup",
    description:
      "Our e-commerce shop setup service can assist you in starting up a high-end, scalable, and easy-to-use online shop. We develop complete functional stores, including product catalog design to payment gateway integration, providing you with smooth navigation, blistering performance, and a secure shopping experience that meets your business requirements.",
    image: es,
  },
  {
    id: 1,
    title: "Platform selection and customization",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We select the appropriate e-commerce platform, either Shopify, WooCommerce, or Magento, and customize it to your brand. The theme customization, versatile layouts, and key functionality integration will help your store to express your identity and, at the same time, enable further future expansion as your business expands.",
    image: es,
  },
  {
    id: 2,
    title: " Product catalog and inventory setup",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We design a properly structured and pleasing product catalog that is easy to navigate. Whether it is uploading product details and photos or managing product categories and stock levels, and SKUs, we are meticulous and easy to navigate, leaving customers with fast search products and you with a store that is helped to manage with ease.",
    image: es,
  },
  {
    id: 3,
    title: "Secure payment gateway integration",
    subtitle: "Retail Digital Experience",
    description:
      "We combine reputable payment gateways such as Stripe, PayPal, and credit card processors to ensure that transactions are fast and secure. SSL certification and compliance checks will make customers comfortable when shopping with your store and secure their sensitive financial data at all stages.",
    image: es,
  },
  {
    id: 4,
    title: "Shopping cart and checkout optimization",
    subtitle: "Consumer Goods Automation",
    description:
      "We streamline your checkout process and shopping cart to minimise drop-offs and maximize conversions. A frictionless purchase journey has also been achieved, which generates higher sales and improves the overall shopping experience of the customer.",
    image: es,
  },
  {
    id: 5,
    title: "Mobile-responsive store design",
    subtitle: "Insurance Tech",
    description:
      "We design so that your e-commerce shop operates on all devices, and most importantly, mobile. The pages of products, carts, and checkouts are best viewed on a smaller screen and are quick and easy to navigate. This will ensure good performance that will keep the mobile shoppers interested and will promote repeat buying.",
    image: es,
  },
];

const shopify = [
  {
    id: 0,
    title: "Shopify Store Setup",
    description:
      "Our Shopify store set-up service helps you in the creation of a professional and user-friendly online shop that is tailored to your business. Whether it is helping you design your custom theme or set up a product catalog, you want it integrated with a payment gateway, or mobile responsiveness, we make sure that your Shopify store is sales-optimised, performance-optimised, and growth-optimised.",
    image: sy,
  },
  {
    id: 1,
    title: "  Custom Theme Design & Branding",
    description:
      "Our Shopify themes are conversion-oriented and attractive to the eye, and they embody your brand image. Customization of layout and color scheme, typography to the details, so that your customers have a unique shopping experience that appeals to your audience and makes your store attractive in general.",
    image: sy,
  },
  {
    id: 2,
    title: "Product Catalog Setup",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      " Your product catalog is organized and uploaded by our team with high-quality images, detailed descriptions, and categories. Your products are showcased on the front line, and it is easy to navigate through the stores as we maximise visibility and increase the likelihood of sales conversion.",
    image: sy,
  },
  {
    id: 3,
    title: "Payment Gateway Integration",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "We set up safe and dependable payment gateways, such as PayPal, Stripe, and our local ones. This guarantees that your customers can have an easy checkout experience, allowing them to shop with confidence and decreasing cart abandonment rates on your Shopify store.",
    image: sy,
  },
  {
    id: 4,
    title: "Mobile Responsiveness",
    subtitle: "Retail Digital Experience",
    description:
      "Most online shoppers shop with their mobile phones, and thus, we build Shopify stores that are entirely responsive. This ensures a smooth shopping process on smartphones, tablets, and desktops, and you can get more sales on each device.",
    image: sy,
  },
  {
    id: 5,
    title: " Performance Optimization",
    subtitle: "Consumer Goods Automation",
    description:
      "We optimize your Shopify shop to make it fast, secure, and user-friendly. Faster page loading to streamlined checkout procedures; we aim to provide a stress-free shopping experience that spurs greater interaction and customer satisfaction.",
    image: sy,
  },
];

const woocommerce = [
  {
    id: 0,
    title: "WooCommerce Store Setup",
    description:
      "With our WooCommerce store setup service, you will be in a position to operate a flexible, scalable, and fully custom online store on WordPress. Whether it is developing our own themes, product catalog setup, payment gateway integration, and security optimization, we make sure that your WooCommerce store is machine-tuned, conversion-driven, and growth-oriented.",
    image: wo,
  },
  {
    id: 1,
    title: " Custom Theme Development",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We create and develop custom WooCommerce themes to fit your brand image. Our approach to modern design, usability, and conversion optimization will make your storefront engaging and will help you build trust in your online business.",
    image: wo,
  },
  {
    id: 2,
    title: "Product Management & Setup",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our team manages uploads of products, product categories, product attributes, and product descriptions so that there is easy navigation. We make sure that your product catalog is easy to understand, searchable, and SEO, enabling potential customers to locate your products with ease and enhancing the overall sales potential.",
    image: wo,
  },
  {
    id: 3,
    title: "Secure Payment Gateway Integration",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We combine safe and sound payment gateways such as PayPal, Stripe, and local. Frictionless checkout means that your customers will be able to shop conveniently and safely, which will decrease cart abandonment and boost your WooCommerce shop revenue.",
    image: wo,
  },
  {
    id: 4,
    title: "Mobile-Friendly Store Design",
    subtitle: "Consumer Goods Automation",
    description:
      "WooCommerce stores are fully optimized to be mobile-friendly. This is so that your customers can have a satisfying, expedited, and interactive shopping experience on smartphones, tablets, and desktops- enabling you to capture sales opportunities on any device.",
    image: wo,
  },
  {
    id: 5,
    title: "Store Performance & Security Optimization",
    subtitle: "Insurance Tech",
    description:
      "We can ensure that your WooCommerce store runs smoothly and securely, whether it is by ensuring faster page loads or rolling out more sophisticated security. Our optimization tactics will provide efficient service, keeping your information safe and ensuring customers a safe and reliable shopping experience.",
    image: wo,
  },
];

const payment = [
  {
    id: 0,
    title: "Payment Gateway Integration",
    description:
      "Our payment gateway integration service provides hassle-free, secure, and online transactions to your e-commerce store. We combine reliable payment solutions such as PayPal, Stripe, and domestic gateways, allowing the customer to choose a variety of options and ensuring compliance, fraud prevention, and unproblematic checkout processes that raise conversion and customer confidence.",
    image: py,
  },
  {
    id: 1,
    title: " Multiple Gateway Support",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "Our system combines several payment gateways, such as international and domestic service providers, which provide your customers with the option of how they pay. From credit/debit cards to digital wallets, we guarantee a seamless payment process, decreasing cart abandonment, and increasing customer satisfaction.",
    image: py,
  },
  {
    id: 2,
    title: "Secure Transactions",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Security is our priority. To prevent sensitive data from being compromised, we have put in place SSL encryption, PCI-DSS up to date, and a fraud detection tool. This makes all transactions on your site safe, dependable, and trusted by all customers all over the world.",
    image: py,
  },
  {
    id: 3,
    title: "One-Click Checkout Setup",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "  We enable one-click options in the checkout to enhance the user experience. This lowers the friction to the buying process because it makes buying easy and quicker, which aids in raising the number of repeat purchases and customer loyalty.",
    image: py,
  },
  {
    id: 4,
    title: " Local Currency & Tax Support",
    subtitle: "Consumer Goods Automation",
    description:
      " We allow payment in various currencies, and we set automated tax rates. This will guarantee that your online store will be international to serve international clients, as well as offering the right pricing and being in line with the local financial rules.",
    image: py,
  },
  {
    id: 5,
    title: "Ongoing Monitoring & Support",
    subtitle: "Insurance Tech",
    description:
      "We offer round-the-clock monitoring, updating, and technical services for payment gateways. Whether it is the troubleshooting of failed transactions or the addition of new functionality, we will keep your payment system stable and business-friendly.",
    image: py,
  },
];

const market = [
  {
    id: 0,
    title: "Marketplace Development",
    description:
      "Our marketplace development services assist you in the development of scalable, feature-rich multi-vendor marketplaces such as Amazon, eBay, or Etsy. Our marketplaces are secure and user-friendly, enabling vendors to control products while providing customers with efficient search, safe payment, and easy order management mechanisms.",
    image: mk,
  },
  {
    id: 1,
    title: "Multi-Vendor Functionality",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We build powerful multi-vendor applications in which vendors can create and manage their storefronts freely, add their goods, and monitor sales. This designation provides an easy management of the vendors and provides the customers with a variety of product options within one platform.",
    image: mk,
  },
  {
    id: 2,
    title: "Secure & Scalable Architecture",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our solutions are based on a secure and scalable architecture that can support high traffic, multiple vendors, and large product catalogs. This guarantees your marketplace to be efficient since your business expands without having to lose speed or security.",
    image: mk,
  },
  {
    id: 3,
    title: "Vendor & Customer Dashboards",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We develop visually friendly boards for the vendors and customers. Vendors are able to handle inventory, monitor orders, and analyze sales, and customers can navigate with ease, check out, and monitor orders. This produces a harmonious environment on both sides.",
    image: mk,
  },
  {
    id: 4,
    title: "Advanced Search & Filtering",
    subtitle: "Consumer Goods Automation",
    description:
      "We incorporate advanced search and filtering capabilities to enhance the shopping experience. Customers get fast access to products in terms of category, price, brand, and custom filters, which will lower bounce rates and increase sales conversions.",
    image: mk,
  },
  {
    id: 5,
    title: "Integrated Payment & Commission System",
    subtitle: "Insurance Tech",
    description:
      "We use Web-based payment gateways that have automatic commission management. Vendors get paid on time, and you earn commissions without any hassles. This instills transparency, credit, and a hassle-free financial transaction throughout your marketplace.",
    image: mk,
  },
];

export const Estore: React.FC = () => {
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

  const activeItem = estore.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">E-Commerce Store Setup</h3>
              {estore
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Shopify/>
      <Woocommerce/>
      <Payment/>
      <Market/>

    </>
  );
};


  /* 2nd-----------------------------------------------  */
const Shopify: React.FC = () => {
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

  const activeItem = shopify.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Shopify Store Setup</h3>
              {shopify
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Woocommerce: React.FC = () => {
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

  const activeItem = woocommerce.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">WooCommerce Store Setup</h3>
              {woocommerce
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
// 4th ------------------------------------------------------
const Payment: React.FC = () => {
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

  const activeItem = payment.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Payment Gateway Integration</h3>
              {payment
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 5th ------------------------------------------------------
const Market: React.FC = () => {
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

  const activeItem = market.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Marketplace Development</h3>
              {market
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};


// Odoo-----------------------------------

const customization = [
  {
    id: 0,
    title: "Odoo Migration & Customization",
    description:
      "We provide seamless Odoo migration services to ensure a smooth transition from legacy systems or older versions. Customization: Odoo can be modeled to support your specific workflows, which increases usability, improves performance, and makes the platform the best fit as per business objectives.",
    image: mi,
  },
  {
    id: 1,
    title: "Legacy System Migration",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We import data from old systems to Odoo accurately and safely. Minimal downtime, easy transition, and full data integrity are guaranteed by our process to ensure that your business operations are not interrupted in the process of the shift.",
    image: mi,
  },
  {
    id: 2,
    title: "Version Upgrades",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our specialists upgrade Odoo to the new version, saving your data and settings. We promise compatibility, improved performance, and availability of new features without interfering with business processes.",
    image: mi,
  },
  {
    id: 3,
    title: "Custom Module Development",
    subtitle: "Retail Digital Experience",
    description:
      "We create custom Odoo modules to add functionality to your specific business processes. HR to inventory, we have customization that makes Odoo fit well with your needs.",
    image: mi,
  },
  {
    id: 4,
    title: "Workflow Customization",
    subtitle: "Consumer Goods Automation",
    description:
      "Odoo workflows are optimized through customized automation, approvals, and processes. This will be to make sure that the platform fits your operations, increases efficiency, and improves user experience across departments.",
    image: mi,
  },
  {
    id: 5,
    title: "Data Security & Compliance",
    subtitle: "Insurance Tech",
    description:
      "Migration and customization are the services that observe data protection. We adhere to strong compliance standards and best practices in every aspect of your sensitive data, and it is safe during the processes of migration and system tweaking.",
    image: mi,
  },
];

const consultancy = [
  {
    id: 0,
    title: "Odoo Techno-Functional Consultancy",
    description:
      "We are a techno-functional consultancy that fills the gap between the requirements of the business and the technical application. We also offer complete solutions, integrating Odoo capabilities with your operations, and will achieve a smooth integration, customization, and usability in order to make your business as efficient as possible.",
    image: tc,
  },
  {
    id: 1,
    title: " Business Process Analysis",
    description:
      "We review your current workflows to see the gaps and opportunities. Our specialists align Odoo capabilities to your business objectives,  resulting in a system that eases operations and brings growth.",
    image: tc,
  },
  {
    id: 2,
    title: "Technical Architecture Design",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We create scalable and secure Odoo architectures to match your needs. Whether through performing optimization on the database, our consultancy guarantees you a system that is future-ready and capable of expanding with your business.",
    image: tc,
  },
  {
    id: 3,
    title: "Functional Mapping & Customization",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our consultants draw Odoo modules to your own processes, and suggest customizations where appropriate. This ensures that your system is like a glove, and it adds productivity without unneeded complexity.",
    image: tc,
  },
  {
    id: 4,
    title: "User Training & Adoption",
    subtitle: "Retail Digital Experience",
    description:
      "We also offer practical training programs so that your team will know the technical and functional side of Odoo. This increases the adoption rates and puts users in a position to leverage the full capacity of the system.",
    image: tc,
  },
  {
    id: 5,
    title: " Continuous Improvement Strategy",
    subtitle: "Consumer Goods Automation",
    description:
      "Our consultancy doesn't stop at implementation. We offer continued support and optimization plans to ensure that your Odoo system is up-to-date with changing business demands and best practices in the industry.",
    image: tc,
  },
];

const odoomod = [
  {
    id: 0,
    title: "Odoo Module Development",
    description:
      "We create custom Odoo modules depending on your specific business requirements. Our solutions are an addition to the functionality of Odoo, which has given you the power of scalability, efficiency, and the ability to perfectly meet your operational processes.",
    image: md,
  },
  {
    id: 1,
    title: " Custom Module Design",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "Odoo modules are designed manually by us to suit your needs. Every module is designed to maximize performance, simplify processes, and provide a smooth user experience.",
    image: md,
  },
  {
    id: 2,
    title: " Industry-Specific Solutions",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "We create modules specific to various industries such as manufacturing, retail, healthcare, or services, so that your Odoo system can be applied in your sector to your specific problems and processes.",
    image: md,
  },
  {
    id: 3,
    title: "Module Integration",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We make sure that any new modules we have developed perfectly fit into your existing Odoo system. This forms a cohesive ecosystem in which all processes are interrelated to improve efficiency and data transfer among the departments.",
    image: md,
  },
  {
    id: 4,
    title: "Scalability & Flexibility",
    subtitle: "Consumer Goods Automation",
    description:
      "Our modules are designed with scalability in mind. These modules may be extended or tailored to your specific needs as your business expands, and long-term usability and flexibility.",
    image: md,
  },
  {
    id: 5,
    title: "Quality Assurance & Testing",
    subtitle: "Insurance Tech",
    description:
      "Each module is highly tested before deployment. From functionality tests to performance tests and security tests, we ensure that your custom modules work well and dependably in actual field settings.",
    image: md,
  },
];

const odooserv = [
  {
    id: 0,
    title: "Odoo Integration Services",
    description:
      "We also offer a smooth Odoo integration service that interconnects your ERP with third-party applications, tools, and platforms. Our solutions are designed to provide the efficient flow of data, enhance efficiency, and centralized control- welcoming your business to operate smarter, faster, and more efficiently.",
    image: ig,
  },
  {
    id: 1,
    title: "Third-Party App Integration",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We combine Odoo with key business solutions such as CRM, HR, e-commerce, nd project management solutions to create a single platform that helps improve collaboration and streamline operations across your organization.",
    image: ig,
  },
  {
    id: 2,
    title: "Payment Gateway Integration",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Odoo is linked to online payment gateways by our team, which allows making transactions online without certain difficulties. The integration improves customer experience and provides safety and compliance in financial operations.",
    image: ig,
  },
  {
    id: 3,
    title: "API Development & Integration",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      " We create and integrate bespoke APIs to interface with Odoo and third-party applications. This guarantees real-time synchronization, efficient data interchange, and the ability to be adaptive when your business processes change.",
    image: ig,
  },
  {
    id: 4,
    title: "E-commerce & Marketplace Integration",
    subtitle: "Consumer Goods Automation",
    description:
      "With Shopify and Magento, and Amazon or eBay, we integrate Odoo with major e-commerce platforms and marketplaces, so as to coordinate sales, inventory, and customer data efficiently.",
    image: ig,
  },
  {
    id: 5,
    title: "Cloud & IoT Integration",
    subtitle: "Insurance Tech",
    description:
      "Our integration solutions enhance the capabilities of Odoo with cloud solutions and IoT technologies to provide real-time monitoring, automation, and analytics to improve decision-making and operational efficiency.",
    image: ig,
  },
];

const mainsupport = [
  {
    id: 0,
    title: "Odoo Maintenance & Support",
    description:
      "All of our Odoo support and maintenance services assure that your ERP system is operating properly, safely, and without failure. We will offer continuous support, be it in terms of bug fixes, performance monitoring, to ensure that your business activity remains efficient, scalable, and future-ready.",
    image: md,
  },
  {
    id: 1,
    title: "Bug Fixing & Error Resolution",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We offer timely bug fixing and error-solving services to remove interference in your Odoo system. Our anticipatory measures will guarantee a seamless flow of work and continuous business running.",
    image: md,
  },
  {
    id: 2,
    title: "Performance Monitoring & Optimization",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our specialists constantly observe the functioning of the systems and optimize settings. This will make sure it is faster, there is less downtime, and it has better efficiency in your Odoo environment.",
    image: md,
  },
  {
    id: 3,
    title: "Version Upgrades & Patches",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "Stay updated with the latest Odoo features. We update to the new versions and security patches to improve the performance, functionality addition and security of your system against vulnerabilities.",
    image: md,
  },
  {
    id: 4,
    title: "Data Backup & Recovery",
    subtitle: "Consumer Goods Automation",
    description:
      "We use safe backup and disaster recovery measures to safeguard your business's important data. We have fast recovery and the least amount of downtime in case of a sudden breakdown.",
    image: md,
  },
  {
    id: 5,
    title: "24/7 Technical Support",
    subtitle: "Insurance Tech",
    description:
      "Our dedicated support staff is on call 24/7 to help solve technical problems, respond to inquiries, and make sure your Odoo system operates smoothly- so your business does not slow.",
    image: md,
  },
];

export const Customization: React.FC = () => {
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

  const activeItem = customization.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Migration & Customization</h3>
              {customization
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Consultancy/>
      <Odoomod/>
      <Odooserv/>
      <Mainsupport/>
      </>
  );
};


  /* 2nd-----------------------------------------------  */
const Consultancy: React.FC = () => {
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

  const activeItem = consultancy.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Techno-Functional Consultancy</h3>
              {consultancy
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Odoomod: React.FC = () => {
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

  const activeItem = odoomod.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Module Development</h3>
              {odoomod
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
// 4th ------------------------------------------------------
const Odooserv: React.FC = () => {
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

  const activeItem = odooserv.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Integration Services</h3>
              {odooserv
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 5th ------------------------------------------------------
const Mainsupport: React.FC = () => {
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

  const activeItem = mainsupport.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Maintenance & Support</h3>
              {mainsupport
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// Custom web---------------------------------------------------
const cmsdev = [
  {
    id: 0,
    title: "Custom CMS Development",
    description:
      "Our custom CMS solutions offer your business the ability to manage all your content, along with additional scalability, performance, and usability. They are also dynamic, safe, and search engine-friendly interfaces that can be easily manipulated and maintained by anyone without needing to call in technical personnel frequently.",
    image: cm,
  },
  {
    id: 1,
    title: "User-Friendly Dashboards",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We can have user-friendly content management in our dashboards, and this is why they can be used by non-technical users as well. It is easy to navigate, and the drag and drop features give you full control of the layout and structure of your site, as well as the process of publishing it.",
    image: cm,
  },
  {
    id: 2,
    title: "Multi-User Access Control",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "Our CMS solutions have per-user permission authentication, so that different team members are able to participate in the process without jeopardizing data or design integrity. The right privileges ensure that there is a smooth workflow management with secure content publishing across your company; editors have appropriate access, and to an extent, administrators as well.",
    image: cm,
  },
  {
    id: 3,
    title: "Seamless Third-Party Integrations",
    subtitle: "Retail Digital Experience",
    description:
      "We combine your CMS with CRMs, eCommerce platforms, and analytics software to make them as useful as possible. This will enable your website to integrate with business software, enabling seamless workflow, better customer experience, and keeping the system efficient.",
    image: cm,
  },
  {
    id: 4,
    title: "Scalable & Secure Solutions",
    subtitle: "Consumer Goods Automation",
    description:
      "Our CMS platforms are designed to allow the growth of your business. Regardless of your requirements, whether it is more features, storage, or additional plugins, we can ensure your system can evolve without any issues,e s keeping it safe and secure with the latest updates, patches, and data protection.",
    image: cm,
  },
  {
    id: 5,
    title: "Optimized for Performance",
    subtitle: "Insurance Tech",
    description:
      "We do not just create CMS solutions; we optimize them, making them fast, SEO friendly, and long-lasting. With clean code and fast-loading pages, our content management system will increase your position in search engines and give visitors a good impression.",
    image: cm,
  },
];

const webdev = [
  {
    id: 0,
    title: "Custom Web Application Development",
    description:
      "With our custom web application development solutions, companies and individuals can design unique applications that make operations smooth, bolster relationships with customers, and spur growth. We build scalable, secure, and user-friendly web applications that will meet your business objectives and assure ease of use, scalability, and high performance of the applications to support functionality across all platforms and devices.",
    image: cw,
  },
  {
    id: 1,
    title: " Tailored Business Solutions",
    description:
      "Your business is unique, and our custom web applications are designed to address your unique challenges. Whether it be workflow automation, data management, or customer interaction, we develop solutions that have been integrated into your business ecosystem more effectively, enhancing efficiency and cutting the cost of operations.",
    image: cw,
  },
  {
    id: 2,
    title: " Cross-Platform Compatibility",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We make sure that your web applications perform optimally across your desktop, tablets, and mobile devices. This approach to the development, responsive/adaptive, will ensure accessibility, consistency, and an easy process for all its users, regardless of the platform and browser that they might be using.",
    image: cw,
  },
  {
    id: 3,
    title: "Advanced Security Features",
    subtitle: "Enterprise Messaging & Communication",
    description:
      "The center of our web application development is security. We use encryption, firewalls, role-based access, and frequent vulnerability checks to protect any sensitive business and customer information, and the above practices are strictly conformed to the newest industry practices and standards.",
    image: cw,
  },
  {
    id: 4,
    title: "Scalable Architecture",
    subtitle: "Retail Digital Experience",
    description:
      "We develop applications in anticipation of future expansion. Regardless of whether you anticipate more users, larger data volumes, or greater functionality, we develop solutions to reach scale without compromising the speed, stability, and performance of your business.",
    image: cw,
  },
  {
    id: 5,
    title: " Integration with Business Tools",
    subtitle: "Consumer Goods Automation",
    description:
      "We integrate your web applications with third-party tools, including CRM, ERP, payment gateways, and marketing tools. This allows easy data flow, a reduction in manual data manipulation, and makes your team handle business processes effectively using one central system.",
    image: cw,
  },
];

const apidev = [
  {
    id: 0,
    title: "Custom API Development & Integration",
    description:
      "We specialize in custom API development and integration services that can help businesses build bridges between the application, the platform, and software designed to communicate and share data effectively. We develop safe, scalable, and stable APIs that exactly meet your expectations, and their integration can be done without any difficulties in the system.",
    image: ap,
  },
  {
    id: 1,
    title: " Custom API Development",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We plan and create custom APIs tailored to specific needs. Be it on mobile applications, SaaS solutions, or enterprise software, our APIs are safe, extensible, and high-performance, ensuring that your systems interrelate seamlessly and so allowing you to innovate at a rapid pace and scale your business.",
    image: ap,
  },
  {
    id: 2,
    title: "Third-Party API Integration",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Be it its payment gateways, CRM, marketing tools, and cloud services, we can integrate any third-party API within your existing applications. This guarantees the interconnection of your systems, automation, and optimization, which eliminates manual compensations and increases productivity in the various departments.",
    image: ap,
  },
  {
    id: 3,
    title: "Secure Data Transfer",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "The security of data is given high priority in our API development. We also have in place encryption, authentication, and authorization protocols to seal sensitive data when they are transferred, ensuring that we adhere to industry standards and that your business does not feel the trauma of a possible breach.",
    image: ap,
  },
  {
    id: 4,
    title: "Scalable and Flexible Architecture",
    subtitle: "Consumer Goods Automation",
    description:
      "Our APIs are designed with a view to scaling up as your company scales. They are scalable and with modular architectures, they accommodate future improvement, greater workloads, and other integrations without unnecessary deficiency in performance, putting you at long-term flexibility and merit.",
    image: ap,
  },
  {
    id: 5,
    title: "Continuous Monitoring & Support",
    subtitle: "Insurance Tech",
    description:
      "We offer monitoring, updates, and problem solutions to your APIs so that they work non-stop. Our proactive maintenance and 24/7 support ensure that your integrations are always reliable, efficient, and cost-effective based on your business and technology needs.",
    image: ap,
  },
];

const partyserv = [
  {
    id: 0,
    title: "Third-Party Service Integration",
    description:
      "Our third-party service integration solutions assist businesses in joining key tools, platforms, and applications into their digital ecology. Our software is able to work with CRMs, payment gateways, and streamline communication between the systems, resulting in increased automation, efficiency, and scaling of the systems and a pleasant user experience.  ",
    image: sd,
  },
  {
    id: 1,
    title: "CRM Integration",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We incorporate trending CRMs such as Salesforce, HubSpot, or Zoho in your web and mobile applications, making customer data management convenient. This enables your team to monitor leads, automate approaches, and enhance customer relations with centralized and real-time data.",
    image: sd,
  },
  {
    id: 2,
    title: "Payment Gateway Integration",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      "Our team integrates safe and secure payment gateways such as PayPal, Stripe, and Square into your eCommerce. Multi-currency support and encrypted transactions make online payment a simple hassle hassle-free task for your customers and secure finances for your business.",
    image: sd,
  },
  {
    id: 3,
    title: "Marketing & Analytics Tools",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      " We incorporate Google Analytics and Mailchimp to combine marketing and analytics platforms that generate informative data about customer behavior and campaign effectiveness. This will enable you to support your decisions with data and track ROI, and refine strategies to grow better.",
    image: sd,
  },
  {
    id: 4,
    title: "Cloud & SaaS Integration",
    subtitle: "Consumer Goods Automation",
    description:
      "We bridge the gap between cloud services and SaaS applications and enable your systems to interact harmoniously. Either Google Workspace, Slack, or Dropbox, our integrations enhance collaboration, data sharing, and productivity among teams and eliminate manual tasks.",
    image: sd,
  },
  {
    id: 5,
    title: "Social Media & Communication Tools",
    subtitle: "Insurance Tech",
    description:
      "We link communication tools and social media apps, such as WhatsApp API, Facebook Messenger, and Slack, so that a business is able to interact with its audience on a higher level. This will safeguard better customer engagement, speedier inquiry handling, and a much consolidated brand presence over the online platforms.",
    image: sd,
  },
];

const plugin = [
  {
    id: 0,
    title: "Custom Plugin & Module Development",
    description:
      "Our custom plugin and module development services add extended functionality to your site and applications with custom solutions that suit the specific needs of your business. Be it robust functions, efficient integrations, or elite-performance features, we tailor our scalable and secure or easy-to-manage modules and plug-ins that work according to your digital strategies.",
    image: pl,
  },
  {
    id: 1,
    title: "WordPress Plugin Development",
    subtitle:
      "Process Automation & Digital Transformation within SLB's Ecosyst",
    description:
      "We develop custom WordPress plugins that provide additional functionality to websites, including complex contact forms and booking systems, as well as eCommerce extensions. Our plugins are lightweight, secure, and optimized to be non-performance-impacting, which is why they don't make your sites slow.",
    image: pl,
  },
  {
    id: 2,
    title: "CMS Module Development",
    subtitle: "Each landing page design is responsive and will ensure a prospective visitor can browse on any device—be it desktop, tablet, or mobile, as you will never lose a lead because of poor mobile compatibility.",
    description:
      " Our developers create custom modules on CMS systems such as Drupal, Joomla, and Magento. These modules make your site more flexible, allowing more functionality like advanced searching, content filtering, or user dashboards customized to your business needs.",
    image: pl,
  },
  {
    id: 3,
    title: " eCommerce Plugin Solutions",
    subtitle: "Be it lightning-speed layouts or on-page SEO, we make sure that your landing page is extremely searchable and simple to use, which will assist you in attracting and maintaining quality traffic.",
    description:
      "We create and customize unique plugins to be used by e-commerce platforms such as WooCommerce, Shopify, and Magento. Our products and solutions provide custom checkouts, dynamic product filters, and more to optimise customer journeys, increase conversions, and manage stores more efficiently, allowing business growth.",
    image: pl,
  },
  {
    id: 4,
    title: "API-Ready Extensions",
    subtitle: "Consumer Goods Automation",
    description:
      "Our programmers can produce API compatible extensions and modules that enable your site to communicate with third-party applications seamlessly. These extensions enhance scalability, automate the processes, and make it smooth to share data in your digital ecosystem.",
    image: pl,
  },
  {
    id: 5,
    title: "Performance & Security Enhancements",
    subtitle: "Insurance Tech",
    description:
      "We also develop a plugin that will concentrate on performance optimization, caching, and security enhancements. These will ensure your site loads quicker, is stable with high traffic, is secure against vulnerabilities, and ensures your users have the best experience possible.",
    image: pl,
  },
];

export const Cmsdev: React.FC = () => {
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

  const activeItem = cmsdev.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Custom CMS Development</h3>
              {cmsdev
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2nd  */}
        </div>
      </div>
      <Webdev/>
      <Apidev/>
      <Partyserv/>
      <Plugin/>
      </>
  );

};



  /* 2nd-----------------------------------------------  */
const Webdev: React.FC = () => {
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

  const activeItem = webdev.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Techno-Functional Consultancy</h3>
              {webdev
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 3rd-----------------------------------------------------
const Apidev: React.FC = () => {
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

  const activeItem = apidev.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Module Development</h3>
              {apidev
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
// 4th ------------------------------------------------------
const Partyserv: React.FC = () => {
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

  const activeItem = partyserv.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Integration Services</h3>
              {partyserv
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

// 5th ------------------------------------------------------
const Plugin: React.FC = () => {
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

  const activeItem = plugin.find((item) => item.id === activeId);

  return (
    <>
      <div className="container">
        <div className="timeline-container">
          {/* Left Timeline */}
          <div className="timeline-left"  data-aos="fade-right">
            <ul>
              <h3 className="heads">Odoo Maintenance & Support</h3>
              {plugin
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
            <button className="discover-btn d-none d-md-block">Discover More</button>
          </div>

          {/* Center Image */}
          <div className="timeline-center" data-aos="fade-up">
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
          <div className="timeline-right"  data-aos="fade-left">
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
                <button className="readmore-btn d-none d-md-block">Read More</button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};


export default New;



