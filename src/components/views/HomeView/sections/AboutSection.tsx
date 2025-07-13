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
                <motion.div
                    style={blockquoteStyle}
                    className="flex h-screen items-center justify-center px-4 pt-4 md:mx-auto md:w-3/5"
                >
                    <h1 className="text-center font-young-serif text-base leading-6 tracking-widest md:text-3xl">
                        With vocational studies in{" "}
                        <mark className="rounded-sm bg-emerald-400 ps-1">Software Engineering</mark>{" "}
                        complete at eighteen, I craft polished websites and refined interfaces with{" "}
                        <span className="underline">precision</span> and{" "}
                        <span className="underline">purpose</span>.
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
