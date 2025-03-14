import InformationSection from "@/app/components/informationSection";
import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import LargeImage from "@/app/components/largeImage";
import Layout from "@/app/components/layout";

const webSectionContent = [
    "I specialize in custom website development designed to meet the unique needs of small businesses. I create responsive, SEO-friendly websites that not only look stunning but are also optimized for speed, user experience, and search engine rankings. Whether you're launching a new business or looking to upgrade an existing site, I offer end-to-end website solutions, from web design to development, ensuring your site aligns with your business goals.",
    "I understand that every business is different, which is why my approach to website development is entirely custom. I work closely with you to develop a website that reflects your brand, engages your audience, and drives measurable results. My websites are designed with mobile-first principles, ensuring a seamless experience across all devices—whether your customers are browsing from a desktop, tablet, or smartphone.",
    "My custom-built websites are not only aesthetically pleasing but also designed to perform. I integrate SEO best practices into every site, ensuring that your business ranks higher on search engines and attracts more organic traffic. Additionally, I provide ongoing support and maintenance, keeping your site up-to-date with the latest technology and security standards.",
    "From e-commerce platforms to business websites, I can develop a solution tailored to your specific needs. Let me help you create a powerful online presence that helps your business grow and succeed in the digital landscape."
];

const mobileServicesContent = [
    "I offer expert custom native mobile app development for both Android and iOS platforms, designed to meet the specific needs of small businesses. I specialize in creating high-performance, user-friendly, and feature-rich mobile apps that enhance customer engagement and drive business growth. Whether you're looking to build a brand-new app or upgrade an existing one, I provide end-to-end mobile app development services tailored to your business goals.",
    "My native app development process ensures that your app is built to take full advantage of the operating system’s capabilities, delivering superior performance, speed, and seamless user experiences. With a focus on intuitive UI/UX design, I create apps that are not only visually appealing but also easy to navigate, keeping users engaged and driving conversions.",
    "I prioritize scalability and security in every mobile app I develop, ensuring that your app can grow with your business while protecting sensitive data. My apps are optimized for app store visibility and searchability, helping your business stand out in both the Google Play Store and Apple App Store.",
    "From initial concept to launch and ongoing maintenance, I provide a full range of custom native app development services, including app strategy, design, development, testing, and support. Let me help you create a powerful mobile app that delivers results and enhances your digital presence.",
];

const hardWareServicesContent = [
    "I provide fast and reliable repair services for a wide range of devices, including PCs, Macs, mobile devices, and electronics. I specialize in diagnosing and fixing hardware and software issues for all major brands, ensuring that your devices run smoothly and efficiently. Whether you're dealing with a cracked screen, battery issues, or system malfunctions, I offer expert solutions to get your devices back in optimal condition.",
    "I understand how important your devices are for both personal and business use, which is why I prioritize quick turnaround times and affordable pricing without compromising on quality. From PC and Mac repairs to smartphone screen replacements and electronics troubleshooting, I provide comprehensive services to keep your devices functioning at their best.",
    "My services are designed to extend the lifespan of your electronics, saving you from costly replacements. With a commitment to excellent customer service and industry-leading repair techniques, I’m your trusted partner for all your device repair needs.",

]

const ServicesPage = () => {

    return (
        <Layout>
            <h1>
                Custom Web Development, Mobile App Development, and Repair Services
            </h1>
            <VerticalSpacingLarge/>
            <InformationSection
                title='Custom Website Development: Tailored Solutions for Small Business Success'
                content={webSectionContent}/>
            <VerticalSpacingLarge/>
            <InformationSection title="Native Mobile App Development Services for Android & iOS Platforms" content={mobileServicesContent}/>
            <VerticalSpacingLarge/>
            <InformationSection title="Comprehensive PC, Mac, and Electronics Repair Solutions" content={hardWareServicesContent}/>
            <VerticalSpacingLarge/>
            <LargeImage imageUrl="/images/ragle_diamond.webp" altText={"Ragle Park drone picture"} width={1920} height={1080}></LargeImage>

        </Layout>
    );
};

export default ServicesPage;