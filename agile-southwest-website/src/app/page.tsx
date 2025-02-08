import VerticalSpacingLarge from "@/app/components/VerticalSpacingLarge";
import Layout from "@/app/components/layout";
import styling from "@/app/Home.module.css"
import {theme} from "@/app/constants/theme";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import Card from "@/app/components/card";

export default function Home() {
    return (
        <>
            <HeroSection/>
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
    return (
        <>
            <h1>
                Comprehensive Services to Drive Your Success
            </h1>
            <VerticalSpacingSmall/>
            <text>
                Explore our professional services, including custom website development, native mobile app development
                for Android & iOS, and expert PC,Mac, and electronics repair. We provide tailored solutions to help your
                business grow, improve customer engagement, and ensure reliable device performance solutions.
            </text>
            <VerticalSpacingSmall/>
            <ServiceCards/>
        </>
    )
}

function ServiceCards() {
    return (
        <div className={styling.homeServiceCards}>
            <Card
                image='/images/website_development.webp'
                heading='Web Development'
                body='Custom website development to help small businesses grow with responsive SEO-friendly designs that drive results.'>
            </Card>
            <Card
                image='/images/native_android_and_ios_development.webp'
                heading='Native Android & iOS Development'
                body='Native Android & iOS app development for small businesses, delivering fast, user-friendly apps that enhance customer engagement and drive growth.'>
            </Card>
            <Card
                image='/images/mobile_device_screen_repair.webp'
                heading='Mobile Device Screen Replacement'
                body='Professional mobile device screen replacement services, offfering fast, reliable repairs for cracked or damaged screens on all major brands.'>
            </Card>
            <Card
                image='/images/pc_mac_and_electronics_repair.webp'
                heading='PC, Mac, and Electronics Repair'
                body='Expert PC, Mac, and electronics repair services, providing fast, reliable solutions for hardware, software, and device issues on all major brands.'>
            </Card>
        </div>
    );
}

function HomeAboutSection() {
    return (<></>);
}

function HomeImagesSection() {
    return (<></>);
}