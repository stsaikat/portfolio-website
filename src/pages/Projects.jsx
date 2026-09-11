import { ExternalLink, Github, Smartphone } from 'lucide-react';
import Seo from '../components/Seo';
import site from '../data/site';
import { featuredProjects, professionalProjects, personalProjects } from '../data/projects';
import '../styles/projects.css';

const LINK_ICONS = {
    github: Github,
    app: Smartphone,
    web: ExternalLink,
};

const ProjectCard = ({ project }) => {
    const LinkIcon = LINK_ICONS[project.linkType];

    return (
        <div className="project-card">
            {project.image && (
                <img
                    src={project.image}
                    alt=""
                    className="project-card-preview"
                    width="900"
                    height="509"
                    loading="lazy"
                    decoding="async"
                />
            )}
            <div className="project-card-body">
                <div className="project-card-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                        >
                            <LinkIcon size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
                {project.metric && <p className="project-metric">{project.metric}</p>}
                {project.description && <p>{project.description}</p>}
                {project.bullets && (
                    <ul className="project-bullets">
                        {project.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                )}
                {project.stack && (
                    <ul className="project-stack" aria-label="Tech stack">
                        {project.stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const ProjectSection = ({ title, blurb, projects }) => (
    <section className="projects-section">
        <div className="container">
            <h2 className="section-title">{title}</h2>
            {blurb && <p className="projects-section-blurb">{blurb}</p>}
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </div>
    </section>
);

const Projects = () => {
    return (
        <div className="projects-page">
            <Seo
                title={`Projects - ${site.name}`}
                description="Generative AI, computer vision and mobile projects — shipped apps reaching millions of users, plus open-source implementations."
                path="/projects"
            />
            <section className="projects-hero">
                <div className="container">
                    <h1 className="section-title-hero">My Projects</h1>
                    <p className="text-center mb-4">
                        Shipped products and open-source work across AI, computer vision and mobile engineering.
                    </p>
                </div>
            </section>

            <ProjectSection
                title="Featured Projects"
                blurb="The work I would want to be judged on — production AI pipelines and from-scratch implementations."
                projects={featuredProjects}
            />
            <ProjectSection
                title="Other Professional Works"
                blurb="Commercial apps I built or led at BrainCraft and LiiLab."
                projects={professionalProjects}
            />
            <ProjectSection
                title="More Personal Projects"
                blurb="Experiments, libraries and practice repositories."
                projects={personalProjects}
            />
        </div>
    );
};

export default Projects;
