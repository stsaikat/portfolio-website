import { Helmet } from 'react-helmet-async';
import site from '../data/site';

// Emits title, description, canonical and the full Open Graph / Twitter set for a
// page. Every route renders one of these, so shared links preview correctly no
// matter which page was shared — the prerender step bakes the tags into the HTML.
const Seo = ({ title, description, path = '/', image = '/og-image.jpg', noindex = false, children }) => {
    const canonical = `${site.url}${path === '/' ? '/' : path}`;
    const absoluteImage = image.startsWith('http') ? image : `${site.url}${image}`;

    return (
        <Helmet prioritizeSeoTags>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={site.name} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${site.name} — ${site.title}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />

            {noindex && <meta name="robots" content="noindex" />}
            {children}
        </Helmet>
    );
};

export default Seo;
