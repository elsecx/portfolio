import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ScrollHint from "@/components/commons/ScrollHint";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";

const HomeView = () => {
    return (
        <MainLayout title="Home">
            <HeroSection />
            <AboutSection />
            <ScrollHint />
        </MainLayout>
    );
};

export default HomeView;
