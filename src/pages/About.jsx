import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Mail, Copy, Cpu, Eye, Smartphone, Activity, Book, Code, BarChart2, Grid } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [emailExpanded, setEmailExpanded] = useState(false);
    const email = 'talukdersunipun@gmail.com';

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(email).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        });
    };

    return (
        <div className="about-page">
            <Helmet>
                <title>About Me - Sunipun Talukder</title>
                <meta name="description" content="Learn more about Sunipun Talukder, his background in Mathematics, and expertise in AI and Software Engineering." />
            </Helmet>
            <section className="section about-hero">
                <div className="container">
                    <div className="profile-header">
                        <div className="profile-container">
                            <img src="/assets/imgs/profile-real.jpeg" alt="Sunipun Talukder" className="profile-image" />
                        </div>
                        <div className="profile-info">
                            <h1>Sunipun Saikat</h1>
                            <p className="lead">AI Engineer & Software Developer</p>
                            <p className="bio">I'm an AI Engineer and software developer, with a strong foundation in mathematics and a passion for solving real-world problems through artificial intelligence. I bring hands-on experience in machine learning, computer vision, and generative AI. Building systems used by millions of users globally.</p>
                            <div className="social-links">
                                <a href="https://github.com/stsaikat" target="_blank" rel="noopener noreferrer">
                                    <Github size={18} />
                                    <span>GitHub</span>
                                </a>
                                <div className="email-container">
                                    <div
                                        className={`email-button ${emailExpanded ? 'expanded' : ''}`}
                                        onClick={() => setEmailExpanded(!emailExpanded)}
                                    >
                                        <Mail size={18} />
                                        <span className="email-text">Email</span>
                                        <span className="email-address">{email}</span>
                                        <button className="copy-button" onClick={handleCopy}>
                                            <Copy size={16} />
                                        </button>
                                        <span className={`copy-success ${copySuccess ? 'show' : ''}`}>Copied!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section expertise-section">
                <div className="container">
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <Cpu size={24} color="var(--secondary-color)" />
                            </div>
                            <h3>Generative AI & Diffusion Models</h3>
                            <p>Engineered production-level models for image and video generation, enhancement, and transformation. Extensive experience in text-to-image, text-to-gif, image-to-video, and faceswap pipelines.</p>
                        </div>

                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <Eye size={24} color="var(--secondary-color)" />
                            </div>
                            <h3>Computer Vision Applications</h3>
                            <p>Deployed scalable models for segmentation, classification, denoising, and super-resolution, impacting over 10 million users through commercial apps like Cartoon AI.</p>
                        </div>

                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <Smartphone size={24} color="var(--secondary-color)" />
                            </div>
                            <h3>Mobile & Multimedia Engineering</h3>
                            <p>From Android internals to OpenGL rendering, built multimedia modules in Java/Kotlin/C++ optimizing performance for devices across the spectrum.</p>
                        </div>

                        <div className="expertise-card">
                            <div className="expertise-icon">
                                <Activity size={24} color="var(--secondary-color)" />
                            </div>
                            <h3>Research & R&D Pipelines</h3>
                            <p>Experienced in training and fine-tuning ML models with PyTorch, Transformers, and VectorDBs, including work on semantic-aware image search and custom image classification pipelines.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section experience-section">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2>Professional Experience</h2>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <h3>AI Engineer</h3>
                                    <p className="company">BrainCraft Ltd, Dhaka, Bangladesh</p>
                                    <p className="period">December 2022 - Present</p>
                                    <ul className="achievements">
                                        <li>Engineered Generative AI models for image creation in Cartoon.ai, propelling it to top-grossing status</li>
                                        <li>Optimized AI-driven photo enhancement modules, using open-source models, incorporating upscaling, deblurring, denoising, and artifact removal, which improved image quality for over 500K users</li>
                                        <li>Collaborated intensively in developing and deploying a semantic image segmentation model, elevating user experience and delivering precise segmentation functionality to a user base exceeding 10 million</li>
                                        <li>Implemented a comprehensive system for text-to-image and text-to-gif generation using stable diffusion models and Python, leveraging advanced machine learning techniques and image processing algorithms</li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h3>Software Engineer</h3>
                                    <p className="company">BrainCraft Ltd, Dhaka, Bangladesh</p>
                                    <p className="period">January 2022 - November 2022</p>
                                    <ul className="achievements">
                                        <li>Planned and implemented an Image to Video making module using OpenGLES and MediaCodec API for the GIFMaker and Add Music to Video android apps, resulting in over 250k downloads on the Google Play Store</li>
                                        <li>Developed a core video encoder/decoder module using raw C++ libraries and the Android NDK, increasing efficiency on lower-end devices and expanding availability by 22%</li>
                                        <li>Managed and guided a team of four members in the successful development of two feature-rich BgRemover and Slideshow apps, leveraging Android Core functionalities, MVVM architecture, custom rendering techniques, and advanced video encoding/decoding technologies</li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h3>Software Engineer</h3>
                                    <p className="company">LiiLab, Sylhet, Bangladesh</p>
                                    <p className="period">January 2021 - December 2021</p>
                                    <ul className="achievements">
                                        <li>Architected and Programmed the Intro Maker app, leveraging Canvas and Native Android APIs to create stunning intros. Achieved an impressive milestone of over 100k downloads on the Play Store</li>
                                        <li>Optimized GkQuiz's rank list functionality using Firebase Realtime Database and Firestore, achieving a remarkable 4x performance boost. Attracted over 250k users on the Play Store</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body">
                            <h2>Community & Leadership</h2>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <h3>Admin & Community Leader</h3>
                                    <p className="company">Shuddho Social Org</p>
                                    <p className="period">Present</p>
                                    <ul className="achievements">
                                        <li>Leading community development initiatives and fostering social responsibility.</li>
                                        <li>Organizing events and managing volunteer teams for social impact projects.</li>
                                    </ul>
                                </div>
                                <div className="timeline-item">
                                    <h3>DS & Algorithms Mentor</h3>
                                    <p className="company">Independent</p>
                                    <ul className="achievements">
                                        <li>Mentored over 200+ students in Data Structures and Algorithms.</li>
                                        <li>Guided students to success in competitive programming and technical interviews.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body">
                            <h2>Education</h2>
                            <div className="education">
                                <div className="education-header">
                                    <h3>Shahjalal University of Science And Technology</h3>
                                    <p className="education-period">Bachelor's in Mathematics (2015 - 2020)</p>
                                </div>
                                <div className="relevant-courses">
                                    <h4>Relevant Coursework</h4>
                                    <div className="course-grid">
                                        <div className="course-category">
                                            <div className="category-header">
                                                <Book size={18} />
                                                <h5>Mathematics & Theoretical Foundations</h5>
                                            </div>
                                            <div className="course-tags">
                                                <span className="course-tag">Linear Algebra</span>
                                                <span className="course-tag">Calculus I, II, III</span>
                                                <span className="course-tag">Real Analysis I, II</span>
                                                <span className="course-tag">Complex Analysis</span>
                                                <span className="course-tag">Differential Equations</span>
                                                <span className="course-tag">Discrete Mathematics</span>
                                                <span className="course-tag">Number Theory</span>
                                                <span className="course-tag">Abstract Algebra</span>
                                                <span className="course-tag">General Topology</span>
                                                <span className="course-tag">Lattice Theory</span>
                                                <span className="course-tag">Differential Geometry</span>
                                            </div>
                                        </div>

                                        <div className="course-category">
                                            <div className="category-header">
                                                <Code size={18} />
                                                <h5>Computer Science & Programming</h5>
                                            </div>
                                            <div className="course-tags">
                                                <span className="course-tag">Data Structures and Algorithms</span>
                                                <span className="course-tag">Object-Oriented Programming</span>
                                                <span className="course-tag">Database Management Systems</span>
                                                <span className="course-tag">Operating Systems</span>
                                                <span className="course-tag">Computer Networks</span>
                                                <span className="course-tag">Software Engineering</span>
                                                <span className="course-tag">Web Development</span>
                                                <span className="course-tag">Mobile App Development</span>
                                            </div>
                                        </div>

                                        <div className="course-category">
                                            <div className="category-header">
                                                <BarChart2 size={18} />
                                                <h5>Statistics & Probability</h5>
                                            </div>
                                            <div className="course-tags">
                                                <span className="course-tag">Probability Theory</span>
                                                <span className="course-tag">Statistical Inference</span>
                                                <span className="course-tag">Regression Analysis</span>
                                                <span className="course-tag">Time Series Analysis</span>
                                                <span className="course-tag">Stochastic Processes</span>
                                                <span className="course-tag">Bayesian Statistics</span>
                                            </div>
                                        </div>

                                        <div className="course-category">
                                            <div className="category-header">
                                                <Grid size={18} />
                                                <h5>Applied Mathematics</h5>
                                            </div>
                                            <div className="course-tags">
                                                <span className="course-tag">Numerical Analysis</span>
                                                <span className="course-tag">Optimization Theory</span>
                                                <span className="course-tag">Mathematical Modeling</span>
                                                <span className="course-tag">Operations Research</span>
                                                <span className="course-tag">Graph Theory</span>
                                                <span className="course-tag">Computational Mathematics</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills mt-4">
                                <h3>Technical Skills</h3>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">AI & Machine Learning</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Deep Learning</span>
                                        <span className="skill-tag">Diffusion Models</span>
                                        <span className="skill-tag">LLM</span>
                                        <span className="skill-tag">Computer Vision</span>
                                        <span className="skill-tag">Image Processing</span>
                                        <span className="skill-tag">Super Resolution</span>
                                        <span className="skill-tag">Image Enhancement</span>
                                        <span className="skill-tag">Semantic Image Understanding</span>
                                        <span className="skill-tag">AI Model Optimization</span>
                                        <span className="skill-tag">On-Device AI</span>
                                        <span className="skill-tag">CNN</span>
                                        <span className="skill-tag">RNN</span>
                                        <span className="skill-tag">Transformer</span>
                                        <span className="skill-tag">Image Classification</span>
                                        <span className="skill-tag">Image Segmentation</span>
                                        <span className="skill-tag">Image Colorization</span>
                                        <span className="skill-tag">Face Swap</span>
                                        <span className="skill-tag">Inpainting</span>
                                        <span className="skill-tag">Outpainting</span>
                                        <span className="skill-tag">Text-to-Image</span>
                                        <span className="skill-tag">Image-to-Image</span>
                                        <span className="skill-tag">Image-to-Video</span>
                                        <span className="skill-tag">Video-to-Video</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4 className="skill-category-title">Mobile Development</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Android Development</span>
                                        <span className="skill-tag">iOS Development</span>
                                        <span className="skill-tag">Metal Framework</span>
                                        <span className="skill-tag">OpenGL ES</span>
                                        <span className="skill-tag">GLSL Shaders</span>
                                        <span className="skill-tag">MediaCodec API</span>
                                        <span className="skill-tag">Android NDK</span>
                                        <span className="skill-tag">RenderScript</span>
                                        <span className="skill-tag">Kotlin</span>
                                        <span className="skill-tag">Swift</span>
                                    </div>
                                </div>

                                <div className="skill-category">
                                    <h4 className="skill-category-title">Programming Languages</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Python</span>
                                        <span className="skill-tag">Java</span>
                                        <span className="skill-tag">C++</span>
                                        <span className="skill-tag">Kotlin</span>
                                        <span className="skill-tag">Swift</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">ML & Data Science Tools</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">PyTorch</span>
                                        <span className="skill-tag">NumPy</span>
                                        <span className="skill-tag">Scikit-learn</span>
                                        <span className="skill-tag">OpenCV</span>
                                        <span className="skill-tag">Matplotlib</span>
                                        <span className="skill-tag">Pillow</span>
                                        <span className="skill-tag">Docker</span>
                                        <span className="skill-tag">FastAPI</span>
                                        <span className="skill-tag">Gradio</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Databases</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">MySQL</span>
                                        <span className="skill-tag">SQLite</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Software Engineering</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Agile Development</span>
                                        <span className="skill-tag">MVVM Architecture</span>
                                        <span className="skill-tag">MVC Architecture</span>
                                        <span className="skill-tag">GitHub</span>
                                        <span className="skill-tag">Bitbucket</span>
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Algorithms & Data Structures</h4>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Data Structures</span>
                                        <span className="skill-tag">Algorithms</span>
                                        <span className="skill-tag">Dynamic Programming</span>
                                        <span className="skill-tag">Number Theory</span>
                                        <span className="skill-tag">Probabilities</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
