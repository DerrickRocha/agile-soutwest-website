import styling from "@/app/Projects.module.css";
import Image from "next/image";
import {OverlaySection} from "@/app/components/client/projectOverlaySection";

interface ProjectCardProps {
    title: string,
    projectName: string,
    projectDescription: string[],
    image: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className={styling.projectCard}>
            <Image
                className={styling.projectImage}
                src={props.image}
                alt={props.projectName}
                width={500}
                height={500}
                priority={true}
            />
            <OverlaySection projectName={props.projectName} title={props.title} projectDescription={props.projectDescription}/>
        </div>
    )
}