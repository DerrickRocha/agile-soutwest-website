"use client";

import Layout from "@/app/components/layout";
import Image from "next/image";
import React from "react";
import { theme } from "@/app/constants/theme";
import Hero1Text, { Hero2Text } from "@/app/components/text";
import styled from "styled-components";

// Ensure the container respects the header and footer height, filling remaining space
const OverlayContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - ${theme.dimensions.headerHeight} - ${theme.dimensions.footerHeight}); /* Space between header and footer */
    z-index: 0;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 51, 102, 0.8); /* Black background with 50% opacity */
    z-index: 1; /* Ensure overlay is above the image, but below the text */
`;

const OverlayTextContainer = styled.div`
    position: absolute;
    bottom: 0; /* Ensure it stays within the bounds of the container */
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

const OverlayText = styled.div`
    position: absolute;
    bottom: ${theme.padding.gutter}; /* Positioned at the bottom-left */
    width: 75%;  /* Default width */
    padding: ${theme.padding.gutter} ${theme.padding.gutter};
    text-align: left; /* Default alignment to the left */
    box-sizing: border-box;

    /* For tablet and mobile, ensure no overflow and proper alignment */
    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;  /* Allow it to take up more width on smaller screens */
        text-align: center; /* Align text to the center */
    }
`;

const FixedImage = styled.div`
    position: absolute;  /* Position relative inside the container */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;        /* Make sure the image fills the available space */
    z-index: 0;          /* Ensure it's at the very bottom (behind other content) */
    overflow: hidden;    /* Hide any part of the image that overflows */
`;

function Home() {
    return (
        <Layout>
            <OverlayContainer>
                <FixedImage>
                    <Image
                        src="/images/agile-methodology-machine-learning.png" // Replace with your logo path
                        alt="hero_background"
                        layout="fill" // This makes the image stretch to fill the container
                        objectFit="cover" // This ensures the image covers the entire container
                    />
                </FixedImage>

                <Overlay />
                <OverlayTextContainer>
                    <OverlayText>
                        <Hero1Text fontFamily={theme.fonts.hero} color="white">
                            Your Vision, <span style={{ color: theme.colors.secondary }}>Our Expertise</span>
                        </Hero1Text>
                        <Hero2Text fontFamily={theme.fonts.hero} color="white">
                            Flexible Web and Mobile Solutions for Growing Businesses
                        </Hero2Text>
                    </OverlayText>
                </OverlayTextContainer>
            </OverlayContainer>
        </Layout>
    );
}

export default Home;