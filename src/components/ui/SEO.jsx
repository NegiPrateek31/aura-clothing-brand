import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Negi Clothing';
const SITE_URL = 'https://negiclothing.vercel.app';
const DEFAULT_DESCRIPTION = 'Negi Clothing is a premium streetwear brand crafting sustainable, minimalist essentials for the modern wardrobe.';
const DEFAULT_IMAGE = `${SITE_URL}/images/logo-n.png`;

const asArray = (value) => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
};

const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    path = '/',
    image = DEFAULT_IMAGE,
    type = 'website',
    structuredData,
    children,
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {asArray(structuredData).map((data, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(data)}
                </script>
            ))}

            {children}
        </Helmet>
    );
};

export default SEO;
