import React from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import { useScrambleText } from "@/hooks/useScrambleText";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    const textFrom = "Let Me Introduce";
    const textTo = "I'm Elgin Al-wafi";
    const mappedProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scrambledText = useScrambleText(mappedProgress, textFrom, textTo);

    return (
        <section ref={heroRef} className="relative h-[400vh]">
            <div className="sticky top-16 flex h-[calc(100vh-6rem)] flex-col items-center justify-center">
                <h1 className="text-center text-5xl font-bold md:text-8xl">{scrambledText}</h1>
                <AnimatePresence>
                    {scrambledText === textTo && (
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
