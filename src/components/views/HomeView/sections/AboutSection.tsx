import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";

const AboutSection = () => {
    const { ref: aboutRef, scrollYProgress } = useScrollTrack({
        offset: ["start end", "end end"],
    });

    const blockquoteBlur = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const blockquoteStyle = {
        opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
        filter: useMotionTemplate`blur(${blockquoteBlur}px)`,
    };

    return (
        <section ref={aboutRef} id="about-section" className="relative h-[400vh]">
            <div className="wrapper">
                <h1 className="text-stripes text-8xl">About Me</h1>
            </div>
        </section>
    );
};

export default AboutSection;
