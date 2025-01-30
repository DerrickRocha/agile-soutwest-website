"use client";

import Layout from "@/app/components/layout";
import PageWrapper from "@/app/components/pageWrapper";
import {H1} from "@/app/components/text";
import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import InformationSection from "@/app/components/InformationSection";
import LargeImage from "@/app/components/largeImage";

const aboutSubHeading = "Meet Agile Southwest: Innovators in Web Development and Electronics Repair"
const content = [
    "At Agile Southwest, we are dedicated to providing custom web development, native mobile app development, and electronics repair services tailored to the unique needs of small businesses. Based in the Southwest, our team of experienced professionals combines technical expertise with a commitment to customer satisfaction, helping businesses thrive in today’s digital landscape.",
    "With years of experience in delivering responsive websites, user-friendly apps, and reliable device repairs, we focus on offering cost-effective solutions that drive growth and improve operational efficiency. Whether you need a cutting-edge website to enhance your online presence, a mobile app to engage your audience, or expert repairs for your PCs, Macs, and mobile devices, Agile Southwest is here to support your business at every step.",
    "We take pride in our hands-on, client-focused approach, ensuring that every project we deliver meets the highest standards of quality and performance. Let us be your trusted partner in navigating the ever-changing world of technology, from website design to mobile app development and device repair.",
]

const AboutPage = () => {
    return (
        <Layout>
            <PageWrapper>
                <H1 textAlign={'center'}>
                    About Agile Southwest
                </H1>
                <VerticalSpacingLarge/>
                <InformationSection title={aboutSubHeading} content={content}/>
                <VerticalSpacingLarge/>
                <LargeImage imageUrl="/images/southeast_santafe_drone.png"></LargeImage>
            </PageWrapper>
        </Layout>
    );
};

export default AboutPage;