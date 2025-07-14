import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Terminal } from "lucide-react";
import useScrollTrack from "@/hooks/useScrollTrack";
import BlueprintGrid from "@/components/commons/BlueprintGrid";

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
                    {/*  */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
