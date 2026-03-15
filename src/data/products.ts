export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    fabric: string;
    fit: string;
    image: string;
    price: string;
}

export const products: Product[] = [
    {
        id: 'yellow-halter',
        name: 'Saffron Halter Mini',
        category: 'Dresses',
        description: 'A vibrant saffron halter dress that commands attention. Designed with a flattering neckline and a fluid mini length, perfect for warm-weather soirées or making a bold statement.',
        fabric: 'Linen Blend',
        fit: 'True to size, mini length',
        image: '/images/collections/yellow-halter-dress.png',
        price: '$185.00'
    },
    {
        id: 'black-floral',
        name: 'Midnight Floral Halter',
        category: 'Dresses',
        description: 'Dark romanticism in a fluid silhouette. This halter dress features a subtle midnight floral print, offering a sophisticated edge to evening wear.',
        fabric: 'Silk Georgette',
        fit: 'Relaxed fit, midi length',
        image: '/images/collections/black-floral-dress.png',
        price: '$210.00'
    },
    {
        id: 'pink-mini',
        name: 'Blush Open-Back Mini',
        category: 'Dresses',
        description: 'A playful yet elegant blush pink mini dress featuring a daring open back details. Crafted for both comfort and an unforgettable silhouette.',
        fabric: 'Cotton Sateen',
        fit: 'Fitted bodice, flared skirt',
        image: '/images/collections/pink-mini-dress.jpg',
        price: '$175.00'
    },
    {
        id: 'red-maxi',
        name: 'Crimson Tiered Maxi',
        category: 'Dresses',
        description: 'Make a dramatic entrance with this breathtaking crimson flowing maxi dress. Flowing lightly as you walk, the tiered skirt provides beautiful movement and volume.',
        fabric: 'Organic Cotton',
        fit: 'Relaxed waist, maxi length',
        image: '/images/collections/red-maxi-dress.png',
        price: '$240.00'
    },
    {
        id: 'yellow-outdoor',
        name: 'Saffron Halter (Outdoor)',
        category: 'Editorial',
        description: 'Showcasing the Saffron Halter mini dress in natural light. This editorial piece highlights the rich color and drape of the fabric when in motion outdoors.',
        fabric: 'Linen Blend',
        fit: 'Wait list available',
        image: '/images/hero/yellow-dress-hero.jpg',
        price: 'Editorial Piece'
    }
];

export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
};
