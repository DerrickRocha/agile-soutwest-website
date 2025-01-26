"use client";

import Layout from "@/app/components/layout";
import Image from "next/image";
import React from "react";
import {theme} from "@/app/constants/theme";
import Hero1Text, {Hero2Text} from "@/app/components/text";
import styled from "styled-components";

const OverlayContainer = styled.div`
    position: relative; /* Required for absolute positioning of overlay */
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 51, 102, 0.8); /* Black background with 50% opacity */
    z-index: 1; /* Make sure overlay is above the image */
`;

const OverlayText = styled.div`
    position: relative; 
    bottom: 270px; 
    padding: 0px ${theme.padding.gutter};
    z-index: 2; /* Ensure text is above the overlay */
    text-align: left; /* Align text to the left */
    width: 75%;
   
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        width: 100%;
        text-align: center;
    }
    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;
        text-align: center;

    }
`;

function Home() {
    return (
        <Layout>
            <OverlayContainer>
                <Image
                    src="/images/agile-methodology-machine-learning.png" // Replace with your logo path
                    alt="hero_background"
                    width={1920} // Actual width of your image
                    height={920} // Actual height of your image
                    layout="responsive" // Allows it to fill the container while maintaining aspect ratio
                />
                <Overlay />
                <OverlayText>
                    <Hero1Text fontFamily={theme.fonts.hero} color="white">
                        Your Vision, <span style={{ color: theme.colors.secondary }}>Our Expertise</span>
                    </Hero1Text>
                    <Hero2Text fontFamily={theme.fonts.hero} color="white">
                        Flexible Web and Mobile Solutions for Growing Businesses
                    </Hero2Text>
                </OverlayText>
            </OverlayContainer>
        </Layout>
    );
}

export default Home;
