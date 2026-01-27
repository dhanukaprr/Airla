import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.brandColumn}>
                    <h3>Airla</h3>
                    <p className={styles.tagline}>
                        Conscious design for the modern woman.
                        Timeless, artisanal, and made for individuality.
                    </p>
                </div>

                <div className={styles.linksColumn}>
                    <div className={styles.linkGroup}>
                        <h4>Social</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="https://instagram.com/airla_official" target="_blank">Instagram</Link></li>
                            <li><Link href="https://whatsapp.com" target="_blank">WhatsApp</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkGroup}>
                        <h4>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/collections">Collections</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} Airla. All rights reserved.
            </div>
        </footer>
    );
}
