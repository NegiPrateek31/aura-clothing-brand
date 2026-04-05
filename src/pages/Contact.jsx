import SEO from '../components/ui/SEO';
import './Contact.css';

const SITE_URL = 'https://negiclothing.vercel.app';

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
    ],
};

const Contact = () => {
    return (
        <div className="contact-page fade-in">
            <SEO
                title="Contact Negi Clothing - Get in Touch"
                description="Contact Negi Clothing for inquiries, collaborations, and customer support. We're here to help you."
                path="/contact"
                structuredData={breadcrumbSchema}
            />
            <div className="contact-header">
                <div className="container">
                    <h1>Contact Negi Clothing - Get in Touch</h1>
                    <p>We'd love to hear from you.</p>
                </div>
            </div>

            <div className="container contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Whether you have a question about an order, styling advice, or just want to say hello, we're here to help.</p>

                    <div className="info-block">
                        <h3>Customer Service</h3>
                        <p>Email: support@negiclothing.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>Hours: Mon-Fri, 9am - 5pm EST</p>
                    </div>

                    <div className="info-block">
                        <h3>Press & Partnerships</h3>
                        <p>Email: press@negiclothing.com</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject">
                                <option>General Inquiry</option>
                                <option>Order Status</option>
                                <option>Returns & Exchanges</option>
                                <option>Wholesale</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
