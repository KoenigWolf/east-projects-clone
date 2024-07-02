import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">East Projects</Link>
        </div>
        <nav>
            <ul className={styles.navList}>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
