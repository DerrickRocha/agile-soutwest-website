'use client'
import styling from "@/app/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className={styling.menuIcon} onClick={onClick}>
                <Image
                    src="/images/menu_24dp_E8EAED.svg"
                    alt="Hamburger Menu"
                    width={32}
                    height={32}
                />
            </div>
            {
                isOpen &&
                <ul className={styling.mobileNavList} onClick={onClick}>
                    <li className={styling.navListItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styling.navListItem}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styling.navListItem}>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className={styling.navListItem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styling.navListItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            }
        </>
    );
}