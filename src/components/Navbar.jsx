import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'CP', path: '/cp' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Blogs', path: '/blogs' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container container">
                <NavLink to="/" className="navbar-brand">
                    Sunipun Talukder
                </NavLink>

                <button className={`mobile-menu-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    {isOpen ? <X size={24} color="var(--primary-color)" /> : <Menu size={24} color="var(--primary-color)" />}
                </button>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? "active" : ""}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
