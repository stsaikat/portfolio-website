import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright">&copy; {new Date().getFullYear()} Sunipun Talukder. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="https://github.com/stsaikat" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
