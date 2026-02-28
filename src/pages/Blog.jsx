import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-page fade-in container">
            <Helmet>
                <title>How to Choose the Right Streetwear | Negi Clothing Blog</title>
                <meta name="description" content="Discover how to build your perfect wardrobe with our guide to choosing the right premium streetwear for your personal style." />
            </Helmet>

            <div className="breadcrumb">
                <Link to="/" className="back-link"><ArrowLeft size={16} /> Back Home</Link>
            </div>

            <article className="blog-article">
                <header className="blog-header">
                    <span className="blog-category">Style Guide</span>
                    <h1>How to Choose the Right Streetwear for Your Style</h1>
                    <p className="blog-date">October 15, 2026 • 4 min read</p>
                </header>

                <img src="/images/about.webp" alt="Minimalist premium streetwear style guide" className="blog-hero-img" loading="lazy" />

                <div className="blog-content">
                    <p className="lead">Streetwear has evolved from underground skate culture into the dominant force in modern luxury fashion. But with so many options, how do you find pieces that fit your personal aesthetic? Here is our guide to building a premium streetwear wardrobe.</p>

                    <h2>1. Master the Silhouette</h2>
                    <p>The foundation of any great streetwear look is the silhouette. Unlike traditional menswear which focuses on strict tailoring, premium streetwear plays with proportions. Try pairing an oversized hoodie with slightly tapered trousers. Or, opt for <Link to="/shop" className="inline-link">wide-leg pants</Link> balanced with a fitted cropped jacket. The key is intentional contrast.</p>

                    <h2>2. Prioritize Fabric Quality</h2>
                    <p>The difference between fast fashion and a true <strong>premium streetwear brand</strong> is the material. Look for heavy-weight cottons, sturdy denim, and structured knits. A high-quality garment drapes better on the body and naturally elevates your overall look.</p>

                    <h2>3. Build a Neutral Foundation</h2>
                    <p>Before buying bright graphics or loud logos, establish a capsule collection of neutral basics. Blacks, whites, creams, and earthy tones provide endless mixing and matching opportunities. You can always add a statement piece later, but strong basics are non-negotiable.</p>

                    <h2>4. Embrace Layering</h2>
                    <p>Layering adds depth and visual interest to simple outfits. Start with an elongated tee peeking out beneath a sweater, topped with an unstructured coat. Layering allows you to transition seamlessly through different environments and temperatures.</p>

                    <hr />

                    <div className="blog-cta">
                        <h3>Ready to upgrade your wardrobe?</h3>
                        <p>Explore our carefully curated collection of essential pieces designed for the modern aesthetic.</p>
                        <Link to="/shop" className="btn btn-primary">Shop the Collection</Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Blog;
