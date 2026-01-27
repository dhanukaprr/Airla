import Link from 'next/link';
import Image from 'next/image';
import styles from './collections.module.css';

const products = [
    { id: 'silk-wrap', name: 'The Silk Wrap', category: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop' },
    { id: 'linen-trousers', name: 'Linen Wide Trousers', category: 'Bottoms', image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1966&auto=format&fit=crop' },
    { id: 'structured-blazer', name: 'Structured Blazer', category: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop' },
    { id: 'evening-gown', name: 'Evening Gown', category: 'Dresses', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1924&auto=format&fit=crop' },
    { id: 'cashmere-knit', name: 'Cashmere Knit', category: 'Knitwear', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop' },
    { id: 'pleated-skirt', name: 'Pleated Midi Skirt', category: 'Bottoms', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964&auto=format&fit=crop' },
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
