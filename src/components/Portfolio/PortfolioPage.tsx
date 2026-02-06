import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import "../../assets/components-css/Services.css";
import FaqSection from "../../shareable/faq";
import Top1 from "../../assets/images/top1.png";
import Top2 from "../../assets/images/top2.png";
import Top3 from "../../assets/images/top3.png";
import hm1 from "../../assets/images/home1img.png";
import Bottom1 from "../../assets/images/bottom1.png";
import Bottom2 from "../../assets/images/bottom2.png";
import Bottom3 from "../../assets/images/bottom3.png";
import hm2 from "../../assets/images/home2img.png";




// Import Data Directly
import portfolioData from '../../data/portfolioData.json';
import siteDataLib from '../../data/siteData.json';

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
    description: string;
    tags: string[];
}

const faqItems = [
    {
        id: 1,
        question: "How long does a typical project take?",
        answer: "Timeline varies by scope. A premium website usually takes 3-6 weeks, while complex ERP solutions can span 3-6 months. We prioritize quality and clear milestones throughout the journey."
    },
    {
        id: 2,
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide 24/7 technical support and maintenance packages. Our goal is to ensure your digital product evolves with your business needs and stays secure."
    },
    {
        id: 3,
        question: "Can you help with app store deployment?",
        answer: "Absolutely. We handle the entire submission process for Apple App Store and Google Play, ensuring your application meets all technical and design guidelines."
    }
];

export const PortfolioPage = () => {
    const { theme } = useTheme();
    const [filter, setFilter] = useState('All');

    // Load initial state from imports
    const projects: Project[] = portfolioData.portfolio || [];
    const pageData = siteDataLib.pages.portfolio;
    const heroContent = pageData?.sections?.find((s: any) => s.id === 'hero')?.content;

    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const heroTitle = heroContent?.title || "OUR PORTFOLIO";
    const heroDesc = heroContent?.description || "A curated showcase of digital excellence. We turn complex ideas into high-performance products that set new industry standards.";

    const titleParts = heroTitle.split(" ");
    const word1 = titleParts[0] || "OUR";
    const word2 = titleParts[1] || "PORTFOLIO";

    const topImages = [Top1, Top2, Top3, hm1];
    const bottomImages = [Bottom1, Bottom2, Bottom3, hm2];



    return (
        <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-slate-900'}`}>
            {/* Hero Section */}
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

                    <div className="absolute top-0 right-[-10%] w-[60%] h-full pointer-events-none opacity-40">
                        <div className="relative w-full h-full">
                            {projects.slice(0, 3).map((card: Project, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5, x: 100, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, x: 0, rotate: -5 }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.5 + (i * 0.3),
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    style={{
                                        top: `${20 + (i * 25)}%`,
                                        right: `${10 + (i * 5)}%`,
                                        zIndex: 3 - i
                                    }}
                                    className="absolute w-64 aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/30 bg-white/10 backdrop-blur-md p-1 z-10"
                                >
                                    <img
                                        src={card.image}
                                        className="w-full h-full object-cover rounded-2xl"
                                        alt="Showcase"
                                        loading={i === 0 ? "eager" : "lazy"}
                                        decoding="async"
                                        sizes="(min-width:1024px) 256px, 40vw"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Scrolling Images */}
            <section className="scrolling-images-section py-5">
                <div className="scroll-row scroll-row-1">
                    <div className="scroll-track">
                        {[...topImages, ...topImages].map((img, index) => (
                            <img
                                key={`top-${index}`}
                                src={img}
                                alt={`Top image ${index}`}
                                className="scroll-image"
                            />
                        ))}
                    </div>
                </div>

                <div className="scroll-row scroll-row-2 mt-5 d-none d-md-block">
                    <div className="scroll-track reverse">
                        {[...bottomImages, ...bottomImages].map((img, index) => (
                            <img
                                key={`bottom-${index}`}
                                src={img}
                                alt={`Bottom image ${index}`}
                                className="scroll-image"
                            />
                        ))}
                    </div>
                </div>
            </section>






            {/* Categories Filter Section */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-4 mb-2">
                        {categories.map((cat: string) => (
                            <motion.button
                                key={cat}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFilter(cat)}
                                className={`px-10 py-3 !rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ease-out border-2 ${filter === cat
                                    ? 'bg-[#289ed8] border-[#289ed8] text-white shadow-[0_15px_40px_-10px_rgba(40,158,216,0.6)] scale-110'
                                    : 'bg-transparent border-slate-100 text-slate-400 hover:border-[#289ed8] hover:text-[#289ed8]'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project: Project, idx: number) => {
                            // fall back to image URL if link is missing or placeholder to avoid redirecting to "#"
                            const projectLink = project.link && project.link !== '#' ? project.link : project.image;

                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    <div className={`p-6 rounded-[3rem] border h-full flex flex-col transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900/50 border-white/10 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500 shadow-xl'
                                        }`}>
                                        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 border border-white/10 shadow-lg bg-slate-100">
                                            <ImageWithFallback
                                                src={project.image}
                                                alt={project.title}
                                                fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                                                className="w-full h-full object-[center_top] scale-[1.02] group-hover:scale-110 transition-transform duration-700"
                                                sizes="(min-width:1280px) 30vw, (min-width:768px) 45vw, 100vw"
                                            />
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="px-3 py-1 rounded-full bg-[#289ed8]/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-2xl font-black mb-4 tracking-tight">{project.title}</h3>
                                            <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag: string) => (
                                                        <span key={tag} className="text-[10px] font-bold text-slate-400">#{tag}</span>
                                                    ))}
                                                </div>
                                                <a
                                                    href={projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block"
                                                >
                                                    <div
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors transition-transform duration-300 ease-out
                                                        ${theme === 'dark' ? 'bg-white/10 hover:bg-blue-600' : 'bg-slate-900 hover:bg-blue-600'}
                                                        group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:-rotate-12`}
                                                    >
                                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section>

            <FaqSection faqs={faqItems} />
        </main>
    );
};
