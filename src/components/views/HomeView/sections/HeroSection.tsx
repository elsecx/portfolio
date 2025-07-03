import React from "react";
import { AnimatePresence, motion, useMotionTemplate, useTransform } from "framer-motion";
import Image from "next/image";
import useScrollTrack from "@/hooks/useScrollTrack";
import { useScrambleText } from "@/hooks/useScrambleText";
import heroBg from "@/assets/images/hero.jpg";
import meme from "@/assets/images/meme.png";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    // Parallax Background Scale
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    // Title Effect
    const textFrom = "Let Me Introduce";
    const textTo = "I'm Elgin Al-wafi";
    const progress = useTransform(scrollYProgress, [0.9, 1], [-0.01, 1]);
    const scrambled = useScrambleText(progress, textFrom, textTo);
    const titleBlurProgress = useTransform(progress, [0, 0.9, 0.8, 1], [0, 20, 20, 0]);
    const titleFilter = useMotionTemplate`blur(${titleBlurProgress}px)`;

    // Subtitle Effect
    const subOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const subBlurProgress = useTransform(scrollYProgress, [0, 0.8], [20, 0]);
    const subFilter = useMotionTemplate`blur(${subBlurProgress}px)`;

    // Meme Animation
    const memeX = useTransform(scrollYProgress, [0, 0.8], [400, 0]);
    const memeY = useTransform(scrollYProgress, [0, 0.8], [200, 0]);
    const memeRotate = useTransform(scrollYProgress, [0, 0.8], [0, 360]);
    const memeScale = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section ref={heroRef} className="relative h-[400vh]">
            {/* Background */}
            <motion.div
                style={{ scale: bgScale }}
                className="sticky top-16 z-0 h-screen w-full origin-center bg-cover bg-center"
            >
                {/* Background Overlay */}
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-[500px] bg-gradient-to-t from-transparent to-black" />

                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `url(${heroBg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* Background Overlay */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent to-black" />
            </motion.div>

            <div className="fixed inset-0 z-10 flex flex-col items-center justify-center md:gap-3">
                <motion.h1
                    className="text-center font-permanent-marker text-4xl font-bold md:text-8xl"
                    style={{
                        filter: titleFilter,
                    }}
                >
                    {scrambled}
                </motion.h1>
                <div className="flex items-center justify-center gap-5">
                    <motion.span
                        className="font-young-serif text-xl font-semibold uppercase md:text-4xl"
                        style={{
                            opacity: subOpacity,
                            x: useTransform(scrollYProgress, [0, 0.8], [-400, 0]),
                            filter: subFilter,
                        }}
                    >
                        My self
                    </motion.span>
                    <motion.span
                        className="font-young-serif text-xl font-semibold uppercase text-emerald-400 md:text-4xl"
                        style={{
                            opacity: subOpacity,
                            x: useTransform(scrollYProgress, [0, 0.8], [400, 0]),
                            filter: subFilter,
                        }}
                    >
                        as developer
                    </motion.span>
                </div>
            </div>

            <motion.div
                style={{
                    x: memeX,
                    y: memeY,
                    rotate: memeRotate,
                    scale: memeScale,
                }}
                className="fixed left-[70%] top-[55%] z-0 z-[1] -translate-x-1/2 -translate-y-1/2"
            >
                <Image
                    src={meme}
                    alt="Meme"
                    width={150}
                    height={150}
                    className="drop-shadow-[0_0_10px_rgba(0,212,146,0.5)]"
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
