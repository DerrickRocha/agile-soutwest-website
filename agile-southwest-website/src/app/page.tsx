"use client";

import Layout from "@/app/components/layout";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {theme} from "@/app/constants/theme";
import H1, {H2} from "@/app/components/text";

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
    position: absolute; /* Position text absolutely */
    bottom: 270px; /* Set distance from the bottom */
    left: ${theme.padding.gutter}; /* Set distance from the left */
    z-index: 2; /* Ensure text is above the overlay */
    text-align: left; /* Align text to the left */
    width: 60%;
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
                    <H1 fontFamily={theme.fonts.hero} color="white">Your Vision, Our Expertise</H1>
                    <H2>Flexible Web and Mobile Solutions for Growing Businesses</H2>
                </OverlayText>
            </OverlayContainer>
        </Layout>
    );
}

export default Home;
