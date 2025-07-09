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
                <div className="flex w-full flex-col items-center justify-center gap-4">
                    <TextMarquee
                        text="About Me"
                        speed={25}
                        reverse={true}
                        className="tagline text-base tracking-widest text-emerald-400 md:text-4xl"
                    />
                    <TextMarquee
                        text="Clean code, clear mind"
                        speed={25}
                        className="tagline text-base tracking-widest text-gray-100 md:text-4xl"
                    />
                    <TextMarquee
                        text="About Me"
                        speed={25}
                        reverse={true}
                        className="tagline text-base tracking-widest text-emerald-400 md:text-4xl"
                    />
                    <TextMarquee
                        text="Clean code, clear mind"
                        speed={25}
                        className="tagline text-base tracking-widest text-gray-100 md:text-4xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
