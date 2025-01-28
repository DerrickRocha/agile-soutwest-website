import {Body, H2} from "@/app/components/text";
import {theme} from "@/app/constants/theme";
import styled from "styled-components";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";

interface CardProps {
    image: string,
    body: string,
    heading: string
}

const CardDiv = styled.div`
    width: 100%;
    height: auto;
    min-height: ${theme.dimensions.cardHeight};
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

const RoundedImage = styled.img`
    border-radius: ${theme.dimensions.borderRadius};  /* Rounds the corners */
    width: 100%; 
`;

export default function Card({image, body, heading}: CardProps) {
    return (
        <CardDiv>
            <RoundedImage
                src={image} alt='Card image'>

            </RoundedImage>
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
            <VerticalSpacingSmall/>
        </CardDiv>
    );
}