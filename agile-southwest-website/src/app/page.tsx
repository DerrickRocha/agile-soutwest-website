import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import Layout from "@/app/components/layout";
import styling from "@/app/Home.module.css"
import {theme} from "@/app/constants/theme";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import Card from "@/app/components/card";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <Layout>
                <ServicesSection/>
                <VerticalSpacingLarge/>
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
            <Image
                className={styling.fixedImage}
                src={"/images/agile-methodology-machine-learning.webp"}
                alt={"Machine Learning Background"}
                width={800}
                height={920}
                priority={true}
            />
            <div className={styling.overlay}/>
            <div className={styling.overlayTextContainer}>
                <h1 className={styling.heroHeading}>
                    Your Vision, <span style={{color: theme.colors.secondary}}>My Expertise</span>
                </h1>
                <h1 className={styling.heroSubHeading}>
                    Flexible Web and Mobile Solutions for Individuals and Growing Businesses
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
                Explore my professional services, including custom website development, native mobile app development
                for Android & iOS, and expert PC,Mac, and electronics repair. I provide tailored solutions to help your
                business grow, improve customer engagement, and ensure reliable device performance solutions.
            </text>
            <VerticalSpacingLarge/>
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
                body='Professional mobile device screen replacement services, offering fast, reliable repairs for cracked or damaged screens on all major brands.'>
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
    return (
        <div className={styling.aboutSectionDiv}>
            <Image className={styling.aboutImage}
                   width={350}
                   height={350}
                   src={"/images/derrick_gc.webp"}
                   alt={"About Section Image"}
                   priority={true}
            />
            <div className={styling.aboutTextDiv}>
                <h1>Delivering Custom Solutions For Small Business Growth</h1>
                <VerticalSpacingSmall/>
                <text>
                    I am dedicated to helping small businesses thrive in
                    the digital age by providing customized web development, native mobile app
                    development, and electronics repair services. With years of experience serving
                    businesses across the United States, I specialize in building responsive websites,
                    SEO-optimized solutions, and user-friendly mobile apps tailored to your unique
                    needs. I&#39;m committed to delivering high-quality services that
                    drive results, increase customer engagement, and enhance your overall online presence.
                    Whether you’re looking for a complete website redesign, a robust Android or iOS app, or
                    reliable PC, Mac, and electronics repairs, I&#39;m here to turn your vision into reality.
                    In addition to software solutions, I also provide professional soldering services for
                    electronics, including power terminals and various components. Whether you&#39;re dealing with
                    damaged power connections, broken terminals, or other small electronic repairs, I&#39;m equipped to help.
                    I pride myself in offering personalized, cost-effective solutions that support your
                    business goals. My mission is to combine cutting-edge technology
                    with a deep understanding of our clients&#39; needs to help them achieve lasting success.
                    Let me be your partner in driving digital transformation, optimizing your business
                    operations, and growing your brand.
                </text>
            </div>
        </div>

    );
}

function HomeImagesSection() {
    return (
        <div className={styling.homeBottomImagesDiv}>
            <Image
                className={styling.homeBottomImage}
                src="/images/neural_network.webp"
                alt="Neural network image"
                width={490}
                height={450}
                priority={true}
            />
            <Image
                className={styling.homeBottomImage}
                src="/images/website_development.webp"
                alt="Web development image"
                width={450}
                height={490}
                priority={true}
            />
            <Image
                className={styling.homeBottomImage}
                src="/images/soldering.webp"
                alt="Web development image"
                width={450}
                height={490}
                priority={true}
            />
        </div>
    );
}