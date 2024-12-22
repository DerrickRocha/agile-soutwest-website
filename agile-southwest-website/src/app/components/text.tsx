import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface TextProps {
    fontFamily?: string; // Optional prop for font size
    color?: string;    // Optional prop for text color
    children: React.ReactNode; // Children elements
}

// Styled component for H1
const StyledH1 = styled.h1<TextProps>`
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; /* Default to 3rem if no prop is provided */
    color: ${({color}) => color || 'white'}; /* Default to white if no prop is provided */
    /* Add bottom margin to create space */
    margin: 0 0 10px;
    font-size: ${theme.textSize.heading2};
    @media (max-width: ${theme.breakpoints.standardDesktop}) {
        font-size: ${theme.textSize.heading1};
    }
    
`;

const StyledH2 = styled.h1<TextProps>`
    font-size: ${theme.textSize.heading2};
    font-family: ${({fontFamily}) => fontFamily || 'Arial, sans-serif'}; /* Default to 3rem if no prop is provided */
    color: ${({color}) => color || 'white'}; /* Default to white if no prop is provided */
    /* Add bottom margin to create space */
    margin: 10px 0 0;
`;


// Functional H1 component using function declaration
export default function H1({ fontFamily, color, children }: TextProps) {
    return (
        <StyledH1 fontFamily={fontFamily} color={color}>
            {children}
        </StyledH1>
    );
}

// Functional H1 component using function declaration
export function H2({ fontFamily, color, children }: TextProps) {
    return (
        <StyledH2 fontFamily={fontFamily} color={color}>
            {children}
        </StyledH2>
    );
}