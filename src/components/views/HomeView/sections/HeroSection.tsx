import React from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import { useScrambleText } from "@/hooks/useScrambleText";
import heroBg from "@/assets/images/hero.jpg";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start end", "end start"],
    });

    const textFrom = "Let Me Introduce";
    const textTo = "I'm Elgin Al-wafi";
    const progress = useTransform(scrollYProgress, [0, 1], [-1, 2]);
    const scrambled = useScrambleText(progress, textFrom, textTo);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    return (
        <section ref={heroRef} className="relative h-[200vh]">
            {/* Background */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 -top-16 z-0 h-screen w-full bg-cover bg-center"
            >
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `url(${heroBg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </motion.div>

            {/* Text Scramble */}
            <div className="sticky top-16 flex h-[calc(100vh-6rem)] flex-col items-center justify-center">
                <h1 className="text-center text-5xl font-bold md:text-8xl">{scrambled}</h1>
                <AnimatePresence>
                    {scrambled === textTo && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="text-md font-bold italic text-indigo-400 md:mt-2 md:text-2xl"
                        >
                            Creative Developer Based In Indonesian
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default HeroSection;
