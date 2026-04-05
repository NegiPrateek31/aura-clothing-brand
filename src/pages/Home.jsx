import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import SEO from '../components/ui/SEO';
import './Home.css';

const FEATURED_PRODUCTS = [
    { id: 1, name: 'Essential Denim Jacket', price: 129.00, image: '/images/product1.webp' },
    { id: 2, name: 'Signature Knit Sweater', price: 89.00, image: '/images/product2.webp' },
    { id: 3, name: 'Minimalist Wide-Leg Trousers', price: 110.00, image: '/images/product3.webp' }
];

const SITE_URL = 'https://negiclothing.vercel.app';

const faqEntries = [
    {
        question: 'What makes your streetwear premium?',
        answer: 'We use long-lasting fabrics, precise construction, and minimalist silhouettes that hold their shape so you can wear them for years.',
    },
    {
        question: 'Do you ship across India?',
        answer: 'Yes. We offer reliable shipping across India with transparent tracking and easy returns.',
    },
    {
        question: 'Are your materials sustainable?',
        answer: 'We prioritize organic cotton, low-impact dyes, and responsible manufacturing partners to keep our footprint light.',
    },
];

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Negi Clothing',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-n.png`,
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const Home = () => {
    return (
        <div className="home-page fade-in">
            <SEO
                title="Premium Streetwear Brand India"
                description="Negi Clothing is a premium streetwear brand in India crafting sustainable, minimalist essentials designed to outlast trends."
                path="/"
                structuredData={[organizationSchema, faqSchema]}
            />
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
                    <p>We believe in doing more with less. Our garments are crafted from ethically sourced materials, ensuring both exceptional quality and minimal environmental impact, reinforcing our promise as a premium streetwear brand for everyday wear.</p>
                    <Link to="/about" className="link-arrow">Our Story <ArrowRight size={16} /></Link>
                </div>
            </section>

            <section className="faq-section container">
                <div className="section-header">
                    <h2>FAQs</h2>
                    <span className="faq-tag">Answers about our premium streetwear</span>
                </div>
                <div className="faq-grid">
                    {faqEntries.map((item) => (
                        <div key={item.question} className="faq-card">
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
