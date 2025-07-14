import React from "react";
import { cn } from "@/utils/cn";

interface BlueprintGridProps {
    spacing?: number;
    lineColor?: string;
    opacity?: [top: number, bottom: number, left: number, right: number];
    className?: string;
    style?: React.CSSProperties;
}

const BlueprintGrid = ({
    spacing = 32,
    lineColor = "rgba(255, 255, 255, 0.05)",
    opacity = [1, 1, 1, 1],
    className = "",
    style = {},
}: BlueprintGridProps) => {
    const [opacityTop, opacityBottom, opacityLeft, opacityRight] = opacity;

    return (
        <div
            className={cn("pointer-events-none absolute inset-0 z-0", className)}
            style={{
                backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
                backgroundSize: `${spacing}px ${spacing}px`,
                maskImage: `
          linear-gradient(to bottom, rgba(0,0,0,${opacityTop}) 0%, rgba(0,0,0,${opacityBottom}) 100%),
          linear-gradient(to right, rgba(0,0,0,${opacityLeft}) 0%, rgba(0,0,0,${opacityRight}) 100%)
        `,
                WebkitMaskImage: `
          linear-gradient(to bottom, rgba(0,0,0,${opacityTop}) 0%, rgba(0,0,0,${opacityBottom}) 100%),
          linear-gradient(to right, rgba(0,0,0,${opacityLeft}) 0%, rgba(0,0,0,${opacityRight}) 100%)
        `,
                WebkitMaskComposite: "destination-in",
                maskComposite: "intersect",
                ...style,
            }}
        />
    );
};

export default BlueprintGrid;
