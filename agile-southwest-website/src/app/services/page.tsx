"use client";

import Layout from "@/app/components/layout";
import {H1} from "@/app/components/text";
import PageWrapper from "@/app/components/pageWrapper";
import InformationSection from "@/app/components/InformationSection";
import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";

const webSectionContent = [
    "At Agile Southwest, we specialize in custom website development designed to meet" +
    " the unique needs of small businesses. Our expert team creates responsive, SEO-friendly" +
    " websites that not only look stunning but are also optimized for speed, user experience," +
    " and search engine rankings. Whether you’re launching a new business or looking to upgrade" +
    " an existing site, we offer end-to-end website solutions, from web design to development," +
    " ensuring your site aligns with your business goals.",
    "We understand that every business is different, which is why our approach to website development" +
    " is entirely custom. We work closely with you to develop a website that reflects your brand, engages" +
    " your audience, and drives measurable results. Our websites are designed with mobile-first principles," +
    " ensuring a seamless experience across all devices—whether your customers are browsing from a desktop" +
    ", tablet, or smartphone.",
    "Our custom-built websites are not only aesthetically pleasing but also designed to perform. We integrate SEO " +
    "best practices into every site, ensuring that your business ranks higher on search engines and attracts more " +
    "organic traffic. Additionally, we provide ongoing support and maintenance, ensuring that your site remains up-to-date " +
    "with the latest technology and security standards.",
    "From e-commerce platforms to business websites, we can develop a solution that suits your specific needs. Let us help you" +
    " create a powerful online presence that helps your business grow and succeed in the digital landscape."
];

const mobileServicesContent = [
    "At Agile Southwest, we offer expert custom native mobile app development for both Android and iOS platforms, designed to meet the specific needs of small businesses. Our team specializes in creating high-performance, user-friendly, and feature-rich mobile apps that enhance customer engagement and drive business growth. Whether you’re looking to build a brand-new app or upgrade an existing one, we provide end-to-end mobile app development services tailored to your business goals.",
    "Our native app development process ensures that your app is built to take full advantage of the operating system’s capabilities, delivering superior performance, speed, and seamless user experiences. With a focus on intuitive UI/UX design, we create apps that are not only visually appealing but also easy to navigate, keeping users engaged and driving conversions.",
    "We prioritize scalability and security in every mobile app we develop, ensuring that your app can grow with your business while protecting sensitive data. Our apps are optimized for app store visibility and searchability, helping your business stand out in both the Google Play Store and Apple App Store.",
    "From initial concept to launch and ongoing maintenance, we provide a full range of custom native app development services, including app strategy, design, development, testing, and support. Let us help you create a powerful mobile app that delivers results and enhances your digital presence.",
];

const hardWareServicesContent = [
    "At Agile Southwest, we provide fast and reliable repair services for a wide range of devices, including PCs, Macs, mobile devices, and electronics. Our team of certified technicians specializes in diagnosing and fixing hardware and software issues for all major brands, ensuring that your devices run smoothly and efficiently. Whether you’re dealing with a cracked screen, battery issues, or system malfunctions, we offer expert solutions to get your devices back in optimal condition.",
    "We understand how important your devices are for both personal and business use, which is why we prioritize quick turnaround times and affordable pricing without compromising on quality. From PC and Mac repairs to smartphone screen replacements and electronics troubleshooting, we provide comprehensive services to keep your devices functioning at their best.",
    "Our services are designed to extend the lifespan of your electronics, saving you from costly replacements. With a commitment to excellent customer service and industry-leading repair techniques, Agile Southwest is your trusted partner for all your device repair needs.",

]

const ServicesPage = () => {

    return (
        <Layout>
            <PageWrapper>
                <H1 textAlign={'center'}>
                    Custom Web Development, Mobile App Development, and Repair Services
                </H1>
                <VerticalSpacingLarge/>
                <InformationSection
                    title='Custom Website Development: Tailored Solutions for Small Business Success'
                    content={webSectionContent}/>
                <VerticalSpacingLarge/>
                <InformationSection title="Native Mobile App Development Services for Android & iOS Platforms" content={mobileServicesContent}/>
                <VerticalSpacingLarge/>
                <InformationSection title="Comprehensive PC, Mac, and Electronics Repair Solutions" content={hardWareServicesContent}/>
            </PageWrapper>

        </Layout>
    );
};

export default ServicesPage;