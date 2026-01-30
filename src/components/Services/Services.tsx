import React, { useState, useEffect } from "react";
import "../../assets/components-css/Services.css";
import { motion } from "framer-motion";
import TrustedBySection from "../../shareable/trust500";
import Testimonial from "../../shareable/testimonial";
import FaqSection from "../../shareable/faq";
import NewCon from "../../shareable/NewCon";
import ServicesSection from "./subservice/ServiceSections";
import SolarSystem from "./SolarSystem";
import { Helmet } from "react-helmet";
import { servicesPageFaqs } from "../../shareable/faqData";

const Services: React.FC = () => {
  const [cmsData, setCmsData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/cms/site')
      .then(res => res.json())
      .then(data => setCmsData(data.pages.services))
      .catch(err => console.error(err));
  }, []);

  const heroTitle = cmsData?.hero?.title || "OUR SERVICES";
  const heroDesc = cmsData?.hero?.description || "At Bytechsol, we create beautiful websites, interactive eCommerce applications, intelligent ERP platforms, AI-driven applications, and tailored software to suit the needs of every company, startup, creative, and individual user.";

  const titleParts = heroTitle.split(" ");
  const word1 = titleParts[0] || "OUR";
  const word2 = titleParts[1] || "SERVICES";

  return (
    <>
      <Helmet>
        <title>Our Services | BytechSol</title>
        <meta
          name="description"
          content="Explore BytechSol’s professional web development, AI, ERP, and digital services designed to grow your business."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bytechsol.com/services/" />

        {/* Breadcrumb schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bytechsol.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://bytechsol.com/services/"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* 1st section - Refined Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="staggered-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="staggered-our"
            >
              {word1} <span className="staggered-line" />
            </motion.div>

            <motion.h1 className="staggered-text-1">
              {word2.slice(0, 4).split("").map((letter: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + (3 - index) * 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1 className="staggered-text-2">
              {word2.slice(4).split("").map((letter: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 1.4 + (word2.slice(4).length - 1 - index) * 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="staggered-p"
            >
              {heroDesc}
            </motion.p>
          </div>

          {/* SolarSystem Revolve Elements - Restored as requested */}
          <div className="absolute top-0 right-[-10%] w-[60%] h-full pointer-events-none opacity-40">
            <SolarSystem />
          </div>
        </div>
      </section>

      <TrustedBySection />
      <ServicesSection />

      <Testimonial />
      <FaqSection faqs={servicesPageFaqs} />
      <NewCon />
    </>
  );
};

export default Services;
