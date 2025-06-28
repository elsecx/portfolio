import { Permanent_Marker, Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const marker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-permanent-marker",
});

export const fonts = {
    inter,
    marker,
};

export const fontVariables = Object.values(fonts)
    .map((font) => font.variable)
    .join(" ");
