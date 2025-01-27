"use client";

import Layout from "@/app/components/layout";
import React from "react";
import { theme } from "@/app/constants/theme";
import Hero1Text, { Hero2Text } from "@/app/components/text";
import styled from "styled-components";

const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 920px;
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 920px;
    background-color: rgba(0, 51, 102, 0.8);
    z-index: 1;
`;

const OverlayTextContainer = styled.div`
    position: absolute;
    top: 40%;
    padding: 0 ${theme.padding.gutter};
    width: 60%;
    text-align: left;
    z-index: 2;
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        width: 100%;  /* Allow it to take up more width on smaller screens */
        top: 30%;

    }
    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;  /* Allow it to take up more width on smaller screens */
        top: 20%;
        text-align: center; /* Align text to the center */
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        top: ${theme.padding.verticalDivSpacing};
        width: 100%;  /* Allow it to take up more width on smaller screens */
    }
`;

const FixedImage = styled.div`
    position: absolute;
    width: 100%;
    height: 920px;
    background-image: url('/images/agile-methodology-machine-learning.png');
    background-size: cover;  /* Ensures the image covers the entire div */
    background-position: center;  /* Centers the image within the div */
    background-repeat: no-repeat;  /* Prevents the image from repeating */
    z-index: 0;
`;

function Home() {
    return (
        <Layout>
            <HeroContainer>
                <FixedImage/>

                <Overlay />
                <OverlayTextContainer>
                    <Hero1Text fontFamily={theme.fonts.hero} color="white">
                        Your Vision, <span style={{ color: theme.colors.secondary }}>Our Expertise</span>
                    </Hero1Text>
                    <Hero2Text fontFamily={theme.fonts.hero} color="white">
                        Flexible Web and Mobile Solutions for Growing Businesses
                    </Hero2Text>
                </OverlayTextContainer>
            </HeroContainer>
        </Layout>
    );
}

export default Home;