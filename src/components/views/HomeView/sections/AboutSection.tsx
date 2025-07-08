import React from "react";
import { motion, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";

const AboutSection = () => {
    const { ref: aboutRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end start"],
    });

    const styles = {
        wrapper:
            "sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-red-800",
        title: "text-center font-permanent-marker text-4xl font-bold md:text-8xl",
    };

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [40, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <section ref={aboutRef} className="relative h-[400vh]">
            <div className={styles.wrapper}>
                <motion.h1
                    className={styles.title}
                    style={{
                        opacity,
                        x,
                        scale,
                    }}
                >
                    About Me
                </motion.h1>
            </div>
        </section>
    );
};

export default AboutSection;
