import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import './ProductDetail.css';

// Mock DB
const PRODUCTS = {
    '1': { id: 1, name: 'Essential Denim Jacket', price: 129.00, image: '/images/product1.webp', category: 'Outerwear', desc: 'Crafted from premium mid-weight denim, this jacket offers a modern, relaxed fit. Features custom engraved hardware and reinforced stitching for longevity.' },
    '2': { id: 2, name: 'Signature Knit Sweater', price: 89.00, image: '/images/product2.webp', category: 'Knitwear', desc: 'An ultra-soft blend of merino wool and organic cotton. Designed with dropped shoulders and a slightly oversized silhouette for effortless layering.' },
    '3': { id: 3, name: 'Minimalist Wide-Leg Trousers', price: 110.00, image: '/images/product3.webp', category: 'Bottoms', desc: 'Flowy, high-waisted trousers with subtle pleating. Perfect for transitioning from day to night with unparalleled comfort and style.' }
};

const ProductDetail = () => {
    const { id } = useParams();
    const product = PRODUCTS[id] || PRODUCTS['1']; // Fallback for undefined IDs
    const [selectedSize, setSelectedSize] = useState('M');
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="product-detail-page fade-in">
            <div className="breadcrumb container">
                <Link to="/shop" className="back-link"><ArrowLeft size={16} /> Back to Shop</Link>
            </div>

            <div className="product-detail-container container">
                <div className="product-gallery">
                    <img src={product.image} alt={`Negi Clothing ${product.name}`} className="main-image" loading="lazy" />
                    <div className="thumbnail-grid">
                        <img src={product.image} alt={`Negi Clothing ${product.name} thumbnail`} className="thumbnail active" loading="lazy" />
                        <img src={product.image} alt={`Negi Clothing ${product.name} thumbnail`} className="thumbnail" loading="lazy" />
                        <img src={product.image} alt={`Negi Clothing ${product.name} thumbnail`} className="thumbnail" loading="lazy" />
                    </div>
                </div>

                <div className="product-info-panel">
                    <div className="product-meta">
                        <span className="product-category">{product.category}</span>
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-price-large">${product.price.toFixed(2)}</p>
                    </div>

                    <div className="product-description">
                        <p>{product.desc}</p>
                    </div>

                    <div className="product-options">
                        <div className="size-selector">
                            <div className="size-header">
                                <span>Select Size</span>
                                <button className="size-guide-btn">Size Guide</button>
                            </div>
                            <div className="size-grid">
                                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            className={`btn btn-primary add-to-cart-btn ${isAdded ? 'added' : ''}`}
                            onClick={handleAddToCart}
                        >
                            {isAdded ? <><Check size={20} /> Added to Cart</> : 'Add to Cart'}
                        </button>
                    </div>

                    <div className="product-details-accordion">
                        <div className="accordion-item">
                            <h4>Materials & Care</h4>
                            <p>100% Organic Cotton. Machine wash cold, lay flat to dry.</p>
                        </div>
                        <div className="accordion-item">
                            <h4>Shipping & Returns</h4>
                            <p>Free standard shipping on orders over $150. Returns accepted within 30 days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
