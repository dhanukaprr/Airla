import Link from 'next/link';
import Image from 'next/image';
import styles from './collections.module.css';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// Tell Next.js to always fetch the latest data from CMS
export const revalidate = 0;

export default async function Collections() {
    // GROQ Query to fetch all products
    const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        name,
        "slug": slug.current,
        category,
        image
    }`;

    // Fallback typing using standard interface format
    type SanityProduct = {
        _id: string;
        name: string;
        slug: string;
        category: string;
        image: any;
    };

    const products: SanityProduct[] = await client.fetch(query);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>The Collection</h1>
                <p className={styles.subtitle}>Curated pieces for the modern wardrobe.</p>
            </div>

            <div className={styles.grid}>
                {products?.length === 0 && (
                    <p style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '4rem', fontStyle: 'italic', opacity: 0.6 }}>No products found in the CMS. Please log into the admin dashboard to add items.</p>
                )}
                {products?.map((product) => (
                    <Link href={`/collections/${product.slug}`} key={product._id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.image ? urlFor(product.image)!.url() : '/images/placeholder.png'}
                                alt={product.name}
                                fill
                                className={styles.productImage}
                                unoptimized
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
