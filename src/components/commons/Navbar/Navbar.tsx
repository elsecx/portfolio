import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeSwitcher from "@/components/commons/ThemeSwitcher";
import { site } from "@/config/constant";
import React from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <p className="font-bold text-inherit">{site.othername}</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
        </NextUINavbar>
    );
};

export default Navbar;
