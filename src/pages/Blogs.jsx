import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import '../styles/competitive_programming.css';
import '../styles/blogs.css';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const mediumUsername = '@talukdersunipun';
        const rss2jsonApiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`;

        fetch(rss2jsonApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    setPosts(data.items);
                } else {
                    setError(true);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blog posts:', err);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className="blogs-page">
            <Helmet>
                <title>Blogs - Sunipun Talukder</title>
                <meta name="description" content="Read my latest articles, tutorials, and thoughts on AI, Machine Learning, and Software Engineering." />
            </Helmet>

            <section className="section blogs-section">
                <div className="container">
                    <div className="section-header blogs-header">
                        <h1 className="section-title">Blogs</h1>
                    </div>

                    {loading && (
                        <div className="loading-container">
                            <div className="spinner"></div>
                        </div>
                    )}

                    {error && (
                        <div className="error-alert">
                            Failed to load blog posts. Please try again later.
                        </div>
                    )}

                    {!loading && !error && (
                        <>
                            <div className="collections-section">
                                <div className="collections-header">
                                    <h2 className="section-title">Collections</h2>
                                </div>
                                <div className="blog-grid active">
                                    {/* Featured Collection */}
                                    <a
                                        href="https://github.com/tsunipun/image-processing-and-computer-vision"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blog-card featured-card"
                                    >
                                        <div className="blog-image-placeholder">
                                            <ExternalLink size={48} color="var(--primary-color)" />
                                        </div>
                                        <div className="blog-content">
                                            <h2 className="blog-title">
                                                Image Processing & Computer Vision Notes
                                            </h2>
                                            <p className="blog-desc">
                                                A comprehensive collection of my study notes, tutorials, and implementations related to Image Processing and Computer Vision algorithms.
                                            </p>
                                            <time className="blog-date">GitHub Collection</time>
                                        </div>
                                    </a>

                                    {/* Medium Profile Card */}
                                    <a
                                        href="https://medium.com/@talukdersunipun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blog-card featured-card"
                                    >
                                        <div className="blog-image-placeholder">
                                            <ExternalLink size={48} color="var(--primary-color)" />
                                        </div>
                                        <div className="blog-content">
                                            <h2 className="blog-title">
                                                View all blogs on Medium
                                            </h2>
                                            <p className="blog-desc">
                                                Read more of my articles, tutorials, and thoughts on AI, Machine Learning, and Software Engineering on my Medium profile.
                                            </p>
                                            <time className="blog-date">Medium Profile</time>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="latest-posts-section">
                                <div className="latest-posts-header">
                                    <h2 className="section-title">Latest Blog Posts</h2>
                                </div>

                                <div id="blog-posts" className="blog-grid active">
                                    {posts.map((post, index) => {
                                        const date = new Date(post.pubDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        });

                                        // Extract first image from content if available, or use placeholder
                                        const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
                                        const imgSrc = post.thumbnail || (imgMatch ? imgMatch[1] : null);

                                        return (
                                            <article className="blog-card" key={index}>
                                                {imgSrc && <img src={imgSrc} alt={post.title} className="blog-image" />}
                                                <div className="blog-content">
                                                    <h2 className="blog-title">
                                                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                                                            {post.title}
                                                        </a>
                                                    </h2>
                                                    <time className="blog-date">{date}</time>
                                                </div>
                                            </article>
                                        )
                                    })}
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
