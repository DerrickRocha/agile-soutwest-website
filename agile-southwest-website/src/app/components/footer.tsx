import styled from "styled-components";
import {theme} from "@/app/constants/theme";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterContainer = styled.div`
    display: flex;
    background-color: ${theme.colors.primary};
    padding: 0 ${theme.padding.gutter};
    @media (max-width: ${theme.breakpoints.largeDesktop}) {
        padding: 0 ${theme.padding.gutter};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 0 ${theme.padding.mobileGutter};
    }
    height: ${theme.dimensions.headerHeight};
    justify-content: space-between;
`;

const ContactContainer = styled.div`
    display: grid;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
`;

const CopyrightContainer = styled.div`
    display: grid;
    align-items: end;
    padding-bottom: 8px;
`;

const StyleBody = styled.text`
    font-size: ${theme.textSize.bodyRegular};
    font-family: ${theme.fonts.links};
    color: ${({color}) => color || theme.colors.gray};
    text-align: center;
    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: ${theme.textSize.smallBody};
    }
`;

const white = theme.colors.white

export default function Footer() {
    return (
        <FooterContainer>
            <Link href="/">
                <Image
                    src="/images/agile_logo.svg"
                    alt="Agile Southwest Logo"
                    width={164}
                    height={80}
                />

            </Link>
            <CopyrightContainer>
                <StyleBody color={white}>&copy;2025 Agile Southwest. All rights reserved.</StyleBody>
            </CopyrightContainer>
            <ContactContainer>
                <StyleBody color={white}>Agile Southwest LLC</StyleBody>
                <StyleBody color={white}>(505) 310-0331</StyleBody>
                <StyleBody  color={white}>drocha616@gmail.com</StyleBody>
            </ContactContainer>
        </FooterContainer>
    );
}