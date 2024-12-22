
import React, {ReactNode} from "react";
import Header from "@/app/components/header";

interface LayoutProps {
    children: ReactNode;  // The children prop represents the content of the page being rendered
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header/>
            <main>
                {children} {/* This renders the page-specific content */}
            </main>

            <footer>
                <p>&copy; 2024 Agile Southwest. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;