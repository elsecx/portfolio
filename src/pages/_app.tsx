// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import LenisProvider from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextUIProvider>
                <LenisProvider root>
                    <Component {...pageProps} />
                </LenisProvider>
            </NextUIProvider>
        </NextThemeProvider>
    );
}
