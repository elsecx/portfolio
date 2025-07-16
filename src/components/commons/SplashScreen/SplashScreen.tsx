import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "react-lottie";
import useAppStore from "@/store/useAppStore";
import DiagonalLine from "@/components/commons/DiagonalLine";
import Mercusuar from "@/assets/animation/mercusuar.json";
import Cat from "@/assets/animation/nyancat.json";
import Arrow from "@/assets/animation/arrow.json";

const SplashScreen = () => {
    const { isLoaded, setLoaded } = useAppStore();
    const [textIndex, setTextIndex] = React.useState(0);

    const slides = [
        { text: "Welcome to my portfolio", animation: Mercusuar },
        { text: "I'am Elgin Al-wafi", animation: Cat },
        { text: "Creative Web Developer", animation: Arrow },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % slides.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const current = slides[textIndex];

    // Detect page load
    React.useEffect(() => {
        const handleLoad = () => {
            document.body.style.overflow = "";
            setLoaded();
        };

        if (document.readyState === "complete") {
            setTimeout(handleLoad, 1000);
        } else {
            document.body.style.overflow = "hidden";
            window.addEventListener("load", handleLoad);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("load", handleLoad);
            };
        }
    }, [setLoaded]);

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999] overflow-hidden"
                >
                    <DiagonalLine
                        id="diagonal-pattern-t"
                        className="absolute left-0 top-0 w-full"
                    />

                    <div className="flex h-screen flex-col items-center justify-center gap-3">
                        <motion.h1
                            key={textIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="text-outline font-archivo text-4xl font-black uppercase md:text-6xl"
                        >
                            {current.text}
                        </motion.h1>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 6, ease: "easeOut" }}
                            className="mx-auto mt-6 h-[3px] w-full max-w-xs bg-emerald-400"
                        />
                    </div>

                    <DiagonalLine
                        id="diagonal-pattern-b"
                        className="absolute bottom-0 left-0 w-full"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
