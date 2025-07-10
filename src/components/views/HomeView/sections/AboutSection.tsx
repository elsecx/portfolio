import React from "react";
import { motion, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import TextMarquee from "@/components/commons/TextMarquee";

const AboutSection = () => {
    const { ref: aboutRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    return (
        <section ref={aboutRef} id="about-section" className="relative h-[400vh]">
            <div className="wrapper pt-20">
                <div className="mask-fade flex w-full flex-col items-center justify-center">
                    <TextMarquee
                        baseVelocity={-10}
                        separator="&rarr;"
                        repeatCount={5}
                        className="font-archivo text-4xl font-black uppercase text-gray-100 md:text-8xl"
                    >
                        About Me
                    </TextMarquee>
                    <TextMarquee
                        baseVelocity={10}
                        separator="&#9760;"
                        repeatCount={2}
                        className="border border-emerald-400 font-archivo text-4xl font-black uppercase text-emerald-400 md:text-8xl"
                    >
                        Clean code, clear mind
                    </TextMarquee>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
