import { Github, Linkedin, BookOpen, Mail, MapPin } from 'lucide-react';
import site from '../data/site';

const links = [
    { href: site.social.github, label: 'GitHub', Icon: Github },
    { href: site.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: site.social.medium, label: 'Medium', Icon: BookOpen },
    { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-meta">
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
                        </p>
                        <p className="footer-location">
                            <MapPin size={14} aria-hidden="true" />
                            <span>{site.location}</span>
                        </p>
                    </div>
                    <nav className="footer-links" aria-label="Social">
                        {links.map(({ href, label, Icon }) => {
                            const external = href.startsWith('http');
                            return (
                                <a
                                    key={label}
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    aria-label={label}
                                >
                                    <Icon size={16} aria-hidden="true" />
                                    <span>{label}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
