"use client";

import React from "react";
import {theme} from "@/app/constants/theme";
import Hero1Text, {Hero2Text} from "@/app/components/text";
import styled from "styled-components";

function Home() {
    return (

        <HomeHeroSection/>
    );
}

const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 920px;
`;

const Overlay = styled.div`
    grid-column: 1 / -1;
    grid-row: 1;
    background-color: rgba(0, 51, 102, 0.8);
    width: 100%;
    height: 100%;
`;

const OverlayTextContainer = styled.div`
    grid-column: 1 / -1;
    grid-row: 1;
    padding: 0 ${theme.padding.gutter};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: left;

    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        width: 100%;
    }
    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;
        text-align: center;
        align-items: center;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 100%;
        text-align: center;
        align-items: center;
    }
`;

const FixedImage = styled.div`
    grid-column: 1 / -1;
    grid-row: 1;
    background-image: url('/images/agile-methodology-machine-learning.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
`;

function HomeHeroSection() {
    return (
        <HeroContainer>
            <FixedImage>
            </FixedImage>
            <Overlay/>
            <OverlayTextContainer>
                <Hero1Text fontFamily={theme.fonts.hero} color="white">
                    Your Vision, <span style={{color: theme.colors.secondary}}>Our Expertise</span>
                </Hero1Text>
                <Hero2Text fontFamily={theme.fonts.hero} color="white">
                    Flexible Web and Mobile Solutions for Growing Businesses
                </Hero2Text>
            </OverlayTextContainer>
        </HeroContainer>
    );
}

export default Home;