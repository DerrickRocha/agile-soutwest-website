"use client";

import Link from "next/link";
import React, {useState} from "react";
import styled from "styled-components";
import Image from 'next/image';
import {theme} from "@/app/constants/theme";

const HeaderContainer = styled.header`
    background-color: ${theme.colors.primary};
    padding: 0px ${theme.padding.gutter};
    height: ${theme.dimensions.headerHeight};
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
    @media (max-width: ${theme.breakpoints.mobile}) {
        display: none;  // Hide NavList on smaller screens
    }
`;

const NavItem = styled.li`
    display: inline;
    font-size: ${theme.textSize.links};
    font-family: ${theme.fonts.links};
    font-weight: bold;
`;

// Hamburger menu icon, which appears on smaller screens
const MenuIcon = styled.div`
    display: none;
    cursor: pointer;
    align-self: center;

    @media (max-width: 768px) {
        display: block;  // Show on smaller screens
    }
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #003366;
  position: absolute;
  top: 80px;
  right: 0;
  padding: 10px;
    display: ${({isOpen}) => (isOpen ? 'flex' : 'none')}; // Toggle visibility based on isOpen

    @media (min-width: 769px) {
        display: none;  // Hide on larger screens
    }
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <HeaderContainer>
            <Nav>
                <LogoContainer>
                    <Link href="/">
                        <Image
                            src="/images/agile_logo.png"  // Replace with your logo path
                            alt="Agile Southwest Logo"
                            width={164}
                            height={80}
                        />
                    </Link>
                </LogoContainer>
                {/* Normal Nav List (hidden on small screens) */}
                <NavList>
                    <NavItem>
                        <Link href="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/services">Services</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contact">Contact</Link>
                    </NavItem>
                </NavList>

                {/* Hamburger Menu Icon (visible on small screens) */}
                <MenuIcon onClick={toggleMenu}>
                    <Image
                        src="/images/menu_24dp_E8EAED.svg"  // Replace with your logo path
                        alt="Hamburger Menu"
                        width={48}
                        height={48}
                    />
                </MenuIcon>
                <MobileNavList isOpen={isMenuOpen}>
                    <NavItem>
                        <Link href="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/services">Services</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contact">Contact</Link>
                    </NavItem>
                </MobileNavList>


            </Nav>
        </HeaderContainer>

    )
}