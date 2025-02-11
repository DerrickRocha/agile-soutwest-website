import Layout from "@/app/components/layout";
import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import styling from "@/app/Projects.module.css"
import ProjectCard from "@/app/components/projectCard";

export default function ProjectsPage() {
    return (
        <Layout>
            <h1>Projects</h1>
            <VerticalSpacingLarge/>
            <div className={styling.projectsSection}>
                <ProjectCard title={"Web Development"} projectName={"Smiling Moon Farm"}
                             image={"/images/smiling_moon_farm.webp"}/>
                <ProjectCard title={"Android Development"} projectName={"myQ"}
                             image={"/images/myq_screen_shot.webp"}/>
                <ProjectCard title={"Android Development"} projectName={"Fetch Delivery"}
                             image={"/images/fetch_screen_shot.webp"}/>
            </div>
        </Layout>
    )
}