import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Smartphone, Globe, Code } from 'lucide-react';
import '../styles/projects.css';

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

            <section className="professional-projects">
                <div className="container">
                    <h2 className="section-title">Professional Projects</h2>
                    <div className="grid grid-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Cartoon AI - AI Art Generator</h4>
                                    <div className="project-links">
                                        <a href="https://apps.apple.com/us/app/cartoon-ai-ai-art-generator/id6469111220" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-app-store"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Developed ML and AI pipelines using diffusion models</li>
                                    <li>Implemented deep learning algorithms for image-to-cartoon conversion</li>
                                    <li>Optimized performance for seamless processing</li>
                                    <li>Ensured high-quality, scalable output results</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Background Remover</h4>
                                    <div className="project-links">
                                        <a href="https://play.google.com/store/apps/details?id=com.braincraftapps.droid.bgremover" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-google-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Developed AI-powered background removal algorithms</li>
                                    <li>Implemented efficient image processing techniques</li>
                                    <li>Created optimized image manipulation pipelines</li>
                                    <li>Enhanced performance for various device capabilities</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>No Crop - Video & Pictures Fit</h4>
                                    <div className="project-links">
                                        <a href="https://apps.apple.com/us/app/no-crop-video-pictures-fit/id1333491559" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-app-store"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Implemented AI Photo Enhancer and Expander features</li>
                                    <li>Developed Image Upscale and Deblur algorithms</li>
                                    <li>Created AI Denoise and Low-Light Enhancement</li>
                                    <li>Built Old Photos Restore and Face Restore capabilities</li>
                                    <li>Optimized image processing for high-quality results</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>SlideShow Maker with Music Fx</h4>
                                    <div className="project-links">
                                        <a href="https://apps.apple.com/us/app/slideshow-maker-with-music-fx/id1265026847" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-app-store"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Developed filters using Metal framework for iOS</li>
                                    <li>Implemented high-performance image processing</li>
                                    <li>Created custom GLSL shaders for effects</li>
                                    <li>Optimized rendering pipelines for smooth transitions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>GIF Maker</h4>
                                    <div className="project-links">
                                        <a href="https://play.google.com/store/apps/details?id=com.braincraftapps.droid.gifmaker" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-google-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Developed video to GIF conversion module</li>
                                    <li>Implemented GIF to video conversion</li>
                                    <li>Created image to video transformation</li>
                                    <li>Optimized performance for smooth conversions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Add Music to Video</h4>
                                    <div className="project-links">
                                        <a href="https://play.google.com/store/apps/details?id=com.braincraftapps.addmusictovideo" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-google-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Developed image-to-video conversion module</li>
                                    <li>Implemented GLSL shaders for OpenGL ES</li>
                                    <li>Created graphics drawing pipeline</li>
                                    <li>Added filters and effects for enhanced visuals</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Video Intro Maker</h4>
                                    <div className="project-links">
                                        <a href="https://play.google.com/store/apps/details?id=com.video_lab.video_intro_maker" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-google-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="project-bullets">
                                    <li>Led project design and architecture</li>
                                    <li>Implemented video decoding and encoding</li>
                                    <li>Developed audio processing capabilities</li>
                                    <li>Maintained clean code and design patterns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="personal-projects">
                <div className="container">
                    <h2 className="section-title">Personal Projects</h2>
                    <div className="grid grid-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Chatbot</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/chatbot" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>An easy-to-use chatbot powered by LLM (Large Language Model) for natural language interactions.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Classification Made Easy</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/classification-made-easy" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A library to make your classification training, validation, and testing process easier and more efficient.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Semantic Image Search</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/semantic-image-search" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A semantic-aware image search tool that uses AI to understand and find relevant images based on meaning.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>On-Device AI</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/ondevice-ai" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>Projects and experiments with on-device AI implementations for mobile applications.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Super Resolution</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/super-resolution" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>AI-powered image super-resolution implementation for enhancing image quality.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Image Manipulation</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/image-manipulation" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>Collection of open-source works related to image manipulation and processing.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>OpenGL ES</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/Open-GL-ES" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A collection of OpenGL ES examples and implementations for Android.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Video to Audio Converter</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/videotoaudioconverter" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A tool for converting video files to audio formats with various options.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Video Editor</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/videoeditor" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A video editing tool with various features for video processing.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Weekly Calendar</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/weeklycalendar" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A weekly calendar application for organizing and managing schedules.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Codeforces Solutions</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/stsaikat/Codeforces-problem-solutions" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>Collection of solved Codeforces problems organized by contests.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Diffusion From Scratch</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/tsunipun/diffusion-from-scratch" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>Implementation of diffusion models from scratch, demonstrating deep understanding of generative AI core concepts.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h4>Resolution Estimator</h4>
                                    <div className="project-links">
                                        <a href="https://github.com/tsunipun/resolution-estimator" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <p>A specialized tool for estimating image resolution, essential for high-quality computer vision preprocessing pipelines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
