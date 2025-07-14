import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import BlueprintGrid from "@/components/commons/BlueprintGrid";
import EditorCard from "@/components/commons/EditorCard/EditorCard";

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
                <BlueprintGrid
                    spacing={20}
                    lineColor="rgba(0, 255, 255, 0.1)"
                    opacity={[0, 1, 1, 1]}
                />

                <div className="flex h-screen items-center justify-center p-4 md:p-24">
                    <EditorCard title="About Me" lines={6}>
                        <p className="leading-relaxed">
                            <span className="text-purple-500">const</span>{" "}
                            <span className="text-yellow-500">name</span>{" "}
                            <span className="text-blue-400">=</span>{" "}
                            <span className="text-emerald-400">"Elgin Al-wafi"</span>;
                        </p>
                        <p className="leading-relaxed">
                            <span className="text-orange-400">console</span>.
                            <span className="text-indigo-400">log</span>(
                            <span className="text-emerald-400">"Hallo Everyone! My name is "</span>{" "}
                            <span className="text-red-400">+</span>{" "}
                            <span className="text-blue-400">name</span>);
                        </p>
                    </EditorCard>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
