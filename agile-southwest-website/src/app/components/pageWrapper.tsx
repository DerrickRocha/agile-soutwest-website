import styled from "styled-components";
import {theme} from "@/app/constants/theme";
import React, {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

const RootDiv = styled.div`
    padding: ${theme.padding.verticalDivSpacingLarge} ${theme.padding.gutterLarge};
    @media (max-width: ${theme.breakpoints.largeDesktop}) {
        padding: ${theme.padding.verticalDivSpacingLarge} ${theme.padding.gutter};
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: ${theme.padding.verticalDivSpacingLarge} ${theme.padding.mobileGutter};
    }
`;

const PageWrapper: React.FC<LayoutProps> = ({children}) => {
    return (
        <RootDiv>
            {children}
        </RootDiv>
    )

}

export default PageWrapper