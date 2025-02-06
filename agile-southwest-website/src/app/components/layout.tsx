"use client"
import React, {ReactNode} from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import styled from "styled-components";
import {theme} from "@/app/constants/theme";

interface LayoutProps {
    children: ReactNode;
}

const LayoutContainer = styled.div`
    background-color: ${theme.colors.light};
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex-grow: 1; /* Allow the main content to grow and take available space */
`;

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <LayoutContainer>
            <Header/>
            <MainContent>
                {children}
            </MainContent>

            <Footer/>
        </LayoutContainer>
    );
};

export default Layout;