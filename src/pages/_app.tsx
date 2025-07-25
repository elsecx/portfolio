// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import LenisProvider from "@studio-freight/react-lenis";
import SplashScreen from "@/components/commons/SplashScreen";
import useAppStore from "@/store/useAppStore";

export default function App({ Component, pageProps }: AppProps) {
    const { isLoaded } = useAppStore();

    return (
        <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <NextUIProvider>
                <LenisProvider root>
                    {!isLoaded ? <SplashScreen /> : <Component {...pageProps} />}
                </LenisProvider>
            </NextUIProvider>
        </NextThemeProvider>
    );
}
