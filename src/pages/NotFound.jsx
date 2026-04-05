import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import './NotFound.css';

const NotFound = () => (
    <div className="notfound-page container fade-in">
        <SEO
            title="Page Not Found"
            description="The page you are looking for cannot be found on Negi Clothing."
            path="/404"
        />
        <div className="notfound-card">
            <img src="/images/logo-n-180.png" alt="Negi Clothing N logo" className="notfound-logo" loading="lazy" />
            <h1>Page not found</h1>
            <p>The page you are looking for doesn&apos;t exist or may have been moved. Continue exploring our premium streetwear.</p>
            <div className="notfound-actions">
                <Link to="/" className="btn btn-primary">Go Home</Link>
                <Link to="/shop" className="link-arrow">Shop the collection</Link>
            </div>
        </div>
    </div>
);

export default NotFound;
