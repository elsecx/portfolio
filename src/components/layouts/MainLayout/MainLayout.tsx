import Navbar from "@/components/commons/Navbar";
import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
    title: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
    return (
        <>
            <PageHead title={title} />
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
