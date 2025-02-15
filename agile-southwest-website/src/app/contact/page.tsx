import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import InformationSection from "@/app/components/informationSection";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import ContactForm from "@/app/components/client/contactForm";
import Layout from "@/app/components/layout";

const subHeading = "Reach Out to Derrick Rocha for Custom Solutions and Support"
const content = [
    "Have questions or need expert web development, mobile app solutions, or electronics repair services? I’m here to help! Whether you're looking for a custom website, a native Android or iOS app, or fast and reliable device repairs, I provide personalized solutions tailored to your needs. Contact me today to discuss your project, request a quote, or get expert support. Fill out the form below, call, or send a message—I’m ready to help your business grow."]

const ContactPage = () => {

    return (
        <Layout>
            <h1>
                Contact Derrick Rocha
            </h1>
            <VerticalSpacingLarge/>
            <InformationSection title={subHeading} content={content}/>
            <VerticalSpacingLarge/>
            <h1>
                505-310-0331
            </h1>
            <VerticalSpacingSmall/>
            <h2>
                drocha616@gmail.com
            </h2>
            <ContactForm/>
        </Layout>
    );
}

export default ContactPage;