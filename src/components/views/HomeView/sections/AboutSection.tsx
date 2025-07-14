import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import useScrollTrack from "@/hooks/useScrollTrack";
import BlueprintGrid from "@/components/commons/BlueprintGrid";
import EditorCard from "@/components/commons/EditorCard/EditorCard";

const code = `$ curl -X GET -H "Content-type: application/json" -H "Accept: application/json" "https://elsecx.app/api/about"
{
    name: "Elgin Al-wafi Dauliyah",
    age: "18",
    location: "Indonesian",
    skills: {
        programming: ["PHP", "Typescript", "React Native", "Go"],
        database: ["MySQL", "SQLite", "MongoDB"],
        tools: ["Git", "Docker", "Postman", "Figma", "Wordpress"]
    },
    description: "A web developer who loves transforming coffee (or tea) into clean, functional code. Recently built a digital graduation platform with Laravel and jQuery - complete with a slick admin dashboard that actually makes sense to use! This hands-on experience leveled up my full-stack skills and user-centered design thinking."
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
