import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// Mock data store - in a real app this would be a database fetch
const products: Record<string, { name: string; category: string; description: string; fabric: string; fit: string; image: string; price: string }> = {
    'silk-wrap': {
        name: 'The Silk Wrap',
        category: 'Dresses',
        description: 'A fluid silhouette that drapes effortlessly across the body. Crafted from 100% organic sand-washed silk, this piece is designed to move with you. Features a bias cut and adjustable waist tie for a personalized fit.',
        fabric: '100% Organic Silk',
        fit: 'Relaxed fit, true to size',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop',
        price: 'Made to Order'
    },
    'linen-trousers': {
        name: 'Linen Wide Trousers',
        category: 'Bottoms',
        description: 'High-waisted trousers with a wide, flowing leg. Made from heavy-weight European linen ensuring breathability and structure. Finished with deep pockets and a concealed side zip.',
        fabric: '100% European Linen',
        fit: 'High-waisted, wide leg',
        image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1966&auto=format&fit=crop',
        price: 'Made to Order'
    },
    'structured-blazer': {
        name: 'Structured Blazer',
        category: 'Outerwear',
        description: 'A modern take on the classic blazer. Sharp shoulders meet a relaxed waist for a silhouette that commands attention without restriction.',
        fabric: 'Wool Blend',
        fit: 'Oversized',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
        price: 'Made to Order'
    },
    // Fallback for other IDs from the grid
    'default': {
        name: 'Signature Archive Piece',
        category: 'Archive',
        description: 'A unique design from our archives. This piece exemplifies the Airla commitment to timeless design and superior craftsmanship.',
        fabric: 'Premium Blend',
        fit: 'Custom Tailored',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop',
        price: 'Inquire for Pricing'
    }
};

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const product = products[id] || products['default'];
    return {
        title: `${product.name} | Airla`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = products[id] || products['default'];

    if (!product) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.productImage}
                    priority
                    unoptimized
                />
            </div>

            <div className={styles.detailsSection}>
                <div className={styles.breadcrumb}>
                    <Link href="/collections">Collections</Link> / {product.category}
                </div>

                <h1 className={styles.title}>{product.name}</h1>
                <p className={styles.price}>{product.price}</p>

                <p className={styles.description}>
                    {product.description}
                </p>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Fabric</span>
                        <span className={styles.metaValue}>{product.fabric}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Fit</span>
                        <span className={styles.metaValue}>{product.fit}</span>
                    </div>
                </div>

                <Link href={`/contact?subject=Inquiry: ${product.name}`} className={styles.actionButton}>
                    Request This Design
                </Link>
            </div>
        </div>
    );
}
