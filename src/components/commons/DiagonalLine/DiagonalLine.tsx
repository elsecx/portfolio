import React from "react";
import { cn } from "@/utils/cn";

type DiagonalLineProps = {
    id?: string;
    height?: number;
    className?: string;
    color?: string;
};

const DiagonalLine = ({
    id = "diagonal-pattern",
    height = 12,
    className = "",
    color = "#00d492",
}: DiagonalLineProps) => {
    return (
        <section
            className={cn(
                "relative w-full border-y border-emerald-300/20 dark:border-emerald-400/30",
                `h-${height}`,
                className
            )}
        >
            <svg
                style={{ color }}
                className={cn(
                    "pointer-events-none absolute inset-0 size-full select-none",
                    "!opacity-30 [z-index:-1] dark:!opacity-60"
                )}
            >
                <defs>
                    <pattern
                        id={id}
                        width="6"
                        height="6"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(45)"
                    >
                        <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id})`} />
            </svg>
        </section>
    );
};

export default DiagonalLine;
