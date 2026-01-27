import Link from 'next/link';
import Image from 'next/image';
import styles from './collections.module.css';

const products = [
    { id: 'yellow-halter', name: 'Saffron Halter Mini', category: 'Dresses', image: '/images/collections/yellow-halter-dress.png' },
    { id: 'black-floral', name: 'Midnight Floral Halter', category: 'Dresses', image: '/images/collections/black-floral-dress.png' },
    { id: 'pink-mini', name: 'Blush Open-Back Mini', category: 'Dresses', image: '/images/collections/pink-mini-dress.jpg' },
    { id: 'red-maxi', name: 'Crimson Tiered Maxi', category: 'Dresses', image: '/images/collections/red-maxi-dress.png' },
    { id: 'yellow-outdoor', name: 'Saffron Halter (Outdoor)', category: 'Editorial', image: '/images/hero/yellow-dress-hero.jpg' },
];

export default function Collections() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>The Collection</h1>
                <p className={styles.subtitle}>Curated pieces for the modern wardrobe.</p>
            </div>

            <div className={styles.grid}>
                {products.map((product) => (
                    <Link href={`/collections/${product.id}`} key={product.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className={styles.productImage}
                                unoptimized // Bypass domain config for demo
                            />
                        </div>
                        <div className={styles.productInfo}>
                            <h2 className={styles.productName}>{product.name}</h2>
                            <p className={styles.productCategory}>{product.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
