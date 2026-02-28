import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
    return (
        <div className="about-page fade-in">
            <Helmet>
                <title>About Negi Clothing – Our Story & Vision</title>
                <meta name="description" content="Learn about Negi Clothing’s journey, mission, and commitment to delivering premium fashion and unique streetwear designs." />
            </Helmet>
            <div className="about-hero">
                <div className="container">
                    <h1>About Negi Clothing – Our Story & Vision</h1>
                    <p className="subtitle">Defining the modern aesthetic.</p>
                </div>
            </div>

            <div className="container about-content">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>The NEGI Philosophy</h2>
                        <p>Founded on the principles of minimalism and timeless design, NEGI was created to offer an alternative to fast fashion. We believe that true style is not about following trends, but about finding confidence in simplicity.</p>
                        <p>Every piece in our collection is meticulously crafted with attention to detail, using only the finest sustainable materials. Our goal is to build a wardrobe that you can rely on day after day, year after year.</p>
                    </div>
                    <div className="about-image-container">
                        <img src="/images/about.webp" alt="Negi Clothing lifestyle apparel" className="about-image" loading="lazy" />
                    </div>
                </div>

                <div className="about-values">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Simplicity</h3>
                            <p>We strip away the unnecessary, leaving only what is essential. Clean lines and uncluttered aesthetics define our approach.</p>
                        </div>
                        <div className="value-item">
                            <h3>Sustainability</h3>
                            <p>From organic fabrics to ethical manufacturing processes, we are committed to minimizing our footprint on the planet.</p>
                        </div>
                        <div className="value-item">
                            <h3>Quality</h3>
                            <p>We believe in doing things right. Our garments are engineered to endure, becoming better with every wear.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
