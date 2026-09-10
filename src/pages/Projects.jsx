import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Smartphone } from 'lucide-react';
import '../styles/projects.css';

const LINK_ICONS = {
    github: Github,
    app: Smartphone,
    web: ExternalLink,
};

const featuredProjects = [
    {
        title: 'Shuffle - Random Video Chat',
        image: '/assets/imgs/projects/shuffle.webp',
        link: 'https://shuffle.sunipun.com/',
        linkType: 'web',
        description: 'A real-time random video chat application featuring partner matching, skipping, and text messaging using WebRTC and Socket.io.',
    },
    {
        title: 'Cartoon AI - AI Art Generator',
        image: '/assets/imgs/projects/cartoon_ai.webp',
        link: 'https://apps.apple.com/us/app/cartoon-ai-ai-art-generator/id6469111220',
        linkType: 'app',
        bullets: [
            'Developed ML and AI pipelines using diffusion models',
            'Implemented deep learning algorithms for image-to-cartoon conversion',
            'Optimized performance for seamless processing',
            'Ensured high-quality, scalable output results',
        ],
    },
    {
        title: 'Chatbot',
        image: '/assets/imgs/projects/chatbot.webp',
        link: 'https://github.com/stsaikat/chatbot',
        linkType: 'github',
        description: 'An easy-to-use chatbot powered by an LLM via LangChain, with a Gradio interface for natural language interactions.',
    },
    {
        title: 'Edit Up - AI Photo Video Editor',
        image: '/assets/imgs/projects/no_crop.webp',
        link: 'https://apps.apple.com/us/app/no-crop-video-pictures-fit/id1333491559',
        linkType: 'app',
        bullets: [
            'Implemented AI Photo Enhancer and Expander features',
            'Developed Image Upscale and Deblur algorithms',
            'Created AI Denoise and Low-Light Enhancement',
            'Built Old Photos Restore and Face Restore capabilities',
            'Optimized image processing for high-quality results',
        ],
    },
    {
        title: 'Diffusion From Scratch',
        image: '/assets/imgs/projects/diffusion.webp',
        link: 'https://github.com/tsunipun/diffusion-from-scratch',
        linkType: 'github',
        description: 'Implementation of diffusion models from scratch, demonstrating deep understanding of generative AI core concepts.',
    },
    {
        title: 'Semantic Image Search',
        image: '/assets/imgs/projects/semantic_search.webp',
        link: 'https://github.com/stsaikat/semantic-image-search',
        linkType: 'github',
        description: 'A semantic-aware image search tool that uses AI to understand and find relevant images based on meaning.',
    },
];

const professionalProjects = [
    {
        title: 'Background Remover',
        link: 'https://play.google.com/store/apps/details?id=com.braincraftapps.droid.bgremover',
        linkType: 'app',
        bullets: [
            'Developed AI-powered background removal algorithms',
            'Implemented efficient image processing techniques',
            'Created optimized image manipulation pipelines',
            'Enhanced performance for various device capabilities',
        ],
    },
    {
        title: 'SlideShow Maker with Music Fx',
        link: 'https://apps.apple.com/us/app/slideshow-maker-with-music-fx/id1265026847',
        linkType: 'app',
        bullets: [
            'Developed filters using Metal framework for iOS',
            'Implemented high-performance image processing',
            'Created custom GLSL shaders for effects',
            'Optimized rendering pipelines for smooth transitions',
        ],
    },
    {
        title: 'GIF Maker & Editor - GifBuz',
        link: 'https://play.google.com/store/apps/details?id=com.braincraftapps.droid.gifmaker',
        linkType: 'app',
        bullets: [
            'Developed video to GIF conversion module',
            'Implemented GIF to video conversion',
            'Created image to video transformation',
            'Optimized performance for smooth conversions',
        ],
    },
    {
        title: 'Add Music & Audio to Video',
        link: 'https://play.google.com/store/apps/details?id=com.braincraftapps.addmusictovideo',
        linkType: 'app',
        bullets: [
            'Developed image-to-video conversion module',
            'Implemented GLSL shaders for OpenGL ES',
            'Created graphics drawing pipeline',
            'Added filters and effects for enhanced visuals',
        ],
    },
    {
        title: 'Intro Maker - Outro Video Maker',
        link: 'https://play.google.com/store/apps/details?id=com.video_lab.video_intro_maker',
        linkType: 'app',
        bullets: [
            'Led project design and architecture',
            'Implemented video decoding and encoding',
            'Developed audio processing capabilities',
            'Maintained clean code and design patterns',
        ],
    },
];

const personalProjects = [
    {
        title: 'Classification Made Easy',
        link: 'https://github.com/tsunipun/classification-made-easy',
        linkType: 'github',
        description: 'A library to make your classification training, validation, and testing process easier and more efficient.',
    },
    {
        title: 'On-Device AI',
        link: 'https://github.com/stsaikat/ondevice-ai',
        linkType: 'github',
        description: 'Projects and experiments with on-device AI implementations for mobile applications.',
    },
    {
        title: 'Super Resolution',
        link: 'https://github.com/stsaikat/super-resolution',
        linkType: 'github',
        description: 'AI-powered image super-resolution implementation for enhancing image quality.',
    },
    {
        title: 'Image Manipulation',
        link: 'https://github.com/stsaikat/image-manipulation',
        linkType: 'github',
        description: 'Collection of open-source works related to image manipulation and processing.',
    },
    {
        title: 'OpenGL ES',
        link: 'https://github.com/stsaikat/Open-GL-ES',
        linkType: 'github',
        description: 'A collection of OpenGL ES examples and implementations for Android.',
    },
    {
        title: 'Video to Audio Converter',
        link: 'https://github.com/stsaikat/videotoaudioconverter',
        linkType: 'github',
        description: 'A tool for converting video files to audio formats with various options.',
    },
    {
        title: 'Video Editor',
        link: 'https://github.com/stsaikat/videoeditor',
        linkType: 'github',
        description: 'Early-stage Android video editor project — project scaffolding and architecture for planned editing features.',
    },
    {
        title: 'Weekly Calendar',
        link: 'https://github.com/stsaikat/weeklycalendar',
        linkType: 'github',
        description: 'A weekly calendar application for organizing and managing schedules.',
    },
    {
        title: 'Codeforces Solutions',
        link: 'https://github.com/stsaikat/Codeforces-problem-solutions',
        linkType: 'github',
        description: 'Collection of solved Codeforces problems from contest practice.',
    },
    {
        title: 'Resolution Estimator',
        link: 'https://github.com/tsunipun/resolution-estimator',
        linkType: 'github',
        description: 'A trained model with a Gradio demo app for estimating image resolution, useful for computer vision preprocessing pipelines.',
    },
];

const ProjectCard = ({ project }) => {
    const LinkIcon = LINK_ICONS[project.linkType];

    return (
        <div className="project-card">
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-preview"
                    loading="lazy"
                />
            )}
            <div className="project-card-body">
                <div className="project-card-header">
                    <h4>{project.title}</h4>
                    <div className="project-links">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                            <LinkIcon size={18} />
                        </a>
                    </div>
                </div>
                {project.description && <p>{project.description}</p>}
                {project.bullets && (
                    <ul className="project-bullets">
                        {project.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="projects-page">
            <Helmet>
                <title>Projects - Sunipun Talukder</title>
                <meta name="description" content="Showcase of my professional and personal projects in AI, App Development, and Web Technologies." />
            </Helmet>
            <section className="projects-hero">
                <div className="container">
                    <h1 className="section-title-hero">My Projects</h1>
                    <p className="text-center mb-4">A collection of my work in AI, mobile development, and software engineering.</p>
                </div>
            </section>

            <section className="featured-projects">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="masonry-grid-3">
                        {featuredProjects.map((project) => (
                            <ProjectCard project={project} key={project.title} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="professional-projects">
                <div className="container">
                    <h2 className="section-title">Other Professional Works</h2>
                    <div className="masonry-grid-3">
                        {professionalProjects.map((project) => (
                            <ProjectCard project={project} key={project.title} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="personal-projects">
                <div className="container">
                    <h2 className="section-title">More Personal Projects</h2>
                    <div className="masonry-grid-3">
                        {personalProjects.map((project) => (
                            <ProjectCard project={project} key={project.title} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
