import { Permanent_Marker, Young_Serif } from "next/font/google";

const marker = Permanent_Marker({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-permanent-marker",
});

const youngSerif = Young_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-young-serif",
});

export const fonts = {
    marker,
    youngSerif,
};

export const fontVariables = Object.values(fonts)
    .map((font) => font.variable)
    .join(" ");
