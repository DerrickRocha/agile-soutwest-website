import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface TextProps {
    fontFamily?: string; // Optional prop for font size
    color?: string;    // Optional prop for text color
    children: React.ReactNode; // Children elements
}


const StyledHero1 = styled.h1<TextProps>`
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; /* Default to 3rem if no prop is provided */
    color: ${({color}) => color || 'white'}; /* Default to white if no prop is provided */
    font-size: ${theme.textSize.heroHeading1Large};
`;
const StyledHero2 = styled.h1<TextProps>`
    font-size: ${theme.textSize.heroHeading2Large};
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; /* Default to 3rem if no prop is provided */
    color: ${({color}) => color || 'white'}; /* Default to white if no prop is provided */
`;

const StyleH1 = styled.h1<TextProps>`
    font-size: ${theme.textSize.heading1};
    font-family: ${theme.fonts.arial};
    color: ${({color}) => color || theme.colors.primary}; /* Default to white if no prop is provided */
    font-weight: bold;
`;

const StyleH2 = styled.h2<TextProps>`
    font-size: ${theme.textSize.heading2};
    font-family: ${theme.fonts.arial};
    color: ${({color}) => color || theme.colors.primary}; /* Default to white if no prop is provided */
    font-weight: bold;
`;

const StyleH3 = styled.h3<TextProps>`
    font-size: ${theme.textSize.heading3};
    font-family: ${theme.fonts.arial};
    color: ${({color}) => color || theme.colors.primary}; /* Default to white if no prop is provided */
`;

const StyleBody = styled.text<TextProps>`
    font-size: ${theme.textSize.body};
    font-family: ${theme.fonts.roboto};
    color: ${({color}) => color || theme.colors.gray}; /* Default to white if no prop is provided */
`;

export default function Hero1Text({ fontFamily, color, children }: TextProps) {
    return(
        <StyledHero1 fontFamily={fontFamily} color = {color}>
            {children}
        </StyledHero1>
    );
}

export function Hero2Text({ fontFamily, color, children }: TextProps) {
    return(
        <StyledHero2 fontFamily={fontFamily} color = {color}>
            {children}
        </StyledHero2>
    );
}

export function H1({ color, children }: TextProps) {
    return (
        <StyleH1 color={color}>
            {children}
        </StyleH1>
    );
}

export function H2({ color, children }: TextProps) {
    return (
        <StyleH2 color={color}>
            {children}
        </StyleH2>
    );
}

export function H3({ color, children }: TextProps) {
    return (
        <StyleH3 color={color}>
            {children}
        </StyleH3>
    );
}

export function Body({ color, children }: TextProps) {
    return (
        <StyleBody color={color}>
            {children}
        </StyleBody>
    );
}

