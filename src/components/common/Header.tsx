"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Check initial scroll
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <Link href="/" className={styles.logo}>
                Airla
            </Link>
            <nav className={styles.nav}>
                <Link href="/collections" className={styles.navLink}>Collections</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
                <Link href="/custom-orders" className={styles.navLink}>Custom Orders</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>
        </header>
    );
}
