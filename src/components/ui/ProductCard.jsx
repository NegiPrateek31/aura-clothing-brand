import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card fade-in">
            <Link to={`/product/${product.id}`} className="product-image-container">
                <img src={product.image} alt={`Negi Clothing ${product.name}`} className="product-image" loading="lazy" />
                <div className="product-overlay">
                    <button className="quick-add-btn">
                        <ShoppingBag size={18} /> Quick Add
                    </button>
                </div>
            </Link>
            <div className="product-info">
                <Link to={`/product/${product.id}`} className="product-title">
                    {product.name}
                </Link>
                <span className="product-price">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ProductCard;
