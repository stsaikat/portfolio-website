import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
