import React from "react";
import styled from "styled-components";
import {Body, H2} from "@/app/components/text";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";

interface InformationSectionProps {
    title: string
    content: string[]
}

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const InformationSection: React.FC<InformationSectionProps> = ({title, content}: {
    title: string,
    content: string[]
}) => {
    return (
        <Container>
            <H2 $textAlign={'center'}>
                {title}
            </H2>
            <VerticalSpacingSmall/>
            <Body>
                {Array.isArray(content)
                    ? content.map((paragraph, index) =>
                        <p key={index}>
                            {paragraph}
                            {index !== content.length - 1 && <><br /><br /></>}
                        </p>)
                    : <p>{content}</p>
                }
            </Body>
            <VerticalSpacingSmall/>
        </Container>
    )
}

export default InformationSection;