
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
`;
const Main = styled.div`
   
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutContainer>
            <Header/>
            <Main>
                {children}
            </Main>

            <Footer/>
        </LayoutContainer>
    );
};

export default Layout;