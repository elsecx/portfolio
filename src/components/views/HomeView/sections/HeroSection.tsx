import React from "react";
import { motion, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import useScrollTrack from "@/hooks/useScrollTrack";
import { useScrambleText } from "@/hooks/useScrambleText";
import CautionStripe from "@/components/commons/CautionStripe";
import ItsMe from "@/assets/images/me-transparent.png";
import SkullHand from "@/assets/images/skull-hand.png";

const HeroSection = () => {
    const { ref: heroRef, scrollYProgress } = useScrollTrack({
        offset: ["start start", "end end"],
    });

    // General animation
    const blurProgress = useTransform(scrollYProgress, [0.6, 1], [0, 20]);

    // Headline animation
    const headlineProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const headlineText = useScrambleText(
        headlineProgress,
        "Let Me Introduce",
        "I'am Elgin Al-wafi"
    );
    const headlineStyle = {
        x: useTransform(scrollYProgress, [0.6, 1], [0, -400]),
        opacity: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        filter: useMotionTemplate`blur(${blurProgress}px)`,
    };

    // Tagline animation
    const taglineHueRotate = useTransform(scrollYProgress, [0, 0.6], [0, 90]);
    const taglineStyle = {
        opacity: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        scale: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        skewY: useTransform(scrollYProgress, [0, 0.6, 0.9, 1], [-3, 0, -10, 20]),
        filter: useMotionTemplate`blur(${blurProgress}px) hue-rotate(${taglineHueRotate}deg)`,
    };

    // My photo animation
    const myGrayScale = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const myStyle = {
        x: useTransform(scrollYProgress, [0.7, 1], [0, 200]),
        opacity: useTransform(scrollYProgress, [0.6, 0.8], [1, 0]),
        filter: useMotionTemplate`blur(${blurProgress}px) grayscale(${myGrayScale})`,
    };

    // Skull hand animation
    const skullHandStyle = {
        rotate: "120deg",
        x: useTransform(scrollYProgress, [0, 0.6], [-200, 0]),
        y: useTransform(scrollYProgress, [0, 0.6], [-200, 0]),
        opacity: useTransform(scrollYProgress, [0.6, 1], [1, 0]),
        filter: useMotionTemplate`blur(${blurProgress}px)`,
    };

    return (
        <section ref={heroRef} id="hero-section" className="relative h-[400vh]">
            <div className="wrapper">
                {/* Hero title */}
                <div className="sticky top-0 z-[1] flex h-screen flex-col items-center justify-center p-8 md:items-start md:p-16">
                    <motion.h1
                        initial={{ opacity: 0, x: -400 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={headlineStyle}
                        className="headline text-center text-4xl md:text-start md:text-8xl"
                    >
                        {headlineText}
                    </motion.h1>
                    <motion.h4
                        initial={{ opacity: 0, scale: 0, skewY: -3 }}
                        animate={{ opacity: 1, scale: 1, skewY: 0 }}
                        transition={{ duration: 0.3 }}
                        style={taglineStyle}
                        className="tagline text-sm text-emerald-400 md:text-4xl"
                    >
                        My self as developer
                    </motion.h4>
                </div>

                {/* My Photo */}
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    style={myStyle}
                    className="absolute -right-10 bottom-20 h-[220px] w-[220px] md:-right-20 md:bottom-40 md:h-[400px] md:w-[400px]"
                >
                    <Image
                        src={ItsMe}
                        alt="It's Me"
                        className="drop-shadow-[0_0_8px_rgba(0,212,146,0.4)]"
                    />
                </motion.div>

                {/* Skull Hand Image */}
                <motion.div
                    style={skullHandStyle}
                    className="absolute -left-12 top-10 h-[200px] w-[200px]"
                >
                    <Image
                        src={SkullHand}
                        alt="Skull Hand"
                        className="drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                    />
                </motion.div>

                {/* Caution Stripes */}
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
            </div>
        </section>
    );
};

export default HeroSection;
