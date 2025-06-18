import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ScrollHint from "@/components/commons/ScrollHint";

const HomeView = () => {
    return (
        <MainLayout title="Home">
            <div className="relative h-[200vh]"></div>
            <ScrollHint />
        </MainLayout>
    );
};

export default HomeView;
