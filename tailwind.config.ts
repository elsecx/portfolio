import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "permanent-marker": ["var(--font-permanent-marker)", "cursive"],
                "young-serif": ["var(--font-young-serif)", "serif"],
                archivo: ["var(--font-archivo)", "sans-serif"],
                lora: ["var(--font-lora)", "sans-serif"],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
