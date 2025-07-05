import React from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import Image from "next/image";
import { useScrambleText } from "@/hooks/useScrambleText";
import useScrollTrack from "@/hooks/useScrollTrack";
import Me from "@/assets/images/me.png";
import SkullHand from "@/assets/images/skull-hand.png";
import CautionStripe from "@/components/commons/CautionStripe";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    const styles = {
        textContainer:
            "fixed inset-0 p-8 flex flex-col items-center justify-center md:items-start md:gap-2 md:p-16",
        title: "text-center font-permanent-marker text-4xl font-bold md:text-8xl",
        subTitle: "text-md text-emerald-400 font-young-serif font-semibold uppercase md:text-4xl",
    };

    // Title Effect
    const progress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scrambled = useScrambleText(progress, "Let Me Introduce", "Elgin Al-wafi");
    const titleBlurProgress = useTransform(scrollYProgress, [0.6, 1], [0, 20]);
    const titleStyle = {
        x: useTransform(scrollYProgress, [0.6, 1], [0, -400]),
        opacity: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        filter: useMotionTemplate`blur(${titleBlurProgress}px)`,
    };

    // SubTitle Effect
    const subTitleBlurProgress = useTransform(scrollYProgress, [0.6, 1], [0, 20]);
    const subTitleHueRotateProgress = useTransform(scrollYProgress, [0, 0.6], [0, 90]);
    const subTitleStyle = {
        opacity: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        scale: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        skewY: useTransform(scrollYProgress, [0, 0.6, 0.9, 1], [-3, 0, -10, 20]),
        filter: useMotionTemplate`blur(${subTitleBlurProgress}px) hue-rotate(${subTitleHueRotateProgress}deg)`,
    };

    // Hero Image Effect
    const imageBlurProgress = useTransform(scrollYProgress, [0.6, 1], [1, 20]);
    const grayscaleProgress = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const meStyle = {
        x: useTransform(scrollYProgress, [0.7, 1], [0, 200]),
        opacity: useTransform(scrollYProgress, [0.6, 0.8], [1, 0]),
        filter: useMotionTemplate`grayscale(${grayscaleProgress}) blur(${imageBlurProgress}px)`,
    };

    // Skull Hand Image Effect
    const skullHandBlurProgress = useTransform(scrollYProgress, [0.8, 1], [1, 20]);
    const skullHandStyle = {
        rotate: "120deg",
        x: useTransform(scrollYProgress, [0, 0.6], [-200, 0]),
        y: useTransform(scrollYProgress, [0, 0.6], [-200, 0]),
        opacity: useTransform(scrollYProgress, [0.8, 1], [1, 0]),
        filter: useMotionTemplate`blur(${skullHandBlurProgress}px)`,
    };

    return (
        <section ref={heroRef} className="relative h-[200vh]">
            <div className={styles.textContainer}>
                <motion.h1 className={styles.title} style={titleStyle}>
                    {scrambled}
                </motion.h1>
                <motion.h4 className={styles.subTitle} style={subTitleStyle}>
                    My self as developer
                </motion.h4>
            </div>

            {/* Hero Image */}
            <motion.div
                style={meStyle}
                className="fixed -right-8 bottom-20 h-[220px] w-[220px] md:-right-20 md:bottom-40 md:h-[400px] md:w-[400px]"
            >
                <Image src={Me} alt="Me" className="drop-shadow-[0_0_8px_rgba(0,212,146,0.2)]" />
            </motion.div>

            {/* Skull Hand Image */}
            <motion.div
                style={skullHandStyle}
                className="fixed -left-12 top-10 h-[200px] w-[200px]"
            >
                <Image
                    src={SkullHand}
                    alt="Skull Hand"
                    className="drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                />
            </motion.div>

            <CautionStripe
                scrollProgress={scrollYProgress}
                from={0.6}
                to={1}
                direction="left"
                angle={5}
                className="bottom-0"
            />
            <CautionStripe
                scrollProgress={scrollYProgress}
                from={0.6}
                to={1}
                direction="right"
                angle={-2}
                className="bottom-0"
            />
        </section>
    );
};

export default HeroSection;
