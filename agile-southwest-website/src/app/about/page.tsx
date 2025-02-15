import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import InformationSection from "@/app/components/informationSection";
import LargeImage from "@/app/components/largeImage";
import Layout from "@/app/components/layout";

const aboutSubHeading = "Meet Derrick Rocha: Innovator in Software Engineering and Electronics Repair"
const content = [
    "My name is Derrick Rocha, and I'm a software engineer dedicated to providing custom web development, native mobile app development, and electronics repair services tailored to the unique needs of small businesses and individuals. Based in the Southwest, I bring technical expertise and a commitment to customer satisfaction, helping businesses and individuals navigate today’s digital landscape.",
    "With years of experience delivering responsive websites, user-friendly mobile apps, and reliable device repairs, I focus on offering cost-effective solutions that drive growth and improve efficiency. Whether you need a cutting-edge website to enhance your online presence, a mobile app to engage your audience, or expert repairs for PCs, Macs, and mobile devices, I’m here to support you every step of the way.",
    "I take pride in a hands-on, client-focused approach, ensuring that every project meets the highest standards of quality and performance. Let me be your trusted partner in navigating the ever-changing world of technology, from website design to mobile app development and device repair.",
]

const AboutPage = () => {
    return (
        <Layout>
            <h1>
                About Derrick Rocha
            </h1>
            <VerticalSpacingLarge/>
            <InformationSection title={aboutSubHeading} content={content}/>
            <VerticalSpacingLarge/>
            <LargeImage imageUrl="/images/me_and_isaiah.webp" altText={"Southeast Santa Fe drone picture"} width={1461} height={822}></LargeImage>
        </Layout>
    );
};

export default AboutPage;