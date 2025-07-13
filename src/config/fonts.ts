import { Permanent_Marker, Young_Serif, Archivo, Lora } from "next/font/google";

const marker = Permanent_Marker({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-permanent-marker",
});

const youngSerif = Young_Serif({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-young-serif",
});

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-archivo",
});

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-lora",
});

export const fonts = {
    marker,
    youngSerif,
    archivo,
    lora,
};

export const fontVariables = Object.values(fonts)
    .map((font) => font.variable)
    .join(" ");
