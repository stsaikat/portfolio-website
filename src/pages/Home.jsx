import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import EmailButton from '../components/EmailButton';
import '../styles/about.css';
import '../styles/home.css';

const Home = () => {
    const email = 'talukdersunipun@gmail.com';

    return (
        <section className="hero">
            <Helmet>
                <title>Sunipun Talukder - Portfolio</title>
                <meta name="description" content="Portfolio of Sunipun Talukder, Software Engineer specializing in AI, Deep Learning, and Computer Vision." />
            </Helmet>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="gradient-text">Hi, I'm Sunipun</h1>
                            <h2 className="hero-subtitle">Software Engineer - AI & ML</h2>
                            <p className="hero-description mb-4">
                                Specializing in Generative AI, Deep Learning & Computer Vision<br />Mathematics Background | Competitive programmer
                            </p>
                        </div>
                        <div className="action-buttons">
                            <div className="contact-actions">
                                <EmailButton email={email} />
                            </div>
                            <div className="contact-actions">
                                <a href="https://github.com/stsaikat" target="_blank" rel="noopener noreferrer" className="contact-btn">
                                    <Github size={18} />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/sunipuntalukder/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                                    <Linkedin size={18} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                            <div className="primary-actions">
                                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                                <Link to="/about" className="btn btn-outline">About Me</Link>
                                <Link to="/blogs" className="btn btn-outline">Blogs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-container">
                            <img src="/assets/imgs/profile.webp" alt="Sunipun Talukder" className="profile-image" />
                            <div className="hero-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
