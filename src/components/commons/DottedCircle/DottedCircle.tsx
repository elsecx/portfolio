import React from "react";
import { motion, MotionValue } from "framer-motion";

type DottedCircleProps = {
    size?: number;
    color?: string;
    dotCount?: number;
    dotSize?: number;
    className?: string;
    style?: {
        [key: string]: string | number | MotionValue<any>;
    };
};

const DottedCircle = ({
    size = 120,
    color = "#00d492",
    dotCount = 40,
    dotSize = 4,
    className = "",
    style = {},
}: DottedCircleProps) => {
    const dots = Array.from({ length: dotCount }).map((_, i) => {
        const angle = (i / dotCount) * 2 * Math.PI;
        const radius = size / 2;
        const cx = radius + radius * Math.cos(angle);
        const cy = radius + radius * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r={dotSize / 2} fill={color} />;
    });

    return (
        <motion.div style={style} className={className}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
                {dots}
            </svg>
        </motion.div>
    );
};

export default DottedCircle;
