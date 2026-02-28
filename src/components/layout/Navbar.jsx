import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar fade-in">
            <div className="container nav-content">
                <Link to="/" className="nav-brand">NEGI.</Link>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="nav-actions">
                    <button className="icon-btn" aria-label="Search"><Search size={20} /></button>
                    <button className="icon-btn" aria-label="User"><User size={20} /></button>
                    <button className="icon-btn cart-btn" aria-label="Cart">
                        <ShoppingCart size={20} />
                        <span className="cart-badge">0</span>
                    </button>
                    <button className="icon-btn mobile-menu" aria-label="Menu"><Menu size={24} /></button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
