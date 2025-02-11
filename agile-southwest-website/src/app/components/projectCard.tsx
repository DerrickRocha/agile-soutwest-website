import styling from "@/app/Projects.module.css";
import Image from "next/image";

interface ProjectCardProps {
    title: string,
    projectName: string,
    image: string
}

interface OverlaySectionProps {
    title: string,
    projectName: string
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
            <OverlaySection projectName={props.projectName} title={props.title}/>
        </div>
    )
}

function OverlaySection(props: OverlaySectionProps) {
    return (
        <div className={styling.projectCardOverlaySection}>
            <div className={styling.projectCardOverlay}/>
            <div className={styling.projectCardTextSection}>
                <h2 className={styling.projectCardText}>{props.title}</h2>
                <h1 className={styling.projectCardText}>{props.projectName}</h1>
            </div>
        </div>
    );
}