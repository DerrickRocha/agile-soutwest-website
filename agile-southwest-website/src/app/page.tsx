"use client";

import Layout from "@/app/components/layout";
import React from "react";
import {theme} from "@/app/constants/theme";
import  {Body, H1} from "@/app/components/text";
import styled from "styled-components";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import PageWrapper from "@/app/components/pageWrapper";

function Home() {
    return (
        <Layout>
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

const HomeServicesDiv = styled.div`
    width: 100%;
`;

const HomeServicesCardsDiv = styled.div`
    width: 100%;
    display: flex; 
    align-items: center; 
    gap: ${theme.padding.cardSpacing};
    overflow-x: auto;
   
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
    
   
`;

const AboutSectionImageDiv = styled.div`
    width: 100%;
    //background-image: url('/images/optimized_home_about_section_image.webp');
    background-repeat: no-repeat; 
    border-radius: 8px;
   
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