import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface TextProps {
    fontFamily?: string;
    color?: string;
    $textAlign?: string;
    children: React.ReactNode;
}


const StyledHero1 = styled.h1<TextProps>`
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; 
    color: ${({color}) => color || 'white'}; 
    font-size: ${theme.textSize.heroHeading1Large};
`;
const StyledHero2 = styled.h1<TextProps>`
    font-size: ${theme.textSize.heroHeading2Large};
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; 
    color: ${({color}) => color || 'white'}; 
`;

const StyleH1 = styled.h1<TextProps>`
    font-size: ${theme.textSize.heading1};
    font-family: ${theme.fonts.arial};
    text-align: ${({$textAlign}) => $textAlign || 'left'};
    color: ${({color}) => color || theme.colors.primary}; 
    font-weight: bold;
`;

const StyleH2 = styled.h2<TextProps>`
    font-size: ${theme.textSize.heading2};
    font-family: ${theme.fonts.arial};
    text-align: ${({$textAlign}) => $textAlign || 'left'};
    color: ${({color}) => color || theme.colors.primary}; 
    font-weight: bold;
`;

const StyleH3 = styled.h3<TextProps>`
    font-size: ${theme.textSize.heading3};
    font-family: ${theme.fonts.arial};
    color: ${({color}) => color || theme.colors.primary}; 
`;

const StyleBody = styled.text<TextProps>`
    font-size: ${theme.textSize.bodyLarge};
    font-family: ${({fontFamily}) => fontFamily || 'Roboto, sans-serif'};
    color: ${({color}) => color || theme.colors.gray};
    text-align: ${({$textAlign}) => $textAlign || 'left'};
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

export function H1({ color, $textAlign, children }: TextProps) {
    return (
        <StyleH1 color={color} $textAlign={$textAlign}>
            {children}
        </StyleH1>
    );
}

export function H2({ color, $textAlign, children }: TextProps) {
    return (
        <StyleH2 color={color} $textAlign={$textAlign}>
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

export function Body({ color, children, fontFamily, $textAlign}: TextProps) {
    return (
        <StyleBody color={color} fontFamily={fontFamily} $textAlign={$textAlign}>
            {children}
        </StyleBody>
    );
}

