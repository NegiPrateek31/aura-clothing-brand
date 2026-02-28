import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ui/ProductCard';
import './Home.css';

const FEATURED_PRODUCTS = [
    { id: 1, name: 'Essential Denim Jacket', price: 129.00, image: '/images/product1.webp' },
    { id: 2, name: 'Signature Knit Sweater', price: 89.00, image: '/images/product2.webp' },
    { id: 3, name: 'Minimalist Wide-Leg Trousers', price: 110.00, image: '/images/product3.webp' }
];

const Home = () => {
    return (
        <div className="home-page fade-in">
            <Helmet>
                <title>Premium Streetwear Brand | Negi Clothing India</title>
                <meta name="description" content="Shop the best premium custom streetwear brand in India. Negi Clothing offers high-quality, sustainable online streetwear for the modern aesthetic." />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Negi Clothing",
                      "url": "https://negiclothing.vercel.app/",
                      "logo": "https://negiclothing.vercel.app/images/hero.webp"
                    }
                    `}
                </script>
            </Helmet>
            <section className="hero">
                <div className="hero-content">
                    <h1>Premium Streetwear Brand India</h1>
                    <p>Discover our latest collection of premium, sustainable essentials designed for the modern wardrobe.</p>
                    <Link to="/shop" className="btn btn-primary">
                        Explore our collection <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <section className="featured-collections container">
                <div className="section-header">
                    <h2>Featured Collection</h2>
                    <Link to="/shop" className="link-arrow">View All <ArrowRight size={16} /></Link>
                </div>
                <div className="product-grid">
                    {FEATURED_PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section className="about-preview container">
                <div className="about-preview-content">
                    <h2>Why Choose Negi Clothing?</h2>
                    <p>We believe in doing more with less. Our garments are crafted from ethically sourced materials, ensuring both exceptional quality and minimal environmental impact.</p>
                    <Link to="/about" className="link-arrow">Our Story <ArrowRight size={16} /></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
