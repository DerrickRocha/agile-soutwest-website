import Layout from "@/app/components/layout";
import VerticalSpacingLarge from "@/app/components/verticalSpacingLarge";
import styling from "@/app/Projects.module.css"
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <Layout>
            <h1>Projects</h1>
            <VerticalSpacingLarge/>
            <div className={styling.projectsSection}>
                <Image className={styling.projectImage}
                       src={"/images/smiling_moon_farm.png"}
                       alt={"Smiling Moon Farm"}
                       width={500}
                       height={500}
                       priority={true}
                />
                <Image className={styling.projectImage}
                       src={"/images/myq_screen_shot.png"}
                       alt={"Smiling Moon Farm"}
                       width={500}
                       height={500}
                       priority={true}
                />
                <Image className={styling.projectImage}
                       src={"/images/fetch_screen_shot.jpg"}
                       alt={"Smiling Moon Farm"}
                       width={500}
                       height={500}
                       priority={true}
                />
            </div>
        </Layout>
    )
}