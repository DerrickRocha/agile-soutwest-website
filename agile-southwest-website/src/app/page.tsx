import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import React from "react";
import Layout from "@/app/components/layout";

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
    return <>
        Greetings Lad
    </>
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