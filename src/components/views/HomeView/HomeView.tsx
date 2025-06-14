import ThemeSwitcher from "@/components/commons/ThemeSwitcher";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

const HomeView = () => {
    return (
        <MainLayout title="Home">
            <div className="flex items-center gap-3">
                <ThemeSwitcher />
                <h1>
                    Initial Commit <b>Oke</b>
                </h1>
            </div>
        </MainLayout>
    );
};

export default HomeView;
