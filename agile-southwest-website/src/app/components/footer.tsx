import React from "react";
import styling from "@/app/Footer.module.css"

export default function Footer() {
    return <footer className={styling.mainFooter}>

        <div className={styling.copyrightContainer}>
            <text className={styling.footerText}>
                &copy;2025 Agile Southwest. All rights reserved.
            </text>
        </div>
        <div className={styling.contactContainer}>
            <text className={styling.footerText}>
                Agile Southwest LLC
            </text>
            <text className={styling.footerText}>
                (505) 310-0331
            </text>
            <text className={styling.footerText}>
                drocha616@gmail.com
            </text>
        </div>
    </footer>
}