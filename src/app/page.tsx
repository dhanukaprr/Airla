import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Airla</h1>
          <p className={styles.subtitle}>
            Elevating Individuality through Conscious Design
          </p>
          <Link href="/collections" className={styles.ctaButton}>
            Explore the Collection
          </Link>

          <div className={styles.highlights}>
            <span className={styles.highlightItem}>Custom Designed</span>
            <span className={styles.highlightItem}>Limited Pieces</span>
            <span className={styles.highlightItem}>Make it Yours</span>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <h2 className={styles.introText}>
          &quot;We do not believe in mass production. Each Airla piece is a dialogue between craftsmanship and the woman who wears it.&quot;
        </h2>
        <p className={styles.introDesc}>
          Airla envisions fashion that feels personal, distinctive, and timeless.
          Thoughtfully designed for women who value individuality over trends.
        </p>
      </section>
    </>
  );
}
