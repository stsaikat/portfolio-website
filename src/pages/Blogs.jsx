import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import '../styles/competitive_programming.css';

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
            <section className="section" style={{ minHeight: '60vh', paddingTop: '100px' }}>
                <div className="container">
                    <div className="section-header">
                        <h1 className="section-title gradient-text" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: "center" }}>Blogs</h1>
                    </div>

                    {loading && (
                        <div className="loading-spinner" style={{ textAlign: "center", padding: "2rem" }}>
                            <div className="spinner" style={{
                                width: "40px", height: "40px", border: "4px solid #eee",
                                borderTop: "4px solid var(--primary-color)", borderRadius: "50%",
                                margin: "0 auto", animation: "spin 1s linear infinite"
                            }}></div>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger" style={{ textAlign: "center", color: "red" }}>
                            Failed to load blog posts. Please try again later.
                        </div>
                    )}

                    <div className="collections-section" style={{ marginBottom: "3rem" }}>
                        <h2 className="section-title gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: "left", display: "block", width: "100%" }}>Collections</h2>
                        <div className="blog-grid active">
                            {/* Featured Collection */}
                            <article className="blog-card featured-card">
                                <div className="blog-image-placeholder" style={{
                                    width: '100%',
                                    height: '200px',
                                    background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(56, 189, 248, 0.1) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottom: '1px solid var(--border-color)'
                                }}>
                                    <ExternalLink size={48} color="var(--primary-color)" />
                                </div>
                                <div className="blog-content">
                                    <h2 className="blog-title">
                                        <a href="https://github.com/tsunipun/image-processing-and-computer-vision" target="_blank" rel="noopener noreferrer">
                                            Image Processing & Computer Vision Notes
                                        </a>
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        A comprehensive collection of my study notes, tutorials, and implementations related to Image Processing and Computer Vision algorithms.
                                    </p>
                                    <time className="blog-date">GitHub Collection</time>
                                </div>
                            </article>

                            {/* Medium Profile Card */}
                            <article className="blog-card featured-card">
                                <div className="blog-image-placeholder" style={{
                                    width: '100%',
                                    height: '200px',
                                    background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(56, 189, 248, 0.1) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottom: '1px solid var(--border-color)'
                                }}>
                                    <ExternalLink size={48} color="var(--primary-color)" />
                                </div>
                                <div className="blog-content">
                                    <h2 className="blog-title">
                                        <a href="https://medium.com/@talukdersunipun" target="_blank" rel="noopener noreferrer">
                                            View all blogs on Medium
                                        </a>
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                        Read more of my articles, tutorials, and thoughts on AI, Machine Learning, and Software Engineering on my Medium profile.
                                    </p>
                                    <time className="blog-date">Medium Profile</time>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="latest-posts-section">
                        <h2 className="section-title gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: "left", display: "block", width: "100%" }}>Latest Blog Posts</h2>

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


                </div>
            </section>
            <style>{`
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .blog-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); }
            `}</style>
        </div>
    );
};

export default Blogs;
