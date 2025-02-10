import React, {ReactNode} from "react";
import styling from "@/app/Components.module.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className={styling.layoutContainer}>
            <main className={styling.content}>
                {children}
            </main>
        </div>
    );
};

export default Layout;