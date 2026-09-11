import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Seo from '../components/Seo';
import Spinner from '../components/Spinner';
import site from '../data/site';
import '../styles/shared.css';
import '../styles/blogs.css';

const collections = [
    {
        href: 'https://github.com/tsunipun/image-processing-and-computer-vision',
        title: 'Image Processing & Computer Vision Notes',
        description:
            'A comprehensive collection of my study notes, tutorials, and implementations related to Image Processing and Computer Vision algorithms.',
        label: 'GitHub Collection',
    },
    {
        href: site.social.medium,
        title: 'View all blogs on Medium',
        description:
            'Read more of my articles, tutorials, and thoughts on AI, Machine Learning, and Software Engineering on my Medium profile.',
        label: 'Medium Profile',
    },
];

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;

        fetch('/blog-posts.json')
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then((data) => {
                if (cancelled) return;
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                if (cancelled) return;
                console.error('Error loading blog posts:', err);
                setError(true);
                setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="blogs-page">
            <Seo
                title={`Blogs - ${site.name}`}
                description="Articles, tutorials and notes on AI, machine learning, computer vision and software engineering."
                path="/blogs"
            />

            <section className="section blogs-section">
                <div className="container">
                    <div className="section-header blogs-header">
                        <h1 className="section-title">Blogs</h1>
                    </div>

                    {loading && <Spinner label="Loading blog posts" />}

                    {error && (
                        <p className="error-alert" role="alert">
                            Failed to load blog posts.{' '}
                            <a href={site.social.medium} target="_blank" rel="noopener noreferrer">
                                Read them on Medium instead
                            </a>
                            .
                        </p>
                    )}

                    {!loading && !error && (
                        <>
                            <div className="collections-section">
                                <div className="collections-header">
                                    <h2 className="section-title">Collections</h2>
                                </div>
                                <div className="blog-grid active">
                                    {collections.map((collection) => (
                                        <a
                                            key={collection.href}
                                            href={collection.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="blog-card featured-card"
                                        >
                                            <div className="blog-image-placeholder" aria-hidden="true">
                                                <ExternalLink size={48} color="var(--primary-color)" />
                                            </div>
                                            <div className="blog-content">
                                                <h3 className="blog-title">{collection.title}</h3>
                                                <p className="blog-desc">{collection.description}</p>
                                                <span className="blog-date">{collection.label}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="latest-posts-section">
                                <div className="latest-posts-header">
                                    <h2 className="section-title">Latest Blog Posts</h2>
                                </div>

                                <div id="blog-posts" className="blog-grid active">
                                    {posts.map((post) => (
                                        <article className="blog-card" key={post.link}>
                                            {post.thumbnail && (
                                                <img
                                                    src={post.thumbnail}
                                                    alt=""
                                                    className="blog-image"
                                                    width="640"
                                                    height="200"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            )}
                                            <div className="blog-content">
                                                <h3 className="blog-title">
                                                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                                                        {post.title}
                                                    </a>
                                                </h3>
                                                <time
                                                    className="blog-date"
                                                    dateTime={new Date(post.pubDate).toISOString()}
                                                >
                                                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </time>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
