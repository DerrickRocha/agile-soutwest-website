"use client";

import Layout from "@/app/components/layout";
import React from "react";
import {theme} from "@/app/constants/theme";
import Hero1Text, {Body, H1, Hero2Text} from "@/app/components/text";
import styled from "styled-components";
import Card from "@/app/components/card";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import PageWrapper from "@/app/components/pageWrapper";

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
        width: 100%;  
        top: 30%;

    }
    @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100%;  
        top: 20%;
        text-align: center; 
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        top: ${theme.padding.verticalDivSpacingLarge};
        width: 100%;  
    }
`;

const FixedImage = styled.div`
    position: absolute;
    width: 100%;
    height: 920px;
    background-image: url('/images/agile-methodology-machine-learning.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    z-index: 0;
`;

function Home() {
    return (
        <Layout>
            <HomeHeroSection/>
            <PageWrapper>
                <HomeServicesSection/>
                <VerticalSpacingLarge/>
                <HomeAboutSection/>
                <VerticalSpacingLarge/>
                <HomeImagesSection/>
            </PageWrapper>

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
`;

const HomeServicesCardsDiv = styled.div`
    width: 100%;
    display: flex; 
    align-items: center; 
    gap: ${theme.padding.cardSpacing};
    overflow-x: auto;
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        display: grid; 
        grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        gap: ${theme.padding.verticalDivSpacingSmall};
    }
`;

function HomeServicesSection() {
    return (
        <HomeServicesDiv>
            <H1 color={theme.colors.primary} textAlign={'center'}>
                Comprehensive Services to Drive Your Success
            </H1>

            <VerticalSpacingSmall/>
            <Body color={theme.colors.gray}>
                Explore our professional services, including custom website development, native mobile app development
                for Android & iOS, and expert PC,Mac, and electronics repair. We provide tailored solutions to help your
                business grow, improve customer engagement, and ensure reliable device performance solutions.
            </Body>

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
const AboutSectionDiv = styled.div`
    display: flex;
    gap: ${theme.padding.verticalDivSpacingSmall};
    min-height: 600px;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: ${theme.padding.verticalDivSpacingSmall};
        text-align: center; 
    }
`;

const AboutSectionImageDiv = styled.div`
    width: 100%;
    background-image: url('/images/home_about_section_image.png');
    background-repeat: no-repeat; 
    border-radius: 8px;
    @media (max-width: ${theme.breakpoints.tablet}) {
        height: 400px;
    }
`;

const AboutSectionTextDiv = styled.div`
    width: 100%;
    padding: 0 ${theme.padding.cardBodyPadding};
    @media (max-width: ${theme.breakpoints.tablet}) {
    }
`;

function HomeAboutSection() {
    return (
        <AboutSectionDiv>
            <AboutSectionImageDiv/>
            <AboutSectionTextDiv>
                <VerticalSpacingSmall/>
                <H1 textAlign={'center'}>
                    Delivering Custom Solutions For Small Business Growth
                </H1>

                <VerticalSpacingSmall/>
                <Body>
                    At Agile Southwest, we are dedicated to helping small businesses thrive in
                    the digital age by providing customized web development, native mobile app
                    development, and electronics repair services. With years of experience serving
                    businesses across the Southwest, we specialize in building responsive websites,
                    SEO-optimized solutions, and user-friendly mobile apps tailored to your unique
                    needs. Our team of experts is committed to delivering high-quality services that
                    drive results, increase customer engagement, and enhance your overall online presence.
                    Whether you’re looking for a complete website redesign, a robust Android or iOS app, or
                    reliable PC, Mac, and electronics repairs, we’re here to turn your vision into reality.
                    In addition to software solutions, we also provide professional soldering services for
                    electronics, including power terminals and various components. Whether you're dealing with
                    damaged power connections, broken terminals, or other small electronic repairs, our experienced
                    team is equipped to help.
                    We pride ourselves on offering personalized, cost-effective solutions that support your
                    business goals. At Agile Southwest, our mission is to combine cutting-edge technology
                    with a deep understanding of our clients' needs to help them achieve lasting success.
                    Let us be your partner in driving digital transformation, optimizing your business
                    operations, and growing your brand.
                </Body>
                <VerticalSpacingSmall/>
            </AboutSectionTextDiv>
        </AboutSectionDiv>
    );
}

const HomeImagesDiv = styled.div`
    display: flex; 
    gap: ${theme.padding.cardSpacing};
    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: ${theme.padding.verticalDivSpacingSmall};
    }
`;


const RoundedImage = styled.img`
    border-radius: ${theme.dimensions.borderRadius};  
    width: 100%; 
`;

function HomeImagesSection() {
    return (
        <HomeImagesDiv>
            <RoundedImage src="/images/neural_network1.jpeg" alt="Neural network image"/>
            <RoundedImage src="/images/web_development.jpg" alt="Web development image"/>
            <RoundedImage src="/images/soldering.jpg" alt="Web development image"/>

        </HomeImagesDiv>
    );
}

export default Home;