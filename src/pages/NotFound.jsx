import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/not-found.css';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-text">Page not found</p>
                <Link to="/" className="not-found-link">
                    Go Back Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
