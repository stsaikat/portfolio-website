import React, { useState, useEffect } from 'react';
import { Mail, Copy, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [emailExpanded, setEmailExpanded] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const email = 'talukdersunipun@gmail.com';

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(email).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        });
    };

    const toggleEmail = () => {
        setEmailExpanded(!emailExpanded);
    };

    // Close email expanded when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emailExpanded && !event.target.closest('.email-button')) {
                setEmailExpanded(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [emailExpanded]);

    return (
        <section className="hero">
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
                                <div className="email-container">
                                    <div
                                        className={`email-button ${emailExpanded ? 'expanded' : ''}`}
                                        onClick={toggleEmail}
                                    >
                                        <Mail size={18} />
                                        <span className="email-text">Email</span>
                                        <span className="email-address">{email}</span>
                                        <button className="copy-button" onClick={handleCopy}>
                                            <Copy size={16} />
                                        </button>
                                        <span className={`copy-success ${copySuccess ? 'show' : ''}`}>Copied!</span>
                                    </div>
                                </div>
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
                                <Link to="/blogs.html" className="btn btn-outline">Blogs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-container">
                            <img src="/assets/imgs/profile.jpg" alt="Sunipun Talukder" className="profile-image" />
                            <div className="hero-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
