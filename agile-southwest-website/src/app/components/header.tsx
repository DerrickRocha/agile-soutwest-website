import Link from "next/link";
import Image from 'next/image';
import styling from "@/app/Header.module.css";
import MobileMenu from "@/app/components/mobileMenu";

export default function Header() {
    return (
        <header className={styling.mainHeader}>
            <nav className={styling.navigation}>
                <div className={styling.logoContainer}>
                    <Link href="/">
                        <Image
                            src="/images/agile_logo.svg"
                            alt="Agile Southwest Logo"
                            width={164}
                            height={80}
                        />
                    </Link>
                </div>
                <ul className={styling.navList}>
                    <li className={styling.navListItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styling.navListItem}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styling.navListItem}>
                       <Link href="/about">About</Link>
                    </li>
                    <li className={styling.navListItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <MobileMenu/>
            </nav>
        </header>
    )
}