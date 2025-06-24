import React from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const chars = "<{!@(#[$=%]^)&*}>1234567890~-+_=";

function scrambleChar(original: string) {
    return original === " " ? " " : chars[Math.floor(Math.random() * chars.length)];
}

export const useScrambleText = (progress: MotionValue<number>, from: string, to: string) => {
    const [scrambled, setScrambled] = React.useState(from);
    const lastIndexRef = React.useRef(-1);

    useMotionValueEvent(progress, "change", (latest: number) => {
        if (latest <= 0) {
            setScrambled(from);
            lastIndexRef.current = -1;
            return;
        }

        const totalSteps = to.length;
        const currentIndex = Math.floor(latest * totalSteps);

        if (currentIndex === lastIndexRef.current) return;

        lastIndexRef.current = currentIndex;

        let result = "";
        for (let i = 0; i < to.length; i++) {
            if (i < currentIndex) {
                result += to[i];
            } else if (i === currentIndex) {
                result += scrambleChar(to[i]);
            } else {
                result += from[i] || "";
            }
        }

        setScrambled(result);
    });

    return scrambled;
};
