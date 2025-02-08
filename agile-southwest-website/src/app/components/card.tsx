import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import styling from "@/app/Home.module.css"
import Image from "next/image";

interface CardProps {
    image: string,
    body: string,
    heading: string
}

export default function Card({image, body, heading}: CardProps) {
    return (
        <div className={styling.cardDiv}>
            <Image className={styling.cardImage}
                   src={image}
                   alt={heading}
                   width={371}
                   height={271}
            />
            <div className={styling.cardBodyDiv}>
                <h2>
                    {heading}
                </h2>
                <VerticalSpacingSmall/>
                <text>
                    {body}
                </text>
            </div>
            <VerticalSpacingSmall/>
        </div>
    );
}