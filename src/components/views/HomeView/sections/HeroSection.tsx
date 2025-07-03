import React from "react";
import { AnimatePresence, motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import { useScrambleText } from "@/hooks/useScrambleText";
import heroBg from "@/assets/images/hero.jpg";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    // Parallax Background Scale
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    // Title Effect
    const textFrom = "Let Me Introduce";
    const textTo = "I'm Elgin Al-wafi";
    const progress = useTransform(scrollYProgress, [0.6, 1], [-0.01, 1]);
    const scrambled = useScrambleText(progress, textFrom, textTo);
    const titleBlurProgress = useTransform(progress, [0, 0.6, 0.8, 1], [0, 20, 20, 0]);
    const titleFilter = useMotionTemplate`blur(${titleBlurProgress}px)`;

    // Subtitle Effect
    const subOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const subBlurProgress = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const subFilter = useMotionTemplate`blur(${subBlurProgress}px)`;

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

            <div className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-3">
                <motion.h1
                    className="font-permanent-marker text-center text-5xl font-bold md:text-8xl"
                    style={{
                        filter: titleFilter,
                    }}
                >
                    {scrambled}
                </motion.h1>
                <div className="flex items-center justify-center gap-5">
                    <motion.span
                        className="font-young-serif text-3xl font-semibold md:text-6xl"
                        style={{
                            opacity: subOpacity,
                            x: useTransform(scrollYProgress, [0, 0.5], [-400, 0]),
                            filter: subFilter,
                        }}
                    >
                        My self
                    </motion.span>
                    <motion.span
                        className="font-young-serif text-3xl font-semibold text-emerald-400 md:text-6xl"
                        style={{
                            opacity: subOpacity,
                            x: useTransform(scrollYProgress, [0, 0.5], [400, 0]),
                            filter: subFilter,
                        }}
                    >
                        as developer
                    </motion.span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
