import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './orders.module.css';

export const metadata: Metadata = {
    title: 'Custom Orders | Airla',
    description: 'Experience the luxury of custom-designed clothing.',
};

export default function CustomOrders() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>The Process</h1>
                <p className={styles.subtitle}>
                    From imagination to reality. Creating a custom piece is a collaborative journey
                    resulting in a garment that is uniquely yours.
                </p>
            </div>

            <div className={styles.steps}>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>01</span>
                    <h3 className={styles.stepTitle}>Inquiry</h3>
                    <p className={styles.stepDesc}>
                        Share your vision with us. Whether it&#39;s a modification of an existing design
                        or something completely new, it starts with a conversation.
                    </p>
                </div>

                <div className={styles.step}>
                    <span className={styles.stepNumber}>02</span>
                    <h3 className={styles.stepTitle}>Consultation</h3>
                    <p className={styles.stepDesc}>
                        We discuss fabrics, measurements, and design details. We ensure every
                        aspect aligns with your personal style and needs.
                    </p>
                </div>

                <div className={styles.step}>
                    <span className={styles.stepNumber}>03</span>
                    <h3 className={styles.stepTitle}>Creation</h3>
                    <p className={styles.stepDesc}>
                        Our artisans bring the design to life. This process takes time,
                        typically 3-4 weeks, as we focus on precision and quality.
                    </p>
                </div>

                <div className={styles.step}>
                    <span className={styles.stepNumber}>04</span>
                    <h3 className={styles.stepTitle}>Delivery</h3>
                    <p className={styles.stepDesc}>
                        Your personal piece is completed and delivered. A garment made
                        exclusively for you, to be cherished for years.
                    </p>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <h2 className={styles.ctaText}>Ready to start your journey?</h2>
                <Link href="/contact" className={styles.ctaButton}>
                    Begin Consultation
                </Link>
            </div>
        </div>
    );
}
