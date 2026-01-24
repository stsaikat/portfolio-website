import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import '../styles/blog.css';

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
                        <h1 className="section-title gradient-text" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: "center" }}>Latest Blog Posts</h1>
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

                    <div id="blog-posts" className="blog-grid" style={{
                        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem"
                    }}>
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
                                <article className="blog-card" key={index} style={{
                                    background: "white", borderRadius: "12px", boxShadow: "var(--shadow)",
                                    padding: "1.5rem", transition: "transform 0.3s ease"
                                }}>
                                    {imgSrc && <img src={imgSrc} alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" }} />}
                                    <h2 className="blog-title" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                                        <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--text-color)", fontWeight: "600" }}>
                                            {post.title}
                                        </a>
                                    </h2>
                                    <time className="blog-date" style={{ color: "#666", fontSize: "0.9rem" }}>{date}</time>
                                </article>
                            )
                        })}
                    </div>

                    <div className="view-all-blogs" style={{ textAlign: "center", marginTop: "3rem" }}>
                        <a href="https://medium.com/@talukdersunipun" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            View all blogs on Medium <ExternalLink size={16} />
                        </a>
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
