import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextMarqueeProps {
    text: string;
    speed?: number;
    reverse?: boolean;
    separator?: string;
    className?: string;
}

const TextMarquee = ({
    text,
    speed = 16,
    reverse = false,
    separator = "—",
    className = "",
}: TextMarqueeProps) => {
    const directionClass = reverse ? "flex-row-reverse" : "";
    const animationX = reverse ? "100%" : "-100%";

    const repeatedText = Array(5)
        .fill(null)
        .map((_, i) => (
            <span key={i}>
                {text}
                <span className="px-2">{separator}</span>
            </span>
        ));

    return (
        <div className={cn("w-full overflow-hidden whitespace-nowrap", className)}>
            <div className={cn("marquee-gradient flex", directionClass)}>
                <motion.div
                    animate={{ x: animationX }}
                    transition={{
                        repeat: Infinity,
                        duration: speed,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0"
                >
                    {repeatedText}
                </motion.div>
                <motion.div
                    animate={{ x: animationX }}
                    transition={{
                        repeat: Infinity,
                        duration: speed,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0"
                >
                    {repeatedText}
                </motion.div>
            </div>
        </div>
    );
};

export default TextMarquee;
