import React from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/config/constant";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <NextUINavbar isBordered onMenuOpenChange={setIsMenuOpen} className="fixed">
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">
                    {site.othername}
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    icon={() => (isMenuOpen ? <X /> : <Menu />)}
                />
            </NavbarContent>
        </NextUINavbar>
    );
};

export default Navbar;
