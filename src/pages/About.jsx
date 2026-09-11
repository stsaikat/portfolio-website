import { Github, Linkedin, FileText, Cpu, Eye, Smartphone, Activity, Book, Code, BarChart2 } from 'lucide-react';
import Seo from '../components/Seo';
import EmailButton from '../components/EmailButton';
import site from '../data/site';
import { experience, community, education, skills, expertise } from '../data/resume';
import '../styles/shared.css';
import '../styles/about.css';

const ICONS = { Cpu, Eye, Smartphone, Activity, Book, Code, BarChart2 };

const Timeline = ({ entries }) => (
    <div className="timeline">
        {entries.map((entry) => (
            <div className="timeline-item" key={`${entry.role}-${entry.period}`}>
                <h3>{entry.role}</h3>
                <p className="company">
                    {entry.company}
                    {entry.location ? `, ${entry.location}` : ''}
                </p>
                {entry.period && <p className="period">{entry.period}</p>}
                <ul className="achievements">
                    {entry.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const About = () => {
    return (
        <div className="about-page">
            <Seo
                title={`About - ${site.name}`}
                description={`${site.name} is an ${site.title} in ${site.location} with a mathematics background, working across generative AI, computer vision and mobile engineering.`}
                path="/about"
            />
            <section className="section about-hero">
                <div className="container">
                    <div className="profile-header">
                        <div className="profile-container">
                            <img
                                src="/assets/imgs/profile-real.webp"
                                alt={site.name}
                                className="profile-image"
                                width="1000"
                                height="1000"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>
                        <div className="profile-info">
                            <h1>{site.name}</h1>
                            <p className="lead">{site.title}</p>
                            <p className="bio">{site.summary}</p>
                            <div className="social-links">
                                <EmailButton email={site.email} />
                                <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                                    <Github size={18} aria-hidden="true" />
                                    <span>GitHub</span>
                                </a>
                                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={18} aria-hidden="true" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href={site.resume} target="_blank" rel="noopener noreferrer">
                                    <FileText size={18} aria-hidden="true" />
                                    <span>Résumé</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section expertise-section">
                <div className="container">
                    <h2 className="sr-only">Areas of expertise</h2>
                    <div className="expertise-grid">
                        {expertise.map((item) => {
                            const Icon = ICONS[item.icon];
                            return (
                                <div className="expertise-card" key={item.title}>
                                    <div className="expertise-icon">
                                        <Icon size={24} color="var(--secondary-color)" aria-hidden="true" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section experience-section">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2>Professional Experience</h2>
                            <Timeline entries={experience} />
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body">
                            <h2>Community & Leadership</h2>
                            <Timeline entries={community} />
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body">
                            <h2>Education</h2>
                            <div className="education">
                                <div className="education-header">
                                    <h3>{education.school}</h3>
                                    <p className="education-period">
                                        {education.degree} ({education.period})
                                    </p>
                                </div>
                                <div className="relevant-courses">
                                    <h4>Relevant Coursework</h4>
                                    <div className="course-grid">
                                        {education.coursework.map((group) => {
                                            const Icon = ICONS[group.icon];
                                            return (
                                                <div className="course-category" key={group.category}>
                                                    <div className="category-header">
                                                        <Icon size={18} aria-hidden="true" />
                                                        <h5>{group.category}</h5>
                                                    </div>
                                                    <div className="course-tags">
                                                        {group.courses.map((course) => (
                                                            <span className="course-tag" key={course}>{course}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="skills mt-4">
                                <h3>Technical Skills</h3>
                                {skills.map((group) => (
                                    <div className="skill-category" key={group.category}>
                                        <h4 className="skill-category-title">{group.category}</h4>
                                        <div className="skill-tags">
                                            {group.items.map((item) => (
                                                <span className="skill-tag" key={item}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
