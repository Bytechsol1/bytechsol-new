import React, { useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg"; // Import the logo

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    initialX: number; // For breathing animation
    initialY: number;
}

interface MagneticDotsProps {
    variant?: "grid" | "heart" | "logo";
}

const MagneticDots: React.FC<MagneticDotsProps> = ({ variant = "grid" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: -1000, y: -1000 });
    const particles = useRef<Particle[]>([]);
    const animationFrameId = useRef<number | null>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Brand colors driven by logo.svg: #27AAE1 (Light Blue) and #2B3990 (Dark Blue)
        const colors = [
            "#27AAE1", // Brand Cyan
            "#2B3990", // Brand Navy
            "#2972B8", // Mid-point blue
            "#6FC2E9", // Light tint
            "#1D2866"  // Dark shade
        ];

        // Grid settings
        const gridGap = 20;
        const gridRadius = 2.5;

        const initParticles = () => {
            const width = canvas.width;
            const height = canvas.height;

            if (variant === "grid") {
                particles.current = [];
                for (let x = 0; x < width; x += gridGap) {
                    for (let y = 0; y < height; y += gridGap) {
                        const offsetX = x;
                        const offsetY = y;
                        particles.current.push({
                            x: offsetX,
                            y: offsetY,
                            originX: offsetX,
                            originY: offsetY,
                            initialX: offsetX,
                            initialY: offsetY,
                            vx: 0,
                            vy: 0,
                            color: colors[Math.floor(Math.random() * colors.length)],
                            size: gridRadius
                        });
                    }
                }
            } else if (variant === "heart") {
                particles.current = [];
                const cx = width * 0.75;
                const cy = height * 0.45;
                const scale = Math.min(width, height) / 30;
                const step = 0.08;

                for (let t = 0; t < Math.PI * 2; t += step) {
                    const hx = 16 * Math.pow(Math.sin(t), 3);
                    const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

                    for (let i = 0; i < 3; i++) {
                        const jitter = 10;
                        const x = cx + hx * scale + (Math.random() - 0.5) * jitter;
                        const y = cy + hy * scale + (Math.random() - 0.5) * jitter;
                        particles.current.push({
                            x: x,
                            y: y,
                            originX: x,
                            originY: y,
                            initialX: x,
                            initialY: y,
                            vx: 0,
                            vy: 0,
                            color: colors[Math.floor(Math.random() * colors.length)],
                            size: gridRadius
                        });
                    }
                }
                for (let i = 0; i < 30; i++) {
                    const x = Math.random() * width;
                    const y = Math.random() * height;
                    particles.current.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        initialX: x,
                        initialY: y,
                        vx: 0,
                        vy: 0,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        size: gridRadius
                    });
                }
            } else if (variant === "logo") {
                const img = new Image();
                img.src = logo;
                img.onload = () => {
                    if (!canvas) return;
                    const tempCanvas = document.createElement('canvas');
                    const tempCtx = tempCanvas.getContext('2d');
                    if (!tempCtx) return;

                    const width = canvas.width;
                    const height = canvas.height;

                    const maxLogoWidth = Math.min(500, width * 0.45);
                    const maxLogoHeight = height * 0.8;

                    const scaleW = maxLogoWidth / img.width;
                    const scaleH = maxLogoHeight / img.height;
                    const scaleFactor = Math.min(scaleW, scaleH);

                    const logoW = img.width * scaleFactor;
                    const logoH = img.height * scaleFactor;

                    tempCanvas.width = width;
                    tempCanvas.height = height;

                    const logoX = width * 0.5 - logoW / 2;
                    const logoY = height * 0.5 - logoH / 2;

                    tempCtx.drawImage(img, logoX, logoY, logoW, logoH);

                    const imageData = tempCtx.getImageData(0, 0, width, height);
                    const data = imageData.data;

                    particles.current = [];

                    const scanStep = 4;

                    for (let y = 0; y < height; y += scanStep) {
                        for (let x = 0; x < width; x += scanStep) {
                            const index = (y * width + x) * 4;
                            const alpha = data[index + 3];

                            if (alpha > 128) {
                                const pX = x;
                                const pY = y;

                                particles.current.push({
                                    x: pX,
                                    y: pY,
                                    originX: pX,
                                    originY: pY,
                                    initialX: pX,
                                    initialY: pY,
                                    vx: 0,
                                    vy: 0,
                                    color: colors[Math.floor(Math.random() * colors.length)],
                                    size: 1.5
                                });
                            }
                        }
                    }
                    for (let i = 0; i < 40; i++) {
                        const x = Math.random() * width;
                        const y = Math.random() * height;
                        particles.current.push({
                            x: x,
                            y: y,
                            originX: x,
                            originY: y,
                            initialX: x,
                            initialY: y,
                            vx: 0,
                            vy: 0,
                            color: colors[Math.floor(Math.random() * colors.length)],
                            size: 2
                        });
                    }
                };
            }
        };

        const handleResize = () => {
            if (container) {
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
                initParticles();
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouse.current = { x, y };
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        handleResize();

        let time = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.04;

            particles.current.forEach((p) => {
                // Physics logic
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const forceDistance = 120;
                let force = 0;
                let angle = 0;

                if (distance < forceDistance) {
                    force = (forceDistance - distance) / forceDistance;
                    angle = Math.atan2(dy, dx);
                    const pushStrength = 10;
                    p.vx -= Math.cos(angle) * force * pushStrength;
                    p.vy -= Math.sin(angle) * force * pushStrength;
                }

                // Wave Position logic
                const waveAmp = variant === "grid" ? 1.5 : 1;
                const waveX = Math.sin(time + p.initialY * 0.05) * waveAmp;
                const waveY = Math.cos(time + p.initialX * 0.05) * waveAmp;

                const targetX = p.originX + waveX;
                const targetY = p.originY + waveY;

                const springFactor = 0.1;
                p.vx += (targetX - p.x) * springFactor;
                p.vy += (targetY - p.y) * springFactor;

                const friction = 0.85;
                p.vx *= friction;
                p.vy *= friction;

                p.x += p.vx;
                p.y += p.vy;


                if (variant === "grid") {
                    // 3D Line / Z-axis effect
                    const mouseX = mouse.current.x === -1000 ? canvas.width / 2 : mouse.current.x;
                    const mouseY = mouse.current.y === -1000 ? canvas.height / 2 : mouse.current.y;

                    const vecX = mouseX - p.x;
                    const vecY = mouseY - p.y;

                    const perspectiveStrength = 0.04;

                    // REVERT: Back to Radial (Star) orientation
                    // Point towards mouse

                    const tipX = p.x + vecX * perspectiveStrength;
                    const tipY = p.y + vecY * perspectiveStrength;


                    // BEAT logic
                    const beatPhase = time * 3 + (p.initialX + p.initialY) * 0.05;
                    const pulse = (Math.sin(beatPhase) + 1) / 2;

                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(tipX, tipY);

                    ctx.lineCap = "round";
                    ctx.lineWidth = 1 + pulse * 3.5;
                    ctx.strokeStyle = p.color;

                    // Spotlight Logic with HOLLOW CENTER
                    const spotlightRadius = 200; // Increased outer radius to frame the hollow center nicely
                    const hollowRadius = 50; // Radius of the "center hollow"

                    if (distance < spotlightRadius) {
                        // Double fade: Fade out if too far (> spotlightRadius) AND if too close (< hollowRadius)

                        let opacity = 0;

                        if (distance < hollowRadius) {
                            // Inside the hollow: Invisible or fading out
                            opacity = 0;
                            // Or simple smooth fade from hollowRadius down to 0?
                            // User wants "hollow should be circle". Cleanest is 0.
                        } else {
                            // In the "Donut" zone
                            // Fade out towards the outer edge
                            const outerFade = 1 - Math.pow(distance / spotlightRadius, 4);

                            // Fade in from the hollow edge?
                            // Smooth transition at hollow boundary
                            const hollowFade = Math.min(1, (distance - hollowRadius) / 20); // 20px transition zone

                            opacity = outerFade * hollowFade;
                        }

                        ctx.globalAlpha = Math.max(0, opacity);
                        if (opacity > 0.01) ctx.stroke();
                        ctx.globalAlpha = 1.0;
                    }

                } else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                }
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [variant]); // Re-run if variant changes

    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                zIndex: 0,
                backgroundColor: variant === "grid" ? "#f9fafb" : "transparent",
                pointerEvents: "none",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                }}
            />
        </div>
    );
};

export default MagneticDots;
