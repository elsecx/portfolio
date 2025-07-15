import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import BlueprintGrid from "@/components/commons/BlueprintGrid";
import EditorCard from "@/components/commons/EditorCard/EditorCard";
import { site } from "@/config/constant";

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
        <section ref={aboutRef} id="about-section" className="relative h-[400vh]">
            <div className="wrapper">
                <BlueprintGrid
                    spacing={30}
                    lineColor="rgba(0, 255, 255, 0.1)"
                    opacity={[0.4, 1, 1, 1]}
                />

                <motion.div
                    style={cardStyle}
                    className="flex h-screen items-center justify-center p-4 md:p-24"
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
