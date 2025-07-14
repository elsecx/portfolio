import React from "react";
import Lottie from "react-lottie";
import { motion, useAnimate } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import MouseSvg from "@/assets/animation/mouse.json";

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: MouseSvg,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const ScrollHint = () => {
    const whenScrollRef = React.useRef(false);
    const [scope, animate] = useAnimate();

    useLenis(({ velocity }: any) => {
        if (velocity === 0) {
            whenScrollRef.current = false;
            animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.5 });
        } else {
            if (!whenScrollRef.current) {
                animate(scope.current, { opacity: 0, y: 50 }, { duration: 0.5 });
                whenScrollRef.current = true;
            }
        }
    });

    return (
        <motion.div
            ref={scope}
            initial={{ opacity: 0 }}
            className="sticky bottom-5 flex justify-center"
        >
            <div className="flex items-center gap-2 text-base text-white md:text-xl">
                <span>Scroll</span>
                <Lottie options={lottieOptions} height={40} width={40} isClickToPauseDisabled />
                <span>Down</span>
            </div>
        </motion.div>
    );
};

export default ScrollHint;
