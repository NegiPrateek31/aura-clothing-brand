import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer fade-in">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>NEGI.</h3>
                    <p>Elevating everyday essentials through timeless design and sustainable practices.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Shop</h4>
                        <Link to="/shop">All Products</Link>
                        <Link to="/shop?category=new">New Arrivals</Link>
                        <Link to="/shop?category=sale">Sale</Link>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
                <div className="footer-newsletter">
                    <h4>Join the Newsletter</h4>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NEGI Clothing. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
