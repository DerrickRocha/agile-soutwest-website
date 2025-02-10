import React from "react";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import styling from "@/app/Components.module.css";

interface InformationSectionProps {
    title: string
    content: string[]
}

const InformationSection: React.FC<InformationSectionProps> = ({title, content}: {
    title: string,
    content: string[]
}) => {
    return (
        <div className={styling.informationSectionContainer}>
            <h2>
                {title}
            </h2>
            <VerticalSpacingSmall/>
            <text>
                {Array.isArray(content)
                    ? content.map((paragraph, index) =>
                        <p key={index}>
                            {paragraph}
                            {index !== content.length - 1 && <><br/><br/></>}
                        </p>)
                    : <p>{content}</p>
                }
            </text>
        </div>
    )
}

export default InformationSection;