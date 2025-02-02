import styled from "styled-components";
import {theme} from "@/app/constants/theme";
import React from "react";

const FooterContainer = styled.header`
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: 0px ${theme.padding.gutter};
    height: ${theme.dimensions.headerHeight};
`;

export default function Footer() {
    return (
        <FooterContainer>
            <p>&copy; 2024 Agile Southwest. All rights reserved.</p>
        </FooterContainer>
    );
}