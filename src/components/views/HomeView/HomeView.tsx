import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ScrollHint from "@/components/commons/ScrollHint";
import HeroSection from "./sections/HeroSection";

const HomeView = () => {
    return (
        <MainLayout title="Home">
            <HeroSection />
            <ScrollHint />
        </MainLayout>
    );
};

export default HomeView;
