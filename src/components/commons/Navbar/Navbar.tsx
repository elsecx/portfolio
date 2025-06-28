import React from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { site } from "@/config/constant";
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
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    icon={() => (isMenuOpen ? <X /> : <Menu />)}
                />
            </NavbarContent>
        </NextUINavbar>
    );
};

export default Navbar;
