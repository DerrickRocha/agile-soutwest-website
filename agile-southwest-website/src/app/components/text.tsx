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
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        font-size: ${theme.textSize.heroHeading1Small};
    }
`;
const StyledHero2 = styled.h1<TextProps>`
    font-size: ${theme.textSize.heroHeading2Large};
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; /* Default to 3rem if no prop is provided */
    color: ${({color}) => color || 'white'}; /* Default to white if no prop is provided */
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
        font-size: ${theme.textSize.heroHeading2Small};
    }
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


// Functional H1 component using function declaration
/*export default function H1({ fontFamily, color, children }: TextProps) {
    return (
        <StyledH1 fontFamily={fontFamily} color={color}>
            {children}
        </StyledH1>
    );
}*/

// Functional H1 component using function declaration
/*export function H2({ fontFamily, color, children }: TextProps) {
    return (
        <StyledH2 fontFamily={fontFamily} color={color}>
            {children}
        </StyledH2>
    );
}*/