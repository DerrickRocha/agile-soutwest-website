import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import InformationSection from "@/app/components/informationSection";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import ContactForm from "@/app/components/client/contactForm";
import Layout from "@/app/components/layout";

const subHeading = "Reach Out to Agile Southwest for Custom Solutions and Support"
const content = [
    "Have questions or need expert web development, mobile app solutions, or electronics repair services? Agile Southwest is here to help! Whether you’re looking for a custom website, a native Android or iOS app, or fast and reliable device repairs, our team is ready to assist. Contact us today to discuss your project, request a quote, or get expert support. Fill out the form below, call us, or send us a message—we’re here to provide the solutions your business needs to grow.",
]

const ContactPage = () => {

    return (
        <Layout>
            <h1>
                Contact Agile Southwest
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