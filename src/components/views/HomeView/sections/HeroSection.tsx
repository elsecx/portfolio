import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    return (
        <section ref={heroRef} className="relative h-[400vh]">
            <h1>Oke</h1>
        </section>
    );
};

export default HeroSection;
