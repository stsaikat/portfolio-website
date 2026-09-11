import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'CP', path: '/cp' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Blogs', path: '/blogs' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef(null);

    const toggleMenu = () => setIsOpen((open) => !open);

    // Escape closes the drawer and returns focus to the button that opened it,
    // so keyboard users are never stranded inside an open menu.
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    return (
        <nav className="navbar" aria-label="Main">
            <div className="nav-container container">
                <NavLink to="/" className="navbar-brand">
                    Sunipun Talukder
                </NavLink>

                <button
                    ref={toggleRef}
                    type="button"
                    className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>

                <div id="primary-navigation" className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) => (isActive ? 'active' : '')}
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
