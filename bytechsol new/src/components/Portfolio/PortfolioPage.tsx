import { useState } from 'react';
import { motion } from 'framer-motion';
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
import loopHoverImg from "../../assets/images/loop-hover.png";
import voxiqHoverImg from "../../assets/images/voxiq-hover.png";
import skynodeHoverImg from "../../assets/images/skynode-hover.png";
import arr from "../../assets/images/arrow.svg";
import babylonHoverImg from "../../assets/images/babylon-hover.png";
import expeditedHoverImg from "../../assets/images/expedited-hover.png";
import clockitHoverImg from "../../assets/images/clockit-hover.png";
import clockitLogoImg from "../../assets/images/clockit-logo.png";
import frigoHoverImg from "../../assets/images/frigo-hover.png";
import frigoLogoImg from "../../assets/images/frigo-logo.png";
import cmjlHoverImg from "../../assets/images/cmjl-hover.png";
import labourHoverImg from "../../assets/images/labour-hover.png";
import labourLogoImg from "../../assets/images/labour-logo.png";




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
    // const [filter, setFilter] = useState('All'); // Variable removed

    // Load initial state from imports
    const projects: Project[] = portfolioData.portfolio || [];
    const pageData = siteDataLib.pages.portfolio;
    const heroContent = pageData?.sections?.find((s: any) => s.id === 'hero')?.content;

    // Filter removed as per request - showing all projects
    const filteredProjects = projects;

    const heroTitle = heroContent?.title || "OUR PORTFOLIO";
    const heroDesc = heroContent?.description || "A curated showcase of digital excellence. We turn complex ideas into high-performance products that set new industry standards.";

    const titleParts = heroTitle.split(" ");
    const word1 = titleParts[0] || "OUR";
    const word2 = titleParts[1] || "PORTFOLIO";

    const topImages = [Top1, Top2, Top3, hm1];
    const bottomImages = [Bottom1, Bottom2, Bottom3, hm2];



    return (
        <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-slate-900'}`}>
            {/* Services Page Style Hero */}
            <section className={`relative overflow-hidden pt-10 pb-10 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <div className="staggered-wrapper">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="staggered-our"
                        >
                            {word1} <span className="staggered-line" />
                        </motion.div>

                        <motion.h1 className="staggered-text-1 block" style={{ whiteSpace: 'nowrap' }}>
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

                        <motion.h1 className="staggered-text-2 block" style={{ whiteSpace: 'nowrap' }}>
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
                            className="staggered-p2"
                        >
                            {heroDesc}
                        </motion.p>
                    </div>
                    </div>
                    <div className="md:w-5/12 relative h-[500px] flex flex-col justify-center items-end hidden md:flex">
                        
                        {/* Top Card - Gray - Loop */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute right-0 top-[5%] w-[320px] xl:w-[380px] h-[220px] xl:h-[260px] transform rotate-[3deg] translate-x-12 z-10 flex items-center justify-center"
                        >
                            <img src={loopHoverImg} alt="Loop Project" className="w-full h-full object-contain" />
                        </motion.div>
                        
                        {/* Middle Card - Dusty Rose - Babylon */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute right-8 xl:right-16 top-[35%] w-[340px] xl:w-[400px] h-[240px] xl:h-[280px] z-20 flex items-center justify-center transform -rotate-[1deg]"
                        >
                            <img src={babylonHoverImg} alt="Babylon OS Project" className="w-full h-full object-contain" />
                        </motion.div>

                        {/* Bottom Card - Soft Yellow - Skynode */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="absolute right-4 xl:right-8 top-[65%] w-[330px] xl:w-[390px] h-[230px] xl:h-[270px] transform rotate-[2deg] z-30 flex items-center justify-center"
                        >
                            <img src={skynodeHoverImg} alt="Skynode Project" className="w-full h-full object-contain" />
                        </motion.div>
                        
                    </div>
                </div>
            </section>


            {/* Scrolling Images */}
            <section className="scrolling-images-section py-5">
                <div className="scroll-row scroll-row-2 d-none d-md-block">
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

            {/* Project Cards Grid */}
            <section className={`py-24 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
                <div className="w-full max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* Loop Card - Bellroy Style */}
                    <a href="https://loop.bytechsol.com/login" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src="https://loop.bytechsol.com/loop.svg" alt="Loop Logo" className="w-32 md:w-40 h-auto transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={loopHoverImg} alt="Loop Dashboard" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Loop
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Intelligent logistics and fleet management platform.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Voxiq Card */}
                    <a href="https://voxiq.bytechsol.com/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src="https://voxiq.bytechsol.com/logo-darker.png" alt="Voxiq Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={voxiqHoverImg} alt="Voxiq Platform" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Voxiq
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        AI-powered voice analytics and communication.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Skynode Card */}
                    <a href="https://sky-node-edge-solution-new-design.vercel.app/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src="https://sky-node-edge-solution-new-design.vercel.app/logo-skynode-light-bg.svg" alt="Skynode Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={skynodeHoverImg} alt="Skynode Platform" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Skynode
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Advanced edge computing solutions.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Babylon OS Card */}
                    <a href="https://babylon-os.vercel.app/login" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src="https://babylon-os.vercel.app/assets/Babylon-CPVhAjWe.webp" alt="Babylon OS Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={babylonHoverImg} alt="Babylon OS Dashboard" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Babylon OS
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Comprehensive enterprise operating system.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Expedited Transport Card */}
                    <a href="https://expeditedtransport.net/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src="https://expeditedtransport.net/assets/bg-logo-dyMm7NFV.png" alt="Expedited Transport Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={expeditedHoverImg} alt="Expedited Transport Dashboard" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Expedited Transport
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Fast and reliable freight transportation.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* ClockIt Card */}
                    <a href="https://clockit.expeditedtransportservices.net/" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c1825]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#0c1825]">
                                <img src={clockitLogoImg} alt="ClockIt Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={clockitHoverImg} alt="ClockIt Dashboard" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        ClockIt
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Time tracking and employee management.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Frigo Labs Card */}
                    <a href="https://frigolabs.vercel.app/login" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src={frigoLogoImg} alt="Frigo Labs Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={frigoHoverImg} alt="Frigo Labs Dashboard" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Frigo Labs
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Innovative cold chain technology solutions.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* CMJL Mobile App Card */}
                    <a href="https://play.google.com/store/apps/details?id=net.expeditedtransport.driverapp" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f9fa]">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-[#f8f9fa]">
                                <img src="https://expeditedtransport.net/assets/bg-logo-dyMm7NFV.png" alt="CMJL Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={cmjlHoverImg} alt="CMJL Mobile App" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        CMJL Mobile App
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Dedicated application for professional drivers.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Labour Tracker App Card */}
                    <a href="https://labour-tracker-app-alpha.vercel.app/worker-portal" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col bg-white border border-slate-100">
                        
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                            {/* Default State: Logo */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700 group-hover:opacity-0 bg-white">
                                <img src="https://babylon-os.vercel.app/assets/Babylon-CPVhAjWe.webp" alt="Labour Tracker Logo" className="w-48 md:w-56 h-auto transition-transform duration-500 group-hover:scale-110 object-contain" />
                            </div>

                            {/* Hover State: Screenshot */}
                            <div className="absolute inset-0 z-0 bg-white flex items-center justify-center overflow-hidden">
                                <img src={labourHoverImg} alt="Labour Tracker Dashboard" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col justify-center flex-grow min-h-[140px]" style={{ padding: "32px 32px" }}>
                            <div className="relative w-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black text-left pr-14 flex items-center gap-2">
                                        Labour Tracker App
                                    
                                        <img src={arr} alt="arrow" className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </h3>
                                    <p className="text-slate-500 mt-2 text-sm text-left pr-14">
                                        Real-time workforce monitoring and portal.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </a>

                    {/* Future cards will go here */}
                </div>
            </section>


            <div className="px-6 pb-8 md:pb-12">
                <div className="mx-auto max-w-7xl">
                    <div className="h-10 md:h-14" />
                </div>
            </div>
            <FaqSection faqs={faqItems} />
        </main>
    );
};
