import React from "react";
import Link from "next/link";
import Image from "next/image";
import styling from "@/app/Footer.module.css"

export default function Footer() {
    return <footer className={styling.mainFooter}>
        <Link href="/">
            <Image
                src="/images/agile_logo.svg"
                alt="Agile Southwest Logo"
                width={164}
                height={80}
            />
        </Link>
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