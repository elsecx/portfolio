import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDocumentReady } from "@/hooks/useDocumentReady";
import Lottie from "react-lottie";

import Mercusuar from "@/assets/animation/mercusuar.json";
import Arrow from "@/assets/animation/arrow.json";
import Cat from "@/assets/animation/nyancat.json";

const SplashScreen = () => {
    const docLoaded = useDocumentReady();
    const [progress, setProgress] = React.useState(0);
    const [textIndex, setTextIndex] = React.useState(0);
    const [startSplit, setStartSplit] = React.useState(false);
    const [hideSplash, setHideSplash] = React.useState(false);

    const slides = [
        { text: "Welcome to my portfolio", animation: Mercusuar },
        { text: "I'am Elgin Al-wafi", animation: Cat },
        { text: "Creative Web Developer", animation: Arrow },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % slides.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (!docLoaded) {
            const interval = setInterval(() => {
                setProgress((prev) => Math.min(prev + Math.random() * 10, 95));
            }, 100);
            return () => clearInterval(interval);
        }
    }, [docLoaded]);

    React.useEffect(() => {
        if (docLoaded) {
            setProgress(100);
            setTimeout(() => setStartSplit(true), 1000);
            setTimeout(() => setHideSplash(true), 2000);
        }
    }, [docLoaded]);

    const current = slides[textIndex];

    return (
        <AnimatePresence>
            {!hideSplash && (
                <motion.div
                    className="fixed inset-0 z-[9999] overflow-hidden"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* SPLIT BACKGROUND */}
                    <motion.div
                        className="absolute left-0 top-0 z-10 h-full w-full bg-warning"
                        animate={startSplit ? { y: "-100%" } : { y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute right-0 top-0 z-10 h-full w-full bg-warning"
                        animate={startSplit ? { y: "100%" } : { y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* CONTENT */}
                    {!startSplit && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-warning text-black">
                            <motion.div
                                key={textIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-4"
                            >
                                <h1 className="text-center text-xl font-black uppercase md:text-2xl">
                                    {current.text}
                                </h1>
                                <div>
                                    <Lottie
                                        options={{ animationData: current.animation }}
                                        height={80}
                                        width={80}
                                        isClickToPauseDisabled
                                    />
                                </div>
                            </motion.div>

                            <div className="absolute bottom-6 text-xl font-semibold tracking-wide">
                                {Math.floor(progress)}%
                            </div>

                            {/* Progress Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut", duration: 0.3 }}
                                className="absolute left-0 top-0 h-1 bg-black"
                            />
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
