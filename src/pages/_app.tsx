// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </NextThemeProvider>
    );
}
