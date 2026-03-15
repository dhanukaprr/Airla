import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// Tell Next.js to always fetch the latest data from CMS
export const revalidate = 0;

type Props = {
    // Note: Our [id] dynamic route is actually matching the slug from Sanity now
    params: Promise<{ id: string }>;
};

// Reusable fetch function for the product data
async function getProduct(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0] {
        name,
        category,
        description,
        fabric,
        fit,
        price,
        image
    }`;
    return await client.fetch(query, { slug });
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return {
            title: 'Product Not Found | Airla',
            description: 'The requested product could not be found.',
        };
    }

    return {
        title: `${product.name} | Airla`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <Image
                    src={product.image ? urlFor(product.image)!.url() : '/images/placeholder.png'}
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
                        <span className={styles.metaValue}>{product.fabric || 'Unknown'}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Fit</span>
                        <span className={styles.metaValue}>{product.fit || 'Unknown'}</span>
                    </div>
                </div>

                <Link href={`/contact?subject=Inquiry: ${product.name}`} className={styles.actionButton}>
                    Request This Design
                </Link>
            </div>
        </div>
    );
}
