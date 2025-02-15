import Layout from "@/app/components/layout";
import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import styling from "@/app/Projects.module.css"
import ProjectCard from "@/app/components/projectCard";

const smilingMoonDescription = [
    "Since 2016, Smiling Moon Farm offers unique, high-quality cannabis seed strains you won’t find anywhere else. Enjoy the best prices and seeds that produce the largest auto-flowering plants available.",
    "I designed and developed the website for Smiling Moon Farm."
]

const myQDescription = [
    "The myQ smart access app allows you to seamlessly open, close and monitor your garage door, commercial door, or gate from ANYWHERE. The app supports myQ-enabled products from leading garage door manufacturers including Chamberlain and LiftMaster. myQ helps you keep your home or business safe and secure.",
    "I developed features and enhancements for the myQ app, focusing on analytics and bug fixes to improve app performance."
]

const fetchDescription = [
    "Fetch Delivery is an application that lets you order anything from anywhere in Santa Fe, NM",
    "I built the android version of the customer and driver applications for Fetch Delivery, enabling users to order food and goods through a user-friendly app."
]


export default function ProjectsPage() {
    return (
        <Layout>
            <h1>Projects</h1>
            <VerticalSpacingLarge/>
            <div className={styling.projectsSection}>
                <ProjectCard title={"Web Development"} projectName={"Smiling Moon Farm"}
                             image={"/images/smiling_moon_farm.webp"}
                             projectDescription={smilingMoonDescription}
                />
                <ProjectCard title={"Android Development"}
                             projectName={"myQ"}
                             image={"/images/myq_screen_shot.webp"}
                             projectDescription={myQDescription}
                />
                <ProjectCard title={"Android Development"} projectName={"Fetch Delivery"}
                             image={"/images/fetch_screen_shot.webp"}
                             projectDescription={fetchDescription}
                />
            </div>
        </Layout>
    )
}