import { Github, Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import EmailButton from '../components/EmailButton';
import site from '../data/site';
import '../styles/home.css';

// Structured data so a search for "Sunipun Talukder" can resolve to a person
// with a job title and verified profile links rather than just a blue link.
const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.title,
    email: `mailto:${site.email}`,
    url: site.url,
    image: `${site.url}/assets/imgs/profile.webp`,
    description: site.summary,
    address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Shahjalal University of Science and Technology',
    },
    knowsAbout: ['Generative AI', 'Deep Learning', 'Computer Vision', 'Diffusion Models', 'Competitive Programming'],
    sameAs: [site.social.github, site.social.linkedin, site.social.medium, site.social.codeforces],
};

const Home = () => {
    return (
        <section className="hero">
            <Seo
                title={`${site.name} - ${site.title}`}
                description={site.summary}
                path="/"
            >
                <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
            </Seo>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p className="availability-badge">
                                <span className="availability-dot" aria-hidden="true" />
                                {site.availability}
                            </p>
                            <h1 className="gradient-text">Hi, I&apos;m Sunipun</h1>
                            <h2 className="hero-subtitle">{site.title}</h2>
                            <p className="hero-description mb-4">
                                I build generative AI and computer vision systems that ship to millions of users
                                — diffusion pipelines, image enhancement, and on-device inference.
                            </p>
                        </div>
                        <div className="action-buttons">
                            <div className="contact-actions">
                                <EmailButton email={site.email} />
                                <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="contact-btn">
                                    <Github size={18} aria-hidden="true" />
                                    <span>GitHub</span>
                                </a>
                                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn">
                                    <Linkedin size={18} aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                            <div className="primary-actions">
                                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                                <a href={site.resume} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <FileText size={16} aria-hidden="true" />
                                    Résumé
                                </a>
                                <Link to="/about" className="btn btn-outline">About Me</Link>
                                <Link to="/blogs" className="btn btn-outline">Blogs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="profile-container">
                            <img
                                src="/assets/imgs/profile.webp"
                                alt={`${site.name}, ${site.title}`}
                                className="profile-image"
                                width="700"
                                height="711"
                                fetchPriority="high"
                                decoding="async"
                            />
                            <div className="hero-background" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
