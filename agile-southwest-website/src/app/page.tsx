import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import React from "react";
import Layout from "@/app/components/layout";
import styling from "@/app/Home.module.css"
import {theme} from "@/app/constants/theme";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <VerticalSpacingLarge/>
            <Layout>
                <ServicesSection/>
                <HomeAboutSection/>
                <VerticalSpacingLarge/>
                <HomeImagesSection/>
            </Layout>
        </>
    )
}

function HeroSection() {
    return (
        <div className={styling.heroContainer}>
            <div className={styling.fixedImage}/>
            <div className={styling.overlay}/>
            <div className={styling.overlayTextContainer}>
                <h1 className={styling.heroHeading}>
                    Your Vision, <span style={{color: theme.colors.secondary}}>Our Expertise</span>
                </h1>
                <h1 className={styling.heroSubHeading}>
                    Flexible Web and Mobile Solutions for Growing Businesses
                </h1>
            </div>
        </div>
    )

}

function ServicesSection() {
    return <>
        This is the Services Section lad.
    </>
}

function HomeAboutSection() {
    return <>

    </>;
}

function HomeImagesSection() {
    return <>
    </>;
}