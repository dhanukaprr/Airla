import type { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'Philosophy | Airla',
    description: 'Our philosophy of slow luxury and conscious design.',
};

export default function About() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>The Philosophy</h1>
            </section>

            <section className={styles.content}>
                <div className={styles.textBlock}>
                    <h2>Slow Luxury</h2>
                    <p>
                        Airla was born from a desire to slow down. To move away from the noise of mass production
                        and return to the intimacy of creation. We believe that clothing should not just cover the body,
                        but honor the individual spirit.
                    </p>
                </div>

                <div className={styles.imageBlock}>
                    Atelier / Process
                </div>

                <div className={styles.textBlock}>
                    <h2>Craftsmanship</h2>
                    <p>
                        Each piece is designed with intention, created in limited quantities or as a one-off.
                        We focus on natural fabrics, fluid silhouettes, and details that speak of the human hand.
                        No two pieces are exactly the same.
                    </p>
                </div>
            </section>
        </div>
    );
}
