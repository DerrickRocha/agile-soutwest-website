"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from 'next/image';

const HeaderContainer = styled.header`
    background-color: #003366;
    padding: 0px 70px;
    height: 80px;
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
  gap: 20px;

  @media (max-width: 768px) {
    display: none;  // Hide NavList on smaller screens
  }
`;

const NavItem = styled.li`
    display: inline;
    font-size: 18px;
`;

export default function Header() {
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
            </Nav>
        </HeaderContainer>

    )
}