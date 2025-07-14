import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Terminal } from "lucide-react";
import { cn } from "@/utils/cn";

interface EditorCardProps {
    children: React.ReactNode;
    title?: string;
    lines?: number;
    className?: string;
}

const EditorCard: React.FC<EditorCardProps> = ({
    children,
    title = "Editor - SSH/user",
    lines = 10,
    className = "",
}) => {
    return (
        <Card className={cn("relative overflow-hidden bg-zinc-800/80", className)} shadow="sm">
            <CardHeader className="flex items-center justify-between bg-zinc-900 md:p-4">
                <Terminal className="h-3 w-3 md:h-5 md:w-5" />
                <p className="font-mono text-xs font-bold leading-relaxed md:text-base">
                    {title} - root@elsecx
                </p>
                <div className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500 md:h-3 md:w-3" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400 md:h-3 md:w-3" />
                    <div className="h-2 w-2 rounded-full bg-green-500 md:h-3 md:w-3" />
                </div>
            </CardHeader>

            <CardBody className="relative p-0">
                <div className="flex">
                    {/* Line numbers */}
                    <div className="select-none border-r border-zinc-700 bg-zinc-900/60 px-4 py-3 text-right text-zinc-500">
                        {[...Array(lines)].map((_, i) => (
                            <div key={i} className="font-mono text-xs leading-relaxed md:text-base">
                                {i + 1}
                            </div>
                        ))}
                    </div>

                    {/* Content with vertical fade */}
                    <div className="vertical-fade relative overflow-hidden px-4 py-3 font-mono text-xs md:text-base">
                        {children}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default EditorCard;
