import PageHead from "@/components/commons/PageHead";
import { site } from "@/config/constant";
import { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
    title: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
    return (
        <>
            <PageHead title={title} />

            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>

            <footer className="border-t px-6 py-6 text-center text-sm text-default-500">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
            </footer>
        </>
    );
};

export default MainLayout;
