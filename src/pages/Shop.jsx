import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ui/ProductCard';
import './Shop.css';

const ALL_PRODUCTS = [
    { id: 1, name: 'Essential Denim Jacket', price: 129.00, image: '/images/product1.webp', category: 'Outerwear' },
    { id: 2, name: 'Signature Knit Sweater', price: 89.00, image: '/images/product2.webp', category: 'Knitwear' },
    { id: 3, name: 'Minimalist Wide-Leg Trousers', price: 110.00, image: '/images/product3.webp', category: 'Bottoms' },
    { id: 4, name: 'Oversized Cotton Tee', price: 45.00, image: '/images/product1.webp', category: 'Tops' },
    { id: 5, name: 'Ribbed Turtleneck', price: 75.00, image: '/images/product2.webp', category: 'Knitwear' },
    { id: 6, name: 'Tailored Wool Coat', price: 295.00, image: '/images/product3.webp', category: 'Outerwear' }
];

const Shop = () => {
    return (
        <div className="shop-page container fade-in">
            <Helmet>
                <title>Shop Premium Apparel | Negi Clothing</title>
                <meta name="description" content="Browse Negi Clothing's collection of premium streetwear and custom apparel designed for comfort and style." />
            </Helmet>
            <header className="shop-header">
                <h1>Shop Premium Apparel</h1>
                <div className="shop-filters">
                    <select className="filter-select">
                        <option>All Categories</option>
                        <option>Outerwear</option>
                        <option>Knitwear</option>
                        <option>Bottoms</option>
                        <option>Tops</option>
                    </select>
                    <select className="filter-select">
                        <option>Sort by: Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>
            </header>

            <div className="shop-grid">
                {ALL_PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
