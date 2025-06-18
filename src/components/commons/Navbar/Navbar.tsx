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
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <a href="/" className="font-bold text-inherit">
                    {site.othername}
                </a>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    icon={() => (isMenuOpen ? <X /> : <Menu />)}
                />
            </NavbarContent>
        </NextUINavbar>
    );
};

export default Navbar;
