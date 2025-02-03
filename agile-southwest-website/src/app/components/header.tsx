"use client";

import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Image from 'next/image';
import { theme } from "@/app/constants/theme";
import { usePathname } from 'next/navigation'; // Import usePathname hook

const HeaderContainer = styled.header`
    background-color: ${theme.colors.primary};
    padding: 0px ${theme.padding.gutter};
    height: ${theme.dimensions.headerHeight};
    @media (max-width: ${theme.breakpoints.largeDesktop}) {
        padding: 0 ${theme.padding.gutter};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 0 ${theme.padding.mobileGutter};
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: ${theme.dimensions.navListGap};
    margin-bottom: ${theme.dimensions.navListBottomMargin};
    @media (max-width: ${theme.breakpoints.tablet}) {
        display: none;
    }
`;

const NavItem = styled.li<{ isActive: boolean }>`
    display: inline;
    font-size: ${theme.textSize.links};
    font-family: ${theme.fonts.links};
    font-weight: bold;
    color: ${({ isActive }) => (isActive ? theme.colors.secondary : theme.colors.white)};
`;

// Hamburger menu icon, which appears on smaller screens
const MenuIcon = styled.div`
    display: none;
    cursor: pointer;
    align-self: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
        display: block;
    }
`;

const MobileNavList = styled.ul<{ $isOpen?: boolean }>`
    list-style: none;
    flex-direction: column;
    gap: 10px;
    background-color: #003366;
    position: absolute;
    top: 80px;
    right: 0;
    padding: 10px;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; 

    @media (min-width: 769px) {
        display: none;
    }
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer>
            <Nav>
                <LogoContainer>
                    <Link href="/">
                        <Image
                            src="/images/agile_logo.svg"
                            alt="Agile Southwest Logo"
                            width={164}
                            height={80}
                        />
                    </Link>
                </LogoContainer>
                <NavList>
                    <NavItem isActive={pathname === "/"}>
                        <Link href="/">Home</Link>
                    </NavItem>
                    <NavItem isActive={pathname === "/services"}>
                        <Link href="/services">Services</Link>
                    </NavItem>
                    <NavItem isActive={pathname === "/about"}>
                        <Link href="/about">About</Link>
                    </NavItem>
                    <NavItem isActive={pathname === "/contact"}>
                        <Link href="/contact">Contact</Link>
                    </NavItem>
                </NavList>

                <MenuIcon onClick={toggleMenu}>
                    <Image
                        src="/images/menu_24dp_E8EAED.svg"
                        alt="Hamburger Menu"
                        width={32}
                        height={32}
                    />
                </MenuIcon>
                <MobileNavList $isOpen={isMenuOpen}> {}
                    <NavItem isActive={pathname === "/"}>
                        <Link href="/">Home</Link>
                    </NavItem>
                    <NavItem isActive={pathname === "/services"}>
                        <Link href="/services">Services</Link>
                    </NavItem>
                    <NavItem isActive={pathname === "/about"}>
                        <Link href="/about">About</Link>
                    </NavItem>
                    <NavItem isActive={pathname === "/contact"}>
                        <Link href="/contact">Contact</Link>
                    </NavItem>
                </MobileNavList>
            </Nav>
        </HeaderContainer>
    );
}