import React from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";
import { cn } from "@/utils/cn";
import { wrap } from "@motionone/utils";

interface TextMarqueeProps {
    children: string;
    baseVelocity: number;
    separator?: string;
    repeatCount?: number;
    className?: string;
}

const TextMarquee = ({
    children,
    baseVelocity = 100,
    separator = "-",
    repeatCount = 0,
    className = "",
}: TextMarqueeProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();

    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = React.useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const content = Array(repeatCount)
        .fill(null)
        .map((_, i) => (
            <React.Fragment key={i}>
                <span className="inline-block">{children}</span>
                <span className="inline-block px-2">{separator}</span>
            </React.Fragment>
        ));

    return (
        <div className={cn("flex overflow-hidden whitespace-nowrap", className)}>
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                <span>{content}</span>
                <span>{content}</span>
                <span>{content}</span>
                <span>{content}</span>
            </motion.div>
        </div>
    );
};

export default TextMarquee;
