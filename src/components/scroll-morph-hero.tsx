"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, useScroll } from "framer-motion";

// --- Utility ---
// function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;  // Reduced from 100
const IMG_HEIGHT = 85; // Reduced from 140

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    const [isEntered, setIsEntered] = useState(false);

    return (
        <motion.div
            // Staggered reveal that then transitions into scroll-based morphing
            initial={{ 
                scale: 0, 
                opacity: 0, 
                rotateY: -180,
                rotate: -45,
                x: 0,
                y: 0 
            }}
            onViewportEnter={() => setIsEntered(true)}
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
                rotateY: isEntered ? 0 : -180,
            }}
            transition={{
                type: "spring",
                stiffness: isEntered ? 40 : 50,
                damping: isEntered ? 15 : 20,
                delay: isEntered ? 0 : index * 0.04, // Delay only for the first entrance
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", // Essential for the 3D hover effect
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const TOTAL_IMAGES = 20;

// Unsplash Images
const IMAGES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80",
    "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=80",
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80",
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=300&q=80",
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        // Initial set
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Animation Segments (0 to 1) ---
    // 0.0 - 0.1: Hold Circle
    // 0.1 - 0.25: Circle to Scatter (Disperse)
    // 0.25 - 0.45: Scatter to Arc (Assemble)
    // 0.45 - 1.0: Arc Shuffling (Active)

    // --- Random Scatter Positions (Fixed Seed) ---
    const scatterPositions = useMemo(() => {
        return IMAGES.map((_, i) => {
            const seed = i * 123.456;
            return {
                x: (Math.sin(seed) * 1000),
                y: (Math.cos(seed) * 800),
                rotation: (Math.sin(seed * 2) * 180),
                scale: 0.6,
                opacity: 1, // Start fully visible
            };
        });
    }, []);

    // --- Content Opacity (tied to scroll) ---
    // Fade in primary arc content when arc is formed (after 0.45)
    const contentOpacity = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.45, 0.6], [20, 0]);

    // Intro Title Opacity & Y (Visible during circle, fades out during disperse)
    const titleOpacity = useTransform(smoothProgress, [0.1, 0.25], [1, 0]);
    const titleY = useTransform(smoothProgress, [0.1, 0.25], [0, -40]);

    // Intro Subtitle Opacity
    const subtitleOpacity = useTransform(smoothProgress, [0, 0.1], [0.5, 0]);

    const [currentProgress, setCurrentProgress] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeProgress = smoothProgress.on("change", setCurrentProgress);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeProgress();
            unsubscribeParallax();
        };
    }, [smoothProgress, smoothMouseX]);

    return (
        <section ref={containerRef} className="relative w-full h-[200vh] perspective-1000 bg-white">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24">
                {/* Intro Text (Fades out) */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h1
                        style={{ opacity: titleOpacity, y: titleY }}
                        className="text-2xl font-medium tracking-tight text-gray-800 md:text-4xl capitalize"
                    >
                        {currentProgress < 0.4 ? "What I Also Do." : ""}
                    </motion.h1>
                    <motion.p
                        style={{ opacity: subtitleOpacity }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[25%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                        Explore My Vision
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
                        Discover a world where technology meets creativity. <br className="hidden md:block" />
                        Scroll through my curated collection of innovations designed to shape the future.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        const p = currentProgress;

                        const isMobile = containerSize.width < 768;
                        const minDimension = Math.min(containerSize.width, containerSize.height);

                        // A. Circle
                        const circleRadius = Math.min(minDimension * 0.3, 300);
                        const circleAngle = (i / TOTAL_IMAGES) * 360;
                        const circleRad = (circleAngle * Math.PI) / 180;
                        const circle = {
                            x: Math.cos(circleRad) * circleRadius,
                            y: Math.sin(circleRad) * circleRadius,
                            rotation: circleAngle + 90,
                            scale: 0.9, // Slightly smaller to avoid edges
                            opacity: 1
                        };

                        // B. Scatter
                        const scatter = scatterPositions[i];

                        // C. Arc
                        const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                        const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                        const arcApexY = containerSize.height * (isMobile ? 0.55 : 0.45);
                        const arcCenterY = arcApexY + arcRadius;
                        const spreadAngle = isMobile ? 100 : 130;
                        const startAngle = -90 - (spreadAngle / 2);
                        const step = spreadAngle / (TOTAL_IMAGES - 1);

                        const scrollProgress = Math.max(0, (p - 0.45) / 0.55);
                        const maxRotation = spreadAngle * 0.8;
                        const boundedRotation = -scrollProgress * maxRotation;
                        const currentArcAngle = startAngle + (i * step) + boundedRotation;
                        const arcRad = (currentArcAngle * Math.PI) / 180;
                        const arc = {
                            x: Math.cos(arcRad) * arcRadius + parallaxValue,
                            y: Math.sin(arcRad) * arcRadius + arcCenterY,
                            rotation: currentArcAngle + 90,
                            scale: isMobile ? 1.4 : 1.8,
                            opacity: 1
                        };

                        // --- Segments Mapping ---
                        if (p < 0.1) {
                            // Stage 0: Perfect Circle
                            target = circle;
                        } else if (p < 0.25) {
                            // Stage 1: Circle Dispersing to Scatter
                            const t = (p - 0.1) / 0.15;
                            target = {
                                x: lerp(circle.x, scatter.x, t),
                                y: lerp(circle.y, scatter.y, t),
                                rotation: lerp(circle.rotation, scatter.rotation, t),
                                scale: lerp(circle.scale, scatter.scale, t),
                                opacity: 1,
                            };
                        } else if (p < 0.45) {
                            // Stage 2: Scatter Assembling to Arc
                            const t = (p - 0.25) / 0.2;
                            target = {
                                x: lerp(scatter.x, arc.x, t),
                                y: lerp(scatter.y, arc.y, t),
                                rotation: lerp(scatter.rotation, arc.rotation, t),
                                scale: lerp(scatter.scale, arc.scale, t),
                                opacity: 1,
                            };
                        } else {
                            // Stage 3: Arc Active (Shuffling)
                            target = arc;
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={"circle"}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
