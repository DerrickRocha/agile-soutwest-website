import { Body, H2 } from "@/app/components/text";
import { theme } from "@/app/constants/theme";
import styled from "styled-components";
import VerticalSpacingSmall from "@/app/components/verticalSpacingSmall";
import Image from "next/image";

interface CardProps {
    image: string;
    body: string;
    heading: string;
}

const CardDiv = styled.div`
    width: 100%;
    height: auto;
    min-height: ${theme.dimensions.cardHeight};
    background-color: ${theme.colors.white};
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: ${theme.breakpoints.tablet}) {
        min-height: ${theme.dimensions.tabletCardHeight};
    }
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        min-height: ${theme.dimensions.smallDesktopCardHeight};
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        min-height: ${theme.dimensions.mobileCardHeight};
    }
`;

const HeaderStyling = styled.div`
    text-align: center;
    padding: 0 ${theme.padding.verticalDivSpacingSmall};
`;

const BodyStyling = styled.div`
    padding: 0 ${theme.padding.verticalDivSpacingSmall};
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    max-height: 250px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    @media (max-width:${theme.breakpoints.mobile} ) {
        max-height: 200px
    }
`;

export default function Card({ image, body, heading }: CardProps) {
    return (
        <CardDiv>
            <StyledImage
                src={image}
                alt="Card image"
                width={500} // Adjust to match your needs
                height={250} // Adjust to match your needs
                layout="responsive" // Ensures responsiveness
            />
            <VerticalSpacingSmall />
            <HeaderStyling>
                <H2 color={theme.colors.primary} $textAlign={"center"}>
                    {heading}
                </H2>
            </HeaderStyling>
            <VerticalSpacingSmall />
            <BodyStyling>
                <Body color={theme.colors.gray}>{body}</Body>
            </BodyStyling>
            <VerticalSpacingSmall />
        </CardDiv>
    );
}