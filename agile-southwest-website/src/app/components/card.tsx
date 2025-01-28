import {Body, H2} from "@/app/components/text";
import Image from "next/image";
import {theme} from "@/app/constants/theme";
import styled from "styled-components";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";

interface CardProps {
    image: string,
    body: string,
    heading: string
}

const CardDiv = styled.div`
    width: ${theme.dimensions.cardWidth};
    height: ${theme.dimensions.cardHeight};
    background-color: ${theme.colors.white};
    border-bottom-left-radius: 8px; // Rounded bottom-left corner 
    border-bottom-right-radius: 8px; // Rounded bottom-right corner
`;

const HeaderStyling = styled.div`
    text-align: center;
    padding: 0 ${theme.padding.verticalDivSpacingSmall};
`;

const BodyStyling = styled.div`
    padding: 0 ${theme.padding.verticalDivSpacingSmall};
`;

export default function Card({image, body, heading}: CardProps) {
    return (
        <CardDiv>
            <Image
                src={image} alt='Card image'
                width={280}
                height={180}>

            </Image>
            <VerticalSpacingSmall/>
            <HeaderStyling>
                <H2 color={theme.colors.primary}>
                    {heading}
                </H2>
            </HeaderStyling>
            <VerticalSpacingSmall/>
            <BodyStyling>
                <Body color={theme.colors.gray}>
                    {body}
                </Body>
            </BodyStyling>
        </CardDiv>
    );
}