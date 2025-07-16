import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import BlueprintGrid from "@/components/commons/BlueprintGrid";
import EditorCard from "@/components/commons/EditorCard/EditorCard";
import { site } from "@/config/constant";
import TextMarquee from "@/components/commons/TextMarquee";

const code = `$ curl -X GET -H "Content-type: application/json" -H "Accept: application/json" "https://elsecx.app/api/about"
{
    name: "${site.name}",
    age: ${site.age},
    location: "${site.location}",
    description: "${site.description}"
}`;

const AboutSection = () => {
    const { ref: aboutRef, scrollYProgress } = useScrollTrack({
        offset: ["start end", "end end"],
    });

    const cardStyle = {
        opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
        scale: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
        perspective: useTransform(scrollYProgress, [0, 0.3], [10, 0]),
    };

    return (
        <section ref={aboutRef} id="about-section" className="relative h-[200vh]">
            <div className="wrapper">
                <BlueprintGrid
                    spacing={30}
                    lineColor="rgba(0, 255, 255, 0.1)"
                    opacity={[0.4, 1, 1, 1]}
                />

                <div className="my-16">
                    <TextMarquee
                        baseVelocity={-10}
                        repeatCount={6}
                        className="text-outline font-archivo text-4xl font-black uppercase md:text-6xl"
                    >
                        About Me
                    </TextMarquee>
                    <TextMarquee
                        baseVelocity={15}
                        repeatCount={6}
                        separator="&#9760;"
                        className="font-archivo text-4xl font-black uppercase text-emerald-400 md:text-6xl"
                    >
                        Stay Chill
                    </TextMarquee>
                </div>

                <motion.div
                    style={cardStyle}
                    className="flex items-center justify-center px-4 md:px-24"
                >
                    <EditorCard
                        title="About Me"
                        code={code}
                        language="bash"
                        lineNumbers={false}
                        readOnly
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
