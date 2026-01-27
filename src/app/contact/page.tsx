import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: 'Contact | Airla',
    description: 'Get in touch for custom orders and inquiries.',
};

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.subtitle}>We ARE here to answer your questions.</p>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.formSection}>
                    <form>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input type="text" id="name" className={styles.input} required />

                        <label className={styles.label} htmlFor="email">Email</label>
                        <input type="email" id="email" className={styles.input} required />

                        <label className={styles.label} htmlFor="subject">Subject</label>
                        <input type="text" id="subject" className={styles.input} />

                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea id="message" className={styles.textarea} required></textarea>

                        <button type="submit" className={styles.submitButton}>Send Inquiry</button>
                    </form>
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoTitle}>Connect with Us</h3>
                        <div className={styles.socialLinks}>
                            <Link href="https://instagram.com/airla_official" target="_blank" className={styles.socialLink}>
                                Instagram — @airla_official
                            </Link>
                            <Link href="https://whatsapp.com" target="_blank" className={styles.socialLink}>
                                WhatsApp — Chat with us
                            </Link>
                            <a href="mailto:hello@airla.com" className={styles.socialLink}>
                                Email — hello@airla.com
                            </a>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3 className={styles.infoTitle}>Operating Hours</h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.6 }}>
                            Mon - Fri: 9am - 6pm<br />
                            Sat: 10am - 4pm<br />
                            Sun: Closed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
