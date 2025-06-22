import React from "react";
import { motion, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0, 3]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

    return (
        <section ref={heroRef} className="relative h-[200vh]">
            {/* Vignette */}
            <motion.div
                className="sticky top-0 h-screen overflow-hidden"
                style={{ scale, opacity }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(ellipse at center, rgba(255,0,0,0.2) 0%, rgba(0,0,0,0.9) 80%)`,
                        mixBlendMode: "screen",
                    }}
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
