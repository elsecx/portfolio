import React from "react";
import { useScroll } from "framer-motion";

export default function useScrollTrack(options?: any) {
    const ref = React.useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: options?.offset || ["start end", "end start"],
    });

    return { ref, scrollYProgress };
}
