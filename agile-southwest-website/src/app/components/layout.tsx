
import React, {ReactNode} from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface LayoutProps {
    children: ReactNode;  // The children prop represents the content of the page being rendered
}

const LayoutContainer = styled.div`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
const Main = styled.div`
    flex: 1;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutContainer>
            <Header/>
            <Main>
                {children} {/* This renders the page-specific content */}
            </Main>

            <Footer/>
        </LayoutContainer>
    );
};

export default Layout;