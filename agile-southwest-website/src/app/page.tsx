"use client";

import Layout from "@/app/components/layout";
import React from "react";
import {theme} from "@/app/constants/theme";
import Hero1Text, {Body, H1, Hero2Text} from "@/app/components/text";
import styled from "styled-components";
import Card from "@/app/components/card";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";

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
        top: ${theme.padding.verticalDivSpacingLarge};
        width: 100%;  /* Allow it to take up more width on smaller screens */
    }
`;

const FixedImage = styled.div`
    position: absolute;
    width: 100%;
    height: 920px;
    background-image: url('/images/agile-methodology-machine-learning.png');
    background-size: cover; /* Ensures the image covers the entire div */
    background-position: center; /* Centers the image within the div */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    z-index: 0;
`;

function HomeAboutSection() {
    return null;
}

function HomeImagesSection() {
    return null;
}

function Home() {
    return (
        <Layout>
            <HomeHeroSection/>
            <VerticalSpacingSmall/>
            <HomeServicesSection/>
            <VerticalSpacingSmall/>
            <HomeAboutSection/>
            <HomeImagesSection/>
        </Layout>
    );
}

function HomeHeroSection() {
    return (
        <HeroContainer>
            <FixedImage/>
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

const HomeServicesDiv = styled.div`
    position: relative;
    width: 100%;
    padding: 0 ${theme.padding.gutter};
`;

const HomeServicesCardsDiv = styled.div`
    display: flex;                /* Enable Flexbox */
    justify-content: space-between;  /* Align items in a row (default behavior) */
    align-items: center;          /* Vertically center items within the parent */
    gap: ${theme.padding.cardSpacing};
    overflow-x: auto;         /* Enables horizontal scrolling */
    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;         
        align-items: center;
        gap: ${theme.padding.verticalDivSpacingSmall};
    }
`;
const H1Style = styled.div`
    text-align: center;
`;
const ImagesBodyStyle = styled.div`
    width: auto;
`;

function HomeServicesSection() {
    return (
        <HomeServicesDiv>
            <H1Style>
                <H1 color={theme.colors.primary}>
                    Services to Drive Your Success
                </H1>
            </H1Style>

            <VerticalSpacingSmall/>
            <ImagesBodyStyle>
                <Body color={theme.colors.gray}>
                    Explore our professional services, including custom website development, native mobile app development
                    for Android & iOS, and expert PC,Mac, and electronics repair. We provide tailored solutions to help your
                    business grow, improve customer engagement, and ensure reliable device performance solutions.
                </Body>
            </ImagesBodyStyle>

            <VerticalSpacingSmall/>
            <HomeServicesCardsDiv>
                <Card
                    image='/images/website_development.png'
                    heading='Web Development'
                    body='Custom website development to help small businesses grow with responsive SEO-friendly designs that drive results.'>
                </Card>
                <Card
                    image='/images/native_android_and_ios_development.png'
                    heading='Native Android & iOS Development'
                    body='Native Android & iOS app development for small businesses, delivering fast, user-friendly apps that enhance customer engagement and drive growth.'>
                </Card>
                <Card
                    image='/images/mobile_device_screen_repair.png'
                    heading='Mobile Device Screen Replacement'
                    body='Professional mobile device screen replacement services, offfering fast, reliable repairs for cracked or damaged screens on all major brands.'>
                </Card>
                <Card
                    image='/images/pc_mac_and_electronics_repair.png'
                    heading='PC, Mac, and Electronics Repair'
                    body='Expert PC, Mac, and electronics repair services, providing fast, reliable solutions for hardware, software, and device issues on all major brands.'>
                </Card>
            </HomeServicesCardsDiv>
        </HomeServicesDiv>
    );
}

export default Home;