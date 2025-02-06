"use client";

import Layout from "@/app/components/layout";
import React from "react";
import {theme} from "@/app/constants/theme";
import Hero1Text, {Body, H1, Hero2Text} from "@/app/components/text";
import styled from "styled-components";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import PageWrapper from "@/app/components/pageWrapper";

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
    //background-image: url('/images/optimized_agile-methodology-machine-learning.webp');
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

const HomeServicesDiv = styled.div`
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
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

function HomeServicesSection() {
    return (
        <HomeServicesDiv>
            <H1 color={theme.colors.primary} $textAlign={'center'}>
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
    //background-image: url('/images/optimized_home_about_section_image.webp');
    background-repeat: no-repeat; 
    border-radius: 8px;
    @media (max-width: ${theme.breakpoints.tablet}) {
        height: 400px;
    }
`;

const AboutSectionTextDiv = styled.div`
    width: 100%;
    padding: 0 ${theme.padding.cardBodyPadding};
`;

function HomeAboutSection() {
    return (
        <AboutSectionDiv>
            <AboutSectionImageDiv/>
            <AboutSectionTextDiv>
                <VerticalSpacingSmall/>
                <H1 $textAlign={'center'}>
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
                    electronics, including power terminals and various components. Whether you&#39;re dealing with
                    damaged power connections, broken terminals, or other small electronic repairs, our experienced
                    team is equipped to help.
                    We pride ourselves on offering personalized, cost-effective solutions that support your
                    business goals. At Agile Southwest, our mission is to combine cutting-edge technology
                    with a deep understanding of our clients&#39; needs to help them achieve lasting success.
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
`;

const RoundedImage = styled.img`
    border-radius: ${theme.dimensions.borderRadius};  
    width: 100%; 
`;

function HomeImagesSection() {
    return (
        <HomeImagesDiv>
            <RoundedImage src="/images/1optimized_neural_network1.webp" alt="Neural network image"/>
            <RoundedImage src="/images/1web_development.webp" alt="Web development image"/>
            <RoundedImage src="/images/1soldering.webp" alt="Web development image"/>

        </HomeImagesDiv>
    );
}

export default Home;