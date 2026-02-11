import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoSrc from "../assets/videos/final-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const HomeVideo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!videoRef.current || !containerRef.current) return;

            gsap.fromTo(
                videoRef.current,
                {
                    width: "80%", // Start smaller
                    borderRadius: "20px",
                },
                {
                    width: "100%", // Expand to full width
                    borderRadius: "0px", // Optional: sharp corners on full width
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom", // Start when top of container hits bottom of viewport
                        end: "center center", // End when center of container hits center of viewport
                        scrub: 1, // Smooth interaction
                    },
                    ease: "none",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="home-video-section">
            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="home-main-video"
                />
            </div>
        </section>
    );
};

export default HomeVideo;
