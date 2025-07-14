import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/utils/cn";

type Direction = "left" | "right";

interface CautionStripeProps {
    scrollProgress: MotionValue<number>;
    from?: number;
    to?: number;
    direction?: Direction;
    className?: string;
    angle?: number;
}

const CautionStripe: React.FC<CautionStripeProps> = ({
    scrollProgress,
    from = 0.5,
    to = 0.7,
    direction = "left",
    className = "",
    angle = 0,
}) => {
    const x = useTransform(scrollProgress, [from, to], direction === "left" ? [0, -500] : [0, 500]);
    const opacity = useTransform(scrollProgress, [from + 0.1, to], [1, 0]);

    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -500 : 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            style={{
                x,
                opacity,
                rotate: angle,
                height: "clamp(1rem, 2vw, 2.5rem)",
            }}
            className={cn(
                "fixed w-full bg-[repeating-linear-gradient(45deg,_#ffcc00_0,_#ffcc00_10px,_#000_10px,_#000_20px)]",
                className
            )}
        />
    );
};

export default CautionStripe;
